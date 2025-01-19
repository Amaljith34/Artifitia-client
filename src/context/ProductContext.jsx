// import React, { createContext, useState, useContext, useEffect } from 'react';

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/products');
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const addProduct = async (productData) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       });
//       const data = await response.json();
//       setProducts([...products, data]);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <ProductContext.Provider value={{ products, loading, error, addProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProducts = () => useContext(ProductContext);