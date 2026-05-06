import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Item = { q: string; a: string }

const ITEMS: Item[] = [
  {
    q: "Como a Rooki trata falso positivo e falso negativo?",
    a: "Toda análise vem com nível de confiança. Em zona cinzenta, o usuário recebe orientação cautelar, não um veredito. Falsos positivos e negativos são monitorados e usados pra recalibrar a taxonomia.",
  },
  {
    q: "A Rooki substitui ferramentas antifraude existentes?",
    a: "Não. A Rooki opera antes da decisão do usuário, não no fluxo transacional. Complementa o stack antifraude do parceiro entregando clareza no momento da dúvida.",
  },
  {
    q: "Como funciona a responsabilidade compartilhada?",
    a: "Compliance, modelo de responsabilidade e regras de exceção são desenhados em conjunto com o time de cyber do parceiro antes do go-live. Nada entra em produção sem alinhamento documentado.",
  },
  {
    q: "Quais dados são armazenados?",
    a: "Apenas o necessário pra operar e melhorar a detecção. Sem dado pessoal sensível, sem CPF, sem dado bancário. Padrões em conformidade com LGPD e por princípio de minimização.",
  },
  {
    q: "Como a solução pode integrar com canais corporativos?",
    a: "Via WhatsApp Cloud API com número co-branded, ou integrada ao app/canal oficial do parceiro. Painel agregado de inteligência sob roadmap.",
  },
  {
    q: "Como a marca do parceiro aparece na experiência?",
    a: "A interação é co-branded: identidade visual, tom e linguagem do parceiro. A assinatura técnica da Rooki é discreta, no rodapé da resposta.",
  },
]

export function FAQ() {
  return (
    <section className="py-[72px] md:py-[120px] border-t border-rooki-border">
      <div className="mx-auto max-w-[860px] px-6">
        <div className="max-w-[760px]">
          <span className="inline-block font-body font-medium text-[12px] md:text-[14px] uppercase tracking-[0.1em] text-rooki-cyan mb-5">
            Segurança · LGPD · Compliance
          </span>
          <h2 className="font-display font-bold text-rooki-text text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.015em] text-balance">
            Perguntas que times de Segurança, Produto e Compliance fazem.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 md:mt-12 w-full">
          {ITEMS.map((it, idx) => (
            <AccordionItem
              key={it.q}
              value={`item-${idx}`}
              className="border-b border-rooki-border last:border-0"
            >
              <AccordionTrigger className="font-display font-semibold text-[15px] md:text-[17px] text-rooki-text leading-snug py-5 hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-[14px] md:text-[15px] leading-relaxed text-rooki-text-secondary pb-5 pt-0">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
