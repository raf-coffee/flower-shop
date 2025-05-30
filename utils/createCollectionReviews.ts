import { fakerRU } from "@faker-js/faker";
import { ProductCollections } from "@/types";
import { Payload } from "payload";
import data from "@/data";

export async function createCollectionReviews(
  payload: Payload,
  collection: ProductCollections,
) {
  const ids: number[] = [];
  const collectionReviews = data.reviews[collection].map((review) => {
    return {
      review,
      customer: `${fakerRU.person.firstName()} ${fakerRU.person.lastName()}`,
      collection,
    };
  });
  await Promise.all(
    collectionReviews.map(async (review) => {
      const result = await payload.create({
        collection: "reviews",
        data: review,
      });

      ids.push(result.id);
    }),
  );

  return ids;
}
