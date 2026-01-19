import { Lock, ShieldCheck, Clock } from "lucide-react";

type BadgeType = "confidential" | "protected" | "fast";

interface TrustBadgeProps {
  type: BadgeType;
  className?: string;
}

const badgeConfig = {
  confidential: {
    icon: Lock,
    text: "100% confidencial",
  },
  protected: {
    icon: ShieldCheck,
    text: "Dados protegidos",
  },
  fast: {
    icon: Clock,
    text: "Resultado rápido",
  },
};

export function TrustBadge({ type, className = "" }: TrustBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-verde-seguranca/10 text-verde-seguranca border border-verde-seguranca/20 ${className}`}
    >
      <Icon className="w-4 h-4" />
      <span>{config.text}</span>
    </div>
  );
}

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      <TrustBadge type="protected" />
      <TrustBadge type="confidential" />
      <TrustBadge type="fast" />
    </div>
  );
}
