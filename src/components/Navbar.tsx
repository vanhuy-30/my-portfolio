"use client"; // Đánh dấu đây là Client Component

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Briefcase, User, Code, MessageSquare, Home } from "lucide-react"; // Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Trang Chủ", icon: <Home size={18} /> },
    { href: "#about", label: "Về Tôi", icon: <User size={18} /> },
    { href: "#projects", label: "Dự Án", icon: <Briefcase size={18} /> },
    { href: "#skills", label: "Kỹ Năng", icon: <Code size={18} /> },
    { href: "#contact", label: "Liên Hệ", icon: <MessageSquare size={18} /> },
  ];

  // Xử lý scroll để thay đổi style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo hoặc Tên */}
        <Link href="#home" className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
          [Tên Bạn]
        </Link>

        {/* Menu cho Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-1 ${
                isScrolled ? 'text-text hover:text-primary' : 'text-gray-200 hover:text-white'
              } transition-colors duration-200`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Nút Menu cho Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu thả xuống cho Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Đóng menu khi click
              className="flex items-center space-x-2 px-4 py-3 text-text hover:bg-gray-100 hover:text-primary transition-colors duration-200"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
