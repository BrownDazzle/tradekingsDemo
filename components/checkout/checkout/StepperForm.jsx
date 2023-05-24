"use client"
import { useState } from 'react';

import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Country, State } from "country-state-city";
import Payment from './Payment';
import Confirmation from './Confirmation';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalAmount } from '@app/globalRedux/features/CartSlice';
import { setClearCartItems } from '@app/globalRedux/features/CartSlice';


const StepperForm = () => {
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch()

    const [step, setStep] = useState(1);
    const [okResponse, setOkResponse] = useState(false);
    const [paymentObj, setPaymentObj] = useState({})
    const [shippingAddress, setShippingAdress] = useState({
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingAdress((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Order = {
            userName: [shippingAddress?.firstName, shippingAddress?.lastName].join(" "),
            email: shippingAddress?.email,
            products: cartItems?.map(({ _id, cartQuantity }) => ({
                _id,
                cartQuantity,
            })),
            amount: totalAmount,
            address: shippingAddress?.address,
            paymentMethod: paymentObj
        };

        try {
            const response = await fetch("/api/payment", {
                method: "POST",
                body: JSON.stringify(Order),
            });

            if (response.ok) {
                dispatch(setClearCartItems())
                setOkResponse(true)
                //router.push("/");
                // Reset form data

                setShippingAdress({
                    email: "",
                    phoneNumber: "",
                    firstName: "",
                    lastName: "",
                    country: "",
                    address: "",
                    city: "",
                    zipCode: "",
                });

                nextStep()
            }
            // Handle form submission logic here


        } catch (error) {
            console.log(error);
        } finally {

            //setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow w-full">
            {step === 1 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4 mt-10">Step 1: Adress Information</h2>
                    <form onSubmit={nextStep}>
                        <h5 className="text-[18px] font-[500]">Shipping Address</h5>
                        <br />
                        <div className="w-full flex flex-row md:flex-col pb-3">
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">First Name</label>
                                <input type="text" required className={`w-full focus:outline-none focus:ring focus:ring-cyan-700 border p-1 rounded-[5px] !w-[95%]`} value={shippingAddress.firstName} id="firstName"
                                    name="firstName" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Last Name</label>
                                <input type="text" required className={`w-full focus:outline-none focus:ring focus:ring-cyan-700 border p-1 rounded-[5px] !w-[95%]`} value={shippingAddress.lastName} id="lastName"
                                    name="lastName" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className="w-full flex flex-row md:flex-col pb-3">
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Phone Number</label>
                                <input
                                    type="number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    required
                                    className={`w-full focus:outline-none focus:ring focus:ring-cyan-700 border p-1 rounded-[5px] !w-[95%]`}
                                    value={shippingAddress.phoneNumber}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Email Address</label>
                                <input type="email" id="email"
                                    name="email" required className={`w-full focus:outline-none focus:ring focus:ring-cyan-700 border p-1 rounded-[5px] !w-[95%]`} value={shippingAddress?.email} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>

                        <div className="w-full flex flex-row md:flex-col pb-3">
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Country</label>
                                <select
                                    className="w-[95%] focus:outline-none focus:ring focus:ring-cyan-700 border h-[40px] rounded-[5px]"
                                    value={shippingAddress.country}
                                    id="country"
                                    name="country"
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option className="block pb-2" value="">
                                        Choose your country
                                    </option>
                                    {Country &&
                                        Country.getAllCountries().map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Country</label>
                                <select id="city"
                                    name="city" className="w-[95%] focus:outline-none focus:ring focus:ring-cyan-700 border h-[40px] rounded-[5px]" onChange={(e) => handleChange(e)}>
                                    <option className="block pb-2" value={shippingAddress.city} >
                                        Choose your City
                                    </option>
                                    {State &&
                                        State.getStatesOfCountry(shippingAddress?.country).map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className="w-full flex flex-row md:flex-col pb-3">
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Address</label>
                                <input
                                    type="address"
                                    id="address"
                                    name="address"
                                    required
                                    className={`w-full focus:outline-none focus:ring focus:ring-cyan-700 border p-1 rounded-[5px] !w-[95%]`}
                                    value={shippingAddress.address}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="w-[50%] md:w-full">
                                <label className="block pb-2">Zip Code</label>
                                <input type="number" id="zipCode"
                                    name="zipCode" required className={`w-full focus:outline-none focus:ring focus:ring-cyan-700 border p-1 rounded-[5px] !w-[95%]`} value={shippingAddress.zipCode} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className='w-full mt-10 flex items-center justify-center px-10'>
                            <button type="submit" className='w-[90%] py-[4px] md:px-[2px] rounded-[15px] focus:outline-none focus:ring focus:ring-cyan-700 border-none text-[10px] mt-[10px] mr-10 uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out' >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4 mt-10">Step 2: Payment Information</h2>
                    <form onSubmit={handleSubmit}>
                        <Payment prevStep={prevStep} shippingAddress={shippingAddress} setPaymentObj={setPaymentObj} />
                    </form>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4 mt-10">Step 3: Success</h2>
                    <Confirmation okResponse={okResponse} />
                </div>
            )}
        </div>
    );
};

export default StepperForm;
