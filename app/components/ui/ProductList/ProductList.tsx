import Link from "next/link";
import Image from "next/image";

import { Container, Heading } from "..";
import { twMerge } from "tailwind-merge";
import { Overlay } from "@/app/components/ui";
import { Decor1, Decor2 } from "@/static/decor";

import CATEGORIES_LIST from "./constants";

export default function ProductList() {
  return (
    <section className="relative bg-main-pink-400 p-4 lg:p-6">
      <Image
        src={Decor1}
        className="absolute -left-10 top-[150px] hidden md:block"
        alt="Декоративный элемент."
      />
      <Image
        src={Decor2}
        className="absolute -right-10 top-[710px] hidden md:block"
        alt="Декоративный элемент."
      />
      <Container>
        <Heading level={2} className="mb-6">
          Каталог
        </Heading>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:[grid-template-rows:210px_130px_130px_210px]">
          {CATEGORIES_LIST.map(
            ({ text, href, img, gridPosition, overlayStyle }) => (
              <Link
                className={twMerge(
                  "relative min-h-[140px] bg-main-pink-400 md:min-h-[210px]",
                  gridPosition,
                )}
                href={href}
                key={text}
              >
                <li
                  className="relative h-full w-full"
                  style={{
                    backgroundImage: `url(${img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Overlay type={overlayStyle as "vertical" | "verticalRight"}>
                    {text}
                  </Overlay>
                </li>
              </Link>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}
