import { faker } from "@faker-js/faker";
import { generateRelation } from "@/utils/generateRelations";
import data from "@/data";
import type { GenerateDataOptions, ProductCollections } from "@/types";
import { Media, Occasion, Review, Whom, Tag } from "@/payload-types";

const categoryMap = {
  roses: "Розы",
  daisies: "Ромашки",
  bouquets: "Букеты",
  tulips: "Тюльпаны",
};

const generate = {
  name: (data: string[]) => faker.helpers.arrayElement(data),
  description: (data: string[]) => faker.helpers.arrayElement(data),
  images: (data: Media[], count: number) =>
    faker.helpers.uniqueArray(data, count),
  price: (min = 4000, max = 15000, dec = 0) =>
    faker.commerce.price({ min, max, dec }),
  sale: (probability = 0.4) => faker.datatype.boolean({ probability }),
  reviewsCount: (min = 0, max = 8) => faker.number.int({ min, max }),
};

const generateCommonFields = <T extends ProductCollections>(
  collection: T,
  options: {
    imageIds: Media[];
    reviewSet: Review[];
    tagSet: Tag[];
    occasionSet: Occasion[];
    whomSet: Whom[];
  },
) => {
  const name = generate.name(data[collection].names);
  const description = generate.description(data[collection].descriptions);
  const price = generate.price();
  const images = generate.images(options.imageIds, 1);
  const sale = generate.sale();
  const occasions = generateRelation(options.occasionSet, 4);
  const tags = generateRelation(options.tagSet, 4);
  const whom = generateRelation(options.whomSet, 4);
  const reviews = generateRelation(options.reviewSet, generate.reviewsCount());
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
        const type = faker.helpers.arrayElement([
          "roses",
          "daisies",
          "tulips",
          "bouquets",
        ]);
        const filteredMedia = options.imageIds.filter(
          (image) => image.type === type,
        );
        const category = options.categoriesSet.filter(
          (category) => category.name === categoryMap[type],
        );
        return {
          ...generateCommonFields(collection, {
            ...options,
            imageIds: filteredMedia,
          }),
          categories: generateRelation(category, 1),
        };
      }
      return {
        ...generateCommonFields(collection, options),
      };
    },
    { count: options.count },
  );
};

export default generateData;
