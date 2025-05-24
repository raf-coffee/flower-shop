import { ProductCollections } from "@/types";
import Hero from "@/app/components/Hero/Hero";
import { Container } from "@/app/components/ui";
import CatalogView from "../CatalogView/CatalogView";
import { getData } from "@/lib/getData";

export default async function Catalog({ type }: { type: ProductCollections }) {
  const { docs: products } = await getData.getProductCollection(type);

  const { docs: categories } =
    await getData.getInitialCollections("categories");
  const { docs: occasions } = await getData.getInitialCollections("occasions");
  const { docs: whoms } = await getData.getInitialCollections("whom");

  const prices = products.map((product) => Number.parseInt(product.price));

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" hasBreadCrumbs className="mb-14 lg:mb-0" />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container>
          <CatalogView
            products={products}
            filters={{ categories, occasions, whoms }}
            minPrice={Math.min(...prices)}
            maxPrice={Math.max(...prices)}
          />
        </Container>
      </section>
    </div>
  );
}
