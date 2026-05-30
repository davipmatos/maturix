import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  FileText,
  Filter,
  PenSquare,
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
import { MaturityChip } from "@/components/ui/MaturityChip";
import { MOCK_ASSESSMENTS, FUNCTION_BREAKDOWN } from "@/data/mockData";
import {
  NIST_FRAMEWORK,
  averageCategoryScore,
  averageFunctionScore,
  averageFunctionTarget,
} from "@/data/nistFramework";
import { formatDate, scoreColor } from "@/lib/utils";
import { useTranslation } from "@/i18n/I18nProvider";

export function AssessmentDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const assessment =
    MOCK_ASSESSMENTS.find((a) => a.id === id) ?? MOCK_ASSESSMENTS[0];

  const [activeFn, setActiveFn] = useState<string>(NIST_FRAMEWORK[0].id);
  const fn = useMemo(
    () => NIST_FRAMEWORK.find((f) => f.id === activeFn) ?? NIST_FRAMEWORK[0],
    [activeFn],
  );

  const statusKey =
    assessment.status === "in_progress"
      ? "status.inProgress"
      : assessment.status === "draft"
        ? "status.draft"
        : "status.completed";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <Link
            to="/app/assessments"
            className="inline-flex items-center gap-1.5 text-xs text-ink-400 hover:text-ink-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> {t("assessment.back")}
          </Link>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            {assessment.name}
          </h1>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink-400">
            <Badge tone={assessment.status === "completed" ? "success" : "info"}>
              {t(statusKey)}
            </Badge>
            <span className="inline-flex items-center gap-1">
              <User className="h-3 w-3" /> {assessment.leadAssessor}
            </span>
            <span>·</span>
            <span>{assessment.scope}</span>
            <span>·</span>
            <span>
              {formatDate(assessment.startedAt)}
              {assessment.completedAt && ` → ${formatDate(assessment.completedAt)}`}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" /> {t("common.exportPdf")}
          </Button>
          <Button>
            <PenSquare className="h-4 w-4" /> {t("common.continue")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-5">
            <div className="text-xs text-ink-400">{t("assessment.overall")}</div>
            <div className="mt-1 flex items-end gap-3">
              <div className="text-3xl font-bold tracking-tight text-white">
                {assessment.overallScore.toFixed(2)}
              </div>
              <div className="pb-1 text-xs text-ink-400">
                {t("common.target")} {assessment.overallTarget.toFixed(2)}
              </div>
            </div>
            <div className="mt-3">
              <ScoreBar
                current={assessment.overallScore}
                target={assessment.overallTarget}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <div className="text-xs text-ink-400">
              {t("assessment.outcomesScored")}
            </div>
            <div className="mt-1 text-3xl font-bold tracking-tight text-white">
              {
                NIST_FRAMEWORK.flatMap((f) => f.categories).flatMap(
                  (c) => c.subcategories,
                ).length
              }
            </div>
            <div className="text-[11px] text-ink-500">
              {t("assessment.outcomesScored.hint", {
                fn: NIST_FRAMEWORK.length,
                cat: NIST_FRAMEWORK.flatMap((f) => f.categories).length,
              })}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <div className="text-xs text-ink-400">{t("assessment.evidence")}</div>
            <div className="mt-1 text-3xl font-bold tracking-tight text-white">
              42
            </div>
            <div className="text-[11px] text-ink-500">
              {t("assessment.evidence.hint")}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-2">
        {NIST_FRAMEWORK.map((f) => {
          const active = f.id === activeFn;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFn(f.id)}
              className={`group flex items-center gap-2.5 rounded-2xl border px-3.5 py-2 text-left transition-colors ${
                active
                  ? "border-white/20 bg-white/10"
                  : "border-white/5 bg-ink-900/50 hover:bg-white/5"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: f.color }}
              />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-ink-100">
                  {t(`nist.${f.id}.name`)}
                </div>
                <div className="text-[10px] text-ink-500">
                  {averageFunctionScore(f).toFixed(2)} →{" "}
                  {averageFunctionTarget(f).toFixed(2)}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: fn.color }}
              />
              {t(`nist.${fn.id}.name`)}
              <span className="font-mono text-[10px] text-ink-500">{fn.id}</span>
            </CardTitle>
            <CardSubtitle className="max-w-2xl">
              {t(`nist.${fn.id}.description`)}
            </CardSubtitle>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-ink-300 hover:bg-white/10">
            <Filter className="h-3 w-3" /> {t("common.filter")}
          </button>
        </CardHeader>
        <CardContent className="space-y-5">
          {fn.categories.map((c) => {
            const catScore = averageCategoryScore(c);
            return (
              <div
                key={c.id}
                className="rounded-2xl border border-white/5 bg-ink-950/40 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-ink-500">
                        {c.id}
                      </span>
                      <span className="text-sm font-semibold text-ink-50">
                        {c.title}
                      </span>
                    </div>
                    <p className="mt-1 max-w-3xl text-xs text-ink-400">
                      {c.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge tone="brand" className="font-mono">
                      avg {catScore.toFixed(2)}
                    </Badge>
                    <div
                      className="h-2 w-24 rounded-full bg-white/5"
                      title={`avg ${catScore.toFixed(2)}`}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(catScore / 5) * 100}%`,
                          backgroundColor: scoreColor(catScore),
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-2">
                  {c.subcategories.map((s) => (
                    <div
                      key={s.id}
                      className="rounded-xl border border-white/5 bg-ink-900/50 p-3.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-mono text-[10px] text-ink-500">
                            {s.id}
                          </div>
                          <div className="mt-0.5 text-sm font-semibold text-ink-50">
                            {s.title}
                          </div>
                          <p className="mt-1 text-[12px] text-ink-400 leading-snug">
                            {s.description}
                          </p>
                        </div>
                        <MaturityChip level={s.currentScore} />
                      </div>

                      <div className="mt-3">
                        <div className="mb-1 flex items-center justify-between text-[10px] text-ink-400">
                          <span>
                            {t("common.current")} → {t("common.targetWord")}
                          </span>
                          <span className="font-mono">
                            {s.currentScore} / {s.targetScore}
                          </span>
                        </div>
                        <ScoreBar
                          current={s.currentScore}
                          target={s.targetScore}
                        />
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                        <span className="inline-flex items-center gap-1 text-ink-400">
                          <User className="h-3 w-3" />
                          {s.owner}
                        </span>
                        <span className="text-ink-500">·</span>
                        <span className="text-ink-400">
                          {t("common.reviewed")} {formatDate(s.lastReviewed)}
                        </span>
                        {s.evidence.length > 0 && (
                          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-ink-300">
                            <FileText className="h-3 w-3" />
                            {s.evidence.length} {t("common.evidence")}
                          </span>
                        )}
                        {s.evidence.length === 0 && (
                          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300">
                            {t("common.noEvidence")}
                          </span>
                        )}
                      </div>
                      {s.notes && (
                        <div className="mt-3 rounded-lg border border-amber-400/20 bg-amber-500/5 px-2.5 py-1.5 text-[11px] text-amber-200">
                          <span className="font-semibold">
                            {t("common.note")} ·{" "}
                          </span>
                          {s.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("assessment.summary")}</CardTitle>
          <CardSubtitle>{t("assessment.summary.subtitle")}</CardSubtitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {FUNCTION_BREAKDOWN.map((f) => (
              <div
                key={f.id}
                className="rounded-xl border border-white/5 bg-ink-950/40 p-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-ink-100">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: f.color }}
                  />
                  {t(f.nameKey)}
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-ink-400">
                  <span>{t("common.current")}</span>
                  <span className="font-mono text-ink-100">
                    {f.current.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-ink-400">
                  <span>{t("common.targetWord")}</span>
                  <span className="font-mono text-ink-100">
                    {f.target.toFixed(2)}
                  </span>
                </div>
                <div className="mt-2">
                  <ScoreBar current={f.current} target={f.target} />
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-300">
                    {f.subcategories} {t("assessment.outcomesScored").toLowerCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
