

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Wishlist from './Wishlist.jsx';
import AddCategoryModal from '../components/Modal/AddCategoryModal.jsx';
import AddSubCategoryModal from '../components/Modal/AddSubCategoryModal.jsx';
import AddProductModal from '../components/Modal/AddProductModal.jsx';
import axios from 'axios';

const Products = () => {
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
    const [isAddSubCategoryOpen, setIsAddSubCategoryOpen] = useState(false);
    const [isAddProductOpen, setIsAddProductOpen] = useState(false);
    const [categories, setCategories] = useState(['Laptop', 'Tablet', 'Headphones']);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAddCategory = (categoryName) => {
        if (!categoryName.trim()) {
            alert('Category name cannot be empty.');
            return;
        }
        setCategories((prev) => [...prev, categoryName]);
    };

    const handleAddSubCategory = ({ category, subCategoryName }) => {
        if (!category || !subCategoryName.trim()) {
            alert('Both category and subcategory name are required.');
            return;
        }
        console.log(`Subcategory "${subCategoryName}" added under category "${category}".`);
    };

    const handleAddProduct = (newProduct) => {
        if (!newProduct.name.trim() || !newProduct.price) {
            alert('Product name and price are required.');
            return;
        }
        setProducts((prev) => [...prev, newProduct]);
    };

    const fetchAllProducts = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://localhost:3000/api/product');
            setProducts(response.data.data);
        } catch (err) {
            setError('Failed to fetch products. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Navbar onWishlistClick={() => setIsWishlistOpen(true)} />
            <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
            <div className="flex flex-grow">
                <Sidebar />
                <main className="p-4 flex-grow">
                    <div className="flex justify-end mb-4 space-x-5 mr-10">
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            onClick={() => setIsAddCategoryOpen(true)}
                        >
                            Add Category
                        </button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            onClick={() => setIsAddSubCategoryOpen(true)}
                        >
                            Add Subcategory
                        </button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            onClick={() => setIsAddProductOpen(true)}
                        >
                            Add Product
                        </button>
                    </div>

                    {loading ? (
                        <p className="text-center text-gray-600">Loading products...</p>
                    ) : error ? (
                        <p className="text-red-500 text-center">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                            {products.map((product) => (
                                <ProductCard key={product._id} {...product} />
                            ))}
                        </div>
                    )}
                </main>
            </div>

            <AddCategoryModal
                isOpen={isAddCategoryOpen}
                onClose={() => setIsAddCategoryOpen(false)}
                onAdd={handleAddCategory}
            />

            <AddSubCategoryModal
                isOpen={isAddSubCategoryOpen}
                onClose={() => setIsAddSubCategoryOpen(false)}
                onAdd={handleAddSubCategory}
                categories={categories}
            />

            <AddProductModal
                isOpen={isAddProductOpen}
                onClose={() => setIsAddProductOpen(false)}
                onAdd={handleAddProduct}
            />
        </div>
    );
};

export default Products;
