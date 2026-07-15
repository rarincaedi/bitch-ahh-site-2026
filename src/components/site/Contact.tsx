import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" ref={ref} className="relative bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5" data-reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="hairline w-10 text-bone" />
              <span className="eyebrow text-bone/60">04 — Contact & Rezervări</span>
            </div>
            <h2 className="text-5xl md:text-6xl leading-[1]">
              Trimite-ne un <em className="italic text-ash">semn</em>.
            </h2>
            <p className="mt-8 text-bone/70 max-w-md leading-relaxed">
              Suntem la un email distanță. Îți răspundem în cel mult 24 de ore
              cu detaliile și disponibilitățile solicitate.
            </p>

            <dl className="mt-12 space-y-6 text-sm">
              <div>
                <dt className="eyebrow text-bone/50">Adresă</dt>
                <dd className="mt-2 font-display text-2xl">Strada Cuza Vodă nr. 12, Iași</dd>
              </div>
              <div>
                <dt className="eyebrow text-bone/50">Telefon</dt>
                <dd className="mt-2 font-display text-2xl">+40 232 123 456</dd>
              </div>
              <div>
                <dt className="eyebrow text-bone/50">Email</dt>
                <dd className="mt-2 font-display text-2xl">rezervari@ocaualuicuza.ro</dd>
              </div>
              <div>
                <dt className="eyebrow text-bone/50">Program</dt>
                <dd className="mt-2 text-bone/80">
                  Restaurant · Lu–Du 12:00 — 23:00<br />
                  Recepție hotel · 24/7
                </dd>
              </div>
            </dl>
          </div>

          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 lg:pl-16 lg:border-l border-bone/15 space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <Field label="Nume" name="name" />
              <Field label="Telefon" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" className="md:col-span-2" />
              <Field label="Tip rezervare" name="type" placeholder="Masă / Cameră / Eveniment" className="md:col-span-2" />
            </div>
            <div>
              <label className="eyebrow text-bone/50">Mesaj</label>
              <textarea
                rows={4}
                required
                className="mt-3 w-full bg-transparent border-b border-bone/25 py-3 focus:outline-none focus:border-bone transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group inline-flex items-center gap-4 border border-bone px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-bone hover:text-ink transition-all duration-500 disabled:opacity-50"
            >
              {sent ? "Mesaj trimis" : "Trimite mesaj"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>

        {/* Map placeholder */}
        <div
          data-reveal
          className="mt-24 relative h-80 border border-bone/15 overflow-hidden bg-slate-soft/30"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(var(--bone) 1px, transparent 1px), linear-gradient(90deg, var(--bone) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
            <span className="eyebrow text-bone/60">Ne găsești aici</span>
            <p className="font-display text-3xl md:text-4xl">Strada Cuza Vodă nr. 12, Iași</p>
            <span className="mt-3 h-2 w-2 rounded-full bg-bone animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="eyebrow text-bone/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-bone/25 py-3 focus:outline-none focus:border-bone transition-colors placeholder:text-bone/30"
      />
    </div>
  );
}
