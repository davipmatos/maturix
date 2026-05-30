import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-500 active:bg-brand-700 shadow-lg shadow-brand-900/30 focus-visible:ring-brand-400",
  secondary:
    "bg-white/5 text-ink-100 hover:bg-white/10 active:bg-white/15 focus-visible:ring-white/20",
  outline:
    "bg-transparent border border-white/10 text-ink-100 hover:bg-white/5 focus-visible:ring-white/20",
  ghost:
    "bg-transparent text-ink-200 hover:bg-white/5 focus-visible:ring-white/10",
  danger:
    "bg-rose-600 text-white hover:bg-rose-500 active:bg-rose-700 focus-visible:ring-rose-400",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors",
        "disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
