"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Dự Án Portfolio Cá Nhân",
    description:
      "Trang web portfolio này được xây dựng bằng Next.js, Tailwind CSS và TypeScript để giới thiệu bản thân và các dự án.",
    imageUrl: "/images/project-placeholder.png", // Thay bằng ảnh dự án của bạn
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    liveUrl: "#", // Link đến trang live của dự án này (nếu có)
    repoUrl: "https://github.com/tenban/portfolio-nextjs", // Link GitHub
  },
  {
    title: "Ứng Dụng Quản Lý Công Việc",
    description:
      "Một ứng dụng web giúp người dùng quản lý công việc hàng ngày, theo dõi tiến độ và cộng tác với nhóm.",
    imageUrl: "/images/project-placeholder.png", // Thay bằng ảnh dự án của bạn
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    liveUrl: "https://vidu.com/quanlycongviec",
    repoUrl: "https://github.com/tenban/quanlycongviec",
  },
  {
    title: "Trang Web Thương Mại Điện Tử",
    description:
      "Một nền tảng e-commerce đầy đủ tính năng với giỏ hàng, thanh toán, quản lý sản phẩm và người dùng.",
    imageUrl: "/images/project-placeholder.png", // Thay bằng ảnh dự án của bạn
    tags: ["Vue.js", "Firebase", "Stripe", "Nuxt.js"],
    // liveUrl: "https://vidu.com/shop", // Bỏ trống nếu không có
    repoUrl: "https://github.com/tenban/ecommerce-vue",
  },
  // Thêm các dự án khác của bạn vào đây
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">
            Các <span className="text-primary">Dự Án</span> Của Tôi
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Dưới đây là một số dự án tiêu biểu mà tôi đã thực hiện hoặc đóng góp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
