import Link from "next/link";
import Image from "next/image";

import logoImage from "@/static/logo-image.png";
import logoText from "@/static/logo-text.svg";
import logoSecondaryText from "@/static/logo-secondary-text.svg";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex h-[34px] w-[114px] items-center justify-between gap-1 md:h-[54px] md:w-[205px]"
    >
      <Image
        src={logoImage}
        className="h-auto md:w-[46px]"
        width={28}
        alt="Логотип цветочного магазина Florista."
      />
      <div className="relative">
        <Image
          src={logoText}
          className="md:h-[32px] md:w-[153px]"
          width={83}
          height={17}
          alt="Логотип цветочного магазина Florista."
        />
        <Image
          src={logoSecondaryText}
          className="absolute -bottom-2 md:h-[13px] md:w-[150px]"
          width={82}
          height={7}
          alt="Логотип цветочного магазина Florista."
        />
      </div>
    </Link>
  );
}
