import { PayloadCollections } from "@/types";
import Hero from "@/app/components/Hero/Hero";
import { Container } from "@/app/components/ui";
import CatalogView from "../CatalogView/CatalogView";
import { fetchPayloadCollection } from "@/utils";

export default async function Catalog({ type }: { type: PayloadCollections }) {
  const { docs: products } = await fetchPayloadCollection(type);

  const { docs: categories } = await fetchPayloadCollection("categories");
  const { docs: occasions } = await fetchPayloadCollection("occasions");
  const { docs: whoms } = await fetchPayloadCollection("whoms");

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" hasBreadCrumbs className="mb-14 lg:mb-0" />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container>
          <CatalogView
            products={products}
            filters={{ categories, occasions, whoms }}
          />
        </Container>
      </section>
    </div>
  );
}
