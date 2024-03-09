import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App.js';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Start/i)).toBeInTheDocument(); // Example text
});
