import axios from 'axios';
import React, { useState } from 'react';

const AddCategoryModal = ({ isOpen, onClose }) => {
    const [categoryName, setCategoryName] = useState('');
console.log(categoryName);

    const handleAdd = async (e) => {
        e.preventDefault()
        
        try {
            console.log('hii');
                const response = await axios.post('http://localhost:3000/api/admin/category',{name:categoryName});
                    console.log(response);
                    if(response.data.success){
                        alert(response.data.message)
                        setCategoryName('');
                        onClose();
                    }
      
        } catch (error) {
            console.log(error);
            
            if(error.response.status==400){
                alert(error.response.data.message)
                setCategoryName('');
                onClose()
            }
            console.log(error);
            
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
                <h2 className="text-xl font-semibold mb-4">Add Category</h2>
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter category name"
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

export default AddCategoryModal;
