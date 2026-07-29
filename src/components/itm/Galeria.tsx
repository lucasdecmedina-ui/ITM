import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { GALERIA } from "./data";

export function Galeria() {
  return (
    <section id="galeria" className="section-shell relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Galeria"
          title={
            <>
              A escola <span className="text-gold-gradient">por dentro</span>
            </>
          }
          description="Alunos, professores, instrumentos e apresentações — o dia a dia do instituto."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALERIA.map((foto, i) => (
            <Reveal key={foto.src} delay={i * 90}>
              <figure className="group relative overflow-hidden rounded-2xl border border-border break-inside-avoid">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/55" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-gold uppercase">
                    <span className="h-px w-6 bg-gold" />
                    {foto.legenda}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
