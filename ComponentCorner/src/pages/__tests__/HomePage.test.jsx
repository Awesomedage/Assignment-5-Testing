//HomePage.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
  test('renders hero section correctly', () => {
    renderWithRouter(<HomePage />);

    expect(
      screen.getByText('Welcome to ComponentCorner')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Your go-to destination for all your component needs!')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Shop Now')
    ).toBeInTheDocument();
  });
});
