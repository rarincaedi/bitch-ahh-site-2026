export function Footer() {
  return (
    <footer className="bg-ink text-bone border-t border-bone/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl">Ocaua</span>
              <span className="eyebrow text-bone/50">lui Cuza</span>
            </div>
            <p className="mt-4 text-sm text-bone/60 max-w-sm">
              Restaurant, salon de evenimente și camere de hotel — o ospitalitate
              gândită în detaliu.
            </p>
          </div>

          <div>
            <div className="eyebrow text-bone/50">Navigare</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#restaurant", "Restaurant"],
                ["#events", "Salon de evenimente"],
                ["#rooms", "Camere de hotel"],
                ["#contact", "Contact"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-bone text-bone/70 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-bone/50">Rezervări</div>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li>+40 232 123 456</li>
              <li>rezervari@ocaualuicuza.ro</li>
              <li>Strada Cuza Vodă nr. 12, Iași</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bone/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bone/50">
          <span>© {new Date().getFullYear()} Ocaua lui Cuza. Toate drepturile rezervate.</span>
          <span className="eyebrow">Ospitalitate — de la 1859</span>
        </div>
      </div>
    </footer>
  );
}
