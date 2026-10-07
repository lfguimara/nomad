import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

// Botão fixo no canto da tela para falar com o Nomad pelo WhatsApp
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Nomad pelo WhatsApp"
      className="group fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgb(0_0_0/0.55)] transition-transform duration-300 hover:scale-110 focus-visible:ring-4 focus-visible:ring-[#25d366]/40 focus-visible:outline-none"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-20 motion-reduce:hidden" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
