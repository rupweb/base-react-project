import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App.js';

test('renders text', () => {
  render(<App />);
  const text = screen.getByText(/Start/i);
  expect(text).toBeInTheDocument();
});
