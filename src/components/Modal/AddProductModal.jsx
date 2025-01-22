import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProductModal = ({ isOpen, onClose }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [productName, setProductName] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [stock, setStock] = useState(10);  
  const [rating, setRating] = useState(5); 
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://artifitia-server.onrender.com/api/admin/category");
        setCategories(response.data.data);
      } catch (err) {
        setError("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);


  useEffect(() => {
    const fetchSubcategories = async () => {
      
      try {
        console.log('hii');
        
        const response = await axios.get(`https://artifitia-server.onrender.com/api/admin/subcategori`);
        console.log(response.data);
        
        setSubcategories(response.data.data);
      } catch (err) {
        setError("Failed to fetch subcategories.");
      }
    };

    fetchSubcategories();
  }, [category]);

 
  useEffect(() => {
    setSubcategory("");  
  }, [category]);

  const handleAddProduct = async () => {
    const newProduct = {
      product_name: productName,
      imageSrc: imageSrc || "https://via.placeholder.com/150",  
      description: description || "No description provided.",  
      price: parseFloat(price),
      category,
      subcategory,
      stock
    };

    try {
      const response = await axios.post("https://artifitia-server.onrender.com/api/admin/product", newProduct);
      if (response.data.success) {
        toast.success(response.data.message, {style: { color: 'black', fontWeight: 'bold' }});
        onClose(); 
        onAdd(newProduct);  
      } else if(response.data.status===400) {
        toast.error(response.data.message)
      }
    } catch (err) {
      if(err.response.status==400){
        toast.error(err.response.data.message)
          onClose(); 
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="overflow-y-auto max-h-[60vh]">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Image URL:</label>
          <input
            type="text"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Subcategory:</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            disabled={!category || subcategories.length === 0}
          >
            <option value="">Select a subcategory</option>
            {subcategories.length === 0 ? (
              <option value="">No subcategories available</option>
            ) : (
              subcategories.map((subcat) => (
                <option key={subcat._id} value={subcat._id}>
                  {subcat.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Stock:</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            min="0"
            max="5"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-md">
            Cancel
          </button>
          <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Product
          </button>
        </div></div>

      </div>
    </div>
  );
};

export default AddProductModal;
