import type { Dictionary } from "./en";

export const vi: Dictionary = {
  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    projects: "Dự án",
    experience: "Kinh nghiệm",
    skills: "Kỹ năng",
    architecture: "Cách làm việc",
    contact: "Liên hệ",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
  common: {
    viewWork: "Xem dự án",
    contactMe: "Liên hệ",
    close: "Đóng",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    liveDemo: "Demo",
    appStore: "App Store",
    playStore: "Google Play",
    basedIn: "Địa điểm",
    inProgress: "Đang phát triển",
    nda: "NDA",
  },
  hero: {
    eyebrow: "Software Engineer · TP. Hồ Chí Minh",
    greeting: "Xin chào, tôi là Huy (Stephen).",
    headline:
      "Phát triển phần mềm end-to-end: từ app mobile, web đến API và các công cụ AI phục vụ công việc hằng ngày.",
    supporting:
      "Gần 5 năm làm sản phẩm thực tế: từ app y tế kết nối thiết bị qua BLE cho khách hàng Nhật, đến hệ thống nhân sự cho toàn công ty và các AI agent chạy trên LLM nội bộ.",
    factsLabel: "Tổng quan",
    factYears: "~5 năm",
    factYearsLabel: "kinh nghiệm",
    factProducts: "10+",
    factProductsLabel: "app và hệ thống đã triển khai",
    factAi: "8+",
    factAiLabel: "tính năng AI đang vận hành",
    nowLabel: "Hiện tại",
    nowValue: "Software Engineer tại Motives Vietnam",
  },
  about: {
    title: "Giới thiệu",
    lead: "Bắt đầu từ mobile, hiện tại tôi làm xuyên suốt từ giao diện, backend đến AI.",
    body:
      "Tại Vitalify Asia, tôi phát triển app Android và Flutter cho khách hàng Nhật, trong đó có app kết nối thiết bị y tế Omron qua BLE. Tại Motives Vietnam, tôi tham gia trọn vòng đời của một tính năng: từ lúc nhận yêu cầu, làm giao diện Flutter hoặc React, viết API và xử lý nghiệp vụ, tích hợp với Outlook, Odoo, cho đến phát triển các công cụ AI chạy trên LLM nội bộ. Riêng M System hiện có khoảng 500 nhân viên sử dụng mỗi ngày. Với tôi, code dễ bảo trì, release đều đặn và sản phẩm sát với nghiệp vụ thực tế là những điều quan trọng nhất.",
    currentLabel: "Hiện tại",
    currentValue: "Software Engineer, Motives Vietnam",
    educationLabel: "Học vấn",
    educationValue: "Cử nhân Công nghệ thông tin, HUTECH, 2022",
    languagesLabel: "Ngôn ngữ",
    languagesValue: "Tiếng Việt (bản ngữ), Tiếng Anh (TOEIC 700)",
    locationValue: "TP. Hồ Chí Minh, Việt Nam",
  },
  projects: {
    title: "Dự án tiêu biểu",
    subtitle:
      "Các sản phẩm tôi làm tại Motives Vietnam và Vitalify Asia. Phần lớn là hệ thống nội bộ hoặc dự án khách hàng có NDA, nên tôi chỉ chia sẻ ở mức tổng quan, không kèm link hay dữ liệu thật.",
    sideTitle: "Dự án cá nhân",
    sideSubtitle: "Làm ngoài giờ, source code công khai trên GitHub.",
    otherTitle: "Các dự án khác",
    role: "Vai trò",
    technologies: "Công nghệ",
    openCase: "Xem chi tiết",
    ndaNote:
      "Dự án nội bộ hoặc của khách hàng, có NDA. Không có link công khai, nội dung chỉ ở mức tổng quan.",
    sections: {
      context: "Bối cảnh",
      built: "Phần tôi đảm nhận",
      decisions: "Hướng tiếp cận",
      results: "Kết quả",
    },
  },
  experience: {
    title: "Kinh nghiệm",
    subtitle:
      "Từ lập trình viên mobile đến Software Engineer: bắt đầu với Android, chuyển sang Flutter, rồi mở rộng sang web, backend và AI.",
    showMore: "Xem thêm",
    showLess: "Thu gọn",
  },
  skills: {
    title: "Kỹ năng",
    subtitle: "Chỉ gồm những công nghệ tôi đã dùng trong dự án thực tế hoặc dự án công khai.",
    categories: {
      mobile: "Mobile",
      web: "Web",
      backend: "Backend & dữ liệu",
      ai: "Ứng dụng AI",
      aiTools: "Công cụ AI hỗ trợ lập trình",
      practices: "Kiến trúc & công cụ",
    },
  },
  architecture: {
    title: "Cách tôi làm việc",
    subtitle: "Bốn nguyên tắc tôi áp dụng xuyên suốt các dự án.",
    principles: {
      structure: {
        title: "Cấu trúc rõ ràng từ đầu",
        body: "Chia module theo tính năng, áp dụng Clean Architecture và quản lý state chặt chẽ, để càng thêm tính năng code càng không bị rối.",
        proof: "Flutter Starter Kit",
      },
      ship: {
        title: "Release đều đặn",
        body: "Đưa app lên store, TestFlight và tiếp tục maintain khi đã có người dùng thật.",
        proof: "Play Console · TestFlight · store Nhật Bản",
      },
      business: {
        title: "Bám sát nghiệp vụ",
        body: "Tích hợp với những công cụ các phòng ban đang dùng, thay vì bắt người dùng thay đổi thói quen.",
        proof: "Outlook · Odoo · 6+ phòng ban",
      },
      ai: {
        title: "Đưa AI vào công việc",
        body: "Vừa phát triển công cụ AI cho các phòng ban, vừa dùng AI hằng ngày để code, debug và review. Mọi thay đổi đều được tôi kiểm tra lại trước khi merge.",
        proof: "Dify · Cursor · Claude Code",
      },
    },
  },
  contact: {
    title: "Liên hệ với tôi",
    subtitle:
      "Nếu bạn muốn trao đổi về công việc mobile, web hay AI, cứ gửi email cho tôi. Đây là cách nhanh nhất để liên lạc.",
  },
  footer: {
    rights: "Thiết kế và phát triển bằng Next.js, TypeScript và Tailwind CSS.",
    viewSource: "Xem source code",
  },
};
