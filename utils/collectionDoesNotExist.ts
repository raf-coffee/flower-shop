import { Payload } from "payload";
import type { PayloadCollections } from "@/types";

export default async function collectionDoesNotExist(
  payload: Payload,
  collection: PayloadCollections,
  limit = 1,
) {
  const docs = await payload.find({
    collection,
    limit,
  });
  return docs.totalDocs === 0;
}
