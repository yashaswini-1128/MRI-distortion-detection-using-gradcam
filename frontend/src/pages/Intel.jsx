import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import { Cpu, Eye, Zap, Database } from "lucide-react";

export default function Intel() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />

      <main className="container flex-column flex-center gap-xl" style={{ flex: 1, padding: "4rem 2rem", textAlign: "center" }}>
        
        <div className="flex-column flex-center gap-md">
           <div style={{ background: "rgba(0, 242, 255, 0.1)", color: "var(--accent-primary)", padding: "4px 16px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "700", border: "1px solid var(--border-accent)" }}>
              FRAMEWORK ARCHITECTURE
            </div>
            <h1 style={{ fontSize: "3.5rem", fontWeight: "900", letterSpacing: "-1px", textTransform: "uppercase" }}>
              Robust Fidelity Intelligence
            </h1>
            <p style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
              Deploying deep learning protocols to interpret, classify, and visually segment MRI distortion artifacts within a robust CNN framework.
            </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", width: "100%", maxWidth: "1200px" }}>
          
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: "2.5rem", textAlign: "left", display: "flex", gap: "1.5rem" }}>
            <div style={{ background: "rgba(244, 63, 94, 0.1)", padding: "1rem", borderRadius: "12px", height: "fit-content" }}>
              <Cpu size={32} color="#f43f5e" />
            </div>
            <div className="flex-column gap-xs">
              <h3 style={{ fontSize: "1.2rem", color: "var(--accent-primary)" }}>CNN Framework</h3>
              <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Automated ResNet-50</h4>
              <p style={{ fontSize: "0.9rem", margin: 0, marginTop: "0.5rem" }}>Robust Residual Network for high-accuracy MRI distortion classification and feature extraction.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: "2.5rem", textAlign: "left", display: "flex", gap: "1.5rem" }}>
            <div style={{ background: "rgba(0, 242, 255, 0.1)", padding: "1rem", borderRadius: "12px", height: "fit-content" }}>
              <Eye size={32} color="var(--accent-primary)" />
            </div>
            <div className="flex-column gap-xs">
              <h3 style={{ fontSize: "1.2rem", color: "var(--accent-primary)" }}>Explainable AI (XAI)</h3>
              <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Grad-CAM Interpretation</h4>
              <p style={{ fontSize: "0.9rem", margin: 0, marginTop: "0.5rem" }}>Gradient-weighted Class Activation Mapping for visual explanation of framework fidelity decisions.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: "2.5rem", textAlign: "left", display: "flex", gap: "1.5rem" }}>
            <div style={{ background: "rgba(245, 158, 11, 0.1)", padding: "1rem", borderRadius: "12px", height: "fit-content" }}>
              <Zap size={32} color="#f59e0b" />
            </div>
            <div className="flex-column gap-xs">
              <h3 style={{ fontSize: "1.2rem", color: "var(--accent-primary)" }}>FastAPI Backend</h3>
              <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Python 3.x</h4>
              <p style={{ fontSize: "0.9rem", margin: 0, marginTop: "0.5rem" }}>Asynchronous high-performance API gateway for real-time inference and data processing.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel" style={{ padding: "2.5rem", textAlign: "left", display: "flex", gap: "1.5rem" }}>
            <div style={{ background: "rgba(112, 0, 255, 0.1)", padding: "1rem", borderRadius: "12px", height: "fit-content" }}>
              <Database size={32} color="#7000ff" />
            </div>
            <div className="flex-column gap-xs">
              <h3 style={{ fontSize: "1.2rem", color: "var(--accent-primary)" }}>React Frontend</h3>
              <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Vite + Recharts</h4>
              <p style={{ fontSize: "0.9rem", margin: 0, marginTop: "0.5rem" }}>Responsive, interactive diagnostic telemetry dashboard with real-time data visualization.</p>
            </div>
          </div>
        </div>

        {/* Diagnostic Capabilities Section */}
        <div className="flex-column gap-lg" style={{ width: "100%", maxWidth: "1200px", textAlign: "left", marginTop: "3rem" }}>
          <div className="flex-column gap-xs">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", letterSpacing: "-0.5px" }}>Fidelity Classification Capabilities</h2>
            <p style={{ color: "var(--text-muted)" }}>
              The robust CNN framework is optimized to recognize and differentiate various categories of fidelity artifacts in MRI sequences:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            
            <div className="glass-panel" style={{ position: "relative", padding: "1.5rem", borderLeft: "4px solid var(--status-clean)", overflow: "hidden" }}>
              <div className="scanning-animation-v2" />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(16, 185, 129, 0.05), transparent)", pointerEvents: "none" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--status-clean)", marginBottom: "0.75rem" }}>OPTIMAL FIDELITY</h3>
              <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>
                Pristine high-fidelity scan sequence validated for automated interpretation and diagnostic accuracy.
              </p>
            </div>

            <div className="glass-panel" style={{ position: "relative", padding: "1.5rem", borderLeft: "4px solid var(--status-warning)", overflow: "hidden" }}>
              <div className="scanning-animation-v2" />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(245, 158, 11, 0.05), transparent)", pointerEvents: "none" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--status-warning)", marginBottom: "0.75rem" }}>ELECTROMAGNETIC ARTIFACT</h3>
              <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>
                High-frequency interference patterns identified, resulting in significant signal-to-noise ratio degradation.
              </p>
            </div>

            <div className="glass-panel" style={{ position: "relative", padding: "1.5rem", borderLeft: "4px solid var(--status-danger)", overflow: "hidden" }}>
              <div className="scanning-animation-v2" />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(244, 63, 94, 0.05), transparent)", pointerEvents: "none" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--status-danger)", marginBottom: "0.75rem" }}>MOTION ARTIFACT</h3>
              <p style={{ fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>
                Sequential movement artifacts detected, leading to severe edge degradation and anatomical blurring.
              </p>
            </div>

          </div>
        </div>

      </main>
    </motion.div>
  );
}
