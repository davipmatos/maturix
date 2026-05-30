import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MOCK_TREND } from "@/data/mockData";

export function TrendChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={MOCK_TREND} margin={{ top: 10, right: 12, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a8aff" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#5a8aff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
        <XAxis
          dataKey="period"
          tick={{ fill: "#8997ac", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 5]}
          tick={{ fill: "#8997ac", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          ticks={[0, 1, 2, 3, 4, 5]}
        />
        <Tooltip
          contentStyle={{
            background: "#0f1422",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            color: "#eef2f7",
            fontSize: 12,
          }}
          labelStyle={{ color: "#b9c4d3", fontSize: 11 }}
          formatter={(v: number, name: string) => [v.toFixed(2), name]}
        />
        <Area
          type="monotone"
          dataKey="overall"
          stroke="#5a8aff"
          strokeWidth={2.5}
          fill="url(#trendFill)"
          name="Overall maturity"
        />
        <Area
          type="monotone"
          dataKey="govern"
          stroke="#8b5cf6"
          strokeWidth={1.5}
          fill="transparent"
          name="Govern"
        />
        <Area
          type="monotone"
          dataKey="protect"
          stroke="#10b981"
          strokeWidth={1.5}
          fill="transparent"
          name="Protect"
        />
        <Area
          type="monotone"
          dataKey="detect"
          stroke="#f59e0b"
          strokeWidth={1.5}
          fill="transparent"
          name="Detect"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
