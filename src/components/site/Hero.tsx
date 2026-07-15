import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-ink text-bone">
      <img
        src={hero}
        alt="Interior restaurant Ocaua lui Cuza"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/40 to-ink" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 lg:px-10 pt-32 pb-14">
        <div className="flex items-center gap-4 animate-fade-up">
          <span className="hairline w-14" />
          <span className="eyebrow text-bone/70">Est. — Ospitalitate Românească</span>
        </div>

        <div className="max-w-4xl">
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Un ritual <em className="italic text-ash">tăcut</em>
            <br /> al eleganței.
          </h1>
          <p
            className="mt-8 max-w-xl text-base sm:text-lg text-bone/70 leading-relaxed animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            Restaurant, salon de evenimente și camere de hotel — trei experiențe reunite
            sub același acoperiș, croite pentru cei care caută liniștea unui loc bine gândit.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up"
            style={{ animationDelay: "550ms" }}
          >
            <a
              href="#restaurant"
              className="group inline-flex items-center gap-4 border border-bone px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-bone hover:text-ink transition-all duration-500"
            >
              Descoperă complexul
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.3em] uppercase text-bone/70 hover:text-bone transition-colors border-b border-bone/30 pb-1"
            >
              Rezervare
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-3 gap-6 sm:gap-12 pt-10 border-t border-bone/15 animate-fade-up"
          style={{ animationDelay: "750ms" }}
        >
          {[
            { k: "01", v: "Restaurant" },
            { k: "02", v: "Salon Evenimente" },
            { k: "03", v: "Camere Hotel" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-3xl sm:text-4xl">{s.k}</div>
              <div className="eyebrow text-bone/50 mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-bone/60">
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <span className="block h-10 w-px bg-bone/40 animate-pulse" />
      </div>
    </section>
  );
}
