import { cn } from "@/lib/utils";
import { MATURITY_LEVELS, MaturityLevel } from "@/data/nistFramework";
import { useTranslation } from "@/i18n/I18nProvider";

interface MaturityChipProps {
  level: MaturityLevel;
  className?: string;
  showLabel?: boolean;
}

export function MaturityChip({
  level,
  className,
  showLabel = true,
}: MaturityChipProps) {
  const { t } = useTranslation();
  const meta = MATURITY_LEVELS[level];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-2.5 py-0.5 text-[11px] font-medium",
        className,
      )}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: meta.color }}
      />
      <span className="font-mono tabular-nums text-ink-100">L{level}</span>
      {showLabel && (
        <span className="text-ink-300">{t(`maturity.${level}.label`)}</span>
      )}
    </span>
  );
}
