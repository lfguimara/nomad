import { highlights } from "@/lib/site";

// Faixa de destaques rolando em loop, fixa no rodapé do hero. A lista é repetida
// e a trilha anda -50%, então o fim encosta no começo sem "pulo".
export default function Highlights({ className = "" }: { className?: string }) {
  // 2 cópias por metade garantem que a faixa cubra telas largas
  const track = [...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <div aria-label="Destaques" role="region" className={`h-[var(--strip-h)] bg-[#151515] text-cream ${className}`}>
      <div className="mx-auto flex h-full max-w-[1536px] flex-col justify-center px-[var(--container-padding)]">
        <div className="border-t border-cream/20" />
        <div className="marquee flex flex-1 items-center overflow-hidden">
          <ul className="marquee-track flex w-max">
            {track.map((item, i) => (
              <li
                key={i}
                aria-hidden={i >= highlights.length || undefined}
                className="flex items-center font-sans text-[0.9375rem] font-semibold whitespace-nowrap"
              >
                {item}
                <span aria-hidden="true" className="mx-10 text-gold">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
