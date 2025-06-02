import Image from "next/image";

import { ProductCollections } from "@/types";

import CatalogView from "./CatalogView/CatalogView";
import { getData } from "@/lib/getData";
import { Decor1, Decor2, Decor3 } from "@/static/decor";

import Container from "@/app/components/ui/Container";
import Hero from "@/app/components/ui/Hero";
import Breadcrumbs from "@/app/components/ui/Breadcrumbs";
import LeadSection from "@/app/components/ui/LeadSection";

export default async function CatalogPage({
  type,
}: {
  type: ProductCollections;
}) {
  const { docs: products } = await getData.findAll(type);

  const { docs: categories } = await getData.findAll("categories");
  const { docs: occasions } = await getData.findAll("occasions");
  const { docs: whoms } = await getData.findAll("whom");

  const prices = products.map((product) => Number.parseInt(product.price));

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" />

      <LeadSection>
        <Image
          src={Decor1}
          className="absolute -left-10 top-[20px] hidden md:block"
          alt="Декоративный элемент."
        />
        <Image
          src={Decor2}
          className="absolute -right-10 top-[360px] hidden md:block"
          alt="Декоративный элемент."
        />
        <Image
          src={Decor3}
          className="absolute -left-20 top-3/4 hidden md:block"
          alt="Декоративный элемент."
        />
        <Container>
          <Breadcrumbs className="relative -top-14 lg:-top-12" />
          <CatalogView
            products={products}
            filters={{
              categories: type === "flowers" ? categories : null,
              occasions,
              whoms,
            }}
            minPrice={Math.min(...prices)}
            maxPrice={Math.max(...prices)}
            type={type}
          />
        </Container>
      </LeadSection>
    </div>
  );
}
