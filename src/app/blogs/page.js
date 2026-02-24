import BlogHero from "@/components/BlogHero/BlogHero";
import Blogs from "@/components/Blogs/Blogs";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function BlogsMain() {
  return (
    <main>
      <Header />
      <BlogHero />
      <Blogs />
      <FAQ showBannerOnly={true} />
      <Footer />
    </main>
  );
}
