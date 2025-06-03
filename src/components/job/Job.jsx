import Link from "next/link";

export default function Job() {
    const jobs = [
        {
            id: 1,
            title: "Tuyển dụng Nhân viên Bán hàng – Tháng 01/2025",
            slug: "tuyen-dung-nhan-vien-ban-hang",
            image: "/images/job1.jpg",
            description:
                "Fiby Group tìm kiếm những ứng viên nhiệt huyết, đam mê kinh doanh, có kỹ năng giao tiếp và tư vấn khách hàng. Công việc bao gồm tìm kiếm khách hàng tiềm năng, tư vấn các mặt hàng tiêu dùng như nước rửa chén, nước giặt,... , chăm sóc và duy trì mối quan hệ với khách hàng. Thu nhập hấp dẫn: lương cơ bản + hoa hồng cao + thưởng hiệu suất. Môi trường làm việc năng động, cơ hội thăng tiến rõ ràng.",
        },
        {
            id: 2,
            title: "Tuyển dụng Nhân viên Marketing – Tháng 06/2025",
            slug: "tuyen-dung-nhan-vien-marketing",
            image: "/images/job2.jpg",
            description:
                "Chúng tôi đang tìm kiếm nhân viên marketing có kinh nghiệm triển khai các chiến dịch truyền thông và xây dựng thương hiệu. Yêu cầu: thành thạo social media, chạy quảng cáo Facebook/Google, biết phân tích dữ liệu marketing. Ưu tiên ứng viên từng làm trong lĩnh vực marketing. Mức lương cạnh tranh, cơ hội được đào tạo và phát triển kỹ năng chuyên môn.",
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 pt-2 pb-8 md:pt-4 md:pb-12">
            <h1 className="text-3xl md:text-4xl font-bold  text-center mb-8">Tuyển Dụng</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {jobs.map((job) => (
                    <div key={job.id}
                         className=" bg-white rounded-lg transition">
                        <img
                            src={job.image}
                            alt={job.title}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h2 className="p-4 text-2xl text-[#bc9a5c] mb-2 uppercase">{job.title}</h2>
                        <p className="p-4 pt-0 text-gray-600 mb-4">{job.description}</p>
                        <div className="px-4 pb-4">
                            <Link href={`/job/${job.slug}`} className="text-[#bc9a5c] underline hover:text-black">Xem
                                chi
                                tiết</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
