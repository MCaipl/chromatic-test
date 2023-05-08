import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './index.vue';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {}