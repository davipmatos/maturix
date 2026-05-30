# Maturix

> Cybersecurity Maturity Scoring SaaS — based on the NIST Cybersecurity Framework 2.0.

Maturix scores an organization's cybersecurity posture against the **6 Functions, 22 Categories and 100+ Outcomes** of NIST CSF 2.0, plots the gap against a target tier, and produces a prioritized, board-ready remediation plan.

This is the **first interactive prototype** — a single-page React app powered entirely by mock data. There is no backend, no authentication and no persistence yet. The login screen is fake: any credentials will sign you into the demo workspace.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | TailwindCSS (custom dark theme) |
| Routing | React Router v6 |
| Charts | Recharts (radar, area, bar) |
| Icons | lucide-react |

## Getting started

### Option A — Docker (recommended, matches the `autentica` setup)

```bash
cd C:\claude\maturix
docker compose up --build
```

Then open <http://localhost:5180>.

### Option B — Native Node.js (if you have Node 20+ installed)

```bash
cd C:\claude\maturix
npm install
npm run dev
```

The dev server binds to host `0.0.0.0`, so it is reachable from other devices on your LAN.

## Demo flow

1. **Login** — click *Sign in* with any credentials. The form is intentionally pre-filled with `neto.loureiro@orion.com.br`.
2. **Dashboard** — KPI strip, NIST CSF radar (Current vs Target), trend chart, function bars, category heatmap and top recommendations.
3. **Assessments** — active and historical assessment cycles. Open any to inspect outcomes per function/category.
4. **Framework** — full NIST CSF 2.0 explorer with searchable outcomes and current scoring.
5. **Recommendations** — prioritized backlog with effort, maturity uplift and risk reduction.
6. **Reports** — board brief, full assessment book, supplier risk, LGPD readiness, resilience.
7. **Settings** — organization profile, members and security policy.

## Mock data

All data lives in [`src/data/`](src/data/):

- `nistFramework.ts` — the CSF 2.0 structure plus a representative sample of subcategories with current/target maturity scores, evidence, owner, last-reviewed date and notes.
- `mockData.ts` — organization profile, assessment history, quarterly trend, prioritized recommendations, recent activity feed and KPI builders.

## Roadmap (post-prototype)

- Real authentication (likely integrating with the `autentica` sibling project as the IdP).
- Persisted assessments + evidence storage.
- Multi-tenant workspaces with RBAC.
- LLM-assisted assessor: pulls evidence and suggests scoring.
- Integrations: Jira (remediation tickets), Slack (notifications), GRC tools.
