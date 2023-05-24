"use client"

import React, { useState } from "react";
import Feed from "@components/Feed";
import Hero from "@components/Hero";
import CategoryList from "@components/CategoryList"
import SlideCard from "@components/utils/SlideCard";
import FlexContent from "@components/FlexContent";
import Sales from "@components/Sales";

import { heroapi, popularsales, toprateslaes, highlight, sneaker, footerAPI } from '@data.js';
import Dropdown from "@components/utils/Dropdown";
import CategoryFilter from "@components/utils/CategoryFilter";
import Testimonial from "@components/Testimonial";
import News from "@components/News";
import Newsletter from "@components/Newsletter";

const Home = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  const handleCategoryChange = (selectedCategory) => {
    // Do something with the selected category
    console.log('Selected category:', selectedCategory);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionSelect = (selectedOption) => {
    // Do something with the selected option
    console.log('Selected option:', selectedOption);
  };

  return (
    <section className='flex flex-col gap-16 relative w-full'>
      <Hero />
      <FlexContent endpoint={sneaker} />
      <SlideCard ifExists />
      <Testimonial endpoint={highlight} />
      <News endpoint={sneaker} />
      <Newsletter />
    </section>
  )
};

export default Home;
