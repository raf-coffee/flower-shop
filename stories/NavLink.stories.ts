import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import NavLink from "@/app/components/ui/NavLink";

const meta = {
  title: "UI/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isActive: { control: "boolean" },
    variant: {
      control: { type: "radio" },
      options: ["mobile", "desktop"],
    },
  },
  args: {
    href: "#",
    children: "Каталог",
    variant: "desktop",
    isActive: false,
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopInactive: Story = {};

export const DesktopActive: Story = {
  args: {
    isActive: true,
  },
};

export const MobileInactive: Story = {
  args: {
    variant: "mobile",
  },
};

export const MobileActive: Story = {
  args: {
    variant: "mobile",
    isActive: true,
  },
};
