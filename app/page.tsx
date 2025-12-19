import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { ReviewsSection } from "@/components/reviews-section"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReviewsSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  )
}
