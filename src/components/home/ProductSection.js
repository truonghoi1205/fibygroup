'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

const ProductSection = () => {
    const products = [
        {
            id: 1,
            name: 'Nước rửa chén fiby',
            image: '/images/san-pham7.jpg',
            description: 'Mô tả ngắn cho sản phẩm 1'
        },
        {
            id: 2,
            name: 'Nước giặt fiby (hương comfort)',
            image: '/images/san-pham9.jpg',
            description: 'Mô tả ngắn cho sản phẩm 2'
        },
        {
            id: 3,
            name: 'Sản phẩm 3',
            image: '/images/san-pham11.jpg',
            description: 'Mô tả ngắn cho sản phẩm 3'
        },
        {
            id: 4,
            name: 'Sản phẩm 4',
            image: '/images/san-pham12.jpg',
            description: 'Mô tả ngắn cho sản phẩm 4'
        },
        {
            id: 5,
            name: 'Sản phẩm 5',
            image: '/images/san-pham14.jpg',
            description: 'Mô tả ngắn cho sản phẩm 5'
        },
        {
            id: 6,
            name: 'Sản phẩm 6',
            image: '/images/san-pham15.jpg',
            description: 'Mô tả ngắn cho sản phẩm 6'
        },
        {
            id: 7,
            name: 'Sản phẩm 7',
            image: '/images/san-pham16.jpg',
            description: 'Mô tả ngắn cho sản phẩm 7'
        },
        {
            id: 8,
            name: 'Sản phẩm 8',
            image: '/images/san-pham18.jpg',
            description: 'Mô tả ngắn cho sản phẩm 8'
        },

    ];

    return (
        <section className="max-w-7xl mx-auto w-full py-6 md:py-12 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 md:mb-14">Sản phẩm nổi bật</h2>
            <div className="relative px-2">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={2}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        475: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24
                        },
                    }}
                    className="pb-12"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col mx-1"> {/* Thêm margin ngang */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        priority={product.id <= 4}
                                    />
                                </div>
                                <div className="p-3 sm:p-4 flex-grow">
                                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-3">{product.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-button-prev !text-[#c19a5b] !left-0 scale-70"></div>
                    <div className="swiper-button-next !text-[#c19a5b] !right-0 scale-70"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default ProductSection;