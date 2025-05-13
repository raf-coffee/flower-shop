import { Payload } from "payload";
import type { PayloadCollections } from "@/types";

const createCollection = async (
  payload: Payload,
  collection: PayloadCollections,
  names: string[],
) => {
  await Promise.all(
    names.map(async (name) => {
      await payload.create({
        collection: collection,
        data: {
          name,
        },
      });
    }),
  );
};

export default createCollection;
