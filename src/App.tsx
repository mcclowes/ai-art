import React, { useRef, useEffect } from "react";
import { artworkState, ArtworkElement } from "./artwork-state";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas and set background
    ctx.fillStyle = artworkState.canvas.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render each element
    artworkState.elements.forEach((element: ArtworkElement) => {
      ctx.fillStyle = element.fillStyle;
      
      switch (element.type) {
        case "rectangle":
          ctx.fillRect(element.x, element.y, element.width || 0, element.height || 0);
          break;
        case "text":
          if (element.font) ctx.font = element.font;
          ctx.fillText(element.text || "", element.x, element.y);
          break;
      }
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={artworkState.canvas.width}
      height={artworkState.canvas.height}
      style={{ border: "1px solid #ccc" }}
    />
  );
};

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>AI Art - Generation {artworkState.generation}</h1>
      <p>Last updated: {artworkState.lastUpdated}</p>
      <Canvas />
    </div>
  );
}

export default App;