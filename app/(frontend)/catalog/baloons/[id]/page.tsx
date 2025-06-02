import { ProductPage } from "@/app/components";
import { redirect } from "next/navigation";

export default async function BalloonsProductRoute(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/baloons");
  }

  return <ProductPage collection={"baloons"} id={id} />;
}
