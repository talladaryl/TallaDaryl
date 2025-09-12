import HorizontalNavigation from "@/components/HorizontalNavigation";
import Navigation from "@/components/Navigation";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from "@/components/Skills";
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      <HorizontalNavigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
