import { Payload } from "payload";
import {
  generateData,
  uploadImages,
  createCollection,
  collectionDoesNotExist,
} from "@/utils";
import data from "@/data";
import type { InitialCollections, ProductCollections } from "@/types";
import { createCollectionReviews } from "./utils/createCollectionReviews";

const ITEMS_COUNT = 20;

const INITIAL_COLLECTIONS: InitialCollections[] = [
  "tags",
  "occasions",
  "categories",
  "whom",
];

const PRODUCT_COLLECTIONS: ProductCollections[] = [
  "accessories",
  "baloons",
  "flowers",
  "fruitCarts",
  "indoors",
  "gifts",
  "sweets",
];

export const seed = async (payload: Payload) => {
  await Promise.all(
    INITIAL_COLLECTIONS.map(async (collection) => {
      if (await collectionDoesNotExist(payload, collection)) {
        await createCollection(payload, collection, data[collection].names);
      }
    }),
  );

  const images = await Promise.all(
    PRODUCT_COLLECTIONS.map(async (collection) => {
      const ids = await uploadImages(payload, collection);
      return ids;
    }),
  );

  const reviewsDoesNotExists = await collectionDoesNotExist(payload, "reviews");
  let reviews: number[][];

  if (reviewsDoesNotExists) {
    reviews = await Promise.all(
      PRODUCT_COLLECTIONS.map(async (collection) => {
        const ids = await createCollectionReviews(payload, collection);
        return ids;
      }),
    );
  } else {
    reviews = await Promise.all(
      PRODUCT_COLLECTIONS.map(async (collection) => {
        const data = await payload.find({
          collection: "reviews",
          where: {
            collection: {
              equals: collection,
            },
          },
        });
        const ids = data.docs.map((item) => item.id);
        return ids;
      }),
    );
  }

  const productData = PRODUCT_COLLECTIONS.map((collection, index) => ({
    collection,
    items: generateData(collection, {
      count: ITEMS_COUNT,
      imageIds: images[index],
      reviewIds: reviews[index],
    }),
  }));

  await Promise.all(
    productData.map(async (product) => {
      if (await collectionDoesNotExist(payload, product.collection)) {
        product.items.map(async (item) => {
          await payload.create({
            collection: product.collection,
            data: item,
          });
        });
      }
    }),
  );
};
