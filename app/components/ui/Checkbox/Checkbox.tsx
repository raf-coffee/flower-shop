import React from "react";
import Text, { TextFont, TextSize } from "../Text";

type CheckboxProps = {
  name: string;
  checked: boolean;
  onChange: VoidFunction;
  children: string;
};

function Checkbox({ name, checked, onChange, children }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative mr-2 h-[16px] w-[16px] rounded-[2px] border border-gray-400">
        {checked && (
          <svg
            className="absolute inset-0 m-auto h-[12px] w-[12px] text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <Text size={TextSize.SMALL} font={TextFont.LATO}>
        {children}
      </Text>
    </label>
  );
}

export default Checkbox;
