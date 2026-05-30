import {
  NIST_FRAMEWORK,
  averageFunctionScore,
  averageFunctionTarget,
  getAllSubcategories,
  overallMaturity,
  overallTarget,
} from "./nistFramework";

export interface Organization {
  id: string;
  name: string;
  industry: string;
  sizeBand: string;
  headquarters: string;
  primaryRegulations: string[];
  riskAppetite: "Low" | "Moderate" | "High";
  crownJewels: string[];
}

export const MOCK_ORG: Organization = {
  id: "org_orion",
  name: "Orion Financial Group",
  industry: "Financial Services",
  sizeBand: "Enterprise (5,000 - 10,000 employees)",
  headquarters: "São Paulo, BR",
  primaryRegulations: ["LGPD", "ISO 27001", "SOX", "PCI-DSS"],
  riskAppetite: "Low",
  crownJewels: [
    "Core banking platform",
    "Customer PII data lake",
    "Payment gateway",
    "Treasury management system",
  ],
};

export interface AssessmentSummary {
  id: string;
  name: string;
  cycle: string;
  status: "completed" | "in_progress" | "draft";
  startedAt: string;
  completedAt?: string;
  leadAssessor: string;
  overallScore: number;
  overallTarget: number;
  scope: string;
}

export const MOCK_ASSESSMENTS: AssessmentSummary[] = [
  {
    id: "asmt_2026q2",
    name: "Enterprise Maturity Assessment — Q2 2026",
    cycle: "Q2 2026",
    status: "in_progress",
    startedAt: "2026-05-01",
    leadAssessor: "Neto Loureiro",
    overallScore: overallMaturity(),
    overallTarget: overallTarget(),
    scope: "Enterprise-wide, 22 critical services",
  },
  {
    id: "asmt_2026q1",
    name: "Enterprise Maturity Assessment — Q1 2026",
    cycle: "Q1 2026",
    status: "completed",
    startedAt: "2026-01-12",
    completedAt: "2026-02-28",
    leadAssessor: "Neto Loureiro",
    overallScore: 2.42,
    overallTarget: 3.95,
    scope: "Enterprise-wide",
  },
  {
    id: "asmt_2025q4",
    name: "Annual Maturity Review — 2025",
    cycle: "Q4 2025",
    status: "completed",
    startedAt: "2025-10-04",
    completedAt: "2025-12-19",
    leadAssessor: "Carla Mendes",
    overallScore: 2.18,
    overallTarget: 3.8,
    scope: "Enterprise-wide",
  },
  {
    id: "asmt_2025q2",
    name: "Mid-year Targeted Assessment — 2025",
    cycle: "Q2 2025",
    status: "completed",
    startedAt: "2025-04-22",
    completedAt: "2025-06-30",
    leadAssessor: "Pedro Alcântara",
    overallScore: 1.95,
    overallTarget: 3.5,
    scope: "Identify + Protect functions only",
  },
  {
    id: "asmt_payments_2026",
    name: "Payments Domain Deep-dive",
    cycle: "Q2 2026",
    status: "draft",
    startedAt: "2026-05-22",
    leadAssessor: "Neto Loureiro",
    overallScore: 0,
    overallTarget: 4.3,
    scope: "Payments domain only — PCI scope",
  },
];

export interface TrendPoint {
  period: string;
  govern: number;
  identify: number;
  protect: number;
  detect: number;
  respond: number;
  recover: number;
  overall: number;
}

export const MOCK_TREND: TrendPoint[] = [
  {
    period: "Q2 2025",
    govern: 1.6,
    identify: 1.9,
    protect: 2.2,
    detect: 1.8,
    respond: 1.7,
    recover: 1.4,
    overall: 1.78,
  },
  {
    period: "Q3 2025",
    govern: 1.7,
    identify: 2.0,
    protect: 2.3,
    detect: 1.9,
    respond: 1.9,
    recover: 1.6,
    overall: 1.9,
  },
  {
    period: "Q4 2025",
    govern: 1.9,
    identify: 2.1,
    protect: 2.5,
    detect: 2.1,
    respond: 2.2,
    recover: 1.8,
    overall: 2.1,
  },
  {
    period: "Q1 2026",
    govern: 2.2,
    identify: 2.3,
    protect: 2.8,
    detect: 2.3,
    respond: 2.4,
    recover: 2.0,
    overall: 2.42,
  },
  {
    period: "Q2 2026",
    govern: averageFunctionScore(NIST_FRAMEWORK[0]),
    identify: averageFunctionScore(NIST_FRAMEWORK[1]),
    protect: averageFunctionScore(NIST_FRAMEWORK[2]),
    detect: averageFunctionScore(NIST_FRAMEWORK[3]),
    respond: averageFunctionScore(NIST_FRAMEWORK[4]),
    recover: averageFunctionScore(NIST_FRAMEWORK[5]),
    overall: overallMaturity(),
  },
];

export interface Recommendation {
  id: string;
  title: string;
  function: string;
  category: string;
  subcategoryId: string;
  priority: "critical" | "high" | "medium" | "low";
  effort: "S" | "M" | "L" | "XL";
  uplift: number;
  riskReduction: number;
  owner: string;
  dueBy: string;
  description: string;
}

export const MOCK_RECOMMENDATIONS: Recommendation[] = [
  {
    id: "rec_001",
    title: "Add cybersecurity clauses to standard supplier MSA template",
    function: "GV",
    category: "GV.SC",
    subcategoryId: "GV.SC-03",
    priority: "critical",
    effort: "M",
    uplift: 2,
    riskReduction: 38,
    owner: "Legal",
    dueBy: "2026-07-31",
    description:
      "Update master service agreement to require ISO 27001 or SOC 2 Type II evidence for tier-1 and tier-2 suppliers, with annual attestation refresh.",
  },
  {
    id: "rec_002",
    title: "Roll out secure-SDLC SAST coverage to remaining 15 services",
    function: "PR",
    category: "PR.PS",
    subcategoryId: "PR.PS-06",
    priority: "high",
    effort: "L",
    uplift: 2,
    riskReduction: 27,
    owner: "AppSec",
    dueBy: "2026-09-30",
    description:
      "Extend SAST + SCA pipeline integration to legacy services. Define gating thresholds for criticals/highs to block deployment to production.",
  },
  {
    id: "rec_003",
    title: "Automate ANPD breach notification workflow",
    function: "RS",
    category: "RS.CO",
    subcategoryId: "RS.CO-02",
    priority: "high",
    effort: "M",
    uplift: 2,
    riskReduction: 22,
    owner: "Comms / Legal",
    dueBy: "2026-08-15",
    description:
      "Operationalize LGPD notification deadlines via SOAR playbook. Standardize templates for DPA, ANPD and data subject notification.",
  },
  {
    id: "rec_004",
    title: "Rebaseline risk appetite with quantitative loss thresholds",
    function: "GV",
    category: "GV.RM",
    subcategoryId: "GV.RM-02",
    priority: "high",
    effort: "S",
    uplift: 2,
    riskReduction: 18,
    owner: "CRO",
    dueBy: "2026-07-15",
    description:
      "Translate qualitative appetite statements into BRL loss thresholds aligned with capital adequacy and Basel III metrics.",
  },
  {
    id: "rec_005",
    title: "Deploy third-party activity monitoring (vendor session capture)",
    function: "DE",
    category: "DE.CM",
    subcategoryId: "DE.CM-06",
    priority: "high",
    effort: "L",
    uplift: 2,
    riskReduction: 24,
    owner: "SOC + Vendor Mgmt",
    dueBy: "2026-10-31",
    description:
      "Stand up PAM session recording for vendor JIT access, and feed alerts into the SIEM correlation layer.",
  },
  {
    id: "rec_006",
    title: "Establish quarterly red team / purple team cycle",
    function: "ID",
    category: "ID.IM",
    subcategoryId: "ID.IM-02",
    priority: "medium",
    effort: "L",
    uplift: 2,
    riskReduction: 15,
    owner: "Red Team",
    dueBy: "2026-12-31",
    description:
      "Move from ad-hoc red teaming to a scheduled cadence with MITRE ATT&CK-mapped objectives, producing measurable improvements per cycle.",
  },
  {
    id: "rec_007",
    title: "Refresh InfoSec policy and obtain ExCo re-approval",
    function: "GV",
    category: "GV.PO",
    subcategoryId: "GV.PO-02",
    priority: "medium",
    effort: "S",
    uplift: 2,
    riskReduction: 10,
    owner: "GRC",
    dueBy: "2026-06-30",
    description:
      "Policy review is overdue (last revised 2025-09). Refresh and re-publish, including DORA and CSF 2.0 alignment.",
  },
  {
    id: "rec_008",
    title: "Publish data classification labels to all workforce mailboxes",
    function: "PR",
    category: "PR.DS",
    subcategoryId: "PR.DS-10",
    priority: "medium",
    effort: "M",
    uplift: 2,
    riskReduction: 12,
    owner: "GRC + IT",
    dueBy: "2026-09-30",
    description:
      "Move the Microsoft Purview pilot to full rollout. Train users on label semantics and DLP enforcement.",
  },
  {
    id: "rec_009",
    title: "Adopt public communications template for recovery updates",
    function: "RC",
    category: "RC.CO",
    subcategoryId: "RC.CO-04",
    priority: "low",
    effort: "S",
    uplift: 2,
    riskReduction: 6,
    owner: "Comms",
    dueBy: "2026-07-31",
    description:
      "Standardize pre-approved external statement templates for material recovery events, with legal and exec sign-off.",
  },
];

export interface ActivityEvent {
  id: string;
  at: string;
  actor: string;
  actionKey: string;
  target: string;
  delta?: string;
}

export const MOCK_ACTIVITY: ActivityEvent[] = [
  {
    id: "act_1",
    at: "2026-05-29T14:42:00Z",
    actor: "Neto Loureiro",
    actionKey: "activity.update",
    target: "PR.AA-03 — Users, services, hardware authenticated",
    delta: "3 → 4",
  },
  {
    id: "act_2",
    at: "2026-05-28T18:11:00Z",
    actor: "Carla Mendes",
    actionKey: "activity.attach",
    target: "PR.DS-11 — Backups maintained, protected and tested",
  },
  {
    id: "act_3",
    at: "2026-05-27T09:30:00Z",
    actor: "System",
    actionKey: "activity.generate",
    target: "Q2 2026 Executive Brief",
  },
  {
    id: "act_4",
    at: "2026-05-26T15:02:00Z",
    actor: "Pedro Alcântara",
    actionKey: "activity.createRec",
    target: "Automate ANPD breach notification workflow",
  },
  {
    id: "act_5",
    at: "2026-05-26T11:48:00Z",
    actor: "Neto Loureiro",
    actionKey: "activity.approve",
    target: "GV.SC-03 — Supplier cybersecurity contract clauses",
  },
  {
    id: "act_6",
    at: "2026-05-25T16:23:00Z",
    actor: "System",
    actionKey: "activity.drift",
    target: "GV.PO-02 — Policy last reviewed > 180 days",
  },
];

export interface KPI {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
  hint: string;
}

type Translator = (
  key: string,
  vars?: Record<string, string | number>,
) => string;

export function buildKPIs(t: Translator): KPI[] {
  const all = getAllSubcategories();
  const score = overallMaturity();
  const target = overallTarget();
  const gap = Number((target - score).toFixed(2));
  const critical = MOCK_RECOMMENDATIONS.filter(
    (r) => r.priority === "critical",
  ).length;
  const high = MOCK_RECOMMENDATIONS.filter((r) => r.priority === "high").length;
  const lowScore = all.filter((s) => s.currentScore <= 1).length;
  return [
    {
      label: t("dashboard.kpi.overall"),
      value: score.toFixed(2),
      delta: t("dashboard.delta.q1"),
      trend: "up",
      hint: t("dashboard.kpi.overall.hint", { n: all.length }),
    },
    {
      label: t("dashboard.kpi.gap"),
      value: gap.toFixed(2),
      delta: t("dashboard.delta.gap.q1"),
      trend: "down",
      hint: t("dashboard.kpi.gap.hint", { n: target.toFixed(2) }),
    },
    {
      label: t("dashboard.kpi.criticalHigh"),
      value: String(critical + high),
      delta: t("dashboard.kpi.criticalHigh.delta", { n: critical }),
      trend: critical > 0 ? "up" : "flat",
      hint: t("dashboard.kpi.criticalHigh.hint"),
    },
    {
      label: t("dashboard.kpi.tier1"),
      value: String(lowScore),
      delta: t("dashboard.delta.tier1.q1"),
      trend: "down",
      hint: t("dashboard.kpi.tier1.hint"),
    },
  ];
}

export const FUNCTION_BREAKDOWN = NIST_FRAMEWORK.map((fn) => ({
  id: fn.id,
  name: fn.name,
  nameKey: `nist.${fn.id}.name`,
  descriptionKey: `nist.${fn.id}.description`,
  color: fn.color,
  current: averageFunctionScore(fn),
  target: averageFunctionTarget(fn),
  subcategories: fn.categories.flatMap((c) => c.subcategories).length,
  categories: fn.categories.length,
}));
