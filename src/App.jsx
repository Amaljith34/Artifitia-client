import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/auth/Registration.jsx';
import Products from './Pages/Products.jsx';
import BuyProduct from './components/BuyProduct.jsx';
import AddProduct from './components/AddProduct.jsx';
import Login from './components/auth/Login.jsx';
import Cart from './Pages/Cart.jsx';

export function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Products />} />
          <Route path='/buy-product' element={<BuyProduct />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
