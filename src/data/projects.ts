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
    name: { en: "M System: HR & Operations App", vi: "M System: App nhân sự & vận hành" },
    company: "Motives Vietnam",
    period: { en: "2025 – Present", vi: "2025 – nay" },
    role: { en: "Software Engineer, web and mobile", vi: "Software Engineer, web và mobile" },
    shortDescription: {
      en: "The app employees open every day: attendance, leave, performance reviews, news, learning, and selected ERP workflows. One React codebase for web and mobile.",
      vi: "App nhân viên mở mỗi ngày: chấm công, nghỉ phép, đánh giá performance, bảng tin, learning và một số nghiệp vụ ERP. Một codebase React cho web và mobile.",
    },
    technologies: ["React", "TypeScript", "JavaScript", "Capacitor", "REST API", "Outlook", "Odoo"],
    metrics: [
      { value: same("~500"), label: { en: "employees", vi: "nhân viên" } },
      { value: same("1"), label: { en: "codebase, web + mobile", vi: "codebase, web + mobile" } },
    ],
    image: "/images/project-erp-hrm.jpg",
    caseStudy: {
      context: {
        en: "Motives runs on several in-house systems, including separate ERP and HRM web apps for specialized work. M System brings the HRM features and the most-used ERP features into one app that works in the browser and on phones.",
        vi: "Motives vận hành trên nhiều hệ thống nội bộ, trong đó có trang ERP và trang HRM riêng cho các nghiệp vụ chuyên sâu. M System gom các chức năng HRM và những chức năng ERP dùng nhiều nhất vào một app chạy được trên trình duyệt lẫn điện thoại.",
      },
      built: [
        {
          en: "Attendance plus leave, bereavement/wedding, and business-trip requests with approval flows.",
          vi: "Chấm công, đơn nghỉ phép, hiếu hỷ, công tác kèm luồng duyệt.",
        },
        {
          en: "A custom calendar that syncs with Outlook.",
          vi: "Calendar tự xây, đồng bộ với Outlook.",
        },
        {
          en: "Monthly performance scoring and reviews, an internal newsfeed, and a learning module linked to Odoo.",
          vi: "Chấm và đánh giá performance hàng tháng, bảng tin nội bộ, module learning liên kết Odoo.",
        },
        {
          en: "Selected ERP workflows for Accounting, QC, R&A, and other departments, plus backend APIs where needed.",
          vi: "Một số luồng nghiệp vụ ERP cho Kế toán, QC, R&A và các phòng ban khác, kèm API backend khi cần.",
        },
      ],
      decisions: [
        {
          en: "Capacitor wraps the same React app for mobile, so a feature ships once for both platforms.",
          vi: "Dùng Capacitor bọc cùng app React cho mobile, nên một tính năng chỉ cần làm một lần cho cả hai nền tảng.",
        },
        {
          en: "Keep everyday tasks in M System and leave specialized modules on the dedicated ERP and HRM sites.",
          vi: "Việc hằng ngày nằm trong M System, còn các module chuyên sâu để ở trang ERP và HRM riêng.",
        },
        {
          en: "Integrate with Outlook and Odoo instead of rebuilding what teams already use.",
          vi: "Tích hợp Outlook và Odoo thay vì làm lại những thứ các team đang dùng.",
        },
      ],
      results: [
        {
          en: "Used daily by ~500 employees across departments.",
          vi: "Khoảng 500 nhân viên ở các phòng ban dùng hằng ngày.",
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
    name: { en: "AI Workplace Automation", vi: "Tự động hoá công việc bằng AI" },
    company: "Motives Vietnam",
    period: { en: "2025 – Present", vi: "2025 – nay" },
    role: { en: "Software Engineer, AI tooling", vi: "Software Engineer, AI tooling" },
    shortDescription: {
      en: "AI chat, a RAG agent over internal documents, and agents that file requests for people. All built on self-hosted models, so company data stays inside.",
      vi: "AI chat, RAG agent trên tài liệu nội bộ và các agent tạo phiếu thay người dùng. Tất cả chạy trên model self-host để dữ liệu công ty không ra ngoài.",
    },
    technologies: ["Dify", "LibreChat", "Self-hosted LLMs", "RAG", "AI agents"],
    metrics: [
      { value: same("8+"), label: { en: "AI features in use", vi: "chức năng AI đang dùng" } },
      { value: same("100%"), label: { en: "on local LLMs", vi: "chạy trên LLM local" } },
    ],
    caseStudy: {
      context: {
        en: "Part of the company's digital transformation: give each department AI help for its own work without sending internal data to public AI services.",
        vi: "Một phần của chuyển đổi số: đưa AI vào công việc riêng của từng phòng ban mà không gửi dữ liệu nội bộ ra dịch vụ AI công cộng.",
      },
      built: [
        {
          en: "Company-wide AI chat and a RAG agent that answers from internal documents.",
          vi: "AI chat toàn công ty và RAG agent trả lời dựa trên tài liệu nội bộ.",
        },
        {
          en: "Agents that create leave requests, IT tickets, and meeting-room bookings from a chat message.",
          vi: "Agent tạo đơn nghỉ phép, IT ticket và đặt phòng họp chỉ từ một tin nhắn.",
        },
        {
          en: "Department tools: payment vouchers, payment checks, and QC voice review.",
          vi: "Công cụ theo phòng ban: tạo phiếu thanh toán, kiểm tra thanh toán, QC giọng nói.",
        },
      ],
      decisions: [
        {
          en: "Dify for agent and workflow orchestration, LibreChat as the chat front end, and self-hosted LLMs for privacy.",
          vi: "Dify để điều phối agent và workflow, LibreChat làm giao diện chat, LLM self-host để bảo mật dữ liệu.",
        },
        {
          en: "Agents call actions that already exist in the company systems, so AI output goes through the same approval flows as manual requests.",
          vi: "Agent gọi đúng các thao tác có sẵn trong hệ thống công ty, nên kết quả từ AI vẫn đi qua luồng duyệt như khi tạo tay.",
        },
        {
          en: "Started on the OpenAI API, then moved everything to local LLMs so internal data never leaves the company.",
          vi: "Ban đầu dùng API của OpenAI, sau đó chuyển toàn bộ sang LLM local để dữ liệu nội bộ không ra khỏi công ty.",
        },
      ],
      results: [
        {
          en: "8+ AI features in use across departments.",
          vi: "8+ chức năng AI đang được các phòng ban sử dụng.",
        },
        {
          en: "Routine requests take one message instead of a form.",
          vi: "Các yêu cầu thường ngày chỉ cần một tin nhắn thay vì điền form.",
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
    role: { en: "Software Engineer, built from scratch", vi: "Software Engineer, xây từ đầu" },
    shortDescription: {
      en: "A company social app with posts, friends, chat, and sports clubs, plus a GPS golf-scoring module for leadership.",
      vi: "App mạng xã hội nội bộ với đăng bài, kết bạn, nhắn tin, câu lạc bộ thể thao, kèm module ghi điểm golf có GPS cho ban lãnh đạo.",
    },
    technologies: ["Flutter", "Firebase", "Firestore", "Cloud Messaging", "Google Maps", "REST API"],
    metrics: [
      { value: same("~500"), label: { en: "employees", vi: "nhân viên" } },
      { value: { en: "0 → 1", vi: "0 → 1" }, label: { en: "built from scratch", vi: "xây từ đầu" } },
      { value: same("iOS + Android"), label: { en: "one Flutter codebase", vi: "một codebase Flutter" } },
    ],
    image: "/images/project-golf-app.jpg",
    caseStudy: {
      context: {
        en: "The company wanted one place for internal news, colleagues, and sports clubs. Leadership also wanted to track golf rounds.",
        vi: "Công ty cần một nơi cho tin nội bộ, kết nối đồng nghiệp và câu lạc bộ thể thao. Ban lãnh đạo cũng muốn theo dõi các trận golf.",
      },
      built: [
        {
          en: "Posts, comments, friends, and real-time chat on Firestore, with push notifications.",
          vi: "Đăng bài, bình luận, kết bạn và nhắn tin real-time trên Firestore, kèm thông báo đẩy.",
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
          en: "Flutter so one small team could ship iOS and Android together.",
          vi: "Chọn Flutter để một team nhỏ ra được cả iOS và Android cùng lúc.",
        },
        {
          en: "Firestore and Cloud Messaging for real-time feed and chat without building that infrastructure ourselves.",
          vi: "Dùng Firestore và Cloud Messaging cho feed và chat real-time, không phải tự dựng hạ tầng.",
        },
      ],
      results: [
        {
          en: "Released to employees on iOS and Android.",
          vi: "Đã phát hành cho nhân viên trên iOS và Android.",
        },
        {
          en: "Leadership tracks golf rounds and scores live in the app.",
          vi: "Ban lãnh đạo theo dõi trận và ghi điểm golf trực tiếp trên app.",
        },
      ],
    },
  },
  {
    id: "restaurant-loyalty",
    coverIcon: "store",
    kind: "work",
    nda: true,
    name: { en: "Restaurant Loyalty Platform", vi: "Nền tảng loyalty cho chuỗi nhà hàng" },
    company: "Motives Vietnam",
    period: { en: "2026 – Present", vi: "2026 – nay" },
    role: { en: "Software Engineer, app and web admin", vi: "Software Engineer, app và web admin" },
    shortDescription: {
      en: "A membership app and web admin for a restaurant chain in the group: scan receipts, earn points, redeem rewards.",
      vi: "App thành viên và web admin cho chuỗi nhà hàng trong tập đoàn: quét hoá đơn, tích điểm, đổi quà.",
    },
    technologies: ["Flutter", "React", "TypeScript", "Vite", "REST API"],
    metrics: [
      { value: same("2"), label: { en: "products: app + admin", vi: "sản phẩm: app + admin" } },
    ],
    caseStudy: {
      context: {
        en: "The group's F&B company needed a loyalty program its restaurants could run themselves.",
        vi: "Công ty F&B trong tập đoàn cần một chương trình khách hàng thân thiết mà các nhà hàng tự vận hành được.",
      },
      built: [
        {
          en: "Flutter app for receipt scanning, point balance, and reward redemption.",
          vi: "App Flutter để quét hoá đơn, xem điểm và đổi quà.",
        },
        {
          en: "React + TypeScript admin for members, rewards, and point rules.",
          vi: "Trang admin React + TypeScript để quản lý thành viên, quà và quy tắc tích điểm.",
        },
      ],
      decisions: [
        {
          en: "Vite for a fast, light admin build; Flutter to reuse the team's mobile stack.",
          vi: "Dùng Vite cho admin nhẹ và build nhanh; Flutter để tận dụng stack mobile sẵn có của team.",
        },
      ],
      results: [
        {
          en: "One loyalty system shared by the app and the admin.",
          vi: "Một hệ thống loyalty dùng chung cho app và admin.",
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
      vi: "App sức khoẻ Android trên store Nhật, đọc số đo từ thiết bị y tế Omron qua BLE.",
    },
    technologies: ["Kotlin", "Java", "BLE", "REST API", "Firebase"],
    metrics: [
      { value: same("BLE"), label: { en: "medical device sync", vi: "đồng bộ thiết bị y tế" } },
    ],
    image: "/images/project-medical-ble.jpg",
    caseStudy: {
      context: {
        en: "A Japanese client's health-check app that pairs with Omron devices and keeps users' readings in one place.",
        vi: "App kiểm tra sức khoẻ của khách hàng Nhật, kết nối thiết bị Omron và lưu số đo của người dùng ở một nơi.",
      },
      built: [
        {
          en: "BLE pairing and data transfer from Omron devices.",
          vi: "Kết nối BLE và truyền dữ liệu từ thiết bị Omron.",
        },
        {
          en: "New features and maintenance on the existing app.",
          vi: "Làm tính năng mới và bảo trì app đang chạy.",
        },
      ],
      decisions: [
        {
          en: "Handle pairing, reconnects, and partial transfers explicitly, because BLE drops are normal on real devices.",
          vi: "Xử lý rõ ràng việc pairing, kết nối lại và truyền dữ liệu dở dang, vì mất kết nối BLE là chuyện bình thường trên máy thật.",
        },
      ],
      results: [
        {
          en: "Device readings sync into the app on the Japanese store.",
          vi: "Số đo từ thiết bị được đồng bộ vào app trên store Nhật.",
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
    role: { en: "Full stack, solo", vi: "Full stack, tự làm" },
    shortDescription: {
      en: "The finance app I wanted but couldn't find for free. A monorepo with a Flutter app, Next.js admin, and NestJS API.",
      vi: "App tài chính tôi muốn dùng nhưng không tìm được bản miễn phí. Monorepo gồm app Flutter, admin Next.js và API NestJS.",
    },
    technologies: ["Flutter", "Next.js", "NestJS", "Prisma", "PostgreSQL", "OpenAPI", "Docker"],
    metrics: [
      { value: same("3"), label: { en: "apps, one monorepo", vi: "app, một monorepo" } },
    ],
    links: { github: "https://github.com/vanhuy-30/freeva-personal-finance-management" },
    caseStudy: {
      context: {
        en: "Store apps were paywalled or missing features I needed, so I'm building my own from scratch.",
        vi: "Các app trên store hoặc thu phí, hoặc thiếu tính năng tôi cần, nên tôi tự xây từ đầu.",
      },
      built: [
        {
          en: "Core loop: sign up, create wallets, record transactions, see balances and reports.",
          vi: "Luồng chính: đăng ký, tạo ví, ghi giao dịch, xem số dư và báo cáo.",
        },
        {
          en: "Flutter mobile app, Next.js admin, and NestJS + Prisma + PostgreSQL API.",
          vi: "App Flutter, admin Next.js và API NestJS + Prisma + PostgreSQL.",
        },
      ],
      decisions: [
        {
          en: "OpenAPI contracts as the source of truth between the API, app, and admin.",
          vi: "Dùng OpenAPI contract làm nguồn chuẩn giữa API, app và admin.",
        },
        {
          en: "Shared design tokens and Docker Compose for local Postgres, Redis, and Mailhog.",
          vi: "Design token dùng chung, Docker Compose cho Postgres, Redis và Mailhog ở local.",
        },
      ],
      results: [
        {
          en: "In progress. Code and roadmap are public on GitHub.",
          vi: "Đang phát triển. Code và roadmap công khai trên GitHub.",
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
      vi: "Template Flutter sẵn sàng cho production: Clean Architecture, Riverpod + MVVM, nhiều môi trường và design system theo Atomic Design.",
    },
    technologies: ["Flutter", "Riverpod", "GoRouter", "Dio", "Retrofit", "Hive", "Firebase"],
    metrics: [
      { value: same("3"), label: { en: "flavors: dev, stg, prod", vi: "môi trường: dev, stg, prod" } },
    ],
    links: { github: "https://github.com/vanhuy-30/flutter-starterkit" },
    image: "/images/project-flutter-starter.jpg",
    caseStudy: {
      context: {
        en: "Every new Flutter app was rebuilding the same folders, networking, auth, and UI basics.",
        vi: "Mỗi app Flutter mới lại phải dựng lại cấu trúc thư mục, networking, auth và UI cơ bản.",
      },
      built: [
        {
          en: "Feature modules split into data, domain, and presentation layers.",
          vi: "Module theo tính năng, chia thành các lớp data, domain và presentation.",
        },
        {
          en: "Dio + Retrofit networking with auth, retry, and logging interceptors; secure token storage.",
          vi: "Networking bằng Dio + Retrofit với interceptor cho auth, retry và logging; lưu token an toàn.",
        },
        {
          en: "GoRouter with guards and deep links, localization, theming, and an atomic design system.",
          vi: "GoRouter có guard và deep link, đa ngôn ngữ, theme và design system theo Atomic Design.",
        },
      ],
      decisions: [
        {
          en: "Riverpod + MVVM for testable, explicit state.",
          vi: "Riverpod + MVVM để state rõ ràng và dễ test.",
        },
        {
          en: "Separate entry points for dev, staging, and prod.",
          vi: "Tách entry point riêng cho dev, staging và prod.",
        },
      ],
      results: [
        {
          en: "New apps start from a working structure instead of a blank project.",
          vi: "App mới bắt đầu từ một cấu trúc chạy được thay vì project trống.",
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
      en: "Android, Japanese client. Shop, round scoring, shareable scorecard images and videos, in-app purchases.",
      vi: "Android, khách hàng Nhật. Bán hàng, ghi điểm trận, tạo ảnh và video bảng điểm để chia sẻ, mua trong ứng dụng.",
    },
  },
  {
    id: "video-subscriptions",
    name: { en: "Video subscription app", vi: "App xem video có subscription" },
    detail: {
      en: "Flutter, Japanese client. Channels, follows, and subscriptions that unlock more videos.",
      vi: "Flutter, khách hàng Nhật. Channel, đăng ký kênh và subscription để mở khoá thêm video.",
    },
  },
  {
    id: "vitalify-hrm",
    name: { en: "HRM app at Vitalify", vi: "App HRM tại Vitalify" },
    detail: {
      en: "Flutter, 200+ users. Face-recognition check-in, leave balances, and leave requests.",
      vi: "Flutter, hơn 200 người dùng. Chấm công bằng khuôn mặt, theo dõi ngày phép, tạo đơn nghỉ.",
    },
  },
  {
    id: "smaller-work",
    name: { en: "Smaller projects", vi: "Các dự án nhỏ khác" },
    detail: {
      en: "Another Android app in maintenance, plus backend APIs and small internal tools at Motives.",
      vi: "Bảo trì thêm một app Android, cùng các API backend và công cụ nội bộ nhỏ tại Motives.",
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
