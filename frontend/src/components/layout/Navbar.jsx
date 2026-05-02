import { Link, NavLink } from "react-router-dom";
import { Activity, LayoutDashboard, Home, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--text-main)" : "var(--text-muted)",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: "600",
    transition: "color 0.2s"
  });

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex-between"
      style={{
        padding: "1rem 2rem",
        background: "rgba(6, 9, 19, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}
    >
      <Link to="/" className="flex-center gap-sm" style={{ textDecoration: "none", color: "white" }}>
        <div style={{ width: "32px", height: "32px", background: "var(--accent-gradient)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Activity size={18} color="white" />
        </div>
        <div className="flex-column">
          <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>
            ROBUST FIDELITY
          </h2>
          <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.5px", fontWeight: "600", marginTop: "-2px" }}>
            AUTOMATED DISTORTION DETECTION
          </span>
        </div>
      </Link>

      <div className="flex-center gap-lg">
        <NavLink to="/" style={navLinkStyle} end>
          Fidelity Suite
        </NavLink>
        <NavLink to="/analytics" style={navLinkStyle}>
          Framework Metrics
        </NavLink>
        <NavLink to="/intel" style={navLinkStyle}>
          Architecture & XAI
        </NavLink>
      </div>

      <div className="flex-center gap-sm" style={{ opacity: 0.8 }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--status-clean)", boxShadow: "0 0 8px var(--status-clean)" }} />
        <span style={{ fontSize: "0.7rem", fontWeight: "700", letterSpacing: "1px", color: "var(--text-main)" }}>FRAMEWORK ACTIVE</span>
      </div>
    </motion.nav>
  );
}