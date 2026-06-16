import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SustainabilityHero from "@/components/SustainabilityHero/SustainabilityHero";
import SustainabilityOverview from "@/components/SustainabilityOverview/SustainabilityOverview";
import RelatedProjects from "@/components/RelatedProjects/RelatedProjects";
import SustainabilityInitiatives from "@/components/SustainabilityInitiatives/SustainabilityInitiatives";
import SustainabilityBlogs from "@/components/SustainabilityBlogs/SustainabilityBlogs";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import schaefflerSolarImg from "@/assets/images/services/epc/epc-solar-rooftop.webp";

export const metadata = {
  title: "Sustainability | Neo Heights",
  description:
    "At Neo Heights, sustainability is key in project execution, from efficient planning to industrial infrastructure. We commit to responsible engineering that helps businesses grow while reducing environmental impact.",
};

export default function SustainabilityPage() {
  return (
    <main>
      <Header />
      <SustainabilityHero />
      <SustainabilityOverview />
      <RelatedProjects
        projectSlugs={["schaeffler-india-limited", "tata-electronics"]}
        imageOverrides={{ "schaeffler-india-limited": schaefflerSolarImg }}
      />
      <SustainabilityInitiatives />
      <SustainabilityBlogs />
      <Contact showMap={false} />
      <FAQ />
      <Footer showTopStrip />
    </main>
  );
}
