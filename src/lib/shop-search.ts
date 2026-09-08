import { fallback } from "@tanstack/zod-adapter";
import { z } from "zod";

import { priceBounds } from "@/data/catalog";

export const shopSearchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string().array(), []).default([]),
  size: fallback(z.string().array(), []).default([]),
  color: fallback(z.string().array(), []).default([]),
  maxPrice: fallback(z.number(), priceBounds.max).default(priceBounds.max),
  inStockOnly: fallback(z.boolean(), false).default(false),
  sort: fallback(z.string(), "featured").default("featured"),
  show: fallback(z.number().int(), 12).default(12),
});

export type ShopSearch = z.infer<typeof shopSearchSchema>;
