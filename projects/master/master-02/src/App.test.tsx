import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeDefined();
  const linkElement2 = screen.getByText(/save/i);
  expect(linkElement2).toBeDefined();
});
