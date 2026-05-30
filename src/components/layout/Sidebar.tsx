import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardCheck,
  Layers,
  Sparkles,
  FileBarChart2,
  Settings,
  ShieldHalf,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_ORG } from "@/data/mockData";

const NAV = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/app/assessments", label: "Assessments", icon: ClipboardCheck },
  { to: "/app/framework", label: "Framework", icon: Layers },
  { to: "/app/recommendations", label: "Recommendations", icon: Sparkles },
  { to: "/app/reports", label: "Reports", icon: FileBarChart2 },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/5 bg-ink-950/80 px-3 py-5">
      <div className="flex items-center gap-2.5 px-2 pb-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-lg shadow-brand-900/40">
          <ShieldHalf className="h-5 w-5 text-white" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold tracking-tight text-ink-50">
            Maturix
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
            NIST CSF 2.0
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-brand-500/15 text-white ring-1 ring-brand-400/30"
                  : "text-ink-300 hover:bg-white/5 hover:text-ink-100",
              )
            }
          >
            <item.icon className="h-4 w-4" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/5 bg-ink-900/60 p-3.5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
            <Building2 className="h-4 w-4 text-ink-300" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-xs font-semibold text-ink-100">
              {MOCK_ORG.name}
            </div>
            <div className="truncate text-[10px] text-ink-400">
              {MOCK_ORG.industry}
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {MOCK_ORG.primaryRegulations.slice(0, 3).map((r) => (
            <span
              key={r}
              className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-ink-300"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
