"use client"

import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import Item from '@/components/utils/Item'
import Title from '@/components/utils/Title'
import { productCategory, highlight, sneaker, productCategoryoprateslaes, companyCategory } from '@/data.js'
import SlideCarousel from '@/components/utils/SlideCarousel';
import FlexContent from '@components/FlexContent';
import DropdownFilter from '@components/Dropdown';
import Testimonial from '@components/Testimonial';
import { fetchProducts } from '@app/globalRedux/features/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';


function ProductList({ ifExists }) {

    const { products } = useSelector((state) => state.products);

    const dispatch = useDispatch()
    const [selected, setSelected] = useState(false);
    const [filters, setFilters] = useState({});
    const [subObj, setSubObj] = useState({});
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("newest");


    const [displayCount, setDisplayCount] = useState(8);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleButtonClick = (category, i) => {
        const selectedCategory = category
        const filterObj = products.filter(({ category }) => category === selectedCategory)
        category === "Popular" ? setData(products) : setData(filterObj)
        setActiveCategory(i)
        setSelected(true)
    };
    // console.log(endpoint)
    function handleShowMore() {
        setDisplayCount(displayCount + 3);
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products) setData(products)
    }, [products])

    const handleSorts = (e) => {
        const value = e.target.value;
        console.log(value)

        if (value === "asc") {
            const ascData = [...data]?.sort((a, b) => a?.price - b?.price)

            setData(ascData)
        } else if (value === "desc") {
            const desData = [...data]?.sort((a, b) => b?.price - a?.price)
            setData(desData)
        }

        setSort({
            ...sort,
            [e.target.name]: value,
        });
    }



    const handleFilters = (e) => {
        const value = e.target.value;
        const filterObj = products?.filter(({ manufacturer }) => value === manufacturer)

        value === "Popular" ? setData(products) : setData(filterObj)

        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    const handleNextClick = () => {
        setActiveCategory(activeCategory === subObj?.subCategory?.length - 1 ? 0 : activeCategory + 1);
        setActiveImageIndex((prevIndex) =>
            prevIndex === subObj?.subCategory?.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevClick = () => {
        setActiveCategory(activeCategory === 0 ? subObj?.subCategory?.length - 1 : activeCategory - 1);
        setActiveImageIndex((prevIndex) =>
            prevIndex === 0 ? subObj?.subCategory?.length - 1 : prevIndex - 1
        );
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollLeft = () => {
        setScrollPosition((prevPosition) => prevPosition - 100);
    };

    const handleScrollRight = () => {
        setScrollPosition((prevPosition) => prevPosition + 100);
    };


    return (
        <div className='w-full px-20'>
            <div className='flex mb-5 mt-20 items-center justify-between w-full'>
                <div className='flex  flex-col w-full'>
                    <SlideCarousel items={productCategory} handleButtonClick={handleButtonClick} activeCategory={activeCategory} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
                </div>
            </div>
            <div className='flex justify-center flex-col w-full'>
                <div className='flex mb-5 items-center justify-between'>

                    <div className='flex justify-between align-center w-full lg:px-20'>
                        <div className='m-[20px]'>
                            <span className='mr-[20px] text-sm font-semibold'>Manufacturer:</span>
                            <select className='p-[10px] mr-[20px] outline-none text-md' name="color" onChange={handleFilters}>
                                <option default disabled>Company</option>
                                {companyCategory.map((manufacturer, i) => (
                                    <option key={i}>{manufacturer}</option>
                                ))}
                            </select >
                        </div>
                        <div className='m-[20px]'>
                            <span className='text-sm font-semibold'>Sort Price:</span>
                            <select className='p-[10px] outline-none text-md' onChange={(e) => handleSorts(e)}>
                                <option value="asc">Price (asc)</option>
                                <option value="desc">Price (desc)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mb-10 mt-7 md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 nike-container`}>
                    {data?.length !== 0 ? (data?.slice(0, displayCount).map((item, i) => (
                        <Item {...item} key={i} ifExists={ifExists} />
                    ))) : (
                        <>
                            <p>
                                No products for this category currently...Keep shopping!
                            </p>
                        </>
                    )}

                    {displayCount < data?.length && (
                        <button className='button-theme  bg-gradient-to-r from-cyan-500 to-blue-500 shadow-slate-900 text-slate-100 py-1.5' onClick={handleShowMore}>Show More</button>
                    )}
                </div>
            </div>
            <Testimonial endpoint={highlight} />
        </div>
    )
}

export default ProductList