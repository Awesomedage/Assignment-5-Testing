import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItem from '../CartItem';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CartItem', () => {
  const product = {
   id: 1,
    name: 'Test Product',
    price: 19.99,
    image: 'product.jpg',
  };

  let mockRemove;

  beforeEach(() => {
    mockRemove = vi.fn();
  });

  test('renders without crashing', () => {
    renderWithRouter(<CartItem product={product} onRemoveFromCart={vi.fn()} />);
  });

 test('displays product information', () => {
    renderWithRouter(<CartItem product={product} onRemoveFromCart={mockRemove} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });

  test('displays product image correctly', () => {
    renderWithRouter(<CartItem product={product} onRemoveFromCart={mockRemove} />);
    const img = screen.getByRole('img', { name: /test product/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'product.jpg');
  });

  test('calls remove function when clicking Remove button', () => {
    renderWithRouter(<CartItem product={product} onRemoveFromCart={mockRemove} />);
    const removeBtn = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeBtn);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(1); 
  });
});