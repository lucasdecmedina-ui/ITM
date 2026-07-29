import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { DIFERENCIAIS } from "./data";

const ICONS = ["♬", "✦", "◎", "★", "❖", "◆"];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section-shell relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Diferenciais"
          title={
            <>
              Por que estudar <span className="text-gold-gradient">no ITM</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold/55 hover:shadow-[0_0_40px_-16px_color-mix(in_oklab,var(--gold)_60%,transparent)]">
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-lg text-gold transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105">
                  {ICONS[i % ICONS.length]}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
                <span
                  aria-hidden
                  className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gold/70 transition-transform duration-700 group-hover:scale-x-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
