import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { shopSearchSchema, type ShopSearch } from "@/lib/shop-search";

const title = "Search — Verdane";
const description = "Search the Verdane collection by name, colour or category.";

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(shopSearchSchema),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const update = (patch: Partial<ShopSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page py-10">
        <h1 className="text-3xl">
          {search.q ? `Results for “${search.q}”` : "Search the collection"}
        </h1>
        <div className="mt-8">
          <ShopBrowser search={search} update={update} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
