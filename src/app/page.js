import HeroSection from "@/components/home/HeroSection";
import StartSection from "@/components/home/StartSection";
import ContentSection from "@/components/home/ContentSection";
import ProductSection from "@/components/home/ProductSection";
import SecondContentSection from "@/components/home/SecondContentSection";
import PartnerSection from "@/components/home/PartnerSection";
import FormSection from "@/components/home/FormSection";

export default function Home() {
  return (
      <main className="bg-gray-50 overflow-x-hidden">
          <HeroSection/>
          <StartSection/>
          <ContentSection/>
          <ProductSection/>
          <SecondContentSection/>
          <PartnerSection/>
          <FormSection/>
      </main>
  );
}
