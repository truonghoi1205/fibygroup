import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-[#bc9a5c] mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Không tìm thấy trang</h2>
                <p className="text-gray-600 mb-6">Trang bạn đang tìm có thể đã bị xóa hoặc không tồn tại.</p>
                <Link
                    href="/"
                    className="inline-block bg-[#bc9a5c] text-white px-6 py-2 rounded-md hover:bg-[#a6824b] transition-colors duration-200"
                >
                    Quay lại trang chủ
                </Link>
            </div>
        </main>
    );
}
