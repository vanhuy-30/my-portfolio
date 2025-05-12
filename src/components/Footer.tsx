import Link from "next/link";
import { Github, Linkedin, Twitter, Rss } from "lucide-react"; // Thêm icon nếu cần

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: <Github size={22} />, url: "https://github.com/tenban" },
    { name: "LinkedIn", icon: <Linkedin size={22} />, url: "https://linkedin.com/in/tenban" },
    { name: "Twitter", icon: <Twitter size={22} />, url: "https://twitter.com/tenban" }, // Ví dụ
    // { name: "Blog", icon: <Rss size={22} />, url: "/blog" }, // Nếu có blog
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} [Tên Của Bạn]. Đã đăng ký Bản quyền.</p>
            <p className="text-sm text-gray-400 mt-1">
              Xây dựng với <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Next.js</Link> & <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Tailwind CSS</Link>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Optional: Back to top button or other links */}
        {/* <div className="text-center mt-6">
          <Link href="#home" className="text-sm text-gray-400 hover:text-primary transition-colors">
            Trở lại đầu trang
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
