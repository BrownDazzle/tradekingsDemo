"use client"

import React, { useState, useEffect } from 'react'
import BookCard from './utils/BookCard'
import Item from './utils/Item'
import Title from './utils/Title'



const FlexContent = ({ ifExists, endpoint: { title, heading, text, img, btn, url } }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/products`);
      const data = await response.json();
      setBooks(data);
    };

    fetchPosts();
  }, []);

  function handleShowMore() {
    setDisplayCount(displayCount + 3);
  }
  return (
    <>
      <div className={`flex items-center flex-col justify-center mb-9 sm:px-4 md:px-10 lg:px-20`}>
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center mb-5'>
          <h1 className='flex justify-center text-2xl lg:text-5xl md:text-4xl sm:text-1xl font-bold text-slate-700 mb-3'>{heading}</h1>
          <h1 className="flex justify-center flex-col lg:text-3xl md:text-2xl sm:text-1xl font-bold text-slate-500 filter drop-shadow-lg">
            <span className="flex justify-center">Order All Your Daily Needs From The </span><br className="sm:block hidden" />{" "}
            <span className="flex justify-center">Comfort Of Your Home</span>{" "}
          </h1>
          <a href={url} className="flex items-center justify-center mt-5" role="button">
            <button type='button' className='button-theme  bg-gradient-to-r from-cyan-500 to-blue-500 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
          </a>
        </div>
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mb-10 mt-7 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1`}>
          {books?.slice(0, displayCount).map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}

        </div>
      </div>
    </>
  )
}

export default FlexContent