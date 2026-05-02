export default function GradCamPlusView({ image }) {
  return (
    <div className="glass-panel" style={{ padding: "1rem" }}>
      <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "var(--accent-secondary)" }}>Grad-CAM++ Visualization</h3>

      {image ? (
        <img src={image} style={{ width: "100%", borderRadius: 8, border: "1px solid var(--border-subtle)" }} />
      ) : (
        <div className="flex-center" style={{ height: "150px", background: "rgba(0,0,0,0.2)", borderRadius: 8, color: "var(--text-muted)" }}>
          No Visualization
        </div>
      )}
    </div>
  );
}
