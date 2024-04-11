import { Meta, StoryObj } from '@storybook/react';

import LinkComponent, { LinkComponentProps } from '.';

const meta: Meta<LinkComponentProps> = {
  title: 'Molecules/Link',
  // tags: ['autodocs'],
  component: LinkComponent,
  argTypes: {
    children: {
      type: 'string'
    },
    href: {
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

export const Primary: StoryObj<LinkComponentProps> = {
  args: {
    children: 'Link',
    href: '/',
    disabled: false,
    className: ''
  }
};

export const Disabled: StoryObj<LinkComponentProps> = {
  args: {
    children: 'Link',
    href: '/',
    disabled: true,
  }
}

export const Violet: StoryObj<LinkComponentProps> = {
  args: {
    children: 'Link',
    href: '/',
    className: 'theme-violet',
  }
}