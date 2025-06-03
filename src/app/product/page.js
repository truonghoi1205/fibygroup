import Product from "@/components/product/Product";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

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
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Sản phẩm" },
    ];
    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <Product/>
        </main>
    );
}
