"use client"

import { useState } from 'react';

const CategoryFilter = ({ categories, onChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onChange(category);
    };

    return (
        <select
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCategory}
            onChange={handleCategoryChange}
        >
            <option value="">All</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;
