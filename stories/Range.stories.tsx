import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import Range from "@/app/components/ui/Range";

const meta = {
  title: "UI/Range",
  component: Range,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
  args: {
    min: 100,
    max: 1000,
    step: 50,
  },
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [current, setCurrent] = useState({ min: args.min, max: args.max });

    return (
      <div className="w-[300px]">
        <Range {...args} onChange={setCurrent} />
        <div className="mt-2 text-sm text-gray-700">
          Текущий диапазон: {current.min} – {current.max} ₽
        </div>
      </div>
    );
  },
};
