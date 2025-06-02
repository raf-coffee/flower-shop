"use client";

import { ReactifiedModule } from "@yandex/ymaps3-types/reactify";
import MapTemplate from "@/static/map-template.jpg";

import Script from "next/script";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

type ReactifyApi = ReactifiedModule<typeof import("@yandex/ymaps3-types")>;

function MapView({
  reactifyApi,
  height = 450,
}: {
  height?: number;
  reactifyApi: ReactifiedModule<
    typeof import("@/node_modules/@yandex/ymaps3-types/index")
  >;
}) {
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    reactifyApi;

  return (
    <div
      className="h-[350px] w-full lg:h-full"
      style={{ minHeight: `${height}px` }}
    >
      <YMap
        location={{ center: [37.66555, 55.755609], zoom: 18 }}
        mode="vector"
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
      </YMap>
    </div>
  );
}

function MapInitializer({ mapHeight }: { mapHeight?: number }) {
  const apiKey = process.env.NEXT_PUBLIC_YMAPS_API_KEY;
  const [reactifyApi, setReactifyApi] = useState<ReactifyApi | null>(null);

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}
        strategy="afterInteractive"
        onLoad={async () => {
          const [ymaps3React] = await Promise.all([
            ymaps3.import("@yandex/ymaps3-reactify"),
            ymaps3.ready,
          ]);
          const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

          setReactifyApi(reactify.module(ymaps3));
        }}
      />
      {reactifyApi ? (
        <MapView reactifyApi={reactifyApi} height={mapHeight} />
      ) : (
        <div className="h-full w-full">
          <Image
            src={MapTemplate}
            width={741}
            height={611}
            alt="Местонахождение магазина."
          />
        </div>
      )}
    </>
  );
}

export default MapInitializer;
