import { SectionTitle } from "./SectionTitle";
import { useInView } from "./Reveal";
import { JORNADA } from "./data";

export function Timeline() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="experiencia" className="section-shell relative overflow-hidden bg-surface/40">
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Experiência ITM"
          title={
            <>
              Do primeiro acorde <span className="text-gold-gradient">ao palco</span>
            </>
          }
          description="Uma jornada desenhada para transformar curiosidade em identidade musical."
        />

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-16">
          {/* trilho */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[13px] w-px bg-border sm:left-[29px]"
          />
          {/* preenchimento dourado progressivo */}
          <span
            aria-hidden
            className="absolute top-2 left-[13px] w-px origin-top bg-gradient-to-b from-gold-soft via-gold to-gold-deep transition-transform duration-[2600ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:left-[29px]"
            style={{
              bottom: "0.5rem",
              transform: `scaleY(${inView ? 1 : 0})`,
              boxShadow: "0 0 18px color-mix(in oklab, var(--gold) 55%, transparent)",
            }}
          />

          <ol className="space-y-10">
            {JORNADA.map((etapa, i) => (
              <li
                key={etapa.titulo}
                className="relative transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(24px)",
                  transitionDelay: `${350 + i * 320}ms`,
                }}
              >
                <span
                  className="absolute top-1 -left-10 grid size-7 place-items-center rounded-full border border-gold/60 bg-ink text-[0.7rem] font-bold text-gold transition-shadow duration-1000 sm:-left-16 sm:size-[3.6rem] sm:text-sm"
                  style={{
                    boxShadow: inView
                      ? "0 0 26px -4px color-mix(in oklab, var(--gold) 65%, transparent)"
                      : "none",
                    transitionDelay: `${500 + i * 320}ms`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-extrabold sm:text-2xl">{etapa.titulo}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {etapa.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
