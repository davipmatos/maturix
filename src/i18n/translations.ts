export type Lang = "en" | "pt" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

type Dict = Record<string, string>;

const en: Dict = {
  // common
  "common.export": "Export",
  "common.exportBrief": "Export brief",
  "common.exportPdf": "Export PDF",
  "common.continue": "Continue scoring",
  "common.viewAll": "View all",
  "common.view": "View",
  "common.preview": "Preview",
  "common.download": "Download",
  "common.share": "Share link",
  "common.email": "Email to ExCo",
  "common.save": "Save changes",
  "common.invite": "Invite member",
  "common.search": "Search",
  "common.filter": "Filter",
  "common.all": "All",
  "common.gap": "gap",
  "common.target": "target",
  "common.current": "Current",
  "common.targetWord": "Target",
  "common.note": "Note",
  "common.evidence": "evidence",
  "common.noEvidence": "No evidence",
  "common.reviewed": "Reviewed",
  "common.due": "Due",
  "common.member": "Member",
  "common.role": "Role",
  "common.access": "Access",
  "common.cycle": "Cycle",
  "common.scope": "Scope",
  "common.lead": "Lead",
  "common.period": "Period",
  "common.score": "Score",

  // status
  "status.completed": "Completed",
  "status.inProgress": "In progress",
  "status.draft": "Draft",

  // priority
  "priority.critical": "CRITICAL",
  "priority.high": "HIGH",
  "priority.medium": "MEDIUM",
  "priority.low": "LOW",

  // sidebar
  "nav.dashboard": "Dashboard",
  "nav.assessments": "Assessments",
  "nav.framework": "Framework",
  "nav.recommendations": "Recommendations",
  "nav.reports": "Reports",
  "nav.settings": "Settings",
  "nav.subtitle": "NIST CSF 2.0",

  // topbar
  "topbar.search": "Search subcategories, controls or evidence…",
  "topbar.aiInsights": "AI insights",
  "topbar.role": "Director of Cyber",

  // login
  "login.tagline": "Built for CISO offices",
  "login.heroTitle": "Measure, target and uplift your cybersecurity maturity.",
  "login.heroBody":
    "Maturix scores your organization against the NIST Cybersecurity Framework 2.0 — 6 Functions, 22 Categories, 100+ outcomes — and turns the gap into a prioritized, board-ready remediation plan.",
  "login.bullet1":
    "Quantitative maturity scoring across Govern, Identify, Protect, Detect, Respond, Recover.",
  "login.bullet2":
    "Quarterly trending, target lines and ExCo-ready executive briefs.",
  "login.bullet3":
    "Prioritized recommendations with effort, uplift and risk reduction.",
  "login.stat.outcomes": "Outcomes scored",
  "login.stat.frameworks": "Frameworks",
  "login.stat.ai": "AI insights",
  "login.copyright":
    "© 2026 Maturix. NIST CSF is a publication of the U.S. National Institute of Standards and Technology.",
  "login.welcome": "Welcome back",
  "login.subtitle": "Sign in to continue to your maturity dashboard.",
  "login.email": "Work email",
  "login.password": "Password",
  "login.forgot": "Forgot?",
  "login.remember": "Remember this device for 30 days",
  "login.submit": "Sign in",
  "login.submitting": "Authenticating…",
  "login.or": "or",
  "login.sso": "SSO · SAML",
  "login.entra": "Microsoft Entra",
  "login.tos.prefix": "By signing in you agree to the",
  "login.tos.terms": "Terms",
  "login.tos.and": "and",
  "login.tos.privacy": "Privacy Policy",
  "login.subtitle.platform": "NIST CSF 2.0 Maturity Platform",

  // dashboard
  "dashboard.cycle": "Q2 2026 · Assessment in progress",
  "dashboard.title": "Cybersecurity maturity overview",
  "dashboard.subtitle.suffix": "· NIST CSF 2.0 baseline against the target tier",
  "dashboard.openQ2": "Open Q2 assessment",
  "dashboard.kpi.overall": "Overall maturity",
  "dashboard.kpi.overall.hint": "Across {n} CSF 2.0 outcomes",
  "dashboard.kpi.gap": "Maturity gap vs target",
  "dashboard.kpi.gap.hint": "Target {n}",
  "dashboard.kpi.criticalHigh": "Critical + high gaps",
  "dashboard.kpi.criticalHigh.hint": "Open prioritized recommendations",
  "dashboard.kpi.criticalHigh.delta": "{n} critical",
  "dashboard.kpi.tier1": "Outcomes at Tier 1",
  "dashboard.kpi.tier1.hint": "Initial / ad-hoc practices",
  "dashboard.delta.q1": "+0.18 vs Q1",
  "dashboard.delta.gap.q1": "-0.21 vs Q1",
  "dashboard.delta.tier1.q1": "-3 vs Q1",
  "dashboard.radar.title": "Maturity radar — Current vs Target",
  "dashboard.radar.subtitle":
    "NIST CSF 2.0 — averaged across all outcomes per function",
  "dashboard.breakdown.title": "Function breakdown",
  "dashboard.breakdown.subtitle": "Average maturity per CSF Function",
  "dashboard.trend.title": "Maturity trend",
  "dashboard.trend.subtitle": "Five quarterly assessment cycles",
  "dashboard.bars.title": "Functions — current vs target",
  "dashboard.bars.subtitle": "Bar comparison per function",
  "dashboard.heatmap.title": "Category heatmap",
  "dashboard.heatmap.subtitle":
    "22 NIST CSF 2.0 categories — color = average maturity",
  "dashboard.topRecs.title": "Top recommendations",
  "dashboard.topRecs.subtitle": "Highest impact next steps",
  "dashboard.activity.title": "Activity feed",
  "dashboard.activity.subtitle":
    "Recent changes to the Q2 2026 assessment",
  "dashboard.distribution.title": "Outcomes by maturity tier",
  "dashboard.distribution.subtitle": "{n} outcomes scored",
  "dashboard.legend.maturity": "Maturity:",

  // assessments list
  "assessments.title": "Maturity assessments",
  "assessments.subtitle":
    "Plan, run and finalize NIST CSF 2.0 assessment cycles across your organization.",
  "assessments.new": "New assessment",
  "assessments.active": "Active",
  "assessments.active.subtitle":
    "{n} assessment{s} in progress or draft",
  "assessments.history": "History",
  "assessments.history.subtitle": "Completed assessment cycles",
  "assessments.started": "Started",
  "assessments.scoreVsTarget": "Score vs target",
  "assessments.col.cycle": "Cycle",
  "assessments.col.scope": "Scope",
  "assessments.col.lead": "Lead",
  "assessments.col.period": "Period",
  "assessments.col.score": "Score",
  "assessments.col.target": "Target",

  // assessment detail
  "assessment.back": "All assessments",
  "assessment.overall": "Overall maturity",
  "assessment.outcomesScored": "Outcomes scored",
  "assessment.outcomesScored.hint":
    "Across {fn} functions · {cat} categories",
  "assessment.evidence": "Evidence attached",
  "assessment.evidence.hint":
    "Documents, screenshots, policies and tickets",
  "assessment.summary": "Function summary",
  "assessment.summary.subtitle": "Where to focus next",

  // framework
  "framework.title": "NIST Cybersecurity Framework 2.0",
  "framework.subtitle":
    "6 Functions · 22 Categories · 100+ outcomes. Browse the framework and inspect your scoring side-by-side.",
  "framework.searchPlaceholder":
    "Search outcome ID, title or description…",

  // recommendations
  "recs.title": "Prioritized recommendations",
  "recs.subtitle":
    "Ranked by risk reduction and maturity uplift versus effort.",
  "recs.stat.open": "Open recommendations",
  "recs.stat.open.hint": "Across all functions",
  "recs.stat.critical": "Critical",
  "recs.stat.critical.hint": "Highest blast radius",
  "recs.stat.uplift": "Total maturity uplift",
  "recs.stat.uplift.hint": "If all completed",
  "recs.stat.risk": "Aggregate risk reduction",
  "recs.stat.risk.hint": "Top-down estimate",
  "recs.queue": "Recommendations queue",
  "recs.queue.subtitle":
    "{n} prioritized item{s}",
  "recs.uplift": "Uplift",
  "recs.risk": "Risk",
  "recs.effort": "Effort",

  // reports
  "reports.title": "Board-ready reporting",
  "reports.subtitle":
    "One-click generation of executive briefs, full assessment books and regulator-facing snapshots.",
  "reports.generate": "Generate from this assessment",
  "reports.featured.badge": "Q2 2026 Executive Brief",
  "reports.featured.title": "Quarterly cybersecurity maturity brief",
  "reports.featured.body":
    "Auto-generated narrative covering posture vs target, the 4 critical gaps closed since Q1 and the proposed 90-day roadmap. Approve to share with the board.",
  "reports.featured.line1":
    "Overall maturity grew from 2.42 to 2.60 (+7.4%) quarter-over-quarter.",
  "reports.featured.line2":
    "Govern lift driven by ERM integration and policy refresh.",
  "reports.featured.line3":
    "Critical gap remains in supplier contractual clauses (GV.SC-03).",
  "reports.pages": "pages",
  "reports.updated": "Updated",

  // settings
  "settings.title": "Organization settings",
  "settings.subtitle":
    "Configure organization profile, members, MFA policy and notification preferences.",
  "settings.profile": "Organization profile",
  "settings.profile.subtitle":
    "Used in assessments, reports and executive briefs.",
  "settings.field.orgName": "Organization name",
  "settings.field.industry": "Industry",
  "settings.field.size": "Size band",
  "settings.field.hq": "Headquarters",
  "settings.field.regs": "Primary regulations",
  "settings.field.appetite": "Risk appetite",
  "settings.security": "Security",
  "settings.security.subtitle": "Authentication and session policy.",
  "settings.security.mfa.title": "Require MFA for all members",
  "settings.security.mfa.desc":
    "TOTP authenticator app required on every sign-in.",
  "settings.security.domain.title": "Block third-party email domains",
  "settings.security.domain.desc":
    "Members must use an @orion.com.br address.",
  "settings.security.drift.title": "Notify on score drift",
  "settings.security.drift.desc":
    "Email + in-app notification when an outcome regresses.",
  "settings.security.guests.title": "Allow external assessors",
  "settings.security.guests.desc":
    "Guest accounts limited to read-only access on one cycle.",
  "settings.members": "Members",
  "settings.members.subtitle":
    "{n} members with access to the workspace.",
  "settings.members.col.member": "Member",
  "settings.members.col.role": "Role",
  "settings.members.col.email": "Email",
  "settings.members.col.access": "Access",

  // maturity levels
  "maturity.0.label": "Not Assessed",
  "maturity.0.description": "Not yet evaluated in this assessment cycle.",
  "maturity.1.label": "Initial",
  "maturity.1.description":
    "Practices are ad-hoc, reactive and largely undocumented. Outcomes depend on individual effort.",
  "maturity.2.label": "Managed",
  "maturity.2.description":
    "Some processes are documented and repeatable, but applied inconsistently across the organization.",
  "maturity.3.label": "Defined",
  "maturity.3.description":
    "Practices are documented, standardized and integrated into the organization-wide approach.",
  "maturity.4.label": "Quantitatively Managed",
  "maturity.4.description":
    "Practices are measured and controlled with metrics. Performance is monitored and tuned.",
  "maturity.5.label": "Optimizing",
  "maturity.5.description":
    "Continuous improvement driven by lessons learned, threat intelligence and risk metrics.",

  // NIST function names + descriptions
  "nist.GV.name": "Govern",
  "nist.GV.description":
    "Establish, communicate and monitor the organization's cybersecurity risk management strategy, expectations and policy.",
  "nist.ID.name": "Identify",
  "nist.ID.description":
    "Help determine the current cybersecurity risk to the organization by understanding assets, suppliers and related risks.",
  "nist.PR.name": "Protect",
  "nist.PR.description": "Use safeguards to prevent or reduce cybersecurity risk.",
  "nist.DE.name": "Detect",
  "nist.DE.description":
    "Find and analyze possible cybersecurity attacks and compromises.",
  "nist.RS.name": "Respond",
  "nist.RS.description":
    "Take action regarding a detected cybersecurity incident.",
  "nist.RC.name": "Recover",
  "nist.RC.description":
    "Restore assets and operations affected by a cybersecurity incident.",

  // activity verbs (rendered lowercased by the page, so keep canonical form here)
  "activity.update": "Updated maturity score",
  "activity.attach": "Attached evidence",
  "activity.generate": "Generated quarterly executive report",
  "activity.createRec": "Created recommendation",
  "activity.approve": "Approved gap remediation plan",
  "activity.drift": "Detected reviewed-evidence drift",

  // org / regulations
  "org.industry": "Financial Services",
  "org.size": "Enterprise (5,000 - 10,000 employees)",
  "org.appetite.low": "Low",
};

const pt: Dict = {
  "common.export": "Exportar",
  "common.exportBrief": "Exportar resumo",
  "common.exportPdf": "Exportar PDF",
  "common.continue": "Continuar avaliação",
  "common.viewAll": "Ver tudo",
  "common.view": "Ver",
  "common.preview": "Visualizar",
  "common.download": "Baixar",
  "common.share": "Compartilhar link",
  "common.email": "Enviar à diretoria",
  "common.save": "Salvar alterações",
  "common.invite": "Convidar membro",
  "common.search": "Buscar",
  "common.filter": "Filtrar",
  "common.all": "Todos",
  "common.gap": "lacuna",
  "common.target": "alvo",
  "common.current": "Atual",
  "common.targetWord": "Alvo",
  "common.note": "Observação",
  "common.evidence": "evidências",
  "common.noEvidence": "Sem evidências",
  "common.reviewed": "Revisado em",
  "common.due": "Prazo",
  "common.member": "Membro",
  "common.role": "Cargo",
  "common.access": "Acesso",
  "common.cycle": "Ciclo",
  "common.scope": "Escopo",
  "common.lead": "Responsável",
  "common.period": "Período",
  "common.score": "Pontuação",

  "status.completed": "Concluído",
  "status.inProgress": "Em andamento",
  "status.draft": "Rascunho",

  "priority.critical": "CRÍTICA",
  "priority.high": "ALTA",
  "priority.medium": "MÉDIA",
  "priority.low": "BAIXA",

  "nav.dashboard": "Painel",
  "nav.assessments": "Avaliações",
  "nav.framework": "Framework",
  "nav.recommendations": "Recomendações",
  "nav.reports": "Relatórios",
  "nav.settings": "Configurações",
  "nav.subtitle": "NIST CSF 2.0",

  "topbar.search": "Buscar subcategorias, controles ou evidências…",
  "topbar.aiInsights": "Insights de IA",
  "topbar.role": "Diretor de Cyber",

  "login.tagline": "Feito para a área de CISO",
  "login.heroTitle":
    "Meça, defina alvos e eleve a maturidade da sua cibersegurança.",
  "login.heroBody":
    "O Maturix pontua sua organização frente ao NIST Cybersecurity Framework 2.0 — 6 Funções, 22 Categorias, 100+ resultados — e transforma a lacuna em um plano priorizado, pronto para o board.",
  "login.bullet1":
    "Pontuação quantitativa de maturidade em Governar, Identificar, Proteger, Detectar, Responder e Recuperar.",
  "login.bullet2":
    "Tendência trimestral, linhas-alvo e relatórios executivos prontos para o comitê.",
  "login.bullet3":
    "Recomendações priorizadas com esforço, ganho de maturidade e redução de risco.",
  "login.stat.outcomes": "Resultados pontuados",
  "login.stat.frameworks": "Frameworks",
  "login.stat.ai": "Insights de IA",
  "login.copyright":
    "© 2026 Maturix. O NIST CSF é uma publicação do U.S. National Institute of Standards and Technology.",
  "login.welcome": "Bem-vindo de volta",
  "login.subtitle":
    "Faça login para continuar para o seu painel de maturidade.",
  "login.email": "E-mail corporativo",
  "login.password": "Senha",
  "login.forgot": "Esqueci",
  "login.remember": "Lembrar este dispositivo por 30 dias",
  "login.submit": "Entrar",
  "login.submitting": "Autenticando…",
  "login.or": "ou",
  "login.sso": "SSO · SAML",
  "login.entra": "Microsoft Entra",
  "login.tos.prefix": "Ao entrar você concorda com os",
  "login.tos.terms": "Termos",
  "login.tos.and": "e a",
  "login.tos.privacy": "Política de Privacidade",
  "login.subtitle.platform": "Plataforma de Maturidade NIST CSF 2.0",

  "dashboard.cycle": "Q2 2026 · Avaliação em andamento",
  "dashboard.title": "Panorama de maturidade em cibersegurança",
  "dashboard.subtitle.suffix": "· baseline NIST CSF 2.0 contra o nível-alvo",
  "dashboard.openQ2": "Abrir avaliação Q2",
  "dashboard.kpi.overall": "Maturidade geral",
  "dashboard.kpi.overall.hint": "Entre {n} resultados do CSF 2.0",
  "dashboard.kpi.gap": "Lacuna até o alvo",
  "dashboard.kpi.gap.hint": "Alvo {n}",
  "dashboard.kpi.criticalHigh": "Lacunas críticas + altas",
  "dashboard.kpi.criticalHigh.hint": "Recomendações priorizadas em aberto",
  "dashboard.kpi.criticalHigh.delta": "{n} crítica(s)",
  "dashboard.kpi.tier1": "Resultados no Nível 1",
  "dashboard.kpi.tier1.hint": "Práticas iniciais / ad-hoc",
  "dashboard.delta.q1": "+0,18 vs Q1",
  "dashboard.delta.gap.q1": "-0,21 vs Q1",
  "dashboard.delta.tier1.q1": "-3 vs Q1",
  "dashboard.radar.title": "Radar de maturidade — Atual vs Alvo",
  "dashboard.radar.subtitle":
    "NIST CSF 2.0 — média de todos os resultados por função",
  "dashboard.breakdown.title": "Quebra por função",
  "dashboard.breakdown.subtitle": "Maturidade média por função do CSF",
  "dashboard.trend.title": "Tendência de maturidade",
  "dashboard.trend.subtitle": "Cinco ciclos trimestrais de avaliação",
  "dashboard.bars.title": "Funções — atual vs alvo",
  "dashboard.bars.subtitle": "Comparação em barras por função",
  "dashboard.heatmap.title": "Heatmap de categorias",
  "dashboard.heatmap.subtitle":
    "22 categorias do NIST CSF 2.0 — cor = maturidade média",
  "dashboard.topRecs.title": "Principais recomendações",
  "dashboard.topRecs.subtitle": "Próximos passos de maior impacto",
  "dashboard.activity.title": "Atividade recente",
  "dashboard.activity.subtitle":
    "Mudanças recentes na avaliação Q2 2026",
  "dashboard.distribution.title": "Resultados por nível de maturidade",
  "dashboard.distribution.subtitle": "{n} resultados pontuados",
  "dashboard.legend.maturity": "Maturidade:",

  "assessments.title": "Avaliações de maturidade",
  "assessments.subtitle":
    "Planeje, execute e finalize ciclos de avaliação NIST CSF 2.0 na sua organização.",
  "assessments.new": "Nova avaliação",
  "assessments.active": "Ativas",
  "assessments.active.subtitle":
    "{n} avaliação{s} em andamento ou rascunho",
  "assessments.history": "Histórico",
  "assessments.history.subtitle": "Ciclos de avaliação concluídos",
  "assessments.started": "Iniciada em",
  "assessments.scoreVsTarget": "Pontuação vs alvo",
  "assessments.col.cycle": "Ciclo",
  "assessments.col.scope": "Escopo",
  "assessments.col.lead": "Responsável",
  "assessments.col.period": "Período",
  "assessments.col.score": "Pontuação",
  "assessments.col.target": "Alvo",

  "assessment.back": "Todas as avaliações",
  "assessment.overall": "Maturidade geral",
  "assessment.outcomesScored": "Resultados pontuados",
  "assessment.outcomesScored.hint":
    "Em {fn} funções · {cat} categorias",
  "assessment.evidence": "Evidências anexadas",
  "assessment.evidence.hint":
    "Documentos, capturas de tela, políticas e tickets",
  "assessment.summary": "Resumo por função",
  "assessment.summary.subtitle": "Onde focar a seguir",

  "framework.title": "NIST Cybersecurity Framework 2.0",
  "framework.subtitle":
    "6 Funções · 22 Categorias · 100+ resultados. Navegue pelo framework e veja sua pontuação lado a lado.",
  "framework.searchPlaceholder":
    "Buscar por ID, título ou descrição…",

  "recs.title": "Recomendações priorizadas",
  "recs.subtitle":
    "Ordenadas por redução de risco e ganho de maturidade versus esforço.",
  "recs.stat.open": "Recomendações em aberto",
  "recs.stat.open.hint": "Em todas as funções",
  "recs.stat.critical": "Críticas",
  "recs.stat.critical.hint": "Maior raio de impacto",
  "recs.stat.uplift": "Ganho total de maturidade",
  "recs.stat.uplift.hint": "Se todas forem concluídas",
  "recs.stat.risk": "Redução agregada de risco",
  "recs.stat.risk.hint": "Estimativa top-down",
  "recs.queue": "Fila de recomendações",
  "recs.queue.subtitle":
    "{n} item{s} priorizado{s}",
  "recs.uplift": "Ganho",
  "recs.risk": "Risco",
  "recs.effort": "Esforço",

  "reports.title": "Relatórios prontos para o board",
  "reports.subtitle":
    "Geração em um clique de resumos executivos, livros completos de avaliação e snapshots para reguladores.",
  "reports.generate": "Gerar a partir desta avaliação",
  "reports.featured.badge": "Resumo Executivo Q2 2026",
  "reports.featured.title": "Resumo trimestral de maturidade em cibersegurança",
  "reports.featured.body":
    "Narrativa gerada automaticamente cobrindo postura vs alvo, as 4 lacunas críticas fechadas desde o Q1 e o roadmap proposto de 90 dias. Aprove para compartilhar com o board.",
  "reports.featured.line1":
    "Maturidade geral cresceu de 2,42 para 2,60 (+7,4%) trimestre a trimestre.",
  "reports.featured.line2":
    "Ganho em Governar puxado pela integração com o ERM e atualização da política.",
  "reports.featured.line3":
    "Lacuna crítica permanece nas cláusulas contratuais com fornecedores (GV.SC-03).",
  "reports.pages": "páginas",
  "reports.updated": "Atualizado em",

  "settings.title": "Configurações da organização",
  "settings.subtitle":
    "Configure o perfil da organização, membros, política de MFA e preferências de notificação.",
  "settings.profile": "Perfil da organização",
  "settings.profile.subtitle":
    "Usado em avaliações, relatórios e resumos executivos.",
  "settings.field.orgName": "Nome da organização",
  "settings.field.industry": "Setor",
  "settings.field.size": "Porte",
  "settings.field.hq": "Sede",
  "settings.field.regs": "Regulamentações principais",
  "settings.field.appetite": "Apetite a risco",
  "settings.security": "Segurança",
  "settings.security.subtitle": "Política de autenticação e sessão.",
  "settings.security.mfa.title": "Exigir MFA para todos os membros",
  "settings.security.mfa.desc":
    "App autenticador TOTP obrigatório em todo login.",
  "settings.security.domain.title":
    "Bloquear domínios de e-mail de terceiros",
  "settings.security.domain.desc":
    "Membros devem usar um endereço @orion.com.br.",
  "settings.security.drift.title": "Notificar em queda de pontuação",
  "settings.security.drift.desc":
    "E-mail + notificação no app quando um resultado regredir.",
  "settings.security.guests.title": "Permitir avaliadores externos",
  "settings.security.guests.desc":
    "Contas guest limitadas a leitura em um único ciclo.",
  "settings.members": "Membros",
  "settings.members.subtitle":
    "{n} membros com acesso à workspace.",
  "settings.members.col.member": "Membro",
  "settings.members.col.role": "Cargo",
  "settings.members.col.email": "E-mail",
  "settings.members.col.access": "Acesso",

  "maturity.0.label": "Não Avaliado",
  "maturity.0.description":
    "Ainda não avaliado neste ciclo.",
  "maturity.1.label": "Inicial",
  "maturity.1.description":
    "Práticas ad-hoc, reativas e em grande parte não documentadas. Os resultados dependem do esforço individual.",
  "maturity.2.label": "Gerenciado",
  "maturity.2.description":
    "Alguns processos estão documentados e são repetíveis, mas aplicados de forma inconsistente na organização.",
  "maturity.3.label": "Definido",
  "maturity.3.description":
    "Práticas documentadas, padronizadas e integradas à abordagem organizacional.",
  "maturity.4.label": "Quantitativamente Gerenciado",
  "maturity.4.description":
    "Práticas medidas e controladas por métricas. Desempenho monitorado e ajustado.",
  "maturity.5.label": "Otimizado",
  "maturity.5.description":
    "Melhoria contínua orientada por lições aprendidas, inteligência de ameaças e métricas de risco.",

  "nist.GV.name": "Governar",
  "nist.GV.description":
    "Estabelecer, comunicar e monitorar a estratégia, expectativas e política de gestão de riscos de cibersegurança da organização.",
  "nist.ID.name": "Identificar",
  "nist.ID.description":
    "Ajudar a determinar o risco atual de cibersegurança à organização, entendendo ativos, fornecedores e riscos relacionados.",
  "nist.PR.name": "Proteger",
  "nist.PR.description":
    "Usar salvaguardas para prevenir ou reduzir o risco de cibersegurança.",
  "nist.DE.name": "Detectar",
  "nist.DE.description":
    "Encontrar e analisar possíveis ataques e comprometimentos de cibersegurança.",
  "nist.RS.name": "Responder",
  "nist.RS.description":
    "Tomar ações sobre um incidente de cibersegurança detectado.",
  "nist.RC.name": "Recuperar",
  "nist.RC.description":
    "Restaurar ativos e operações afetados por um incidente de cibersegurança.",

  "activity.update": "Atualizou pontuação de maturidade",
  "activity.attach": "Anexou evidências em",
  "activity.generate": "Gerou relatório executivo trimestral",
  "activity.createRec": "Criou recomendação",
  "activity.approve": "Aprovou plano de remediação para",
  "activity.drift": "Detectou desvio em evidências revisadas",

  "org.industry": "Serviços Financeiros",
  "org.size": "Enterprise (5.000 - 10.000 funcionários)",
  "org.appetite.low": "Baixo",
};

const es: Dict = {
  "common.export": "Exportar",
  "common.exportBrief": "Exportar resumen",
  "common.exportPdf": "Exportar PDF",
  "common.continue": "Continuar evaluación",
  "common.viewAll": "Ver todo",
  "common.view": "Ver",
  "common.preview": "Vista previa",
  "common.download": "Descargar",
  "common.share": "Compartir enlace",
  "common.email": "Enviar a la junta",
  "common.save": "Guardar cambios",
  "common.invite": "Invitar miembro",
  "common.search": "Buscar",
  "common.filter": "Filtrar",
  "common.all": "Todos",
  "common.gap": "brecha",
  "common.target": "objetivo",
  "common.current": "Actual",
  "common.targetWord": "Objetivo",
  "common.note": "Nota",
  "common.evidence": "evidencias",
  "common.noEvidence": "Sin evidencias",
  "common.reviewed": "Revisado el",
  "common.due": "Vence",
  "common.member": "Miembro",
  "common.role": "Cargo",
  "common.access": "Acceso",
  "common.cycle": "Ciclo",
  "common.scope": "Alcance",
  "common.lead": "Responsable",
  "common.period": "Período",
  "common.score": "Puntuación",

  "status.completed": "Completado",
  "status.inProgress": "En progreso",
  "status.draft": "Borrador",

  "priority.critical": "CRÍTICA",
  "priority.high": "ALTA",
  "priority.medium": "MEDIA",
  "priority.low": "BAJA",

  "nav.dashboard": "Panel",
  "nav.assessments": "Evaluaciones",
  "nav.framework": "Framework",
  "nav.recommendations": "Recomendaciones",
  "nav.reports": "Informes",
  "nav.settings": "Ajustes",
  "nav.subtitle": "NIST CSF 2.0",

  "topbar.search": "Buscar subcategorías, controles o evidencias…",
  "topbar.aiInsights": "Insights de IA",
  "topbar.role": "Director de Ciberseguridad",

  "login.tagline": "Hecho para oficinas de CISO",
  "login.heroTitle":
    "Mida, defina objetivos y eleve la madurez de su ciberseguridad.",
  "login.heroBody":
    "Maturix puntúa su organización frente al NIST Cybersecurity Framework 2.0 — 6 Funciones, 22 Categorías, 100+ resultados — y convierte la brecha en un plan de remediación priorizado y listo para la junta.",
  "login.bullet1":
    "Puntuación cuantitativa de madurez en Gobernar, Identificar, Proteger, Detectar, Responder y Recuperar.",
  "login.bullet2":
    "Tendencia trimestral, líneas objetivo y resúmenes ejecutivos listos para el comité.",
  "login.bullet3":
    "Recomendaciones priorizadas con esfuerzo, ganancia y reducción de riesgo.",
  "login.stat.outcomes": "Resultados puntuados",
  "login.stat.frameworks": "Frameworks",
  "login.stat.ai": "Insights de IA",
  "login.copyright":
    "© 2026 Maturix. NIST CSF es una publicación del U.S. National Institute of Standards and Technology.",
  "login.welcome": "Bienvenido de nuevo",
  "login.subtitle":
    "Inicia sesión para continuar a tu panel de madurez.",
  "login.email": "Correo corporativo",
  "login.password": "Contraseña",
  "login.forgot": "¿Olvidaste?",
  "login.remember": "Recordar este dispositivo por 30 días",
  "login.submit": "Iniciar sesión",
  "login.submitting": "Autenticando…",
  "login.or": "o",
  "login.sso": "SSO · SAML",
  "login.entra": "Microsoft Entra",
  "login.tos.prefix": "Al iniciar sesión aceptas los",
  "login.tos.terms": "Términos",
  "login.tos.and": "y la",
  "login.tos.privacy": "Política de Privacidad",
  "login.subtitle.platform": "Plataforma de Madurez NIST CSF 2.0",

  "dashboard.cycle": "Q2 2026 · Evaluación en progreso",
  "dashboard.title": "Panorama de madurez en ciberseguridad",
  "dashboard.subtitle.suffix":
    "· baseline NIST CSF 2.0 contra el nivel objetivo",
  "dashboard.openQ2": "Abrir evaluación Q2",
  "dashboard.kpi.overall": "Madurez global",
  "dashboard.kpi.overall.hint":
    "Sobre {n} resultados del CSF 2.0",
  "dashboard.kpi.gap": "Brecha hasta el objetivo",
  "dashboard.kpi.gap.hint": "Objetivo {n}",
  "dashboard.kpi.criticalHigh": "Brechas críticas + altas",
  "dashboard.kpi.criticalHigh.hint":
    "Recomendaciones priorizadas abiertas",
  "dashboard.kpi.criticalHigh.delta": "{n} crítica(s)",
  "dashboard.kpi.tier1": "Resultados en Nivel 1",
  "dashboard.kpi.tier1.hint": "Prácticas iniciales / ad-hoc",
  "dashboard.delta.q1": "+0,18 vs Q1",
  "dashboard.delta.gap.q1": "-0,21 vs Q1",
  "dashboard.delta.tier1.q1": "-3 vs Q1",
  "dashboard.radar.title": "Radar de madurez — Actual vs Objetivo",
  "dashboard.radar.subtitle":
    "NIST CSF 2.0 — promedio de todos los resultados por función",
  "dashboard.breakdown.title": "Detalle por función",
  "dashboard.breakdown.subtitle": "Madurez promedio por función del CSF",
  "dashboard.trend.title": "Tendencia de madurez",
  "dashboard.trend.subtitle": "Cinco ciclos trimestrales de evaluación",
  "dashboard.bars.title": "Funciones — actual vs objetivo",
  "dashboard.bars.subtitle": "Comparación en barras por función",
  "dashboard.heatmap.title": "Mapa de calor de categorías",
  "dashboard.heatmap.subtitle":
    "22 categorías del NIST CSF 2.0 — color = madurez promedio",
  "dashboard.topRecs.title": "Top recomendaciones",
  "dashboard.topRecs.subtitle": "Próximos pasos de mayor impacto",
  "dashboard.activity.title": "Actividad reciente",
  "dashboard.activity.subtitle":
    "Cambios recientes en la evaluación Q2 2026",
  "dashboard.distribution.title": "Resultados por nivel de madurez",
  "dashboard.distribution.subtitle": "{n} resultados puntuados",
  "dashboard.legend.maturity": "Madurez:",

  "assessments.title": "Evaluaciones de madurez",
  "assessments.subtitle":
    "Planifica, ejecuta y finaliza ciclos de evaluación NIST CSF 2.0 en tu organización.",
  "assessments.new": "Nueva evaluación",
  "assessments.active": "Activas",
  "assessments.active.subtitle":
    "{n} evaluación{s} en progreso o borrador",
  "assessments.history": "Historial",
  "assessments.history.subtitle": "Ciclos de evaluación completados",
  "assessments.started": "Iniciada el",
  "assessments.scoreVsTarget": "Puntuación vs objetivo",
  "assessments.col.cycle": "Ciclo",
  "assessments.col.scope": "Alcance",
  "assessments.col.lead": "Responsable",
  "assessments.col.period": "Período",
  "assessments.col.score": "Puntuación",
  "assessments.col.target": "Objetivo",

  "assessment.back": "Todas las evaluaciones",
  "assessment.overall": "Madurez global",
  "assessment.outcomesScored": "Resultados puntuados",
  "assessment.outcomesScored.hint":
    "En {fn} funciones · {cat} categorías",
  "assessment.evidence": "Evidencias adjuntas",
  "assessment.evidence.hint":
    "Documentos, capturas de pantalla, políticas y tickets",
  "assessment.summary": "Resumen por función",
  "assessment.summary.subtitle": "Dónde enfocarse a continuación",

  "framework.title": "NIST Cybersecurity Framework 2.0",
  "framework.subtitle":
    "6 Funciones · 22 Categorías · 100+ resultados. Explora el framework y revisa tu puntuación lado a lado.",
  "framework.searchPlaceholder":
    "Buscar por ID, título o descripción…",

  "recs.title": "Recomendaciones priorizadas",
  "recs.subtitle":
    "Ordenadas por reducción de riesgo y ganancia de madurez frente al esfuerzo.",
  "recs.stat.open": "Recomendaciones abiertas",
  "recs.stat.open.hint": "En todas las funciones",
  "recs.stat.critical": "Críticas",
  "recs.stat.critical.hint": "Mayor radio de impacto",
  "recs.stat.uplift": "Ganancia total de madurez",
  "recs.stat.uplift.hint": "Si todas se completan",
  "recs.stat.risk": "Reducción agregada de riesgo",
  "recs.stat.risk.hint": "Estimación top-down",
  "recs.queue": "Cola de recomendaciones",
  "recs.queue.subtitle":
    "{n} ítem{s} priorizado{s}",
  "recs.uplift": "Ganancia",
  "recs.risk": "Riesgo",
  "recs.effort": "Esfuerzo",

  "reports.title": "Informes listos para la junta",
  "reports.subtitle":
    "Generación con un clic de resúmenes ejecutivos, libros completos de evaluación y snapshots para reguladores.",
  "reports.generate": "Generar a partir de esta evaluación",
  "reports.featured.badge": "Resumen Ejecutivo Q2 2026",
  "reports.featured.title":
    "Resumen trimestral de madurez en ciberseguridad",
  "reports.featured.body":
    "Narrativa generada automáticamente cubriendo postura vs objetivo, las 4 brechas críticas cerradas desde el Q1 y la hoja de ruta propuesta de 90 días. Aprueba para compartir con la junta.",
  "reports.featured.line1":
    "Madurez global creció de 2,42 a 2,60 (+7,4%) trimestre a trimestre.",
  "reports.featured.line2":
    "Ganancia en Gobernar impulsada por integración con ERM y actualización de política.",
  "reports.featured.line3":
    "Brecha crítica permanece en cláusulas contractuales con proveedores (GV.SC-03).",
  "reports.pages": "páginas",
  "reports.updated": "Actualizado el",

  "settings.title": "Configuración de la organización",
  "settings.subtitle":
    "Configura el perfil de la organización, miembros, política MFA y preferencias de notificación.",
  "settings.profile": "Perfil de la organización",
  "settings.profile.subtitle":
    "Usado en evaluaciones, informes y resúmenes ejecutivos.",
  "settings.field.orgName": "Nombre de la organización",
  "settings.field.industry": "Sector",
  "settings.field.size": "Tamaño",
  "settings.field.hq": "Sede",
  "settings.field.regs": "Regulaciones principales",
  "settings.field.appetite": "Apetito de riesgo",
  "settings.security": "Seguridad",
  "settings.security.subtitle":
    "Política de autenticación y sesión.",
  "settings.security.mfa.title": "Exigir MFA a todos los miembros",
  "settings.security.mfa.desc":
    "App autenticador TOTP requerido en cada inicio de sesión.",
  "settings.security.domain.title":
    "Bloquear dominios de correo de terceros",
  "settings.security.domain.desc":
    "Los miembros deben usar una dirección @orion.com.br.",
  "settings.security.drift.title":
    "Notificar al detectar regresión de puntaje",
  "settings.security.drift.desc":
    "Correo + notificación in-app cuando un resultado retrocede.",
  "settings.security.guests.title": "Permitir evaluadores externos",
  "settings.security.guests.desc":
    "Cuentas invitadas limitadas a solo lectura en un único ciclo.",
  "settings.members": "Miembros",
  "settings.members.subtitle":
    "{n} miembros con acceso al workspace.",
  "settings.members.col.member": "Miembro",
  "settings.members.col.role": "Cargo",
  "settings.members.col.email": "Correo",
  "settings.members.col.access": "Acceso",

  "maturity.0.label": "No Evaluado",
  "maturity.0.description":
    "Aún no evaluado en este ciclo.",
  "maturity.1.label": "Inicial",
  "maturity.1.description":
    "Prácticas ad-hoc, reactivas y en gran parte no documentadas. Los resultados dependen del esfuerzo individual.",
  "maturity.2.label": "Gestionado",
  "maturity.2.description":
    "Algunos procesos están documentados y son repetibles, pero aplicados de forma inconsistente en la organización.",
  "maturity.3.label": "Definido",
  "maturity.3.description":
    "Prácticas documentadas, estandarizadas e integradas al enfoque organizacional.",
  "maturity.4.label": "Cuantitativamente Gestionado",
  "maturity.4.description":
    "Prácticas medidas y controladas con métricas. Desempeño monitoreado y ajustado.",
  "maturity.5.label": "Optimizado",
  "maturity.5.description":
    "Mejora continua impulsada por lecciones aprendidas, inteligencia de amenazas y métricas de riesgo.",

  "nist.GV.name": "Gobernar",
  "nist.GV.description":
    "Establecer, comunicar y monitorear la estrategia, expectativas y política de gestión de riesgos de ciberseguridad de la organización.",
  "nist.ID.name": "Identificar",
  "nist.ID.description":
    "Ayudar a determinar el riesgo actual de ciberseguridad a la organización entendiendo activos, proveedores y riesgos relacionados.",
  "nist.PR.name": "Proteger",
  "nist.PR.description":
    "Usar salvaguardas para prevenir o reducir el riesgo de ciberseguridad.",
  "nist.DE.name": "Detectar",
  "nist.DE.description":
    "Encontrar y analizar posibles ataques y compromisos de ciberseguridad.",
  "nist.RS.name": "Responder",
  "nist.RS.description":
    "Tomar acciones sobre un incidente de ciberseguridad detectado.",
  "nist.RC.name": "Recuperar",
  "nist.RC.description":
    "Restaurar activos y operaciones afectados por un incidente de ciberseguridad.",

  "activity.update": "Actualizó puntuación de madurez",
  "activity.attach": "Adjuntó evidencias en",
  "activity.generate": "Generó informe ejecutivo trimestral",
  "activity.createRec": "Creó recomendación",
  "activity.approve": "Aprobó plan de remediación para",
  "activity.drift": "Detectó desviación en evidencias revisadas",

  "org.industry": "Servicios Financieros",
  "org.size": "Enterprise (5.000 - 10.000 empleados)",
  "org.appetite.low": "Bajo",
};

export const translations: Record<Lang, Dict> = { en, pt, es };
