import { Hero3DWebGL as HeroSection } from "@/components/hero-webgl"
import { TechnologySection } from "@/components/technology-section"
import { AboutSection } from "@/components/about-section"
import { ResultsSection } from "@/components/results-section"
import { FeaturesSection } from "@/components/features-section"
import { GuaranteesSection } from "@/components/guarantees-section"
import { MentorsSection } from "@/components/mentors-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SeoTextBlock } from "@/components/seo-text-block"
import { ChatWidget } from "@/components/chat-widget"

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <TechnologySection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ResultsSection />
        <div className="section-divider" />
        <GuaranteesSection />
        <div className="section-divider" />
        <MentorsSection />
        <div className="section-divider" />
        <FeaturesSection />
        <div className="section-divider" />
        <SafetySection />
        <div className="section-divider" />
        <TestimonialsSection />
        <div className="section-divider" />
        <FAQSection />
        <CTASection />
      </main>
      <SeoTextBlock />
      <Footer />
      <ChatWidget />
    </div>
  )
}