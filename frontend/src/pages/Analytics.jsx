import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Activity, Database, ShieldCheck, AlertTriangle } from "lucide-react";

const trendData = [
  { name: "Scan 1", val: 98.1 },
  { name: "Scan 2", val: 98.1 },
  { name: "Scan 3", val: 98.1 },
  { name: "Scan 4", val: 98.1 },
  { name: "Scan 5", val: 98.1 },
];

const pieData = [
  { name: "Clean", value: 100 },
  { name: "Noise", value: 0 },
  { name: "Blur", value: 0 },
];

const COLORS = ["#10b981", "#f59e0b", "#f43f5e"];

export default function Analytics() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />

      <main className="container flex-column gap-lg" style={{ flex: 1, padding: "2rem" }}>
        
        <header className="flex-between">
          <div className="flex-column gap-xs">
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-1px" }}>Framework Metrics</h1>
            <p style={{ margin: 0 }}>Real-time fidelity statistics and neural model performance telemetry.</p>
          </div>
          <div className="flex-center gap-md">
             <button className="premium-button" style={{ background: "rgba(244, 63, 94, 0.1)", color: "#f43f5e", border: "1px solid rgba(244, 63, 94, 0.2)", boxShadow: "none" }}>
               Purge Registry
             </button>
             <div className="glass-panel flex-center gap-sm" style={{ padding: "8px 16px", borderRadius: "30px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--status-clean)" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>FRAMEWORK: ACTIVE</span>
             </div>
          </div>
        </header>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase" }}>Sequences Analyzed</span>
            <div className="flex-between" style={{ marginTop: "1rem" }}>
              <h2 style={{ fontSize: "3rem", fontWeight: "800" }}>2</h2>
              <Database size={40} color="var(--accent-primary)" style={{ opacity: 0.3 }} />
            </div>
            <p style={{ fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>Cumulative MRI sequences processed by the framework</p>
          </div>
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase" }}>Fidelity Assurance</span>
            <div className="flex-between" style={{ marginTop: "1rem" }}>
              <h2 style={{ fontSize: "3rem", fontWeight: "800", color: "var(--status-clean)" }}>98.1%</h2>
              <ShieldCheck size={40} color="var(--status-clean)" style={{ opacity: 0.3 }} />
            </div>
            <p style={{ fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>Overall classification confidence rate</p>
          </div>
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase" }}>Artifact Ratio</span>
            <div className="flex-between" style={{ marginTop: "1rem" }}>
              <h2 style={{ fontSize: "3rem", fontWeight: "800" }}>0 <span style={{ fontSize: "1.5rem", color: "var(--text-muted)" }}>/ 2</span></h2>
              <AlertTriangle size={40} color="var(--status-warning)" style={{ opacity: 0.3 }} />
            </div>
            <p style={{ fontSize: "0.8rem", margin: 0, marginTop: "0.5rem" }}>Scans flagged with distortion or artifact anomalies</p>
          </div>
        </div>

        {/* Charts Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "1.5rem" }}>
          <div className="glass-panel" style={{ padding: "1.5rem", minHeight: "400px" }}>
            <h3 style={{ marginBottom: "2rem" }}>Framework Inference Trends</h3>
            <div style={{ width: "100%", height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "var(--bg-darker)", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}
                    itemStyle={{ color: "var(--accent-primary)" }}
                  />
                  <Area type="monotone" dataKey="val" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorVal)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "2rem" }}>Fidelity Breakdown</h3>
            <div style={{ width: "100%", height: "250px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-center gap-md" style={{ marginTop: "1rem" }}>
               {pieData.map((entry, index) => (
                 <div key={entry.name} className="flex-center gap-xs">
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: COLORS[index] }} />
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{entry.name}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <h3 style={{ marginBottom: "1.5rem" }}>Fidelity Analysis Registry</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-subtle)", textAlign: "left" }}>
                <th style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>Scan ID</th>
                <th style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>Timestamp</th>
                <th style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>File Name</th>
                <th style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>Analysis</th>
                <th style={{ padding: "1rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase" }}>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <td style={{ padding: "1rem", color: "var(--accent-primary)", fontWeight: "600" }}>SCAN-2802</td>
                <td style={{ padding: "1rem", fontSize: "0.9rem" }}>4/29/2026, 11:18:44 PM</td>
                <td style={{ padding: "1rem", fontSize: "0.9rem" }}>tumor (9).jpg</td>
                <td style={{ padding: "1rem" }}>
                   <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "var(--status-clean)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: "700", display: "inline-block" }}>CLEAN</div>
                </td>
                <td style={{ padding: "1rem", fontWeight: "700" }}>98.1%</td>
              </tr>
              <tr>
                <td style={{ padding: "1rem", color: "var(--accent-primary)", fontWeight: "600" }}>SCAN-9861</td>
                <td style={{ padding: "1rem", fontSize: "0.9rem" }}>4/29/2026, 11:06:06 PM</td>
                <td style={{ padding: "1rem", fontSize: "0.9rem" }}>tumor (5).jpg</td>
                <td style={{ padding: "1rem" }}>
                   <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "var(--status-clean)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: "700", display: "inline-block" }}>CLEAN</div>
                </td>
                <td style={{ padding: "1rem", fontWeight: "700" }}>98.1%</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </motion.div>
  );
}
