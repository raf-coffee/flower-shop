import { getData } from "@/lib/getData";
import { ProductCollections } from "@/types";

export async function generatePageMetadata<T extends ProductCollections>(
  collection: T,
  id: string,
) {
  const data = await getData.findById(collection, id);

  return {
    title: `${data.name} | FloristMan`,
    description: data.description,
  };
}
