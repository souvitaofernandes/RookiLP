import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUB = path.resolve(__dirname, "../public")

/**
 * Each founder has its own source photo with its own aspect ratio, framing, and lighting.
 * We crop a square around the face so the resulting circular avatars look like a single set.
 *
 * cx, cy   : face center expressed as a fraction of the source image's width/height
 * cropFrac : square side as a fraction of the source's smaller dimension
 */
const TARGETS = [
  // Portrait orientation, head in upper-center, doorframe on the left, plain wall behind.
  // cx 0.50 centers horizontally, cy 0.36 pushes the face slightly above the avatar center.
  { name: "victor", src: "founder-victor-src.jpg", cx: 0.5, cy: 0.36, cropFrac: 0.62 },
  // ~Square selfie, head upper-center, busy city background — tighten to face/shoulders only.
  { name: "larissa", src: "founder-larissa-src.jpg", cx: 0.42, cy: 0.43, cropFrac: 0.58 },
  // Studio headshot. Tighten so face scale matches the other two avatars.
  { name: "hudson", src: "founder-hudson-src.jpg", cx: 0.5, cy: 0.45, cropFrac: 0.78 },
]

async function main() {
  for (const t of TARGETS) {
    const srcPath = path.join(PUB, t.src)
    const meta = await sharp(srcPath).metadata()
    const W = meta.width
    const H = meta.height
    const side = Math.round(Math.min(W, H) * t.cropFrac)
    const cx = Math.round(t.cx * W)
    const cy = Math.round(t.cy * H)
    let left = cx - Math.round(side / 2)
    let top = cy - Math.round(side / 2)
    left = Math.max(0, Math.min(W - side, left))
    top = Math.max(0, Math.min(H - side, top))

    const out = path.join(PUB, `founder-${t.name}.png`)
    await sharp(srcPath)
      .extract({ left, top, width: side, height: side })
      .resize(640, 640, { fit: "cover" })
      .png({ quality: 92 })
      .toFile(out)
    console.log(`${t.name} ${W}x${H} -> 640x640 (left=${left}, top=${top}, side=${side})`)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
