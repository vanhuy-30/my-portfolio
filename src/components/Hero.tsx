"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion"; // Cho animation

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-br from-primary via-teal-500 to-cyan-600 text-white relative pt-20 md:pt-0"
    >
      {/* Background Shapes (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/15 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Nội dung chữ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 lg:w-3/5 space-y-6 mb-10 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Chào bạn, tôi là <span className="text-yellow-300">[Tên Của Bạn]</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
            Một [Nghề Nghiệp Của Bạn] đam mê xây dựng các ứng dụng web hiện đại và hữu ích.
            {/* Ví dụ: Lập Trình Viên Full-stack */}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Briefcase size={20} />
              <span>Xem Dự Án</span>
            </Link>
            <a
              href="/cv/ten-cv-cua-ban.pdf" // Đường dẫn đến CV của bạn
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileText size={20} />
              <span>Tải CV</span>
            </a>
          </div>
          {/* Social Links */}
          <div className="flex space-x-6 justify-center md:justify-start pt-4">
            <a href="https://github.com/tenban" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/tenban" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 transition-colors">
              <Linkedin size={28} />
            </a>
            {/* Thêm các mạng xã hội khác nếu có */}
          </div>
        </motion.div>

        {/* Ảnh đại diện */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
            <Image
              src="/images/placeholder-avatar.png" // Thay bằng đường dẫn ảnh của bạn
              alt="Ảnh đại diện của [Tên Bạn]"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority // Ưu tiên tải ảnh này
            />
          </div>
        </motion.div>
      </div>

      {/* Nút scroll xuống (tùy chọn) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <Link href="#about">
          <ArrowDown size={32} className="text-white animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
