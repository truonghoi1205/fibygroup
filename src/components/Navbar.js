'use client'

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-1 bg-white shadow-sm relative">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/images/logo.png" alt="Company Logo" width={60} height={30} className="mr-10" />
                </Link>
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link href="/" className="font-bold hover:text-[#60481e] transition-colors uppercase">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[#60481e] font-bold transition-colors uppercase">
                            Giới thiệu
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="/product" className="hover:text-[#60481e] flex items-center gap-2 font-bold transition-colors uppercase">
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link href="/job" className="hover:text-[#60481e] font-bold transition-colors uppercase">
                            Tuyển dụng
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-[#60481e] font-bold transition-colors uppercase">
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center space-x-6">
                <Link href="tel:0588585838"
                      className="hidden md:flex items-center hover:text-[#60481e] transition-colors">
                    <FaPhoneAlt className="mr-2"/>
                    0588 585 838
                </Link>
                <div className="hidden md:flex items-center space-x-2 border-l pl-4">
                    <button className={`px-1 py-1 text-sm rounded-md font-bold transition duration-200`}>
                        <Image src="/images/flag-for-vn.svg" alt="flag-vn" width={20} height={15}/>
                    </button>
                    <button className={`px-1 py-1 text-sm rounded-md font-bold transition duration-200`}>
                        <Image src="/images/flag-for-uk.svg" alt="flag-uk" width={20} height={15} />
                    </button>
                </div>

                <button onClick={toggleMenu} className="md:hidden text-2xl">
                    <RxHamburgerMenu />
                </button>
            </div>

            <div className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <p className="font-bold text-xl">MENU</p>
                    <button onClick={closeMenu} className="text-2xl ">
                        <IoClose />
                    </button>
                </div>
                <ul className="flex flex-col space-y-3 p-6">
                    <li><Link href="/" onClick={closeMenu} className="uppercase font-bold">Trang chủ</Link></li>
                    <li><Link href="/about" onClick={closeMenu} className="uppercase font-bold">Giới thiệu</Link></li>
                    <li>
                        <Link href="/product" onClick={closeMenu} className="uppercase font-bold">Sản phẩm</Link>
                    </li>
                    <li><Link href="/job" onClick={closeMenu} className="uppercase font-bold">Tuyển dụng</Link></li>
                    <li><Link href="/contact" onClick={closeMenu} className="uppercase font-bold">Liên hệ</Link></li>
                    <li className="flex items-center">
                        <FaPhoneAlt className="mr-2" />
                        <Link href="tel:0588585838">
                            0588 585 838
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
