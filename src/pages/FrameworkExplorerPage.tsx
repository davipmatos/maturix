import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Layers, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  NIST_FRAMEWORK,
  averageCategoryScore,
  averageFunctionScore,
  averageFunctionTarget,
} from "@/data/nistFramework";
import { MaturityChip } from "@/components/ui/MaturityChip";
import { ScoreBar } from "@/components/ui/Progress";

export function FrameworkExplorerPage() {
  const [query, setQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>("GV.OC");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return NIST_FRAMEWORK;
    return NIST_FRAMEWORK.map((fn) => ({
      ...fn,
      categories: fn.categories
        .map((c) => ({
          ...c,
          subcategories: c.subcategories.filter(
            (s) =>
              s.id.toLowerCase().includes(q) ||
              s.title.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q),
          ),
        }))
        .filter(
          (c) =>
            c.subcategories.length > 0 ||
            c.id.toLowerCase().includes(q) ||
            c.title.toLowerCase().includes(q),
        ),
    })).filter((fn) => fn.categories.length > 0);
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <Layers className="h-3.5 w-3.5" /> Framework Explorer
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            NIST Cybersecurity Framework 2.0
          </h1>
          <p className="text-sm text-ink-400">
            6 Functions · 22 Categories · 100+ outcomes. Browse the framework
            and inspect your scoring side-by-side.
          </p>
        </div>
        <div className="w-full max-w-sm">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
            <Input
              placeholder="Search outcome ID, title or description…"
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {NIST_FRAMEWORK.map((fn) => (
          <Card key={fn.id} className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-50"
              style={{
                background: `radial-gradient(120% 60% at 50% 0%, ${fn.color}40, transparent 70%)`,
              }}
            />
            <CardContent className="pt-5">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: fn.color }}
                />
                <span className="text-sm font-bold text-white">{fn.name}</span>
                <span className="ml-auto font-mono text-[10px] text-ink-500">
                  {fn.id}
                </span>
              </div>
              <div className="mt-3 text-3xl font-bold tracking-tight text-white">
                {averageFunctionScore(fn).toFixed(2)}
              </div>
              <div className="text-[11px] text-ink-400">
                target {averageFunctionTarget(fn).toFixed(2)}
              </div>
              <div className="mt-3">
                <ScoreBar
                  current={averageFunctionScore(fn)}
                  target={averageFunctionTarget(fn)}
                />
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-wider text-ink-500">
                {fn.categories.length} cats ·{" "}
                {fn.categories.flatMap((c) => c.subcategories).length} outcomes
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-5">
        {filtered.map((fn) => (
          <Card key={fn.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: fn.color }}
                />
                {fn.name}
                <span className="font-mono text-[10px] text-ink-500">
                  {fn.id}
                </span>
                <Badge tone="brand" className="ml-2 font-mono">
                  {averageFunctionScore(fn).toFixed(2)}
                </Badge>
              </CardTitle>
              <CardSubtitle className="max-w-3xl">{fn.description}</CardSubtitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {fn.categories.map((c) => {
                const open = openCategory === c.id;
                const score = averageCategoryScore(c);
                return (
                  <div
                    key={c.id}
                    className="rounded-xl border border-white/5 bg-ink-950/40"
                  >
                    <button
                      onClick={() => setOpenCategory(open ? null : c.id)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left"
                    >
                      {open ? (
                        <ChevronDown className="h-4 w-4 text-ink-400" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-ink-400" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-ink-500">
                            {c.id}
                          </span>
                          <span className="text-sm font-semibold text-ink-100">
                            {c.title}
                          </span>
                        </div>
                        <div className="text-[11px] text-ink-500 line-clamp-1">
                          {c.description}
                        </div>
                      </div>
                      <span className="font-mono text-xs tabular-nums text-ink-200">
                        {score.toFixed(2)}
                      </span>
                      <div className="w-24">
                        <ScoreBar current={score} target={5} />
                      </div>
                    </button>
                    {open && (
                      <div className="border-t border-white/5 px-4 py-3 space-y-2">
                        {c.subcategories.map((s) => (
                          <div
                            key={s.id}
                            className="grid grid-cols-12 gap-3 rounded-lg border border-white/5 bg-ink-900/40 px-3 py-2"
                          >
                            <div className="col-span-12 lg:col-span-7">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10px] text-ink-500">
                                  {s.id}
                                </span>
                                <span className="text-sm font-medium text-ink-100">
                                  {s.title}
                                </span>
                              </div>
                              <p className="mt-0.5 text-[12px] text-ink-400 leading-snug">
                                {s.description}
                              </p>
                            </div>
                            <div className="col-span-6 lg:col-span-2">
                              <MaturityChip level={s.currentScore} />
                            </div>
                            <div className="col-span-6 lg:col-span-3 flex flex-col justify-center">
                              <div className="flex items-center justify-between text-[10px] text-ink-400">
                                <span>{s.currentScore}</span>
                                <span>target {s.targetScore}</span>
                              </div>
                              <ScoreBar
                                current={s.currentScore}
                                target={s.targetScore}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
