import { Linkedin, Instagram, MessageCircle } from "lucide-react"
import { Wordmark } from "./wordmark"
import { ROOKI } from "@/lib/rooki"

const NAV = [
  { href: "#empresas", label: "Para empresas" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#valor", label: "Produto" },
  { href: "#time", label: "Time" },
  { href: `mailto:${ROOKI.email}`, label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-rooki-bg border-t border-rooki-border pt-[60px] pb-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-[320px]">
            <Wordmark />
            <p className="mt-4 font-body text-[14px] leading-relaxed text-rooki-text-secondary">
              Camada antifraude via WhatsApp, distribuída por empresas que protegem seus clientes.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {NAV.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  className="font-body text-[14px] text-rooki-text-secondary hover:text-rooki-text transition-colors"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-6 border-t border-rooki-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-[13px] text-rooki-text-muted">© 2026 Rooki. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da Rooki"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-rooki-border text-rooki-text-secondary hover:text-rooki-text hover:border-rooki-purple transition-colors"
            >
              <Linkedin size={16} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Rooki"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-rooki-border text-rooki-text-secondary hover:text-rooki-text hover:border-rooki-purple transition-colors"
            >
              <Instagram size={16} strokeWidth={1.75} />
            </a>
            <a
              href={ROOKI.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Rooki"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-rooki-border text-rooki-text-secondary hover:text-rooki-text hover:border-rooki-purple transition-colors"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
