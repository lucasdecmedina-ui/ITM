import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { CONTATO, HORARIOS } from "./data";

export function Contato() {
  return (
    <section id="contato" className="section-shell relative overflow-hidden bg-surface/40">
      <div className="stage-glow absolute inset-x-0 bottom-0 h-96 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contato"
          title={
            <>
              Venha <span className="text-gold-gradient">tocar com a gente</span>
            </>
          }
          description="Agende sua aula experimental e conheça o instituto pessoalmente."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="stage-card h-full p-8">
              <h3 className="font-display text-lg font-extrabold">Fale conosco</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <span className="block text-xs tracking-[0.22em] text-muted-foreground uppercase">
                    WhatsApp
                  </span>
                  <a
                    href={CONTATO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-1 inline-block font-display text-xl font-extrabold text-gold"
                  >
                    {CONTATO.whatsappLabel}
                  </a>
                </li>
                <li>
                  <span className="block text-xs tracking-[0.22em] text-muted-foreground uppercase">
                    Instagram
                  </span>
                  <a
                    href={CONTATO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-1 inline-block text-base font-semibold"
                  >
                    {CONTATO.instagramLabel}
                  </a>
                </li>
              </ul>
              <a
                href={CONTATO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-8 w-full"
              >
                Agendar Aula
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="stage-card h-full p-8">
              <h3 className="font-display text-lg font-extrabold">Onde estamos</h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {CONTATO.endereco}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Estrutura completa com salas tratadas acusticamente, instrumentos disponíveis e
                espaço de convivência para alunos e famílias.
              </p>
              <a
                href={CONTATO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-gold mt-8 w-full"
              >
                Como chegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="stage-card h-full p-8">
              <h3 className="font-display text-lg font-extrabold">Horários</h3>
              <dl className="mt-6 space-y-4">
                {HORARIOS.map((h) => (
                  <div
                    key={h.dias}
                    className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0"
                  >
                    <dt className="text-sm text-muted-foreground">{h.dias}</dt>
                    <dd className="font-display text-sm font-extrabold text-gold">{h.horas}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Domingos e feriados fechados. Aulas mediante agendamento prévio.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
