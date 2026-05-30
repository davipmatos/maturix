import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FUNCTION_BREAKDOWN } from "@/data/mockData";

export function RadarScore() {
  const data = FUNCTION_BREAKDOWN.map((fn) => ({
    function: fn.name,
    current: fn.current,
    target: fn.target,
    fullMark: 5,
  }));

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart data={data} outerRadius="78%">
        <defs>
          <linearGradient id="radarCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a8aff" stopOpacity={0.85} />
            <stop offset="100%" stopColor="#1f44e5" stopOpacity={0.55} />
          </linearGradient>
          <linearGradient id="radarTarget" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity={0.18} />
            <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <PolarGrid stroke="rgba(255,255,255,0.08)" />
        <PolarAngleAxis
          dataKey="function"
          tick={{ fill: "#b9c4d3", fontSize: 11, fontWeight: 600 }}
        />
        <PolarRadiusAxis
          domain={[0, 5]}
          tickCount={6}
          stroke="rgba(255,255,255,0.06)"
          tick={{ fill: "#5d6b82", fontSize: 10 }}
        />
        <Radar
          dataKey="target"
          stroke="#22c55e"
          strokeDasharray="4 4"
          fill="url(#radarTarget)"
          strokeWidth={1.5}
        />
        <Radar
          dataKey="current"
          stroke="#5a8aff"
          fill="url(#radarCurrent)"
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            background: "#0f1422",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            color: "#eef2f7",
            fontSize: 12,
          }}
          formatter={(v: number) => v.toFixed(2)}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
