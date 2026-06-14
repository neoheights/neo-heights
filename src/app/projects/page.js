import Header from "@/components/Header/Header";
import ProjectsHero from "@/components/ProjectsHero/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";
import Blogs from "@/components/Blogs/Blogs";
import Journey from "@/components/Journey/Journey";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Projects | Neo Heights",
  description:
    "Explore Neo Heights' portfolio of industrial, EPC, civil, PEB, and MEP projects delivered across leading organizations and industries.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <ProjectsHero />
      <ProjectsGrid />
      <Blogs />
      <Journey />
      <Footer showTopStrip />
    </main>
  );
}
