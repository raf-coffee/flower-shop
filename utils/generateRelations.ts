import { faker } from "@faker-js/faker";

export function generateRelation(data: number[], count: number): number[] {
  return faker.helpers.uniqueArray(data, count);
}
