import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Input from "@/app/components/ui/Input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    "aria-invalid": {
      control: "boolean",
      name: "aria-invalid",
    },
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "Введите ваше имя",
    "aria-invalid": false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
  },
};
