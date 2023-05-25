"use client"

import React, { useState, useEffect } from 'react'
import Order from './Order'


const Payment = ({ shippingAddress, prevStep, setPaymentObj }) => {

  const [visa, setVisa] = useState(false)
  const [airtelForm, setAirtelForm] = useState(false)
  const [mtnForm, setMtnForm] = useState(false)
  const [currentState, setCurrentState] = useState("")

  const [mtnNum, setMtnNum] = useState({ mtnNumber: "" })
  const [airtelNum, setAirtelNum] = useState({ airtelNumber: "" })
  const [visaObj, setVisaObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
  })

  const handleClick = (state) => {
    state === "visa" ? setVisa(true) : setVisa(false)
    state === "airtel" ? setAirtelForm(true) : setAirtelForm(false)
    state === "mtn" ? setMtnForm(true) : setMtnForm(false)

    paymentObject(state)
    setCurrentState(state)
  }

  const paymentObject = (state) => {
    if (state === "visa") {
      setPaymentObj(visaObj)
    }

    if (state === "airtel") {
      setPaymentObj(airtelNum)
    }

    if (state === "mtn") {
      setPaymentObj(mtnNum)
    }

  }

  return (
    <>
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="mx-3 flex flex-col lg:flex-row sm:flex-col-reverse items-start">
          <div className="px-3 w-full lg:pr-10">
            <Order />
          </div>
          <div className="px-3 w-full">
            <div className="flex flex-col justify-start w-full rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
              <div className="w-full flex flex-col md:flex-row lg:flex-row mb-3 justify-start items-center">
                <div className="w-full">
                  <span className="text-gray-600 font-semibold">Contact</span>
                </div>
                <div className="flex-grow justify-start w-full">
                  <span>{`${shippingAddress?.firstName} ${shippingAddress?.lastName}`}</span>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row lg:flex-row justify-start items-center">
                <div className="w-full">
                  <span className="text-gray-600 font-semibold">Address</span>
                </div>
                <div className="flex-grow justify-start w-full">
                  <span>{`${shippingAddress?.address}`}</span>
                </div>
              </div>
            </div>
            <h6 className="font-semibold text-gray-600 mb-2">Choose payment method</h6>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
              <div className="w-full p-3 border-b border-gray-200">
                <div className='flex flex-row items-center justify-between w-full'>
                  <div className='w-10 flex flex-col justify-center items-center'>
                    <img src="/assets/logos/visa.png" className="h-8 w-full object-contain rounded-[5px]" onClick={() => handleClick("visa")} />
                    <div className={`h-1 w-full rounded-[4px] mx-2 ${visa ? "bg-blue-500" : "bg-white"}`}></div>
                  </div>
                  <div className='w-10 flex flex-col justify-center items-center gap-1'>
                    <img src="/assets/logos/airtel.png" className="h-8 w-full object-contain rounded-[5px]" onClick={() => handleClick("airtel")} />
                    <div className={`h-1 w-full rounded-[4px] mx-2 ${airtelForm ? "bg-blue-500" : "bg-white"}`}></div>
                  </div>
                  <div className='w-10 flex flex-col justify-center items-center gap-1'>
                    <img src="/assets/logos/mtn.png" className="h-8 w-full object-contain rounded-[5px]" onClick={() => handleClick("mtn")} />
                    <div className={`h-1 w-full rounded-[4px] mx-2 ${mtnForm ? "bg-blue-500" : "bg-white"}`}></div>
                  </div>

                </div>
                <div className='w-full mt-5'>
                  {visa ? (
                    <VisaForm />
                  ) : null}
                  {airtelForm ? (
                    <>
                      <div className="px-2 w-full pt-10">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Enter airtel mobile</label>
                        <div>
                          <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="077 0r 097" type="text" onChange={(e) => setAirtelNum({ airtelNumber: e.target.value })} />
                        </div>
                      </div>
                    </>) : null}
                  {mtnForm ? (
                    <>
                      <div className="px-2 w-full pt-10">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Enter MTN mobile</label>
                        <div>
                          <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="076 or 096" type="text" onChange={(e) => setMtnNum({ ...mtnNum, mtnNumber: e.target.value })} />
                        </div>
                      </div>
                    </>) : null}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='flex items-center justify-between md:gap-4 md:px-4 px-10 w-full'>
          <button className='w-[40%] py-[4px] md:px-[2px] rounded-[15px] border-none text-[10px] mt-[10px] mr-10 uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out' onClick={prevStep}>
            Back
          </button>
          <button type='submit' className='w-[40%] py-[4px] md:px-[2px] rounded-[15px] border-none text-[10px] mt-[10px] uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] cursor-pointer scale-[1.2] transition-transform duration-[0.5s] ease-in-out ' >
            Pay Now
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="text-center text-gray-400 text-sm">
          <a href="" target="_blank" className="focus:outline-none underline text-gray-400"><i className="mdi mdi-beer-outline"></i>Powered by</a> ActsCloud
        </div>
      </div>
    </>
  );
};

const VisaForm = () => {
  return (
    <>
      <div>
        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
          </div>
        </div>

        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-full">
            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="01">01 - January</option>
                <option value="02">02 - February</option>
                <option value="03">03 - March</option>
                <option value="04">04 - April</option>
                <option value="05">05 - May</option>
                <option value="06">06 - June</option>
                <option value="07">07 - July</option>
                <option value="08">08 - August</option>
                <option value="09">09 - September</option>
                <option value="10">10 - October</option>
                <option value="11">11 - November</option>
                <option value="12">12 - December</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-full">
            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
          <div className="px-2 w-full">
            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Payment;
