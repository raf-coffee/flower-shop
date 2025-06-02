import Image from "next/image";
import { TextSize, Text } from "@/app/components";
import { OverlayCatalogDecor } from "@/static/categories";
import { cva } from "class-variance-authority";

const overlayContainer = cva("absolute bg-soft-white-transparent", {
  variants: {
    type: {
      horizontal:
        "bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] lg:h-[95px]",
      vertical:
        "bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] lg:top-0 lg:h-full lg:w-[170px] lg:rounded-tl-[0] lg:rounded-r-[10px]",
      verticalRight:
        "bottom-0 flex h-[40px] w-full items-center justify-center rounded-t-[10px] lg:top-0 lg:h-full lg:w-[170px] lg:right-0 lg:rounded-tr-[0] lg:rounded-l-[10px]",
    },
  },
  defaultVariants: {
    type: "horizontal",
  },
});

export default function Overlay({
  children,
  type = "horizontal",
}: {
  children: string;
  type?: "horizontal" | "vertical" | "verticalRight";
}) {
  return (
    <div className={overlayContainer({ type })}>
      <Text className="text-center" size={TextSize.SMALL}>
        {children}
      </Text>
      <Image
        className="absolute left-1 top-1.5 lg:h-[39px] lg:w-[39px]"
        src={OverlayCatalogDecor.src}
        width={16}
        height={21}
        alt="Вензель с золотистым цветом."
      />
      <Image
        className="absolute bottom-1.5 left-1 rotate-180 -scale-x-100 lg:h-[39px] lg:w-[39px]"
        src={OverlayCatalogDecor.src}
        width={16}
        height={21}
        alt="Вензель с золотистым цветом."
      />
      <Image
        className="absolute right-1 top-1.5 -scale-x-100 lg:h-[39px] lg:w-[39px]"
        src={OverlayCatalogDecor.src}
        width={16}
        height={21}
        alt="Вензель с золотистым цветом."
      />
      <Image
        className="absolute bottom-1.5 right-1 rotate-180 lg:h-[39px] lg:w-[39px]"
        src={OverlayCatalogDecor.src}
        width={16}
        height={21}
        alt="Вензель с золотистым цветом."
      />
    </div>
  );
}
