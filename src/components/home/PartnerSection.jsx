'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const PartnerSection = () => {
    const partners = [
        { id: 1, logo: '/images/aba.png', name: 'aba' },
        { id: 2, logo: '/images/ariel.png', name: 'ariel' },
        { id: 3, logo: '/images/comfort.png', name: 'comfort' },
        { id: 4, logo: '/images/lix.png', name: 'lix' },
        { id: 5, logo: '/images/myhao.png', name: 'myhao' },
        { id: 6, logo: '/images/netco.png', name: 'netco' },
        { id: 7, logo: '/images/omo.png', name: 'omo' },
        { id: 8, logo: '/images/sunlight.png', name: 'sunlight' },
        { id: 9, logo: '/images/tipe.png', name: 'tipe' },
    ];

    return (
        <section className="max-w-7xl mx-auto w-full py-6 md:py-12 px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-14">
                Đối tác chiến lược
            </h2>
            <div className="relative bg-white shadow-md rounded-xl py-6 px-4">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    freeMode={true}
                    speed={3000}
                    slidesPerView={4}
                    spaceBetween={40}
                    breakpoints={{
                        640: { slidesPerView: 6 },
                        768: { slidesPerView: 7 },
                        1024: { slidesPerView: 8 },
                    }}
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <div className="flex items-center justify-center w-18 h-14 md:w-24 md:h-24 hover:scale-90 transition duration-300">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-full object-contain rounded-md"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PartnerSection;
