"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { destinos } from "@/lib/destinos";
import { whatsappLink } from "@/lib/site";

// Faixa com as cores da bandeira em blocos iguais (degradê com paradas duras)
const flagStripes = (colors: string[], angle = "90deg") =>
  `linear-gradient(${angle}, ${colors
    .map((color, i) => `${color} ${(i / colors.length) * 100}% ${((i + 1) / colors.length) * 100}%`)
    .join(", ")})`;

// Cada país é um card (aba); o selecionado abre um "cartão de embarque"
// PNZ (Petrolina) -> país, com o menu da rota.
export default function Destinos() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const destino = destinos[active];

  const onKeyDown = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + destinos.length) % destinos.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="destino" className="scroll-mt-[var(--header-height)] bg-[#151515] text-cream">
      <div className="mx-auto max-w-[1536px] px-[var(--container-padding)] py-24 lg:py-36 xl:px-[calc(var(--container-padding)+4rem)]">
        <div className="max-w-2xl">
          <p className="nav-text mb-6 text-[0.75rem]! text-gold lg:text-[0.8125rem]!">Destino atual</p>
          <h2 className="font-logo text-3xl leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
            Escolha seu destino.
          </h2>
          <p className="mt-6 font-[family-name:var(--font-gill)] text-lg text-cream/70">
            Cada país. Um sabor. Uma história.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Destinos"
          onKeyDown={onKeyDown}
          className="-mx-[var(--container-padding)] mt-14 flex snap-x snap-mandatory scroll-px-[var(--container-padding)] gap-4 overflow-x-auto px-[var(--container-padding)] pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
        >
          {destinos.map((d, i) => {
            const selected = i === active;
            return (
              <button
                key={d.code}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`tab-${d.code}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="painel-destino"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                style={{ borderTopColor: d.accent }}
                className={`group flex w-[15rem] shrink-0 snap-start flex-col rounded-[8px] border border-t-4 p-6 text-left transition-[background-color,color,border-color,transform] duration-300 lg:w-auto ${
                  selected
                    ? "border-cream/0 bg-cream text-ink lg:-translate-y-2"
                    : "border-cream/15 text-cream hover:border-cream/40"
                }`}
              >
                <span className="font-logo text-3xl font-bold">{d.code}</span>
                <span className={`nav-text mt-3 text-[0.75rem]! ${selected ? "text-brown" : "text-gold"}`}>
                  {d.nome}
                </span>
                <span
                  className={`mt-3 font-[family-name:var(--font-gill)] text-[0.9375rem] leading-relaxed ${
                    selected ? "text-ink/75" : "text-cream/65"
                  }`}
                >
                  {d.resumo}
                </span>
                <span className="cta mt-auto pt-6">
                  <span
                    className={`border-b pb-0.5 transition-colors ${
                      selected ? "border-ink" : "border-cream/40 group-hover:border-cream"
                    }`}
                  >
                    {selected ? "Embarcando" : "Explorar"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="painel-destino"
          role="tabpanel"
          aria-labelledby={`tab-${destino.code}`}
          className="boarding-pass mt-10 grid rounded-[8px] bg-cream text-ink md:grid-cols-[17rem_1fr]"
        >
          <div key={`stub-${destino.code}`} className="pass-fade relative p-8 md:p-10">
            <span
              aria-hidden="true"
              style={{ background: flagStripes(destino.flag) }}
              className="absolute inset-x-0 top-0 h-2 rounded-t-[8px] shadow-[inset_0_-1px_0_rgb(31_26_23/0.08)] md:rounded-tr-none"
            />
            <p className="nav-text text-[0.6875rem]! text-brown">Cartão de embarque</p>
            <div className="mt-8 flex items-end gap-4">
              <div>
                <p className="nav-text text-[0.625rem]! text-ink/50">De</p>
                <p className="font-logo text-4xl font-bold">PNZ</p>
              </div>
              <svg aria-hidden="true" width="34" height="16" viewBox="0 0 34 16" className="mb-3 text-brown">
                <path d="M0 8h30M24 2l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div>
                <p className="nav-text text-[0.625rem]! text-ink/50">Para</p>
                <p className="font-logo text-4xl font-bold">{destino.code}</p>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                ["Embarque", "18h"],
                ["Portão", "Nomad"],
                ["Classe", "Sazonal"],
                ["Assento", "À mesa"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="nav-text text-[0.625rem]! text-ink/50">{k}</dt>
                  <dd className="mt-1 font-logo">{v}</dd>
                </div>
              ))}
            </dl>

            <span
              aria-hidden="true"
              style={{ color: destino.stamp }}
              className="pointer-events-none relative mt-8 ml-auto flex h-20 w-20 rotate-[-14deg] items-center justify-center font-logo text-xs font-bold tracking-[0.2em] uppercase"
            >
              <span
                style={{ background: `conic-gradient(${destino.flag.map((color, i) => `${color} ${(i / destino.flag.length) * 360}deg ${((i + 1) / destino.flag.length) * 360}deg`).join(", ")})` }}
                className="stamp-ring absolute inset-0 rounded-full"
              />
              <span className="absolute inset-[7px] rounded-full border border-dashed border-current opacity-60" />
              {destino.code}
            </span>
          </div>

          <div key={`menu-${destino.code}`} className="pass-fade pass-divider p-8 md:p-10 lg:p-12">
            <p className="nav-text text-[0.6875rem]! text-brown">Menu da rota</p>
            <h3 className="mt-3 font-logo text-3xl sm:text-4xl">{destino.nome}</h3>

            {destino.pratos.length > 0 ? (
              <ul className="mt-8 grid gap-8 border-t border-dashed border-ink/25 pt-8 sm:grid-cols-3 sm:gap-6">
                {destino.pratos.map((p, i) => (
                  <li key={p.nome} className="group">
                    {p.foto && (
                      <div className="overflow-hidden rounded-[8px] bg-ink/10">
                        <Image
                          src={p.foto}
                          alt={p.nome}
                          placeholder="blur"
                          sizes="(min-width: 1536px) 19rem, (min-width: 1024px) 22vw, (min-width: 640px) 28vw, 100vw"
                          className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:aspect-[4/5]"
                        />
                      </div>
                    )}
                    <p className="nav-text mt-5 text-[0.625rem]! text-brown">Parada {String(i + 1).padStart(2, "0")}</p>
                    <div className="mt-2 flex items-baseline gap-4">
                      <h4 className="font-logo text-lg">{p.nome}</h4>
                      {p.preco && (
                        <>
                          <span aria-hidden="true" className="flex-1 border-b border-dotted border-ink/30" />
                          <span className="font-logo text-lg">{p.preco}</span>
                        </>
                      )}
                    </div>
                    {p.descricao && (
                      <p className="mt-2 font-[family-name:var(--font-gill)] text-[0.9375rem] leading-relaxed text-ink/65">
                        {p.descricao}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 border-y border-dashed border-ink/25 py-6 font-logo text-lg text-ink/70 italic">
                O roteiro desta parada está sendo preparado pela cozinha.
              </p>
            )}

            <blockquote className="mt-10">
              <p className="font-logo text-xl italic">“{destino.frase.texto}”</p>
              <footer className="nav-text mt-2 text-[0.625rem]! text-ink/55">{destino.frase.significado}</footer>
            </blockquote>

            <a
              href={whatsappLink(`Olá! Gostaria de reservar uma mesa no Nomad para o destino ${destino.nome}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="frame-btn cta mt-8 inline-block"
            >
              Reservar para este destino
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
