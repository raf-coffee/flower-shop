import { faker } from "@faker-js/faker";
import type { PayloadCollections } from "@/types";

export function generateRelation<T extends PayloadCollections>(
  to: T,
  data: number[],
  count: number,
): { relationTo: T; value: number }[] {
  return faker.helpers.uniqueArray(data, count).map((item) => ({
    relationTo: to,
    value: item,
  }));
}
