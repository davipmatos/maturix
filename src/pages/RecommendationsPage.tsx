import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Flame,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MOCK_RECOMMENDATIONS, Recommendation } from "@/data/mockData";
import { formatDate, priorityColor } from "@/lib/utils";
import { useTranslation } from "@/i18n/I18nProvider";

const PRIORITY_ORDER: Recommendation["priority"][] = [
  "critical",
  "high",
  "medium",
  "low",
];

export function RecommendationsPage() {
  const { t } = useTranslation();
  const [priority, setPriority] = useState<Recommendation["priority"] | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    const list =
      priority === "all"
        ? MOCK_RECOMMENDATIONS
        : MOCK_RECOMMENDATIONS.filter((r) => r.priority === priority);
    return [...list].sort(
      (a, b) =>
        PRIORITY_ORDER.indexOf(a.priority) - PRIORITY_ORDER.indexOf(b.priority),
    );
  }, [priority]);

  const totals = useMemo(() => {
    const totalUplift = MOCK_RECOMMENDATIONS.reduce((s, r) => s + r.uplift, 0);
    const totalRisk = MOCK_RECOMMENDATIONS.reduce(
      (s, r) => s + r.riskReduction,
      0,
    );
    return {
      count: MOCK_RECOMMENDATIONS.length,
      critical: MOCK_RECOMMENDATIONS.filter((r) => r.priority === "critical")
        .length,
      uplift: totalUplift,
      risk: totalRisk,
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <Sparkles className="h-3.5 w-3.5 text-brand-300" />{" "}
            {t("topbar.aiInsights")}
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            {t("recs.title")}
          </h1>
          <p className="text-sm text-ink-400">{t("recs.subtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat
          label={t("recs.stat.open")}
          value={String(totals.count)}
          hint={t("recs.stat.open.hint")}
          icon={CheckCircle2}
        />
        <Stat
          label={t("recs.stat.critical")}
          value={String(totals.critical)}
          hint={t("recs.stat.critical.hint")}
          icon={Flame}
          tone="rose"
        />
        <Stat
          label={t("recs.stat.uplift")}
          value={`+${totals.uplift}`}
          hint={t("recs.stat.uplift.hint")}
          icon={TrendingUp}
          tone="emerald"
        />
        <Stat
          label={t("recs.stat.risk")}
          value={`-${totals.risk}%`}
          hint={t("recs.stat.risk.hint")}
          icon={Flame}
          tone="amber"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {(["all", "critical", "high", "medium", "low"] as const).map((p) => {
          const active = priority === p;
          const labelKey = p === "all" ? "common.all" : `priority.${p}`;
          return (
            <button
              key={p}
              onClick={() => setPriority(p)}
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                active
                  ? "border-brand-400/40 bg-brand-500/15 text-brand-100"
                  : "border-white/10 bg-white/5 text-ink-300 hover:bg-white/10"
              }`}
            >
              {t(labelKey)}
            </button>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("recs.queue")}</CardTitle>
          <CardSubtitle>
            {t("recs.queue.subtitle", {
              n: filtered.length,
              s: filtered.length === 1 ? "" : "s",
            })}
          </CardSubtitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border border-white/5 bg-ink-950/40 p-4 transition-colors hover:bg-ink-900/60"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{
                        backgroundColor: `${priorityColor(r.priority)}25`,
                        color: priorityColor(r.priority),
                      }}
                    >
                      {t(`priority.${r.priority}`)}
                    </span>
                    <span className="font-mono text-[10px] text-ink-500">
                      {r.subcategoryId}
                    </span>
                  </div>
                  <div className="mt-1 text-base font-semibold text-ink-50">
                    {r.title}
                  </div>
                  <p className="mt-1 max-w-3xl text-[12px] text-ink-400 leading-snug">
                    {r.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <Mini
                    label={t("recs.uplift")}
                    value={`+${r.uplift}`}
                    accent="emerald"
                  />
                  <Mini
                    label={t("recs.risk")}
                    value={`-${r.riskReduction}%`}
                    accent="rose"
                  />
                  <Mini label={t("recs.effort")} value={r.effort} accent="brand" />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-ink-400">
                <span className="inline-flex items-center gap-1">
                  <User className="h-3 w-3" /> {r.owner}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {t("common.due")}{" "}
                  {formatDate(r.dueBy)}
                </span>
                <Badge tone="neutral" className="ml-auto">
                  {r.function} · {r.category}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
  icon: Icon,
  tone = "brand",
}: {
  label: string;
  value: string;
  hint: string;
  icon: typeof CheckCircle2;
  tone?: "brand" | "rose" | "emerald" | "amber";
}) {
  const toneColor: Record<typeof tone, string> = {
    brand: "text-brand-300",
    rose: "text-rose-400",
    emerald: "text-emerald-400",
    amber: "text-amber-300",
  };
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="flex items-start justify-between">
          <span className="text-xs text-ink-400">{label}</span>
          <Icon className={`h-4 w-4 ${toneColor[tone]}`} />
        </div>
        <div className="mt-2 text-2xl font-bold tracking-tight text-white">
          {value}
        </div>
        <div className="text-[11px] text-ink-500">{hint}</div>
      </CardContent>
    </Card>
  );
}

function Mini({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "emerald" | "rose" | "brand";
}) {
  const colors: Record<typeof accent, string> = {
    emerald: "text-emerald-300 bg-emerald-500/10 ring-emerald-400/30",
    rose: "text-rose-300 bg-rose-500/10 ring-rose-400/30",
    brand: "text-brand-200 bg-brand-500/10 ring-brand-400/30",
  };
  return (
    <div
      className={`min-w-[64px] rounded-lg px-2.5 py-1.5 ring-1 ${colors[accent]}`}
    >
      <div className="text-[9px] uppercase tracking-wider opacity-80">
        {label}
      </div>
      <div className="text-sm font-bold tabular-nums">{value}</div>
    </div>
  );
}
