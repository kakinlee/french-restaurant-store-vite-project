

import React, { useState } from 'react';
import { Outlet } from "react-router-dom"
import Header from '../components/header.tsx'
import Footer from '../components/footer.tsx'
import ShoppingCart from '../components/cart.tsx'
import Container from "@mui/material/Container"

interface Product {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  origin: number;
  quantity: number;
}


const Layout: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
 
  return (
    <>
      <Header />
      <Container maxWidth="lg">
      <Outlet  context={{ cartItems, handleAddToCart }} />
      </Container>
      <ShoppingCart cartItems={cartItems} />
      <Footer />
    </>
  )
}

export default Layout