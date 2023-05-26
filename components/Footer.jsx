"use client"

import { footerLinks, socialLinks, socialMedia } from "@data.js";
import SocialLink from "./utils/SocialLink";

const Footer = () => (
  <section className={`flex justify-center items-center sm:py-8 py-3 flex-col  bg-gradient-to-r from-cyan-500 to-blue-500 w-full`}>
    <div className={`flex justify-center items-start flex-col mb-4 w-full pl-5`}>
      <div className=" flex flex-col justify-center items-center mr-5 w-full">
        <div className="flex justify-center items-center w-full ml-1">
          <h1 className="text-3xl font-extrabold text-gray-100 sm:text-2xl">
            Trade Kings Group
          </h1>
        </div>

        <p className={`font-normal text-white sm:text-[12px] md:text-[14px] lg:text-[18px] leading-[30.8px] mt-1`}>
          Trade Kings is a leading manufacturing company in Zambia that produces a wide range of consumer goods.
        </p>
        <p className={`font-normal text-white sm:text-[8px] md:text-[12px] lg:text-[14px] leading-[30.8px] mt-1`} >Plot No. 29381, Nampundwe Road, Light Industrial Area, Lusaka Zambia</p>
      </div >

      <div className="w-full flex flex-row justify-center flex-wrap md:mt-0 mt-2 px-4 ">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col sm:my-0 my-4 mx-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal  text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div >

    <div className="w-full flex justify-between items-center flex-col-reverse pt-3 ">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 ActsCloud Inc. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 mb-6">
        {socialLinks?.map((val, i) => (
          <SocialLink
            key={i}
            icon={val.icon}
            link={val.link}
          />
        ))}
      </div>
    </div>
  </section >
);

export default Footer;
