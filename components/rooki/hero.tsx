import { ROOKI, mailtoFalar } from "@/lib/rooki"

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-10 items-center">
        {/* Left */}
        <div className="relative z-10">
          <span className="inline-block font-body font-medium text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-rooki-cyan mb-6">
            Camada antifraude · WhatsApp · B2B2C
          </span>

          <h1 className="font-display font-bold text-rooki-text text-[36px] sm:text-[44px] lg:text-[58px] leading-[1.05] tracking-[-0.02em] text-balance">
            Proteja seus clientes contra golpes digitais antes da decisão de risco.
          </h1>

          <p className="mt-6 font-body text-[16px] md:text-[18px] leading-relaxed text-rooki-text-secondary max-w-[560px] text-pretty">
            A Rooki é uma camada antifraude via WhatsApp que analisa mensagens suspeitas, orienta o usuário em segundos
            e gera inteligência sobre os golpes que atacam sua base.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <a
              href={mailtoFalar}
              className="inline-flex items-center justify-center bg-rooki-gradient text-[#0A0A12] font-semibold text-[15px] px-6 py-3.5 rounded-lg hover:scale-[1.02] transition-transform shadow-[0_8px_24px_-12px_rgba(4,197,255,0.6)]"
            >
              Quero conhecer a Rooki
            </a>
            <a
              href={ROOKI.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-rooki-border text-rooki-text font-medium text-[15px] px-6 py-3.5 rounded-lg hover:border-rooki-purple transition-colors"
            >
              Testar no WhatsApp
            </a>
          </div>
        </div>

        {/* Right — phone mockup with WhatsApp screenshot */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div
              className="bg-rooki-gradient opacity-[0.35] blur-[120px] rounded-full"
              style={{ width: "520px", height: "520px" }}
            />
          </div>

          <div className="relative w-[280px] sm:w-[320px] aspect-[320/650] rounded-[40px] border border-rooki-border bg-rooki-bg-secondary p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-2xl bg-rooki-bg z-10" />
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black">
              <img
                src="/bot-screenshot.png"
                alt="Conversa real com a Rooki no WhatsApp identificando uma tentativa de phishing"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
