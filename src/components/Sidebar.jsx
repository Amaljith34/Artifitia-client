
import React, { useState } from "react";

const Sidebar = ({ onCategorySelect }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const categories = [
    { name: "Laptop", subcategories: ["HP", "Dell"] },
    { name: "Tablet", subcategories: ["Samsung", "Apple"] },
    { name: "Headphones", subcategories: ["Sony", "Bose"] },
  ];

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="w-64 bg-gray-100 p-4 ml-14">
      <div className="mt-8">
        
        <span>Home</span> &gt; 

      </div>
      <h2 className="text-xl font-bold mb-4 mt-20">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name} className="mb-2">
            <button
              className="flex items-center justify-between w-full text-left font-semibold hover:text-blue-500"
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
              {openCategory === category.name ? "▼" : "▶"}
            </button>
            {openCategory === category.name && (
              <ul className="ml-4 mt-2">
                {category.subcategories.map((sub) => (
                  <li key={sub} className="flex items-center gap-2 mb-1">
                    <input
                      type="checkbox"
                      id={sub}
                      className="form-checkbox"
                      onChange={() => onCategorySelect(sub)}
                    />
                    <label htmlFor={sub} className="text-gray-700 hover:text-blue-500 cursor-pointer">
                      {sub}
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
