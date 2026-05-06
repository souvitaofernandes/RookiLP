type Card = {
  number: string
  title: string
  body: string
}

const CARDS: Card[] = [
  {
    number: "MVP",
    title: "Em produção",
    body: "Motor de detecção rodando no WhatsApp gerando dado real.",
  },
  {
    number: "+200",
    title: "Mensagens analisadas",
    body: "Casos reais já classificados pela taxonomia da Rooki.",
  },
  {
    number: "Real",
    title: "Usuários testando",
    body: "Pessoas reais usando, validando e dando feedback contínuo.",
  },
  {
    number: "Top 10",
    title: "StartupOne · Rock New Ventures Batch #10",
    body: "Acelerados pela Rock New Ventures na FIAP, em 2026.",
  },
]

export function Traction() {
  return (
    <section className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          <span className="inline-block font-body font-medium text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-rooki-cyan mb-5">
            Tração
          </span>
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            Em piloto, com uso real.
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <div key={c.title} className="bg-rooki-bg-secondary border border-rooki-border rounded-xl p-6 md:p-7">
              <div className="font-display font-bold text-[32px] md:text-[36px] leading-none tracking-[-0.02em]">
                <span className="text-rooki-gradient">{c.number}</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-[15px] md:text-[16px] leading-snug text-rooki-text">
                {c.title}
              </h3>
              <p className="mt-2 font-body text-[14px] leading-relaxed text-rooki-text-secondary">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
