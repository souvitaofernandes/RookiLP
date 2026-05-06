import { MessageCircle, ShieldOff, GraduationCap, BarChart3, type LucideIcon } from "lucide-react"

type Card = { Icon: LucideIcon; title: string; body: string }

const CARDS: Card[] = [
  {
    Icon: MessageCircle,
    title: "Proteção no canal certo",
    body: "O usuário já usa WhatsApp. A Rooki entra onde a dúvida acontece.",
  },
  {
    Icon: ShieldOff,
    title: "Menos exposição da marca",
    body: "Ajuda clientes a identificarem golpes que usam o nome da empresa.",
  },
  {
    Icon: GraduationCap,
    title: "Educação embutida",
    body: "Cada análise também ensina o usuário a reconhecer sinais de fraude.",
  },
  {
    Icon: BarChart3,
    title: "Inteligência antifraude",
    body: "Golpes recebidos viram dados para produto, segurança, CX e prevenção.",
  },
]

export function ValueForCompanies() {
  return (
    <section id="valor" className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            Por que empresas devem oferecer a Rooki.
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-6 flex flex-col gap-4"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-rooki-border bg-rooki-bg">
                <c.Icon size={20} className="text-rooki-cyan" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-[16px] md:text-[17px] text-rooki-text leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-rooki-text-secondary">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
