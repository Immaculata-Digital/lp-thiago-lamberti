import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dialectica from "@/components/Dialectica";
import Diferencial from "@/components/Diferencial";
import Sobre from "@/components/Sobre";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <RevealOnScroll>
        <Dialectica />
      </RevealOnScroll>
      <RevealOnScroll>
        <Diferencial />
      </RevealOnScroll>
      <RevealOnScroll>
        <Sobre />
      </RevealOnScroll>
      <RevealOnScroll>
        <CTA />
      </RevealOnScroll>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
