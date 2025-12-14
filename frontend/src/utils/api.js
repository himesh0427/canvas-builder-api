// src/utils/api.js

// Use your Render backend URL
export const API_BASE_URL = "https://canvas-backend-7ukd.onrender.com";

// Initialize canvas
export const initCanvas = async (width, height) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/canvas/init`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ width, height })
    });
    return res.json();
  } catch (err) {
    console.error("Error initializing canvas:", err);
    throw err;
  }
};

// Export PDF
export const exportPDF = async (canvasElements) => {
  try {
    const elements = JSON.stringify(canvasElements);
    const res = await fetch(`${API_BASE_URL}/api/canvas/export`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ elements, width: 800, height: 600 }) // adjust width/height as needed
    });
    const blob = await res.blob();
    return blob;
  } catch (err) {
    console.error("Error exporting PDF:", err);
    throw err;
  }
};
