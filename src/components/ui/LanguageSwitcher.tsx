import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { useTranslation } from "@/i18n/I18nProvider";
import { LANGS } from "@/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-medium text-ink-200 hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
        title="Change language"
      >
        <Languages className="h-3.5 w-3.5 text-ink-300" />
        <span className="hidden md:inline">{active.flag}</span>
        <span className="font-mono uppercase">{active.code}</span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-40 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-ink-900/95 p-1 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          {LANGS.map((l) => {
            const isActive = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors",
                  isActive
                    ? "bg-brand-500/15 text-white"
                    : "text-ink-200 hover:bg-white/5",
                )}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1 font-medium">{l.label}</span>
                <span className="font-mono text-[10px] text-ink-400">
                  {l.code.toUpperCase()}
                </span>
                {isActive && <Check className="h-3.5 w-3.5 text-brand-300" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
