import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header texts and category dropdown select', async () => {
  render(<App />);
  
  // Select an option text
  const selectOptionElement = screen.getByText(/Select an option/i);
  expect(selectOptionElement).toBeInTheDocument();

  // List of Products text
  const listProductElement = screen.getByText(/List of Products/i);
  expect(listProductElement).toBeInTheDocument();
});
