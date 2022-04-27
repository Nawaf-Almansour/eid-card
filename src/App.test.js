import { render, screen } from '@testing-library/react';
import Appa from './App';

test('renders learn react link', () => {
  render(<Appa />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
