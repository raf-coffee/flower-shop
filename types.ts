import { Config } from "@/payload-types";
import data from "@/data";

export type PayloadCollections = keyof Omit<
  Config["collections"],
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>;

export type Collection = keyof Omit<
  typeof data,
  "occasions" | "tags" | "whom" | "categories"
>;
