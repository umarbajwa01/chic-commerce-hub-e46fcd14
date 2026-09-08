import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { categories } from "@/data/catalog";
import { useWishlist } from "@/lib/wishlist";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Shop", to: "/shop" as const },
  { label: "Categories", to: "/categories" as const },
  { label: "About", to: "/" as const },
  { label: "Contact", to: "/" as const },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Verdane home">
      <span
        aria-hidden
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground"
      >
        V
      </span>
      <span className="font-display text-xl tracking-tight">Verdane</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const wishlist = useWishlist();

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    setOpen(false);
    navigate({ to: "/search", search: { q: query.trim() } });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="bg-primary text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between text-[11px] tracking-wide">
          <p className="truncate">Complimentary shipping on orders over $75</p>
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <Link to="/" className="hover:text-accent">
              Track order
            </Link>
            <span aria-hidden className="opacity-40">
              |
            </span>
            <Link to="/" className="hover:text-accent">
              Help
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Logo />
        </div>

        <nav aria-label="Main" className="hidden justify-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
          >
            {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>
          <Link
            to="/"
            aria-label={`Wishlist, ${wishlist.count} items`}
            className="relative hidden h-10 w-10 place-items-center rounded-full hover:bg-secondary sm:grid"
          >
            <Heart className="h-5 w-5" />
            {wishlist.count > 0 && (
              <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] font-medium text-accent-foreground">
                {wishlist.count}
              </span>
            )}
          </Link>
          <Link
            to="/"
            aria-label="Account"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            to="/"
            aria-label="Cart, 0 items"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] font-medium text-accent-foreground">
              0
            </span>
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-background">
          <form role="search" onSubmit={submitSearch} className="container-page flex gap-2 py-3">
            <div className="relative min-w-0 flex-1">
              <label htmlFor="header-search" className="sr-only">
                Search products
              </label>
              <Search
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="header-search"
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for jackets, knitwear, shoes…"
                className="w-full rounded-sm border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus-visible:border-primary"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border/60 py-3 text-sm last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-2 py-3">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
