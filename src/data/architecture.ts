export type ArchitectureLayerId = "presentation" | "domain" | "data";

export interface ArchitectureLayer {
  id: ArchitectureLayerId;
  patterns: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "presentation",
    patterns: ["MVVM", "UI state", "Feature screens"],
  },
  {
    id: "domain",
    patterns: ["Use cases", "Clean Architecture", "Feature modules"],
  },
  {
    id: "data",
    patterns: ["Repository pattern", "REST API layer", "Firebase"],
  },
];
