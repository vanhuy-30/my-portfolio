import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    items: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Java",
      "Swift",
      "Provider",
      "Bloc",
      "Riverpod",
      "Capacitor",
    ],
  },
  {
    id: "frontend",
    items: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend",
    items: [
      "Node.js",
      "Express",
      "Firebase",
      "REST API",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    id: "architecture",
    items: ["Clean Architecture", "MVVM", "MVP", "Atomic Design"],
  },
  {
    id: "tools",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Figma",
      "BLE",
      "TestFlight",
      "Xcode",
      "Postman",
    ],
  },
];
