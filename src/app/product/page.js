import Product from "@/components/product/Product";
import Link from "next/link";

export const metadata = {
    title: "Tất cả sản phẩm | Fiby Group",
    description: "Khám phá các sản phẩm tẩy rửa chất lượng cao từ Fiby Group như nước giặt, nước rửa chén, nước lau sàn và nhiều sản phẩm gia dụng khác.",
    keywords: "sản phẩm fiby, nước giặt, nước rửa chén, nước lau sàn, hàng tiêu dùng, sản phẩm tẩy rửa",
    robots: "index, follow",
    openGraph: {
        title: "Tất cả sản phẩm | Fiby Group",
        description: "Khám phá danh mục sản phẩm chất lượng của Fiby Group – Đáp ứng nhu cầu làm sạch và chăm sóc gia đình bạn.",
        url: "https://www.fibygroup.vn/product",
        type: "website",
        siteName: "Fiby Group",
    },
    alternates: {
        canonical: "https://www.fibygroup.vn/product",
    },
};

export default function ProductPage() {
    return (
        <main>
            <nav className="text-sm text-gray-600 max-w-7xl mx-auto px-4 mt-6">
                <ol className="flex flex-wrap items-center space-x-1">
                    <li><Link href="/" className="text-gray-400 hover:text-[#60481e]">Trang chủ</Link> /</li>
                    <li className="font-medium text-gray-800">Sản phẩm</li>
                </ol>
            </nav>
            <Product/>
        </main>
    );
}
