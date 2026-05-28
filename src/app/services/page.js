import Header from "@/components/Header/Header";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Journey from "@/components/Journey/Journey";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Footer from "@/components/Footer/Footer";
import ServicesHero from "@/components/ServicesHero/ServicesHero";

export const metadata = {
  title: "Services | Neo Heights",
  description:
    "Explore Neo Heights' full range of construction services — civil engineering, PEB structures, MEP, interior fit-outs, land development, and EPC contracting.",
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHero />
      <Blogs />
      <Contact showMap={false} />
      <FAQ />
      <Journey />
      <TrustedBy />
      <Footer />
    </main>
  );
}
