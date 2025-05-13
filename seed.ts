import { Payload } from "payload";
import {
  generateData,
  uploadImages,
  createCollection,
  collectionDoesNotExist,
} from "@/utils";
import data from "@/data";

export const seed = async (payload: Payload) => {
  if (await collectionDoesNotExist(payload, "tags")) {
    await createCollection(payload, "tags", data.tags.names);
  }

  if (await collectionDoesNotExist(payload, "occasions")) {
    await createCollection(payload, "occasions", data.occasions.names);
  }

  if (await collectionDoesNotExist(payload, "categories")) {
    await createCollection(payload, "categories", data.categories.names);
  }

  if (await collectionDoesNotExist(payload, "whom")) {
    await createCollection(payload, "whom", data.whom.names);
  }

  const uploadedFlowerImagesIds = await uploadImages(payload, "flowers");
  const uploadedBaloonImagesIds = await uploadImages(payload, "baloons");
  const flowers = generateData.flowers(5, uploadedFlowerImagesIds);
  const baloons = generateData.baloons(5, uploadedBaloonImagesIds);

  if (await collectionDoesNotExist(payload, "flowers")) {
    await Promise.all(
      flowers.map(async (flower) => {
        await payload.create({
          collection: "flowers",
          data: flower,
        });
      }),
    );
  }

  if (await collectionDoesNotExist(payload, "baloons")) {
    await Promise.all(
      baloons.map(async (baloon) => {
        await payload.create({
          collection: "baloons",
          data: baloon,
        });
      }),
    );
  }
};
