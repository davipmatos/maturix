import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl border border-white/10 bg-ink-950/60 px-3.5 text-sm text-ink-100",
        "placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400/40",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
