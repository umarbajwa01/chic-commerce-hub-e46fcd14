import { Heart, Star } from "lucide-react";
import type { Product } from "@/data/catalog";
import { useWishlist } from "@/lib/wishlist";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const wishlist = useWishlist();
  const saved = wishlist.has(product.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border/70 bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={() => wishlist.toggle(product.id)}
          className={cn(
            "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 transition-colors hover:text-destructive",
            saved ? "text-destructive" : "text-foreground/70",
          )}
        >
          <Heart className={cn("h-4 w-4", saved && "fill-current")} />
        </button>
        {!product.inStock && (
          <span className="absolute inset-x-0 bottom-0 bg-foreground/75 py-1.5 text-center text-[11px] uppercase tracking-widest text-background">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="eyebrow text-muted-foreground">{product.category}</p>
        <h3 className="mt-1.5 truncate font-display text-lg">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          {product.rating.toFixed(1)}
          <span>({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-base font-medium">${product.price.toFixed(2)}</span>
          {product.compareAt && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.compareAt.toFixed(2)}
            </span>
          )}
        </div>
        <button
          type="button"
          disabled={!product.inStock}
          className="mt-4 w-full rounded-sm bg-primary py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Add to cart" : "Notify me"}
        </button>
      </div>
    </article>
  );
}
