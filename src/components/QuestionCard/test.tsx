import { render, screen } from '@testing-library/react';

import QuestionCard from '.';

describe('<QuestionCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<QuestionCard />);

    expect(
      screen.getByRole('heading', { name: /QuestionCard/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
