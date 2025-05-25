import { getData } from "@/lib/getData";
import { ProductCollections } from "@/types";
import { notFound } from "next/navigation";
import { DataFromCollectionSlug } from "payload";

function ProductPageView({
  type,
  product,
}: {
  type: string;
  product: DataFromCollectionSlug<
    | "accessories"
    | "baloons"
    | "flowers"
    | "fruitCarts"
    | "indoors"
    | "presents"
    | "sweets"
  >;
}) {
  return (
    <div>
      {type.toString()}
      {product.toString()}
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
  const product = await getData.findById(type, id);

  if (!product) return notFound();

  return <ProductPageView type={type} product={product} />;
}
