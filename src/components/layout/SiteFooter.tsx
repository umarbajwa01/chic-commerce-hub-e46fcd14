import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";

const columns = [
  { title: "Shop", links: ["New arrivals", "Men", "Women", "Accessories"] },
  { title: "Support", links: ["Shipping policy", "Returns", "FAQ", "Size guide"] },
  { title: "Company", links: ["Our story", "Sustainability", "Contact", "Terms"] },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="min-w-0">
          <p className="font-display text-2xl">Verdane</p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Considered fashion essentials, made in small batches and built to outlast the season.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="/"
                aria-label="Social profile"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow text-accent">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              {col.links.map((l) => (
                <li key={l}>
                  <Link to="/" className="transition-colors hover:text-accent">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Verdane. All rights reserved.</p>
          <p>Secure checkout · Visa · Mastercard · PayPal</p>
        </div>
      </div>
    </footer>
  );
}
