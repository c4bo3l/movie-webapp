import React from 'react';
import { render, screen } from '@testing-library/react';
import { DetailTitle } from './DetailTitle';

test('renders DetailTitle', () => {
  render(<DetailTitle />);
  const linkElement = screen.getByText(/back/i);
  expect(linkElement).toBeInTheDocument();
});
