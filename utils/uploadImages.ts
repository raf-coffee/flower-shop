import { Payload } from "payload";
import fs from "fs";
import data from "@/data";
import type { ProductCollections } from "@/types";

const uploadImages = async <T extends ProductCollections>(
  payload: Payload,
  collection: T,
) => {
  const uploadedImages = [];

  for (const imageName of data[collection].imageNames) {
    const { docs } = await payload.find({
      collection: "media",
      where: { filename: { equals: imageName } },
    });
    if (docs.length === 0) {
      const imagePath = `${process.cwd()}/media/${imageName}`;
      const imageAlreadyExists = fs.existsSync(imagePath);
      if (imageAlreadyExists) {
        fs.unlink(imagePath, (err) => {
          if (err) {
            throw err;
          }
        });
      }
      const media = await payload.create({
        collection: "media",
        data: {
          alt: ``,
          filename: imageName,
          collection,
          type: imageName.split("-")[0],
        },
        filePath: `${process.cwd()}/static/${collection}/${imageName}`,
      });
      uploadedImages.push(media);
    } else {
      uploadedImages.push(docs[0]);
    }
  }
  return uploadedImages;
};

export default uploadImages;
