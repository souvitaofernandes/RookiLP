import Image from "next/image"

export function Wordmark({
  variant = "white",
  className = "",
}: {
  variant?: "white" | "color"
  className?: string
}) {
  const src =
    variant === "white"
      ? "/rooki-logo-horizontal-white.png"
      : "/rooki-logo-horizontal.png"

  return (
    <Image
      src={src}
      alt="Rooki"
      width={1668}
      height={566}
      priority
      className={`h-7 md:h-8 w-auto select-none ${className}`}
    />
  )
}
