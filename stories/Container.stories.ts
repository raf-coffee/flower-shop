import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Container from "@/app/components/ui/Container";

const meta = {
  title: "UI/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    children: { control: false },
  },
  args: {
    className: "border",
    children: "",
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ".repeat(
        10,
      ),
  },
};
