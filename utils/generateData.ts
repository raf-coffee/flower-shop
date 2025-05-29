import { faker } from "@faker-js/faker";
import { generateRelation } from "@/utils/generateRelations";
import data from "@/data";
import type { ProductCollections } from "@/types";

const generate = {
  name: (data: string[]) => faker.helpers.arrayElement(data),
  description: (data: string[]) => faker.helpers.arrayElement(data),
  images: (data: number[], count: number) =>
    faker.helpers.uniqueArray(data, count),
  price: (min = 4000, max = 15000, dec = 0) =>
    faker.commerce.price({ min, max, dec }),
  sale: (probability = 0.4) => faker.datatype.boolean({ probability }),
  reviewsCount: (min = 0, max = 20) => faker.number.int({ min, max }),
};

const generateCommonFields = <T extends ProductCollections>(
  collection: T,
  imageIds: number[],
) => {
  const name = generate.name(data[collection].names);
  const description = generate.description(data[collection].descriptions);
  const price = generate.price();
  const images = generate.images(imageIds, 1);
  const sale = generate.sale();
  const occasions = generateRelation(data.occasions.ids, 4);
  const tags = generateRelation(data.tags.ids, 4);
  const whom = generateRelation(data.whom.ids, 4);
  const reviews = generateRelation(data.reviews.ids, generate.reviewsCount());
  const available = true;

  return {
    name,
    description,
    price,
    available,
    occasions,
    tags,
    images,
    whom,
    sale,
    reviews,
  } as const;
};

const generateData = {
  accessories: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(
      () => generateCommonFields("accessories", imageIds),
      { count },
    ),
  baloons: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(() => generateCommonFields("baloons", imageIds), {
      count,
    }),
  flowers: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(
      () => ({
        ...generateCommonFields("flowers", imageIds),
        categories: generateRelation(data.categories.ids, 1),
      }),
      {
        count,
      },
    ),
  fruitCarts: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(() => generateCommonFields("fruitCarts", imageIds), {
      count,
    }),
  indoors: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(() => generateCommonFields("indoors", imageIds), {
      count,
    }),
  gifts: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(() => generateCommonFields("gifts", imageIds), {
      count,
    }),
  sweets: (count: number, imageIds: number[]) =>
    faker.helpers.multiple(() => generateCommonFields("sweets", imageIds), {
      count,
    }),
};

export default generateData;
