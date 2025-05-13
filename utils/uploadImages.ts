import { Payload } from "payload";
import data from "@/data";
import type { Collection } from "@/types";

const uploadImages = async <T extends Collection>(
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
      const media = await payload.create({
        collection: "media",
        data: {
          alt: ``,
        },
        filePath: `${process.cwd()}/static/${collection}/${imageName}`,
      });
      uploadedImageIds.push(media.id);
    } else {
      uploadedImageIds.push(docs[0].id);
    }
  }
  return uploadedImageIds;
};

export default uploadImages;
