import { Navbar } from "@/components/rooki/navbar"
import { Hero } from "@/components/rooki/hero"
import { Distribution } from "@/components/rooki/distribution"
import { Stats } from "@/components/rooki/stats"
import { HowItWorks } from "@/components/rooki/how-it-works"
import { Demo } from "@/components/rooki/demo"
import { ValueForCompanies } from "@/components/rooki/value-for-companies"
import { CapabilitiesEvolution } from "@/components/rooki/capabilities-evolution"
import { Traction } from "@/components/rooki/traction"
import { FAQ } from "@/components/rooki/faq"
import { Team } from "@/components/rooki/team"
import { FinalCTA } from "@/components/rooki/final-cta"
import { Footer } from "@/components/rooki/footer"

export default function RookiLanding() {
  return (
    <main className="min-h-screen bg-rooki-bg text-rooki-text">
      <Navbar />
      <Hero />
      <Distribution />
      <Stats />
      <HowItWorks />
      <Demo />
      <ValueForCompanies />
      <CapabilitiesEvolution />
      <Traction />
      <FAQ />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  )
}
