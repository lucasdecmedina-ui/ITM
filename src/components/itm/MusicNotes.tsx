import { useMemo } from "react";

const GLYPHS = ["♪", "♫", "♩", "♬", "𝄞"];

interface Note {
  id: number;
  glyph: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  spin: number;
  opacity: number;
}

/**
 * Notas musicais flutuantes — discretas, lentas, baixa opacidade.
 * Comportam-se como partículas de luz de palco, nunca como enfeite infantil.
 */
export function MusicNotes({ count = 16 }: { count?: number }) {
  const notes = useMemo<Note[]>(() => {
    // valores determinísticos evitam divergência entre SSR e hidratação
    return Array.from({ length: count }, (_, i) => {
      const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
      return {
        id: i,
        glyph: GLYPHS[i % GLYPHS.length],
        left: Math.round(r(1) * 96 + 2),
        size: Math.round(14 + r(2) * 26),
        duration: Math.round(26 + r(3) * 26),
        delay: Math.round(r(4) * 26),
        drift: Math.round(r(5) * 90 - 45),
        spin: Math.round(r(6) * 30 - 15),
        opacity: 0.06 + r(7) * 0.1,
      };
    });
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {notes.map((n) => (
        <span
          key={n.id}
          className="absolute bottom-[-12vh] text-gold select-none"
          style={{
            left: `${n.left}%`,
            fontSize: `${n.size}px`,
            animation: `itm-float-note ${n.duration}s linear ${n.delay}s infinite`,
            ["--note-drift" as string]: `${n.drift}px`,
            ["--note-spin" as string]: `${n.spin}deg`,
            ["--note-opacity" as string]: n.opacity.toFixed(3),
            filter: "blur(0.2px)",
            textShadow: "0 0 18px color-mix(in oklab, var(--gold) 45%, transparent)",
          }}
        >
          {n.glyph}
        </span>
      ))}
    </div>
  );
}
