"use client";

import dynamic from "next/dynamic";

const YandexMap = dynamic(async () => import("./MapInitializer"), {
  ssr: false,
});

export default YandexMap;
