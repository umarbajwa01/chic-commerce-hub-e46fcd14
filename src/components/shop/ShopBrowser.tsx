import { SlidersHorizontal, Search as SearchIcon, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { ProductGrid } from "./ProductGrid";
import {
  allColors,
  allSizes,
  categories,
  filterProducts,
  priceBounds,
  products as allProducts,
  sortOptions,
  type Product,
} from "@/data/catalog";
import type { ShopSearch } from "@/lib/shop-search";
import { cn } from "@/lib/utils";

type Props = {
  search: ShopSearch;
  update: (patch: Partial<ShopSearch>) => void;
  source?: Product[];
  showCategoryFilter?: boolean;
  showSearchField?: boolean;
};

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 accent-[var(--primary)]"
      />
      <span className="truncate">{label}</span>
    </label>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-border/70 py-5 first:pt-0 last:border-0">
      <h3 className="eyebrow mb-3 text-muted-foreground">{title}</h3>
      {children}
    </section>
  );
}

export function ShopBrowser({
  search,
  update,
  source = allProducts,
  showCategoryFilter = true,
  showSearchField = true,
}: Props) {
  const [query, setQuery] = useState(search.q);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const priceId = useId();

  useEffect(() => setQuery(search.q), [search.q]);

  const results = filterProducts(
    {
      q: search.q,
      category: search.category,
      size: search.size,
      color: search.color,
      maxPrice: search.maxPrice,
      inStockOnly: search.inStockOnly,
      sort: search.sort,
    },
    source,
  );
  const visible = results.slice(0, search.show);

  const activeCount =
    search.category.length +
    search.size.length +
    search.color.length +
    (search.inStockOnly ? 1 : 0) +
    (search.maxPrice < priceBounds.max ? 1 : 0);

  const clearAll = () =>
    update({
      category: [],
      size: [],
      color: [],
      maxPrice: priceBounds.max,
      inStockOnly: false,
      show: 12,
    });

  const filters = (
    <div>
      {showCategoryFilter && (
        <FilterGroup title="Category">
          {categories.map((c) => (
            <CheckRow
              key={c.slug}
              label={c.name}
              checked={search.category.includes(c.slug)}
              onChange={() => update({ category: toggle(search.category, c.slug), show: 12 })}
            />
          ))}
        </FilterGroup>
      )}

      <FilterGroup title="Price">
        <label htmlFor={priceId} className="sr-only">
          Maximum price
        </label>
        <input
          id={priceId}
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          step={5}
          value={search.maxPrice}
          onChange={(e) => update({ maxPrice: Number(e.target.value), show: 12 })}
          className="w-full accent-[var(--primary)]"
        />
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>${priceBounds.min}</span>
          <span>Up to ${search.maxPrice}</span>
        </div>
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => {
            const active = search.size.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={active}
                onClick={() => update({ size: toggle(search.size, s), show: 12 })}
                className={cn(
                  "min-w-10 rounded-sm border px-2.5 py-1.5 text-xs transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50",
                )}
              >
                {s}
              </button>
            );
          })}
        </div>
      </FilterGroup>

      <FilterGroup title="Colour">
        {allColors.map((c) => (
          <CheckRow
            key={c}
            label={c}
            checked={search.color.includes(c)}
            onChange={() => update({ color: toggle(search.color, c), show: 12 })}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Availability">
        <CheckRow
          label="In stock only"
          checked={search.inStockOnly}
          onChange={() => update({ inStockOnly: !search.inStockOnly, show: 12 })}
        />
      </FilterGroup>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-4 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
        >
          <X className="h-4 w-4" /> Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-28">{filters}</div>
      </aside>

      <div className="min-w-0">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {showSearchField && (
            <form
              className="relative min-w-0 flex-1"
              onSubmit={(e) => {
                e.preventDefault();
                update({ q: query, show: 12 });
              }}
              role="search"
            >
              <label htmlFor="shop-search" className="sr-only">
                Search products
              </label>
              <SearchIcon
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="shop-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="w-full rounded-sm border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus-visible:border-primary"
              />
            </form>
          )}

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-2.5 text-sm lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters{activeCount ? ` (${activeCount})` : ""}
            </button>

            <label htmlFor="shop-sort" className="sr-only">
              Sort products
            </label>
            <select
              id="shop-sort"
              value={search.sort}
              onChange={(e) => update({ sort: e.target.value })}
              className="rounded-sm border border-border bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-primary"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="absolute inset-0 bg-foreground/40"
            />
            <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-background shadow-lift">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h2 className="font-display text-lg">Filters</h2>
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  aria-label="Close filters"
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">{filters}</div>
              <div className="border-t border-border p-4">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="w-full rounded-sm bg-primary py-3 text-sm text-primary-foreground"
                >
                  Show {results.length} results
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} of {results.length} products
          {search.q ? ` for “${search.q}”` : ""}
        </p>

        {results.length === 0 ? (
          <div className="mt-8 rounded-md border border-dashed border-border bg-card px-6 py-16 text-center">
            <h2 className="text-2xl">Nothing matches those filters</h2>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
              Try a different search term, widen your price range, or clear a few filters.
            </p>
            <button
              type="button"
              onClick={() => {
                clearAll();
                update({ q: "" });
              }}
              className="mt-6 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reset everything
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <ProductGrid products={visible} />
            {visible.length < results.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => update({ show: search.show + 12 })}
                  className="rounded-sm border border-primary/30 px-8 py-3 text-sm transition-colors hover:bg-primary/5"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
