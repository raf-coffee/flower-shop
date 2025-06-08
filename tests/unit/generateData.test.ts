import { faker } from "@faker-js/faker";
import { generateData, generate } from "@/utils/generateData";
import type {
  Media,
  Category,
  Occasion,
  Review,
  Tag,
  Whom,
  Flower,
} from "@/payload-types";
import type { GenerateDataOptions, ProductCollections } from "@/types";

vi.mock("@/utils/generateRelation", () => ({
  default: vi.fn((data, count) => data.slice(0, count)),
}));

describe("generate helper functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("name generator", () => {
    it("should return a random name from the provided array", () => {
      const names = ["Rose", "Tulip", "Daisy"];
      faker.helpers.arrayElement = vi.fn().mockReturnValue("Tulip");

      const result = generate.name(names);
      expect(result).toBe("Tulip");
      expect(faker.helpers.arrayElement).toHaveBeenCalledWith(names);
    });
  });

  describe("description generator", () => {
    it("should return a random description from the provided array", () => {
      const descriptions = ["Beautiful flower", "Fresh bloom"];
      faker.helpers.arrayElement = vi.fn().mockReturnValue("Fresh bloom");

      const result = generate.description(descriptions);
      expect(result).toBe("Fresh bloom");
      expect(faker.helpers.arrayElement).toHaveBeenCalledWith(descriptions);
    });
  });

  describe("images generator", () => {
    it("should return an array of unique images with specified count", () => {
      const media: Media[] = [
        { id: 1, filename: "image1.jpg" } as Media,
        { id: 2, filename: "image2.jpg" } as Media,
        { id: 3, filename: "image3.jpg" } as Media,
      ];
      faker.helpers.uniqueArray = vi.fn().mockReturnValue(media.slice(0, 2));

      const result = generate.images(media, 2);
      expect(result).toEqual(media.slice(0, 2));
      expect(faker.helpers.uniqueArray).toHaveBeenCalledWith(media, 2);
    });
  });

  describe("price generator", () => {
    it("should generate a price within specified range", () => {
      faker.commerce.price = vi.fn().mockReturnValue("5000");

      const result = generate.price();
      expect(result).toBe("5000");
      expect(faker.commerce.price).toHaveBeenCalledWith({
        min: 4000,
        max: 15000,
        dec: 0,
      });
    });
  });

  describe("sale generator", () => {
    it("should generate a boolean with specified probability", () => {
      faker.datatype.boolean = vi.fn().mockReturnValue(true);

      const result = generate.sale();
      expect(result).toBe(true);
      expect(faker.datatype.boolean).toHaveBeenCalledWith({ probability: 0.4 });
    });
  });

  describe("reviewsCount generator", () => {
    it("should generate a number within specified range", () => {
      faker.number.int = vi.fn().mockReturnValue(5);

      const result = generate.reviewsCount();
      expect(result).toBe(5);
      expect(faker.number.int).toHaveBeenCalledWith({ min: 0, max: 8 });
    });
  });
});

describe("generateData function", () => {
  const mockMedia: Media[] = [
    {
      id: 1,
      filename: "rose.jpg",
      type: "roses",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: 2,
      filename: "tulip.jpg",
      type: "tulips",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: 3,
      filename: "daisy.jpg",
      type: "daisies",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: 4,
      filename: "bouquet.jpg",
      type: "bouquets",
      createdAt: "",
      updatedAt: "",
    },
  ];
  const mockOptions: GenerateDataOptions = {
    count: 3,
    names: ["Rose", "Tulip", "Daisy"],
    descriptions: ["Beautiful", "Elegant", "Fresh"],
    imageIds: mockMedia,
    reviewSet: [
      { id: 1, customer: "John", review: "Great!" } as Review,
      { id: 2, customer: "Jane", review: "Awesome!" } as Review,
    ],
    tagSet: [{ id: 1, name: "popular" } as Tag, { id: 2, name: "new" } as Tag],
    occasionSet: [
      { id: 1, name: "Birthday" } as Occasion,
      { id: 2, name: "Anniversary" } as Occasion,
    ],
    whomSet: [
      { id: 1, name: "Mother" } as Whom,
      { id: 2, name: "Friend" } as Whom,
    ],
    categoriesSet: [
      { id: 1, name: "Розы" } as Category,
      { id: 2, name: "Тюльпаны" } as Category,
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    faker.helpers.arrayElement = vi.fn().mockImplementation((arr) => arr[0]);
    faker.commerce.price = vi.fn().mockReturnValue("5000");
    faker.datatype.boolean = vi.fn().mockReturnValue(false);
    faker.number.int = vi.fn().mockReturnValue(1);
    faker.helpers.multiple = vi.fn().mockImplementation((fn, { count }) => {
      return Array(count)
        .fill(null)
        .map(() => fn());
    });
    faker.helpers.uniqueArray = vi.fn().mockImplementation((arr) => [arr[0]]);
  });

  it("should generate the specified count of items", () => {
    const result = generateData("flowers", mockOptions);
    expect(result.length).toBe(3);
  });

  it("should generate common fields for all collections", () => {
    const result = generateData("accessories", mockOptions);

    const item = result[0];
    expect(item).toMatchObject({
      name: "Rose",
      description: "Beautiful",
      price: "5000",
      available: true,
      sale: false,
    });
    expect(item).toHaveProperty("occasions");
    expect(item).toHaveProperty("tags");
    expect(item).toHaveProperty("whom");
    expect(item).toHaveProperty("reviews");
    expect(item).toHaveProperty("images");
  });

  describe("when generating flowers", () => {
    it("should include type-specific fields", () => {
      faker.helpers.arrayElement = vi
        .fn()
        .mockImplementationOnce((arr) => arr[0])
        .mockImplementation((arr) => arr[0]);

      const result = generateData("flowers", mockOptions);
      const flowerItem = result[0] as Flower;

      expect(flowerItem).toHaveProperty("categories");
      expect(flowerItem.categories).toEqual([mockOptions.categoriesSet[0]]);
      expect(flowerItem.images).toEqual([mockMedia[0]]);
    });

    it("should filter images by selected type", () => {
      faker.helpers.arrayElement = vi
        .fn()
        .mockImplementationOnce((arr) => arr[1])
        .mockImplementation((arr) => arr[2]);

      const result = generateData("flowers", mockOptions);
      const flowerItem = result[1] as Flower;

      expect(flowerItem.images?.[0]).toEqual(mockMedia[1]);
      expect(flowerItem.categories).toEqual([mockOptions.categoriesSet[1]]);
    });
  });

  it("should handle different product collections", () => {
    const collections: ProductCollections[] = [
      "flowers",
      "baloons",
      "fruitCarts",
      "accessories",
      "indoors",
      "gifts",
      "sweets",
    ];

    collections.forEach((collection) => {
      const result = generateData(collection, mockOptions);
      expect(result.length).toBe(3);
      expect(result[0]).toHaveProperty("name");
      expect(result[0]).toHaveProperty("price");
      expect(result[0]).toHaveProperty("description");
    });
  });

  it("should generate different reviews count for each item", () => {
    faker.number.int = vi
      .fn()
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2);

    const result = generateData("flowers", mockOptions);

    expect(result[0]).toHaveProperty("reviews");
    expect(result[1].reviews).toHaveLength(1);
    expect(result[2].reviews).toHaveLength(2);
  });

  it("should handle empty input arrays gracefully", () => {
    const emptyOptions: GenerateDataOptions = {
      ...mockOptions,
      imageIds: [],
      reviewSet: [],
      tagSet: [],
      occasionSet: [],
      whomSet: [],
      categoriesSet: [],
    };

    const result = generateData("flowers", emptyOptions) as Flower[];
    expect(result[0].reviews).toEqual([]);
    expect(result[0].tags).toEqual([]);
    expect(result[0].occasions).toEqual([]);
    expect(result[0].whom).toEqual([]);
    expect(result[0].categories).toEqual([]);
  });
});
