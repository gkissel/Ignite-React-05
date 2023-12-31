import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@gustavokissel-ignite-ui/react'

export default {
  tags: ['autodocs'],
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<typeof Text>

export const Primary: StoryObj<typeof Text> = {}

export const CustomTag: StoryObj<typeof Text> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
