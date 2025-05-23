import React from "react";
import Text, { TextFont, TextSize } from "../Text";

type RadioButtonProps = {
  name: string;
  checked: boolean;
  onClick: VoidFunction;
  children: string;
};

function RadioButton({ name, checked, onClick, children }: RadioButtonProps) {
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative mr-2 h-[10px] w-[10px] rounded-full border border-gray-400">
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[6px] w-[6px] rounded-full bg-black" />
          </div>
        )}
      </div>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={() => {}}
        onClick={() => onClick()}
        className="hidden"
      />
      <Text size={TextSize.SMALL} font={TextFont.LATO}>
        {children}
      </Text>
    </label>
  );
}

export default RadioButton;
