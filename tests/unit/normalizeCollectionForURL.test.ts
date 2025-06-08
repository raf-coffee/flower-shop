import { normalizeCollectionForURL } from "@/utils";
import type { ProductCollections } from "@/types";

describe("normalizeCollectionForURL", () => {
  const testCases: Array<[ProductCollections, string]> = [
    ["accessories", "accessories"],
    ["baloons", "baloons"],
    ["flowers", "flowers"],
    ["fruitCarts", "fruit-carts"],
    ["indoors", "indoor-plants"],
    ["gifts", "gifts"],
    ["sweets", "sweets"],
  ];

  it.each(testCases)('should transform "%s" to "%s"', (input, expected) => {
    expect(normalizeCollectionForURL(input)).toBe(expected);
  });

  it("should return same value for unmapped collections", () => {
    const unmapped: ProductCollections[] = [
      "accessories",
      "baloons",
      "flowers",
      "gifts",
      "sweets",
    ];

    unmapped.forEach((collection) => {
      expect(normalizeCollectionForURL(collection)).toBe(collection);
    });
  });

  it("should transform mapped collections correctly", () => {
    const mappedCases: Array<[ProductCollections, string]> = [
      ["fruitCarts", "fruit-carts"],
      ["indoors", "indoor-plants"],
    ];

    mappedCases.forEach(([input, expected]) => {
      expect(normalizeCollectionForURL(input)).toBe(expected);
    });
  });

  it("should always return string type", () => {
    const collection: ProductCollections = "flowers";
    const result = normalizeCollectionForURL(collection);
    expect(typeof result).toBe("string");
  });
});
