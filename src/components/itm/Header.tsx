import { useEffect, useState } from "react";
import { CONTATO, NAV } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "border-b border-border/70 bg-ink/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
            <span className="font-display text-sm font-extrabold">ITM</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-extrabold tracking-tight sm:text-base">
              Instituto Tinello
            </span>
            <span className="block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
              de Música
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="link-underline text-sm font-medium">
              {item.label}
            </a>
          ))}
          <a href={CONTATO.whatsappUrl} target="_blank" rel="noreferrer" className="btn-gold !px-6 !py-2.5 !text-sm">
            Agendar Aula
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors duration-500 hover:border-gold hover:text-gold lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-500 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-500 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-400 hover:bg-surface-2 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTATO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-3 !py-3"
            onClick={() => setOpen(false)}
          >
            Agendar Aula
          </a>
        </nav>
      </div>
    </header>
  );
}
