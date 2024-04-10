import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  // tags: ['autodocs'],
  component: Button,
  argTypes: {}
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
  }
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet',
  }
};