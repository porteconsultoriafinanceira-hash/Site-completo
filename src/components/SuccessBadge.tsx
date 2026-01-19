import { Check } from "lucide-react";

interface SuccessBadgeProps {
  text: string;
  className?: string;
}

export function SuccessBadge({ text, className = "" }: SuccessBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-verde-seguranca text-white font-bold text-sm ${className}`}
    >
      <Check className="w-5 h-5" />
      <span>{text}</span>
    </div>
  );
}
