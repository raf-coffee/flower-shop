import { Payload } from "payload";
import type { InitialCollections, ProductCollections } from "@/types";

export default async function collectionDoesNotExist(
  payload: Payload,
  collection: InitialCollections | ProductCollections,
  limit = 1,
) {
  const docs = await payload.find({
    collection,
    limit,
  });
  return docs.totalDocs === 0;
}
