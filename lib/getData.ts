import { FindArgs, getPayload } from "payload";
import config from "@/payload.config";
import type { ProductCollections, InitialCollections } from "@/types";

const payload = await getPayload({ config });

export const getData = {
  getProductCollection: async <T extends ProductCollections>(
    collection: T,
    options?: Omit<FindArgs, "collection" | "locale">,
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
  getInitialCollections: async <T extends InitialCollections>(
    collection: T,
    options?: Omit<FindArgs, "collection" | "locale">,
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
