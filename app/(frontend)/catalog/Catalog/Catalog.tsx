import Hero from "@/app/components/Hero/Hero";
import { Container } from "@/app/components/ui";
import CatalogView from "../CatalogView/CatalogView";
import { PayloadCollections } from "@/types";

const API_LINK = `${process.env.NEXT_PUBLIC_API_URL}`;

const fetchPayloadData = async (collectionName: string) => {
  try {
    const data = await fetch(`${API_LINK}/${collectionName}`);

    return data.json();
  } catch (e) {
    alert(e);
  }
};

export default async function Catalog({ type }: { type: PayloadCollections }) {
  const { docs: products } = await fetchPayloadData(type);

  return (
    <div className="bg-main-pink-300">
      <Hero heading="Каталог" hasBreadCrumbs className="mb-14 lg:mb-0" />

      <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
        <Container>
          <CatalogView products={products} />
        </Container>
      </section>
    </div>
  );
}
