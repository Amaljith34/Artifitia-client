import React, { useState } from 'react';

const AddSubCategoryModal = ({ isOpen, onClose, onAdd, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subCategoryName, setSubCategoryName] = useState('');

    const handleAdd = () => {
        if (selectedCategory && subCategoryName.trim()) {
            onAdd({ category: selectedCategory, subCategoryName });
            setSelectedCategory('');
            setSubCategoryName('');
            onClose();
        } else {
            alert('Please fill in all fields.');
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
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
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
