//ProductCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard', () => {
  const product = {
    name: 'Test Product',
    price: 19.99,
    image: 'product.jpg',
    description: 'This is a test product'
  };

  test('renders without crashing', () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={vi.fn()} />);
  });

  test('renders product information correctly', () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={vi.fn()} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('displays action buttons', () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={vi.fn()} />);

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /wishlist/i })).toBeInTheDocument();
  });

  test('displays product image correctly', () => {
    renderWithRouter(<ProductCard product={product} onAddToCart={vi.fn()} />);

    const img = screen.getByRole('img', { name: /test product/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'product.jpg');
  });

  test('calls addToCart when clicking Add to Cart', () => {
    const mockAdd = vi.fn();

    renderWithRouter(<ProductCard product={product} onAddToCart={mockAdd} />);

    const btn = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(btn);

    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockAdd).toHaveBeenCalledWith(product);
  });
});
