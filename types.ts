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

export interface CollectionItem {
  id: string;
  name?: string;
  price?: number;
  description?: string;
  available?: boolean;
  occasions?: string[];
  tags?: string[];
  categories?: string[];
  images?: string[];
  updatedAt?: string;
  createdAt?: string;
}

export type Collection = CollectionItem[];
