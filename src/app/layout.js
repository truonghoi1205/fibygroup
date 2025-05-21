import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Trang chủ | Fiby Group",
    description: "Fiby Group chuyên cung cấp các sản phẩm chăm sóc gia đình như nước giặt, nước rửa chén, nước lau sàn chất lượng cao, an toàn và thân thiện với môi trường.",
    keywords: "nước giặt, nước rửa chén, nước lau sàn, chất tẩy rửa, sản phẩm vệ sinh, Fiby Group",
    robots: "index, follow",
    openGraph: {
        title: "Fiby Group - Chăm sóc gia đình với sản phẩm chất lượng",
        description: "Khám phá các sản phẩm tẩy rửa an toàn, hiệu quả từ Fiby Group: nước giặt, nước rửa chén, nước lau sàn và nhiều sản phẩm khác.",
        url: "https://www.fibygroup.vn",
        type: "website",
        siteName: "Fiby Group",
    },
    alternates: {
        canonical: "https://www.fibygroup.vn",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <title></title>
        <link rel="icon" href="/favicon.png" type="image/png"/>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-bg-body`}>
            <Navbar/>
                {children}
            <Footer/>
    </body>
    </html>
  );
}
