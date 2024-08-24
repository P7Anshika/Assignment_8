// src/pages/Home.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 12.99 },
];

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Home</h1>
      <ProductList products={sampleProducts} />
    </div>
  );
}

export default Home;
