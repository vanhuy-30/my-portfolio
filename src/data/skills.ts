import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    items: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Java",
      "Android SDK",
      "Riverpod",
      "Bloc",
      "Provider",
      "GoRouter",
      "BLE",
      "Google Maps / GPS",
      "Firebase (FCM, Firestore)",
    ],
  },
  {
    id: "web",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vite",
      "Capacitor",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    id: "backend",
    items: [
      "REST API",
      "Node.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "OpenAPI",
      "Docker Compose",
    ],
  },
  {
    id: "ai",
    items: [
      "Dify",
      "LibreChat",
      "Self-hosted LLMs",
      "RAG",
      "AI agents",
      "Prompt design",
    ],
  },
  {
    id: "aiTools",
    items: ["Cursor", "Claude Code", "Codex", "GitHub Copilot", "Antigravity"],
  },
  {
    id: "practices",
    items: [
      "Clean Architecture",
      "MVVM",
      "Atomic Design",
      "Monorepo",
      "Git",
      "GitHub Actions",
      "Play Console / TestFlight",
      "Figma",
      "Postman",
    ],
  },
];
