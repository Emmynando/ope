import HeroSection from "@/component/Layout/Home/HeroSection";
import Features from "@/component/Layout/Home/Features";
import Benefits from "@/component/Layout/Home/Benefits";
import Plans from "@/component/Layout/Home/Plans";
import Cryptocurrency from "@/component/Layout/Home/Cryptocurrency";
import Testimonials from "@/component/Layout/Home/Testimonials";
import Charts from "@/component/Layout/Home/Charts";
import FAQ from "@/component/Layout/Home/FAQ";
import Footer from "@/component/UI/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Benefits />
      <Plans />
      <Testimonials />
      <Cryptocurrency />
      <Charts />
      <FAQ />
      <Footer />
    </main>
  );
}
