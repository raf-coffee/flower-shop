"use client";

import React, { useState, useEffect } from "react";

type PriceRange = {
  min: number;
  max: number;
};

type RangeProps = {
  min: number;
  max: number;
  step?: number;
  onChange: (range: PriceRange) => void;
};

const Range: React.FC<RangeProps> = ({ min, max, step = 10, onChange }) => {
  const [range, setRange] = useState<PriceRange>({ min, max });

  useEffect(() => {
    onChange(range);
  }, [range, onChange]);

  return (
    <div className="w-[282px]">
      <div className="mb-1 flex justify-between text-sm">
        <span>{range.min} грн</span>
        <span>{range.max} грн</span>
      </div>
      <div className="relative h-[12px]">
        {/* Slider track */}
        <div className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 bg-black"></div>

        {/* Range inputs */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={range.min}
          onChange={(e) =>
            setRange((prev) => ({
              ...prev,
              min: Math.min(Number(e.target.value), range.max - step),
            }))
          }
          className="pointer-events-none absolute z-10 h-[12px] w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:w-[12px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D7537A]"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={range.max}
          onChange={(e) =>
            setRange((prev) => ({
              ...prev,
              max: Math.max(Number(e.target.value), range.min + step),
            }))
          }
          className="pointer-events-none absolute z-10 h-[12px] w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-[12px] [&::-webkit-slider-thumb]:w-[12px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D7537A]"
        />
      </div>
    </div>
  );
};

export default Range;
