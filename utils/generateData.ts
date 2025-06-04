import { faker } from "@faker-js/faker";
import { generateRelation } from "@/utils/generateRelations";
import data from "@/data";
import type { GenerateDataOptions, ProductCollections } from "@/types";

const generate = {
  name: (data: string[]) => faker.helpers.arrayElement(data),
  description: (data: string[]) => faker.helpers.arrayElement(data),
  images: (data: number[], count: number) =>
    faker.helpers.uniqueArray(data, count),
  price: (min = 4000, max = 15000, dec = 0) =>
    faker.commerce.price({ min, max, dec }),
  sale: (probability = 0.4) => faker.datatype.boolean({ probability }),
  reviewsCount: (min = 0, max = 8) => faker.number.int({ min, max }),
};

const generateCommonFields = <T extends ProductCollections>(
  collection: T,
  imageIds: number[],
  reviewIds: number[],
) => {
  const name = generate.name(data[collection].names);
  const description = generate.description(data[collection].descriptions);
  const price = generate.price();
  const images = generate.images(imageIds, 1);
  const sale = generate.sale();
  const occasions = generateRelation(data.occasions.ids, 4);
  const tags = generateRelation(data.tags.ids, 4);
  const whom = generateRelation(data.whom.ids, 4);
  const reviews = generateRelation(reviewIds, generate.reviewsCount());
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

export const generateData = (
  collection: ProductCollections,
  options: GenerateDataOptions,
) => {
  return faker.helpers.multiple(
    () => {
      if (collection === "flowers") {
        return {
          ...generateCommonFields(
            collection,
            options.imageIds,
            options.reviewIds,
          ),
          categories: generateRelation(data.categories.ids, 1),
        };
      }
      return {
        ...generateCommonFields(
          collection,
          options.imageIds,
          options.reviewIds,
        ),
      };
    },
    { count: options.count },
  );
};

export default generateData;
