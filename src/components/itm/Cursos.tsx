import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { CURSOS } from "./data";

export function Cursos() {
  return (
    <section id="cursos" className="section-shell relative overflow-hidden bg-surface/40">
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Cursos"
          title={
            <>
              Escolha o som que é <span className="text-gold-gradient">a sua cara</span>
            </>
          }
          description="Aulas individuais e em grupo, do iniciante absoluto ao músico que quer refinar a técnica."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CURSOS.map((curso, i) => (
            <Reveal key={curso.nome} delay={i * 110}>
              <article className="stage-card group h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={curso.imagem}
                    alt={`Curso de ${curso.nome} no Instituto Tinello de Música`}
                    width={768}
                    height={576}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 [background:radial-gradient(120%_80%_at_50%_100%,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)]" />
                </div>
                <div className="relative p-6">
                  <h3 className="font-display text-xl font-extrabold">{curso.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {curso.descricao}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Saiba mais
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
