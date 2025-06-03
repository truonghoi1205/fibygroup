'use client';

import Link from "next/link";
import Image from "next/image";

const SecondContentSection = () => {
    return (
        <section className="bg-gradient-to-r from-white to-[#bc9a5c] py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Video về chúng tôi</h2>
                <div className="flex justify-center mb-6 md:mb-10">
                    <Image
                        src="/images/divider.png"
                        alt="divider"
                        width={100}
                        height={100}
                        className="w-54 h-10 object-contain"
                    />
                </div>
                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg shadow-xl overflow-hidden">
                    <video
                        autoPlay
                        muted
                        playsInline
                        controls
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/video/demo.mp4" type="video/mp4"/>
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                </div>
                <div className="text-center mt-8">
                    <Link href="/about"
                          className="bg-[#c19a5b] text-white px-6 py-3 rounded-lg hover:bg-[#a5824d] transition-colors">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SecondContentSection;