import Job2 from "@/components/job/Job2";

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
        <main className="bg-gray-50">
            <Job2/>
        </main>
    );
}
