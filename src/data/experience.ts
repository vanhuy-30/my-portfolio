import { tx, type Copy } from "@/lib/copy";
import type { ExperienceItem, Locale } from "@/types";

interface SourcePhase {
  label: Copy;
  period?: Copy;
  points: Copy[];
}

interface SourceItem {
  id: string;
  company: string;
  title: Copy;
  period: Copy;
  location?: Copy;
  summary: Copy;
  phases: SourcePhase[];
  technologies: string[];
}

const source: SourceItem[] = [
  {
    id: "motives-vietnam",
    company: "Motives Vietnam",
    title: { en: "Software Engineer (in-house)", vi: "Software Engineer (in-house)" },
    period: { en: "Aug 2024 – Present", vi: "08/2024 – Hiện tại" },
    location: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" },
    summary: {
      en: "In-house engineer for the group and its subsidiaries. I handle features from the first request through release, covering app and web UI, backend APIs, integrations, and AI tooling.",
      vi: "Làm in-house cho các công ty trong tập đoàn. Tôi tham gia từ lúc nhận yêu cầu đến khi release: làm giao diện app và web, viết API, xử lý nghiệp vụ, tích hợp hệ thống và phát triển các công cụ AI.",
    },
    phases: [
      {
        label: { en: "Restaurant loyalty platform", vi: "Nền tảng tích điểm cho chuỗi nhà hàng" },
        period: { en: "2026 – Present", vi: "2026 – nay" },
        points: [
          {
            en: "Building a Flutter loyalty app and a React, TypeScript, and Vite admin for one of the group's restaurant chains. Customers scan receipts to earn points and redeem rewards.",
            vi: "Đang phát triển app thành viên (Flutter) và trang quản trị (React, TypeScript, Vite) cho chuỗi nhà hàng thuộc tập đoàn: quét hoá đơn, tích điểm, đổi quà.",
          },
        ],
      },
      {
        label: { en: "AI automation", vi: "Ứng dụng AI vào công việc" },
        period: { en: "2025 – Present", vi: "2025 – nay" },
        points: [
          {
            en: "Built 8+ AI features with Dify, LibreChat, and self-hosted LLMs, including an internal chatbot, a RAG agent for company documents, and agents that handle leave requests, IT tickets, and meeting-room bookings.",
            vi: "Phát triển hơn 8 tính năng AI trên Dify, LibreChat và LLM nội bộ: chatbot nội bộ, RAG agent tra cứu tài liệu công ty, các agent tự tạo đơn nghỉ phép, IT ticket và đặt phòng họp.",
          },
          {
            en: "Migrated all AI features from the OpenAI API to self-hosted LLMs to keep company data in-house.",
            vi: "Chuyển toàn bộ tính năng AI từ API của OpenAI sang LLM chạy nội bộ để đảm bảo bảo mật dữ liệu.",
          },
          {
            en: "Built tools for specific departments, such as payment voucher creation, payment checks, and QC voice review.",
            vi: "Làm các công cụ AI riêng cho từng phòng ban: tạo phiếu thanh toán, kiểm tra thanh toán, QC giọng nói.",
          },
        ],
      },
      {
        label: { en: "M System (HR & operations app)", vi: "M System (ứng dụng nhân sự & vận hành)" },
        period: { en: "2025 – Present", vi: "2025 – nay" },
        points: [
          {
            en: "Maintain and extend M System, which around 500 employees use daily on web and mobile. It runs on a single React codebase and covers HR plus part of the ERP, while specialized modules stay in the separate ERP and HRM systems.",
            vi: "Maintain và phát triển M System, hệ thống khoảng 500 nhân viên dùng hằng ngày, chạy cả web lẫn mobile trên cùng một codebase React. M System gồm các chức năng HRM và một phần ERP; các nghiệp vụ chuyên sâu vẫn nằm ở trang ERP và HRM riêng.",
          },
          {
            en: "Built attendance tracking, leave and business-trip requests, a calendar that syncs with Outlook, monthly performance reviews, a company newsfeed, and a learning module connected to Odoo.",
            vi: "Làm các tính năng chấm công, đơn nghỉ phép và công tác, lịch làm việc đồng bộ với Outlook, đánh giá hiệu suất hằng tháng, bảng tin và module đào tạo liên kết với Odoo.",
          },
          {
            en: "Built workflows for Accounting, QC, R&A, and other departments, writing backend APIs where needed.",
            vi: "Phát triển luồng nghiệp vụ cho Kế toán, QC, R&A và nhiều phòng ban khác, viết thêm API backend khi cần.",
          },
        ],
      },
      {
        label: { en: "Internal social & golf app", vi: "App mạng xã hội nội bộ & golf" },
        period: { en: "2024 – 2025", vi: "2024 – 2025" },
        points: [
          {
            en: "Built the company's internal social app from scratch in Flutter for around 500 employees, with posts, friends, chat, sports clubs, and a GPS golf-scoring module for leadership.",
            vi: "Phát triển từ đầu app mạng xã hội nội bộ bằng Flutter cho khoảng 500 nhân viên: đăng bài, kết bạn, nhắn tin, câu lạc bộ thể thao, cùng module ghi điểm golf có GPS dành cho ban lãnh đạo.",
          },
        ],
      },
    ],
    technologies: [
      "Flutter",
      "React",
      "TypeScript",
      "Capacitor",
      "Firebase",
      "REST API",
      "Dify",
      "LibreChat",
      "LLMs",
    ],
  },
  {
    id: "vitalify-asia",
    company: "Vitalify Asia",
    title: { en: "Mobile Developer", vi: "Mobile Developer" },
    period: { en: "Jan 2022 – Jun 2024", vi: "01/2022 – 06/2024" },
    location: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" },
    summary: {
      en: "An outsourcing company working mainly with Japanese clients. I started on native Android and moved to Flutter a year later.",
      vi: "Công ty outsource, khách hàng chủ yếu là Nhật Bản. Thời gian đầu tôi làm Android native, sau đó chuyển sang Flutter.",
    },
    phases: [
      {
        label: { en: "Flutter", vi: "Flutter" },
        period: { en: "Jan 2023 – Jun 2024", vi: "01/2023 – 06/2024" },
        points: [
          {
            en: "Maintained and extended the company's HRM app for 200+ users, including face-recognition check-in, leave balances, and leave requests.",
            vi: "Maintain và phát triển app HRM nội bộ cho hơn 200 người dùng: chấm công bằng nhận diện khuôn mặt, theo dõi ngày phép, tạo đơn nghỉ phép.",
          },
          {
            en: "Built features for a Japanese video streaming app, including channels and paid subscriptions for extra content.",
            vi: "Phát triển tính năng cho app xem video của khách hàng Nhật, có kênh và gói subscription để mở khoá thêm nội dung.",
          },
        ],
      },
      {
        label: { en: "Android", vi: "Android" },
        period: { en: "Jan 2022 – Jan 2023", vi: "01/2022 – 01/2023" },
        points: [
          {
            en: "Worked on a golf app published in Japan, with an online shop, round tracking and scoring, shareable scorecard images and videos, and in-app purchases.",
            vi: "Tham gia phát triển app golf trên store Nhật: bán hàng, theo dõi và ghi điểm trận đấu, tạo ảnh và video từ bảng điểm để chia sẻ, mua hàng trong app.",
          },
          {
            en: "Spent about four months on a health app that reads data from Omron medical devices over Bluetooth Low Energy (BLE).",
            vi: "Khoảng 4 tháng phát triển app sức khoẻ, đồng bộ chỉ số từ thiết bị y tế Omron qua BLE.",
          },
        ],
      },
    ],
    technologies: [
      "Flutter",
      "Kotlin",
      "Java",
      "BLE",
      "Bloc",
      "Provider",
      "Firebase",
      "REST API",
    ],
  },
];

export function getExperience(locale: Locale): ExperienceItem[] {
  return source.map((item) => ({
    id: item.id,
    company: item.company,
    title: tx(item.title, locale),
    period: tx(item.period, locale),
    location: item.location ? tx(item.location, locale) : undefined,
    summary: tx(item.summary, locale),
    phases: item.phases.map((phase) => ({
      label: tx(phase.label, locale),
      period: phase.period ? tx(phase.period, locale) : undefined,
      points: phase.points.map((line) => tx(line, locale)),
    })),
    technologies: item.technologies,
  }));
}
