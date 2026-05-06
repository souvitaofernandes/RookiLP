"use client"

import { useState, useEffect } from "react"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("rooki-analytics-consent")) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem("rooki-analytics-consent", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-rooki-bg-secondary border border-rooki-border rounded-xl p-4 shadow-lg">
      <p className="font-body text-[13px] text-rooki-text-secondary leading-relaxed">
        Usamos analytics anônimos para melhorar o site. Sem cookies de rastreamento entre sites.
      </p>
      <button
        onClick={accept}
        className="mt-3 w-full bg-rooki-gradient text-[#0A0A12] font-semibold text-[13px] py-2 rounded-lg hover:scale-[1.02] transition-transform"
      >
        Entendido
      </button>
    </div>
  )
}
