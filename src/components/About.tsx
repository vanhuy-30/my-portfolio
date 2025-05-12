"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Award size={32} className="text-primary" />, value: "2+", label: "Năm Kinh Nghiệm" },
    { icon: <Briefcase size={32} className="text-primary" />, value: "10+", label: "Dự Án Hoàn Thành" },
    { icon: <Users size={32} className="text-primary" />, value: "5+", label: "Khách Hàng Hài Lòng" }, // Ví dụ
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">
            Về <span className="text-primary">Tôi</span>
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Một chút thông tin về hành trình và đam mê của tôi trong lĩnh vực phát triển.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Hình ảnh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3 lg:w-2/5 flex justify-center"
          >
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/images/placeholder-avatar.png" // Thay bằng ảnh khác của bạn nếu muốn
                alt="Giới thiệu về [Tên Bạn]"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Nội dung text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-2/3 lg:w-3/5 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text">
              Tôi là [Tên Bạn], một [Nghề Nghiệp] đầy nhiệt huyết.
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Xin chào! Tôi là một nhà phát triển web với niềm đam mê tạo ra các giải pháp kỹ thuật số
              sáng tạo và hiệu quả. Với [Số] năm kinh nghiệm trong ngành, tôi đã làm việc trên nhiều dự án
              đa dạng, từ các trang web doanh nghiệp đến ứng dụng web phức tạp.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Phương châm làm việc của tôi là luôn học hỏi công nghệ mới, chú trọng đến trải nghiệm người dùng
              và mang lại sản phẩm chất lượng cao. Tôi thích giải quyết các vấn đề thách thức và biến ý tưởng
              thành hiện thực.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Ngoài công việc, tôi thích [Sở thích 1], [Sở thích 2] và [Sở thích 3].
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
