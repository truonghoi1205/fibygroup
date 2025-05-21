import Image from "next/image";

const timelineData = [
    {year: "2010", content: "Thành lập công ty, bắt đầu kinh doanh hàng tiêu dùng."},
    {year: "2015", content: "Mở rộng hệ thống chi nhánh ra miền Trung và miền Nam."},
    {year: "2018", content: "Hợp tác với các tập đoàn quốc tế trong lĩnh vực FMCG."},
    {year: "2022", content: "Cán mốc 1000 nhân viên và đạt doanh thu hàng ngàn tỷ."},
];

const ContentSection = () => {
    return (
        <section className="max-w-sm md:max-w-7xl mx-auto w-full py-6 md:py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center ">Hành trình phát triển</h2>
            <div className="flex justify-center mb-14">
                <Image
                    src="/images/divider.png"
                    alt="divider"
                    width={100}
                    height={100}
                    className="w-54 h-10 object-contain"
                />
            </div>
            <div className="relative flex items-start md:gap-10 w-full mx-auto px-0 md:min-w-max md:justify-center">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 md:h-3 bg-[#60481e] z-0"/>
                <div
                    className="absolute top-1/2 -translate-y-1/2 left-full border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-[#60481e] z-10"/>
                {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`relative z-10 flex flex-col items-center w-40 md:w-60 ${
                                isEven ? '' : 'mt-10 md:mt-16'
                            }`}
                        >
                            {isEven && (
                                <>
                                    <div className="relative bottom-9 md:bottom-4.5 text-center">
                                        <p className="text-xs md:text-sm text-gray-700">{item.content}</p>
                                    </div>
                                    <div className="relative bottom-9 md:bottom-4.5 w-0.5 h-8 md:h-10 bg-[#60481e]"/>
                                    <h3 className="relative bottom-9 md:bottom-4.5 text-[#60481e] font-semibold text-base md:text-lg">{item.year}</h3>
                                    <div
                                        className="relative bottom-9 md:bottom-4.5 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#60481e] border-2 md:border-4 border-white shadow-lg z-10"/>
                                </>
                            )}
                            {!isEven && (
                                <>
                                    <div
                                        className="relative top-11 md:top-6.5 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#60481e] border-2 md:border-4 border-white shadow-lg z-10"/>
                                    <h3 className="relative top-11 md:top-6.5 text-[#60481e] font-semibold text-base md:text-lg">{item.year}</h3>
                                    <div className="relative top-11 md:top-6.5 w-0.5 h-8 md:h-10 bg-[#60481e] "/>
                                    <div className="relative top-11 md:top-6.5 text-center">
                                        <p className="mt-2 text-xs md:text-sm text-gray-700">{item.content}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ContentSection;
