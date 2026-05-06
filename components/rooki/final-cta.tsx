import { ROOKI, mailtoFalar } from "@/lib/rooki"

export function FinalCTA() {
  return (
    <section className="relative py-[72px] md:py-[120px] border-t border-rooki-border overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="bg-rooki-gradient opacity-[0.18] blur-[140px] rounded-full"
          style={{ width: "640px", height: "640px" }}
        />
      </div>

      <div className="mx-auto max-w-[760px] px-6 text-center">
        <h2 className="font-display font-bold text-rooki-text text-[30px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-balance">
          Proteja sua base antes do golpe virar prejuízo.
        </h2>
        <p className="mt-5 font-body text-[16px] md:text-[17px] leading-relaxed text-rooki-text-secondary text-pretty">
          Leve a Rooki para seus clientes como uma camada de proteção, orientação e inteligência antifraude.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={mailtoFalar}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-rooki-gradient text-[#0A0A12] font-semibold text-[16px] px-8 py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-[0_12px_32px_-12px_rgba(4,197,255,0.55)]"
          >
            Falar com a Rooki
          </a>

          <a
            href={ROOKI.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-rooki-border text-rooki-text font-semibold text-[16px] px-8 py-4 rounded-lg hover:border-rooki-purple transition-colors"
          >
            Testar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
