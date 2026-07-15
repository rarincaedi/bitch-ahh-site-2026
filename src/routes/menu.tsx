import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import restaurantImg from "@/assets/restaurant.jpg";
import { fullMenu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Meniu — Ocaua lui Cuza" },
      {
        name: "description",
        content:
          "Meniul complet al restaurantului Ocaua lui Cuza: mic dejun, antreuri, ciorbe, preparate la grătar, pizza, paste și băuturi.",
      },
      { property: "og:title", content: "Meniu — Ocaua lui Cuza" },
      {
        property: "og:description",
        content:
          "Descoperă meniul complet al restaurantului Ocaua lui Cuza: preparate românești, pizza, paste și băuturi.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-28 lg:pt-40 lg:pb-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline w-10 text-foreground" />
            <span className="eyebrow text-muted-foreground">Meniu complet</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1] max-w-3xl">
            Meniu <em className="italic">tradițional</em>, cu preparate la grătar.
          </h1>
          <p className="mt-8 text-muted-foreground max-w-xl leading-relaxed">
            Bucătărie românească și internațională: mic dejun, antreuri, ciorbe,
            preparate din carne, pește, pizza, paste și băuturi. Prețurile sunt exprimate în lei.
          </p>

          <div className="mt-10 overflow-hidden">
            <img
              src={restaurantImg}
              alt="Fel de mâncare"
              loading="lazy"
              className="w-full h-80 object-cover grayscale"
            />
          </div>

          <div className="mt-20 space-y-24">
            {(Object.keys(fullMenu) as (keyof typeof fullMenu)[]).map((section) => (
              <section key={section}>
                <div className="flex items-baseline justify-between border-b border-border pb-4 mb-2">
                  <h2 className="font-display text-3xl md:text-4xl italic">
                    {section}
                  </h2>
                  <span className="eyebrow text-muted-foreground">
                    {fullMenu[section].length} preparate
                  </span>
                </div>
                <ul>
                  {fullMenu[section].map((item) => (
                    <li
                      key={item.name}
                      className="group grid grid-cols-[1fr_auto] gap-6 items-baseline py-7 border-b border-border"
                    >
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-4">
                          <h3 className="font-display text-2xl md:text-3xl group-hover:italic transition-all">
                            {item.name}
                          </h3>
                          <span className="hidden md:block flex-1 border-b border-dotted border-border translate-y-[-4px]" />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      <div className="font-display text-2xl shrink-0 tabular-nums">
                        {item.price}
                        <span className="text-xs text-muted-foreground ml-1">
                          lei
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-24 flex flex-wrap items-center gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
            >
              ← Înapoi acasă
            </Link>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 px-2 py-3 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Rezervă o masă
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
