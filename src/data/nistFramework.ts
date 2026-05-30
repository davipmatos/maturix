// NIST Cybersecurity Framework 2.0 — Mock data layer.
// Maturity scoring uses a 1-5 CMMI-inspired scale on top of the NIST tier model.

export type MaturityLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  currentScore: MaturityLevel;
  targetScore: MaturityLevel;
  evidence: string[];
  owner: string;
  lastReviewed: string; // ISO date
  notes?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export interface CSFFunction {
  id: "GV" | "ID" | "PR" | "DE" | "RS" | "RC";
  name: string;
  description: string;
  color: string;
  accent: string;
  categories: Category[];
}

export const MATURITY_LEVELS: Record<
  MaturityLevel,
  { label: string; description: string; color: string }
> = {
  0: {
    label: "Not Assessed",
    description: "Not yet evaluated in this assessment cycle.",
    color: "#3f4b60",
  },
  1: {
    label: "Initial",
    description:
      "Practices are ad-hoc, reactive and largely undocumented. Outcomes depend on individual effort.",
    color: "#ef4444",
  },
  2: {
    label: "Managed",
    description:
      "Some processes are documented and repeatable, but applied inconsistently across the organization.",
    color: "#f97316",
  },
  3: {
    label: "Defined",
    description:
      "Practices are documented, standardized and integrated into the organization-wide approach.",
    color: "#eab308",
  },
  4: {
    label: "Quantitatively Managed",
    description:
      "Practices are measured and controlled with metrics. Performance is monitored and tuned.",
    color: "#22c55e",
  },
  5: {
    label: "Optimizing",
    description:
      "Continuous improvement driven by lessons learned, threat intelligence and risk metrics.",
    color: "#3563f6",
  },
};

export const NIST_FRAMEWORK: CSFFunction[] = [
  {
    id: "GV",
    name: "Govern",
    description:
      "Establish, communicate and monitor the organization's cybersecurity risk management strategy, expectations and policy.",
    color: "#8b5cf6",
    accent: "from-violet-500/30 to-violet-500/0",
    categories: [
      {
        id: "GV.OC",
        title: "Organizational Context",
        description:
          "Understanding mission, stakeholders, legal/regulatory, and contractual requirements to inform cybersecurity risk decisions.",
        subcategories: [
          {
            id: "GV.OC-01",
            title: "Organizational mission is understood",
            description:
              "The organizational mission is understood and informs cybersecurity risk management.",
            currentScore: 4,
            targetScore: 5,
            evidence: ["Mission statement", "Board minutes Q1"],
            owner: "CISO",
            lastReviewed: "2026-04-12",
          },
          {
            id: "GV.OC-02",
            title: "Internal/external stakeholders identified",
            description:
              "Stakeholders are identified, and their needs/expectations are documented.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Stakeholder matrix v3"],
            owner: "CISO",
            lastReviewed: "2026-03-21",
          },
          {
            id: "GV.OC-03",
            title: "Legal, regulatory, contractual requirements",
            description:
              "Legal, regulatory and contractual cybersecurity requirements are understood and managed.",
            currentScore: 3,
            targetScore: 5,
            evidence: ["Compliance register", "DPO opinion"],
            owner: "Legal & Compliance",
            lastReviewed: "2026-02-15",
            notes: "LGPD obligations partially covered; pending DORA mapping.",
          },
          {
            id: "GV.OC-04",
            title: "Critical objectives, capabilities and services",
            description:
              "Critical objectives, capabilities and services that stakeholders depend on are understood.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["BIA draft"],
            owner: "Risk Management",
            lastReviewed: "2026-01-08",
          },
        ],
      },
      {
        id: "GV.RM",
        title: "Risk Management Strategy",
        description:
          "The organization's priorities, constraints, risk tolerance and assumptions are established and used to support operational risk decisions.",
        subcategories: [
          {
            id: "GV.RM-01",
            title: "Risk management objectives established",
            description:
              "Risk management objectives are established and agreed to by organizational stakeholders.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["ERM policy v2.1"],
            owner: "Risk Management",
            lastReviewed: "2026-03-05",
          },
          {
            id: "GV.RM-02",
            title: "Risk appetite and tolerance",
            description:
              "Risk appetite and risk tolerance statements are established, communicated and maintained.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Risk appetite statement"],
            owner: "CFO",
            lastReviewed: "2025-11-12",
            notes: "Statement exists but lacks quantitative thresholds.",
          },
          {
            id: "GV.RM-03",
            title: "Risk management integrated with ERM",
            description:
              "Cybersecurity risk management activities are integrated into enterprise risk management.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["ERM committee minutes"],
            owner: "CRO",
            lastReviewed: "2026-04-02",
          },
        ],
      },
      {
        id: "GV.RR",
        title: "Roles, Responsibilities & Authorities",
        description:
          "Cybersecurity roles, responsibilities and authorities are established and communicated.",
        subcategories: [
          {
            id: "GV.RR-01",
            title: "Leadership accountability",
            description:
              "Organizational leadership is responsible and accountable for cybersecurity risk.",
            currentScore: 4,
            targetScore: 5,
            evidence: ["CISO charter"],
            owner: "CISO",
            lastReviewed: "2026-04-30",
          },
          {
            id: "GV.RR-02",
            title: "Roles for cybersecurity established",
            description:
              "Roles, responsibilities and authorities for cybersecurity are established, communicated and enforced.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["RACI matrix"],
            owner: "HR / CISO",
            lastReviewed: "2026-03-18",
          },
        ],
      },
      {
        id: "GV.PO",
        title: "Policy",
        description:
          "Organizational cybersecurity policy is established, communicated and enforced.",
        subcategories: [
          {
            id: "GV.PO-01",
            title: "Policy established and communicated",
            description:
              "Policy for managing cybersecurity risks is established based on context, strategy and priorities.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["InfoSec policy v4"],
            owner: "CISO",
            lastReviewed: "2026-02-28",
          },
          {
            id: "GV.PO-02",
            title: "Policy reviewed and updated",
            description:
              "Policy is reviewed, updated and communicated to reflect changes in requirements and threats.",
            currentScore: 2,
            targetScore: 4,
            evidence: [],
            owner: "GRC Team",
            lastReviewed: "2025-09-10",
            notes: "Last review > 6 months old.",
          },
        ],
      },
      {
        id: "GV.OV",
        title: "Oversight",
        description:
          "Results of organization-wide cybersecurity risk management activities are used to inform, improve and adjust the risk management strategy.",
        subcategories: [
          {
            id: "GV.OV-01",
            title: "Outcomes are reviewed",
            description:
              "Cybersecurity risk management strategy outcomes are reviewed to inform adjustments.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["KPI dashboard"],
            owner: "CISO",
            lastReviewed: "2026-03-01",
          },
          {
            id: "GV.OV-02",
            title: "Performance is evaluated",
            description:
              "The cybersecurity risk management strategy is reviewed for effectiveness.",
            currentScore: 2,
            targetScore: 3,
            evidence: [],
            owner: "Internal Audit",
            lastReviewed: "2025-12-01",
          },
        ],
      },
      {
        id: "GV.SC",
        title: "Cybersecurity Supply Chain Risk Management",
        description:
          "Cyber supply chain risk management processes are identified, established, managed, monitored and improved by organizational stakeholders.",
        subcategories: [
          {
            id: "GV.SC-01",
            title: "C-SCRM program established",
            description:
              "A cyber supply chain risk management program is established and agreed to by stakeholders.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Vendor inventory"],
            owner: "Procurement / CISO",
            lastReviewed: "2026-01-20",
          },
          {
            id: "GV.SC-02",
            title: "Supplier risks identified, prioritized and assessed",
            description:
              "Suppliers are known and prioritized by criticality.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Top-20 vendors tier list"],
            owner: "Vendor Management",
            lastReviewed: "2026-02-10",
          },
          {
            id: "GV.SC-03",
            title: "Contracts include cybersecurity requirements",
            description:
              "Contracts with suppliers and third-party partners are used to implement security requirements.",
            currentScore: 1,
            targetScore: 3,
            evidence: [],
            owner: "Legal",
            lastReviewed: "2025-08-19",
            notes: "Standard MSA does not yet require SOC 2 / ISO 27001.",
          },
        ],
      },
    ],
  },
  {
    id: "ID",
    name: "Identify",
    description:
      "Help determine the current cybersecurity risk to the organization by understanding assets, suppliers and related risks.",
    color: "#06b6d4",
    accent: "from-cyan-500/30 to-cyan-500/0",
    categories: [
      {
        id: "ID.AM",
        title: "Asset Management",
        description:
          "Assets that enable the organization to achieve business purposes are identified and managed consistent with their relative importance.",
        subcategories: [
          {
            id: "ID.AM-01",
            title: "Hardware inventory",
            description:
              "Inventories of hardware managed by the organization are maintained.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["CMDB export", "EDR enrollment"],
            owner: "IT Operations",
            lastReviewed: "2026-04-22",
          },
          {
            id: "ID.AM-02",
            title: "Software inventory",
            description:
              "Inventories of software, services and systems managed by the organization are maintained.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["SBOM registry"],
            owner: "IT Operations",
            lastReviewed: "2026-04-22",
          },
          {
            id: "ID.AM-03",
            title: "Data flows and dependencies mapped",
            description:
              "Representations of authorized communication and internal/external network data flows are maintained.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Network diagram v2"],
            owner: "Network Team",
            lastReviewed: "2025-10-30",
          },
          {
            id: "ID.AM-04",
            title: "External systems and services cataloged",
            description:
              "Inventories of services provided by suppliers are maintained.",
            currentScore: 2,
            targetScore: 3,
            evidence: [],
            owner: "Vendor Management",
            lastReviewed: "2026-01-10",
          },
          {
            id: "ID.AM-05",
            title: "Assets prioritized by criticality",
            description:
              "Assets are prioritized based on classification, criticality, resources and impact on the mission.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Crown jewels list"],
            owner: "Risk Management",
            lastReviewed: "2026-02-25",
          },
        ],
      },
      {
        id: "ID.RA",
        title: "Risk Assessment",
        description:
          "The cybersecurity risk to the organization, assets and individuals is understood by the organization.",
        subcategories: [
          {
            id: "ID.RA-01",
            title: "Vulnerabilities are identified",
            description:
              "Vulnerabilities in assets are identified, validated and recorded.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Tenable scans (weekly)"],
            owner: "Vuln Mgmt",
            lastReviewed: "2026-05-10",
          },
          {
            id: "ID.RA-02",
            title: "Cyber threat intelligence received",
            description:
              "Cyber threat intelligence is received from information sharing forums and sources.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["TI subscription"],
            owner: "SOC",
            lastReviewed: "2026-04-15",
          },
          {
            id: "ID.RA-03",
            title: "Internal and external threats identified",
            description:
              "Internal and external threats to the organization are identified and recorded.",
            currentScore: 2,
            targetScore: 3,
            evidence: ["Threat model — payment service"],
            owner: "Risk / SOC",
            lastReviewed: "2026-03-30",
          },
          {
            id: "ID.RA-04",
            title: "Likelihood and impact analyzed",
            description:
              "Potential impacts and likelihoods of threats exploiting vulnerabilities are identified and recorded.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Risk register"],
            owner: "Risk Management",
            lastReviewed: "2026-04-01",
          },
        ],
      },
      {
        id: "ID.IM",
        title: "Improvement",
        description:
          "Improvements to organizational cybersecurity risk management processes, procedures and activities are identified across all CSF Functions.",
        subcategories: [
          {
            id: "ID.IM-01",
            title: "Improvements identified from evaluations",
            description:
              "Improvements are identified from evaluations.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Tabletop AAR"],
            owner: "CISO Office",
            lastReviewed: "2026-02-19",
          },
          {
            id: "ID.IM-02",
            title: "Improvements identified from tests and exercises",
            description:
              "Improvements are identified from security tests and exercises.",
            currentScore: 1,
            targetScore: 3,
            evidence: [],
            owner: "Red Team / SOC",
            lastReviewed: "2025-11-05",
          },
        ],
      },
    ],
  },
  {
    id: "PR",
    name: "Protect",
    description:
      "Use safeguards to prevent or reduce cybersecurity risk.",
    color: "#10b981",
    accent: "from-emerald-500/30 to-emerald-500/0",
    categories: [
      {
        id: "PR.AA",
        title: "Identity Management, Authentication & Access Control",
        description:
          "Access to physical and logical assets is limited to authorized users, services and hardware.",
        subcategories: [
          {
            id: "PR.AA-01",
            title: "Identities and credentials are managed",
            description:
              "Identities and credentials for authorized users, services and hardware are managed.",
            currentScore: 3,
            targetScore: 5,
            evidence: ["Okta tenant", "JML process"],
            owner: "Identity Team",
            lastReviewed: "2026-05-08",
          },
          {
            id: "PR.AA-02",
            title: "Identities are proofed and bound",
            description:
              "Identities are proofed and bound to credentials based on context.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Onboarding SOP"],
            owner: "HR / IT",
            lastReviewed: "2026-04-11",
          },
          {
            id: "PR.AA-03",
            title: "Users, services, hardware authenticated",
            description:
              "Users, services and hardware are authenticated.",
            currentScore: 4,
            targetScore: 5,
            evidence: ["MFA enforcement report (97%)"],
            owner: "Identity Team",
            lastReviewed: "2026-05-20",
            notes: "3% gap on legacy file servers — break-glass only.",
          },
          {
            id: "PR.AA-04",
            title: "Identity assertions protected",
            description:
              "Identity assertions are protected, conveyed and verified.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["SAML / OIDC config"],
            owner: "Identity Team",
            lastReviewed: "2026-04-29",
          },
          {
            id: "PR.AA-05",
            title: "Access permissions, entitlements, authorizations",
            description:
              "Access permissions, entitlements and authorizations are defined per least privilege and separation of duties.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Quarterly access review"],
            owner: "GRC",
            lastReviewed: "2026-02-28",
          },
          {
            id: "PR.AA-06",
            title: "Physical access managed",
            description:
              "Physical access to assets is managed, monitored and enforced.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Badging system logs"],
            owner: "Facilities",
            lastReviewed: "2026-03-12",
          },
        ],
      },
      {
        id: "PR.AT",
        title: "Awareness & Training",
        description:
          "The organization's personnel are provided cybersecurity awareness education.",
        subcategories: [
          {
            id: "PR.AT-01",
            title: "Personnel are provided awareness training",
            description:
              "Personnel are provided with awareness and training so that they possess the knowledge and skills to perform their cybersecurity-related tasks.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["KnowBe4 LMS report (94%)"],
            owner: "Security Awareness",
            lastReviewed: "2026-04-28",
          },
          {
            id: "PR.AT-02",
            title: "Specialized roles trained",
            description:
              "Individuals in specialized roles are provided with awareness and training.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Dev secure-coding course"],
            owner: "CISO Office",
            lastReviewed: "2026-01-25",
          },
        ],
      },
      {
        id: "PR.DS",
        title: "Data Security",
        description:
          "Data are managed consistent with the organization's risk strategy to protect confidentiality, integrity and availability.",
        subcategories: [
          {
            id: "PR.DS-01",
            title: "Data at rest protected",
            description:
              "The confidentiality, integrity and availability of data-at-rest are protected.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["KMS policy", "EBS encryption baseline"],
            owner: "Cloud Sec",
            lastReviewed: "2026-04-18",
          },
          {
            id: "PR.DS-02",
            title: "Data in transit protected",
            description:
              "The confidentiality, integrity and availability of data-in-transit are protected.",
            currentScore: 4,
            targetScore: 5,
            evidence: ["TLS 1.3 baseline", "mTLS in mesh"],
            owner: "Platform Eng",
            lastReviewed: "2026-04-18",
          },
          {
            id: "PR.DS-10",
            title: "Data classification and labeling",
            description:
              "Data are classified and labeled consistent with risk.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Microsoft Purview labels (pilot)"],
            owner: "GRC",
            lastReviewed: "2026-03-08",
          },
          {
            id: "PR.DS-11",
            title: "Backups maintained, protected and tested",
            description:
              "Backups of data are created, protected, maintained and tested.",
            currentScore: 3,
            targetScore: 5,
            evidence: ["Veeam reports", "Last restore test 2026-04-09"],
            owner: "IT Operations",
            lastReviewed: "2026-04-09",
          },
        ],
      },
      {
        id: "PR.PS",
        title: "Platform Security",
        description:
          "The hardware, software and services of physical and virtual platforms are managed consistent with the organization's risk strategy.",
        subcategories: [
          {
            id: "PR.PS-01",
            title: "Configuration management practices applied",
            description:
              "Configuration management practices are established and applied.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["CIS Benchmarks", "Terraform baselines"],
            owner: "Platform Eng",
            lastReviewed: "2026-04-30",
          },
          {
            id: "PR.PS-02",
            title: "Software maintained, replaced, removed",
            description:
              "Software is maintained, replaced or removed consistent with risk.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Patch SLA report"],
            owner: "IT Operations",
            lastReviewed: "2026-03-31",
          },
          {
            id: "PR.PS-03",
            title: "Hardware maintained, replaced, removed",
            description:
              "Hardware is maintained, replaced or removed consistent with risk.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Lifecycle policy"],
            owner: "IT Operations",
            lastReviewed: "2026-02-04",
          },
          {
            id: "PR.PS-05",
            title: "Malicious code prevention",
            description:
              "Installation and execution of unauthorized software are prevented.",
            currentScore: 4,
            targetScore: 5,
            evidence: ["CrowdStrike Falcon", "AppLocker policies"],
            owner: "Endpoint Sec",
            lastReviewed: "2026-05-22",
          },
          {
            id: "PR.PS-06",
            title: "Secure software development practices",
            description:
              "Secure software development practices are integrated and their performance is monitored throughout the SDLC.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["SAST in CI for 7/22 services"],
            owner: "AppSec",
            lastReviewed: "2026-04-02",
            notes: "Coverage gap on legacy monoliths.",
          },
        ],
      },
      {
        id: "PR.IR",
        title: "Technology Infrastructure Resilience",
        description:
          "Security architectures are managed with the organization's risk strategy to protect asset confidentiality, integrity and availability.",
        subcategories: [
          {
            id: "PR.IR-01",
            title: "Networks and environments protected from unauthorized logical access",
            description:
              "Networks and environments are protected from unauthorized logical access and usage.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Zero trust roadmap", "Segmentation policy"],
            owner: "Network Sec",
            lastReviewed: "2026-04-15",
          },
          {
            id: "PR.IR-02",
            title: "Technology assets protected from environmental threats",
            description:
              "The organization's technology assets are protected from environmental threats.",
            currentScore: 4,
            targetScore: 4,
            evidence: ["Multi-AZ deployment"],
            owner: "Cloud Sec",
            lastReviewed: "2026-03-22",
          },
        ],
      },
    ],
  },
  {
    id: "DE",
    name: "Detect",
    description:
      "Find and analyze possible cybersecurity attacks and compromises.",
    color: "#f59e0b",
    accent: "from-amber-500/30 to-amber-500/0",
    categories: [
      {
        id: "DE.CM",
        title: "Continuous Monitoring",
        description:
          "Assets are monitored to find anomalies, indicators of compromise and other potentially adverse events.",
        subcategories: [
          {
            id: "DE.CM-01",
            title: "Networks and network services monitored",
            description:
              "Networks and network services are monitored to find potentially adverse events.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["NDR sensors", "NetFlow retention 90d"],
            owner: "SOC",
            lastReviewed: "2026-05-18",
          },
          {
            id: "DE.CM-03",
            title: "Personnel activity monitored",
            description:
              "Personnel activity and technology usage are monitored to find potentially adverse events.",
            currentScore: 2,
            targetScore: 3,
            evidence: ["UEBA pilot"],
            owner: "SOC",
            lastReviewed: "2026-02-28",
          },
          {
            id: "DE.CM-06",
            title: "External service provider activity monitored",
            description:
              "External service provider activity is monitored to find potentially adverse events.",
            currentScore: 1,
            targetScore: 3,
            evidence: [],
            owner: "SOC / Vendor Mgmt",
            lastReviewed: "2025-10-14",
          },
          {
            id: "DE.CM-09",
            title: "Computing hardware and software, runtime environments monitored",
            description:
              "Computing hardware and software, runtime environments and their data are monitored to find potentially adverse events.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["EDR coverage 98%"],
            owner: "Endpoint Sec",
            lastReviewed: "2026-05-22",
          },
        ],
      },
      {
        id: "DE.AE",
        title: "Adverse Event Analysis",
        description:
          "Anomalies, indicators of compromise and other potentially adverse events are analyzed to characterize the events and detect cybersecurity incidents.",
        subcategories: [
          {
            id: "DE.AE-02",
            title: "Potentially adverse events analyzed",
            description:
              "Potentially adverse events are analyzed to better understand associated activities.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["SIEM use cases (38)"],
            owner: "SOC",
            lastReviewed: "2026-04-12",
          },
          {
            id: "DE.AE-03",
            title: "Information correlated from multiple sources",
            description:
              "Information is correlated from multiple sources.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Splunk ES correlation searches"],
            owner: "SOC",
            lastReviewed: "2026-05-01",
          },
          {
            id: "DE.AE-04",
            title: "Impact and scope of adverse events estimated",
            description:
              "The estimated impact and scope of adverse events are understood.",
            currentScore: 2,
            targetScore: 3,
            evidence: ["IR playbooks v2"],
            owner: "SOC",
            lastReviewed: "2026-03-19",
          },
          {
            id: "DE.AE-06",
            title: "Information shared with stakeholders",
            description:
              "Information on adverse events is provided to authorized staff and tools.",
            currentScore: 2,
            targetScore: 3,
            evidence: ["MISP integration"],
            owner: "SOC",
            lastReviewed: "2026-02-08",
          },
        ],
      },
    ],
  },
  {
    id: "RS",
    name: "Respond",
    description:
      "Take action regarding a detected cybersecurity incident.",
    color: "#ef4444",
    accent: "from-rose-500/30 to-rose-500/0",
    categories: [
      {
        id: "RS.MA",
        title: "Incident Management",
        description:
          "Responses to detected cybersecurity incidents are managed.",
        subcategories: [
          {
            id: "RS.MA-01",
            title: "Incident response plan executed",
            description:
              "The incident response plan is executed in coordination with relevant third parties.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["IR plan v3", "Last exercise 2026-03-14"],
            owner: "CSIRT",
            lastReviewed: "2026-03-14",
          },
          {
            id: "RS.MA-02",
            title: "Incident reports triaged and validated",
            description:
              "Incident reports are triaged and validated.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Triage SLA report"],
            owner: "SOC",
            lastReviewed: "2026-05-10",
          },
          {
            id: "RS.MA-03",
            title: "Incidents are categorized and prioritized",
            description:
              "Incidents are categorized and prioritized.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["IR taxonomy"],
            owner: "CSIRT",
            lastReviewed: "2026-04-20",
          },
        ],
      },
      {
        id: "RS.AN",
        title: "Incident Analysis",
        description:
          "Investigations are conducted to ensure effective response and support forensics and recovery activities.",
        subcategories: [
          {
            id: "RS.AN-03",
            title: "Analysis performed to determine impact",
            description:
              "Analysis is performed to establish what has taken place during an incident and the root cause of the incident.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Post-mortem template"],
            owner: "CSIRT",
            lastReviewed: "2026-03-30",
          },
          {
            id: "RS.AN-06",
            title: "Actions performed during investigation recorded",
            description:
              "Actions performed during an investigation are recorded and the records' integrity and provenance are preserved.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Case management tool"],
            owner: "CSIRT",
            lastReviewed: "2026-02-22",
          },
        ],
      },
      {
        id: "RS.CO",
        title: "Incident Response Reporting & Communication",
        description:
          "Response activities are coordinated with internal and external stakeholders.",
        subcategories: [
          {
            id: "RS.CO-02",
            title: "Internal and external stakeholders notified",
            description:
              "Internal and external stakeholders are notified of incidents.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Comms plan v1"],
            owner: "Comms / Legal",
            lastReviewed: "2026-01-29",
            notes: "ANPD timelines for LGPD not yet automated.",
          },
          {
            id: "RS.CO-03",
            title: "Information shared with stakeholders consistent with plans",
            description:
              "Information is shared with stakeholders consistent with response plans.",
            currentScore: 2,
            targetScore: 3,
            evidence: [],
            owner: "Comms",
            lastReviewed: "2025-12-12",
          },
        ],
      },
      {
        id: "RS.MI",
        title: "Incident Mitigation",
        description:
          "Activities are performed to prevent expansion of an event and mitigate its effects.",
        subcategories: [
          {
            id: "RS.MI-01",
            title: "Incidents are contained",
            description:
              "Incidents are contained.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["EDR isolation playbook"],
            owner: "SOC",
            lastReviewed: "2026-04-08",
          },
          {
            id: "RS.MI-02",
            title: "Incidents are eradicated",
            description:
              "Incidents are eradicated.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["Rebuild SOPs (servers)"],
            owner: "SOC / IT Ops",
            lastReviewed: "2026-03-02",
          },
        ],
      },
    ],
  },
  {
    id: "RC",
    name: "Recover",
    description:
      "Restore assets and operations affected by a cybersecurity incident.",
    color: "#3b82f6",
    accent: "from-blue-500/30 to-blue-500/0",
    categories: [
      {
        id: "RC.RP",
        title: "Incident Recovery Plan Execution",
        description:
          "Restoration activities are performed to ensure operational availability of systems and services affected by cybersecurity incidents.",
        subcategories: [
          {
            id: "RC.RP-01",
            title: "Recovery plan executed",
            description:
              "The recovery portion of the incident response plan is executed once initiated from the incident response process.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["DR runbook v2"],
            owner: "IT Operations",
            lastReviewed: "2026-02-17",
          },
          {
            id: "RC.RP-02",
            title: "Recovery actions selected, scoped, prioritized",
            description:
              "Recovery actions are selected, scoped, prioritized and performed.",
            currentScore: 2,
            targetScore: 4,
            evidence: ["RTO/RPO matrix"],
            owner: "IT Operations",
            lastReviewed: "2026-02-17",
          },
          {
            id: "RC.RP-03",
            title: "Integrity of backups verified",
            description:
              "The integrity of backups and other restoration assets is verified before using them for restoration.",
            currentScore: 3,
            targetScore: 4,
            evidence: ["Veeam SureBackup"],
            owner: "IT Operations",
            lastReviewed: "2026-04-09",
          },
          {
            id: "RC.RP-04",
            title: "Critical mission functions restored",
            description:
              "Critical mission functions and cybersecurity risk management are considered to establish post-incident operational norms.",
            currentScore: 2,
            targetScore: 4,
            evidence: [],
            owner: "BCM",
            lastReviewed: "2025-11-04",
          },
        ],
      },
      {
        id: "RC.CO",
        title: "Incident Recovery Communication",
        description:
          "Restoration activities are coordinated with internal and external parties.",
        subcategories: [
          {
            id: "RC.CO-03",
            title: "Recovery activities communicated to stakeholders",
            description:
              "Recovery activities and progress in restoring operational capabilities are communicated to designated stakeholders.",
            currentScore: 2,
            targetScore: 3,
            evidence: [],
            owner: "Comms",
            lastReviewed: "2025-12-12",
          },
          {
            id: "RC.CO-04",
            title: "Public updates shared",
            description:
              "Public updates on incident recovery are shared using approved methods and messaging.",
            currentScore: 1,
            targetScore: 3,
            evidence: [],
            owner: "Comms / Legal",
            lastReviewed: "2025-10-30",
            notes: "No standing public statement template.",
          },
        ],
      },
    ],
  },
];

export function getAllSubcategories(): Subcategory[] {
  return NIST_FRAMEWORK.flatMap((fn) =>
    fn.categories.flatMap((c) => c.subcategories),
  );
}

export function averageFunctionScore(fn: CSFFunction): number {
  const all = fn.categories.flatMap((c) => c.subcategories);
  if (all.length === 0) return 0;
  const sum = all.reduce((acc, s) => acc + s.currentScore, 0);
  return Number((sum / all.length).toFixed(2));
}

export function averageFunctionTarget(fn: CSFFunction): number {
  const all = fn.categories.flatMap((c) => c.subcategories);
  if (all.length === 0) return 0;
  const sum = all.reduce((acc, s) => acc + s.targetScore, 0);
  return Number((sum / all.length).toFixed(2));
}

export function averageCategoryScore(c: Category): number {
  if (c.subcategories.length === 0) return 0;
  const sum = c.subcategories.reduce((acc, s) => acc + s.currentScore, 0);
  return Number((sum / c.subcategories.length).toFixed(2));
}

export function overallMaturity(): number {
  const all = getAllSubcategories();
  if (all.length === 0) return 0;
  const sum = all.reduce((acc, s) => acc + s.currentScore, 0);
  return Number((sum / all.length).toFixed(2));
}

export function overallTarget(): number {
  const all = getAllSubcategories();
  if (all.length === 0) return 0;
  const sum = all.reduce((acc, s) => acc + s.targetScore, 0);
  return Number((sum / all.length).toFixed(2));
}

export function functionById(id: CSFFunction["id"]): CSFFunction | undefined {
  return NIST_FRAMEWORK.find((f) => f.id === id);
}
