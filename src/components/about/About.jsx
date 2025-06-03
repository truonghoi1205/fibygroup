import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-6xl mx-auto space-y-12 pt-4 pb-12 md:pt-8 md:pb-16 px-4">
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#60481e]">Về Fiby Group</h1>
                <div className="flex justify-center my-2">
                    <Image
                        src="/images/divider.png"
                        alt="divider"
                        width={120}
                        height={20}
                        className="w-32 sm:w-40 h-5 sm:h-6 object-contain"
                    />
                </div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    <strong>Fiby Group</strong> là công ty hàng đầu trong lĩnh vực sản xuất và phân phối các sản phẩm
                    tẩy rửa sinh hoạt như nước giặt, nước xả vải, nước rửa chén và các sản phẩm làm sạch khác. Chúng tôi cam kết
                    mang đến những giải pháp làm sạch an toàn, hiệu quả và thân thiện với môi trường, góp phần nâng cao
                    chất lượng cuộc sống cho mọi gia đình Việt.
                </p>
            </section>

            <section className="grid bg-white rounded-xl p-4 sm:p-6 gap-6 md:grid-cols-2 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#60481e]">Fiby Group là ai?</h2>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        Được thành lập từ năm 2010, Fiby Group đã nhanh chóng khẳng định vị thế là một trong những
                        thương hiệu uy tín hàng đầu trong ngành hóa phẩm tiêu dùng tại Việt Nam. Với đội ngũ chuyên gia
                        giàu kinh nghiệm và hệ thống nhà máy sản xuất hiện đại, chúng tôi không ngừng nghiên cứu và phát
                        triển các dòng sản phẩm tẩy rửa chất lượng cao.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        Chúng tôi có hơn 25 năm kinh nghiệm trong hoạt động phân phối và là đối tác của nhiều tập đoàn lớn.
                        Mạng lưới phân phối rộng khắp với 6 công ty thành viên và hơn 1.000 nhân sự trên toàn quốc.
                    </p>
                </div>
                <Image
                    src="/images/team.jpg"
                    alt="Đội ngũ Fiby Group"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                />
            </section>

            <section className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#60481e]">Viễn cảnh</h2>
                <div className="flex justify-center my-2">
                    <Image
                        src="/images/divider.png"
                        alt="divider"
                        width={120}
                        height={20}
                        className="w-32 sm:w-40 h-5 sm:h-6 object-contain"
                    />
                </div>
                <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                    <strong>FIBY GROUP</strong> - Trở thành NPP chuyên nghiệp và được ưa chuộng nhất trong khu vực,
                    bằng việc xây dựng đội ngũ nhân viên đạt chuẩn để mang lại sự hài lòng cho khách hàng.
                </p>
            </section>

            <section>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#60481e] text-center">Hành trình phát triển</h2>
                <div className="flex justify-center my-2">
                    <Image
                        src="/images/divider.png"
                        alt="divider"
                        width={120}
                        height={20}
                        className="w-32 sm:w-40 h-5 sm:h-6 object-contain"
                    />
                </div>
                <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                    <p><strong>1993 – Những bước đi đầu tiên:</strong> Bắt đầu là một cửa hàng bán lẻ nhỏ với 3 thành viên, doanh thu khoảng 300 triệu VNĐ/năm.</p>
                    <p><strong>2003 – Mở rộng quy mô:</strong> Mở thêm 5 chi nhánh, 150 nhân viên, doanh thu đạt trên 3 tỷ VNĐ/năm.</p>
                    <p><strong>2015 – Tăng trưởng bền vững:</strong> Doanh thu vượt 10 tỷ VNĐ/năm, đội ngũ hơn 400 người, mở rộng 4 công ty con.</p>
                    <p><strong>2020 – Phát triển dài hạn:</strong> Phục vụ hơn 3.000 cửa hàng bán lẻ, doanh thu hơn 20 tỷ VNĐ/năm, 800 nhân sự, thêm 2 công ty con.</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#60481e] text-center">Thế mạnh của chúng tôi</h2>
                <div className="flex justify-center my-2">
                    <Image
                        src="/images/divider.png"
                        alt="divider"
                        width={120}
                        height={20}
                        className="w-32 sm:w-40 h-5 sm:h-6 object-contain"
                    />
                </div>
                <div className="space-y-3 text-gray-600 text-base sm:text-lg">
                    <p>Hơn 25 năm kinh nghiệm, am hiểu thị trường và văn hóa địa phương.</p>
                    <p>Đội ngũ nhân viên chuyên nghiệp, đào tạo bài bản.</p>
                    <p>Mạng lưới phân phối và dịch vụ phủ khắp khu vực hoạt động.</p>
                    <p>90% doanh số đến từ bán lẻ trực tiếp qua đội ngũ nhân viên.</p>
                    <p>Nguồn lực tài chính ổn định, sẵn sàng mở rộng hợp tác lâu dài.</p>
                </div>
            </section>

            <section className="text-center mt-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#60481e]">Hợp tác cùng Fiby Group</h2>
                <div className="flex justify-center my-2">
                    <Image
                        src="/images/divider.png"
                        alt="divider"
                        width={120}
                        height={20}
                        className="w-32 sm:w-40 h-5 sm:h-6 object-contain"
                    />
                </div>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-base sm:text-lg">
                    Bạn đang tìm kiếm đối tác cung cấp sản phẩm tẩy rửa chất lượng? Hãy liên hệ với chúng tôi để nhận tư vấn và báo giá chi tiết!
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-[#bc9a5c] hover:bg-[#a88545] text-white py-3 px-8 rounded-md transition duration-300 text-base sm:text-lg"
                >
                    Liên hệ ngay
                </a>
            </section>
        </div>
    );
}