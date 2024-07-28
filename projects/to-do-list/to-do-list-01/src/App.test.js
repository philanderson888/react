import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import { Simulate } from 'react-dom/test-utils';

test('renders header correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/you have/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header correctly 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const linkElement = screen.getByText(/submit/i);
  expect(linkElement).toBeInTheDocument();
});

test('add extra todo item', () => {
  render(<App />);
  const inputBox = screen.getByTestId(/inputBox/i)
  const submitButton = screen.getByTestId(/submitButton/i);
  fireEvent.change(inputBox,{target: {value:'do something'} });
  Simulate.click(submitButton);
  fireEvent(submitButton, new MouseEvent('click'))
  const todoItem = screen.getByText(/do something/i);
  expect(todoItem).toBeInTheDocument();
});