import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product_name, price, imageSrc }) => {
  return (
    <Link to='/buy-product'>
    <div className="w-64 border rounded  shadow-sm  border-black p-1">
      <img src={imageSrc} alt={product_name} className="h-40 w-full object-cover mb-2 p-8" />
      <h3 className="font-bold text-sm px-8">{product_name}</h3>
      <p className="text-gray-600 px-8">${price}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500">&#9733;</span>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-2 py-1 rounded">Add</button>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
