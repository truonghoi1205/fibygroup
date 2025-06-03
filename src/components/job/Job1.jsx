import Link from "next/link";

export default function Job1() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-2 pb-8 md:pt-4 md:pb-12">
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-[#bc9a5c] mb-6">
                    Tuyển dụng Nhân viên Bán hàng – Tháng 01/2025
                </h1>
                <hr className="border-[#bc9a5c] mb-8"/>

                <div className="space-y-6 leading-relaxed text-[17px]">
                    <p className="font-semibold text-lg uppercase">Tuyển nhân viên bán hàng</p>

                    <p className="italic text-red-600">
                        (Lưu ý: Ứng viên vui lòng đến trực tiếp văn phòng công ty để phỏng vấn!)
                    </p>

                    <p>
                        <strong>FibyGroup</strong> cần tuyển <strong>nhân viên bán hàng</strong> phụ trách giới thiệu,
                        tư vấn và bán các sản phẩm tiêu dùng như: <br/>
                        <strong>Bột giặt, nước giặt, nước rửa chén</strong> và các sản phẩm vệ sinh gia dụng khác.
                    </p>

                    <p>
                        Chúng tôi là công ty chuyên phân phối các mặt hàng tiêu dùng thiết yếu, hướng đến việc xây dựng
                        thương hiệu uy tín và phát triển thị trường trên toàn quốc.
                    </p>

                    <p>
                        <strong>Khu vực làm việc:</strong> Thành phố Móng Cái, Tỉnh Quảng Ninh hoặc làm việc từ xa (tùy vị trí)
                    </p>

                    <div>
                        <strong>Số lượng tuyển:</strong>
                        <ul className="list-disc list-inside mt-2">
                            <li>03 nhân viên bán hàng – <span
                                className="text-green-600">Thu nhập từ 8 - 12 triệu</span> (thỏa thuận theo năng lực)
                            </li>
                        </ul>
                    </div>

                    <p><strong>Thời gian làm việc:</strong> Giờ hành chính, linh hoạt theo kế hoạch công việc.</p>

                    <div>
                        <strong>Yêu cầu:</strong>
                        <ul className="list-disc list-inside mt-2">
                            <li>Nam/Nữ từ 20 – 35 tuổi</li>
                            <li>Ưu tiên ứng viên có kinh nghiệm bán hàng tiêu dùng hoặc chăm sóc khách hàng</li>
                            <li>Kỹ năng giao tiếp, tư vấn, thuyết phục khách hàng tốt</li>
                            <li>Chịu được áp lực công việc, trung thực và trách nhiệm</li>
                        </ul>
                    </div>

                    <div>
                        <strong>Hồ sơ yêu cầu:</strong>
                        <ul className="list-disc list-inside mt-2">
                            <li>Sơ yếu lý lịch</li>
                            <li>CMND/CCCD photo</li>
                            <li>Bằng cấp liên quan (photo)</li>
                            <li>Đơn xin việc</li>
                            <li>Giấy khám sức khỏe</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Điện thoại liên hệ:</strong><br/>
                        <Link href="tel:0588585838" className="hover:underline">0588 585 838</Link>
                        <span className="mx-1">|</span>
                        <Link href="tel:0981000330" className="hover:underline">0981 000 330</Link>
                        <span className="mx-1">|</span>
                        <Link href="tel:083886683" className="hover:underline">0838 866 838</Link>
                        <br/>
                        <p>Email: <Link
                            href="mailto:fibygroup@gmail.com"
                            className="hover:underline"
                        >
                            fibygroup@gmail.com
                        </Link></p>
                    </div>
                    <div>
                        <strong>Địa chỉ nộp hồ sơ:</strong><br/>
                        Công ty FibyGroup – Phạm Ngũ Lão – Ka Long – TP Móng Cái – Quảng Ninh
                    </div>
                </div>
            </div>
        </div>
    );
}
