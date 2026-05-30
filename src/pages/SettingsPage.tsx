import {
  Bell,
  Building2,
  KeyRound,
  Mail,
  Shield,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MOCK_ORG } from "@/data/mockData";
import { useTranslation } from "@/i18n/I18nProvider";

const MEMBERS = [
  { name: "Neto Loureiro", role: "Director of Cyber", email: "neto.loureiro@orion.com.br", access: "Owner" },
  { name: "Carla Mendes", role: "GRC Lead", email: "carla.mendes@orion.com.br", access: "Editor" },
  { name: "Pedro Alcântara", role: "SOC Lead", email: "pedro.alcantara@orion.com.br", access: "Editor" },
  { name: "Aline Souza", role: "Internal Audit", email: "aline.souza@orion.com.br", access: "Viewer" },
  { name: "James Iverson", role: "External Assessor (KPMG)", email: "jiverson@external.com", access: "Viewer · Guest" },
];

export function SettingsPage() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs text-ink-400">
          <Building2 className="h-3.5 w-3.5" /> {t("nav.settings")}
        </div>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
          {t("settings.title")}
        </h1>
        <p className="text-sm text-ink-400">{t("settings.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-brand-300" />
              {t("settings.profile")}
            </CardTitle>
            <CardSubtitle>{t("settings.profile.subtitle")}</CardSubtitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label={t("settings.field.orgName")} defaultValue={MOCK_ORG.name} />
              <Field
                label={t("settings.field.industry")}
                defaultValue={t("org.industry")}
              />
              <Field
                label={t("settings.field.size")}
                defaultValue={t("org.size")}
              />
              <Field
                label={t("settings.field.hq")}
                defaultValue={MOCK_ORG.headquarters}
              />
              <Field
                label={t("settings.field.regs")}
                defaultValue={MOCK_ORG.primaryRegulations.join(", ")}
              />
              <Field
                label={t("settings.field.appetite")}
                defaultValue={t("org.appetite.low")}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button>{t("common.save")}</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              {t("settings.security")}
            </CardTitle>
            <CardSubtitle>{t("settings.security.subtitle")}</CardSubtitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ToggleRow
              icon={KeyRound}
              title={t("settings.security.mfa.title")}
              description={t("settings.security.mfa.desc")}
              defaultChecked
            />
            <ToggleRow
              icon={Mail}
              title={t("settings.security.domain.title")}
              description={t("settings.security.domain.desc")}
              defaultChecked
            />
            <ToggleRow
              icon={Bell}
              title={t("settings.security.drift.title")}
              description={t("settings.security.drift.desc")}
              defaultChecked
            />
            <ToggleRow
              icon={Shield}
              title={t("settings.security.guests.title")}
              description={t("settings.security.guests.desc")}
              defaultChecked={false}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand-300" />
              {t("settings.members")}
            </CardTitle>
            <CardSubtitle>
              {t("settings.members.subtitle", { n: MEMBERS.length })}
            </CardSubtitle>
          </div>
          <Button variant="outline" size="sm">
            {t("common.invite")}
          </Button>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-hidden border-t border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-ink-500">
                  <th className="px-5 py-3 text-left font-medium">
                    {t("settings.members.col.member")}
                  </th>
                  <th className="px-5 py-3 text-left font-medium">
                    {t("settings.members.col.role")}
                  </th>
                  <th className="px-5 py-3 text-left font-medium">
                    {t("settings.members.col.email")}
                  </th>
                  <th className="px-5 py-3 text-right font-medium">
                    {t("settings.members.col.access")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MEMBERS.map((m) => (
                  <tr key={m.email} className="hover:bg-white/[0.03]">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-[11px] font-bold text-white">
                          {m.name
                            .split(" ")
                            .map((p) => p[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <span className="font-medium text-ink-100">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-ink-300">{m.role}</td>
                    <td className="px-5 py-3 text-ink-300">{m.email}</td>
                    <td className="px-5 py-3 text-right">
                      <Badge
                        tone={
                          m.access.startsWith("Owner")
                            ? "brand"
                            : m.access.startsWith("Editor")
                              ? "info"
                              : "neutral"
                        }
                      >
                        {m.access}
                      </Badge>
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

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-ink-300">{label}</div>
      <Input defaultValue={defaultValue} />
    </label>
  );
}

function ToggleRow({
  icon: Icon,
  title,
  description,
  defaultChecked,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
  defaultChecked: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-ink-950/40 p-3">
      <Icon className="h-4 w-4 text-ink-300" />
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-ink-100">{title}</div>
        <div className="text-[11px] text-ink-400">{description}</div>
      </div>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="relative h-5 w-9 rounded-full bg-white/10 transition-colors peer-checked:bg-brand-500/70">
        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
      </span>
    </label>
  );
}
