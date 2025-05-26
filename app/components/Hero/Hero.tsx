import hero2 from "../../../static/hero-lg.png";
import { Container, Text, TextSize } from "../ui";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";
import { Crumb } from "@/types";

export default function Hero({
  heading,
  description,
  hasBreadCrumbs = false,
  tailCrumb,
  children,
  className,
}: {
  heading: string;
  description?: string;
  hasBreadCrumbs?: boolean;
  tailCrumb?: Crumb;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={twMerge(
        "z-2 relative w-full bg-cover bg-center bg-no-repeat",
        className,
      )}
      style={{ backgroundImage: `url(${hero2.src})` }}
    >
      <Container className="relative flex min-h-[300px] lg:min-h-[700px]">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="lg:order-0 w-[272px] text-2xl font-bold md:w-[400px] md:text-3xl lg:bottom-44 lg:w-[600px] lg:text-5xl">
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
          {hasBreadCrumbs && (
            <Breadcrumbs
              tailCrumb={tailCrumb}
              className="absolute bottom-[10px] min-w-[272px] text-2xl font-bold md:min-w-[400px] md:text-3xl lg:bottom-[75px] lg:w-[600px] lg:text-5xl"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
