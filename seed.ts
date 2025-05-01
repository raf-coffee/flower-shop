import { Payload } from "payload";
import { faker } from "@faker-js/faker";
import { generateFlowers } from "@/utils/generateFlowers";
import data from "@/data";

const flowers = generateFlowers(5);

export const seed = async (payload: Payload) => {
  const tagsCollection = await payload.find({
    collection: "tags",
    limit: 1,
  });
  if (tagsCollection.totalDocs === 0) {
    await Promise.all(
      data.tags.map(async (tagName) => {
        await payload.create({
          collection: "tags",
          data: {
            name: tagName,
          },
        });
      }),
    );
  }

  const occasionsCollection = await payload.find({
    collection: "occasions",
    limit: 1,
  });
  if (occasionsCollection.totalDocs === 0) {
    await Promise.all(
      data.occasions.map(async (occasionName) => {
        await payload.create({
          collection: "occasions",
          data: {
            name: occasionName,
          },
        });
      }),
    );
  }

  const uploadedImageIds = [];

  for (const imageName of data.imagePaths) {
    const { docs } = await payload.find({
      collection: "media",
      where: { filename: { equals: imageName } },
    });
    if (docs.length === 0) {
      const media = await payload.create({
        collection: "media",
        data: {
          alt: `Изображение ${faker.helpers.arrayElement(data.flowersGenitive)}`,
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
