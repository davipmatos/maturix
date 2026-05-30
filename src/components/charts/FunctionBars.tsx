import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FUNCTION_BREAKDOWN } from "@/data/mockData";
import { useTranslation } from "@/i18n/I18nProvider";

export function FunctionBars() {
  const { t } = useTranslation();
  const data = FUNCTION_BREAKDOWN.map((fn) => ({
    ...fn,
    name: t(fn.nameKey),
  }));
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={data}
        margin={{ top: 8, right: 12, left: -10, bottom: 0 }}
        barCategoryGap={22}
      >
        <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fill: "#8997ac", fontSize: 11, fontWeight: 600 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 5]}
          ticks={[0, 1, 2, 3, 4, 5]}
          tick={{ fill: "#8997ac", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "rgba(255,255,255,0.04)" }}
          contentStyle={{
            background: "#0f1422",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            color: "#eef2f7",
            fontSize: 12,
          }}
          formatter={(v: number) => v.toFixed(2)}
        />
        <Bar dataKey="current" radius={[6, 6, 2, 2]} name={t("common.current")}>
          {FUNCTION_BREAKDOWN.map((fn) => (
            <Cell key={fn.id} fill={fn.color} fillOpacity={0.85} />
          ))}
        </Bar>
        <Bar
          dataKey="target"
          radius={[6, 6, 2, 2]}
          name={t("common.targetWord")}
          fill="rgba(255,255,255,0.12)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
