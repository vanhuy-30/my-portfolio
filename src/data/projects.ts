import { tx, type Copy } from "@/lib/copy";
import type {
  Locale,
  OtherWorkItem,
  Project,
  ProjectCoverIcon,
  ProjectKind,
  ProjectLinks,
} from "@/types";

interface SourceProject {
  id: string;
  kind: ProjectKind;
  featured?: boolean;
  nda?: boolean;
  inProgress?: boolean;
  name: Copy;
  company?: string;
  period: Copy;
  role: Copy;
  shortDescription: Copy;
  technologies: string[];
  metrics: { value: Copy; label: Copy }[];
  links?: ProjectLinks;
  image?: string;
  coverIcon?: ProjectCoverIcon;
  caseStudy: {
    context: Copy;
    built: Copy[];
    decisions: Copy[];
    results: Copy[];
  };
}

const same = (text: string): Copy => ({ en: text, vi: text });

const source: SourceProject[] = [
  {
    id: "m-system",
    kind: "work",
    featured: true,
    nda: true,
    name: { en: "M System: HR & Operations App", vi: "M System: Ứng dụng nhân sự & vận hành" },
    company: "Motives Vietnam",
    period: { en: "2025 – Present", vi: "2025 – nay" },
    role: { en: "Software Engineer, web and mobile", vi: "Software Engineer, web và mobile" },
    shortDescription: {
      en: "The app employees use every day for attendance, leave, performance reviews, company news, training, and parts of the ERP. Web and mobile share one React codebase.",
      vi: "Ứng dụng nhân viên dùng mỗi ngày: chấm công, nghỉ phép, đánh giá hiệu suất, bảng tin, đào tạo và một phần nghiệp vụ ERP. Web và mobile dùng chung một codebase React.",
    },
    technologies: ["React", "TypeScript", "JavaScript", "Capacitor", "REST API", "Outlook", "Odoo"],
    metrics: [
      { value: same("~500"), label: { en: "employees", vi: "nhân viên" } },
      { value: same("1"), label: { en: "codebase for web + mobile", vi: "codebase cho web + mobile" } },
    ],
    image: "/images/project-erp-hrm.jpg",
    caseStudy: {
      context: {
        en: "Motives runs on several in-house systems, including separate ERP and HRM web apps for specialized work. M System pulls the HR features and the most-used parts of the ERP into one app that works in the browser and on phones.",
        vi: "Motives dùng nhiều hệ thống nội bộ, trong đó có trang ERP và HRM riêng cho các nghiệp vụ chuyên sâu. M System gom các chức năng HRM và những phần ERP hay dùng nhất vào một ứng dụng, dùng được cả trên trình duyệt lẫn điện thoại.",
      },
      built: [
        {
          en: "Attendance, plus requests for leave, family events, and business trips, each with its own approval flow.",
          vi: "Chấm công; đơn nghỉ phép, hiếu hỷ, công tác kèm luồng phê duyệt.",
        },
        {
          en: "A custom calendar that syncs with Outlook.",
          vi: "Lịch làm việc tự phát triển, đồng bộ với Outlook.",
        },
        {
          en: "Monthly performance scoring and reviews, an internal newsfeed, and a learning module linked to Odoo.",
          vi: "Chấm điểm và đánh giá hiệu suất hằng tháng, bảng tin nội bộ, module đào tạo liên kết với Odoo.",
        },
        {
          en: "Selected ERP workflows for Accounting, QC, R&A, and other departments, plus backend APIs where needed.",
          vi: "Một phần nghiệp vụ ERP cho Kế toán, QC, R&A và các phòng ban khác, viết thêm API backend khi cần.",
        },
      ],
      decisions: [
        {
          en: "Capacitor wraps the same React app for mobile, so each feature only has to be built once.",
          vi: "Dùng Capacitor để đóng gói chính app React thành app mobile, nên mỗi tính năng chỉ cần làm một lần cho cả hai nền tảng.",
        },
        {
          en: "Everyday tasks live in M System, while specialized modules stay in the dedicated ERP and HRM systems.",
          vi: "Các việc hằng ngày đưa vào M System, còn module chuyên sâu vẫn để ở trang ERP và HRM riêng.",
        },
        {
          en: "Integrated with Outlook and Odoo rather than rebuilding tools people already use.",
          vi: "Tích hợp với Outlook và Odoo thay vì làm lại những công cụ các phòng ban đang dùng.",
        },
      ],
      results: [
        {
          en: "Used daily by ~500 employees across departments.",
          vi: "Khoảng 500 nhân viên ở nhiều phòng ban sử dụng hằng ngày.",
        },
      ],
    },
  },
  {
    id: "ai-automation",
    coverIcon: "sparkles",
    kind: "work",
    featured: true,
    nda: true,
    name: { en: "AI Workplace Automation", vi: "Ứng dụng AI vào công việc" },
    company: "Motives Vietnam",
    period: { en: "2025 – Present", vi: "2025 – nay" },
    role: { en: "Software Engineer, AI tooling", vi: "Software Engineer, AI tooling" },
    shortDescription: {
      en: "An internal chatbot, a RAG agent for company documents, and agents that fill out requests for employees. Everything runs on self-hosted models, so company data never leaves our servers.",
      vi: "Chatbot nội bộ, RAG agent tra cứu tài liệu và các agent tạo đơn, phiếu thay cho nhân viên. Toàn bộ chạy trên LLM nội bộ nên dữ liệu không ra khỏi công ty.",
    },
    technologies: ["Dify", "LibreChat", "Self-hosted LLMs", "RAG", "AI agents"],
    metrics: [
      { value: same("8+"), label: { en: "AI features in production", vi: "tính năng AI đang vận hành" } },
      { value: same("100%"), label: { en: "self-hosted", vi: "chạy trên LLM nội bộ" } },
    ],
    caseStudy: {
      context: {
        en: "Part of the company's digital transformation. The goal was to give each department useful AI tools without sending internal data to outside AI services.",
        vi: "Nằm trong kế hoạch chuyển đổi số của công ty: đưa AI vào công việc của từng phòng ban mà không phải gửi dữ liệu nội bộ lên các dịch vụ AI bên ngoài.",
      },
      built: [
        {
          en: "A company-wide chatbot and a RAG agent that answers questions from internal documents.",
          vi: "Chatbot AI cho toàn công ty và RAG agent trả lời dựa trên tài liệu nội bộ.",
        },
        {
          en: "Agents that create leave requests, IT tickets, and meeting-room bookings from a single chat message.",
          vi: "Các agent tạo đơn nghỉ phép, IT ticket và đặt phòng họp chỉ qua một tin nhắn.",
        },
        {
          en: "Tools for specific departments, such as payment voucher creation, payment checks, and QC voice review.",
          vi: "Công cụ riêng cho từng phòng ban: tạo phiếu thanh toán, kiểm tra thanh toán, QC giọng nói.",
        },
      ],
      decisions: [
        {
          en: "Dify for agent and workflow orchestration, LibreChat as the chat front end, and self-hosted LLMs for privacy.",
          vi: "Dify để điều phối agent và workflow, LibreChat làm giao diện chat, LLM tự host để bảo mật dữ liệu.",
        },
        {
          en: "Agents call actions that already exist in our systems, so anything the AI creates still goes through the normal approval flow.",
          vi: "Agent gọi đúng những thao tác sẵn có trong hệ thống, nên yêu cầu do AI tạo vẫn đi qua luồng phê duyệt như khi nhân viên tự làm.",
        },
        {
          en: "We started on the OpenAI API, then moved everything to self-hosted LLMs so internal data never leaves the company.",
          vi: "Giai đoạn đầu dùng API của OpenAI, sau đó chuyển toàn bộ sang LLM nội bộ để dữ liệu không ra khỏi công ty.",
        },
      ],
      results: [
        {
          en: "8+ AI features in use across departments.",
          vi: "Hơn 8 tính năng AI đang được các phòng ban sử dụng.",
        },
        {
          en: "Routine requests now take a single chat message instead of a form.",
          vi: "Những yêu cầu thường ngày chỉ cần nhắn một tin, không phải điền form.",
        },
      ],
    },
  },
  {
    id: "social-golf-app",
    kind: "work",
    featured: true,
    nda: true,
    name: { en: "Internal Social & Golf App", vi: "App mạng xã hội nội bộ & Golf" },
    company: "Motives Vietnam",
    period: { en: "2024 – 2025", vi: "2024 – 2025" },
    role: { en: "Software Engineer, built from scratch", vi: "Software Engineer, phát triển từ đầu" },
    shortDescription: {
      en: "A social app for employees with posts, friends, chat, and sports clubs, plus a GPS golf-scoring module for leadership.",
      vi: "Mạng xã hội nội bộ với đăng bài, kết bạn, nhắn tin, câu lạc bộ thể thao, kèm module ghi điểm golf có GPS dành cho ban lãnh đạo.",
    },
    technologies: ["Flutter", "Firebase", "Firestore", "Cloud Messaging", "Google Maps", "REST API"],
    metrics: [
      { value: same("~500"), label: { en: "employees", vi: "nhân viên" } },
      { value: { en: "0 → 1", vi: "0 → 1" }, label: { en: "built from scratch", vi: "phát triển từ đầu" } },
      { value: same("iOS + Android"), label: { en: "one Flutter codebase", vi: "chung một codebase Flutter" } },
    ],
    image: "/images/project-golf-app.jpg",
    caseStudy: {
      context: {
        en: "The company wanted one place for internal news, connecting with colleagues, and sports clubs. Leadership also wanted a way to track their golf rounds.",
        vi: "Công ty cần một nơi để cập nhật tin nội bộ, kết nối đồng nghiệp và sinh hoạt câu lạc bộ thể thao. Ban lãnh đạo cũng cần theo dõi các trận golf.",
      },
      built: [
        {
          en: "Posts, comments, friends, and real-time chat on Firestore, with push notifications.",
          vi: "Đăng bài, bình luận, kết bạn và nhắn tin real-time trên Firestore, có push notification.",
        },
        {
          en: "Sports club membership and management.",
          vi: "Tham gia và quản lý câu lạc bộ thể thao.",
        },
        {
          en: "A golf module with GPS, course maps, and live scoring.",
          vi: "Module golf có GPS, bản đồ sân và ghi điểm trực tiếp.",
        },
      ],
      decisions: [
        {
          en: "Chose Flutter so a small team could ship on iOS and Android at the same time.",
          vi: "Chọn Flutter để team nhỏ vẫn ra được cả iOS lẫn Android cùng lúc.",
        },
        {
          en: "Used Firestore and Cloud Messaging for the real-time feed and chat instead of building that infrastructure ourselves.",
          vi: "Dùng Firestore và Cloud Messaging cho feed và chat real-time, không phải tự dựng hạ tầng.",
        },
      ],
      results: [
        {
          en: "Released to employees on iOS and Android.",
          vi: "Đã phát hành cho nhân viên trên cả iOS và Android.",
        },
        {
          en: "Leadership tracks golf rounds and scores live in the app.",
          vi: "Ban lãnh đạo theo dõi trận đấu và ghi điểm golf trực tiếp trên app.",
        },
      ],
    },
  },
  {
    id: "restaurant-loyalty",
    coverIcon: "store",
    kind: "work",
    nda: true,
    name: { en: "Restaurant Loyalty Platform", vi: "Nền tảng tích điểm cho chuỗi nhà hàng" },
    company: "Motives Vietnam",
    period: { en: "2026 – Present", vi: "2026 – nay" },
    role: { en: "Software Engineer, app and web admin", vi: "Software Engineer, app và trang quản trị" },
    shortDescription: {
      en: "A membership app and web admin for one of the group's restaurant chains. Customers scan receipts, earn points, and redeem rewards.",
      vi: "App thành viên và trang quản trị cho chuỗi nhà hàng thuộc tập đoàn: quét hoá đơn, tích điểm, đổi quà.",
    },
    technologies: ["Flutter", "React", "TypeScript", "Vite", "REST API"],
    metrics: [
      { value: same("2"), label: { en: "products: app + admin", vi: "sản phẩm: app + trang quản trị" } },
    ],
    caseStudy: {
      context: {
        en: "The group's F&B company needed a loyalty program its restaurants could run themselves.",
        vi: "Công ty F&B trong tập đoàn cần một chương trình khách hàng thân thiết mà các nhà hàng có thể tự vận hành.",
      },
      built: [
        {
          en: "Flutter app for receipt scanning, point balance, and reward redemption.",
          vi: "App Flutter để quét hoá đơn, xem điểm và đổi quà.",
        },
        {
          en: "React + TypeScript admin for members, rewards, and point rules.",
          vi: "Trang quản trị React + TypeScript để quản lý thành viên, quà tặng và quy tắc tích điểm.",
        },
      ],
      decisions: [
        {
          en: "Used Vite to keep the admin fast and lightweight, and Flutter so the team could reuse its mobile experience.",
          vi: "Dùng Vite để trang quản trị nhẹ, build nhanh; dùng Flutter để tận dụng kinh nghiệm mobile sẵn có của team.",
        },
      ],
      results: [
        {
          en: "The app and the admin share one loyalty system.",
          vi: "App và trang quản trị dùng chung một hệ thống tích điểm.",
        },
      ],
    },
  },
  {
    id: "omron-ble",
    kind: "work",
    nda: true,
    name: { en: "Omron Health Companion App", vi: "App sức khoẻ kết nối thiết bị Omron" },
    company: "Vitalify Asia",
    period: { en: "2022 · 4 months", vi: "2022 · 4 tháng" },
    role: { en: "Android Developer, Japanese client", vi: "Android Developer, khách hàng Nhật" },
    shortDescription: {
      en: "An Android health app on the Japanese store that reads measurements from Omron medical devices over BLE.",
      vi: "App sức khoẻ Android trên store Nhật, đọc chỉ số đo từ thiết bị y tế Omron qua BLE.",
    },
    technologies: ["Kotlin", "Java", "BLE", "REST API", "Firebase"],
    metrics: [
      { value: same("BLE"), label: { en: "medical device sync", vi: "đồng bộ thiết bị y tế" } },
    ],
    image: "/images/project-medical-ble.jpg",
    caseStudy: {
      context: {
        en: "A health app for a Japanese client that pairs with Omron devices and keeps all of a user's readings in one place.",
        vi: "App theo dõi sức khoẻ của khách hàng Nhật, kết nối với thiết bị Omron và lưu toàn bộ chỉ số đo của người dùng ở một nơi.",
      },
      built: [
        {
          en: "BLE pairing and data transfer from Omron devices.",
          vi: "Kết nối BLE và truyền dữ liệu từ thiết bị Omron.",
        },
        {
          en: "New features and maintenance on the existing app.",
          vi: "Phát triển tính năng mới và maintain app đang chạy.",
        },
      ],
      decisions: [
        {
          en: "Handled pairing, reconnects, and interrupted transfers carefully, since BLE connections drop often on real devices.",
          vi: "Xử lý kỹ các trường hợp pairing, kết nối lại và truyền dữ liệu bị gián đoạn, vì BLE rớt kết nối là chuyện thường gặp trên thiết bị thật.",
        },
      ],
      results: [
        {
          en: "Readings from the devices sync into the app, which is live on the Japanese store.",
          vi: "Chỉ số từ thiết bị được đồng bộ vào app đang có mặt trên store Nhật.",
        },
      ],
    },
  },
  {
    id: "freeva",
    coverIcon: "wallet",
    kind: "side",
    inProgress: true,
    name: { en: "Freeva: Personal Finance", vi: "Freeva: Quản lý tài chính cá nhân" },
    period: { en: "2026 – Present", vi: "2026 – nay" },
    role: { en: "Full stack, solo", vi: "Full stack, làm một mình" },
    shortDescription: {
      en: "I couldn't find a free finance app that did what I needed, so I'm building one. It's a monorepo with a Flutter app, a Next.js admin, and a NestJS API.",
      vi: "Tự làm app quản lý tài chính vì không tìm được app miễn phí nào đủ nhu cầu. Monorepo gồm app Flutter, trang quản trị Next.js và API NestJS.",
    },
    technologies: ["Flutter", "Next.js", "NestJS", "Prisma", "PostgreSQL", "OpenAPI", "Docker"],
    metrics: [
      { value: same("3"), label: { en: "apps, one monorepo", vi: "ứng dụng trong một monorepo" } },
    ],
    links: { github: "https://github.com/vanhuy-30/freeva-personal-finance-management" },
    caseStudy: {
      context: {
        en: "Most finance apps on the store were either paid or missing features I wanted, so I decided to build my own from scratch.",
        vi: "Các app trên store hoặc phải trả phí, hoặc thiếu những tính năng tôi cần, nên tôi quyết định tự làm từ đầu.",
      },
      built: [
        {
          en: "Core loop: sign up, create wallets, record transactions, see balances and reports.",
          vi: "Luồng chính: đăng ký, tạo ví, ghi giao dịch, xem số dư và báo cáo.",
        },
        {
          en: "Flutter mobile app, Next.js admin, and NestJS + Prisma + PostgreSQL API.",
          vi: "App Flutter, trang quản trị Next.js và API NestJS + Prisma + PostgreSQL.",
        },
      ],
      decisions: [
        {
          en: "OpenAPI contracts as the source of truth between the API, app, and admin.",
          vi: "Dùng OpenAPI làm chuẩn chung giữa API, app và trang quản trị.",
        },
        {
          en: "Shared design tokens and Docker Compose for local Postgres, Redis, and Mailhog.",
          vi: "Dùng chung design token; Docker Compose để chạy Postgres, Redis và Mailhog ở local.",
        },
      ],
      results: [
        {
          en: "Still in progress. The code and roadmap are public on GitHub.",
          vi: "Đang phát triển, source code và roadmap công khai trên GitHub.",
        },
      ],
    },
  },
  {
    id: "flutter-starter-kit",
    kind: "side",
    name: same("Flutter Starter Kit"),
    period: { en: "Personal project", vi: "Dự án cá nhân" },
    role: { en: "Open-source template", vi: "Template mã nguồn mở" },
    shortDescription: {
      en: "A production-ready Flutter template: Clean Architecture, Riverpod + MVVM, flavors, and an atomic design system.",
      vi: "Bộ khung Flutter dùng được ngay cho production: Clean Architecture, Riverpod + MVVM, nhiều môi trường build và design system theo Atomic Design.",
    },
    technologies: ["Flutter", "Riverpod", "GoRouter", "Dio", "Retrofit", "Hive", "Firebase"],
    metrics: [
      { value: same("3"), label: { en: "flavors: dev, stg, prod", vi: "môi trường: dev, stg, prod" } },
    ],
    links: { github: "https://github.com/vanhuy-30/flutter-starterkit" },
    image: "/images/project-flutter-starter.jpg",
    caseStudy: {
      context: {
        en: "Every new Flutter app meant setting up the same folders, networking, auth, and basic UI all over again.",
        vi: "Mỗi lần bắt đầu app Flutter mới lại phải dựng lại từ đầu cấu trúc thư mục, networking, auth và các UI cơ bản.",
      },
      built: [
        {
          en: "Feature modules split into data, domain, and presentation layers.",
          vi: "Chia module theo tính năng, mỗi module gồm ba lớp data, domain, presentation.",
        },
        {
          en: "Dio + Retrofit networking with auth, retry, and logging interceptors; secure token storage.",
          vi: "Networking bằng Dio + Retrofit, có interceptor cho auth, retry, logging; token được lưu bảo mật.",
        },
        {
          en: "GoRouter with guards and deep links, localization, theming, and an atomic design system.",
          vi: "GoRouter có guard và deep link, hỗ trợ đa ngôn ngữ, theme và design system theo Atomic Design.",
        },
      ],
      decisions: [
        {
          en: "Riverpod with MVVM keeps state explicit and easy to test.",
          vi: "Riverpod + MVVM để state rõ ràng, dễ viết test.",
        },
        {
          en: "Separate entry points for dev, staging, and prod.",
          vi: "Tách entry point riêng cho từng môi trường dev, staging, prod.",
        },
      ],
      results: [
        {
          en: "New apps start from a working structure instead of a blank project.",
          vi: "App mới bắt đầu từ một bộ khung chạy được ngay, không phải dựng từ project trống.",
        },
      ],
    },
  },
];

const otherWork: { id: string; name: Copy; detail: Copy }[] = [
  {
    id: "golf-commerce",
    name: { en: "Golf shop & scoring app", vi: "App golf: bán hàng & ghi điểm" },
    detail: {
      en: "Android, Japanese client. Online shop, round scoring, shareable scorecard images and videos, and in-app purchases.",
      vi: "Android, khách hàng Nhật. Bán hàng, ghi điểm trận đấu, tạo ảnh và video bảng điểm để chia sẻ, mua hàng trong app.",
    },
  },
  {
    id: "video-subscriptions",
    name: { en: "Video subscription app", vi: "App xem video theo gói subscription" },
    detail: {
      en: "Flutter, Japanese client. Channels, follows, and paid subscriptions that unlock more videos.",
      vi: "Flutter, khách hàng Nhật. Kênh, theo dõi kênh và gói subscription để mở khoá thêm video.",
    },
  },
  {
    id: "vitalify-hrm",
    name: { en: "HRM app at Vitalify", vi: "App HRM tại Vitalify" },
    detail: {
      en: "Flutter, 200+ users. Face-recognition check-in, leave balances, and leave requests.",
      vi: "Flutter, hơn 200 người dùng. Chấm công bằng nhận diện khuôn mặt, theo dõi ngày phép, tạo đơn nghỉ phép.",
    },
  },
  {
    id: "smaller-work",
    name: { en: "Smaller projects", vi: "Các dự án nhỏ khác" },
    detail: {
      en: "Maintenance on another Android app, plus backend APIs and small internal tools at Motives.",
      vi: "Maintain thêm một app Android, cùng các API backend và công cụ nội bộ nhỏ tại Motives.",
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return source.map((project) => ({
    id: project.id,
    kind: project.kind,
    featured: project.featured,
    nda: project.nda,
    inProgress: project.inProgress,
    name: tx(project.name, locale),
    company: project.company,
    period: tx(project.period, locale),
    role: tx(project.role, locale),
    shortDescription: tx(project.shortDescription, locale),
    technologies: project.technologies,
    metrics: project.metrics.map((metric) => ({
      value: tx(metric.value, locale),
      label: tx(metric.label, locale),
    })),
    links: project.links ?? {},
    image: project.image,
    coverIcon: project.coverIcon,
    caseStudy: {
      context: tx(project.caseStudy.context, locale),
      built: project.caseStudy.built.map((item) => tx(item, locale)),
      decisions: project.caseStudy.decisions.map((item) => tx(item, locale)),
      results: project.caseStudy.results.map((item) => tx(item, locale)),
    },
  }));
}

export function getOtherWork(locale: Locale): OtherWorkItem[] {
  return otherWork.map((item) => ({
    id: item.id,
    name: tx(item.name, locale),
    detail: tx(item.detail, locale),
  }));
}
