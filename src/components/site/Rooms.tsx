import deluxe from "@/assets/room-deluxe.jpg";
import suite from "@/assets/room-suite.jpg";
import classic from "@/assets/room-classic.jpg";
import { useReveal } from "@/hooks/use-reveal";

const rooms = [
  {
    img: classic,
    name: "Camera Clasică",
    price: "320",
    features: ["Pat matrimonial", "25 m²", "Mic dejun inclus", "Wi-Fi rapid"],
  },
  {
    img: deluxe,
    name: "Camera Deluxe",
    price: "450",
    features: ["Pat king-size", "38 m²", "Vedere panoramică", "Minibar premium"],
  },
  {
    img: suite,
    name: "Apartament Executive",
    price: "780",
    features: ["Living separat", "62 m²", "Room service 24/7", "Balcon privat"],
  },
];

export function Rooms() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="rooms" ref={ref} className="relative bg-background text-foreground py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7" data-reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="hairline w-10 text-foreground" />
              <span className="eyebrow text-muted-foreground">03 — Camere de hotel</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1]">
              Nopți <em className="italic">liniștite</em>, dimineți fără grabă.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed" data-reveal>
            Trei categorii de camere, fiecare gândită pentru a-ți oferi confortul unui somn adânc
            și eleganța unui spațiu bine proporționat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {rooms.map((r, i) => (
            <article
              key={r.name}
              data-reveal
              className="group flex flex-col border border-border bg-card hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1400ms]"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="font-display text-3xl">{r.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl">{r.price}</span>
                  <span className="text-xs text-muted-foreground tracking-wider">LEI / NOAPTE</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-px w-4 bg-foreground/40" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto pt-8 inline-flex items-center justify-between border-t border-border text-xs tracking-[0.25em] uppercase pt-6 hover:text-muted-foreground transition-colors"
                >
                  <span>Rezervă cameră</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
