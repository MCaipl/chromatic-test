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
    description: 'Card description',
    avatar: false
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

export const WithAvatar: Story = {
  args: {
    ...Default.args, 
    ...{
      avatar: true
    }
  }
}

export const WithTag: Story = {
  args: {
    ...Default.args, 
    ...{
      tags: [{name: 'Tag 1'}]
    }
  }
}

export const WithMulitpleTags: Story = {
  args: {
    ...Default.args, 
    ...{
      tags: [{name: 'Tag 1'},{name: 'Tag 2' }, {name: 'Tag 3' }]
    }
  }
}