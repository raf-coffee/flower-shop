import { describe, test, expect } from "vitest";
import { generateRelation } from "../../utils";
import { Occasion } from "../../payload-types";

describe("generateRelation", () => {
  const baseData: Occasion[] = [
    {
      id: 1,
      name: "Birthday",
      updatedAt: "2023-10-10",
      createdAt: "2023-10-09",
    },
    {
      id: 2,
      name: "Anniversary",
      updatedAt: "2023-10-11",
      createdAt: "2023-10-08",
    },
    {
      id: 3,
      name: "Graduation",
      updatedAt: "2023-10-12",
      createdAt: "2023-10-07",
    },
    {
      id: 4,
      name: "Wedding",
      updatedAt: "2023-10-13",
      createdAt: "2023-10-06",
    },
    {
      id: 5,
      name: "Baby Shower",
      updatedAt: "2023-10-14",
      createdAt: "2023-10-05",
    },
  ];

  test("returns exactly count number of items from the input", () => {
    const count = 3;
    const result = generateRelation<Occasion>(baseData, count);

    expect(result).toHaveLength(count);
    result.forEach((item) => {
      expect(baseData.some((d) => d.id === item.id)).toBe(true);
    });

    const ids = result.map((i) => i.id);
    expect(new Set(ids).size).toBe(count);
  });

  test("returns all items if count is greater than data length", () => {
    const count = 10;
    const data = baseData.slice(0, 2);
    const result = generateRelation<Occasion>(data, count);

    expect(result).toHaveLength(data.length);
    result.forEach((item) => {
      expect(data.some((d) => d.id === item.id)).toBe(true);
    });

    const ids = result.map((i) => i.id);
    expect(new Set(ids).size).toBe(data.length);
  });

  test("returns empty array if data is empty", () => {
    const result = generateRelation<Occasion>([], 3);
    expect(result).toHaveLength(0);
  });

  test("returns empty array if count is zero", () => {
    const result = generateRelation<Occasion>(baseData, 0);
    expect(result).toHaveLength(0);
  });

  test("returns shuffled array when count equals data size", () => {
    const count = baseData.length;
    const result = generateRelation<Occasion>(baseData, count);

    expect(result).toHaveLength(count);
    const resultIds = new Set(result.map((i) => i.id));
    const baseIds = new Set(baseData.map((i) => i.id));

    expect(resultIds).toEqual(baseIds);
  });
});
