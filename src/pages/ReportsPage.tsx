import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileBarChart2,
  FileText,
  Mail,
  Share2,
  Sparkles,
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

const REPORTS = [
  {
    id: "rep_exec_q2",
    name: "Executive Brief — Q2 2026",
    audience: "Board / ExCo",
    pages: 8,
    format: "PDF",
    lastUpdated: "2026-05-27",
    description:
      "One-pager + appendices summarizing maturity posture, top risks and a prioritized remediation roadmap for the next 90 days.",
    tone: "brand" as const,
  },
  {
    id: "rep_csf_full_q2",
    name: "NIST CSF 2.0 Full Assessment — Q2 2026",
    audience: "GRC, Internal Audit",
    pages: 64,
    format: "PDF · XLSX",
    lastUpdated: "2026-05-26",
    description:
      "Complete scoring book: 6 Functions, 22 Categories, 100+ outcomes, evidence references and assessor notes.",
    tone: "info" as const,
  },
  {
    id: "rep_supplier_q2",
    name: "Cybersecurity Supply Chain Risk — Top 20",
    audience: "Procurement, CISO",
    pages: 22,
    format: "PDF",
    lastUpdated: "2026-05-19",
    description:
      "Concentration of tier-1/2 vendor exposure mapped to GV.SC outcomes, with contract-clause uplift recommendations.",
    tone: "violet" as const,
  },
  {
    id: "rep_lgpd_q2",
    name: "LGPD / ANPD Readiness Snapshot",
    audience: "DPO, Legal",
    pages: 14,
    format: "PDF",
    lastUpdated: "2026-05-12",
    description:
      "Mapping of CSF outcomes to LGPD obligations, including breach notification readiness and DPIA coverage.",
    tone: "success" as const,
  },
  {
    id: "rep_dr_q2",
    name: "Resilience & Recovery Posture",
    audience: "BCM, CTO",
    pages: 18,
    format: "PDF",
    lastUpdated: "2026-05-09",
    description:
      "Recover function deep-dive: RTO/RPO matrix, last DR test outcomes, and gaps versus the target tier.",
    tone: "warning" as const,
  },
  {
    id: "rep_trend",
    name: "5-cycle Maturity Trend",
    audience: "CISO, ExCo",
    pages: 6,
    format: "PDF",
    lastUpdated: "2026-05-02",
    description:
      "Quarter-over-quarter trend across all functions with delta annotations and forecasted Q3 trajectory.",
    tone: "brand" as const,
  },
];

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <FileBarChart2 className="h-3.5 w-3.5" /> Reports
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            Board-ready reporting
          </h1>
          <p className="text-sm text-ink-400">
            One-click generation of executive briefs, full assessment books and
            regulator-facing snapshots.
          </p>
        </div>
        <Button>
          <Sparkles className="h-4 w-4" />
          Generate from this assessment
        </Button>
      </div>

      <Card className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-50"
          style={{
            background:
              "radial-gradient(80% 60% at 20% 0%, rgba(53,99,246,0.35), transparent 70%)",
          }}
        />
        <CardContent className="relative pt-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <Badge tone="brand">
                <Sparkles className="h-3 w-3" /> Q2 2026 Executive Brief
              </Badge>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-white">
                Quarterly cybersecurity maturity brief
              </h3>
              <p className="mt-1 text-sm text-ink-300">
                Auto-generated narrative covering posture vs target, the 4
                critical gaps closed since Q1 and the proposed 90-day roadmap.
                Approve to share with the board.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                <ListItem>
                  Overall maturity grew from 2.42 to 2.60 (+7.4%) quarter-over-quarter.
                </ListItem>
                <ListItem>
                  Govern lift driven by ERM integration and policy refresh.
                </ListItem>
                <ListItem>
                  Critical gap remains in supplier contractual clauses (GV.SC-03).
                </ListItem>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Button>
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4" />
                Email to ExCo
              </Button>
              <Button variant="ghost">
                <Share2 className="h-4 w-4" />
                Share link
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {REPORTS.map((r) => (
          <Card key={r.id} className="group">
            <CardHeader>
              <Badge tone={r.tone}>{r.audience}</Badge>
              <CardTitle className="mt-2">{r.name}</CardTitle>
              <CardSubtitle>{r.description}</CardSubtitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-[11px] text-ink-400">
                <span className="inline-flex items-center gap-1">
                  <FileText className="h-3 w-3" /> {r.pages} pages · {r.format}
                </span>
                <span>Updated {r.lastUpdated}</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="h-3.5 w-3.5" /> Download
                </Button>
                <Button variant="ghost" size="sm">
                  Preview <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-ink-200">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
      <span>{children}</span>
    </li>
  );
}
