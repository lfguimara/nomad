import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Destinos from "@/components/Destinos";
import Cardapio from "@/components/Cardapio";
import HappyHour from "@/components/HappyHour";
import Eventos from "@/components/Eventos";
import Visite from "@/components/Visite";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Destinos />
        <Cardapio />
        <HappyHour />
        <Eventos />
        <Visite />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
