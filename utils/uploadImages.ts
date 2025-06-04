import { Payload } from "payload";
import fs from "fs";
import data from "@/data";
import type { ProductCollections } from "@/types";

const uploadImages = async <T extends ProductCollections>(
  payload: Payload,
  collection: T,
) => {
  const uploadedImageIds = [];

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
        },
        filePath: `${process.cwd()}/static/${collection}/${imageName}`,
      });
      if (media.id) {
        uploadedImageIds.push(media.id);
      }
    } else {
      uploadedImageIds.push(docs[0].id);
    }
  }
  return uploadedImageIds;
};

export default uploadImages;
