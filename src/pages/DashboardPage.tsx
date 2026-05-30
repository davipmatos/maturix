import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Download,
  Flame,
  Minus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScoreBar } from "@/components/ui/Progress";
import { MaturityChip } from "@/components/ui/MaturityChip";
import { RadarScore } from "@/components/charts/RadarScore";
import { TrendChart } from "@/components/charts/TrendChart";
import { HeatmapMatrix } from "@/components/charts/HeatmapMatrix";
import { FunctionBars } from "@/components/charts/FunctionBars";
import {
  FUNCTION_BREAKDOWN,
  MOCK_ACTIVITY,
  MOCK_ORG,
  MOCK_RECOMMENDATIONS,
  buildKPIs,
} from "@/data/mockData";
import {
  formatDateTime,
  priorityColor,
  scoreColor,
  scoreLabel,
} from "@/lib/utils";
import { MaturityLevel, getAllSubcategories } from "@/data/nistFramework";

export function DashboardPage() {
  const kpis = buildKPIs();
  const topRecs = MOCK_RECOMMENDATIONS.filter(
    (r) => r.priority === "critical" || r.priority === "high",
  ).slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <Calendar className="h-3.5 w-3.5" />
            <span>Q2 2026 · Assessment in progress</span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            Cybersecurity maturity overview
          </h1>
          <p className="text-sm text-ink-400">
            {MOCK_ORG.name} · NIST CSF 2.0 baseline against a tier-{Math.round(kpis[0] ? Number(kpis[0].value) + 1 : 4)} target
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="md">
            <Download className="h-4 w-4" /> Export brief
          </Button>
          <Link to="/app/assessments">
            <Button variant="primary" size="md">
              Open Q2 assessment <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => {
          const TrendIcon =
            k.trend === "up"
              ? ArrowUpRight
              : k.trend === "down"
                ? ArrowDownRight
                : Minus;
          const trendColor =
            k.label === "Maturity gap vs target"
              ? k.trend === "down"
                ? "text-emerald-400"
                : "text-rose-400"
              : k.label === "Outcomes at Tier 1"
                ? k.trend === "down"
                  ? "text-emerald-400"
                  : "text-rose-400"
                : k.trend === "up"
                  ? "text-emerald-400"
                  : "text-rose-400";
          return (
            <Card key={k.label} className="overflow-hidden">
              <CardContent className="pt-5">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium text-ink-400">
                    {k.label}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-[11px] ${trendColor}`}>
                    <TrendIcon className="h-3 w-3" />
                    {k.delta}
                  </span>
                </div>
                <div className="mt-2 flex items-end gap-3">
                  <div className="text-3xl font-bold tracking-tight text-white">
                    {k.value}
                  </div>
                </div>
                <div className="mt-1 text-[11px] text-ink-500">{k.hint}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts row 1 */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Maturity radar — Current vs Target</CardTitle>
              <CardSubtitle>
                NIST CSF 2.0 — averaged across all outcomes per function
              </CardSubtitle>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-ink-300">
              <Legend swatch="#5a8aff" label="Current" />
              <Legend swatch="#22c55e" label="Target" dashed />
            </div>
          </CardHeader>
          <CardContent>
            <RadarScore />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Function breakdown</CardTitle>
            <CardSubtitle>Average maturity per CSF Function</CardSubtitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {FUNCTION_BREAKDOWN.map((fn) => {
                const gap = fn.target - fn.current;
                return (
                  <div key={fn.id}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: fn.color }}
                        />
                        <span className="text-sm font-medium text-ink-100">
                          {fn.name}
                        </span>
                        <span className="text-[10px] font-mono text-ink-500">
                          {fn.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span
                          className="font-mono tabular-nums font-semibold"
                          style={{ color: scoreColor(fn.current) }}
                        >
                          {fn.current.toFixed(2)}
                        </span>
                        <span className="text-ink-500">→</span>
                        <span className="font-mono tabular-nums text-ink-300">
                          {fn.target.toFixed(2)}
                        </span>
                        <Badge tone={gap > 1 ? "danger" : gap > 0.5 ? "warning" : "success"}>
                          gap {gap.toFixed(2)}
                        </Badge>
                      </div>
                    </div>
                    <ScoreBar current={fn.current} target={fn.target} />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts row 2 */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Maturity trend</CardTitle>
              <CardSubtitle>Five quarterly assessment cycles</CardSubtitle>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-ink-300">
              <Legend swatch="#5a8aff" label="Overall" />
              <Legend swatch="#8b5cf6" label="Govern" />
              <Legend swatch="#10b981" label="Protect" />
              <Legend swatch="#f59e0b" label="Detect" />
            </div>
          </CardHeader>
          <CardContent>
            <TrendChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Functions — current vs target</CardTitle>
            <CardSubtitle>Bar comparison per function</CardSubtitle>
          </CardHeader>
          <CardContent>
            <FunctionBars />
          </CardContent>
        </Card>
      </div>

      {/* Heatmap + AI insights */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Category heatmap</CardTitle>
            <CardSubtitle>
              22 NIST CSF 2.0 categories — color = average maturity
            </CardSubtitle>
          </CardHeader>
          <CardContent>
            <HeatmapMatrix />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-brand-300" /> Top
                recommendations
              </CardTitle>
              <CardSubtitle>Highest impact next steps</CardSubtitle>
            </div>
            <Link
              to="/app/recommendations"
              className="text-[11px] text-brand-300 hover:text-brand-200"
            >
              View all
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {topRecs.map((r) => (
              <div
                key={r.id}
                className="rounded-xl border border-white/5 bg-ink-950/50 p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-ink-500">
                      {r.subcategoryId}
                    </div>
                    <div className="mt-0.5 truncate text-sm font-semibold text-ink-50">
                      {r.title}
                    </div>
                  </div>
                  <span
                    className="rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: `${priorityColor(r.priority)}25`,
                      color: priorityColor(r.priority),
                    }}
                  >
                    {r.priority}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-400">
                  <span className="inline-flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +{r.uplift} maturity
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Flame className="h-3 w-3 text-rose-400" /> -{r.riskReduction}% risk
                  </span>
                  <span className="ml-auto rounded-md bg-white/5 px-1.5 py-0.5 font-mono">
                    {r.effort}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Activity + Distribution */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Activity feed</CardTitle>
            <CardSubtitle>Recent changes to the Q2 2026 assessment</CardSubtitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-white/5">
              {MOCK_ACTIVITY.map((a) => (
                <li
                  key={a.id}
                  className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-[11px] font-bold text-ink-200">
                    {a.actor === "System"
                      ? "·"
                      : a.actor
                          .split(" ")
                          .map((p) => p[0])
                          .slice(0, 2)
                          .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-ink-100">
                      <span className="font-semibold">{a.actor}</span>{" "}
                      <span className="text-ink-300">{a.action.toLowerCase()}</span>{" "}
                      <span className="font-medium text-brand-200">{a.target}</span>
                      {a.delta && (
                        <span className="ml-1.5 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-300">
                          {a.delta}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-ink-500">
                      {formatDateTime(a.at)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Outcomes by maturity tier</CardTitle>
            <CardSubtitle>106 outcomes scored</CardSubtitle>
          </CardHeader>
          <CardContent>
            <DistributionByTier />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Legend({
  swatch,
  label,
  dashed,
}: {
  swatch: string;
  label: string;
  dashed?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="h-1 w-4 rounded-full"
        style={{
          background: dashed
            ? `repeating-linear-gradient(90deg, ${swatch} 0 4px, transparent 4px 8px)`
            : swatch,
        }}
      />
      {label}
    </span>
  );
}

function DistributionByTier() {
  // Build a histogram out of all subcategory scores.
  const counts: Record<MaturityLevel, number> = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const all = getAllSubcategories();
  for (const s of all) counts[s.currentScore]++;
  const total = all.length;
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((lvl) => {
        const c = counts[lvl as MaturityLevel];
        const pct = total ? (c / total) * 100 : 0;
        return (
          <div key={lvl} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <MaturityChip level={lvl as MaturityLevel} />
              <span className="font-mono tabular-nums text-ink-200">
                {c}{" "}
                <span className="text-ink-500">({pct.toFixed(0)}%)</span>
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${pct}%`,
                  backgroundColor: scoreColor(lvl),
                }}
              />
            </div>
            <div className="text-[10px] text-ink-500">{scoreLabel(lvl)}</div>
          </div>
        );
      })}
    </div>
  );
}
