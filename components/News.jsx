"use client"

import NewsCard from '@components/utils/NewsCard';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';


const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
        1200: { perPage: 3 },
        991: { perPage: 2.3 },
        768: { perPage: 2 },
        500: { perPage: 1.3 },
        425: { perPage: 1 },
    },
};

const News = () => {
    const news = [
        {
            id: 1,
            title: 'The President Visits',
            description: 'The Zambian Republican President supporting the Number One national brand.',
            image: '/assets/tk-images/news1.jpg',
            date: 'May 18, 2023',
        },
        {
            id: 2,
            title: 'Global Handwashing Day',
            description: 'Celebrating hygiene day by washing hands.',
            image: '/assets/tk-images/news2.png',
            date: 'May 17, 2023',
        },
        {
            id: 3,
            title: 'Improving Lives',
            description: 'Trade Kings Group foundation rendering service to our communities.',
            image: '/assets/tk-images/customer4.jpg',
            date: 'May 18, 2023',
        },
        {
            id: 4,
            title: 'Happy Youth Day',
            description: 'Celebrating youths of all over the world.',
            image: '/assets/tk-images/youth1.png',
            date: 'May 17, 2023',
        },
        {
            id: 5,
            title: 'New Product On The Shelves - Vatra Minerals',
            description: 'The most refreshing taste of water.',
            image: '/assets/tk-images/ad1.jpg',
            date: 'May 18, 2023',
        },
        {
            id: 6,
            title: 'Vulnerable Communities Receiving Gifts',
            description: 'Communities receiving gifts from our partners.',
            image: '/assets/tk-images/customer3.jpg',
            date: 'May 17, 2023',
        },
        // Add more news items as needed
    ];

    return (
        <div className="flex flex-wrap justify-center">
            <div className='flex w-full justify-center items-center'>
                <a href="" className="flex items-center justify-center mt-5">
                    <button type='button' className='button-theme  bg-gradient-to-r from-cyan-500 to-blue-500 shadow-slate-900 text-slate-100 py-1.5'>Latest News</button>
                </a>
            </div>
            <div className="mt-7">
                <Splide options={splideOptions}>
                    {news.map((item, i) => (
                        <SplideSlide key={i} className="mb-0.5">
                            <div className="relative  grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                                <NewsCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    date={item.date}
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default News;
