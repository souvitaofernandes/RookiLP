import { ArrowUpRight } from "lucide-react"

type Stat = {
  number: string
  label: string
  source: string
  href?: string
}

const STATS: Stat[] = [
  {
    number: "R$ 10,1 bi",
    label: "perdidos em golpes em 2024",
    source: "Febraban · Congresso de Prevenção a Fraudes (2025)",
    href: "https://www.poder360.com.br/poder-economia/golpes-causaram-prejuizo-de-r-101-bi-em-2024-diz-febraban/",
  },
  {
    number: "1 a cada 3s",
    label: "tentativa de fraude bancária",
    source: "Painel de Fraudes · Governo Federal + Febraban (2025)",
    href: "https://www.otempo.com.br/politica/governo/2025/12/3/governo-e-febraban-lancam-plano-de-combate-a-fraudes-bancarias-digitais",
  },
  {
    number: "51%",
    label: "dos brasileiros foram vítimas em 2024",
    source: "Painel de Fraudes Bancárias Digitais · 2025",
  },
  {
    number: "2º",
    label: "país com mais tentativas de fraude do mundo",
    source: "Painel de Fraudes Bancárias Digitais · 2025",
  },
]

export function Stats() {
  return (
    <section id="problema" className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            O golpe acontece no momento da pressão.
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-7 md:p-8 flex flex-col"
            >
              <div className="font-display font-bold text-[40px] md:text-[48px] leading-none tracking-[-0.02em]">
                <span className="text-rooki-gradient">{s.number}</span>
              </div>
              <div className="mt-4 font-display font-semibold text-[16px] md:text-[18px] leading-snug text-rooki-text">
                {s.label}
              </div>

              <div className="mt-auto pt-6">
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 font-body text-[12px] leading-snug text-rooki-text-muted hover:text-rooki-text-secondary transition-colors"
                  >
                    <span className="underline underline-offset-2 decoration-rooki-border group-hover:decoration-rooki-cyan">
                      {s.source}
                    </span>
                    <ArrowUpRight size={12} className="shrink-0 mt-[3px]" strokeWidth={2} />
                  </a>
                ) : (
                  <span className="font-body text-[12px] leading-snug text-rooki-text-muted">{s.source}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 md:mt-12 mx-auto max-w-[800px] text-center font-body text-[15px] md:text-[16px] leading-relaxed text-rooki-text-secondary text-pretty">
          Quando o usuário está em dúvida, sua empresa precisa estar presente antes do clique, do pagamento ou da
          resposta.
        </p>
      </div>
    </section>
  )
}
