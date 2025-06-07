import { faker } from "@faker-js/faker";
import { generateRelation } from "@/utils";
import type {
  GenerateDataOptions,
  ProductCollections,
  GenerateCommonFields,
} from "@/types";
import type { Media } from "@/payload-types";

const categoryMap = {
  roses: "Розы",
  daisies: "Ромашки",
  bouquets: "Букеты",
  tulips: "Тюльпаны",
};

export const generate = {
  name: (data: string[]) => faker.helpers.arrayElement(data),
  description: (data: string[]) => faker.helpers.arrayElement(data),
  images: (data: Media[], count: number) =>
    faker.helpers.uniqueArray(data, count),
  price: (min = 4000, max = 15000, dec = 0) =>
    faker.commerce.price({ min, max, dec }),
  sale: (probability = 0.4) => faker.datatype.boolean({ probability }),
  reviewsCount: (min = 0, max = 8) => faker.number.int({ min, max }),
};

const generateCommonFields = ({
  imageIds,
  reviewSet,
  tagSet,
  occasionSet,
  whomSet,
  names,
  descriptions,
}: GenerateCommonFields) => {
  const name = generate.name(names);
  const description = generate.description(descriptions);
  const price = generate.price();
  const images = generate.images(imageIds, 1);
  const sale = generate.sale();
  const occasions = generateRelation(occasionSet, 4);
  const tags = generateRelation(tagSet, 4);
  const whom = generateRelation(whomSet, 4);
  const reviews = generateRelation(reviewSet, generate.reviewsCount());
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
          ...generateCommonFields({ ...options, imageIds: filteredMedia }),
          categories: generateRelation(category, 1),
        };
      }
      return generateCommonFields(options);
    },
    { count: options.count },
  );
};

export default generateData;
