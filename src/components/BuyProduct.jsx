import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Wishlist from '../Pages/Wishlist.jsx';

const BuyProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedRam, setSelectedRam] = useState('4 GB');

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increment' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar onWishlistClick={() => setIsWishlistOpen(true)} />
    <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    <main className="p-6">
      <nav className="text-sm text-gray-500 mb-4 mt-8">
        <span >Home</span> &gt; <span>Product details</span>
      </nav>

      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-4">
          <img src="/path-to-image.jpg" alt="Product" className="w-full rounded-lg mb-4" />
          <div className="flex space-x-2">
            <img src="/path-to-image.jpg" alt="Thumbnail 1" className="w-16 h-16 rounded-lg" />
            <img src="/path-to-image.jpg" alt="Thumbnail 2" className="w-16 h-16 rounded-lg" />
          </div>
        </div>

        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-2">HP AMD Ryzen 3</h1>
          <p className="text-xl text-gray-700 mb-2">$529.99</p>
          <p className="text-sm text-green-600 mb-2">Availability: <span className="font-bold">In stock</span></p>
          <p className="text-sm text-red-600 mb-4">Hurry up! only 34 product left in stock!</p>

          <div className="mb-4">
            <span className="font-bold">Ram:</span>
            <div className="flex space-x-2 mt-2">
              <button 
                className="px-4 py-2 rounded-md border bg-blue-500 text-white"
              >
                4 GB
              </button>
              <button 
                className="px-4 py-2 rounded-md border bg-gray-200 text-black"
              >
                8 GB
              </button>
              <button 
                className="px-4 py-2 rounded-md border bg-gray-200 text-black"
              >
                16 GB
              </button>
            </div>
          </div>

          <div className="mb-4">
            <span className="font-bold">Quantity:</span>
            <div className="flex items-center space-x-2 mt-2">
              <button 
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                -
              </button>
              <span className="font-bold text-lg">1</span>
              <button 
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-md">Edit product</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Buy it now</button>
          </div>
        </div>
      </div>
    </main>
  </div>
);
};


export default BuyProduct;
