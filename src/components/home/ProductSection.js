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
            name: 'NƯỚC GIẶT FIBY',
            scent: "Hương comfort",
            image: '/images/san-pham9.jpg',
            capacity: "5L",
            description: 'Chăm sóc vài với công thức đột phá, FIBY mang đến trải nghiệm giặt giũ sạch sẽ và hương thơm ngàn hoa dịu dàng. Với sự kết hợp của các loại hương từ thiên nhiên như Comfort, Cá Ngựa và Vanilla, FIBY không chỉ là một sản phẩm nước giặt mà còn là một hành trình cảm xúc. Để mỗi lần giặt đều mang lại một sự tươi mới và thư giãn!'
        },
        {
            id: 8,
            name: 'NƯỚC GIẶT FIBY',
            scent: "Hương comfort",
            image: '/images/san-pham16.jpg',
            capacity: "3.8L",
            description: 'Chăm sóc vài với công thức đột phá, FIBY mang đến trải nghiệm giặt giũ sạch sẽ và hương thơm ngàn hoa dịu dàng. Với sự kết hợp của các loại hương từ thiên nhiên như Comfort, Cá Ngựa và Vanilla, FIBY không chỉ là một sản phẩm nước giặt mà còn là một hành trình cảm xúc. Để mỗi lần giặt đều mang lại một sự tươi mới và thư giãn!'
        },
        {
            id: 2,
            name: 'NƯỚC GIẶT FIBY',
            scent: "Hương vanilla",
            image: '/images/san-pham11.jpg',
            capacity: "10L",
            description: 'Chăm sóc vài với công thức đột phá, FIBY mang đến trải nghiệm giặt giũ sạch sẽ và hương thơm ngàn hoa dịu dàng. Với sự kết hợp của các loại hương từ thiên nhiên như Comfort, Cá Ngựa và Vanilla, FIBY không chỉ là một sản phẩm nước giặt mà còn là một hành trình cảm xúc. Để mỗi lần giặt đều mang lại một sự tươi mới và thư giãn!'
        },
        {
            id: 6,
            name: 'NƯỚC GIẶT FIBY',
            scent: "Hương vanilla",
            image: '/images/san-pham12.jpg',
            capacity: "5L",
            description: 'Chăm sóc vài với công thức đột phá, FIBY mang đến trải nghiệm giặt giũ sạch sẽ và hương thơm ngàn hoa dịu dàng. Với sự kết hợp của các loại hương từ thiên nhiên như Comfort, Cá Ngựa và Vanilla, FIBY không chỉ là một sản phẩm nước giặt mà còn là một hành trình cảm xúc. Để mỗi lần giặt đều mang lại một sự tươi mới và thư giãn!'
        },
        {
            id: 7,
            name: 'NƯỚC GIẶT FIBY',
            scent: "Hương vanilla",
            image: '/images/san-pham14.jpg',
            capacity: "3.8L",
            description: 'Chăm sóc vài với công thức đột phá, FIBY mang đến trải nghiệm giặt giũ sạch sẽ và hương thơm ngàn hoa dịu dàng. Với sự kết hợp của các loại hương từ thiên nhiên như Comfort, Cá Ngựa và Vanilla, FIBY không chỉ là một sản phẩm nước giặt mà còn là một hành trình cảm xúc. Để mỗi lần giặt đều mang lại một sự tươi mới và thư giãn!'
        },
        {
            id: 3,
            name: 'NƯỚC GIẶT FIBY',
            scent: "Hương cá ngựa",
            image: '/images/san-pham15.jpg',
            capacity: "5L",
            description: 'Chăm sóc vài với công thức đột phá, FIBY mang đến trải nghiệm giặt giũ sạch sẽ và hương thơm ngàn hoa dịu dàng. Với sự kết hợp của các loại hương từ thiên nhiên như Comfort, Cá Ngựa và Vanilla, FIBY không chỉ là một sản phẩm nước giặt mà còn là một hành trình cảm xúc. Để mỗi lần giặt đều mang lại một sự tươi mới và thư giãn!'
        },
        {
            id: 4,
            name: 'NƯỚC RỬA CHÉN',
            scent: "Hương chanh",
            image: '/images/san-pham7.jpg',
            capacity: "10L",
            description: 'Nước rửa chén chanh  FIBY làm sạch dầu mỡ cứng đầu, dịu nhẹ với da tay nhờ công thức tiên tiến. Kết hợp công nghệ nano bạc kháng khuẩn và hương chanh thơm mát, FIBY giúp chén đĩa sạch bong, an toàn và mang đến trải nghiệm rửa chén thư thái cho cả gia đình!'
        },
        {
            id: 5,
            name: 'NƯỚC RỬA CHÉN',
            scent: "Hương chanh",
            image: '/images/san-pham18.jpg',
            capacity: "5L",
            description: 'Nước rửa chén chanh  FIBY làm sạch dầu mỡ cứng đầu, dịu nhẹ với da tay nhờ công thức tiên tiến. Kết hợp công nghệ nano bạc kháng khuẩn và hương chanh thơm mát, FIBY giúp chén đĩa sạch bong, an toàn và mang đến trải nghiệm rửa chén thư thái cho cả gia đình!'
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
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="mb-12">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ">
                                <div className="relative aspect-[3/3.5] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        priority={product.id <= 4}
                                    />
                                </div>
                                <div className="p-2 md:p-3 flex-grow ">
                                    <h3 className="text-sm md:text-base font-semibold line-clamp-2">{product.name}</h3>
                                    <h3 className="text-xs md:text-sm font-semibold line-clamp-2 ">{product.scent}</h3>
                                    <h3 className="text-[12px] md:text-sm my-1">Dung tích: {product?.capacity || "â"}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-3">{product.description}</p>
                                </div>
                            </div>
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