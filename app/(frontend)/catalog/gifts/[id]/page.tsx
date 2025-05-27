import ProductPage from "@/app/components/ProductPage/ProductPage";
import { redirect } from "next/navigation";

export default async function GiftsProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/gifts");
  }

  return <ProductPage collection={"gifts"} id={id} />;
}
