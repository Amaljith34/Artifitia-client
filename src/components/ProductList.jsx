import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

export function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border rounded p-4">
          <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
