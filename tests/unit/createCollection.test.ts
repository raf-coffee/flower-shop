import { describe, it, expect, vi, beforeEach } from "vitest";
import { Payload } from "payload";
import { createCollection } from "../../utils";

const createMockPayload = () => ({
  create: vi.fn().mockResolvedValue(undefined),
});

describe("createCollection", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("calls payload.create for each name in the list", async () => {
    const mockPayload = createMockPayload();
    const collection = "flowers";
    const names = ["Rose", "Tulip", "Daisy"];

    await createCollection(
      mockPayload as unknown as Payload,
      collection,
      names,
    );

    expect(mockPayload.create).toHaveBeenCalledTimes(names.length);

    names.forEach((name) => {
      expect(mockPayload.create).toHaveBeenCalledWith({
        collection,
        data: { name },
      });
    });
  });

  it("does not call payload.create when names array is empty", async () => {
    const mockPayload = createMockPayload();
    const collection = "tags";
    const names: string[] = [];

    await createCollection(
      mockPayload as unknown as Payload,
      collection,
      names,
    );

    expect(mockPayload.create).not.toHaveBeenCalled();
  });

  it("uses the correct collection name", async () => {
    const mockPayload = createMockPayload();
    const collection = "occasions";
    const names = ["Birthday", "Anniversary"];

    await createCollection(
      mockPayload as unknown as Payload,
      collection,
      names,
    );

    names.forEach((name) => {
      expect(mockPayload.create).toHaveBeenCalledWith({
        collection,
        data: { name },
      });
    });
  });
});
