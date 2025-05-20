const FormSection = () => {
    return (
        <section className="relative bg-[url('/images/bg-van-hoa.jpg')] bg-cover bg-center bg-no-repeat bg-fixed py-12 md:py-20">
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative px-4 md:px-8 max-w-2xl mx-auto ">
                <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-14">
                    Đăng ký tư vấn miễn phí
                </h2>
                <form action="" className="max-w-3xl mx-auto w-full space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc9a5c]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc9a5c]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc9a5c]"
                        />
                        <input
                            type="text"
                            placeholder="Địa chỉ"
                            className="p-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc9a5c]"
                        />
                    </div>
                    <textarea
                        rows={5}
                        placeholder="Nội dung cần tư vấn"
                        className="w-full bg-white p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc9a5c] resize-none"
                    ></textarea>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#bc9a5c] hover:bg-[#a88545] text-white py-2 px-6 rounded-lg transition duration-300"
                        >
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormSection;
