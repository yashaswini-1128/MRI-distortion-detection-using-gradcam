import { useState, useRef } from "react";
import { UploadCloud, FileImage } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadBox({ onUpload }) {
  const [preview, setPreview] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    onUpload(file);
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex-column gap-sm" style={{ width: "100%" }}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleBoxClick}
        className="flex-center flex-column"
        style={{
          border: `2px dashed ${isHovered ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
          borderRadius: "12px",
          padding: "3rem 2rem",
          cursor: "pointer",
          background: isHovered ? "rgba(6, 182, 212, 0.05)" : "transparent",
          transition: "all 0.3s ease"
        }}
      >
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleChange} 
          ref={fileInputRef}
          style={{ display: "none" }} 
        />
        
        <div style={{ 
          background: "rgba(6, 182, 212, 0.1)", 
          padding: "1rem", 
          borderRadius: "50%", 
          marginBottom: "1rem",
          color: "var(--accent-primary)"
        }}>
          <UploadCloud size={32} />
        </div>
        
        <h3 style={{ margin: "0 0 0.5rem 0" }}>Upload MRI Scan</h3>
        <p style={{ margin: 0, fontSize: "0.9rem", textAlign: "center" }}>
          Click to browse or drag and drop<br/>
          <span style={{ opacity: 0.6 }}>DICOM, JPEG, or PNG (max 10MB)</span>
        </p>
      </motion.div>

      {preview && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-center flex-column"
          style={{ marginTop: "1rem" }}
        >
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
            <img src={preview} alt="Preview" style={{ maxWidth: "100%", maxHeight: "250px", display: "block" }} />
            <div className="flex-center gap-sm" style={{ 
              position: "absolute", 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: "rgba(0,0,0,0.7)", 
              padding: "0.5rem",
              backdropFilter: "blur(4px)"
            }}>
              <FileImage size={16} />
              <span style={{ fontSize: "0.85rem" }}>Image Selected for Analysis</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}