"use client"

import { useState } from 'react';
import ProductList from "@/components/product/ProductList";

export default function Product() {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            <section className="flex flex-col md:flex-row gap-6 max-w-7xl px-4 mx-auto pt-2 pb-8 md:pt-4 md:pb-12">
                <div className="w-full md:w-1/4 h-auto md:h-50">
                    <h1 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Bộ Lọc</h1>
                    <form className="space-y-3 bg-white rounded-lg p-4 md:p-6" role="radiogroup" aria-label="Loại sản phẩm">
                        <h2 className="text-sm font-bold mb-4 text-gray-800">Loại sản phẩm</h2>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="tat-ca"
                                name="productType"
                                value="all"
                                checked={filter === 'all'}
                                onChange={handleFilterChange}
                                className="w-4 h-4 text-[#60481e] focus:ring-[#60481e] border-gray-300 cursor-pointer"
                            />
                            <label htmlFor="tat-ca" className="ml-2 text-gray-700 text-sm cursor-pointer">
                                Tất cả sản phẩm
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="nuoc-giat"
                                name="productType"
                                value="nuoc-giat"
                                checked={filter === 'nuoc-giat'}
                                onChange={handleFilterChange}
                                className="w-4 h-4 text-[#60481e] focus:ring-[#60481e] border-gray-300 cursor-pointer"
                            />
                            <label htmlFor="nuoc-giat" className="ml-2 text-gray-700 text-sm cursor-pointer">
                                Nước giặt
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="nuoc-rua-chen"
                                name="productType"
                                value="nuoc-rua-chen"
                                checked={filter === 'nuoc-rua-chen'}
                                onChange={handleFilterChange}
                                className="w-4 h-4 text-[#60481e] focus:ring-[#60481e] border-gray-300 cursor-pointer"
                            />
                            <label htmlFor="nuoc-rua-chen" className="ml-2 text-gray-700 text-sm cursor-pointer">
                                Nước rửa chén
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="nuoc-lau-san"
                                name="productType"
                                value="nuoc-lau-san"
                                checked={filter === 'nuoc-lau-san'}
                                onChange={handleFilterChange}
                                className="w-4 h-4 text-[#60481e] focus:ring-[#60481e] border-gray-300 cursor-pointer"
                            />
                            <label htmlFor="nuoc-lau-san" className="ml-2 text-gray-700 text-sm cursor-pointer">
                                Nước lau sàn
                            </label>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-3/4">
                <h1 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Tất cả sản phẩm</h1>
                    <ProductList filter={filter} />
                </div>
            </section>
        </div>
    )
}