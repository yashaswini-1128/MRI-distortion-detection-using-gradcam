export default function LocalizationView({ image }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-subtle)", background: "rgba(0,0,0,0.2)" }}>
      <div className="scanning-animation-v2" />
      <div className="scan-overlay" />
      {image ? (
        <img src={image} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      ) : (
        <div className="flex-center" style={{ height: "100%", color: "var(--text-muted)" }}>
          No Data
        </div>
      )}
    </div>
  );
}