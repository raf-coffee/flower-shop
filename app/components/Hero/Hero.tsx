import Image from "next/image";
import hero from "../../../static/hero.webp";

export default function Hero({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) {
  return (
    <div className="relative h-[255px] bg-main-pink-300 p-4">
      <Image src={hero} alt="" fill />
      <h1 className="absolute bottom-20 w-[272px] text-2xl font-bold">
        {heading}
      </h1>
      {description && (
        <p className="absolute bottom-10 text-xs">{description}</p>
      )}
    </div>
  );
}
