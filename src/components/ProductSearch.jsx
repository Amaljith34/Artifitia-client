import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import ProductCard from './ProductCard.jsx';


export const Productsearch = () => {
  const location = useLocation();
  const [products, setProducts] = useState(location.state?.products || []);
  const [loading, setLoading] = useState(!products.length);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!products.length) {
      fetchAllProducts();
       
    }
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/product');
      setProducts(response.data.data);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="p-4 flex-grow">
          {loading ? (
            <p className="text-center text-gray-600">Loading products...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
              {products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};


