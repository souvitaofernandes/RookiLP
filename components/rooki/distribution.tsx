import { Building2, Smartphone, ShieldCheck, Wallet, type LucideIcon } from "lucide-react"

type Card = { Icon: LucideIcon; label: string; sub: string }

const CARDS: Card[] = [
  { Icon: Building2, label: "Fintechs e bancos", sub: "Proteção para clientes contra golpes via PIX e falsa central." },
  { Icon: Smartphone, label: "Telecoms", sub: "Defesa para a base contra smishing e fraudes em massa." },
  { Icon: ShieldCheck, label: "Seguradoras", sub: "Sua marca não vira isca de falso corretor ou sinistro forjado." },
  { Icon: Wallet, label: "Benefícios corporativos", sub: "Proteção digital como benefício para colaboradores." },
]

export function Distribution() {
  return (
    <section id="empresas" className="relative py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <span className="inline-block font-body font-medium text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-rooki-cyan mb-5">
            Modelo B2B2C
          </span>
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            Distribuída por quem o usuário já confia.
          </h2>
          <p className="mt-5 font-body text-[16px] md:text-[18px] leading-relaxed text-rooki-text-secondary text-pretty">
            A Rooki pode ser oferecida por bancos, fintechs, telecoms, seguradoras e plataformas de benefícios como
            uma camada de proteção digital para seus clientes.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <div
              key={c.label}
              className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-6 flex flex-col gap-4"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-rooki-border bg-rooki-bg">
                <c.Icon size={20} className="text-rooki-cyan" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-[16px] md:text-[17px] text-rooki-text leading-snug">
                  {c.label}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-rooki-text-secondary">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
