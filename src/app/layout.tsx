import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import font Inter
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

// Cấu hình font Inter
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Portfolio Của Tôi | [Tên Của Bạn]", // Thay [Tên Của Bạn]
  description: "Chào mừng đến với portfolio cá nhân của tôi, được xây dựng bằng Next.js và Tailwind CSS.",
  // Thêm các metadata khác nếu cần: keywords, openGraph, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}> {/* Sử dụng biến font */}
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
