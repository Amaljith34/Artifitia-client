import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../Pages/Products";

const AddProduct = () => {
 
    const [variants, setVariants] = useState([
        { ram: "4 GB", price: 529.99, qty: 1 },
        { ram: "8 GB", price: 929.99, qty: 3 },
    ]);

    const handleAddVariant = () => {
        setVariants([...variants, { ram: "", price: 0, qty: 1 }]);
    };

    const handleVariantChange = (index, field, value) => {
        const updatedVariants = [...variants];
        updatedVariants[index][field] = value;
        setVariants(updatedVariants);
    };

    return (
        <div className="flex items-center justify-center min-hn  bg-gray-100">
            <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Add Product</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Title:</label>
                    <input
                        type="text"
                        placeholder="Product title"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Variants:</label>
                    {variants.map((variant, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <input
                                type="text"
                                value={variant.ram}
                                placeholder="RAM"
                                onChange={(e) => handleVariantChange(index, "ram", e.target.value)}
                                className="border rounded-md px-2 py-1 w-20"
                            />
                            <input
                                type="number"
                                value={variant.price}
                                placeholder="Price"
                                onChange={(e) => handleVariantChange(index, "price", parseFloat(e.target.value))}
                                className="border rounded-md px-2 py-1 w-24"
                            />
                            <input
                                type="number"
                                value={variant.qty}
                                placeholder="Qty"
                                onChange={(e) => handleVariantChange(index, "qty", parseInt(e.target.value, 10))}
                                className="border rounded-md px-2 py-1 w-16"
                            />
                        </div>
                    ))}
                    <button
                        onClick={handleAddVariant}
                        className="text-blue-500 text-sm hover:underline"
                    >
                        + Add Variant
                    </button>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Sub Category:</label>
                    <input
                        type="text"
                        placeholder="Sub category"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Description:</label>
                    <textarea
                        placeholder="Product description"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Upload Image:</label>
                    <input
                        type="file"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400" >
                        Discard
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
