import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { MusicNotes } from "./MusicNotes";
import { CONTATO } from "./data";

export function Eventos() {
  return (
    <section id="eventos" className="relative isolate overflow-hidden">
      <Parallax strength={50} className="absolute inset-0 -z-20">
        <img
          src="/assets/img/eventos.jpg"
          alt="Apresentação de alunos em festival do Instituto Tinello de Música"
          width={1600}
          height={900}
          loading="lazy"
          className="h-[130%] w-full object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/75 to-ink" />
      <MusicNotes count={10} />

      <div className="section-shell relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            <span className="h-px w-8 bg-gold/70" />
            Eventos
          </span>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="mt-5 font-display text-3xl leading-[1.05] font-extrabold text-balance sm:text-5xl">
            Festivais, saraus e apresentações que{" "}
            <span className="text-gold-gradient">colocam você no palco</span>
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Ao longo do ano, o instituto produz apresentações com estrutura profissional de som e
            luz. É onde a técnica encontra a emoção — e onde cada aluno descobre o que é tocar para
            um público que vibra junto.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={CONTATO.instagramUrl} target="_blank" rel="noreferrer" className="btn-gold">
              Ver próximos eventos
            </a>
            <a href="#contato" className="btn-ghost-gold">
              Falar com a escola
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
