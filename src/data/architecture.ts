import { Blocks, BriefcaseBusiness, Rocket, Sparkles } from "lucide-react";

export type PrincipleId = "structure" | "ship" | "business" | "ai";

export const principles: { id: PrincipleId; icon: typeof Blocks }[] = [
  { id: "structure", icon: Blocks },
  { id: "ship", icon: Rocket },
  { id: "business", icon: BriefcaseBusiness },
  { id: "ai", icon: Sparkles },
];
