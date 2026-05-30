import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldHalf,
  Lock,
  Mail,
  ArrowRight,
  Activity,
  Sparkles,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "@/i18n/I18nProvider";

export function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate("/app"), 700);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-ink-100">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(1100px 600px at 80% -10%, rgba(53,99,246,0.45), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(139,92,246,0.35), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div className="absolute right-5 top-5 z-20">
        <LanguageSwitcher />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between p-12">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-lg shadow-brand-900/40">
              <ShieldHalf className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">Maturix</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink-400">
                {t("login.subtitle.platform")}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-[11px] font-medium text-brand-200">
                <Sparkles className="h-3.5 w-3.5" /> {t("login.tagline")}
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white">
                {t("login.heroTitle")}
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-300">
                {t("login.heroBody")}
              </p>
            </div>

            <ul className="space-y-3">
              {[t("login.bullet1"), t("login.bullet2"), t("login.bullet3")].map(
                (line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-sm text-ink-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{line}</span>
                  </li>
                ),
              )}
            </ul>

            <div className="grid grid-cols-3 gap-3">
              <Stat icon={Activity} label={t("login.stat.outcomes")} value="106" />
              <Stat icon={Globe2} label={t("login.stat.frameworks")} value="CSF 2.0" />
              <Stat icon={Sparkles} label={t("login.stat.ai")} value="9 live" />
            </div>
          </div>

          <div className="text-xs text-ink-500">{t("login.copyright")}</div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-ink-900/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="mb-7 flex items-center justify-between">
                <div className="lg:hidden flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700">
                    <ShieldHalf className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">
                    Maturix
                  </span>
                </div>
                <div className="ml-auto rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300">
                  SOC 2 · ISO 27001
                </div>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white">
                {t("login.welcome")}
              </h2>
              <p className="mt-1.5 text-sm text-ink-400">{t("login.subtitle")}</p>

              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <div>
                  <label className="text-xs font-medium text-ink-300">
                    {t("login.email")}
                  </label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                    <Input
                      type="email"
                      defaultValue="neto.loureiro@orion.com.br"
                      placeholder="you@company.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-ink-300">
                      {t("login.password")}
                    </label>
                    <a
                      href="#"
                      className="text-[11px] font-medium text-brand-300 hover:text-brand-200"
                    >
                      {t("login.forgot")}
                    </a>
                  </div>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                    <Input
                      type="password"
                      defaultValue="demo-password"
                      placeholder="••••••••••"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs text-ink-300">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-3.5 w-3.5 rounded border-white/20 bg-ink-950 text-brand-500 focus:ring-brand-400"
                  />
                  {t("login.remember")}
                </label>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? t("login.submitting") : t("login.submit")}
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <div className="relative py-2 text-center text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  <span className="bg-ink-900/0 px-2">{t("login.or")}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button type="button" variant="outline">
                    {t("login.sso")}
                  </Button>
                  <Button type="button" variant="outline">
                    {t("login.entra")}
                  </Button>
                </div>
              </form>
            </div>

            <p className="mt-5 text-center text-[11px] text-ink-500">
              {t("login.tos.prefix")}{" "}
              <a className="text-ink-300 underline-offset-2 hover:underline">
                {t("login.tos.terms")}
              </a>{" "}
              {t("login.tos.and")}{" "}
              <a className="text-ink-300 underline-offset-2 hover:underline">
                {t("login.tos.privacy")}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Activity;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-4">
      <Icon className="h-4 w-4 text-brand-300" />
      <div className="mt-3 text-lg font-bold text-white">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-ink-400">
        {label}
      </div>
    </div>
  );
}
