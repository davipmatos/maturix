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

const STATUS_META = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    tone: "success" as const,
  },
  in_progress: {
    label: "In progress",
    icon: ClipboardEdit,
    tone: "info" as const,
  },
  draft: {
    label: "Draft",
    icon: CircleDashed,
    tone: "neutral" as const,
  },
};

export function AssessmentsPage() {
  const completed = MOCK_ASSESSMENTS.filter((a) => a.status === "completed");
  const active = MOCK_ASSESSMENTS.filter((a) => a.status !== "completed");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>Assessments</span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            Maturity assessments
          </h1>
          <p className="text-sm text-ink-400">
            Plan, run and finalize NIST CSF 2.0 assessment cycles across your organization.
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> New assessment
        </Button>
      </div>

      {/* Active */}
      <Card>
        <CardHeader>
          <CardTitle>Active</CardTitle>
          <CardSubtitle>
            {active.length} assessment{active.length === 1 ? "" : "s"} in progress or draft
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
                        {meta.label}
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
                      Started {formatDate(a.startedAt)}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-[11px] text-ink-300">
                      <span>Score vs target</span>
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

      {/* History */}
      <Card>
        <CardHeader>
          <CardTitle>History</CardTitle>
          <CardSubtitle>Completed assessment cycles</CardSubtitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-hidden border-t border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-ink-500">
                  <th className="px-5 py-3 text-left font-medium">Cycle</th>
                  <th className="px-5 py-3 text-left font-medium">Scope</th>
                  <th className="px-5 py-3 text-left font-medium">Lead</th>
                  <th className="px-5 py-3 text-left font-medium">Period</th>
                  <th className="px-5 py-3 text-right font-medium">Score</th>
                  <th className="px-5 py-3 text-right font-medium">Target</th>
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
                      {formatDate(a.startedAt)} → {a.completedAt && formatDate(a.completedAt)}
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
                        View
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
