import { useState } from "react";
import restaurantImg from "@/assets/restaurant.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { homeMenu } from "@/lib/menu-data";

export function Restaurant() {
  const [tab, setTab] = useState<keyof typeof homeMenu>("Mic dejun");
  const ref = useReveal<HTMLElement>();

  return (
    <section id="restaurant" ref={ref} className="relative bg-background text-foreground py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6" data-reveal>
              <span className="hairline w-10 text-foreground" />
              <span className="eyebrow text-muted-foreground">01 — Restaurant</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1]" data-reveal>
              Bucătărie <em className="italic">de autor</em>, servită cu discreție.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed" data-reveal>
              Meniul nostru sezonier este redactat de chef în fiecare săptămână,
              din produse locale și tehnici clasice, reinterpretate.
            </p>

            <div className="mt-10 overflow-hidden" data-reveal>
              <img
                src={restaurantImg}
                alt="Fel de mâncare"
                loading="lazy"
                width={1400}
                height={1000}
                className="w-full h-72 object-cover grayscale hover:scale-105 transition-transform duration-[1200ms]"
              />
            </div>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <div className="flex flex-wrap gap-2 border-b border-border pb-1">
              {(Object.keys(homeMenu) as (keyof typeof homeMenu)[]).map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`relative px-5 py-3 text-xs tracking-[0.25em] uppercase transition-colors ${
                    tab === k ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {k}
                  {tab === k && (
                    <span className="absolute left-0 right-0 -bottom-[1px] h-px bg-foreground" />
                  )}
                </button>
              ))}
            </div>

            <ul className="mt-4">
              {homeMenu[tab].map((item, i) => (
                <li
                  key={item.name}
                  className="group grid grid-cols-[1fr_auto] gap-6 items-baseline py-7 border-b border-border animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-2xl md:text-3xl group-hover:italic transition-all">
                        {item.name}
                      </h3>
                      <span className="hidden md:block flex-1 border-b border-dotted border-border translate-y-[-4px]" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="font-display text-2xl shrink-0 tabular-nums">
                    {item.price}
                    <span className="text-xs text-muted-foreground ml-1">lei</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
