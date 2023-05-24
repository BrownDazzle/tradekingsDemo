"use client"

import React from "react";
import { useDispatch } from "react-redux";

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { FaOpencart, FaPlus } from "react-icons/fa";
import { setAddItemToCart, setOpenCart } from "@app/globalRedux/features/CartSlice";



const Item = ({
  ifExists,
  _id,
  title,
  desc,
  manufacturer,
  cover,
  quantity,
  price,
}) => {

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

  return (
    <>
      <div
        className={`relative bg-gradient-to-b shadow-lg grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
          } rounded-xl `}
      >
        <div
          className={`flex items-center py-5 ${ifExists ? "absolute top-5 right-1" : "justify-center"
            }`}
        >
          <a href={`/product/${_id}`} >
            <img
              src={`/assets/tk-images/${cover}`}
              alt={title}
              className={`transitions-theme object-contain hover:scale-105 ${ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 transition-all duration-700 ease-in-out w-full "
                : "h-36 w-64"
                }`}
            />
          </a>
        </div>
        <div
          className={`grid items-center w-full py-4 px-5 rounded-xl ${ifExists ? "justify-items-start" : "justify-items-start"
            }`}
        >
          <h1 className="text-slate-900 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-900 text-[12px] lg:text-[16px] filter drop-shadow text-base md:text-sm font-normal">
            Quantity{""} 1x 12
          </p>

          <div className="flex items-center justify-between w-full my-2 pr-4">
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-slate-900 filter drop-shadow text-base md:text-sm font-normal">
                {manufacturer}
              </p>
              <h1 className="md:text-sm font-normal text-slate-900 text-xl">
                K{price}
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              className="flex flex-row items-center hover:scale-90  sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-500 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <FaPlus className="h-3 w-3 text-slate-100 cursor-pointer transition-all duration-100 leading-tight text-slate-100" />
              <FaOpencart className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-gradient-to-l from-cyan-300 to-blue-300 hover:scale-90 sm:text-sm blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 font-medium sm:font-small text-sm text-slate-100 "
              onClick={() => { onAddToCart(); onCartToggle(); }}
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Item;
