// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  price: number;
  initialWishlisted: boolean;
};

const productsData: Product[] = [
  { id: 1, name: 'Product 1', price: 100, initialWishlisted: false },
  { id: 2, name: 'Product 2', price: 150, initialWishlisted: true },
  { id: 3, name: 'Product 3', price: 200, initialWishlisted: false },
];

const HomePage: React.FC = () => {
  const [products, setProducts] = useState(productsData);

  const handleWishlistToggle = async (productId: number) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, initialWishlisted: !product.initialWishlisted };
      }
      return product;
    });
    console.log("updatedProducts",updatedProducts)
    setProducts(updatedProducts);

    // Find the updated product
    const product = updatedProducts.find(p => p.id === productId);
    if (product) {
      try {
        if (product.initialWishlisted) {
          // Make API call to add to wishlist
          console.log()
        //   await axios.post('/api/wishlist/add', { productId });
        } else {
          // Make API call to remove from wishlist
        //   await axios.post('/api/wishlist/remove', { productId });
        }
      } catch (error) {
        // Roll back the change if the API call fails
        setProducts(products.map(p => (p.id === productId ? { ...p, initialWishlisted: !product.initialWishlisted } : p)));
        console.error('Failed to update wishlist', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px', width: '200px' }}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <FaHeart
              size={24}
              style={{ color: product.initialWishlisted ? 'red' : 'gray', cursor: 'pointer' }}
              onClick={() => handleWishlistToggle(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
