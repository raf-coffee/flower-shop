import Carousel from "@/app/components/Carousel/Carousel";
import { getData } from "@/lib/getData";

export default async function Sales() {
  const flowers = await getData.getProductCollection("flowers", {
    where: { sale: { equals: true } },
  });

  return (
    <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-lg font-bold md:text-start md:text-2xl">
          Скидки
        </h2>
        <Carousel items={flowers.docs} />
      </div>
    </section>
  );
}
