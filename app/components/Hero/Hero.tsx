import Image from "next/image";
import hero2 from "../../../static/hero-lg.png";
import { Heading } from "@/app/components";

export default function Hero({
  heading,
  description,
}: {
  heading: string;
  description?: string;
}) {
  return (
    <div className="bg-main-pink-300">
      <div className="relative mx-auto h-[255px] max-w-7xl p-4 md:h-[400px] lg:h-[600px]">
        <Image src={hero2} alt="" fill />
        <Heading className="absolute bottom-20 w-[272px] md:w-[400px] lg:bottom-44 lg:w-[600px]">
          {heading}
        </Heading>
        {description && (
          <p className="absolute bottom-10 text-xs md:bottom-40 lg:bottom-72">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
