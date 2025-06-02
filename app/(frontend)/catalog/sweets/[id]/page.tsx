import { ProductPage } from "@/app/components/pages";
import { redirect } from "next/navigation";

export default async function SweetsProductRoute(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/sweets");
  }

  return <ProductPage collection={"sweets"} id={id} />;
}
