"use client";

import { useEffect, useState } from "react";
import { navLinks, site, whatsappLink } from "@/lib/site";

// Estrutura e medidas espelhadas do header do dishoom.com:
// grid 1fr | logo | 1fr, altura 67px (82px no mobile), nav em caixa alta com tracking 0.25em.
const navItem =
  "nav-text rounded px-2 py-2 whitespace-nowrap transition-colors hover:bg-[#c4bfaf4d] hover:text-white/80 xl:text-[0.75rem]! xl:tracking-[0.2em]!";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Só ganha fundo depois que o hero em vídeo termina
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - window.innerHeight : 40;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [first, ...rest] = navLinks;

  return (
    <header
      className={`fixed top-0 left-0 z-50 h-[var(--header-height)] w-full text-white transition-[background-color] duration-500 ease-in-out ${
        scrolled || open ? "bg-ink" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1536px] items-center px-[var(--container-padding)] py-6 lg:grid lg:grid-cols-[1fr_max-content_1fr] lg:py-4">
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mr-4 flex h-6 w-6 shrink-0 flex-col justify-center gap-y-1 xl:hidden"
        >
          <span
            className={`block h-0.5 w-full bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-full bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>

        <ul className="hidden items-center gap-x-1 xl:flex">
          <li>
            <a href={first.href} className={navItem}>
              {first.label}
            </a>
          </li>
          <li>
            <div className="mx-1 h-4 w-px bg-[#c4bfaf4d] 2xl:mx-3" />
          </li>
          {rest.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navItem}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          aria-label="Início"
          className="col-start-2 flex items-center font-logo text-[1.375rem] leading-none font-bold tracking-[0.14em] uppercase transition-opacity duration-300 hover:opacity-50 lg:text-[1.625rem]"
        >
          {site.name}
        </a>

        <div className="ml-auto flex items-center gap-x-2 lg:justify-self-end">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Nomad"
            className="hidden p-2 transition-opacity duration-300 hover:opacity-50 sm:block"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
            </svg>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta flex rounded-full border border-off-white bg-transparent px-2.5 py-1.5 text-off-white transition-colors hover:bg-off-white hover:text-black md:px-[10px] lg:ml-1 xl:px-4"
          >
            Reservar mesa
          </a>
        </div>
      </div>

      {open && (
        <nav className="bg-ink px-[var(--container-padding)] pb-8 xl:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="nav-text block border-b border-white/15 py-5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
