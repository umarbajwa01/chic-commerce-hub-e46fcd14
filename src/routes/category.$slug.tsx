import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { categories, products } from "@/data/catalog";
import { shopSearchSchema, type ShopSearch } from "@/lib/shop-search";

export const Route = createFileRoute("/category/$slug")({
  validateSearch: zodValidator(shopSearchSchema),
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — Verdane" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.category.name} — Verdane`;
    const d = loaderData.category.description;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryNotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container-page py-24 text-center">
        <h1 className="text-3xl">We couldn't find that category</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          It may have been renamed or removed from the collection.
        </p>
        <Link
          to="/categories"
          className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground"
        >
          Browse all categories
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/category/$slug" });
  const update = (patch: Partial<ShopSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  const source = products.filter((p) => p.category === category.slug);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-sand">
          <div className="container-page grid items-center gap-8 py-12 md:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
                <span aria-hidden> / </span>
                <Link to="/categories" className="hover:text-primary">
                  Categories
                </Link>
                <span aria-hidden> / </span>
                <span className="text-foreground">{category.name}</span>
              </nav>
              <h1 className="mt-4 text-4xl sm:text-5xl">{category.name}</h1>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">{category.description}</p>
            </div>
            <div className="overflow-hidden rounded-md shadow-lift">
              <img
                src={category.image}
                alt={`${category.name} collection`}
                width={1200}
                height={800}
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
          </div>
        </section>

        <div className="container-page py-10">
          <ShopBrowser
            search={search}
            update={update}
            source={source}
            showCategoryFilter={false}
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
