import Image from "next/image"

type Founder = {
  name: string
  role: string
  bio: string
  photo: string
}

const FOUNDERS: Founder[] = [
  {
    name: "Vitão Fernandes",
    role: "CEO",
    bio: "Segurança da Informação e Data Protection. Especialista em proteção de dados e Microsoft Purview.",
    photo: "/founder-victor.png",
  },
  {
    name: "Hudson Luiz",
    role: "CTO",
    bio: "Engenheiro de plataformas e arquiteto de IA. Lidera a stack de detecção e privacidade da Rooki.",
    photo: "/founder-hudson.png",
  },
  {
    name: "Larissa Paixão",
    role: "CMO",
    bio: "Marca e go-to-market para produtos de educação em segurança digital.",
    photo: "/founder-larissa.png",
  },
]

export function Team() {
  return (
    <section id="time" className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em]">
          Time fundador.
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {FOUNDERS.map((f) => (
            <article
              key={f.name}
              className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-6 md:p-7 flex flex-col items-center text-center"
            >
              <div className="p-[2.5px] rounded-full bg-rooki-gradient shrink-0">
                <div className="rounded-full bg-rooki-bg p-1">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white">
                    <Image
                      src={f.photo}
                      alt={`Foto de ${f.name}`}
                      fill
                      sizes="112px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <h3 className="mt-5 font-display font-semibold text-[18px] md:text-[20px] text-rooki-text leading-tight">
                {f.name}
              </h3>
              <p className="mt-1 font-body font-medium text-[12px] uppercase tracking-[0.08em] text-rooki-cyan">
                {f.role}
              </p>

              <p className="mt-3 font-body text-[14px] leading-relaxed text-rooki-text-secondary">{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
