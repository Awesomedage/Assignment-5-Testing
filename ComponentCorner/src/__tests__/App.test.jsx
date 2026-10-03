import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
vi.stubGlobal('localStorage', localStorageMock);

describe('App localStorage Integration', () => {
    beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  test('loads cart items from localStorage on component mount', () => {
    const savedCartItems = JSON.stringify([{ id: 1, name: 'Test Product', price: 9.99 }]);
    localStorageMock.getItem.mockReturnValue(savedCartItems);
    render(<App />);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cartItems');
  });

  test('saves cart items to localStorage when cart changes', async () => {
    localStorageMock.getItem.mockReturnValue('[]');
    render(<App />);
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('cartItems', '[]');
    });
  });

  test('persists cart items across component remounts', async () => {
    localStorageMock.getItem.mockReturnValue('[]');
    const { unmount } = render(<App />);
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('cartItems', '[]');
    });
    unmount();
    const savedCart = [{ id: 1, name: 'Test Product', price: 9.99 }];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(savedCart));
    render(<App />);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cartItems');
  });
});