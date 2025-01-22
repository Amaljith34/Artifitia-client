import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const AddSubCategoryModal = ({ isOpen, onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subCategoryName, setSubCategoryName] = useState('');
    const [categories, setCategories] = useState([]);

      
      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/admin/category");
            setCategories(response.data.data);
    
          } catch (err) {
            setError("Failed to fetch categories.");
          }
        };
    
        fetchCategories();
      }, []);

    const handleAdd = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/admin/subcategory', {
                    name: subCategoryName.trim(),
                    categoryId: selectedCategory,
                });

                if (response.data.success) {
                    alert('Subcategory added successfully!');
                    setSelectedCategory('');
                    setSubCategoryName('');
                    onClose();
                } else {
                    alert(response.data.message || 'Error adding subcategory');
                }
            } catch (err) {
                alert('An error occurred while adding the subcategory.');
            }
       
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">Add Sub Category</h2>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                >
                    <option value="" disabled>Select category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={subCategoryName}
                    onChange={(e) => setSubCategoryName(e.target.value)}
                    placeholder="Enter sub category name"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                />
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded text-gray-800 hover:bg-gray-400"
                    >
                        Discard
                    </button>
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddSubCategoryModal;
