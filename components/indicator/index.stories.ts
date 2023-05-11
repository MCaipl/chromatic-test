import type { Meta, StoryObj } from '@storybook/vue3';

import Indicator from './index.vue';

const meta: Meta<typeof Indicator> = {
  title: 'Indicator',
  component: Indicator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {}
