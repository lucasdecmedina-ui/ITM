import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="text-3xl leading-[1.05] font-extrabold text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={220}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
