import Image from "next/image";
import hero2 from "../../../static/hero-lg.png";
import { Text, TextSize } from "../ui";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { twMerge } from "tailwind-merge";

export default function Hero({
  heading,
  description,
  hasBreadCrumbs = false,
  className,
}: {
  heading: string;
  description?: string;
  hasBreadCrumbs?: boolean;
  className?: string;
}) {
  return (
    <div className={twMerge("bg-main-pink-300", className)}>
      <div className="relative mx-auto h-[255px] max-w-7xl p-4 md:h-[400px] lg:h-[600px]">
        <Image src={hero2} alt="" fill />
        <h1 className="absolute bottom-20 w-[272px] text-2xl font-bold md:w-[400px] md:text-3xl lg:bottom-44 lg:w-[600px] lg:text-5xl">
          {heading}
        </h1>
        {description && (
          <Text
            size={TextSize.NORMAL}
            className="absolute bottom-10 md:bottom-40 lg:bottom-72"
          >
            {description}
          </Text>
        )}
        {hasBreadCrumbs && (
          <Breadcrumbs className="absolute bottom-10 w-[272px] text-2xl font-bold md:w-[400px] md:text-3xl lg:bottom-44 lg:w-[600px] lg:text-5xl" />
        )}
      </div>
    </div>
  );
}
