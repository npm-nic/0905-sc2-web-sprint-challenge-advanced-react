import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  // [1] arrange
  render(<CheckoutForm />);
  // [2] act
  const header = screen.getByText(/checkout form/i);
  // [3] assert
  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {});
