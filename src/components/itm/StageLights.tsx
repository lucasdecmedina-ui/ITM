/** Reflexos e glow dourado de iluminação de palco (puramente decorativo). */
export function StageLights({ intensity = 1 }: { intensity?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-breathe absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, var(--gold) ${18 * intensity}%, transparent), transparent 65%)`,
        }}
      />
      <div
        className="animate-sweep absolute top-[-10%] left-[8%] h-[70rem] w-[26rem] origin-top blur-2xl"
        style={{
          background: `linear-gradient(to bottom, color-mix(in oklab, var(--gold) ${10 * intensity}%, transparent), transparent 70%)`,
          clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
        }}
      />
      <div
        className="animate-sweep absolute top-[-10%] right-[6%] h-[70rem] w-[24rem] origin-top blur-2xl"
        style={{
          background: `linear-gradient(to bottom, color-mix(in oklab, var(--gold) ${8 * intensity}%, transparent), transparent 70%)`,
          clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}
