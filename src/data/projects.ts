import { tx, type Copy } from "@/lib/copy";
import type { Locale, Project, ProjectCategory, ProjectLinks } from "@/types";

interface SourceProject {
  id: string;
  category: ProjectCategory;
  featured?: boolean;
  name: Copy;
  role: Copy;
  shortDescription: Copy;
  technologies: string[];
  features: Copy[];
  challenges: Copy[];
  outcome: Copy;
  links?: ProjectLinks;
  images: string[];
  caseStudy: {
    overview: Copy;
    problem: Copy;
    solution: Copy;
    contribution: Copy;
    technicalDecisions: Copy[];
    challenges: Copy[];
    results: Copy[];
  };
}

const source: SourceProject[] = [
  {
    id: "employee-golf-social",
    category: "mobile",
    featured: true,
    name: {
      en: "Employee Golf & Social Platform",
      vi: "Nền tảng Golf và mạng xã hội nội bộ",
    },
    role: {
      en: "Flutter Developer, Motives Vietnam",
      vi: "Flutter Developer, Motives Vietnam",
    },
    shortDescription: {
      en: "Internal Flutter app for golf scoring, maps, and employee social updates. Built for 500+ people.",
      vi: "Ứng dụng Flutter nội bộ: điểm golf, bản đồ và cập nhật xã hội. Phục vụ hơn 500 người.",
    },
    technologies: ["Flutter", "Provider", "Firebase", "REST API", "Google Maps"],
    features: [
      { en: "Golf score tracking", vi: "Ghi điểm golf" },
      { en: "Map navigation", vi: "Điều hướng bản đồ" },
      { en: "Social posts and comments", vi: "Bài viết và bình luận" },
      { en: "Push notifications", vi: "Thông báo đẩy" },
      { en: "Club announcements", vi: "Thông báo câu lạc bộ" },
    ],
    challenges: [
      {
        en: "Maps, tracking, and a social feed had to feel like one product.",
        vi: "Bản đồ, theo dõi và feed xã hội phải như một sản phẩm.",
      },
      {
        en: "State had to stay predictable across feature modules.",
        vi: "State phải đoán được giữa các module tính năng.",
      },
    ],
    outcome: {
      en: "Built and released on the App Store and Google Play.",
      vi: "Xây và phát hành trên App Store và Google Play.",
    },
    images: ["/images/project-golf-app.jpg"],
    caseStudy: {
      overview: {
        en: "An employee app that combines golf scoring, activity, maps, and social features in Flutter.",
        vi: "Ứng dụng nội bộ gộp điểm golf, hoạt động, bản đồ và tính năng xã hội trên Flutter.",
      },
      problem: {
        en: "Employees needed one place for golf activity, colleague updates, and club news.",
        vi: "Nhân viên cần một chỗ cho hoạt động golf, cập nhật đồng nghiệp và tin câu lạc bộ.",
      },
      solution: {
        en: "A feature-based Flutter app with Firebase, REST, and Google Maps.",
        vi: "App Flutter theo feature, dùng Firebase, REST và Google Maps.",
      },
      contribution: {
        en: "Owned the mobile implementation, including social features on Firestore and Cloud Messaging.",
        vi: "Phụ trách phần mobile, gồm tính năng xã hội trên Firestore và Cloud Messaging.",
      },
      technicalDecisions: [
        {
          en: "Flutter so iOS and Android shared one codebase.",
          vi: "Flutter để iOS và Android dùng chung một codebase.",
        },
        {
          en: "Provider for state across feature modules.",
          vi: "Provider cho state giữa các module.",
        },
        {
          en: "Firebase plus REST for auth, feed data, and notifications.",
          vi: "Firebase và REST cho auth, dữ liệu feed và thông báo.",
        },
      ],
      challenges: [
        {
          en: "Keeping maps and the social feed coherent in one navigation model.",
          vi: "Giữ bản đồ và feed xã hội mạch lạc trong một mô hình điều hướng.",
        },
        {
          en: "Holding frame rate on both mid-range and high-end phones.",
          vi: "Giữ frame rate trên cả máy tầm trung và máy cao cấp.",
        },
      ],
      results: [
        {
          en: "Released on the App Store and Google Play.",
          vi: "Phát hành trên App Store và Google Play.",
        },
        {
          en: "Used by 500+ employees.",
          vi: "Hơn 500 nhân viên sử dụng.",
        },
      ],
    },
  },
  {
    id: "enterprise-erp-hrm",
    category: "web",
    name: {
      en: "ERP and HRM Workspace",
      vi: "Không gian ERP và HRM",
    },
    role: {
      en: "Frontend Developer, Motives Vietnam",
      vi: "Frontend Developer, Motives Vietnam",
    },
    shortDescription: {
      en: "Web and mobile workspace for ERP, HRM, and internal communication, from one React codebase.",
      vi: "Không gian web và mobile cho ERP, HRM và truyền thông nội bộ, từ một codebase React.",
    },
    technologies: ["React", "TypeScript", "Capacitor", "REST API"],
    features: [
      { en: "Shared UI system", vi: "Hệ UI dùng chung" },
      { en: "Web and mobile from one codebase", vi: "Web và mobile từ một codebase" },
      { en: "REST-backed HR and ERP flows", vi: "Luồng HR và ERP qua REST" },
    ],
    challenges: [
      {
        en: "Hybrid screens had to stay fast while talking to large REST payloads.",
        vi: "Màn hybrid phải nhanh khi nhận payload REST lớn.",
      },
    ],
    outcome: {
      en: "One UI system served both the browser app and the Capacitor shell.",
      vi: "Một hệ UI phục vụ cả app trên trình duyệt và lớp Capacitor.",
    },
    images: ["/images/project-erp-hrm.jpg"],
    caseStudy: {
      overview: {
        en: "A cross-platform workspace for ERP, HRM, and internal communication.",
        vi: "Không gian đa nền tảng cho ERP, HRM và truyền thông nội bộ.",
      },
      problem: {
        en: "Web and mobile were drifting into separate UI implementations.",
        vi: "Web và mobile đang lệch thành hai bản UI riêng.",
      },
      solution: {
        en: "React and TypeScript with Capacitor, plus a reusable component layer.",
        vi: "React và TypeScript với Capacitor, cộng một lớp component dùng lại.",
      },
      contribution: {
        en: "Led the frontend and the shared UI system.",
        vi: "Dẫn phần frontend và hệ UI dùng chung.",
      },
      technicalDecisions: [
        {
          en: "Capacitor so native shells reused the web UI.",
          vi: "Capacitor để lớp native dùng lại UI web.",
        },
        {
          en: "A component system before adding more product surfaces.",
          vi: "Làm hệ component trước khi thêm bề mặt sản phẩm.",
        },
      ],
      challenges: [
        {
          en: "Native integration without giving up a single codebase.",
          vi: "Tích hợp native mà không tách codebase.",
        },
      ],
      results: [
        {
          en: "Web and mobile shipped from the same UI system.",
          vi: "Web và mobile ra từ cùng một hệ UI.",
        },
      ],
    },
  },
  {
    id: "hr-management",
    category: "mobile",
    name: {
      en: "HR Management App",
      vi: "Ứng dụng quản lý nhân sự",
    },
    role: { en: "Mobile Developer", vi: "Mobile Developer" },
    shortDescription: {
      en: "Internal HR app used by 400+ employees, released through Google Play and TestFlight.",
      vi: "App nhân sự nội bộ cho hơn 400 nhân viên, phát hành qua Google Play và TestFlight.",
    },
    technologies: ["Flutter", "Clean Architecture", "REST API", "TestFlight"],
    features: [
      { en: "HR workflows for employees", vi: "Luồng nhân sự cho nhân viên" },
      { en: "Store release process", vi: "Quy trình phát hành store" },
      { en: "Legacy module refactors", vi: "Tái cấu trúc module cũ" },
    ],
    challenges: [
      {
        en: "Older modules had to be refactored without stopping releases.",
        vi: "Module cũ phải được sửa mà không dừng lịch phát hành.",
      },
    ],
    outcome: {
      en: "Kept a 400+ user HR app maintainable and shipping on both stores.",
      vi: "Giữ app nhân sự hơn 400 người dễ bảo trì và vẫn lên cả hai store.",
    },
    images: ["/images/project-hr-app.jpg"],
    caseStudy: {
      overview: {
        en: "An internal HR mobile app with a Clean Architecture structure.",
        vi: "App mobile nhân sự nội bộ theo Clean Architecture.",
      },
      problem: {
        en: "Legacy modules were slowing changes and making releases riskier.",
        vi: "Module cũ làm thay đổi chậm và bản phát hành rủi ro hơn.",
      },
      solution: {
        en: "A scalable module layout, tighter API handling, and a regular store release flow.",
        vi: "Bố cục module mở rộng được, xử lý API gọn hơn và lịch phát hành store đều.",
      },
      contribution: {
        en: "Built and maintained the app, including Play Console and TestFlight releases.",
        vi: "Xây và bảo trì app, gồm phát hành trên Play Console và TestFlight.",
      },
      technicalDecisions: [
        {
          en: "Clean Architecture so HR features could be reused.",
          vi: "Clean Architecture để tính năng nhân sự dùng lại được.",
        },
        {
          en: "Refactor legacy modules instead of rewriting the app.",
          vi: "Sửa module cũ thay vì viết lại cả app.",
        },
      ],
      challenges: [
        {
          en: "Cutting technical debt while release trains kept moving.",
          vi: "Giảm nợ kỹ thuật trong lúc lịch phát hành vẫn chạy.",
        },
      ],
      results: [
        {
          en: "In use by 400+ employees.",
          vi: "Hơn 400 nhân viên đang dùng.",
        },
        {
          en: "Releases managed on Google Play and TestFlight.",
          vi: "Bản phát hành quản lý trên Google Play và TestFlight.",
        },
      ],
    },
  },
  {
    id: "video-streaming",
    category: "mobile",
    name: {
      en: "Video Streaming Platform",
      vi: "Nền tảng phát video",
    },
    role: {
      en: "Flutter Developer, Vitalify Asia",
      vi: "Flutter Developer, Vitalify Asia",
    },
    shortDescription: {
      en: "Playback, browsing, and interaction for a high-traffic, YouTube-like video app.",
      vi: "Phát video, duyệt nội dung và tương tác cho app video lưu lượng cao, kiểu YouTube.",
    },
    technologies: ["Flutter", "REST API", "Firebase", "Clean Architecture", "Bloc"],
    features: [
      { en: "Video playback", vi: "Phát video" },
      { en: "Content browsing", vi: "Duyệt nội dung" },
      { en: "User interaction", vi: "Tương tác người dùng" },
    ],
    challenges: [
      {
        en: "Playback had to stay smooth while media payloads grew.",
        vi: "Phát video phải mượt khi payload media tăng.",
      },
    ],
    outcome: {
      en: "Core viewing flows shipped against APIs built for large media volume.",
      vi: "Các luồng xem chính chạy trên API làm cho khối lượng media lớn.",
    },
    images: ["/images/project-video-streaming.jpg"],
    caseStudy: {
      overview: {
        en: "A high-traffic video app with playback, browsing, and user interaction.",
        vi: "App video lưu lượng cao với phát, duyệt và tương tác.",
      },
      problem: {
        en: "Loading and data flow were getting in the way of smooth playback.",
        vi: "Cách tải và luồng dữ liệu đang cản phát video mượt.",
      },
      solution: {
        en: "Flutter with Clean Architecture, Provider, and Bloc, integrated with media APIs.",
        vi: "Flutter với Clean Architecture, Provider và Bloc, nối API media.",
      },
      contribution: {
        en: "Built the main viewing features and worked with backend on media APIs.",
        vi: "Làm các tính năng xem chính và phối hợp backend về API media.",
      },
      technicalDecisions: [
        {
          en: "Clean Architecture so playback, browse, and interaction stayed separate.",
          vi: "Clean Architecture để phát, duyệt và tương tác tách nhau.",
        },
        {
          en: "Bloc and Provider for different kinds of UI state.",
          vi: "Bloc và Provider cho các loại UI state khác nhau.",
        },
      ],
      challenges: [
        {
          en: "Keeping playback smooth as content volume grew.",
          vi: "Giữ phát mượt khi lượng nội dung tăng.",
        },
      ],
      results: [
        {
          en: "Viewing, browsing, and interaction shipped in one Flutter app.",
          vi: "Xem, duyệt và tương tác nằm trong một app Flutter.",
        },
      ],
    },
  },
  {
    id: "medical-device-apps",
    category: "mobile",
    name: {
      en: "Medical Device Apps",
      vi: "Ứng dụng thiết bị y tế",
    },
    role: {
      en: "Android and iOS Developer, Vitalify Asia",
      vi: "Android và iOS Developer, Vitalify Asia",
    },
    shortDescription: {
      en: "Android and iOS companion apps with BLE sync for Omron medical devices.",
      vi: "App đi kèm Android và iOS, đồng bộ BLE với thiết bị y tế Omron.",
    },
    technologies: ["Flutter", "Kotlin", "Swift", "BLE", "Firebase", "WebSocket"],
    features: [
      { en: "Omron device sync", vi: "Đồng bộ thiết bị Omron" },
      { en: "Multimedia playback", vi: "Phát multimedia" },
      { en: "Chatbot and push notifications", vi: "Chatbot và thông báo đẩy" },
      { en: "In-app purchase", vi: "Mua trong ứng dụng" },
    ],
    challenges: [
      {
        en: "BLE sessions had to stay reliable next to media and chat features.",
        vi: "Phiên BLE phải ổn định cạnh các tính năng media và chat.",
      },
    ],
    outcome: {
      en: "Companion apps synced live device data and shipped the surrounding product features.",
      vi: "App đi kèm đồng bộ dữ liệu thiết bị trực tiếp và có đủ tính năng sản phẩm xung quanh.",
    },
    images: ["/images/project-medical-ble.jpg"],
    caseStudy: {
      overview: {
        en: "Mobile apps that talk to Omron devices and cover media, chat, and purchases.",
        vi: "App mobile nói chuyện với thiết bị Omron, kèm media, chat và mua hàng.",
      },
      problem: {
        en: "Device data, media, and chat were competing for a stable UI.",
        vi: "Dữ liệu thiết bị, media và chat cùng tranh một UI ổn định.",
      },
      solution: {
        en: "Native and Flutter work with BLE, REST, WebSocket, and Firebase.",
        vi: "Phần native và Flutter với BLE, REST, WebSocket và Firebase.",
      },
      contribution: {
        en: "Built connectivity, multimedia, chatbot, notifications, and in-app purchase.",
        vi: "Làm kết nối, multimedia, chatbot, thông báo và mua trong ứng dụng.",
      },
      technicalDecisions: [
        {
          en: "BLE for Omron device sessions.",
          vi: "BLE cho phiên thiết bị Omron.",
        },
        {
          en: "Profiling passes aimed at responsiveness, not new features.",
          vi: "Các lượt đo hiệu năng nhắm vào độ phản hồi, không thêm tính năng.",
        },
      ],
      challenges: [
        {
          en: "Keeping the UI responsive during sync and media playback.",
          vi: "Giữ UI phản hồi trong lúc đồng bộ và phát media.",
        },
      ],
      results: [
        {
          en: "Live sync with Omron medical and IoT devices.",
          vi: "Đồng bộ trực tiếp với thiết bị y tế và IoT Omron.",
        },
      ],
    },
  },
  {
    id: "flutter-starter-kit",
    category: "personal",
    name: {
      en: "Flutter Starter Kit",
      vi: "Flutter Starter Kit",
    },
    role: { en: "Personal project", vi: "Dự án cá nhân" },
    shortDescription: {
      en: "A reusable Flutter starter with Clean Architecture, Atomic Design, and shared UI pieces.",
      vi: "Bộ khởi đầu Flutter dùng lại, theo Clean Architecture, Atomic Design và UI dùng chung.",
    },
    technologies: ["Flutter", "Provider", "Bloc", "Firebase", "Hive"],
    features: [
      { en: "Modular project structure", vi: "Cấu trúc dự án theo module" },
      { en: "Reusable UI components", vi: "Component UI dùng lại" },
      { en: "Standard state management", vi: "State management thống nhất" },
    ],
    challenges: [
      {
        en: "The kit had to stay small enough that a new app could start from it.",
        vi: "Bộ kit phải đủ gọn để một app mới bắt đầu từ nó.",
      },
    ],
    outcome: {
      en: "New Flutter apps start from the same structure instead of a blank project.",
      vi: "App Flutter mới bắt đầu từ cùng một cấu trúc, không từ project trống.",
    },
    images: ["/images/project-flutter-starter.jpg"],
    caseStudy: {
      overview: {
        en: "A starter kit for Flutter apps that follow Clean Architecture and Atomic Design.",
        vi: "Bộ starter cho app Flutter theo Clean Architecture và Atomic Design.",
      },
      problem: {
        en: "Each new app was rebuilding the same folders, state setup, and UI primitives.",
        vi: "Mỗi app mới lại dựng lại thư mục, state và UI cơ bản.",
      },
      solution: {
        en: "A modular starter with shared components, state conventions, and local storage via Hive.",
        vi: "Starter theo module, component dùng chung, quy ước state và lưu cục bộ bằng Hive.",
      },
      contribution: {
        en: "Designed and built the kit as a personal project.",
        vi: "Thiết kế và xây bộ kit như một dự án cá nhân.",
      },
      technicalDecisions: [
        {
          en: "Clean Architecture plus Atomic Design for the folder and UI rules.",
          vi: "Clean Architecture và Atomic Design cho quy tắc thư mục và UI.",
        },
        {
          en: "Provider and Bloc available so a new app can pick one.",
          vi: "Có sẵn Provider và Bloc để app mới chọn một hướng.",
        },
      ],
      challenges: [
        {
          en: "Keeping the starter opinionated without blocking the next app's choices.",
          vi: "Giữ starter có chủ kiến mà không chặn lựa chọn của app sau.",
        },
      ],
      results: [
        {
          en: "Faster kickoff and more consistent Flutter code.",
          vi: "Bắt đầu nhanh hơn và code Flutter nhất quán hơn.",
        },
      ],
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return source.map((project) => ({
    id: project.id,
    category: project.category,
    featured: project.featured,
    name: tx(project.name, locale),
    role: tx(project.role, locale),
    shortDescription: tx(project.shortDescription, locale),
    technologies: project.technologies,
    features: project.features.map((item) => tx(item, locale)),
    challenges: project.challenges.map((item) => tx(item, locale)),
    outcome: tx(project.outcome, locale),
    links: project.links ?? {},
    images: project.images.length
      ? project.images
      : ["/images/project-placeholder.png"],
    caseStudy: {
      overview: tx(project.caseStudy.overview, locale),
      problem: tx(project.caseStudy.problem, locale),
      solution: tx(project.caseStudy.solution, locale),
      contribution: tx(project.caseStudy.contribution, locale),
      technicalDecisions: project.caseStudy.technicalDecisions.map((item) =>
        tx(item, locale)
      ),
      challenges: project.caseStudy.challenges.map((item) => tx(item, locale)),
      results: project.caseStudy.results.map((item) => tx(item, locale)),
    },
  }));
}
