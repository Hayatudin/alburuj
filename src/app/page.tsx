import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Header */}
      <Navbar />
      
      {/* Landing Layout Container */}
      <main className="flex-grow">
        {/* Jadoo-Inspired Jigsaw Sections */}
        <Hero />
        <Services />
        <Destinations />
        <Process />
        <Testimonials />
        <ContactMap />
      </main>

      {/* Structured Trust-based Footer */}
      <Footer />
    </>
  );
}
