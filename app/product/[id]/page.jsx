"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon } from "@heroicons/react/24/outline";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaOpencart } from "react-icons/fa";

import Item from '@/components/utils/Item';
import FlexContent from "@components/FlexContent";
import { ImgArray, highlight } from "@data";
import Title from "@components/utils/Title";
import Testimonial from "@components/Testimonial";
import { setAddItemToCart, setDecreaseItemQTY, setIncreaseItemQTY, setOpenCart } from "@app/globalRedux/features/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = ({ params }) => {

    const [index, setIndex] = useState(0);
    const [book, setBook] = useState([]);
    const [books, setBooks] = useState([]);
    const dispatch = useDispatch();

    const onAddToCart = () => {
        const item = { _id, title, desc, cover, price, manufacturer };

        dispatch(setAddItemToCart(item));
    };

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }



    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/product/${params.id}`);
            const data = await response.json();

            setBook(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);


    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }

    const { _id, title, desc, cover, price, cartQuantity, manufacturer } = book;


    return (
        <>
            <div className="w-full">
                <div className={`flex items-center justify-center lg:flex-row lg:justify-center mt-20 mb-9 px-5 md:px-10 lg:px-20 gap-[20px] flex-col`}>
                    <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center md:mt-4'>
                        <div className="flex flex-col items-center justify-center w-full  ">
                            <img src={`/assets/tk-images/${cover}`} className='w-[400px] h-[400px] object-cover cursor-pointer rounded-xl ' />
                        </div>
                        <div className="gap-4 mt-[40px] flex flex-row w-full">
                            {ImgArray?.map((item, i) => (
                                <img
                                    key={i}
                                    src={item.attributes.url}
                                    className={i === index ? 'w-[90px] h-[90px] object-cover cursor-pointer rounded-xl transition-all duration-700 ease-in-out w-full hover:scale-105' : 'w-[70px] h-70px] cursor-pointer rounded-xl bg-[#ebebeb]'}
                                    onMouseEnter={() => setIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-0 lg:mr-30 w-full ">
                            <h1 className="mt-5 text-2xl font-bold">{title}</h1>
                            <div className="flex flex-row items-center">
                                <div className="flex flex-row">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                </div>
                                <p className="text-[#324d67]">
                                    (20)
                                </p>
                            </div>
                            <h4 className="text-2xl font-semibold">Details: </h4>
                            <p>{desc}</p>
                            <p className="text-2xl font-bold mt-[10px] text-[#f02d34]">K{""}{price}</p>
                            {/*<div className="flex items-center mt-[10px] gap-[20px]">
                            <h4 className="text-2xl font-semibold">Quantity:</h4>
                            <div className="flex items-center justify-around w-[100px]">
                                <button type="button" onClick={() => dispatch(setDecreaseItemQTY({ _id, title, desc, cover, price, manufacturer, cartQuantity }))} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                                    <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                                </button>
                                <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
                                <button type="button" onClick={() => dispatch(setIncreaseItemQTY({ _id, title, desc, cover, price, manufacturer, cartQuantity }))} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                                    <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                                </button>
                            </div>
                            </div>*/}
                            <div className="flex items-center justify-start my-5 gap-3 w-full">
                                <button
                                    type="button"
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                                    onClick={() => dispatch(setAddItemToCart({ _id, title, desc, cover, price, manufacturer, cartQuantity }))}
                                >
                                    <FaOpencart className="icon-style text-slate-900" />
                                </button>
                                <button
                                    type="button"
                                    className="bg-gradient-to-l from-cyan-300 to-blue-300 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 font-medium text-sm text-slate-100 "
                                    onClick={() => { onAddToCart(); onCartToggle(); }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <Testimonial endpoint={highlight} />
            </div>
        </>
    )
}

export default ProductDetails