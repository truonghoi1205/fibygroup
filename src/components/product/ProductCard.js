import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden  transition-shadow duration-300 h-full flex flex-col ">
            <div className="relative aspect-[3/3.5] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={product.id <= 4}
                />
            </div>
            <div className="p-2 md:p-3 flex-grow">
                <h3 className="text-sm md:text-base font-semibold line-clamp-2">{product.name}</h3>
                <h3 className="text-xs md:text-sm font-semibold line-clamp-2 ">{product.scent}</h3>
                <h3 className="text-[12px] md:text-sm my-1">Dung tích: {product?.capacity}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
            </div>
        </div>
    );
}
