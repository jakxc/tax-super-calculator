import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { calculateTax, calculateSuper } from './utils'

test('renders calculated tax of 20000', () => {
  render(<App />);
  const input = screen.getByRole('input');
  const button = screen.getByRole('button');

  fireEvent.change(input, { target: { value: '20000' } });
  fireEvent.click(button);
  let taxRegex = new RegExp(`${calculateTax(20000)}`);
  let expectedTax = screen.getByText(taxRegex);
  expect(expectedTax).toBeInTheDocument();
});


test('renders calculated superannuation of 20000', () => {
  render(<App />);
  const input = screen.getByRole('input');
  const button = screen.getByRole('button');

  fireEvent.change(input, { target: { value: '20000' } });
  fireEvent.click(button);
  let superRegex = new RegExp(`${calculateSuper(20000)}`);
  let expectedSuper = screen.getByText(superRegex);
  expect(expectedSuper).toBeInTheDocument();
});


