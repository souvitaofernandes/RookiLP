import { MessageSquare, Brain, BarChart3, type LucideIcon } from "lucide-react"

type Step = {
  number: string
  Icon: LucideIcon
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: "01",
    Icon: MessageSquare,
    title: "O cliente envia uma suspeita",
    description: "Mensagem, link, print ou situação recebida por WhatsApp, SMS, e-mail ou rede social.",
  },
  {
    number: "02",
    Icon: Brain,
    title: "A Rooki analisa e orienta",
    description:
      "A IA classifica o risco, explica o motivo e recomenda a próxima ação em linguagem simples.",
  },
  {
    number: "03",
    Icon: BarChart3,
    title: "A empresa recebe inteligência agregada",
    description:
      "Os golpes analisados viram dados sobre ameaças, padrões, canais e temas que atacam sua base.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            Como a Rooki entra na operação do parceiro.
          </h2>
        </div>

        <div className="relative mt-12 md:mt-16">
          <div
            aria-hidden
            className="hidden lg:block absolute top-[58px] left-[8%] right-[8%] h-px bg-rooki-gradient opacity-60"
          />

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
            {STEPS.map((s) => (
              <li key={s.number} className="relative bg-rooki-bg border border-rooki-border rounded-xl p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-[24px] leading-none">
                    <span className="text-rooki-gradient">{s.number}</span>
                  </span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-rooki-border bg-rooki-bg-secondary">
                    <s.Icon size={20} className="text-rooki-cyan" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-6 font-display font-semibold text-[18px] leading-snug text-rooki-text">{s.title}</h3>
                <p className="mt-3 font-body text-[14px] leading-relaxed text-rooki-text-secondary">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
