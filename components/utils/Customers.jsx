import React from "react";
//import { useDispatch } from "react-redux";

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
//import { setAddCustomersToCart, setOpenCart } from "../../app/CartSlice";

const Customers = ({
    ifExists,
    _id,
    color,
    shadow,
    title,
    desc,
    publisher,
    cover,
    btn,
    rating,
    price,
}) => {
    //   console.log(id)
    //const dispatch = useDispatch();

    const onAddToCart = () => {
        const item = { _id, title, desc, cover, color, shadow, price, publisher };

        //dispatch(setAddItemToCart(item));
    };

    const onCartToggle = () => {
        /*dispatch(setOpenCart({
          cartState: true
        }))*/
    }

    return (
        <>
            <div
                className={`relative bg-gradient-to-b shadow-lg grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                    } rounded-xl transition-all duration-700 ease-in-out w-full hover:scale-105`}
            >
                <div
                    className={`flex items-center py-5 ${ifExists ? "absolute top-5 right-1" : "justify-center"
                        }`}
                >
                    <a href={`/product/${_id}`} >
                        <img
                            src={cover}
                            alt={title}
                            className={`transitions-theme object-contain hover:-rotate-12 ${ifExists
                                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                                : "h-36 w-64"
                                }`}
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Customers;
