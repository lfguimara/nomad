import Image from "next/image";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { mapa, navLinks, site, whatsappLink } from "@/lib/site";
import logo from "../../public/images/logo-redondo.png";

const telefone = "(87) 98831-0109";

// Com Cache Components, new Date() precisa ficar num escopo com cache para a página continuar estática
async function AnoAtual() {
  "use cache";
  return new Date().getFullYear();
}

const titulo = "nav-text mb-5 text-[0.6875rem]! text-gold";
const texto = "font-[family-name:var(--font-gill)] text-[0.9375rem] leading-relaxed text-cream/75";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-[1536px] gap-12 px-[var(--container-padding)] py-16 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr_auto] lg:gap-16 lg:py-20 xl:px-[calc(var(--container-padding)+4rem)]">
        <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-1 lg:flex-col lg:items-start">
          <Image src={logo} alt="Nomad Restaurante" width={84} height={84} className="h-[84px] w-[84px]" />
          <div>
            <p className="font-logo text-xl font-bold tracking-[0.14em] uppercase">{site.name}</p>
            <p className="font-logo text-sm text-cream/60 italic">Sabores do mundo</p>
          </div>
        </div>

        <div>
          <p className={titulo}>Endereço</p>
          <address className={`${texto} not-italic`}>
            {site.endereco.rua}
            <br />
            {site.endereco.bairro}, {site.endereco.cep}
          </address>
          <a
            href={mapa.rota}
            target="_blank"
            rel="noopener noreferrer"
            className="cta mt-3 inline-block underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
          >
            Como chegar
          </a>
        </div>

        <div>
          <p className={titulo}>Contatos</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${texto} flex items-center gap-2 hover:text-cream`}
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
            {telefone}
          </a>
          <p className={`${texto} mt-4`}>
            <span className="block text-cream">Jantar</span>
            {site.hours}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className={titulo}>Navegue</p>
          <ul className={`${texto} grid grid-cols-2 gap-x-6 gap-y-1`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={titulo}>Redes sociais</p>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Nomad"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do Nomad"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 bg-black/25">
        <div className="mx-auto flex max-w-[1536px] flex-col gap-2 px-[var(--container-padding)] py-6 pr-24 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pr-[var(--container-padding)] sm:flex-row sm:items-center sm:justify-between xl:px-[calc(var(--container-padding)+4rem)]">
          <p className="font-[family-name:var(--font-gill)] text-sm text-cream/55">
            © <AnoAtual /> Nomad Restaurante · Todos os direitos reservados
          </p>
          <p className="nav-text text-[0.625rem]! text-cream/40">Petrolina · PE</p>
        </div>
      </div>
    </footer>
  );
}
