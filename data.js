import heroimg from "@public/assets/hero.png";

import hightlightimg from "@public/assets/hightlightimg.png";
import sneakershoe from "@public/assets/sneaker.png";

import psale1 from "@public/assets/storybookcover.png";
import psale2 from "@public/assets/novelcover.png";
import psale3 from "@public/assets/textbookcover.png";
import physbook from "@public/assets/physicsbook.png"
import physadv from "@public/assets/physicsadv.png"

import thnovel from "@public/assets/thriller-novel.png"
import students from "@public/assets/flyers/flyer3.png"

import product1 from "@public/assets/storybookcover.png";
import product2 from "@public/assets/novelcover.png";
import product3 from "@public/assets/physicsadv.png"
import product4 from "@public/assets/thriller-novel.png";
import product5 from "@public/assets/textbookcover.png";
import product6 from "@public/assets/physicsbook.png";
import product7 from "@public/assets/storybookcover.png";
import product8 from "@public/assets/textbookcover.png";
import product9 from "@public/assets/novelcover.png";
import product10 from "@public/assets/physicsadv.png";
import product11 from "@public/assets/textbookcover.png";
import product12 from "@public/assets/thriller-novel.png";
import bag1 from "@public/assets/bag1.jpg"
import bag2 from "@public/assets/bag2.jpg"
import bag3 from "@public/assets/bag3.jpg"
import bag4 from "@public/assets/bag4.jpg"
import bag5 from "@public/assets/bag5.jpg"


import facebook from "@public/assets/facebook.svg";
import instagram from "@public/assets/instagram.svg";
import twitter from "@public/assets/twitter.svg";
import youtube from "@public/assets/youtube.svg";
import messenger from "@public/assets/messenger.svg";

import product01 from "@public/assets/tk-images/antiseptic.png"
import product02 from "@public/assets/tk-images/banja_2.jpg"
import product03 from "@public/assets/tk-images/banja_powder.jpg"
import product04 from "@public/assets/tk-images/boom_plus.jpg"
import product05 from "@public/assets/tk-images/brothers.jpg"
import product06 from "@public/assets/tk-images/appy_apple.jpg"
import product07 from "@public/assets/tk-images/fruitop.jpg"
import product08 from "@public/assets/tk-images/hygienix.jpg"
import product09 from "@public/assets/tk-images/mediherb.jpg"
import product010 from "@public/assets/tk-images/monster_pops.jpg"
import product011 from "@public/assets/tk-images/sundance.jpg"



const ImgArray = [
  {
    id: 1,
    attributes: {
      url: "/assets/tk-images/sundance.jpg",
      name: ""
    }
  },
  {
    id: 2,
    attributes: {
      url: "/assets/tk-images/antiseptic.png",
      name: ""
    }
  },
  {
    id: 3,
    attributes: {
      url: "/assets/tk-images/mediherb.jpg",
      name: ""
    }
  },
  {
    id: 4,
    attributes: {
      url: "/assets/tk-images/hygienix.jpg",
      name: ""
    }
  },
]

const heroapi = {
  title: "Top Achievers",
  subtitle: "Are All-Time Learners",
  img: product2,
  btntext: "Explore Books",
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Categories",
  items: [
    {
      id: "0p0x1",
      title: "PAMPHLETS",
      text: "Secondary Level For All Grades.",
      rating: "4.9",
      btn: "Shop Now",
      cover: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "STORY BOOKS",
      text: "Joy Time For Kids",
      rating: "4.5",
      btn: "Shop Now",
      cover: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "NOVELS",
      text: "Thrilling Stories",
      rating: "5+",
      btn: "Shop Now",
      cover: psale2,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "Our Happy Customers",
  title: "Satisfying Our Customers Is Our Priority",
  btn: "Share Comment",
  url: "",
};

const sneaker = {
  heading: "Shop At Your Convinience",
  title: "Order All Your Daily Needs From The Comfort Of Your Home",
  btn: "Show Products",
  url: "/products"
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Think And Grow Rich",
      text: "Napoleon Hill",
      rating: "5+",
      btn: "Buy Now",
      cover: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "SpongeBob",
      text: "Nicolodean Series",
      rating: "5+",
      btn: "Buy Now",
      cover: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Physics",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      cover: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Biology",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      cover: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Chemistry",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      cover: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "All Subjects G-7",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      cover: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "All Subjects G-9",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      cover: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "All Subjects G-9",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      cover: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },

  ],
};


const productCategory = ["Popular", "Detergent", "Home Care", "Personal Care", "Food", "Bisquit", "Beverage"]

const companyCategory = ["Trade Kings", "Big Tree", "Swiss Bake", "Daily Gold", "Yoyo Foods"]

const socialLinks = [
  {
    icon: "/assets/facebook.svg",
    link: "https://www.facebook.com/tradekingsgroup",
  },
  {
    icon: "/assets/messenger.svg",
    link: "https://www.messenger.com/tradekingsgroup",
  },
  {
    icon: "/assets/instagram.svg",
    link: "https://www.instagram.com/tradekingsgroup",
  },
  {
    icon: "/assets/twitter.svg",
    link: "https://www.twitter.com/tradekingsgroup",
  },
  {
    icon: "/assets/youtube.svg",
    link: "https://www.youtube.com/tradekingsgroup",
  },
]

const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "New Products",
        link: "",
      },
      {
        name: "About",
        link: "",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "",
      },
      {
        name: "Suggestions",
        link: "",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Partners",
        link: "",
      },
      {
        name: "Become a Partner",
        link: "",
      },
    ],
  },
];
const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];



const footerAPI = {
  titles: [{ title: "About bookhub" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "bookhub Journal" },
      { link: "Send Us Feeback" },
    ],
  ]
};


export { heroapi, socialLinks, footerAPI, productCategory, companyCategory, sneaker, highlight, toprateslaes, popularsales, ImgArray, footerLinks, socialMedia };
