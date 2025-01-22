import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product_name, price, imageSrc, _id }) => {
  const [isInWishlist, setIsInWishlist] = useState(false); 
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/buy-product/${_id}`);
  };

  const handleWishlistClick = async () => {
    if (isInWishlist) {
      
      await removeFromWishlist(_id);
    } else {
      
      await addToWishlist(_id);
    }
    setIsInWishlist(!isInWishlist); 
  };

  
  const addToWishlist = async (productId) => {
    try {
      const response = await fetch('/api/wishlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      console.log('Added to wishlist:', data);
    } catch (err) {
      console.error('Error adding to wishlist:', err);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await fetch('/api/wishlist/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      console.log('Removed from wishlist:', data);
    } catch (err) {
      console.error('Error removing from wishlist:', err);
    }
  };

  return (
    <div className="w-64 border rounded shadow-sm border-black p-1">
      <img
        src={imageSrc}
        alt={product_name}
        className="h-40 w-full object-cover mb-2 p-8"
      />
      <h3 className="font-bold text-sm px-8">{product_name}</h3>
      <p className="text-gray-600 px-8">${price}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500">
              &#9733;
            </span>
          ))}
        </div>
        <button
          onClick={handleBuyClick}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Buy
        </button>
        <button
          onClick={handleWishlistClick}
          className={`ml-2 p-2 rounded-full ${isInWishlist ? 'bg-red-500' : 'bg-gray-300'}`}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
