import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Parallax } from "./Parallax";

export function Sobre() {
  return (
    <section id="sobre" className="section-shell relative overflow-hidden">
      <div className="stage-glow absolute inset-x-0 top-0 h-96 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Sobre o ITM"
            title={
              <>
                Um palco moderno onde a <span className="text-gold-gradient">música ganha vida</span>
              </>
            }
          />
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              O Instituto Tinello de Música nasceu em Santos com uma convicção simples: música se
              aprende tocando. Desde o primeiro dia, cada aluno é tratado como músico — com
              repertório próprio, acompanhamento individual e a chance real de subir ao palco.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Nossa filosofia une técnica e emoção. Ensinamos fundamento sólido, mas o objetivo
              sempre foi maior do que a partitura: formar pessoas que sentem, interpretam e vivem a
              música em comunidade.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { n: "8", l: "Instrumentos" },
                { n: "+10", l: "Anos de música" },
                { n: "100%", l: "Aulas práticas" },
              ].map((item) => (
                <div key={item.l} className="border-l border-gold/40 pl-4">
                  <dt className="font-display text-3xl font-extrabold text-gold">{item.n}</dt>
                  <dd className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {item.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Vídeo institucional vertical 9:16 — autoplay, mudo, loop, sem controles */}
        <Reveal delay={200} className="justify-self-center">
          <Parallax strength={26}>
            <div className="group relative mx-auto w-[min(20rem,80vw)] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015]">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/35 bg-surface shadow-[var(--shadow-deep)]">
                <video
                  className="aspect-[9/16] w-full object-cover"
                  src="/assets/img/video%20sobre%20itm.mp4"
                  poster="/assets/img/piano.png"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo institucional do Instituto Tinello de Música"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-gold/25 ring-inset"
                />
              </div>
              <p className="mt-4 text-center text-xs tracking-[0.24em] text-muted-foreground uppercase">
                Bastidores do ITM
              </p>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
