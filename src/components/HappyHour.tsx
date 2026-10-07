// Promoção de chopp. O botão abre a aba "Cervejas" do cardápio (ver hash em Cardapio.tsx).
export default function HappyHour() {
  return (
    <section aria-labelledby="happy-hour-titulo" className="bg-[#151515] text-cream">
      <div className="mx-auto grid max-w-[1536px] items-center gap-14 px-[var(--container-padding)] py-24 lg:grid-cols-2 lg:gap-24 lg:py-32 xl:px-[calc(var(--container-padding)+4rem)]">
        <div className="max-w-xl">
          <p className="mb-5 font-logo text-xl text-gold italic">Happy Hour</p>
          <h2
            id="happy-hour-titulo"
            className="font-logo text-3xl leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl"
          >
            Seu destino depois do trabalho.
          </h2>
          <p className="mt-6 font-[family-name:var(--font-gill)] text-lg text-cream/70">
            Dezoito horas. Um chopp gelado. E uma nova viagem para começar.
          </p>
          <a href="#cervejas" className="hero-btn cta mt-10 inline-block">
            Ver Happy Hour
          </a>
        </div>

        <div className="relative rounded-[8px] border border-cream/15 px-8 py-12 text-center sm:px-12 lg:py-16">
          <span
            aria-hidden="true"
            className="absolute -top-4 right-6 rotate-[6deg] rounded-[4px] border-2 border-gold bg-[#151515] px-3 py-1 nav-text text-[0.625rem]! text-gold"
          >
            Embarque 18h
          </span>

          <p className="flex items-start justify-center font-logo leading-none font-bold">
            <span className="mt-[0.35em] mr-3 text-[clamp(1.5rem,3vw,2.5rem)] text-gold">R$</span>
            <span className="text-[clamp(5rem,13vw,10rem)] tracking-[-0.02em]">7,90</span>
          </p>

          <div className="mx-auto mt-8 max-w-xs border-t border-dashed border-cream/25 pt-6">
            <p className="nav-text text-[0.75rem]!">Chopp · das 18h às 20h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
