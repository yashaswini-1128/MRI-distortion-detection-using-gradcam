import { BarChart, Bar, XAxis, Tooltip } from "recharts";

export default function ChartView({ confidence }) {
  const data = [{ name: "Confidence", value: confidence * 100 }];

  // Dynamic color based on confidence
  const getColor = (val) => {
    if (val > 80) return "var(--status-success)";
    if (val > 50) return "var(--status-warning)";
    return "var(--status-danger)";
  };

  const barColor = getColor(confidence * 100);

  return (
    <div className="card" style={{ background: "transparent", border: "none", padding: 0 }}>
      <BarChart width={280} height={180} data={data}>
        <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
        <Tooltip
          contentStyle={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}
          itemStyle={{ color: "var(--text-main)" }}
        />
        <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
      </BarChart>
    </div>
  );
}
