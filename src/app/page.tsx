import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Diferencial from "@/components/Diferencial";
import Sobre from "@/components/Sobre";
import CTA from "@/components/CTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicos />
      <Diferencial />
      <Sobre />
      <CTA />
      <WhatsAppButton />
    </main>
  );
}
