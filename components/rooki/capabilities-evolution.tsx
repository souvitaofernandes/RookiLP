import { Check, Sparkles } from "lucide-react"

const TODAY = ["Mensagens suspeitas", "Links e URLs", "Contexto textual", "Orientação antifraude"]
const NEXT = ["Prints e imagens", "Áudios", "Anúncios falsos", "Dashboard corporativo"]

export function CapabilitiesEvolution() {
  return (
    <section className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            Hoje focada no essencial. Evoluindo para novos formatos.
          </h2>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-rooki-border bg-rooki-bg">
                <Check size={16} className="text-rooki-cyan" strokeWidth={2} />
              </span>
              <h3 className="font-display font-semibold text-[14px] uppercase tracking-[0.08em] text-rooki-text-muted">
                Hoje
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {TODAY.map((item) => (
                <li key={item} className="font-body text-[15px] leading-snug text-rooki-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-rooki-border bg-rooki-bg">
                <Sparkles size={16} className="text-rooki-cyan" strokeWidth={1.75} />
              </span>
              <h3 className="font-display font-semibold text-[14px] uppercase tracking-[0.08em] text-rooki-text-muted">
                Em evolução
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {NEXT.map((item) => (
                <li
                  key={item}
                  className="font-body text-[15px] leading-snug text-rooki-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
