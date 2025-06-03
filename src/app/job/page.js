import Job from "@/components/job/Job";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Tuyển dụng | Fiby Group",
    description: "Gia nhập Fiby Group và cùng chúng tôi mang đến các sản phẩm tẩy rửa chất lượng cao như nước giặt, nước rửa chén, nước lau sàn. Môi trường làm việc chuyên nghiệp, năng động và nhiều cơ hội phát triển.",
    keywords: "tuyển dụng fiby, việc làm tẩy rửa, tuyển nhân viên bán hàng, tuyển dụng sản xuất, việc làm tại fiby",
    robots: "index, follow",
    openGraph: {
        title: "Tuyển dụng | Fiby Group",
        description: "Cơ hội nghề nghiệp tại Fiby Group – nơi bạn được phát triển bản thân và làm việc trong ngành hàng tiêu dùng nhanh.",
        url: "https://www.fibygroup.vn/job",
        type: "website",
        siteName: "Fiby Group",
    },
    alternates: {
        canonical: "https://www.fibygroup.vn/job",
    },
};


export default function JobPage() {
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Tuyển dụng" },
    ];
    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <Job/>
        </main>
    );
}
