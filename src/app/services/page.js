import Header from "@/components/Header/Header";
import ServicesIntro from "@/components/ServicesIntro/ServicesIntro";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import Achievements from "@/components/Achievements/Achievements";
import FAQ from "@/components/FAQ/FAQ";
import Journey from "@/components/Journey/Journey";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Services | Neo Heights",
  description:
    "Explore Neo Heights' full range of construction services — civil engineering, PEB structures, MEP, interior fit-outs, land development, and EPC contracting.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesIntro />
      <ServicesGrid />
      <Blogs />
      <Contact showMap={false} />
      <Achievements />
      <FAQ hideCta={true} />
      <Journey />
      <TrustedBy />
      <Footer />
    </main>
  );
}
