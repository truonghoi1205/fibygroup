export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-16 space-y-20">
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
                <p className="text-gray-600 text-lg">
                    Chúng tôi là công ty chuyên sản xuất và phân phối các sản phẩm tẩy rửa sinh hoạt như nước giặt, nước rửa chén, nước lau sàn và nhiều sản phẩm khác phục vụ cuộc sống hàng ngày. Sứ mệnh của chúng tôi là mang đến giải pháp làm sạch hiệu quả, an toàn và thân thiện với môi trường.
                </p>
            </section>
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="/images/team-1.jpg"
                    alt="Đội ngũ công ty"
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Chúng tôi là ai?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Được thành lập từ năm 2020, chúng tôi đã xây dựng được thương hiệu uy tín trong lĩnh vực hóa phẩm tiêu dùng. Với đội ngũ kỹ sư, chuyên gia hóa học giàu kinh nghiệm, chúng tôi luôn không ngừng cải tiến công thức và chất lượng sản phẩm để đáp ứng nhu cầu ngày càng cao của người tiêu dùng Việt.
                    </p>
                </div>
            </section>
            <section className="grid md:grid-cols-2 gap-10">
                <div className="bg-[#fdf7ec] p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Tầm nhìn</h3>
                    <p className="text-gray-700">
                        Trở thành thương hiệu quốc dân về các sản phẩm tẩy rửa gia dụng, dẫn đầu về chất lượng và độ tin cậy tại Việt Nam và vươn ra thị trường quốc tế.
                    </p>
                </div>
                <div className="bg-[#fdf7ec] p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Sứ mệnh</h3>
                    <p className="text-gray-700">
                        Mang đến những giải pháp làm sạch toàn diện, hiệu quả cao, an toàn cho sức khỏe và thân thiện với môi trường, đồng thời luôn đặt sự hài lòng của khách hàng làm kim chỉ nam phát triển.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-center">Lĩnh vực hoạt động</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Nước giặt", desc: "Sạch sâu, khử mùi hiệu quả, dịu nhẹ với da tay và an toàn cho quần áo trẻ em." },
                        { title: "Nước rửa chén", desc: "Tẩy sạch dầu mỡ, không gây kích ứng, chiết xuất thiên nhiên." },
                        { title: "Nước lau sàn", desc: "Kháng khuẩn, khử mùi, đem lại không gian sống sạch sẽ, thơm mát." },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 border rounded-lg shadow-md text-center">
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-center">Giá trị cốt lõi</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Chất lượng", desc: "Chúng tôi cam kết luôn đặt chất lượng sản phẩm lên hàng đầu." },
                        { title: "Trách nhiệm", desc: "Bảo vệ sức khỏe người tiêu dùng và môi trường sống là ưu tiên số một." },
                        { title: "Đổi mới", desc: "Luôn sáng tạo trong công nghệ, cải tiến không ngừng." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 border rounded-lg shadow-md text-center">
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center mt-20">
                <h2 className="text-3xl font-bold mb-4">Bạn đã sẵn sàng hợp tác cùng chúng tôi?</h2>
                <p className="text-gray-600 mb-6">Hãy liên hệ ngay để nhận tư vấn và bảng báo giá chi tiết.</p>
                <a
                    href="/contact"
                    className="inline-block bg-[#bc9a5c] hover:bg-[#a88545] text-white py-3 px-6 rounded-md transition"
                >
                    Liên hệ ngay
                </a>
            </section>
        </div>
    );
}
