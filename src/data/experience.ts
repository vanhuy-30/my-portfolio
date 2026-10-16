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
      en: "In-house product work across mobile, web, and AI. I build tools that departments use every day, from the first screen to the API behind it.",
      vi: "Làm sản phẩm in-house trên mobile, web và AI. Tôi xây công cụ mà các phòng ban dùng hằng ngày, từ màn hình đầu tiên đến API phía sau.",
    },
    phases: [
      {
        label: { en: "Restaurant loyalty platform", vi: "Nền tảng loyalty cho nhà hàng" },
        period: { en: "2026 – Present", vi: "2026 – nay" },
        points: [
          {
            en: "Building a loyalty app (Flutter) and its web admin (React, TypeScript, Vite) for a restaurant chain in the group: receipt scanning, points, and rewards.",
            vi: "Đang xây app loyalty (Flutter) và web admin (React, TypeScript, Vite) cho chuỗi nhà hàng trong tập đoàn: quét hoá đơn, tích điểm, đổi quà.",
          },
        ],
      },
      {
        label: { en: "AI automation", vi: "Tự động hoá bằng AI" },
        period: { en: "2025 – Present", vi: "2025 – nay" },
        points: [
          {
            en: "Built 8+ AI features on Dify, LibreChat, and local LLMs: internal chat, a RAG agent over company documents, and agents that file leave requests, IT tickets, and meeting-room bookings.",
            vi: "Xây 8+ chức năng AI trên Dify, LibreChat và LLM local: chat nội bộ, RAG agent trên tài liệu công ty, và các agent tạo đơn nghỉ phép, IT ticket, đặt phòng họp.",
          },
          {
            en: "Moved every AI feature from the OpenAI API to local LLMs so internal data stays in-house.",
            vi: "Chuyển toàn bộ chức năng AI từ API OpenAI sang LLM local để dữ liệu nội bộ không ra ngoài.",
          },
          {
            en: "Built department-specific tools for payment vouchers, payment checks, and QC voice review.",
            vi: "Làm công cụ riêng cho từng phòng ban: tạo phiếu thanh toán, kiểm tra thanh toán, QC giọng nói.",
          },
        ],
      },
      {
        label: { en: "M System (HR & operations app)", vi: "M System (app nhân sự & vận hành)" },
        period: { en: "2025 – Present", vi: "2025 – nay" },
        points: [
          {
            en: "Maintain and extend M System, used by ~500 employees on web and mobile from one React codebase. It covers HRM and selected ERP features, alongside the separate ERP and HRM sites.",
            vi: "Bảo trì và phát triển M System cho khoảng 500 nhân viên, chạy trên web và mobile từ một codebase React. App gồm các chức năng HRM và một số chức năng ERP, song song với trang ERP và HRM riêng.",
          },
          {
            en: "Shipped attendance, leave and business-trip requests, a custom calendar synced with Outlook, monthly performance reviews, a newsfeed, and an Odoo-linked learning module.",
            vi: "Làm chấm công, đơn nghỉ phép và công tác, calendar tự xây đồng bộ Outlook, đánh giá performance hàng tháng, bảng tin và module learning liên kết Odoo.",
          },
          {
            en: "Built workflows for Accounting, QC, R&A, and other departments, and wrote backend APIs where features needed them.",
            vi: "Xây luồng nghiệp vụ cho Kế toán, QC, R&A và các phòng ban khác, đồng thời viết API backend khi tính năng cần.",
          },
        ],
      },
      {
        label: { en: "Internal social & golf app", vi: "App mạng xã hội nội bộ & golf" },
        period: { en: "2024 – 2025", vi: "2024 – 2025" },
        points: [
          {
            en: "Built the internal social app from scratch in Flutter for ~500 employees: posts, friends, chat, sports clubs, and a GPS golf-scoring module for leadership.",
            vi: "Xây từ đầu app mạng xã hội nội bộ bằng Flutter cho khoảng 500 nhân viên: đăng bài, kết bạn, nhắn tin, câu lạc bộ thể thao và module ghi điểm golf có GPS cho ban lãnh đạo.",
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
      en: "Outsourcing work, mostly for Japanese clients. I started on native Android, then moved to Flutter.",
      vi: "Làm outsource, chủ yếu cho khách hàng Nhật. Tôi bắt đầu với Android native, sau đó chuyển sang Flutter.",
    },
    phases: [
      {
        label: { en: "Flutter", vi: "Flutter" },
        period: { en: "Jan 2023 – Jun 2024", vi: "01/2023 – 06/2024" },
        points: [
          {
            en: "Maintained and extended the company HRM app for 200+ users: face-recognition check-in, leave balance tracking, and leave requests.",
            vi: "Bảo trì và phát triển app HRM của công ty cho hơn 200 người dùng: chấm công bằng khuôn mặt, theo dõi ngày phép, tạo đơn nghỉ phép.",
          },
          {
            en: "Built features for a Japanese video app with channels and subscriptions that unlock more content.",
            vi: "Làm tính năng cho một app video của khách hàng Nhật, có channel và subscription để mở khoá thêm nội dung.",
          },
        ],
      },
      {
        label: { en: "Android", vi: "Android" },
        period: { en: "Jan 2022 – Jan 2023", vi: "01/2022 – 01/2023" },
        points: [
          {
            en: "Worked on a golf app on the Japanese stores: shop, round tracking and scoring, scorecard images and videos for sharing, and in-app purchases.",
            vi: "Làm app golf trên store Nhật: bán hàng, theo dõi và ghi điểm trận, tạo ảnh và video từ bảng điểm để chia sẻ, mua trong ứng dụng.",
          },
          {
            en: "Spent about four months on a health app that syncs readings from Omron medical devices over BLE.",
            vi: "Khoảng 4 tháng làm app sức khoẻ đồng bộ dữ liệu từ thiết bị y tế Omron qua BLE.",
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
