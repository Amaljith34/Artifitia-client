import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Wishlist from "./Wishlist.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Cart = () => {
      const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  
  return (
    <div className="flex flex-col h-screen">
      <Navbar onWishlistClick={() => setIsWishlistOpen(true)} />
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
      <div className="flex flex-grow">
        <Sidebar />
      </div>
      <h1>Cart page</h1>
    </div>
  );
};

export default Cart;
