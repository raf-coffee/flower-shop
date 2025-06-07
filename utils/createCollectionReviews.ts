import { fakerRU } from "@faker-js/faker";
import { ProductCollections } from "@/types";
import { Payload } from "payload";

export default async function createCollectionReviews(
  payload: Payload,
  collection: ProductCollections,
  reviews: string[],
) {
  const collectionReviews = reviews.map((review) => {
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
