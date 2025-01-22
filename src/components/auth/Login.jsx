import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      if (response.data.success) {
        console.log(response.data);
        
        localStorage.setItem("id",response.data.userId)
        setSuccess(response.data.message);
        
        navigate('/product')
      }
    } catch (err) {
      console.log(err);
       console.log(err.response.status);
       
      if(err.response.status==401){
         alert(err.response.data.message)
      }
     else if(err.response.status==400){
        alert(err.response.data.message)
        navigate('/')
     }
     else if(err.response.status==403){
      alert(err.response.data.message)
   }

    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-[1] bg-blue-800 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-center mb-6">
          To keep connected with us please login with your personal info
        </p>
        <Link to='/'>
        <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          SIGN UP
        </button>
        </Link>
      </div>

      <div className="flex-[3] bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6">Log In</h1>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-4/5 md:w-1/2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
