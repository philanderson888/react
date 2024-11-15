import { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Phil Anderson', () => {
  render(<App />);
  const linkElement = screen.getByText(/phil anderson/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Philip Anderson Title', () => {
  render(<App />);
  const linkElement = screen.getByTitle(/philip anderson title/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Phil Aanderson 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/phil anderson/i);
  expect(linkElement).toBeInTheDocument();
} );

test('checks Paragraph Is Enabled', () => { 
  render(<App />);
  const paragraphElement = screen.getByText(/Edit/i);
  expect(paragraphElement).toBeEnabled();
});

test('checks Tickbox Is Present', () => { 
  render(<App />);
  const checkboxElement = screen.getByText(/Bike/i);
  expect(checkboxElement).toBeEnabled();
});

test('checks Bike Tickbox Is Present', () => { 
  render(<App />);
  const checkboxElement = screen.getByLabelText(/i have a bike/i);
  expect(checkboxElement).toBeEnabled();
});

test('checks Car Tickbox Is Present', () => { 
  render(<App />);
  const checkboxElement = screen.getByLabelText(/i have a car/i);
  expect(checkboxElement).toBeEnabled();
});

test('checks Boat Tickbox Is Present', () => { 
  render(<App />);
  const checkboxElement = screen.getByLabelText(/i have a boat/i);
  expect(checkboxElement).toBeEnabled();
});
