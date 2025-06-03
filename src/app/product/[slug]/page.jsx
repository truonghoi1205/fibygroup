import {notFound} from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import products from "@/data/products";

export async function generateStaticParams() {
    return products
        .filter((p) => p.slug)
        .map((product) => ({
            slug: product.slug,
        }));
}

export function generateMetadata({params}) {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) return {};

    return {
        title: `${product.name} ${product.scent} ${product.capacity} | Fiby Group`,
        description: product.description,
        keywords: `${product.name}, ${product.scent}, ${product.category}, Fiby`,
        openGraph: {
            title: `${product.name} ${product.scent} ${product.capacity} | Fiby Group`,
            description: product.description,
            url: `http://localhost:3000/product/${product.slug}`,
            type: "website",
            siteName: "Fiby Group",
        },
        alternates: {
            canonical: `https://www.fibygroup.vn/product/${product.slug}`,
        },
    };
}

export default function ProductDetailPage({ params }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) return notFound();

    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Sản phẩm", href: "/product" },
        { label: `${product.name} ${product.scent} ${product.capacity}` },
    ];

    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Image section */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] relative">
                            <Image
                                src={product.image}
                                alt={`${product.name} ${product.scent} ${product.capacity}`}
                                fill
                                className="rounded-xl object-cover shadow-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Info section */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {product.name} {product.scent} {product.capacity}
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                            <strong className="block font-semibold mb-1">Mô tả:</strong>
                            {product.description}
                        </p>

                        {product.ingredient && (
                            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                                <strong className="block font-semibold mb-1">Thành phần:</strong>
                                {product.ingredient}
                            </p>
                        )}

                        {product.imageDescription && (
                            <div className="w-full rounded-lg overflow-hidden shadow-md mt-4">
                                <Image
                                    width={800}
                                    height={400}
                                    src={product.imageDescription}
                                    alt="Mô tả chi tiết sản phẩm"
                                    className="w-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

