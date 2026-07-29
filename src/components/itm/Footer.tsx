import { CONTATO, NAV } from "./data";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/50 font-display text-sm font-extrabold text-gold">
                ITM
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-extrabold">Instituto Tinello de Música</p>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Santos / SP
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Sinta a Música. Viva sua Evolução.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 md:justify-items-end">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="link-underline text-muted-foreground">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="gold-rule mt-12" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Instituto Tinello de Música. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-5">
            <a href={CONTATO.whatsappUrl} target="_blank" rel="noreferrer" className="link-underline">
              {CONTATO.whatsappLabel}
            </a>
            <a
              href={CONTATO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
