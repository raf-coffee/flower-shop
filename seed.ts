import { Payload } from "payload";
import {
  generateData,
  uploadImages,
  createCollection,
  collectionDoesNotExist,
} from "@/utils";
import data from "@/data";
import type { InitialCollections, ProductCollections } from "@/types";
import { createCollectionReviews } from "@/utils";
import { Review } from "@/payload-types";

const ITEMS_COUNT = 20;

const INITIAL_COLLECTIONS: InitialCollections[] = [
  "tags",
  "occasions",
  "whom",
  "categories",
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
        return await createCollection(
          payload,
          collection,
          data[collection].names,
        );
      }
    }),
  );

  const images = await Promise.all(
    PRODUCT_COLLECTIONS.map(async (collection) => {
      const ids = await uploadImages(
        payload,
        collection,
        data[collection].imageNames,
      );
      return ids;
    }),
  );

  const reviewsDoesNotExists = await collectionDoesNotExist(payload, "reviews");
  let reviews: Review[][];

  if (reviewsDoesNotExists) {
    reviews = await Promise.all(
      PRODUCT_COLLECTIONS.map(async (collection) => {
        return await createCollectionReviews(
          payload,
          collection,
          data.reviews[collection],
        );
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
        return data.docs;
      }),
    );
  }

  const [tags, occasions, whom, categories] = await Promise.all(
    INITIAL_COLLECTIONS.map((collection) => payload.find({ collection })),
  );

  const productData = PRODUCT_COLLECTIONS.map((collection, index) => {
    return {
      collection,
      items: generateData(collection, {
        count: ITEMS_COUNT,
        imageIds: images[index],
        reviewSet: reviews[index],
        tagSet: tags.docs,
        occasionSet: occasions.docs,
        whomSet: whom.docs,
        categoriesSet: categories.docs,
        names: data[collection].names,
        descriptions: data[collection].descriptions,
      }),
    };
  });

  await Promise.all(
    productData.map(async (product) => {
      if (await collectionDoesNotExist(payload, product.collection)) {
        await Promise.all(
          product.items.map((item) => {
            payload.create({
              collection: product.collection,
              data: item,
            });
          }),
        );
      }
    }),
  );
};
