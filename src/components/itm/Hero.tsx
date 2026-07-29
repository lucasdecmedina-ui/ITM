import { useEffect, useState } from "react";
import { MusicNotes } from "./MusicNotes";
import { StageLights } from "./StageLights";
import { CONTATO } from "./data";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  const enter = () =>
    `transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;


  return (
    <section id="topo" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src="/assets/img/hero.jpg"
        alt="Palco iluminado com guitarra e microfone no Instituto Tinello de Música"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full scale-105 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
      <div className="stage-glow absolute inset-0 -z-10" />
      <StageLights />
      <MusicNotes count={18} />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-24 md:px-8">
        <div className="max-w-3xl">
          <p
            className={`text-xs font-semibold tracking-[0.34em] text-gold uppercase ${enter()}`}
            style={{ transitionDelay: "0ms" }}
          >
            Santos · São Paulo
          </p>

          <h1
            className={`mt-6 font-display text-4xl leading-[0.98] font-extrabold text-balance sm:text-6xl lg:text-7xl ${enter()}`}
            style={{ transitionDelay: "150ms" }}
          >
            Instituto Tinello
            <span className="block text-gold-gradient">de Música</span>
          </h1>

          <p
            className={`mt-6 font-display text-xl font-semibold text-foreground/90 sm:text-2xl ${enter()}`}
            style={{ transitionDelay: "400ms" }}
          >
            “Sinta a Música. Viva sua Evolução.”
          </p>

          <p
            className={`mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg ${enter()}`}
            style={{ transitionDelay: "600ms" }}
          >
            Aprenda instrumentos, desenvolva seu talento e faça parte de uma comunidade apaixonada
            por música.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 ${enter()}`}
            style={{ transitionDelay: "820ms" }}
          >
            <a href={CONTATO.whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold">
              Agendar Aula
            </a>
            <a href="#cursos" className="btn-ghost-gold">
              Conhecer Cursos
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="animate-scroll-hint absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gold md:block"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden>
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" opacity="0.6" />
          <circle cx="11" cy="10" r="3" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
