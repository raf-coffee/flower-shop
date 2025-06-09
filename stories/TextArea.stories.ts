import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TextArea from "@/app/components/ui/TextArea";

const meta = {
  title: "UI/TextArea",
  component: TextArea,
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
    rows: { control: "number" },
  },
  args: {
    placeholder: "Введите сообщение",
    "aria-invalid": false,
    rows: 4,
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
  },
};
