import Link from "next/link";
import Image from "next/image";
import logo from "../../../static/logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        width={140}
        alt="Логотип цветочного магазина Florista."
      />
    </Link>
  );
}
