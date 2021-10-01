import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainTitle } from './MainTitle';

test('renders MainTitle', () => {
  render(<MainTitle />);
  const linkElement = screen.getByText(/movie web app/i);
  expect(linkElement).toBeInTheDocument();
});
