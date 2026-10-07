"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const tiposDeEvento = ["Aniversário", "Confraternização", "Evento corporativo", "Jantar especial", "Outro"];

const field =
  "mt-2 w-full rounded-[4px] border border-ink/25 bg-white/50 px-4 py-3 font-[family-name:var(--font-gill)] text-base text-ink transition-colors placeholder:text-ink/35 focus:border-brown focus:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown/25";
const label = "nav-text text-[0.6875rem]! text-ink/70";

const formatarData = (iso: string) => {
  const [ano, mes, dia] = iso.split("-");
  return dia && mes && ano ? `${dia}/${mes}/${ano}` : iso;
};

// Sem backend: o formulário monta a mensagem e abre a conversa no WhatsApp do Nomad.
export default function Eventos() {
  const [link, setLink] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const valor = (nome: string) => String(dados.get(nome) ?? "").trim();

    const linhas = [
      "Olá! Gostaria de planejar um evento no Nomad.",
      "",
      `*Nome:* ${valor("nome")}`,
      `*WhatsApp:* ${valor("whatsapp")}`,
      `*Data:* ${formatarData(valor("data"))}`,
      `*Número de pessoas:* ${valor("pessoas")}`,
      `*Tipo de evento:* ${valor("tipo")}`,
    ];
    if (valor("mensagem")) linhas.push(`*Mensagem:* ${valor("mensagem")}`);

    const url = whatsappLink(linhas.join("\n"));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="eventos" className="scroll-mt-[var(--header-height)] bg-cream text-ink">
      <div className="mx-auto grid max-w-[1536px] gap-14 px-[var(--container-padding)] py-24 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-24 lg:py-36 xl:px-[calc(var(--container-padding)+4rem)]">
        <div>
          <p className="nav-text mb-6 text-[0.75rem]! text-brown lg:text-[0.8125rem]!">Eventos</p>
          <h2 className="font-logo text-3xl leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl">
            Celebre no Nomad.
          </h2>
          <p className="mt-6 font-[family-name:var(--font-gill)] text-lg leading-relaxed text-ink/75">
            Aniversários, confraternizações, eventos corporativos e jantares especiais. Conte o que você
            imagina e a gente responde pelo WhatsApp.
          </p>

          <ul className="mt-10 border-t border-dashed border-ink/25">
            {tiposDeEvento.slice(0, 4).map((tipo) => (
              <li key={tipo} className="flex items-center gap-3 border-b border-dashed border-ink/25 py-4 font-logo text-lg">
                <span aria-hidden="true" className="text-sm text-gold">
                  ✦
                </span>
                {tipo}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-[8px] border border-ink/15 bg-white/30 p-6 sm:p-10"
          aria-label="Planejar um evento"
        >
          <p className="nav-text text-[0.6875rem]! text-brown">Reserva de grupo</p>
          <p className="mt-2 font-logo text-2xl">Monte o roteiro da sua celebração</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className={label}>Nome</span>
              <input name="nome" required autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className={label}>WhatsApp</span>
              <input
                name="whatsapp"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="(87) 9 0000-0000"
                className={field}
              />
            </label>
            <label className="block">
              <span className={label}>Data</span>
              <input
                name="data"
                type="date"
                required
                // data mínima = hoje no fuso do visitante (a página é estática, então é definida no navegador)
                ref={(el) => {
                  if (el) el.min = new Date().toLocaleDateString("sv-SE");
                }}
                className={field}
              />
            </label>
            <label className="block">
              <span className={label}>Número de pessoas</span>
              <input name="pessoas" type="number" required min={1} inputMode="numeric" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className={label}>Tipo de evento</span>
              <select name="tipo" defaultValue={tiposDeEvento[0]} className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 fill=%22none%22 stroke=%22%2389563f%22 stroke-width=%221.5%22><path d=%22M1 1l5 5 5-5%22/></svg>')] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10`}>
                {tiposDeEvento.map((tipo) => (
                  <option key={tipo}>{tipo}</option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className={label}>Mensagem</span>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Conte um pouco sobre o evento: horário, cardápio, decoração…"
                className={`${field} resize-y`}
              />
            </label>
          </div>

          <button type="submit" className="frame-btn cta mt-8 w-full">
            Planejar meu evento
          </button>

          <p role="status" className="mt-4 min-h-[1.5em] text-center font-[family-name:var(--font-gill)] text-[0.9375rem] text-ink/65">
            {link && (
              <>
                Abrimos o WhatsApp com a sua mensagem. Não abriu?{" "}
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-brown underline underline-offset-4">
                  Clique aqui
                </a>
                .
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
