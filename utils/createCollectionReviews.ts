import { fakerRU } from "@faker-js/faker";
import { ProductCollections } from "@/types";
import { Payload } from "payload";
import data from "@/data";

export async function createCollectionReviews(
  payload: Payload,
  collection: ProductCollections,
) {
  const collectionReviews = data.reviews[collection].map((review) => {
    return {
      review,
      customer: fakerRU.person.fullName(),
      collection,
    };
  });
  return await Promise.all(
    collectionReviews.map(async (review) => {
      return await payload.create({
        collection: "reviews",
        data: review,
      });
    }),
  );
}
