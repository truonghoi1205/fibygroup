import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" py-8 px-6 md:px-20 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
                <div>
                    <Link href="/">
                        <Image src="/images/logo.png" alt="Company Logo" width={150} height={50}/>
                    </Link>
                    <p className="text-sm mt-2">
                        Mang đến trải nghiệm mua sắm tuyệt vời cho bạn.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Về chúng tôi</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover: transition">Trang chủ</Link></li>
                        <li><Link href="/about" className="hover: transition">Giới thiệu</Link></li>
                        <li><Link href="/job" className="hover: transition">Tuyển dụng</Link></li>
                        <li><Link href="/contact" className="hover: transition">Liên hệ</Link></li>
                        <li><Link href="" className="hover: transition">Chính sách bảo mật</Link></li>
                        <li><Link href="" className="hover: transition">Chính sách nội dung</Link></li>
                        <li><Link href="" className="hover: transition">Giấy phép kinh doanh</Link></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-lg font-semibold mb-2">Danh mục</h3>
                    <ul className="space-y-2">
                        <li><Link href="/product/#" className="hover: transition">Nước rửa chén</Link></li>
                        <li><Link href="/product/#" className="hover: transition">Nước lau sàn</Link></li>
                        <li><Link href="/product/#" className="hover: transition">Nước giặt</Link></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className="text-lg font-semibold my-2">Tìm hiểu thêm</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products/#" className="hover: transition">Khuyến mãi hot</Link></li>
                            <li><Link href="/about" className="hover: transition">Dịch vụ</Link></li>
                            <li><Link href="/job" className="hover: transition">Tin tức</Link></li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold  mb-2">Kết nối với chúng tôi</h3>
                        <div className="flex gap-3">
                            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src="/images/facebook-color-svgrepo-com.svg" alt="" className="w-7"/>
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img src="/images/zalo-seeklogo.svg" alt="" className="w-7"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-sm">
                <p>© Công Ty <span className="font-bold">TNHH TM XNK VIỆT HOÀNG</span></p>
                <p>Địa chỉ: Số nhà 14, Đường Phạm Ngũ Lão, Phường Ka Long, Thành phố Móng Cái, Tỉnh Quảng Ninh, Việt
                    Nam</p>
                <div className="flex gap-2 flex-wrap text-sm">
                    <Link href="tel:0588585838" className="flex items-center">
                        Điện thoại: 0588 585 838
                    </Link>
                    <span>•</span>
                    <Link
                        href="mailto:fibygroup@gmail.com"
                        className="flex items-center"
                    >
                        Email: fibygroup@gmail.com
                    </Link>
                </div>

            </div>
        </footer>
    );
}
