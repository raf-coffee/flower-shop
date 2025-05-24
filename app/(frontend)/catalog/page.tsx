import Hero from "@/app/components/Hero/Hero";
import { Container } from "@/app/components/ui";
import CatalogView from "./CatalogView/CatalogView";

export default function Catalog() {
  const filteredCatalogItems = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" hasBreadCrumbs className="mb-14 lg:mb-0" />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container>
          <CatalogView products={filteredCatalogItems} />
        </Container>
      </section>
    </div>
  );
}
