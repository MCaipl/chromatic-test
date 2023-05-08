import type { Meta, StoryObj } from '@storybook/vue3';

import Avatar from './index.vue';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {}