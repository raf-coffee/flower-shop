import ProductPage from "@/app/components/ProductPage/ProductPage";
import { redirect } from "next/navigation";

export default async function BalloonsProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/baloons");
  }

  return <ProductPage type={"baloons"} id={id} />;
}
