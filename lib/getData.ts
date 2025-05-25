import { getPayload } from "payload";
import config from "@/payload.config";
import type {
  ProductCollections,
  FindByIDOptions,
  FindAllOptions,
  PayloadCollections,
} from "@/types";

const payload = await getPayload({ config });

export const getData = {
  findAll: async <T extends PayloadCollections>(
    collection: T,
    options?: FindAllOptions<T>,
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
  findById: async <T extends ProductCollections>(
    collection: T,
    id: number | string,
    options?: FindByIDOptions<T>,
  ) => {
    try {
      const data = await payload.findByID({
        collection,
        id,
        ...options,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
