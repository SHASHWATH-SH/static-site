import { render, screen } from '@testing-library/react';
import App from './App';

test('renders static-site link', () => {
  render(<App />);
  const linkElement = screen.getByText(/static-site/i);
  expect(linkElement).toBeInTheDocument();
});
