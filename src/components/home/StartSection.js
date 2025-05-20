'use client';

import React from "react";
import { PiHandshakeLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

const images = [
    "/images/team.jpg",
    "/images/team-1.jpg"
];

const StartSection = () => {
    return (
        <section className="bg-gradient-to-r from-white to-[#bc9a5c]">
            <div className="max-w-7xl flex flex-col md:flex-row items-center gap-6 lg:gap-8 mx-auto py-8 md:py-10 px-4 sm:px-6">
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-md">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{delay: 3000}}
                        loop
                        className="w-full h-full"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]">
                                    <Image
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        fill
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Content - Điều chỉnh typography và spacing */}
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mt-4 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                        <PiHandshakeLight className="text-3xl sm:text-4xl text-[#c19a5b]"/>
                        Fiby Group
                    </h1>

                    <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
                        <p>
                            Với hơn 25 năm kinh nghiệm làm phân phối, chúng tôi hiện là NPP chính thức cho các tập đoàn lớn
                            trong nước và quốc tế về các lĩnh vực kinh doanh hàng tiêu dùng nhanh, dụng cụ thể thao, vật
                            liệu xây dựng... Hệ thống trải dài trên cả nước gồm 6 công ty thành viên và hơn 1,000 cán bộ công
                            nhân viên.
                        </p>
                        <p>
                            Chúng tôi lấy đạo đức kinh doanh và chất lượng sản phẩm đặt lên hàng đầu để phục vụ khách hàng.
                            Tiến Thành là cầu nối tin tưởng giữa nhà sản xuất và khách hàng, góp phần không nhỏ trong việc
                            lưu thông hàng hóa. Doanh thu hàng năm đạt hàng ngàn tỷ đồng, tạo ra hàng ngàn việc làm ổn định và
                            đóng góp đầy đủ nghĩa vụ kinh tế - xã hội với nhà nước.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartSection;