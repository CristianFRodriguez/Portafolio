import { ExternalLink, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

interface ScholarMetricsProps {
  publications?: number;
  citations?: number;
  hIndex?: number;
  i10Index?: number;
  byYear?: { year: number; citations: number }[];
  scholarUrl?: string;
}

interface StatCardProps {
  label: string;
  value: number | string;
  sub?: string;
  accent?: boolean;
  index: number;
}

const StatCard = ({ label, value, sub, accent, index }: StatCardProps) => (
  <div
    className="relative rounded-xl p-4 border transition-all duration-200 animate-fade-in overflow-hidden group hover:shadow-md"
    style={{
      animationDelay: `${index * 80}ms`,
      borderColor: accent ? "rgba(29,78,216,0.2)" : "rgb(241,245,249)",
      background: accent
        ? "linear-gradient(135deg, rgba(29,78,216,0.04) 0%, rgba(8,145,178,0.06) 100%)"
        : "white",
    }}
    aria-label={`${label}: ${value}`}
  >
    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
      {label}
    </p>
    <p
      className="font-black leading-none tracking-tight"
      style={{
        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
        background: accent
          ? "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)"
          : undefined,
        WebkitBackgroundClip: accent ? "text" : undefined,
        WebkitTextFillColor: accent ? "transparent" : undefined,
        backgroundClip: accent ? "text" : undefined,
        color: accent ? undefined : "#0f172a",
      }}
    >
      {value}
    </p>
    {sub && <p className="text-[10px] text-slate-400 mt-0.5">{sub}</p>}
  </div>
);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white rounded-lg px-3 py-2 shadow-xl text-xs">
        <p className="font-semibold">{payload[0].payload.year}</p>
        <p className="text-cyan-400">{payload[0].value} citations</p>
      </div>
    );
  }
  return null;
};

const BAR_COLORS = ["#3b82f6", "#2563eb", "#0891b2"];

export const ScholarMetrics = ({
  publications = 13,
  citations = 224,
  hIndex = 9,
  i10Index = 9,
  byYear = [
    { year: 2023, citations: 22 },
    { year: 2024, citations: 61 },
    { year: 2025, citations: 97 },
    { year: 2026, citations: 38 },
  ],
  scholarUrl = "https://scholar.google.com/citations?user=ZtjgHeMAAAAJ&hl=en",
}: ScholarMetricsProps) => {
  return (
    <section className="bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">

        {/* ── Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-block h-1 w-10 rounded-full"
                style={{ background: "linear-gradient(to right, #1d4ed8, #0891b2)" }}
              />
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">
                Research Impact
              </span>
            </div>
            <h2
              className="font-black text-slate-900 tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
            >
              Data speaks for itself
            </h2>
            <p className="text-[14px] text-slate-500 mt-1">
              Metrics sourced from Google Scholar · Updated 2025
            </p>
          </div>
          <a
            href={scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 rounded-full px-4 py-1.5 transition-colors shrink-0"
          >
            View full profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* ── KPI Grid + Chart side by side */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">

          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="Publications" value={publications} accent index={0} />
            <StatCard label="Citations" value={citations} sub="total" accent index={1} />
            <StatCard label="h-index" value={hIndex} sub="career" index={2} />
            <StatCard label="i10-index" value={i10Index} index={3} />
          </div>

          {/* Citations by Year */}
          <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm w-full lg:w-72">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Citations by Year
              </p>
            </div>
            <div className="h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={byYear}
                  margin={{ top: 4, right: 4, left: -24, bottom: 0 }}
                >
                  <XAxis
                    dataKey="year"
                    stroke="#94a3b8"
                    style={{ fontSize: "11px" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    style={{ fontSize: "11px" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(241,245,249,0.6)" }} />
                  <Bar dataKey="citations" radius={[5, 5, 0, 0]} animationDuration={700} animationBegin={200}>
                    {byYear.map((_, i) => (
                      <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
