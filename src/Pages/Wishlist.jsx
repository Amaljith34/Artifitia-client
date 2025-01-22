import axios from "axios";
import React, { useEffect, useState } from "react";
const Wishlist = ({ isOpen, onClose }) => {
  const [wishList,setWishlist]=useState([])
  const id=localStorage.getItem("id")
  console.log(id);
  
  const fetchWishList=async(req,res)=>{
    try {
      const response=await axios.get(`http://localhost:3000/api/wishlist/${id}`)
      
      setWishlist(response.data.products)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
     fetchWishList()
  },[])
  const handleRemoveWishlist=async(productid)=>{
   const response= await axios.delete(`http://localhost:3000/api/wishlist/${id}`,{productId:productid})
   console.log(response.data);
   alert('remove wishlist')
  }
  
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
          {wishList.map((item)=>(
            <div className="flex items-center justify-between">
              
            <div className="flex items-center space-x-4">
              
              <img
                src={item.productId.imageSrc}
                alt="Product"
                className="w-16 h-16 rounded-md"
              />
              <div>
                <h3 className="font-bold">{item.productId.product_name}</h3>
                <p>Price:  {item.productId.price}</p>
              </div>
            </div>
            {console.log(item.productId._id)
            }
            <button className="text-red-500 font-bold" onClick={()=>handleRemoveWishlist(item.productId._id)}>&times;</button>
            <div><button>Buy</button></div>
          </div>
          )
          )}
          
          
        </div>
      </div>
    );
  };
  export default Wishlist
  