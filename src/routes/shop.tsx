import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { shopSearchSchema, type ShopSearch } from "@/lib/shop-search";

const title = "Shop All — Verdane";
const description =
  "Browse the full Verdane collection: menswear, womenswear, shoes, accessories and home pieces, with filters for size, colour, price and availability.";

export const Route = createFileRoute("/shop")({
  validateSearch: zodValidator(shopSearchSchema),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const update = (patch: Partial<ShopSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="bg-sand">
          <div className="container-page py-12">
            <p className="eyebrow text-primary/70">The collection</p>
            <h1 className="mt-3 text-4xl sm:text-5xl">Shop all</h1>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Every Verdane piece in one place. Filter by category, size, colour and price to find
              exactly what you need.
            </p>
          </div>
        </section>

        <div className="container-page py-10">
          <ShopBrowser search={search} update={update} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
