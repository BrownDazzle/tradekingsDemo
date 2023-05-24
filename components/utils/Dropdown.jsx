"use client"

import { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="relative">
            <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedOption}
                onChange={(e) => handleOptionSelect(e.target.value)}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 13.95a1 1 0 01-1.414 0l-3.536-3.536a1 1 0 011.414-1.414L10 11.586l3.536-3.536a1 1 0 011.414 1.414l-3.536 3.536z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Dropdown;
