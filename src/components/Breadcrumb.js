import Link from "next/link";

export default function Breadcrumb({ items }) {
    return (
        <nav className="text-sm text-gray-600 max-w-7xl mx-auto px-4 mt-6">
            <ol className="flex flex-wrap items-center space-x-1">
                {items.map((item, index) => (
                    <li key={index}>
                        {item.href ? (
                            <Link href={item.href} className="text-gray-400 hover:text-[#60481e]">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-medium text-gray-800">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span> /</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
