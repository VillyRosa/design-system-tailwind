import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  // tags: ['autodocs'],
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    className: {
      type: 'string'
    }
  }
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
  }
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    disabled: true
  }
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Botão',
  }
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Botão',
    disabled: true
  }
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet',
  }
};

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Botão',
    className: 'theme-violet',
  }
};