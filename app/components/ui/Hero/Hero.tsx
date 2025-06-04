import hero2 from "@/static/hero-lg.png";

import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

import Container from "../Container";
import Text, { TextSize } from "../Text";

export default function Hero({
  heading,
  description,
  children,
  className,
}: {
  heading: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={twMerge(
        "pointer-events-none relative z-10 w-full bg-cover bg-bottom bg-no-repeat",
        className,
      )}
      style={{ backgroundImage: `url(${hero2.src})` }}
    >
      <Container className="relative flex min-h-[300px] lg:min-h-[700px]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="lg:order-0 w-[272px] text-2xl font-bold md:mb-6 md:w-[400px] md:text-3xl lg:bottom-44 lg:w-[700px] lg:text-[64px] lg:leading-[64px]">
              {heading}
            </h1>
            {description && (
              <Text
                size={TextSize.NORMAL}
                className="md:bottom-40 lg:bottom-72 lg:-order-1"
              >
                {description}
              </Text>
            )}
            {children && children}
          </div>
        </div>
      </Container>
    </section>
  );
}
