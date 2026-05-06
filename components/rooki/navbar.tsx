"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Wordmark } from "./wordmark"
import { mailtoFalar } from "@/lib/rooki"

const NAV_LINKS = [
  { href: "#empresas", label: "Para empresas" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#valor", label: "Produto" },
  { href: "#time", label: "Time" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "bg-rooki-bg/90 backdrop-blur border-b border-rooki-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Rooki — início">
          <Wordmark />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[14px] font-medium text-rooki-text-secondary hover:text-rooki-text transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <a
            href={mailtoFalar}
            className="bg-rooki-gradient text-[#0A0A12] text-[14px] font-semibold px-5 py-2.5 rounded-lg hover:scale-[1.02] transition-transform shadow-[0_0_0_0_transparent] hover:shadow-[0_8px_24px_-8px_rgba(4,197,255,0.5)]"
          >
            Falar com a Rooki
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-rooki-text"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-rooki-border bg-rooki-bg">
          <div className="mx-auto max-w-[1200px] px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-[15px] font-medium text-rooki-text-secondary hover:text-rooki-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href={mailtoFalar}
              className="mt-2 bg-rooki-gradient text-[#0A0A12] text-[14px] font-semibold px-4 py-3 rounded-lg text-center"
            >
              Falar com a Rooki
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
