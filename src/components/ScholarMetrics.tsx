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
    className="flex flex-col items-center justify-center rounded-2xl p-5 border transition-all duration-200 animate-fade-in group hover:shadow-md hover:-translate-y-0.5"
    style={{
      animationDelay: `${index * 80}ms`,
      borderColor: accent ? "rgba(29,78,216,0.25)" : "rgb(226,232,240)",
      background: accent
        ? "linear-gradient(135deg, rgba(29,78,216,0.06) 0%, rgba(8,145,178,0.08) 100%)"
        : "white",
    }}
    aria-label={`${label}: ${value}`}
  >
    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 text-center">
      {label}
    </p>
    <p
      className="font-black leading-none tracking-tight"
      style={{
        fontSize: "clamp(2rem, 4vw, 2.6rem)",
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
    {sub && <p className="text-[10px] text-slate-400 mt-1 text-center">{sub}</p>}
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

const BAR_COLORS = ["#3b82f6", "#2563eb", "#0891b2", "#60a5fa"];

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

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
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
              Metrics sourced from Google Scholar · Updated 2026
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

        {/* Main card */}
        <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">

          {/* KPI Cards row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100">
            <StatCard label="Publications" value={publications} accent index={0} />
            <StatCard label="Citations" value={citations} sub="total" accent index={1} />
            <StatCard label="h-index" value={hIndex} sub="career" index={2} />
            <StatCard label="i10-index" value={i10Index} sub="career" index={3} />
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />

          {/* Chart full width */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Citations by Year
              </p>
            </div>
            <div className="h-[160px] sm:h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={byYear}
                  margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
                >
                  <XAxis
                    dataKey="year"
                    stroke="#94a3b8"
                    style={{ fontSize: "12px" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    style={{ fontSize: "12px" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(241,245,249,0.6)" }} />
                  <Bar dataKey="citations" radius={[6, 6, 0, 0]} animationDuration={700} animationBegin={200} maxBarSize={80}>
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
