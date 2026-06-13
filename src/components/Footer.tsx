import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { restaurant } from "@/data/menu";

export default function Footer() {
  const phoneHref = `tel:${restaurant.phone.replace(/\s/g, "")}`;

  return (
    <footer id="contact" className="scroll-mt-24 bg-brand-dark text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-brand-gold">
            {restaurant.name}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-brand-cream/70">{restaurant.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2 transition hover:bg-brand-gold hover:text-brand-dark"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2 transition hover:bg-brand-gold hover:text-brand-dark"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-white">Horaires</h4>
          <ul className="mt-3 space-y-2 text-sm text-brand-cream/80">
            {restaurant.hours.map((h) => (
              <li key={h.jours} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-gold" />
                  {h.jours}
                </span>
                <span>{h.horaire}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-white">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-brand-cream/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              {restaurant.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
              <a href={phoneHref} className="hover:text-brand-gold">
                {restaurant.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-cream/50">
        © {new Date().getFullYear()} {restaurant.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
