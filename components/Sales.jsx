"use client"

import React, { useState, useEffect } from 'react'
import BookCard from './utils/BookCard'
import Item from './utils/Item'
import Title from './utils/Title'

const Sales = ({ ifExists }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/book`);
      const data = await response.json();
      console.log("BOOKS", data)
      setBooks(data);
    };

    fetchPosts();
  }, []);

  function handleShowMore() {
    setDisplayCount(displayCount + 3);
  }

  return (
    <>
      <div className='flex flex-row md:flex-col w-full nike-container'>
        <Title title='Top Sales' />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mb-10 mt-7 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1`}>
          {books?.slice(0, displayCount).map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
          {displayCount < books?.length && (
            <button onClick={handleShowMore}>Show More</button>
          )}
        </div>
      </div>
    </>
  )
}

export default Sales