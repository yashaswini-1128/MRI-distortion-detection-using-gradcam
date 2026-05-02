import { motion } from "framer-motion";
import { Activity, ShieldCheck, AlertTriangle } from "lucide-react";

export default function ResultCard({ label, confidence }) {
  const isHealthy = label?.toLowerCase().includes("clean");
  const isPending = label === "Pending";
  
  const statusColor = isPending ? "var(--text-muted)" : (isHealthy ? "var(--status-success)" : "var(--status-danger)");
  const glowColor = isPending ? "transparent" : (isHealthy ? "var(--status-success-glow)" : "var(--status-danger-glow)");

  return (
    <motion.div
      className="flex-column gap-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        borderLeft: `4px solid ${statusColor}`,
        background: `linear-gradient(90deg, ${glowColor} 0%, transparent 100%)`,
        padding: "1rem",
        borderRadius: "0 12px 12px 0"
      }}
    > 
      <div className="flex-between">
        <h2 style={{ color: statusColor, display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.5rem" }}>
          {isPending ? <Activity size={24} /> : (isHealthy ? <ShieldCheck size={24} /> : <AlertTriangle size={24} />)}
          {label}
        </h2>
      </div>
      
      {!isPending && (
        <div style={{ marginTop: "0.5rem" }}>
          <div className="flex-between" style={{ marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Confidence Score</span>
            <span style={{ fontWeight: "600" }}>{(confidence * 100).toFixed(2)}%</span>
          </div>
          <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${confidence * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ height: "100%", background: statusColor, borderRadius: "3px" }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
