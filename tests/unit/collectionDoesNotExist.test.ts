import { describe, it, expect, vi, beforeEach } from "vitest";
import { Payload } from "payload";
import { collectionDoesNotExist } from "../../utils";

const createMockPayload = (totalDocs: number) => ({
  find: vi.fn().mockResolvedValue({ totalDocs }),
});

describe("collectionDoesNotExist", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns true when collection has 0 documents", async () => {
    const mockPayload = createMockPayload(0);
    const result = await collectionDoesNotExist(
      mockPayload as unknown as Payload,
      "tags",
    );
    expect(result).toBe(true);
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: "tags",
      limit: 1,
    });
  });

  it("returns false when collection has 1 document", async () => {
    const mockPayload = createMockPayload(1);
    const result = await collectionDoesNotExist(
      mockPayload as unknown as Payload,
      "occasions",
    );
    expect(result).toBe(false);
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: "occasions",
      limit: 1,
    });
  });

  it("uses default limit of 1 when not provided", async () => {
    const mockPayload = createMockPayload(0);
    await collectionDoesNotExist(mockPayload as unknown as Payload, "flowers");
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: "flowers",
      limit: 1,
    });
  });

  it("respects custom limit value", async () => {
    const mockPayload = createMockPayload(0);
    await collectionDoesNotExist(mockPayload as unknown as Payload, "whom", 5);
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: "whom",
      limit: 5,
    });
  });

  it("still checks for zero docs even with high limit", async () => {
    const mockPayload = createMockPayload(0);
    const result = await collectionDoesNotExist(
      mockPayload as unknown as Payload,
      "reviews",
      10,
    );
    expect(result).toBe(true);
    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: "reviews",
      limit: 10,
    });
  });
});
