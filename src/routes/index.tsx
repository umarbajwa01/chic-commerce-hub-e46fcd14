import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProductCard } from "@/components/shop/ProductCard";
import { bestSellers, categories, products } from "@/data/catalog";
import hero from "@/assets/hero.jpg";
import promo from "@/assets/promo-banner.jpg";

const title = "Verdane — Premium Fashion Essentials";
const description =
  "Verdane crafts considered fashion essentials: tailored menswear, modern womenswear, accessories and home pieces, made in small batches.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const perks = [
  { icon: Truck, title: "Free shipping", copy: "On orders over $75" },
  { icon: ShieldCheck, title: "Secure payment", copy: "Encrypted checkout" },
  { icon: RotateCcw, title: "Easy returns", copy: "30-day return window" },
  { icon: Headphones, title: "Support", copy: "Mon–Sat, 9am–7pm" },
];

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-sand">
          <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
            <div className="min-w-0">
              <p className="eyebrow text-primary/70">New season collection</p>
              <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Elevate your
                <br /> everyday style
              </h1>
              <p className="mt-5 max-w-md text-base text-muted-foreground">
                Premium fabrics, quiet detailing and silhouettes designed to be worn far beyond a
                single season.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Shop now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-7 py-3 text-sm transition-colors hover:bg-primary/5"
                >
                  Explore lookbook
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-md shadow-lift">
              <img
                src={hero}
                alt="Model wearing an olive overshirt from the new Verdane collection"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Perks */}
        <section aria-label="Service highlights" className="border-y border-border bg-card">
          <div className="container-page grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="flex min-w-0 items-center gap-3">
                <p.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{p.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="container-page py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-muted-foreground">Browse</p>
              <h2 className="mt-2 text-3xl">Shop by category</h2>
            </div>
            <Link to="/" className="shrink-0 text-sm text-primary hover:text-accent">
              View all →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/"
                className="group relative overflow-hidden rounded-md bg-secondary shadow-soft"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 pt-12">
                  <h3 className="text-lg text-background">{c.name}</h3>
                  <p className="text-xs text-background/75">{c.blurb} →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Promo banner */}
        <section className="container-page">
          <div className="relative overflow-hidden rounded-md">
            <img
              src={promo}
              alt="Seasonal edit of sneakers and accessories"
              loading="lazy"
              width={1400}
              height={700}
              className="h-[280px] w-full object-cover sm:h-[340px]"
            />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-primary/90 via-primary/70 to-transparent p-8 sm:p-12">
              <div className="max-w-sm text-primary-foreground">
                <p className="eyebrow text-accent">The edit</p>
                <h2 className="mt-3 text-3xl text-primary-foreground sm:text-4xl">
                  Premium pieces, honest prices
                </h2>
                <p className="mt-3 text-sm text-primary-foreground/80">
                  Up to 30% off selected outerwear, footwear and accessories.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Explore deals <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="container-page py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-muted-foreground">Curated</p>
              <h2 className="mt-2 text-3xl">Featured products</h2>
            </div>
            <Link to="/" className="shrink-0 text-sm text-primary hover:text-accent">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Best sellers */}
        <section className="bg-card py-16">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-muted-foreground">Loved most</p>
                <h2 className="mt-2 text-3xl">Best sellers</h2>
              </div>
              <Link to="/" className="shrink-0 text-sm text-primary hover:text-accent">
                View all →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {bestSellers.map((p) => (
                <ProductCard key={`bs-${p.id}`} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="container-page py-16">
          <div className="rounded-md border border-border bg-sand px-6 py-12 text-center sm:px-12">
            <p className="eyebrow text-primary/70">Stay in touch</p>
            <h2 className="mx-auto mt-3 max-w-lg text-3xl">
              Early access to new arrivals and private sales
            </h2>
            <form
              className="mx-auto mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
