import type { Meta, StoryObj } from '@storybook/vue3';

import Avatar from './index.vue';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {}
export const Md: Story = {
  args: {
    size: 'md'
  }
}
export const Lg: Story = {
  args: {
    size: 'lg'
  }
}

export const Xl: Story = {
  args: {
    size: 'xl'
  }
}

export const XlRounded: Story = {
  args: {
    form: 'rounded',
    size: 'xl'
  }
}

