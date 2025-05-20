export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-16 space-y-20 ">
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
                <p className="text-gray-600 text-lg">
                    Chúng tôi là một đội ngũ đầy nhiệt huyết, với sứ mệnh mang đến giải pháp tối ưu và giá trị bền vững cho khách hàng trong từng sản phẩm và dịch vụ.
                </p>
            </section>
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="/images/about-us.jpg"
                    alt="Về chúng tôi"
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Chúng tôi là ai?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Được thành lập từ năm 2020, chúng tôi đã không ngừng phát triển và khẳng định vị thế trong ngành. Với đội ngũ chuyên nghiệp và tận tâm, chúng tôi luôn đặt khách hàng là trung tâm của mọi hoạt động.
                    </p>
                </div>
            </section>
            <section className="grid md:grid-cols-2 gap-10">
                <div className="bg-[#fdf7ec] p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Tầm nhìn</h3>
                    <p className="text-gray-700">
                        Trở thành thương hiệu dẫn đầu trong lĩnh vực, mang lại giá trị vượt trội cho cộng đồng và xã hội.
                    </p>
                </div>
                <div className="bg-[#fdf7ec] p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Sứ mệnh</h3>
                    <p className="text-gray-700">
                        Cung cấp sản phẩm, dịch vụ chất lượng cao, lấy sự hài lòng của khách hàng làm thước đo thành công.
                    </p>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-center">Giá trị cốt lõi</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Tận tâm", desc: "Luôn đặt tâm huyết vào từng sản phẩm và dịch vụ." },
                        { title: "Chuyên nghiệp", desc: "Tác phong làm việc bài bản và minh bạch." },
                        { title: "Sáng tạo", desc: "Không ngừng đổi mới để tạo nên sự khác biệt." }
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
                <p className="text-gray-600 mb-6">Hãy liên hệ ngay để được tư vấn và hợp tác!</p>
                <a
                    href="/lien-he"
                    className="inline-block bg-[#bc9a5c] hover:bg-[#a88545] text-white py-3 px-6 rounded-md transition"
                >
                    Liên hệ ngay
                </a>
            </section>
        </div>
    );
}
