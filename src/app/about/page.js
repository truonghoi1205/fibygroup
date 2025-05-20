import About from '@/components/about/About';

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
        <main className="bg-gray-50">
            <About/>
        </main>
    );
}
