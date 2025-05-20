import Hero from "@/app/components/Hero/Hero";
import { Container } from "@/app/components/ui";
import CatalogView from "./CatalogView/CatalogView";

export default function Catalog() {
  const filteredCatalogItems = ["1"];

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" hasBreadCrumbs />
      <Container>
        <CatalogView products={filteredCatalogItems} />
      </Container>
    </div>
  );
}
