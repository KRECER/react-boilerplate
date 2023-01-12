import { StoryObj, StoryFn } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
} as StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  variant: 'primary',
};

export const Accent = Template.bind({});
Accent.args = {
  children: 'Button',
  variant: 'accent',
};
