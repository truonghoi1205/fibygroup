'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import products from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const ProductSection = () => {

    return (
        <section className="max-w-7xl mx-auto w-full py-6 md:py-12 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Sản phẩm nổi
                bật</h2>
            <div className="flex justify-center mb-6 sm:mb-10 md:mb-14">
                <Image
                    src="/images/divider.png"
                    alt="divider"
                    width={100}
                    height={100}
                    className="w-54 h-10 object-contain"
                />
            </div>
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
                        475: {slidesPerView: 2},
                        640: {slidesPerView: 2},
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24
                        },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="mb-12">
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev -translate-y-1/2 !text-black !left-0 scale-80"></div>
                    <div className="swiper-button-next -translate-y-1/2 !text-black !right-0 scale-80"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default ProductSection;