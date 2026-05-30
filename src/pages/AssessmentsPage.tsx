import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarPlus,
  CheckCircle2,
  CircleDashed,
  ClipboardEdit,
  ClipboardList,
  Plus,
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
import { Button } from "@/components/ui/Button";
import { ScoreBar } from "@/components/ui/Progress";
import { MOCK_ASSESSMENTS } from "@/data/mockData";
import { formatDate } from "@/lib/utils";
import { useTranslation } from "@/i18n/I18nProvider";

const STATUS_META = {
  completed: { icon: CheckCircle2, tone: "success" as const, key: "status.completed" },
  in_progress: { icon: ClipboardEdit, tone: "info" as const, key: "status.inProgress" },
  draft: { icon: CircleDashed, tone: "neutral" as const, key: "status.draft" },
};

export function AssessmentsPage() {
  const { t } = useTranslation();
  const completed = MOCK_ASSESSMENTS.filter((a) => a.status === "completed");
  const active = MOCK_ASSESSMENTS.filter((a) => a.status !== "completed");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>{t("nav.assessments")}</span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            {t("assessments.title")}
          </h1>
          <p className="text-sm text-ink-400">{t("assessments.subtitle")}</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> {t("assessments.new")}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("assessments.active")}</CardTitle>
          <CardSubtitle>
            {t("assessments.active.subtitle", {
              n: active.length,
              s: active.length === 1 ? "" : "s",
            })}
          </CardSubtitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {active.map((a) => {
              const meta = STATUS_META[a.status];
              return (
                <Link
                  key={a.id}
                  to={`/app/assessments/${a.id}`}
                  className="group rounded-2xl border border-white/5 bg-ink-950/40 p-5 transition-colors hover:border-white/20 hover:bg-ink-900/60"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Badge tone={meta.tone}>
                        <meta.icon className="h-3 w-3" />
                        {t(meta.key)}
                      </Badge>
                      <div className="mt-2 text-base font-semibold text-ink-50">
                        {a.name}
                      </div>
                      <div className="text-xs text-ink-400">{a.scope}</div>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:text-ink-200" />
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-[11px] text-ink-400">
                    <span className="inline-flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {a.leadAssessor}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarPlus className="h-3 w-3" />
                      {t("assessments.started")} {formatDate(a.startedAt)}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-[11px] text-ink-300">
                      <span>{t("assessments.scoreVsTarget")}</span>
                      <span className="font-mono">
                        {a.overallScore.toFixed(2)} / {a.overallTarget.toFixed(2)}
                      </span>
                    </div>
                    <ScoreBar
                      current={a.overallScore}
                      target={a.overallTarget}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("assessments.history")}</CardTitle>
          <CardSubtitle>{t("assessments.history.subtitle")}</CardSubtitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-hidden border-t border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-ink-500">
                  <th className="px-5 py-3 text-left font-medium">
                    {t("assessments.col.cycle")}
                  </th>
                  <th className="px-5 py-3 text-left font-medium">
                    {t("assessments.col.scope")}
                  </th>
                  <th className="px-5 py-3 text-left font-medium">
                    {t("assessments.col.lead")}
                  </th>
                  <th className="px-5 py-3 text-left font-medium">
                    {t("assessments.col.period")}
                  </th>
                  <th className="px-5 py-3 text-right font-medium">
                    {t("assessments.col.score")}
                  </th>
                  <th className="px-5 py-3 text-right font-medium">
                    {t("assessments.col.target")}
                  </th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {completed.map((a) => (
                  <tr key={a.id} className="hover:bg-white/[0.03]">
                    <td className="px-5 py-3">
                      <div className="font-semibold text-ink-100">{a.name}</div>
                      <div className="text-[11px] text-ink-500">{a.cycle}</div>
                    </td>
                    <td className="px-5 py-3 text-ink-300">{a.scope}</td>
                    <td className="px-5 py-3 text-ink-300">{a.leadAssessor}</td>
                    <td className="px-5 py-3 text-[11px] text-ink-400">
                      {formatDate(a.startedAt)} →{" "}
                      {a.completedAt && formatDate(a.completedAt)}
                    </td>
                    <td className="px-5 py-3 text-right font-mono tabular-nums text-ink-100">
                      {a.overallScore.toFixed(2)}
                    </td>
                    <td className="px-5 py-3 text-right font-mono tabular-nums text-ink-400">
                      {a.overallTarget.toFixed(2)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <Link
                        to={`/app/assessments/${a.id}`}
                        className="text-[11px] font-semibold text-brand-300 hover:text-brand-200"
                      >
                        {t("common.view")}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
