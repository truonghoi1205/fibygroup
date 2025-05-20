'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: '/images/banner-1.jpg',
    },
    {
        id: 2,
        image: '/images/banner-2.jpg',
    },
];

const HeroSection = () => {
    return (
        <section className="relative w-full h-[170px] md:h-[450px]">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={`Banner ${slide.id}`}
                                fill
                                className="object-cover md:object-fill"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSection;
