import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-gray-200 p-5 rounded-md">Content inside Container</div>
    ),
  },
};
