import Contact from "@/components/contact/Contact";
import Link from "next/link";

export const metadata = {
    title: "Liên hệ | Fiby Group",
    description: "Liên hệ với Fiby Group để được tư vấn và hỗ trợ về dịch vụ thiết kế website, phát triển phần mềm và giải pháp công nghệ.",
    keywords: "liên hệ, liên hệ fiby, fiby group, thiết kế website, dịch vụ công nghệ, hỗ trợ khách hàng",
    robots: "index, follow",
    openGraph: {
        title: "Liên hệ | Fiby Group",
        description: "Fiby Group luôn sẵn sàng hỗ trợ bạn về các dịch vụ công nghệ, phát triển phần mềm và thiết kế website.",
        url: "https://www.fibygroup.vn/contact",
        type: "website",
        siteName: "Fiby Group",
    },
    alternates: {
        canonical: "https://www.fibygroup.vn/contact",
    },
};

export default function ContactPage() {
    return (
        <main>
            <nav className="text-sm text-gray-600 max-w-7xl mx-auto px-4 mt-6">
                <ol className="flex flex-wrap items-center space-x-1">
                    <li><Link href="/" className="text-gray-400 hover:text-[#60481e]">Trang chủ</Link> /</li>
                    <li className="font-medium text-gray-800">Liên hệ</li>
                </ol>
            </nav>
            <Contact/>
        </main>
    );
}
