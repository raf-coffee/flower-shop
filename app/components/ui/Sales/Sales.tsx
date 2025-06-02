import Carousel from "@/app/components/Carousel/Carousel";
import { getData } from "@/lib/getData";
import { twMerge } from "tailwind-merge";

export default async function Sales({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  const flowers = await getData.findAll("flowers", {
    where: { sale: { equals: true } },
  });

  return (
    <section className={twMerge("bg-main-pink-400", className)}>
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-lg font-bold md:text-start md:text-2xl">
          {title ? title : "Скидки"}
        </h2>
        <Carousel items={flowers.docs} collection={"flowers"} />
      </div>
    </section>
  );
}
