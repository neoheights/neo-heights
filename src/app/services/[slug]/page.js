import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import ServiceTabs from "@/components/ServiceTabs/ServiceTabs";
import ServiceHero from "@/components/ServiceHero/ServiceHero";
import Blogs from "@/components/Blogs/Blogs";
import FAQ from "@/components/FAQ/FAQ";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Footer from "@/components/Footer/Footer";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Neo Heights" };
  }

  return {
    title: `${service.title} | Neo Heights`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />
      <ServiceTabs />
      <ServiceHero service={service} />
      <Blogs />
      <FAQ hideCta={true} />
      <TrustedBy />
      <Footer />
    </main>
  );
}
