export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-2 pb-8 md:pt-4 md:pb-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-3xl font-bold text-[#bc9a5c] mb-4">Fiby Group</h1>
                <hr className="mb-6 border-[#bc9a5c]" />
                <p className="text-gray-700 mb-2">
                    <strong>Địa chỉ:</strong> Số nhà 14, Đường Phạm Ngũ Lão, Phường Ka Long, Thành phố Móng Cái, Tỉnh Quảng Ninh, Việt Nam
                </p>
                <p className="text-gray-700 mb-2"><strong>Điện thoại:</strong> 0123 456 789</p>
                <p className="text-gray-700"><strong>Email:</strong> cskh@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-semibold uppercase text-gray-800 mb-4">Gửi tin nhắn cho chúng tôi</h2>
                <hr className="mb-6 border-[#bc9a5c]" />
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#bc9a5c]"
                        />
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#bc9a5c]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#bc9a5c]"
                        />
                        <input
                            type="text"
                            placeholder="Địa chỉ"
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#bc9a5c]"
                        />
                    </div>
                    <textarea
                        rows={5}
                        placeholder="Nội dung tin nhắn"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#bc9a5c] resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#bc9a5c] hover:bg-[#a88545] text-white py-2 px-6 rounded-md transition"
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    );
}
