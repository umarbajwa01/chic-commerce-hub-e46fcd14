import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catHome from "@/assets/cat-home.jpg";
import pSneakers from "@/assets/p-sneakers.jpg";
import pJacket from "@/assets/p-jacket.jpg";
import pBag from "@/assets/p-bag.jpg";
import pSweater from "@/assets/p-sweater.jpg";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string; // category slug
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  inStock: boolean;
  sizes: string[];
  colors: string[];
  addedAt: string; // ISO date, used for "newest" sorting
};

export const categories: Category[] = [
  {
    slug: "men",
    name: "Men",
    blurb: "Tailored essentials",
    description:
      "Overshirts, knitwear and trousers cut from durable natural fabrics, designed to layer season after season.",
    image: catMen,
  },
  {
    slug: "women",
    name: "Women",
    blurb: "Modern silhouettes",
    description:
      "Fluid tailoring, soft merino and easy dresses with quiet detailing and a considered fit.",
    image: catWomen,
  },
  {
    slug: "shoes",
    name: "Shoes",
    blurb: "Made to walk",
    description: "Low sneakers, loafers and boots built on comfortable lasts with resoleable soles.",
    image: pSneakers,
  },
  {
    slug: "accessories",
    name: "Accessories",
    blurb: "Finishing details",
    description: "Leather goods, belts and small pieces finished by hand in small batches.",
    image: catAccessories,
  },
  {
    slug: "home",
    name: "Home & Living",
    blurb: "Considered comfort",
    description: "Throws, ceramics and textiles that bring the same calm palette into your rooms.",
    image: catHome,
  },
];

export const APPAREL_SIZES = ["XS", "S", "M", "L", "XL"];
export const SHOE_SIZES = ["39", "40", "41", "42", "43", "44"];
export const ONE_SIZE = ["One size"];

export const allSizes = [...APPAREL_SIZES, ...SHOE_SIZES, ...ONE_SIZE];

export const allColors = [
  "Olive",
  "Forest",
  "Cream",
  "Sand",
  "Charcoal",
  "Brass",
  "Chocolate",
  "Ecru",
];

type Seed = Omit<Product, "id" | "slug"> & { slug: string };

const seeds: Seed[] = [
  {
    slug: "field-overshirt-olive",
    name: "Field Overshirt",
    category: "men",
    price: 89.99,
    compareAt: 119.99,
    rating: 4.6,
    reviews: 124,
    image: pJacket,
    badge: "25% off",
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Olive", "Charcoal"],
    addedAt: "2026-08-18",
  },
  {
    slug: "atelier-low-sneaker",
    name: "Atelier Low Sneaker",
    category: "shoes",
    price: 79.99,
    rating: 4.8,
    reviews: 96,
    image: pSneakers,
    badge: "New",
    inStock: true,
    sizes: SHOE_SIZES,
    colors: ["Cream", "Charcoal"],
    addedAt: "2026-09-01",
  },
  {
    slug: "merino-crew-knit",
    name: "Merino Crew Knit",
    category: "women",
    price: 64.5,
    compareAt: 82,
    rating: 4.5,
    reviews: 58,
    image: pSweater,
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Ecru", "Forest"],
    addedAt: "2026-07-22",
  },
  {
    slug: "carryall-leather-holdall",
    name: "Carryall Leather Holdall",
    category: "accessories",
    price: 189,
    rating: 4.9,
    reviews: 41,
    image: pBag,
    badge: "Best seller",
    inStock: false,
    sizes: ONE_SIZE,
    colors: ["Chocolate"],
    addedAt: "2026-06-11",
  },
  {
    slug: "heavyweight-cotton-tee",
    name: "Heavyweight Cotton Tee",
    category: "men",
    price: 34,
    rating: 4.4,
    reviews: 212,
    image: catMen,
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Cream", "Charcoal", "Forest"],
    addedAt: "2026-05-30",
  },
  {
    slug: "pleated-wool-trouser",
    name: "Pleated Wool Trouser",
    category: "men",
    price: 129,
    compareAt: 158,
    rating: 4.7,
    reviews: 67,
    image: pJacket,
    badge: "18% off",
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Charcoal", "Sand"],
    addedAt: "2026-08-02",
  },
  {
    slug: "quilted-liner-jacket",
    name: "Quilted Liner Jacket",
    category: "men",
    price: 165,
    rating: 4.6,
    reviews: 39,
    image: pJacket,
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Olive", "Forest"],
    addedAt: "2026-08-27",
  },
  {
    slug: "linen-camp-shirt",
    name: "Linen Camp Shirt",
    category: "men",
    price: 74,
    rating: 4.3,
    reviews: 88,
    image: catMen,
    inStock: false,
    sizes: APPAREL_SIZES,
    colors: ["Ecru", "Sand"],
    addedAt: "2026-04-14",
  },
  {
    slug: "silk-slip-dress",
    name: "Silk Slip Dress",
    category: "women",
    price: 148,
    rating: 4.8,
    reviews: 73,
    image: catWomen,
    badge: "New",
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Sand", "Forest"],
    addedAt: "2026-09-03",
  },
  {
    slug: "relaxed-poplin-shirt",
    name: "Relaxed Poplin Shirt",
    category: "women",
    price: 82,
    compareAt: 98,
    rating: 4.5,
    reviews: 104,
    image: catWomen,
    badge: "16% off",
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Cream", "Olive"],
    addedAt: "2026-07-05",
  },
  {
    slug: "wide-leg-denim",
    name: "Wide Leg Denim",
    category: "women",
    price: 112,
    rating: 4.4,
    reviews: 51,
    image: catWomen,
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Ecru", "Charcoal"],
    addedAt: "2026-06-24",
  },
  {
    slug: "cashmere-rib-cardigan",
    name: "Cashmere Rib Cardigan",
    category: "women",
    price: 215,
    rating: 4.9,
    reviews: 34,
    image: pSweater,
    badge: "Best seller",
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Ecru", "Sand"],
    addedAt: "2026-08-12",
  },
  {
    slug: "lambswool-turtleneck",
    name: "Lambswool Turtleneck",
    category: "women",
    price: 96,
    rating: 4.2,
    reviews: 46,
    image: pSweater,
    inStock: false,
    sizes: APPAREL_SIZES,
    colors: ["Forest", "Cream"],
    addedAt: "2026-03-19",
  },
  {
    slug: "suede-derby-shoe",
    name: "Suede Derby Shoe",
    category: "shoes",
    price: 168,
    compareAt: 198,
    rating: 4.6,
    reviews: 29,
    image: pSneakers,
    badge: "15% off",
    inStock: true,
    sizes: SHOE_SIZES,
    colors: ["Chocolate", "Charcoal"],
    addedAt: "2026-07-30",
  },
  {
    slug: "canvas-court-trainer",
    name: "Canvas Court Trainer",
    category: "shoes",
    price: 68,
    rating: 4.1,
    reviews: 143,
    image: pSneakers,
    inStock: true,
    sizes: SHOE_SIZES,
    colors: ["Cream", "Olive"],
    addedAt: "2026-05-08",
  },
  {
    slug: "shearling-house-slipper",
    name: "Shearling House Slipper",
    category: "shoes",
    price: 92,
    rating: 4.7,
    reviews: 22,
    image: pSneakers,
    inStock: false,
    sizes: SHOE_SIZES,
    colors: ["Sand"],
    addedAt: "2026-02-27",
  },
  {
    slug: "bridle-leather-belt",
    name: "Bridle Leather Belt",
    category: "accessories",
    price: 58,
    rating: 4.5,
    reviews: 77,
    image: catAccessories,
    inStock: true,
    sizes: APPAREL_SIZES,
    colors: ["Chocolate", "Charcoal"],
    addedAt: "2026-06-02",
  },
  {
    slug: "brass-buckle-cardholder",
    name: "Brass Buckle Cardholder",
    category: "accessories",
    price: 42,
    compareAt: 55,
    rating: 4.3,
    reviews: 63,
    image: catAccessories,
    badge: "24% off",
    inStock: true,
    sizes: ONE_SIZE,
    colors: ["Brass", "Chocolate"],
    addedAt: "2026-08-21",
  },
  {
    slug: "wool-scarf-forest",
    name: "Brushed Wool Scarf",
    category: "accessories",
    price: 65,
    rating: 4.6,
    reviews: 38,
    image: catAccessories,
    inStock: true,
    sizes: ONE_SIZE,
    colors: ["Forest", "Sand"],
    addedAt: "2026-09-05",
  },
  {
    slug: "structured-tote",
    name: "Structured Day Tote",
    category: "accessories",
    price: 225,
    rating: 4.8,
    reviews: 26,
    image: pBag,
    badge: "New",
    inStock: true,
    sizes: ONE_SIZE,
    colors: ["Chocolate", "Charcoal"],
    addedAt: "2026-09-06",
  },
  {
    slug: "linen-throw-blanket",
    name: "Washed Linen Throw",
    category: "home",
    price: 98,
    rating: 4.7,
    reviews: 45,
    image: catHome,
    inStock: true,
    sizes: ONE_SIZE,
    colors: ["Ecru", "Olive"],
    addedAt: "2026-07-11",
  },
  {
    slug: "stoneware-mug-set",
    name: "Stoneware Mug Set",
    category: "home",
    price: 46,
    compareAt: 60,
    rating: 4.4,
    reviews: 91,
    image: catHome,
    badge: "23% off",
    inStock: true,
    sizes: ONE_SIZE,
    colors: ["Sand", "Charcoal"],
    addedAt: "2026-04-29",
  },
  {
    slug: "cotton-waffle-robe",
    name: "Cotton Waffle Robe",
    category: "home",
    price: 118,
    rating: 4.6,
    reviews: 31,
    image: catHome,
    inStock: false,
    sizes: APPAREL_SIZES,
    colors: ["Cream", "Forest"],
    addedAt: "2026-03-05",
  },
  {
    slug: "beeswax-candle-cedar",
    name: "Cedar Beeswax Candle",
    category: "home",
    price: 32,
    rating: 4.2,
    reviews: 118,
    image: catHome,
    inStock: true,
    sizes: ONE_SIZE,
    colors: ["Sand"],
    addedAt: "2026-06-17",
  },
];

export const products: Product[] = seeds.map((s, i) => ({ ...s, id: String(i + 1) }));

export const featuredProducts: Product[] = products.slice(0, 4);

export const bestSellers: Product[] = products.filter((p) => p.reviews > 60).slice(0, 4);

export const priceBounds = {
  min: 0,
  max: Math.ceil(Math.max(...products.map((p) => p.price)) / 10) * 10,
};

export function categoryName(slug: string) {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

export type ShopFilters = {
  q: string;
  category: string[];
  size: string[];
  color: string[];
  maxPrice: number;
  inStockOnly: boolean;
  sort: string;
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

export function filterProducts(filters: ShopFilters, source: Product[] = products) {
  const q = filters.q.trim().toLowerCase();
  const list = source.filter((p) => {
    if (q && !`${p.name} ${categoryName(p.category)} ${p.colors.join(" ")}`.toLowerCase().includes(q))
      return false;
    if (filters.category.length && !filters.category.includes(p.category)) return false;
    if (filters.size.length && !filters.size.some((s) => p.sizes.includes(s))) return false;
    if (filters.color.length && !filters.color.some((c) => p.colors.includes(c))) return false;
    if (p.price > filters.maxPrice) return false;
    if (filters.inStockOnly && !p.inStock) return false;
    return true;
  });

  switch (filters.sort) {
    case "newest":
      return [...list].sort((a, b) => b.addedAt.localeCompare(a.addedAt));
    case "price-asc":
      return [...list].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...list].sort((a, b) => b.price - a.price);
    case "rating":
      return [...list].sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}
