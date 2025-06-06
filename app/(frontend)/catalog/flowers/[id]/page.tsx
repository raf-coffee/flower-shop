import { ProductPage } from "@/app/components/pages";
import { redirect } from "next/navigation";
import { generatePageMetadata } from "@/lib/generatePageMetada";

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

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  return generatePageMetadata("flowers", id);
}
