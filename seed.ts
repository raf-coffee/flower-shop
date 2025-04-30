import { Payload } from "payload";
import { faker } from "@faker-js/faker";
import {
  bouquets,
  bouquetDescriptions,
  tags as tagsArray,
  reasons as reasonsArray,
  tagIds,
  reasonIds,
  imagePaths,
  flowersGenitive,
} from "./data";

const createFlowerData = () => {
  const name = faker.helpers.arrayElement(bouquets);
  const description = faker.helpers.arrayElement(bouquetDescriptions);
  const tags = faker.helpers.uniqueArray(tagIds, 4).map(
    (item) =>
      ({
        relationTo: "tags",
        value: item,
      }) as const,
  );
  const reasons = faker.helpers.uniqueArray(reasonIds, 4).map(
    (item) =>
      ({
        relationTo: "reasons",
        value: item,
      }) as const,
  );
  const price = faker.commerce.price({ min: 4000, max: 15000, dec: 0 });
  const available = true;

  return { name, description, price, available, reasons, tags };
};

const flowers = faker.helpers.multiple(createFlowerData, { count: 5 });

export const seed = async (payload: Payload) => {
  const tagsCollection = await payload.find({
    collection: "tags",
    limit: 1,
  });
  if (tagsCollection.totalDocs === 0) {
    await Promise.all(
      tagsArray.map(async (tagName) => {
        await payload.create({
          collection: "tags",
          data: {
            name: tagName,
          },
        });
      }),
    );
  }

  const reasonsCollection = await payload.find({
    collection: "reasons",
    limit: 1,
  });
  if (reasonsCollection.totalDocs === 0) {
    await Promise.all(
      reasonsArray.map(async (reasonName) => {
        await payload.create({
          collection: "reasons",
          data: {
            name: reasonName,
          },
        });
      }),
    );
  }

  const uploadedImageIds = [];

  for (const imageName of imagePaths) {
    const { docs } = await payload.find({
      collection: "media",
      where: { filename: { equals: imageName } },
    });
    if (docs.length === 0) {
      const media = await payload.create({
        collection: "media",
        data: {
          alt: `Изображение ${faker.helpers.arrayElement(flowersGenitive)}`,
        },
        filePath: `${process.cwd()}/static/flowers/${imageName}`,
      });
      uploadedImageIds.push(media.id);
    } else {
      uploadedImageIds.push(docs[0].id);
    }
  }

  const flowersCollection = await payload.find({
    collection: "flowers",
    limit: 1,
  });
  if (flowersCollection.totalDocs === 0) {
    await Promise.all(
      flowers.map(async (flower) => {
        await payload.create({
          collection: "flowers",
          data: flower,
        });
      }),
    );
  }
};
