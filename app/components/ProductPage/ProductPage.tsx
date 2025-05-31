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
  LeadSectionContainer,
} from "@/app/components/ui";
import { deriveActiveLabels, getCoverImageUrl } from "@/utils";
import Sales from "../Sales/Sales";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function ProductPageView({
  item,
  itemInfo: { collection, imageCoverUrl, labels },
}: {
  item: DataFromCollectionSlug<ProductCollections>;
  itemInfo: {
    collection: ProductCollections;
    imageCoverUrl: string | undefined | null;
    labels: Label[];
  };
}) {
  const occasionsText = item?.occasions?.map((occ) =>
    typeof occ.value !== "number" ? `${occ.value.name}. ` : "",
  );
  const whomsText =
    "whoms" in item && Array.isArray(item.whoms)
      ? item?.whoms?.map((occ) =>
          typeof occ.value !== "number" ? `${occ.value.name}. ` : "",
        )
      : null;

  return (
    <div className="bg-main-pink-300">
      <Hero heading={item.name} className="mb-14 lg:mb-0" />
      <LeadSectionContainer>
        <Container>
          <Breadcrumbs
            className="relative -top-14 lg:-top-12"
            tailCrumb={{
              href: `/catalog/${collection}/${item.id}`,
              title: item.name,
            }}
          />
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:gap-5">
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
              <ul className="mx-auto mb-2 grid max-w-[334px] grid-cols-2 items-center justify-items-center gap-x-10 gap-y-2 md:mx-0 md:mb-4 md:gap-x-2 lg:mx-0">
                {labels.map((label) => (
                  <li
                    className="flex h-[26px] w-[126px] items-center justify-center rounded-md p-1 text-center md:h-6 md:w-[160px]"
                    style={{
                      backgroundColor: label.bg,
                      color: label.color ?? "white",
                    }}
                    key={label.title}
                  >
                    <Text
                      font={TextFont.MONTSERRAT}
                      weight={TextWeight.MEDIUM}
                      size={TextSize.NORMAL}
                      className="uppercase text-inherit"
                    >
                      {label.title}
                    </Text>
                  </li>
                ))}
              </ul>
              <div className="flex w-full justify-between md:mb-4 md:max-w-[310px]">
                <Text>Отзывов (1)</Text>
                <Text className="text-[#7EA048]">
                  {item.available ? "Есть в наличие" : "Нет в наличии"}
                </Text>
              </div>
              <div className="flex w-full flex-col md:mb-4">
                <Heading level={4} className="font-semibold">
                  Повод:
                </Heading>
                <Text
                  font={TextFont.LATO}
                  weight={TextWeight.MEDIUM}
                  size={TextSize.NORMAL}
                >
                  {occasionsText}
                </Text>
              </div>
              <div className="mb-2 flex w-full flex-col md:mb-6">
                <Heading level={4} className="font-semibold">
                  Кому:
                </Heading>
                <Text
                  font={TextFont.LATO}
                  weight={TextWeight.MEDIUM}
                  size={TextSize.NORMAL}
                >
                  {whomsText || "-"}
                </Text>
              </div>
              <div className="w-full md:mb-6">
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
          </div>
        </Container>

        <Container>
          <div className="mb-2 flex w-full flex-col gap-1">
            <Heading level={3}>Отзывы (1):</Heading>
            <Text
              font={TextFont.LATO}
              weight={TextWeight.MEDIUM}
              size={TextSize.NORMAL}
              className="text-secondary-pink"
            >
              Отзыв от Лены Катиной:
            </Text>
            <Text
              font={TextFont.LATO}
              weight={TextWeight.MEDIUM}
              size={TextSize.NORMAL}
              className="pl-4"
            >
              Очень доволен покупкой — всё соответствует описанию. Качество на
              высоте, доставка была быстрая, упаковка аккуратная. Пользуюсь с
              удовольствием, могу смело рекомендовать другим!
            </Text>
          </div>
        </Container>
      </LeadSectionContainer>

      <div className="bg-main-pink-400">
        <Container className="p-0">
          <Sales title={"Вместе покупают"} />
        </Container>
      </div>
    </div>
  );
}

export default async function ProductPage({
  id,
  collection,
}: {
  id: number;
  collection: ProductCollections;
}) {
  const item = await getData.findById(collection, id);

  if (!item) return notFound();

  const imageCoverUrl = getCoverImageUrl(item);
  const labels = deriveActiveLabels(item);

  return (
    <ProductPageView
      item={item}
      itemInfo={{ collection, imageCoverUrl, labels }}
    />
  );
}
