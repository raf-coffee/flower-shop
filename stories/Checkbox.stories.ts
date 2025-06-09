import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Checkbox from "@/app/components/ui/Checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    onChange: { action: "toggled" },
  },
  args: {
    name: "agree",
    children: "Согласен с условиями",
    checked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
