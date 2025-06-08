import { Payload } from "payload";
import fs from "fs";
import { uploadImages } from "@/utils";
import type { ProductCollections } from "@/types";

const mockPayload = {
  find: vi.fn(),
  create: vi.fn(),
} as unknown as Payload;

vi.mock("fs", () => ({
  default: {
    existsSync: vi.fn(),
    unlink: vi.fn((_, callback) => callback(null)),
  },
}));

describe("uploadImages", () => {
  const mockCollection = "flowers" as ProductCollections;
  const mockImageNames = ["image1.jpg", "image2.png"];
  const mockDocs = [
    { id: "1", filename: "image1.jpg" },
    { id: "2", filename: "image2.png" },
  ];
  const mockMedia = { id: "3", filename: "new-image.jpg" };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return existing media when images already exist in Payload", async () => {
    mockPayload.find = vi.fn().mockResolvedValue({ docs: [mockDocs[0]] });

    const result = await uploadImages(mockPayload, mockCollection, [
      mockImageNames[0],
    ]);

    expect(mockPayload.find).toHaveBeenCalledWith({
      collection: "media",
      where: { filename: { equals: mockImageNames[0] } },
    });
    expect(result).toEqual([mockDocs[0]]);
    expect(mockPayload.create).not.toHaveBeenCalled();
  });

  it("should upload new images when they dont exist in Payload", async () => {
    mockPayload.find = vi.fn().mockResolvedValue({ docs: [] });

    mockPayload.create = vi.fn().mockResolvedValue(mockMedia);

    vi.mocked(fs.existsSync).mockReturnValue(false);

    const result = await uploadImages(mockPayload, mockCollection, [
      "new-image.jpg",
    ]);

    expect(mockPayload.find).toHaveBeenCalled();
    expect(mockPayload.create).toHaveBeenCalledWith({
      collection: "media",
      data: {
        alt: "",
        filename: "new-image.jpg",
        collection: mockCollection,
        type: "new",
      },
      filePath: expect.stringContaining(
        `/static/${mockCollection}/new-image.jpg`,
      ),
    });
    expect(result).toEqual([mockMedia]);
  });

  it("should delete existing file before uploading if it exists locally", async () => {
    mockPayload.find = vi.fn().mockResolvedValue({ docs: [] });
    mockPayload.create = vi.fn().mockResolvedValue(mockMedia);
    vi.mocked(fs.existsSync).mockReturnValue(true);

    await uploadImages(mockPayload, mockCollection, ["new-image.jpg"]);

    expect(fs.existsSync).toHaveBeenCalledWith(
      expect.stringContaining("/media/new-image.jpg"),
    );
    expect(fs.unlink).toHaveBeenCalledWith(
      expect.stringContaining("/media/new-image.jpg"),
      expect.any(Function),
    );
  });

  it("should handle multiple images", async () => {
    mockPayload.find = vi
      .fn()
      .mockResolvedValueOnce({ docs: [mockDocs[0]] })
      .mockResolvedValueOnce({ docs: [] });
    mockPayload.create = vi.fn().mockResolvedValue(mockMedia);
    vi.mocked(fs.existsSync).mockReturnValue(false);

    const result = await uploadImages(
      mockPayload,
      mockCollection,
      mockImageNames,
    );

    expect(mockPayload.find).toHaveBeenCalledTimes(2);
    expect(mockPayload.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual([mockDocs[0], mockMedia]);
  });

  it("should throw error if file deletion fails", async () => {
    mockPayload.find = vi.fn().mockResolvedValue({ docs: [] });
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.unlink).mockImplementation((path, callback) =>
      callback(new Error("Delete failed")),
    );

    await expect(
      uploadImages(mockPayload, mockCollection, ["new-image.jpg"]),
    ).rejects.toThrow("Delete failed");
  });

  it("should handle different image types based on filename", async () => {
    mockPayload.find = vi.fn().mockResolvedValue({ docs: [] });
    mockPayload.create = vi.fn().mockResolvedValue(mockMedia);
    vi.mocked(fs.existsSync).mockReturnValue(false);

    await uploadImages(mockPayload, mockCollection, ["type-name-version.jpg"]);

    expect(mockPayload.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          type: "type",
        }),
      }),
    );
  });

  it("should handle empty imageNames array", async () => {
    const result = await uploadImages(mockPayload, mockCollection, []);
    expect(result).toEqual([]);
    expect(mockPayload.find).not.toHaveBeenCalled();
    expect(mockPayload.create).not.toHaveBeenCalled();
  });
});
