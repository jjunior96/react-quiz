import { Story, Meta } from '@storybook/react/types-6-0';
import QuestionCard from '.';

export default {
  title: 'QuestionCard',
  component: QuestionCard
} as Meta;

export const Default: Story = () => <QuestionCard />;
