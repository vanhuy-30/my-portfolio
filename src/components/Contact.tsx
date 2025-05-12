"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Xử lý gửi form (ví dụ: sử dụng API endpoint hoặc dịch vụ email)
    // Dưới đây là ví dụ giả lập
    try {
      // const response = await fetch("/api/contact", { // Tạo API route nếu cần
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error("Gửi thất bại!");
      // const result = await response.json();

      // Giả lập thành công sau 2 giây
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData); // Thay thế bằng logic thực tế

      setSubmitMessage("Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitMessage("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} className="text-primary" />, text: "tenban@example.com", href: "mailto:tenban@example.com" },
    { icon: <Phone size={20} className="text-primary" />, text: "+84 123 456 789", href: "tel:+84123456789" },
    { icon: <MapPin size={20} className="text-primary" />, text: "Thành phố Hồ Chí Minh, Việt Nam" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">
            Liên Hệ <span className="text-primary">Với Tôi</span>
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Nếu bạn có bất kỳ câu hỏi, cơ hội hợp tác hoặc chỉ muốn chào hỏi, đừng ngần ngại liên hệ!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Form liên hệ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-card p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Họ và Tên</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Tên của bạn" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Địa chỉ Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1">Chủ đề</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Về việc..." />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Nội dung tin nhắn</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Nội dung bạn muốn gửi..."></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? "Đang gửi..." : "Gửi Tin Nhắn"}</span>
                </button>
              </div>
              {submitMessage && (
                <p className={`text-sm mt-4 text-center ${submitMessage.includes("thất bại") || submitMessage.includes("lỗi") ? 'text-red-600' : 'text-green-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>

          {/* Thông tin liên hệ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text mb-4">Thông Tin Khác</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow">
                  <span className="mt-1">{info.icon}</span>
                  {info.href ? (
                     <a href={info.href} className="text-text-secondary hover:text-primary transition-colors">{info.text}</a>
                  ) : (
                    <p className="text-text-secondary">{info.text}</p>
                  )}
                </div>
              ))}
            </div>
            {/* Bạn có thể thêm Google Maps embed ở đây nếu muốn */}
            {/* <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447170303206!2d106.62966491474802!3d10.77698999232094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ac89f1%3A0xF4d8d055e52918c!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border:0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
