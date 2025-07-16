import React, { useRef, useEffect } from "react";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw a simple rectangle
    ctx.fillStyle = "#3498db";
    ctx.fillRect(50, 50, 200, 100);

    // Draw some text
    ctx.font = "24px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Hello Canvas!", 70, 120);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      style={{ border: "1px solid #ccc" }}
    />
  );
};

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Simple HTML Canvas Example</h1>
      <Canvas />
    </div>
  );
}

export default App;