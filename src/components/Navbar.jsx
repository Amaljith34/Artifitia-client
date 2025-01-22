



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ onWishlistClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      navigate('/product')
      
    }
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products?search=${searchQuery}`
      );
      navigate('/products', { state: { products: response.data.data } });
    } catch (error) {
      alert("No products found or an error occurred.");
    }
  };

  return (
    <nav className="bg-blue-700 p-4 flex items-center justify-between text-white">
      <h1
        className="text-lg font-bold cursor-pointer"
        onClick={() => navigate('/product')}
      >
        Artifitia
      </h1>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 py-1 rounded text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 px-4 py-1 rounded"
        >
          Search
        </button>
      </div>
      <div className="flex space-x-4">
        <a
          onClick={() => navigate('/login')}
          className="hover:underline cursor-pointer"
        >
          Sign In
        </a>
        <a
          onClick={() => navigate('/cart')}
          className="hover:underline cursor-pointer"
        >
          Cart
        </a>
        <button onClick={onWishlistClick} className="hover:underline">
          Wishlist
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
