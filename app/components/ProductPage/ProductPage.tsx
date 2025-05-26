import { getData } from "@/lib/getData";
import { ProductCollections } from "@/types";
import { notFound } from "next/navigation";
import { DataFromCollectionSlug } from "payload";
import Hero from "@/app/components/Hero/Hero";
import { Container, TextFont, TextWeight, Text } from "@/app/components/ui";
import Image from "next/image";
import { deriveActiveLabels, getCoverImageUrl } from "@/utils";

function ProductPageView({
  type,
  item,
}: {
  type: string;
  item: DataFromCollectionSlug<
    | "accessories"
    | "baloons"
    | "flowers"
    | "fruitCarts"
    | "indoors"
    | "presents"
    | "sweets"
  >;
}) {
  const imageCoverUrl = getCoverImageUrl(item);
  const labels = deriveActiveLabels(item);

  return (
    <div className="bg-main-pink-300">
      <Hero
        heading={item.name}
        hasBreadCrumbs
        tailCrumb={{ href: `/catalog/${type}/${item.id}`, title: item.name }}
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
            <ul className="absolute top-1 flex max-w-[150px] flex-col gap-1">
              {labels.map((label) => (
                <li
                  className="flex h-3 w-full items-center rounded-br-md rounded-tr-md p-1 md:h-6"
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

  return <ProductPageView type={type} item={item} />;
}
