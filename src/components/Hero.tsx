"use client";

import { useEffect, useRef } from "react";
import Highlights from "@/components/Highlights";
import { whatsappLink } from "@/lib/site";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

// Hero com vídeo que começa como card no centro e se expande para tela cheia ao rolar
// (efeito inspirado no dishoom.com). A seção tem 250svh e o conteúdo fica "sticky";
// o progresso da rolagem vira variáveis CSS lidas pelos estilos abaixo.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = reduceMotion ? 1 : clamp(-rect.top / total);

      const grow = clamp(p / 0.7); // card -> tela cheia
      const firstText = 1 - clamp(p / 0.3); // frase inicial some
      const secondText = clamp((p - 0.35) / 0.3); // frase final aparece

      el.style.setProperty("--grow", grow.toFixed(4));
      el.style.setProperty("--t1", firstText.toFixed(4));
      el.style.setProperty("--t2", secondText.toFixed(4));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="hero" ref={ref} className="hero relative h-[250svh] bg-[#151515] text-white">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="hero-card absolute left-1/2 -translate-x-1/2 overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,#6b3a24_0%,#2a1c15_55%,#14100d_100%)]">
          {/* Troque por public/videos/hero.mp4 (e opcionalmente hero-poster.jpg) */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="hero-t1 absolute max-w-3xl px-6">
              <p className="mb-3 font-logo text-base italic opacity-90 sm:text-lg">Bem-vindo a bordo</p>
              <p className="font-logo text-xl leading-snug tracking-[0.08em] sm:text-2xl lg:text-[1.75rem]">
                “Esta noite, a mesa é o seu passaporte para outro canto do mundo.”
              </p>
            </div>

            <div className="hero-t2 absolute max-w-5xl px-6">
              <p className="nav-text mb-5 text-[0.75rem]! lg:text-[0.8125rem]!">Sabores do mundo</p>
              <h1 className="font-logo text-3xl leading-tight font-bold tracking-[0.06em] [font-variant-caps:small-caps] sm:text-4xl lg:text-5xl">
                “Cada estação, um novo destino”
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[calc(var(--strip-h)+1.5rem)] flex justify-center gap-4 px-6">
          <a href="#cardapio" className="hero-btn cta">
            Ver cardápio
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hero-btn cta">
            Reservar mesa
          </a>
        </div>

        <Highlights className="absolute inset-x-0 bottom-0" />
      </div>
    </section>
  );
}
