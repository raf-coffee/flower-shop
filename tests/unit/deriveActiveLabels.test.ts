import { deriveActiveLabels } from "@/utils";

describe("deriveActiveLabels", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: "9.99",
    description: "A test product",
    available: true,
    sale: false,
    updatedAt: "2024-01-01",
    createdAt: "2024-01-01",
  };

  it("returns empty array when no tags are provided", () => {
    const product = { ...mockProduct, tags: [] };
    const result = deriveActiveLabels(product);
    expect(result).toEqual([]);
  });

  it("matches label by numeric tag", () => {
    const product = { ...mockProduct, tags: [1] };
    const result = deriveActiveLabels(product);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      title: "Хит продаж",
      bg: "#FD4F79",
    });
  });

  it("matches label by object tag with id", () => {
    const product = {
      ...mockProduct,
      tags: [
        {
          id: 2,
          name: "foobar",
          createdAt: "2025-06-07",
          updatedAt: "2025-06-07",
        },
      ],
    };
    const result = deriveActiveLabels(product);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      title: "Новинка",
      bg: "#4AE950",
    });
  });

  it("ignores non-matching tags", () => {
    const product = {
      ...mockProduct,
      tags: [
        3,
        {
          id: 6,
          name: "foobar",
          createdAt: "2025-06-07",
          updatedAt: "2025-06-07",
        },
      ],
    };
    const result = deriveActiveLabels(product);
    expect(result).toEqual([]);
  });
});
