// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddProductModal = ({ isOpen, onClose, onAdd }) => {
//     const navigate=useNavigate()
//     const [productName, setProductName] = useState('');
//     const [imageSrc, setImageSrc] = useState(null);
//     const [imageAlt, setImageAlt] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [subcategory, setSubcategory] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [stock, setStock] = useState('');
//     const [rating, setRating] = useState('');
//     const [error, setError] = useState(null);

//     const handleAddProduct = async () => {
//         const newProduct = {
//             product_name: productName,
//             imageSrc: imageSrc || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yiINd-ddL4DzY2uTmp5IRRpOmu9aSFF-uw&s',
//             imageAlt,
//             description,
//             price: parseFloat(price),
//             category,
//             subcategory,
//             quantity: parseInt(quantity, 10) || 0,
//             stock: parseInt(stock, 10),
//             isDeleted: false,
//             rating: parseFloat(rating) || 0,
//         };
 
//         try {
//             const response = await axios.post('http://localhost:3000/api/admin/product', newProduct);
//             console.log(response);
            
//             if (response.data.success) {
//                 onAdd(newProduct); 
//                 onClose(); 
//             } else {
//                 alert('Failed to add product')
//             }
//         } catch (err) {
//             console.log(err);
            
//         }

//          onclose()
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-xl font-semibold mb-4">Add Product</h2>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium mb-1">Product Name:</label>
//                     <input
//                         type="text"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         className="w-full border rounded-md px-3 py-2"
//                         required
//                     />
//                 </div>
                
              

//                 <div className="flex justify-end gap-2">
//                     <button
//                         onClick={onClose}
//                         className="bg-gray-300 px-4 py-2 rounded-md"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleAddProduct}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                     >
//                         Add Product
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProductModal;
