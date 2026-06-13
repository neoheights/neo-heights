import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import { services, getServiceBySlug } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: `${service.title} | Neo Heights`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main>
      <Header />
      <ServiceDetail service={service} />
      <Blogs />
      <Contact showMap={false} />
      <FAQ />
      <Footer showTopStrip />
    </main>
  );
}
