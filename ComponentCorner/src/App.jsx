// App.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ketchupImg from "./Ketchup.jpg";
import switchImg from "./Switch.jpg";
import shoesImg from "./TennisShoes.jpg";
import blackJacketImg from "./blackjacket.jpg";
import redBackpackImg from "./redbackpack.jpg";
import mechanicalPencilImg from "./mechanicalpencil.jpg";



function App() {
  const products = [
    { id: 1, 
      name: "Tennis shoes", 
      price: 29.99, 
      image: shoesImg, 
      description: "Very comfortable shoes for running and walking." },
    { id: 2, 
      name: "Nintendo switch", price: 299.99, 
      image: switchImg, 
      description: "Nintendo's most popular gaming console." },
    { id: 3, 
      name: "Ketchup packet", 
      price: 1.99, 
      image: ketchupImg, 
      description: "within this packet holds the world's tastiest ketchup." },
    { id: 4, 
      name: "Red backpack", 
      price: 49.99, 
      image: redBackpackImg, 
      description: "Perfect for students and people who like the color red." },
    { id: 5, 
      name: "Mechanical pencil", 
      price: 1.99, 
      image: mechanicalPencilImg, 
      description: "One single High-quality mechanical pencil." },
    { id: 6, 
      name: "Black jacket", 
      price: 19.99, 
      image: blackJacketImg, 
      description: "Warm and stylish." }
  ];

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Header cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
