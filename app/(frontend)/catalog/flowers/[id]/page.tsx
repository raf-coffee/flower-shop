import ProductPage from "@/app/components/ProductPage/ProductPage";
import { redirect } from "next/navigation";

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
