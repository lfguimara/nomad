import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import sobreImg from "../../public/images/sobre.png";

const facts = [
  { label: "Cozinha", value: "Sazonal" },
  { label: "Roteiro", value: "Sabores do mundo" },
  { label: "Jantar · Ter a Dom", value: "18h às 23h" },
];

// Mesma linguagem do home: títulos em Baskerville (font-logo), rótulos em .nav-text,
// texto corrido no Gill/Cabin e botões com moldura dupla.
export default function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-[var(--header-height)] bg-cream text-ink">
      <div className="mx-auto grid max-w-[1536px] gap-14 px-[var(--container-padding)] py-24 lg:grid-cols-[1fr_minmax(0,32rem)] lg:items-center lg:gap-24 lg:py-36 xl:px-[calc(var(--container-padding)+4rem)]">
        <div className="max-w-2xl">
          <p className="nav-text mb-6 text-[0.75rem]! text-brown lg:text-[0.8125rem]!">Sobre o Nomad</p>

          <h2 className="font-logo text-3xl leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
            Um restaurante que nunca fica parado no mesmo lugar.
          </h2>

          <div className="mt-8 space-y-5 font-[family-name:var(--font-gill)] text-lg leading-relaxed text-ink/80">
            <p>
              O Nomad nasceu da vontade de viajar sem sair de Petrolina. A cada temporada, nossa cozinha
              escolhe um novo destino e reinventa o cardápio com ingredientes da estação, técnicas de
              outras culturas e o calor do sertão.
            </p>
            <p>
              Aqui, o jantar é uma passagem só de ida para outro canto do mundo, com volta garantida
              para casa. Sente-se, peça um drink e deixe o passaporte com a gente.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 border-y border-brown/25 sm:grid-cols-3">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`py-5 sm:px-6 sm:first:pl-0 ${i > 0 ? "border-t border-brown/25 sm:border-t-0 sm:border-l" : ""}`}
              >
                <dt className="nav-text text-[0.6875rem]! text-brown">{fact.label}</dt>
                <dd className="mt-2 font-logo text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="#cardapio" className="frame-btn cta text-center">
              Ver cardápio
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="frame-btn cta text-center">
              Reservar mesa
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[8px] shadow-[0_30px_60px_-30px_rgb(31_26_23/0.5)]">
            <Image
              src={sobreImg}
              alt="Cardápio do Nomad, encadernado em couro verde com o logo gravado, sobre a mesa de madeira"
              sizes="(min-width: 1024px) 32rem, (min-width: 448px) 28rem, 100vw"
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-center font-logo text-base text-ink/70 italic">
            Nosso passaporte: o cardápio da temporada.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
