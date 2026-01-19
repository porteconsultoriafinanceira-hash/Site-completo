import { Check, AlertCircle, FileText, TrendingUp, Clock } from "lucide-react";

type IconType = "check" | "alert" | "document" | "chart" | "clock";

interface ChecklistItemProps {
  text: string;
  icon?: IconType;
  className?: string;
}

const iconMap = {
  check: Check,
  alert: AlertCircle,
  document: FileText,
  chart: TrendingUp,
  clock: Clock,
};

export function ChecklistItem({ text, icon = "check", className = "" }: ChecklistItemProps) {
  const Icon = iconMap[icon];

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-verde-seguranca/10 flex items-center justify-center mt-0.5">
        <Icon className="w-4 h-4 text-verde-seguranca" />
      </div>
      <p className="text-grafite">{text}</p>
    </div>
  );
}
