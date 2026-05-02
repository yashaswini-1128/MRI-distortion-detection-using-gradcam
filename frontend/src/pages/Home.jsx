import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import UploadBox from "../components/upload/UploadBox";
import GradCamView from "../components/results/GradCamView";
import LocalizationView from "../components/results/LocalizationView";
import usePredict from "../hooks/usePredict";

export default function Home() {
  const { predict, loading, result } = usePredict();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />

      <main className="container flex-column gap-lg" style={{ flex: 1, padding: "2rem" }}>
        
        {/* Header with Icon */}
        <div className="flex-center gap-sm" style={{ alignSelf: "flex-start", opacity: 0.9 }}>
          <div style={{ background: "var(--accent-gradient)", padding: "0.4rem", borderRadius: "4px" }}>
            <Activity size={20} color="white" />
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", letterSpacing: "0.5px" }}>Automated Fidelity Report</h2>
        </div>

        {/* Top Section: Results and Confidence */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          
          {/* Diagnostic Report Card */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="glass-panel" 
            style={{ padding: "2rem", borderLeft: "4px solid var(--accent-tertiary)", position: "relative" }}
          >
             <div style={{ background: "rgba(0, 242, 255, 0.1)", color: "var(--accent-primary)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "700", display: "inline-block", marginBottom: "1.5rem" }}>
              FRAMEWORK FIDELITY ASSESSMENT
            </div>
            
            <h1 style={{ fontSize: "4rem", fontWeight: "900", letterSpacing: "-2px", color: result?.label?.toLowerCase().includes("clean") ? "var(--accent-tertiary)" : "var(--status-anomaly)", marginBottom: "1rem", textTransform: "uppercase" }}>
              {result?.label || (loading ? "ANALYZING..." : "AWAITING")}
            </h1>
            
            <p style={{ fontSize: "1rem", maxWidth: "450px", marginBottom: "2rem" }}>
              {result?.label?.toLowerCase().includes("clean") 
                ? "Scan Integrity Standard Met. No debilitating motion or electromagnetic artifact thresholds breached within the robust CNN framework."
                : result ? "Distortion detected in current scan cycle. Framework suggests potential artifact interference requiring further interpretation."
                : "No scan data present in current buffer. Please upload a sequence for automated distortion analysis and interpretation."}
            </p>

            <div className="flex-between" style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "500" }}>
                Fidelity Confidence: <strong style={{ color: "var(--text-main)" }}>{result ? (result.confidence * 100).toFixed(1) : "0.0"}%</strong>
              </span>
              {result && (
                <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "var(--accent-tertiary)", padding: "4px 12px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "700" }}>
                  FIDELITY VERIFIED
                </div>
              )}
            </div>
          </motion.div>

          {/* Diagnostic Confidence Card */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="glass-panel flex-column flex-center" 
            style={{ padding: "2rem", position: "relative" }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "2rem" }}>Framework Assurance Rate</h3>
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
              {/* Simple Circular Gauge with CSS */}
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", border: "10px solid var(--border-subtle)", position: "absolute" }} />
              <div style={{ 
                width: "100%", 
                height: "100%", 
                borderRadius: "50%", 
                border: "10px solid var(--accent-tertiary)", 
                position: "absolute",
                clipPath: `inset(0 ${100 - (result?.confidence * 100 || 0)}% 0 0)`,
                filter: "drop-shadow(0 0 10px var(--accent-tertiary))"
              }} />
              <div className="flex-column flex-center" style={{ position: "absolute", inset: 0 }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "800", margin: 0 }}>{result ? (result.confidence * 100).toFixed(1) : "0.0"}%</h2>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", letterSpacing: "1px" }}>CLASSIFICATION ACCURACY</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section: Visualizations */}
        <div className="flex-column gap-md">
           <div className="flex-center gap-sm" style={{ alignSelf: "flex-start", opacity: 0.9, marginTop: "1rem" }}>
            <Activity size={20} color="var(--accent-primary)" />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", letterSpacing: "0.5px" }}>Grad-CAM Interpretation Maps</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
             {/* Original Scan */}
             <div className="glass-panel" style={{ padding: "1.5rem", minHeight: "350px", display: "flex", flexDirection: "column" }}>
               <h4 style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "1.5rem" }}>Original Scan Sequence</h4>
               <div style={{ position: "relative", flex: 1, borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-subtle)", background: "rgba(0,0,0,0.3)" }}>
                  <div className="scanning-animation-v2" />
                  <div className="scan-overlay" />
                  <UploadBox onUpload={predict} />
               </div>
             </div>

             {/* Grad-CAM */}
             <div className="glass-panel" style={{ padding: "1.5rem", minHeight: "350px", display: "flex", flexDirection: "column" }}>
               <h4 style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "1.5rem" }}>Neural Activation (Grad-CAM)</h4>
               <GradCamView image={result?.gradcam} />
               {result && <div style={{ marginTop: "1rem", alignSelf: "flex-end", background: "rgba(0, 242, 255, 0.1)", color: "var(--accent-primary)", padding: "4px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "700" }}>XAI INTERPRETATION</div>}
             </div>

             {/* Localization */}
             <div className="glass-panel" style={{ padding: "1.5rem", minHeight: "350px", display: "flex", flexDirection: "column" }}>
               <h4 style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "1.5rem" }}>Automated Distortion Localization</h4>
               <LocalizationView image={result?.localized} />
               {result && <div style={{ marginTop: "1rem", alignSelf: "flex-end", background: "rgba(244, 63, 94, 0.1)", color: "#f43f5e", padding: "4px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "700" }}>DETECTED ARTIFACT</div>}
             </div>
          </div>
        </div>

      </main>
    </motion.div>
  );
}