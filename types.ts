import { Config } from "@/payload-types";
import data from "@/data";

export type PayloadCollections = keyof Omit<
  Config["collections"],
  | "payload-locked-documents"
  | "payload-preferences"
  | "payload-migrations"
  | "users"
>;

export type ProductCollections = keyof Omit<
  typeof data,
  "occasions" | "tags" | "whom" | "categories"
>;

export type InitialCollections = "tags" | "occasions" | "categories" | "whom";
