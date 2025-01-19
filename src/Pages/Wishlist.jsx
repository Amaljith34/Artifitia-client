import React from "react";
const Wishlist = ({ isOpen, onClose }) => {
    return (
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Items</h2>
          <button onClick={onClose} className="text-red-500 font-bold">&times;</button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yiINd-ddL4DzY2uTmp5IRRpOmu9aSFF-uw&s"
                alt="Product"
                className="w-16 h-16 rounded-md"
              />
              <div>
                <h3 className="font-bold">HP AMD Ryzen 3</h3>
                <p>1000</p>
              </div>
            </div>
            <button className="text-red-500 font-bold">&times;</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yiINd-ddL4DzY2uTmp5IRRpOmu9aSFF-uw&s"
                alt="Product"
                className="w-16 h-16 rounded-md"
              />
              <div>
                <h3 className="font-bold">HP AMD Ryzen 3</h3>
                <p>$529.99</p>
              </div>
            </div>
            <button className="text-red-500 font-bold">&times;</button>
          </div>
        </div>
      </div>
    );
  };
  export default Wishlist
  