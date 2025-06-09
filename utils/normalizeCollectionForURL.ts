import { ProductCollections } from "@/types";

const mapping = {
  fruitCarts: "fruit-carts",
  indoors: "indoor-plants",
};
type MappedURL = keyof typeof mapping;

function isMapped(key: string): key is MappedURL {
  return Object.hasOwn(mapping, key);
}

export default function normalizeCollectionForURL<T extends ProductCollections>(
  collection: T,
) {
  return isMapped(collection) ? mapping[collection] : collection;
}
