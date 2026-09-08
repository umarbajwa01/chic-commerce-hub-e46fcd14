import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { categories, products } from "@/data/catalog";

const title = "Categories — Verdane";
const description =
  "Explore Verdane by category: menswear, womenswear, shoes, accessories and home & living.";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="bg-sand">
          <div className="container-page py-12">
            <p className="eyebrow text-primary/70">Browse</p>
            <h1 className="mt-3 text-4xl sm:text-5xl">Categories</h1>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Five edits, one palette. Start where you like — everything is designed to be worn
              together.
            </p>
          </div>
        </section>

        <section className="container-page grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.slug).length;
            return (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden rounded-md border border-border/70 bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl">{c.name}</h2>
                    <span className="shrink-0 text-xs text-muted-foreground">{count} pieces</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  <span className="mt-4 inline-block text-sm text-primary group-hover:text-accent">
                    Shop {c.name} →
                  </span>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
