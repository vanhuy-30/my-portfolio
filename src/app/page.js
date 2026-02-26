const metrics = [
  { value: "7+", label: "Năm kinh nghiệm mobile" },
  { value: "18", label: "Ứng dụng đã phát hành" },
  { value: "1.2M+", label: "Lượt tải cộng dồn" },
  { value: "4.8/5", label: "Điểm rating trung bình" },
];

const skillAreas = [
  {
    title: "Native iOS & Android",
    details:
      "Swift, SwiftUI, Kotlin, Jetpack Compose, tối ưu hiệu năng, kiến trúc module hóa.",
  },
  {
    title: "Cross-platform delivery",
    details:
      "Flutter và React Native cho MVP nhanh, đảm bảo codebase sạch và dễ scale.",
  },
  {
    title: "Architecture & Quality",
    details:
      "Clean Architecture, MVVM, test automation, CI/CD, crash monitoring và analytics.",
  },
  {
    title: "Backend integration",
    details:
      "REST/GraphQL, Firebase, Supabase, push notification, auth và đồng bộ dữ liệu realtime.",
  },
];

const experiences = [
  {
    role: "Senior Mobile Developer",
    company: "FintechFlow",
    period: "2022 - Hiện tại",
    achievements: [
      "Dẫn dắt team 4 dev xây lại ứng dụng ngân hàng số với Flutter + Native modules.",
      "Giảm crash rate từ 1.9% xuống 0.4% sau 3 tháng bằng profiling và chuẩn hóa release checklist.",
      "Tăng conversion mở tài khoản online +28% nhờ tối ưu onboarding và eKYC flow.",
    ],
  },
  {
    role: "Mobile Engineer",
    company: "HealthSync",
    period: "2019 - 2022",
    achievements: [
      "Phát triển app chăm sóc sức khỏe trên iOS/Android, tích hợp Apple Health và Google Fit.",
      "Thiết kế offline-first sync giúp retention 30 ngày tăng 18%.",
      "Thiết lập pipeline CI/CD tự động build, test và phân phối qua TestFlight/Firebase App Distribution.",
    ],
  },
  {
    role: "Junior Android Developer",
    company: "BluePixel Studio",
    period: "2017 - 2019",
    achievements: [
      "Xây dựng 6 ứng dụng Android thương mại đầu tiên cho SME tại Việt Nam.",
      "Cải thiện thời gian khởi động app trung bình 35% thông qua tối ưu rendering và network cache.",
      "Phối hợp với UI/UX và backend để rút ngắn 20% vòng đời release.",
    ],
  },
];

const projects = [
  {
    name: "PayWave Wallet",
    summary:
      "Ví điện tử đa nền tảng cho chuyển tiền nhanh, QR payment và quản lý chi tiêu cá nhân.",
    stack: ["Flutter", "Kotlin", "Swift", "Firebase", "GraphQL"],
    impact: "500K+ người dùng hoạt động hằng tháng, rating 4.9 trên App Store.",
  },
  {
    name: "MedTrack Companion",
    summary:
      "Ứng dụng theo dõi lịch uống thuốc, nhắc lịch thông minh và báo cáo sức khỏe cho bác sĩ.",
    stack: ["React Native", "TypeScript", "Node.js", "Supabase"],
    impact: "Giảm 32% tỷ lệ quên thuốc trong nhóm bệnh nhân thử nghiệm 6 tháng.",
  },
  {
    name: "CourierPro Driver",
    summary:
      "Ứng dụng cho tài xế giao hàng: tối ưu lộ trình, proof-of-delivery và realtime fleet tracking.",
    stack: ["Kotlin", "Jetpack Compose", "Mapbox", "Socket.IO"],
    impact: "Tăng 22% số đơn hoàn tất mỗi ngày cho đội vận hành 1,000+ tài xế.",
  },
];

const workflow = [
  "Discovery & Product alignment",
  "Technical design và chia milestone",
  "Build feature theo sprint + code review",
  "Test automation + release quality gate",
  "Monitor production và cải tiến theo data",
];

const contacts = [
  { label: "Email", value: "mobile.dev@example.com", href: "mailto:mobile.dev@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/mobiledev", href: "https://linkedin.com/in/mobiledev" },
  { label: "GitHub", value: "github.com/mobiledev", href: "https://github.com/mobiledev" },
  { label: "Book a call", value: "cal.com/mobiledev", href: "https://cal.com/mobiledev" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Mobile.Dev
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-200">
              About
            </a>
            <a href="#experience" className="hover:text-cyan-200">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-200">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-200">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/60 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-200/10"
          >
            Let&apos;s work together
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section
          id="home"
          className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[1.3fr_1fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Senior Mobile Developer
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Xây dựng ứng dụng mobile chất lượng cao, tăng trưởng thật bằng dữ liệu thật.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Tôi giúp startup và doanh nghiệp chuyển ý tưởng thành sản phẩm iOS/Android chạy ổn định,
              phát hành nhanh và tối ưu liên tục sau launch.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Xem dự án nổi bật
              </a>
              <a
                href="#experience"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/80 hover:text-cyan-200"
              >
                Kinh nghiệm làm việc
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Career Snapshot
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <article key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-2xl font-bold text-cyan-200">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-white/10 py-14">
          <h2 className="text-3xl font-bold text-white">About me</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Tôi tập trung vào trải nghiệm người dùng, kiến trúc bền vững và tốc độ release. Triết lý làm
            việc của tôi là: ship nhanh nhưng không đánh đổi chất lượng, đo lường liên tục, rồi cải tiến
            theo hành vi người dùng thực tế.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skillAreas.map((skill) => (
              <article key={skill.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="text-lg font-semibold text-cyan-200">{skill.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{skill.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="border-b border-white/10 py-14">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <div className="mt-8 space-y-7">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-cyan-200">
                    {experience.role} · {experience.company}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">{experience.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-b border-white/10 py-14">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-200">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={`${project.name}-${item}`}
                      className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-slate-200">Impact: {project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-14">
          <h2 className="text-3xl font-bold text-white">How I work</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {workflow.map((step, index) => (
              <li key={step} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-sm text-slate-200">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="py-14">
          <div className="rounded-3xl border border-cyan-300/30 bg-cyan-400/10 p-8">
            <h2 className="text-3xl font-bold text-white">Ready to build your next mobile product?</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Tôi nhận vai trò full-time, contract hoặc tư vấn kỹ thuật cho các team cần tăng tốc phát
              triển mobile app. Nếu bạn cần người “vừa code được, vừa ownership sản phẩm”, hãy liên hệ.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-xl border border-white/20 bg-slate-950/50 p-4 transition hover:border-cyan-300/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {contact.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-100">{contact.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mobile.Dev Portfolio. Built with Next.js.
      </footer>
    </div>
  );
}
