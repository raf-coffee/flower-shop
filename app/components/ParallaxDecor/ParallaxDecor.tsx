"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  speed?: number;
  className?: string;
  width?: number;
  height?: number;
};

export default function ParallaxDecor({
  src,
  speed = 0.5,
  className = "",
  width = 150,
  height = 150,
}: Props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * speed);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className={`pointer-events-none absolute z-[-1] ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Image
        src={src}
        alt="Оформление в виде лепестка."
        width={width}
        height={height}
      />
    </div>
  );
}
