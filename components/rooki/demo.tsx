import { ROOKI } from "@/lib/rooki"

export function Demo() {
  return (
    <section id="demo" className="bg-rooki-bg-secondary border-y border-rooki-border py-[72px] md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-block font-body font-medium text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-rooki-cyan mb-6">
            Prova viva
          </span>
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
            Teste a experiência agora.
          </h2>
          <p className="mt-5 font-body text-[16px] md:text-[17px] leading-relaxed text-rooki-text-secondary max-w-[540px]">
            Mande uma mensagem suspeita para a Rooki e veja como a orientação chega para o usuário final.
          </p>
          <a
            href={ROOKI.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-rooki-gradient text-[#0A0A12] font-semibold text-[15px] px-6 py-3.5 rounded-lg hover:scale-[1.02] transition-transform"
          >
            Testar no WhatsApp
          </a>
        </div>

        {/* Right phone */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[320px] aspect-[320/650] rounded-[40px] p-[2px] ring-rooki-gradient">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-2xl bg-rooki-bg-secondary z-10" />
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black">
              <img
                src="/bot-screenshot.png"
                alt="Demonstração da Rooki classificando golpe no WhatsApp"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
