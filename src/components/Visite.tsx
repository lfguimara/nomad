import { mapa, site, whatsappLink } from "@/lib/site";

const telefone = "(87) 98831-0109";

// Mapa do Google incorporado + cartão de embarque com endereço, horário e contato.
export default function Visite() {
  return (
    <section id="visite" className="scroll-mt-[var(--header-height)] bg-[#151515] text-cream">
      <h2 className="sr-only">Visite o Nomad</h2>

      <div className="relative lg:h-[560px]">
        <iframe
          title="Mapa com a localização do Nomad Restaurante"
          src={mapa.embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[380px] w-full border-0 lg:absolute lg:inset-0 lg:h-full"
        />

        <div className="relative mx-auto max-w-[1536px] px-[var(--container-padding)] lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-8 xl:px-[calc(var(--container-padding)+4rem)]">
          <div className="-mt-10 rounded-[8px] bg-cream p-6 text-ink shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)] sm:p-8 lg:pointer-events-auto lg:mt-0 lg:ml-auto lg:max-w-sm">
            <p className="nav-text text-[0.625rem]! text-brown">Nomad Restaurante PNZ</p>
            <address className="mt-3 font-logo text-xl leading-snug not-italic">
              {site.endereco.rua}
              <br />
              {site.endereco.bairro}
              <br />
              <span className="font-[family-name:var(--font-gill)] text-base text-ink/60">CEP {site.endereco.cep}</span>
            </address>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-dashed border-ink/25 pt-5">
              <div>
                <dt className="nav-text text-[0.625rem]! text-ink/50">Jantar</dt>
                <dd className="mt-1 font-logo">Ter a Dom</dd>
                <dd className="font-logo">18h às 23h</dd>
              </div>
              <div>
                <dt className="nav-text text-[0.625rem]! text-ink/50">WhatsApp</dt>
                <dd className="mt-1 font-logo">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brown">
                    {telefone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={mapa.rota} target="_blank" rel="noopener noreferrer" className="frame-btn cta flex-1 text-center">
                Como chegar
              </a>
              <a
                href={mapa.abrir}
                target="_blank"
                rel="noopener noreferrer"
                className="cta flex-1 self-center py-3 text-center underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                Abrir no Maps
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 lg:h-0" />
    </section>
  );
}
