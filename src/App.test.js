// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

// Original App test
test('renders app', () => {
  render(<App />);
  // Basic render test
  expect(document.body).toBeInTheDocument();
});
