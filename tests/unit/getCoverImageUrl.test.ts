import { getCoverImageUrl } from "@/utils";
import { Media } from "@/payload-types";

describe("getCoverImageUrl", () => {
  const baseProduct = {
    id: 1,
    name: "Test Product",
    price: "9.99",
    description: "A test product",
    available: true,
    sale: false,
    occasions: [],
    tags: [],
    categories: [],
    reviews: [],
    whom: [],
    updatedAt: "2024-01-01",
    createdAt: "2024-01-01",
  };

  const mockMedia = (url: string): Media => ({
    id: 1,
    url,
    alt: null,
    collection: null,
    type: null,
    updatedAt: "2024-01-01",
    createdAt: "2024-01-01",
    thumbnailURL: null,
    filename: null,
    mimeType: null,
    filesize: null,
    width: null,
    height: null,
    focalX: null,
    focalY: null,
  });

  it("returns the url when the first image is a valid Media object", () => {
    const product = {
      ...baseProduct,
      images: [mockMedia("https://example.com/image.jpg"), 2],
    };
    const result = getCoverImageUrl(product);
    expect(result).toBe("https://example.com/image.jpg");
  });

  it("returns null when the first image is just an ID", () => {
    const product = {
      ...baseProduct,
      images: [2, mockMedia("https://example.com/image.jpg")],
    };
    const result = getCoverImageUrl(product);
    expect(result).toBeNull();
  });

  it("returns null when no images are provided", () => {
    const product = {
      ...baseProduct,
      images: undefined,
    };
    const result = getCoverImageUrl(product);
    expect(result).toBeNull();
  });
});
