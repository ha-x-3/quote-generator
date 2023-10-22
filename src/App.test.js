import { render, screen } from '@testing-library/react';
import App from './App';


test('renders citation link', () => {
  render(<App />);
  const linkElement = screen.getByText(/icons8/i);
  expect(linkElement).toBeInTheDocument();
});
