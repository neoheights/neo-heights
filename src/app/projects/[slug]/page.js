import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProjectDetailHero from "@/components/ProjectDetailHero/ProjectDetailHero";
import ProjectDetailInfo from "@/components/ProjectDetailInfo/ProjectDetailInfo";
import ProjectScopeGallery from "@/components/ProjectScopeGallery/ProjectScopeGallery";
import ProjectAwards from "@/components/ProjectAwards/ProjectAwards";
import RelatedProjects from "@/components/RelatedProjects/RelatedProjects";
import { projects, getProjectBySlug } from "@/data/projects";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Neo Heights`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main>
      <Header />
      <ProjectDetailHero project={project} />
      <ProjectDetailInfo project={project} />
      <ProjectScopeGallery project={{ ...project, gallery: [] }} />
      <ProjectAwards />
      <RelatedProjects currentSlug={project.slug} />
      <Contact showMap={false} />
      <FAQ />
      <Footer showTopStrip />
    </main>
  );
}
