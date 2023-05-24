import React, { useState } from 'react';

const DropdownFilter = () => {
    const [selectedOption, setSelectedOption] = useState('All');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="relative inline-block w-full">
            <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span>{selectedOption}</span>
                <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M7 10l5 5 5-5z"
                    />
                </svg>
            </button>
            <ul className="absolute text-gray-700 pt-1 w-full">
                <li>
                    <button
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={() => handleOptionChange('All')}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={() => handleOptionChange('Option 1')}
                    >
                        Option 1
                    </button>
                </li>
                <li>
                    <button
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={() => handleOptionChange('Option 2')}
                    >
                        Option 2
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DropdownFilter;
