import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './index.vue';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    text: 'Card title',
    description: 'Card description'
  }
}
export const LongDescription: Story = {
  args: {
    ...Default.args, 
    ...{
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum ligula tincidunt dui lacinia rhoncus. Aenean vulputate venenatis congue. Duis sollicitudin erat magna, nec sagittis libero facilisis vel.'
    }
  }
}