import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Wishlist from '../Pages/Wishlist';
import { toast } from 'react-toastify';

const BuyProduct = () => {
  const { id } = useParams(); 
  const [quantity, setQuantity] = useState(1);
  const [selectedRam, setSelectedRam] = useState('4 GB');
  const [productDetails, setProductDetails] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate=useNavigate()

  const fetchProductDetails = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`https://artifitia-server.onrender.com/api/product/${id}`);
      setProductDetails(response.data.data);
    } catch (err) {
      toast.error('Failed to fetch product details. Please try again later.')

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleBake=()=>{
    navigate('/product')
  }
  const handleBuy=()=>{
    toast.success('Buy success', {style: { color: 'black', fontWeight: 'bold' }});
    setTimeout(() => {
      navigate('/product')
    }, 1000);

  }
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onWishlistClick={() => setIsWishlistOpen(true)} />
      <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <main className="p-6">
        {loading ? (
          <p className="text-center text-blue-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : productDetails ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold">{productDetails.product_name}</h1>
            <p>${productDetails.price}</p>
            <p>Stock: {productDetails.stock}</p>
            <img src={productDetails.imageSrc} alt={productDetails.imageAlt} />
            {/* <p> <span>{productDetails.category}</span> <span>{productDetails.subcategory}</span> </p> */}
            <p>Description: {productDetails.ddescription}</p>
            <p>{}</p>
            <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-500">
              &#9733;
            </span>
          ))}
        </div>
        <div>
          <button onClick={handleBake} className='bg-green-500 px-2 py-1 ml-4 rounded-md'>Back</button>
          <button className='bg-blue-500 px-2 py-1 ml-4 rounded-md ' onClick={handleBuy}>Continiou</button>
        </div>
          </div>
        ) : (
          <p className="text-center">No product details available.</p>
        )}
      </main>
    </div>
  );
};

export default BuyProduct;
