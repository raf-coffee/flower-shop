import { ProductPage } from "@/app/components/pages";
import { redirect } from "next/navigation";
import { generatePageMetadata } from "@/lib/generatePageMetada";

export default async function GiftsProductRoute(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = Number.parseInt(params.id);

  if (Number.isNaN(id)) {
    redirect("/catalog/gifts");
  }

  return <ProductPage collection={"gifts"} id={id} />;
}

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  return generatePageMetadata("gifts", id);
}
