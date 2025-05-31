import { faker } from "@faker-js/faker";

export function generateRelation(data: number[], count: number) {
  return faker.helpers.uniqueArray(data, count);
}

export function generateReviewRelation(data: string[], count: number) {
  return faker.helpers.uniqueArray(data, count);
}
