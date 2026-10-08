import { tx, type Copy } from "@/lib/copy";
import type { ExperienceItem, Locale } from "@/types";

interface SourceRole {
  title: Copy;
  startDate: Copy;
  endDate: Copy;
  current?: boolean;
  responsibilities: Copy[];
  technologies: string[];
  achievements: Copy[];
}

interface SourceItem {
  id: string;
  company: string;
  location?: Copy;
  roles: SourceRole[];
}

const source: SourceItem[] = [
  {
    id: "motives-vietnam",
    company: "Motives Vietnam",
    location: { en: "Ho Chi Minh City", vi: "Thành phố Hồ Chí Minh" },
    roles: [
      {
        title: { en: "Flutter Developer", vi: "Flutter Developer" },
        startDate: { en: "August 2024", vi: "Tháng 8, 2024" },
        endDate: { en: "Present", vi: "Hiện tại" },
        current: true,
        responsibilities: [
          {
            en: "Led a core mobile app used by 500+ employees, built with Flutter.",
            vi: "Dẫn dắt ứng dụng mobile lõi cho hơn 500 nhân viên, viết bằng Flutter.",
          },
          {
            en: "Built newsfeeds, comments, and notifications with Firestore and Cloud Messaging.",
            vi: "Làm newsfeed, bình luận và thông báo với Firestore và Cloud Messaging.",
          },
          {
            en: "Profiled and debugged frame rate and stability on mid-range and high-end devices.",
            vi: "Đo và sửa frame rate, độ ổn định trên máy tầm trung và máy cao cấp.",
          },
        ],
        technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud Messaging"],
        achievements: [
          {
            en: "Shipped a native-feeling employee app still in active use.",
            vi: "Đưa vào dùng ứng dụng nội bộ có cảm giác gần native.",
          },
        ],
      },
      {
        title: {
          en: "Frontend Developer (React + Capacitor)",
          vi: "Frontend Developer (React + Capacitor)",
        },
        startDate: { en: "August 2024", vi: "Tháng 8, 2024" },
        endDate: { en: "Present", vi: "Hiện tại" },
        current: true,
        responsibilities: [
          {
            en: "Led a cross-platform app for ERP, HRM, and internal communication from one React and TypeScript codebase.",
            vi: "Dẫn dắt ứng dụng đa nền tảng cho ERP, HRM và truyền thông nội bộ từ một codebase React và TypeScript.",
          },
          {
            en: "Built a reusable UI system so features stayed consistent across web and mobile.",
            vi: "Xây hệ UI dùng lại để tính năng nhất quán trên web và mobile.",
          },
          {
            en: "Tuned hybrid performance and native integration while working with REST APIs.",
            vi: "Tối ưu hiệu năng hybrid và tích hợp native khi làm việc với REST API.",
          },
        ],
        technologies: ["React", "TypeScript", "Capacitor", "REST API"],
        achievements: [
          {
            en: "One codebase covered both the web app and the mobile shell.",
            vi: "Một codebase phục vụ cả web và lớp vỏ mobile.",
          },
        ],
      },
    ],
  },
  {
    id: "vitalify-asia",
    company: "Vitalify Asia",
    location: { en: "Ho Chi Minh City", vi: "Thành phố Hồ Chí Minh" },
    roles: [
      {
        title: { en: "Flutter Developer", vi: "Flutter Developer" },
        startDate: { en: "January 2022", vi: "Tháng 1, 2022" },
        endDate: { en: "July 2024", vi: "Tháng 7, 2024" },
        responsibilities: [
          {
            en: "Built playback, browsing, and interaction for a high-traffic video streaming app.",
            vi: "Làm phát video, duyệt nội dung và tương tác cho ứng dụng streaming lưu lượng cao.",
          },
          {
            en: "Improved loading and data flow so playback stayed smooth at scale.",
            vi: "Cải thiện tải và luồng dữ liệu để phát video mượt khi số lượng lớn.",
          },
          {
            en: "Worked with backend teams on APIs for large volumes of media.",
            vi: "Làm việc với team backend về API cho khối lượng media lớn.",
          },
        ],
        technologies: [
          "Flutter",
          "REST API",
          "Firebase",
          "Clean Architecture",
          "Provider",
          "Bloc",
        ],
        achievements: [
          {
            en: "Shipped core viewing flows for a YouTube-like product.",
            vi: "Đưa các luồng xem chính cho sản phẩm kiểu YouTube.",
          },
        ],
      },
      {
        title: {
          en: "Android and iOS Developer",
          vi: "Android và iOS Developer",
        },
        startDate: { en: "January 2022", vi: "Tháng 1, 2022" },
        endDate: { en: "July 2024", vi: "Tháng 7, 2024" },
        responsibilities: [
          {
            en: "Maintained Android and iOS apps with REST APIs, BLE, and tighter UI performance.",
            vi: "Bảo trì ứng dụng Android và iOS với REST API, BLE và UI nhanh hơn.",
          },
          {
            en: "Integrated Omron medical devices for live data sync.",
            vi: "Tích hợp thiết bị y tế Omron để đồng bộ dữ liệu theo thời gian thực.",
          },
          {
            en: "Shipped multimedia, chatbot, push notifications, and in-app purchase.",
            vi: "Làm multimedia, chatbot, push notification và mua trong ứng dụng.",
          },
        ],
        technologies: [
          "Flutter",
          "Kotlin",
          "Java",
          "Swift",
          "BLE",
          "Firebase",
          "WebSocket",
        ],
        achievements: [
          {
            en: "Connected companion apps to Omron devices over BLE.",
            vi: "Nối ứng dụng đi kèm với thiết bị Omron qua BLE.",
          },
        ],
      },
    ],
  },
];

export function getExperience(locale: Locale): ExperienceItem[] {
  return source.map((item) => ({
    id: item.id,
    company: item.company,
    location: item.location ? tx(item.location, locale) : undefined,
    roles: item.roles.map((role) => ({
      title: tx(role.title, locale),
      startDate: tx(role.startDate, locale),
      endDate: tx(role.endDate, locale),
      current: role.current,
      responsibilities: role.responsibilities.map((line) => tx(line, locale)),
      technologies: role.technologies,
      achievements: role.achievements.map((line) => tx(line, locale)),
    })),
  }));
}
