import { faker } from "@faker-js/faker";
import { generateRelation } from "@/utils/generateRelations";
import data from "@/data";

const createFlowerData = (imageIds: number[]) => {
  const name = faker.helpers.arrayElement(data.bouquets);
  const description = faker.helpers.arrayElement(data.bouquetDescriptions);
  const tags = generateRelation("tags", data.tagIds, 4);
  const occasions = generateRelation("occasions", data.occasionIds, 4);
  const categories = generateRelation("categories", data.categoryIds, 1);
  const images = faker.helpers.uniqueArray(imageIds, 1);
  const price = faker.commerce.price({ min: 4000, max: 15000, dec: 0 });
  const available = true;

  return {
    name,
    description,
    price,
    available,
    occasions,
    tags,
    categories,
    images,
  };
};

export const generateFlowers = (count: number, imageIds: number[]) =>
  faker.helpers.multiple(() => createFlowerData(imageIds), { count });
