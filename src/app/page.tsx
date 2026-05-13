import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HistoireSection from "@/components/HistoireSection";
import CarteSection from "@/components/CarteSection";
import EpicerieSection from "@/components/EpicerieSection";
import GalerieSection from "@/components/GalerieSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grain-overlay">
      <Navigation />
      <HeroSection />
      <HistoireSection />
      <CarteSection />
      <EpicerieSection />
      <GalerieSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
