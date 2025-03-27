import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCategories from "@/components/FeatureCategories";
import FeaturedDeals from "@/components/FeaturedDeals";
import BrandBrowser from "@/components/BrandBrowser";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <HeroSection />
      <FeatureCategories />
      <FeaturedDeals />
      <BrandBrowser />
      <CTASection />
      <Footer />
    </div>
  );
}
