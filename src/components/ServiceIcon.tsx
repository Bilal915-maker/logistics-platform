import { Scissors, Ruler, Sparkles, Palette, RefreshCw, Users, type LucideIcon } from "lucide-react";
import type { Service } from "@/data/site";

const icons: Record<Service["icon"], LucideIcon> = {
  Scissors,
  Ruler,
  Sparkles,
  Palette,
  RefreshCw,
  Users,
};

export default function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
