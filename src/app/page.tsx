import Hero from "@/components/Hero";
import FeatureRow from "@/components/FeatureRow";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureRow />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
