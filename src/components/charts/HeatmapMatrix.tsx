import { NIST_FRAMEWORK, averageCategoryScore } from "@/data/nistFramework";
import { scoreColor, scoreLabel } from "@/lib/utils";
import { useTranslation } from "@/i18n/I18nProvider";

export function HeatmapMatrix() {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      {NIST_FRAMEWORK.map((fn) => (
        <div key={fn.id} className="flex items-center gap-3">
          <div className="w-24 shrink-0">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: fn.color }}
              />
              <span className="text-xs font-semibold text-ink-100">
                {t(`nist.${fn.id}.name`)}
              </span>
            </div>
            <div className="mt-0.5 text-[10px] text-ink-500">{fn.id}</div>
          </div>
          <div
            className="grid flex-1 gap-1.5"
            style={{
              gridTemplateColumns: `repeat(${fn.categories.length}, minmax(0, 1fr))`,
            }}
          >
            {fn.categories.map((c) => {
              const score = averageCategoryScore(c);
              return (
                <div
                  key={c.id}
                  className="group relative flex h-12 flex-col items-center justify-center rounded-lg border border-white/5 transition-transform hover:scale-[1.03]"
                  style={{
                    backgroundColor: `${scoreColor(score)}26`,
                    boxShadow: `inset 0 0 0 1px ${scoreColor(score)}40`,
                  }}
                  title={`${c.id} — ${c.title} · ${score.toFixed(2)} (${scoreLabel(score)})`}
                >
                  <div className="text-[10px] font-mono font-semibold text-ink-100">
                    {c.id}
                  </div>
                  <div
                    className="text-[10px] font-bold tabular-nums"
                    style={{ color: scoreColor(score) }}
                  >
                    {score.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="mt-3 flex items-center justify-end gap-3 pt-2 text-[10px] text-ink-400">
        <span>{t("dashboard.legend.maturity")}</span>
        {[1, 2, 3, 4, 5].map((l) => (
          <span key={l} className="flex items-center gap-1">
            <span
              className="h-2 w-3.5 rounded"
              style={{ backgroundColor: scoreColor(l) }}
            />
            L{l}
          </span>
        ))}
      </div>
    </div>
  );
}
