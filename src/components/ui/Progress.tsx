import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number; // 0-100
  className?: string;
  color?: string;
  trackClassName?: string;
}

export function Progress({
  value,
  className,
  color,
  trackClassName,
}: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-white/5",
        trackClassName,
        className,
      )}
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500"
        style={{ width: `${clamped}%`, backgroundColor: color ?? "#3563f6" }}
      />
    </div>
  );
}

interface ScoreBarProps {
  current: number; // 0-5
  target: number; // 0-5
  className?: string;
}

export function ScoreBar({ current, target, className }: ScoreBarProps) {
  const currentPct = (current / 5) * 100;
  const targetPct = (target / 5) * 100;
  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-white/5",
        className,
      )}
    >
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
        style={{ width: `${currentPct}%` }}
      />
      <div
        className="absolute inset-y-0 w-0.5 bg-ink-100/70"
        style={{ left: `${targetPct}%` }}
        title={`Target ${target.toFixed(2)}`}
      />
    </div>
  );
}
