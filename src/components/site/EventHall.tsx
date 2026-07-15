import hall from "@/assets/event-hall.jpg";
import corp from "@/assets/event-corporate.jpg";
import party from "@/assets/event-party.jpg";
import { useReveal } from "@/hooks/use-reveal";

const events = [
  { img: hall, title: "Nunți", capacity: "până la 220 invitați", desc: "Un cadru grandios cu candelabre și mese lungi pentru cea mai importantă zi." },
  { img: corp, title: "Evenimente corporate", capacity: "conferințe & gale", desc: "Sonorizare profesională, proiecție și organizare impecabilă." },
  { img: party, title: "Aniversări & botezuri", capacity: "petreceri intime", desc: "Decor personalizat și meniu croit pentru o seară memorabilă." },
];

export function EventHall() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="events" ref={ref} className="relative bg-ink text-bone py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-6" data-reveal>
          <span className="hairline w-10 text-bone" />
          <span className="eyebrow text-bone/60">02 — Salon de evenimente</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 items-end" data-reveal>
          <h2 className="lg:col-span-8 text-5xl md:text-6xl lg:text-7xl leading-[1]">
            Un salon <em className="italic text-ash">croit</em> pentru evenimentele
            care rămân în memorie.
          </h2>
          <p className="lg:col-span-4 text-bone/70 leading-relaxed">
            De la nunți cu 220 de invitați la conferințe intime — spațiul se transformă
            elegant în jurul intenției tale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {events.map((e, i) => (
            <article
              key={e.title}
              data-reveal
              className="group relative overflow-hidden border border-bone/15 bg-ink/40 transition-all duration-500 hover:border-bone/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="p-8">
                <div className="eyebrow text-bone/50">{e.capacity}</div>
                <h3 className="mt-3 font-display text-3xl">{e.title}</h3>
                <p className="mt-4 text-sm text-bone/60 leading-relaxed">{e.desc}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors"
                >
                  Solicită ofertă
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Feature strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-bone/15" data-reveal>
          {[
            ["220", "capacitate max."],
            ["1000m²", "suprafață salon"],
            ["24/7", "asistență eveniment"],
            ["∞", "posibilități de decor"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-4xl md:text-5xl">{k}</div>
              <div className="eyebrow text-bone/50 mt-2">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
