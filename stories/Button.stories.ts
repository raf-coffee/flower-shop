import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Button from "@/app/components/ui/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Купить",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    size: "normal",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Добавить в корзину",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Подробнее",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: "normal",
    children: "Недоступно",
  },
};
