import { Bell, Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/Input";

export function Topbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-white/5 bg-ink-950/80 px-6 backdrop-blur-xl">
      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
        <Input
          placeholder="Search subcategories, controls or evidence…"
          className="h-10 pl-9"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button
          className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-ink-200 hover:bg-white/10"
          onClick={() => navigate("/app/recommendations")}
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-300" />
          AI insights
          <span className="ml-1 rounded-full bg-brand-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-brand-200">
            9
          </span>
        </button>
        <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">
          <Bell className="h-4 w-4 text-ink-200" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-400" />
        </button>
        <button
          className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5 hover:bg-white/10"
          onClick={() => navigate("/app/settings")}
          title="Account"
        >
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-[11px] font-bold text-white">
            NL
          </div>
          <div className="hidden md:block text-left leading-tight">
            <div className="text-xs font-semibold text-ink-100">
              Neto Loureiro
            </div>
            <div className="text-[10px] text-ink-400">Director of Cyber</div>
          </div>
        </button>
      </div>
    </header>
  );
}
