import { ProductPage } from "@/app/components";
import { redirect } from "next/navigation";

export default async function FlowersProductRoute(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/flowers");
  }

  return <ProductPage collection={"flowers"} id={id} />;
}
