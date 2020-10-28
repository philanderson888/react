import { render, screen } from '@testing-library/react';
import App from './App';


test('renders first website content', () => {
  render(<App />);
  const linkElement = screen.getByText(/first website/i);
  expect(linkElement).toBeInTheDocument();
});
