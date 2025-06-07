import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Text, { TextFont, TextSize } from "@/app/components/ui/Text";

const meta = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Highlight: Story = {
  args: {
    size: TextSize.EXTRA_LARGE,
    font: TextFont.MONTSERRAT,
    children: "№225 “Ромашки для Наташки” ",
  },
};

export const Paragraph: Story = {
  args: {
    size: TextSize.NORMAL,
    font: TextFont.MONTSERRAT,
    children: "№225 “Ромашки для Наташки” ",
  },
};

export const Label: Story = {
  args: {
    size: TextSize.SMALL,
    font: TextFont.LATO,
    children: "№225 “Ромашки для Наташки” ",
  },
};
