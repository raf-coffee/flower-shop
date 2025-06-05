import { Occasion, Review, Tag, Whom } from "@/payload-types";
import { faker } from "@faker-js/faker";

export function generateRelation<T extends Review | Whom | Tag | Occasion>(
  data: T[],
  count: number,
) {
  return faker.helpers.uniqueArray(data, count);
}
