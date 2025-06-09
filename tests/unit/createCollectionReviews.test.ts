import { createCollectionReviews } from "../../utils";
import { Payload } from "payload";

const mockPayload = {
  create: vi.fn().mockImplementation(async (args) => args.data),
};

vi.mock("@faker-js/faker", () => ({
  fakerRU: {
    person: {
      fullName: vi.fn().mockReturnValue("Иван Иванов"),
    },
  },
}));

describe("createCollectionReviews", () => {
  const sampleReviews = ["Great!", "Awesome service", "Fast delivery"];

  it("should generate reviews with customer names and correct collection", async () => {
    const result = await createCollectionReviews(
      mockPayload as unknown as Payload,
      "flowers",
      sampleReviews,
    );

    expect(result).toHaveLength(sampleReviews.length);
    expect(mockPayload.create).toHaveBeenCalledTimes(sampleReviews.length);

    sampleReviews.forEach((reviewText, index) => {
      const expectedData = {
        review: reviewText,
        customer: "Иван Иванов",
        collection: "flowers",
      };

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: "reviews",
        data: expectedData,
      });

      expect(result[index]).toEqual(expectedData);
    });
  });

  it("should assign correct collection when different one is used", async () => {
    const result = await createCollectionReviews(
      mockPayload as unknown as Payload,
      "gifts",
      ["Nice gift!"],
    );

    expect(result[0].collection).toBe("gifts");

    expect(mockPayload.create).toHaveBeenCalledWith({
      collection: "reviews",
      data: {
        review: "Nice gift!",
        customer: "Иван Иванов",
        collection: "gifts",
      },
    });
  });
});
