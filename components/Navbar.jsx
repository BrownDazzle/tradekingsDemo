"use client"

import { useEffect, useState } from 'react';

import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaOpencart } from 'react-icons/fa';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Search from '@/components/Search.jsx';
import UserProfile from '@/components/UserProfile';
import Notification from '@/components/Notification';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { FaceFrownIcon } from '@heroicons/react/24/solid';
import { productCategory } from '@data';
import { setOpenCart, selectTotalQTY, selectCartItems, selectCartState } from '@app/globalRedux/features/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFromLocalStorage } from '@localStorage';



const Navbar = () => {

    //const { data: session } = useSession();
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);

    const [navState, setNavState] = useState(false);
    const [openSearchToggle, setOpenSearchToggle] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)


    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleSubDropdown, setToggleSubDropdown] = useState(false);
    const [subProd, setSubProd] = useState([]);

    const cartItems = getFromLocalStorage("cart");


    /*  useEffect(() => {
          (async () => {
              const res = await getProviders();
              setProviders(res);
          })();
      }, []);*/


    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onSearchToggle = () => {
        setOpenSearchToggle(true)
    }

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);

    const openSubProducts = (prod) => {
        setSubProd(prod.subCategory)
        setToggleSubDropdown(true)
    }

    const optionsLinks = [
        {
            name: "Products",
            url: "/products"
        },
    ]

    return (
        <>
            <header className={'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 z-[200] w-full'
            }
            >
                <nav className='flex items-center justify-between w-full px-10'>
                    <div className='flex justify-start items-center'>
                        <Link href='/' className='flex gap-2 flex-center'>
                            <Image
                                src='/assets/logos/tk_logo.jpg'
                                alt='logo'
                                width={55}
                                height={55}
                                className='object-contain rounded-full'
                            />
                            {/* <p className='font-satoshi text-1xl font-semibold text-gray-100'>Trade Kings</p>*/}
                        </Link>
                        <div className='ml-10 flex  items-center justify-start '>

                            <a href="/products" className='flex flex-row text-white font-semibold text-sm mr-8 cursor-pointer'>View Products</a>

                            <div className='grid items-center'>
                                <MagnifyingGlassIcon onClick={onSearchToggle} className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                            </div>

                        </div>
                    </div>

                    <ul className='flex items-center justify-center gap-2'>
                        <li className='grid items-center'>
                            <button type='button' onClick={() => onCartToggle()} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <FaOpencart className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className={`absolute top-5 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                            </button>
                        </li>
                        {providers ? (
                            <>
                                {providers &&
                                    Object.values(providers).map((provider) => (
                                        <button
                                            type='button'
                                            key={provider.name}
                                            onClick={() => {
                                                signIn(provider.id);
                                            }}
                                            className='black_btn'
                                        >
                                            Sign in
                                        </button>
                                    ))}
                            </>
                        ) : (
                            <>
                                {/*}  <li className='grid items-center'>
                                    <button type='button' onClick={() => setOpenNotification(!openNotification)} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                        <RiNotification3Line className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                        <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-red-900 text-slate-100 shadow-slate-900' : 'bg-red-100 text-slate-900 shadow-slate-100'}`}>{totalQuantities}</div>
                                    </button>
                        </li>*/}
                                <div
                                    className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                                    onClick={() => setOpenProfile(true)}
                                >
                                    <img
                                        className="rounded-full w-12 h-12 object-cover"
                                        src="/assets/assets/people02.png"
                                        alt="user-profile"
                                    />
                                    <p>
                                        <span className="text-white text-14">Hi,</span>{' '}
                                        <span className="text-white font-bold ml-1 text-14">
                                            Ryan
                                        </span>
                                    </p>
                                    <MdKeyboardArrowDown className="text-white text-14" />
                                </div>
                            </>
                        )
                        }

                    </ul>
                </nav>
            </header>
            {openSearchToggle ? <Search setOpenSearchToggle={setOpenSearchToggle} /> : null}
            {openProfile ? <UserProfile setOpenProfile={setOpenProfile} /> : null}
            {openNotification ? <Notification setOpenNotification={setOpenNotification} /> : null}

        </>
    )
}

export default Navbar