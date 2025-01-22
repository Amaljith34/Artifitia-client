import axios from "axios";
import React, { useEffect, useState } from "react";

const Sidebar = ({ onCategorySelect }) => {
  const [openCategory, setOpenCategory] = useState(null);  
  const [categories, setCategories] = useState([]);  

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/subcategory");
        setCategories(response.data.data); 
        console.log(response.data.data);
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);


  const handleCategoryClick = (categoryId) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));  
  };
console.log(categories);

  return (
    <div className="w-64 bg-gray-100 p-4 ml-14">
      <div className="mt-8">
        <span>Home</span> &gt;
      </div>
      <h2 className="text-xl font-bold mb-4 mt-20">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id} className="mb-2">
            <button
              className="flex items-center justify-between w-full text-left font-semibold hover:text-blue-500"
              onClick={() => handleCategoryClick(category._id)}  
            >
              {category.name}
              {console.log(category.subcategories)
              }
              {openCategory === category._id ? "▼" : "▶"}  
            </button>
            {openCategory === category._id && (
              <ul className="ml-4 mt-2">
                {category.subcategories.map((sub) => (
                  <li key={sub._id} className="flex items-center gap-2 mb-1">
                    {console.log(sub)}
                    
                    <input
                      type="checkbox"
                      id={sub.name}
                      className="form-checkbox"
                      onChange={() => onCategorySelect(sub.name)}  
                    />
                    <label htmlFor={sub.name} className="text-gray-700 hover:text-blue-500 cursor-pointer">
                      {sub.name}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
