import { getData } from "@/lib/getData";
import { ProductCollections } from "@/types";
import { notFound, redirect } from "next/navigation";
import { DataFromCollectionSlug } from "payload";

async function ProductPage({
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

export default async function FlowersProductPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/flowers");
  }

  return <ProductPage type={"flowers"} id={id} />;
}
