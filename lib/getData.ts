import { cache } from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import type {
  FindByIDOptions,
  FindAllOptions,
  PayloadCollections,
} from "@/types";

const payload = await getPayload({ config });

export const getData = {
  findAll: cache(
    async <T extends PayloadCollections>(
      collection: T,
      options?: FindAllOptions<T>,
    ) =>
      await payload.find({
        collection,
        ...options,
      }),
  ),
  findById: cache(
    async <T extends PayloadCollections>(
      collection: T,
      id: number | string,
      options?: FindByIDOptions<T>,
    ) =>
      await payload.findByID({
        collection,
        id,
        ...options,
      }),
  ),
};
