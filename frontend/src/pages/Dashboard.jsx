import React from "react";
import { motion } from "framer-motion";
import UploadBox from "../components/upload/UploadBox";
import GradCamView from "../components/results/GradCamView";
import LocalizationView from "../components/results/LocalizationView";
import ResultCard from "../components/results/ResultCard";
import ChartView from "../components/results/ChartView";
import usePredict from "../hooks/usePredict";

export default function Dashboard() {
  const { predict, loading, result } = usePredict();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container flex-column gap-lg"
      style={{ height: "100vh", overflow: "hidden", padding: "1.5rem" }}
    >
      <header className="flex-between" style={{ paddingBottom: "1rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <div>
          <h2>MRI Distortion Detection</h2>
          <p style={{ margin: 0 }}>Upload an MRI scan to detect distortions using our advanced ResNet50 model with Grad-CAM interpretability.</p>
        </div>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "350px 1fr 350px", gap: "1.5rem", flex: 1, minHeight: 0 }}>

        {/* Column 1: Input controls */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass-panel flex-column gap-md"
          style={{ padding: "1.5rem" }}
        >
          <h3>Patient Input</h3>
          <UploadBox onUpload={predict} />

          <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
            <p style={{ fontSize: "0.85rem" }}>
              <strong style={{ color: "var(--accent-primary)" }}>Model Active:</strong> ResNet50 + Grad-CAM<br />
              <strong style={{ color: "var(--accent-primary)" }}>Status:</strong> Ready for analysis
            </p>
          </div>
        </motion.div>

        {/* Column 2: Main Visualization Area */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel glass-panel-glow" 
          style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
        >
          {loading && <div className="scanning-animation-v2" />}
          
          <div className="glass-panel flex-column" style={{ flex: 1, margin: "1rem", overflow: "hidden" }}>
            {result ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                style={{ width: "100%", height: "100%", padding: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
              >
                <div className="flex-column gap-sm">
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "500" }}>Grad-CAM</h3>
                  <GradCamView image={result.gradcam} />
                </div>
                <div className="flex-column gap-sm">
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "500" }}>Localization</h3>
                  <LocalizationView image={result.localized} />
                </div>
              </motion.div>
            ) : (
              <div className="flex-column flex-center gap-md" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                <div style={{ position: "relative" }}>
                   <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 10px var(--accent-glow))" }}>
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "1px dashed var(--accent-primary)", borderRadius: "50%", opacity: 0.3 }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ margin: 0, fontWeight: "600", color: "var(--text-main)" }}>System Idle</p>
                  <p style={{ margin: 0, fontSize: "0.85rem" }}>Awaiting scan data ingestion...</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Column 3: Metrics & Actions */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-column gap-md"
        >
          <div className="glass-panel" style={{ padding: "1.5rem" }}>
            <h3>Analysis Results</h3>
            <div style={{ marginTop: "1rem" }}>
              <ResultCard label={result?.label || "Pending"} confidence={result?.confidence || 0} />
            </div>
          </div>

          <div className="glass-panel" style={{ padding: "1.5rem", flex: 1 }}>
            <h3>Confidence Metrics</h3>
            <div style={{ marginTop: "1rem", height: "calc(100% - 2rem)" }}>
              <ChartView confidence={result?.confidence || 0} />
            </div>
          </div>

          <button className="premium-button">
            Export Clinical Report (PDF)
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}