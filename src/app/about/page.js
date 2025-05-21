import About from '@/components/about/About';
import Link from "next/link";

export const metadata = {
    title: "Giới thiệu | Fiby Group",
    description: "Fiby Group là công ty chuyên cung cấp các sản phẩm tẩy rửa như nước giặt, nước rửa chén, nước lau sàn với chất lượng cao, an toàn và thân thiện với môi trường.",
    keywords: "giới thiệu fiby, công ty tẩy rửa, nước giặt, nước lau sàn, nước rửa chén, sản phẩm vệ sinh",
    robots: "index, follow",
    openGraph: {
        title: "Giới thiệu | Fiby Group",
        description: "Tìm hiểu về Fiby Group - đơn vị chuyên sản xuất và phân phối các sản phẩm tẩy rửa gia dụng chất lượng cao.",
        url: "https://www.fibygroup.vn/about",
        type: "website",
        siteName: "Fiby Group",
    },
    alternates: {
        canonical: "https://www.fibygroup.vn/about",
    },
};

export default function AboutPage() {
    return (
        <main>
            <nav className="text-sm text-gray-600 max-w-7xl mx-auto px-4 mt-6">
                <ol className="flex flex-wrap items-center space-x-1">
                    <li><Link href="/" className="text-gray-400 hover:text-[#60481e]">Trang chủ</Link> /</li>
                    <li className="font-medium text-gray-800">Giới thiệu</li>
                </ol>
            </nav>
            <About/>
        </main>
    );
}
