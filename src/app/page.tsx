import Hero from "@/components/Hero"
import DetailsSection from "@/components/DetailsSection"
import FlipCard from "@/components/FlipCard"
import RSVPSection from "@/components/RSVPSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <DetailsSection />
      <FlipCard />
      <RSVPSection />
      <Footer />
    </main>
  )
}
