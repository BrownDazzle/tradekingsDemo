"use client"

import React, { useEffect, useState } from 'react';

import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@app/globalRedux/features/ProductSlice';


const Searchbar = ({ setOpenSearchToggle }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch()
  // Search states
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return data?.filter(
      (item) =>
        regex.test(item.manufacturer) ||
        regex.test(item.title) ||
        regex.test(item.category)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products) setData(products)
  })

  return (
    <>
      <div className='grid items-center justify-end cursor-pointer w-full pt-4 pr-5' onClick={() => setOpenSearchToggle(false)}>
        <XMarkIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
      </div>
      <form autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
        <div className="flex flex-row justify-start items-center">
          <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
          <input
            name="search-field"
            autoComplete="on"
            id="search-field"
            className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-slate-900 p-4"
            placeholder="Search for products"
            type="search"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button className='py-[5px] px-[4px] mr-5 rounded-[5px] border-none text-[10px] uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out' >Search</button>
        </div>
      </form>
      <hr />
      <div className="flex flex-col px-20">
        <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden pb-10 pt-3">
          {searchedResults?.map((product, i) => (
            <>
              <a href={`/product/${product._id}`} key={i}>
                <div className='flex flex-row items-center justify-start'>
                  <img src={`/assets/tk-images/${product.cover}`} className='w-16 h-16 object-cover mr-5 rounded-[5px]' />
                  <div className='flex flex-col'>
                    <p className='font-medium text-xl'>{product.title}</p>
                    <p>{product.manufacturer}</p>
                  </div>
                </div>

              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
