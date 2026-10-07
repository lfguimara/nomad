"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { boasVindas, categorias } from "@/lib/cardapio";

// Ícones de traço das 4 etapas do "Bem-vindo" do cardápio impresso
const icones: ReactNode[] = [
  // cloche
  <g key="cloche">
    <path d="M6 30h36M9 30a15 15 0 0 1 30 0" />
    <path d="M24 12v3M21 12h6" />
  </g>,
  // passagem
  <g key="ticket">
    <path d="M7 14h34v6a4 4 0 0 0 0 8v6H7v-6a4 4 0 0 0 0-8z" />
    <path d="M31 14v20" strokeDasharray="2 3" />
    <path d="M13 24l9-4 2 1-5 3 5 2-1 1-6-1-3 2z" />
  </g>,
  // globo
  <g key="globe">
    <circle cx="24" cy="24" r="15" />
    <ellipse cx="24" cy="24" rx="6.5" ry="15" />
    <path d="M9 24h30M11.5 16h25M11.5 32h25" />
  </g>,
  // câmera
  <g key="camera">
    <path d="M8 17h8l3-4h10l3 4h8v18H8z" />
    <circle cx="24" cy="26" r="6" />
  </g>,
];

export default function Cardapio() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const categoria = categorias[active];

  // Links como href="#cervejas" (ex.: botão do Happy Hour) abrem a aba correspondente
  useEffect(() => {
    const openFromHash = (hash: string) => {
      const index = categorias.findIndex((c) => `#${c.id}` === hash);
      if (index < 0) return false;
      setActive(index);
      document.getElementById("cardapio-categorias")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (link && openFromHash(link.getAttribute("href") ?? "")) e.preventDefault();
    };

    const raf = requestAnimationFrame(() => openFromHash(window.location.hash));
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + categorias.length) % categorias.length;
    setActive(next);
    tabs.current[next]?.focus();
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  return (
    <section id="cardapio" className="scroll-mt-[var(--header-height)] bg-cream text-ink">
      <div className="mx-auto max-w-[1536px] px-[var(--container-padding)] py-24 lg:py-36 xl:px-[calc(var(--container-padding)+4rem)]">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,30rem)] lg:items-end lg:gap-24">
          <div className="max-w-2xl">
            <p className="nav-text mb-6 text-[0.75rem]! text-brown lg:text-[0.8125rem]!">Cardápio</p>
            <h2 className="font-logo text-3xl leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
              {boasVindas.titulo}
            </h2>
            <p className="mt-6 font-[family-name:var(--font-gill)] text-lg text-ink/75">{boasVindas.texto}</p>
          </div>

          <blockquote className="border-l-2 border-brown/30 pl-6">
            <p className="font-logo text-lg leading-relaxed text-ink/80 italic">“{boasVindas.citacao.texto}”</p>
            <footer className="nav-text mt-4 text-[0.625rem]! text-brown">{boasVindas.citacao.autor}</footer>
          </blockquote>
        </div>

        <ol className="mt-16 grid grid-cols-2 border-y border-dashed border-ink/25 lg:grid-cols-4">
          {boasVindas.etapas.map((etapa, i) => (
            <li
              key={etapa}
              className={`flex flex-col items-center gap-4 px-4 py-8 text-center ${
                i % 2 === 1 ? "border-l border-dashed border-ink/25" : ""
              } ${i > 1 ? "border-t border-dashed border-ink/25 lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l" : ""
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="h-12 w-12 text-brown"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                {icones[i]}
              </svg>
              <span className="nav-text text-[0.6875rem]!">
                <span className="text-brown">{String(i + 1).padStart(2, "0")} · </span>
                {etapa}
              </span>
            </li>
          ))}
        </ol>

        <div
          id="cardapio-categorias"
          role="tablist"
          aria-label="Categorias do cardápio"
          onKeyDown={onKeyDown}
          className="-mx-[var(--container-padding)] mt-16 flex scroll-mt-[calc(var(--header-height)+2rem)] gap-x-8 overflow-x-auto px-[var(--container-padding)] [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0"
        >
          {categorias.map((c, i) => {
            const selected = i === active;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`tab-${c.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="painel-cardapio"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`nav-text shrink-0 border-b-2 py-3 text-[0.75rem]! whitespace-nowrap transition-colors lg:text-[0.8125rem]! ${
                  selected ? "border-brown text-ink" : "border-transparent text-ink/50 hover:text-ink"
                }`}
              >
                {c.nome}
              </button>
            );
          })}
        </div>

        <div
          key={categoria.id}
          id="painel-cardapio"
          role="tabpanel"
          aria-labelledby={`tab-${categoria.id}`}
          className="pass-fade mt-10"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <h3 className="font-logo text-3xl sm:text-4xl">{categoria.nome}</h3>
            {categoria.preco && (
              <span className="rotate-[-3deg] rounded-[4px] border-2 border-brown px-3 py-1 font-logo text-xl font-bold text-brown">
                {categoria.preco}
              </span>
            )}
          </div>
          {categoria.nota && (
            <p className="mt-3 font-[family-name:var(--font-gill)] text-[0.9375rem] text-ink/65">
              <span aria-hidden="true" className="mr-2 text-gold">
                ✦
              </span>
              {categoria.nota}
            </p>
          )}

          <ul className="mt-8 grid gap-x-16 md:grid-cols-2">
            {categoria.itens.map((item) => (
              <li key={item.nome} className="border-t border-dashed border-ink/25 py-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-logo text-lg">{item.nome}</span>
                  {item.preco && (
                    <>
                      <span aria-hidden="true" className="min-w-6 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-ink/25" />
                      <span className="font-logo text-lg whitespace-nowrap">{item.preco}</span>
                    </>
                  )}
                </div>
                {item.detalhe && (
                  <p className="mt-1 font-[family-name:var(--font-gill)] text-[0.9375rem] leading-relaxed text-ink/60">
                    {item.detalhe}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-10 sm:flex-row sm:items-center">
          <p className="max-w-xl font-logo text-lg text-ink/80 italic">
            Entrada, prato principal e sobremesa de cada país estão no menu dos destinos.
          </p>
          <a href="#destino" className="frame-btn cta text-center">
            Ver menus dos destinos
          </a>
        </div>
      </div>
    </section>
  );
}
