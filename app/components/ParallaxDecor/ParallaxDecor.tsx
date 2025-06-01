"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  speed?: number;
  width?: number;
  height?: number;
  className?: string;
  container: HTMLElement;
};

export default function ParallaxDecor({
  src,
  speed = 30,
  width = 150,
  height = 150,
  className = "",
  container,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      const start = windowHeight;
      const end = -rect.height;

      const scrollProgress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );
      setProgress(scrollProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [container]);

  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        transform: `translateY(${progress * speed}px)`,
        transition: "transform 0.05s linear",
      }}
    >
      <Image src={src} alt="decor" width={width} height={height} />
    </div>
  );
}
