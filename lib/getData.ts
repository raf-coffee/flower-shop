import { getPayload, FindArgs, Where, WhereField } from "payload";
import config from "@/payload.config";
import type { ProductCollections } from "@/types";

type WhereFields = Partial<
  Record<ProductCollections, WhereField | WhereFields[]>
>;

type WhereOptions = {
  where?: WhereFields & Where;
};

const payload = await getPayload({ config });

export const getData = {
  getAll: async <T extends ProductCollections>(
    collection: T,
    options?: Omit<FindArgs, "collection" | "locale"> & WhereOptions,
  ) => {
    try {
      const data = await payload.find({
        collection,
        ...options,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
