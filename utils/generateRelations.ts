import { faker } from "@faker-js/faker";
import { Config } from "@/payload-types";

type To = keyof Omit<
  Config["collections"],
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>;

export function generateRelation<T extends To>(
  to: T,
  data: number[],
  count: number,
): { relationTo: T; value: number }[] {
  return faker.helpers.uniqueArray(data, count).map((item) => ({
    relationTo: to,
    value: item,
  }));
}
