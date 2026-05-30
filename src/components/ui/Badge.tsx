import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone =
  | "neutral"
  | "brand"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "violet";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

const toneClasses: Record<Tone, string> = {
  neutral: "bg-white/5 text-ink-200 ring-1 ring-white/10",
  brand: "bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/30",
  success: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30",
  warning: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30",
  danger: "bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/30",
  info: "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/30",
  violet: "bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30",
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
