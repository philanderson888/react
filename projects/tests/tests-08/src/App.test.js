import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders phil anderson', () => {
  render(<App />);
  const linkElement = screen.getByText(/phil anderson/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders philip anderson 2', () => {
  render(<App />);
  const linkElement = screen.getByTitle(/philip anderson 2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders phil anderson 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/phil anderson/i);
  expect(linkElement).toBeInTheDocument();
} );

test('checks paragraph is enabled', () => { 
  render(<App />);
  const paragraphElement = screen.getByText(/Edit/i);
  expect(paragraphElement).toBeEnabled();
});

test('checks tickbox is present', () => { 
  render(<App />);
  const checkboxElement = screen.getByText(/Bike/i);
  expect(checkboxElement).toBeEnabled();
});

test('checks bike tickbox is also present', () => { 
  render(<App />);
  const checkboxElement = screen.getByLabelText(/i have a bike/i);
  expect(checkboxElement).toBeEnabled();
});

test('checks car tickbox is also present', () => { 
  render(<App />);
  const checkboxElement = screen.getByLabelText(/i have a car/i);
  expect(checkboxElement).toBeEnabled();
});

test('checks boat tickbox is also present', () => { 
  render(<App />);
  const checkboxElement = screen.getByLabelText(/i have a boat/i);
  expect(checkboxElement).toBeEnabled();
});
