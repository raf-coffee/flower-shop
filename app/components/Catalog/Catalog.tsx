import { ProductCollections } from "@/types";
import Hero from "@/app/components/Hero/Hero";
import { Container } from "@/app/components/ui";
import CatalogView from "../CatalogView/CatalogView";
import { getData } from "@/lib/getData";

export default async function Catalog({ type }: { type: ProductCollections }) {
  const { docs: products } = await getData.findAll(type);

  const { docs: categories } = await getData.findAll("categories");
  const { docs: occasions } = await getData.findAll("occasions");
  const { docs: whoms } = await getData.findAll("whom");

  const prices = products.map((product) => Number.parseInt(product.price));

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" hasBreadCrumbs className="mb-14 lg:mb-0" />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container>
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
      </section>
    </div>
  );
}
