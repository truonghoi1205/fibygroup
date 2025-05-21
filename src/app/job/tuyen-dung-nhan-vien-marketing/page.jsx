import Job2 from "@/components/job/Job2";
import Link from "next/link";

export const metadata = {
    title: "Tuyển dụng nhân viên marketing | Fiby Group",
    description: "Gia nhập Fiby Group và cùng chúng tôi mang đến các sản phẩm tẩy rửa chất lượng cao như nước giặt, nước rửa chén, nước lau sàn. Môi trường làm việc chuyên nghiệp, năng động và nhiều cơ hội phát triển.",
    keywords: "tuyển dụng fiby, tuyển nhân viên marketing, việc làm tại fiby",
    robots: "index, follow",
    openGraph: {
        title: "Tuyển dụng nhân viên bán hàng | Fiby Group",
        description: "Cơ hội làm việc tại Fiby Group – nơi bạn được phát triển bản thân và làm việc trong ngành hàng tiêu dùng nhanh.",
        url: "https://www.fibygroup.vn/job/tuyen-dung-nhan-vien-marketing",
        type: "website",
        siteName: "Fiby Group",
    },
    alternates: {
        canonical: "https://www.fibygroup.vn/job/tuyen-dung-nhan-vien-marketing",
    },
};

export default function Job2Page() {
    return (
        <main>
            <nav className="text-sm text-gray-600 max-w-7xl mx-auto px-4 mt-6">
                <ol className="flex flex-wrap items-center space-x-1">
                    <li><Link href="/" className="text-gray-400 hover:text-[#60481e]">Trang chủ</Link> /</li>
                    <li><Link href="/job" className="text-gray-400 hover:text-[#60481e]">Tuyển dụng</Link> /</li>
                    <li className="font-medium text-gray-800">Tuyển dụng nhân viên marketing</li>
                </ol>
            </nav>
            <Job2/>
        </main>
    );
}
