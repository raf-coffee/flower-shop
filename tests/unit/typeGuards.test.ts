import { describe, it, expect } from "vitest";
import { isNumbers, isReviews } from "@/utils/typeGuards";
import { Review } from "@/payload-types";

const reviews: Review = {
  id: 1,
  customer: "John",
  review: "Great!",
  collection: "flowers",
  updatedAt: "2024-01-01",
  createdAt: "2024-01-01",
};

describe("isNumbers", () => {
  it("returns true for array of numbers", () => {
    expect(isNumbers([1, 2, 3])).toBe(true);
  });

  it("returns false for array of Review objects", () => {
    expect(isNumbers([reviews])).toBe(false);
  });

  it("returns false for mixed array", () => {
    const mixed = [1, reviews];
    expect(isNumbers(mixed)).toBe(false);
  });

  it("returns true for empty array", () => {
    expect(isNumbers([])).toBe(true);
  });
});

describe("isReviews", () => {
  it("returns true for array of Review objects", () => {
    const reviews = [
      {
        id: 1,
        customer: "Alice",
        review: "Amazing product",
        collection: "flowers",
        updatedAt: "2024-01-01",
        createdAt: "2024-01-01",
      },
    ];
    expect(isReviews(reviews)).toBe(true);
  });

  it("returns false for array of numbers", () => {
    expect(isReviews([1, 2, 3])).toBe(false);
  });

  it("returns false for mixed array", () => {
    const mixed = [reviews, 2];
    expect(isReviews(mixed)).toBe(false);
  });

  it("returns true for empty array", () => {
    expect(isReviews([])).toBe(true);
  });
});
