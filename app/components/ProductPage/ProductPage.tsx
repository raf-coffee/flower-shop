import Image from "next/image";
import { notFound } from "next/navigation";

import { getData } from "@/lib/getData";
import { Label, ProductCollections } from "@/types";
import { DataFromCollectionSlug } from "payload";
import Hero from "@/app/components/Hero/Hero";
import {
  Container,
  TextFont,
  TextWeight,
  Text,
  Heading,
  TextSize,
} from "@/app/components/ui";
import { deriveActiveLabels, getCoverImageUrl } from "@/utils";

function ProductPageView({
  item,
  itemInfo: { itemGroup, imageCoverUrl, labels },
}: {
  item: DataFromCollectionSlug<
    | "accessories"
    | "baloons"
    | "flowers"
    | "fruitCarts"
    | "indoors"
    | "presents"
    | "sweets"
  >;
  itemInfo: {
    itemGroup: ProductCollections | "gifts";
    imageCoverUrl: string;
    labels: Label[];
  };
}) {
  return (
    <div className="bg-main-pink-300">
      <Hero
        heading={item.name}
        hasBreadCrumbs
        tailCrumb={{
          href: `/catalog/${itemGroup}/${item.id}`,
          title: item.name,
        }}
        className="mb-14 lg:mb-0"
      />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container className="flex flex-col gap-2 md:flex-row md:gap-5">
          <div className="max-w-[459px] md:basis-[45%]">
            <div className="w-full">
              {imageCoverUrl && (
                <Image
                  src={imageCoverUrl}
                  width={456}
                  height={456}
                  alt={item.description}
                />
              )}
            </div>
          </div>
          <div className="md:basis-[55%]">
            <ul className="mx-auto mb-2 grid max-w-[256px] grid-cols-2 gap-4 lg:mx-0">
              {labels.map((label) => (
                <li
                  className="flex h-3 w-[120px] items-center justify-center rounded-md p-1 text-center md:h-6"
                  style={{
                    backgroundColor: label.bg,
                    color: label.color ?? "white",
                  }}
                  key={label.title}
                >
                  <Text
                    font={TextFont.MONTSERRAT}
                    weight={TextWeight.MEDIUM}
                    className="text-[6px] uppercase text-inherit lg:text-[14px]"
                  >
                    {label.title}
                  </Text>
                </li>
              ))}
            </ul>
            <div className="flex w-full justify-between">
              <Text>Отзывов ()</Text>
              <Text>Есть в наличие</Text>
            </div>
            <div className="flex w-full flex-col">
              <Heading level={3}>Повод:</Heading>
              <Text
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
                size={TextSize.NORMAL}
              >
                8 марта. Любовь.
              </Text>
            </div>
            <div className="mb-2 flex w-full flex-col">
              <Heading level={3}>Кому:</Heading>
              <Text
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
                size={TextSize.NORMAL}
              >
                8 марта. Любовь.
              </Text>
            </div>
            <div className="w-full">
              <Text
                font={TextFont.MONTSERRAT}
                weight={TextWeight.MEDIUM}
                size={TextSize.LARGE}
                className="text-[#7EA048]"
              >
                3 500 р.
              </Text>
            </div>
            <div className="mb-2 flex w-full flex-col gap-1">
              <Heading level={3}>Описание:</Heading>
              <Text
                font={TextFont.LATO}
                weight={TextWeight.MEDIUM}
                size={TextSize.NORMAL}
              >
                {item.description}
              </Text>
            </div>
          </div>
          <div className="mb-2 flex w-full flex-col gap-1">
            <Heading level={3}>Отзывы (0):</Heading>
            <Text
              font={TextFont.LATO}
              weight={TextWeight.MEDIUM}
              size={TextSize.NORMAL}
            >
              {item.description}
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default async function ProductPage({
  id,
  type,
}: {
  id: number;
  type: ProductCollections;
}) {
  const item = await getData.findById(type, id);

  if (!item) return notFound();

  const itemGroup = type === "presents" ? "gifts" : type;
  const imageCoverUrl = getCoverImageUrl(item);
  const labels = deriveActiveLabels(item);

  return (
    <ProductPageView
      item={item}
      itemInfo={{ itemGroup, imageCoverUrl, labels }}
    />
  );
}
