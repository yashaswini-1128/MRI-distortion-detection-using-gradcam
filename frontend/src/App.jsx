import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intel from "./pages/Intel";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="bg-grid-overlay" />
      <div className="bg-blur-blob" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/intel" element={<Intel />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;