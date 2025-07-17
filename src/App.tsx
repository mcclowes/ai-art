import React, { useRef, useEffect } from "react";
import { artworkState, ArtworkElement } from "./artwork-state";

function App() {
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
      ctx.save(); // Save the current state
      
      // Apply rotation if specified
      if (element.rotation) {
        const centerX = element.x + (element.width || element.radius || element.size || 0) / 2;
        const centerY = element.y + (element.height || element.radius || element.size || 0) / 2;
        ctx.translate(centerX, centerY);
        ctx.rotate((element.rotation * Math.PI) / 180);
        ctx.translate(-centerX, -centerY);
      }
      
      // Apply opacity if specified
      if (element.opacity !== undefined) {
        ctx.globalAlpha = element.opacity;
      }
      
      // Apply shadow if specified
      if (element.shadow) {
        ctx.shadowBlur = element.shadow.blur;
        ctx.shadowColor = element.shadow.color;
        ctx.shadowOffsetX = element.shadow.offsetX;
        ctx.shadowOffsetY = element.shadow.offsetY;
      }
      
      // Set up fill style (gradient or solid color)
      if (element.gradient) {
        let gradient;
        if (element.gradient.type === 'linear') {
          const angle = (element.gradient.direction || 0) * Math.PI / 180;
          const x1 = element.x;
          const y1 = element.y;
          const x2 = element.x + Math.cos(angle) * (element.width || element.radius || element.size || 100);
          const y2 = element.y + Math.sin(angle) * (element.height || element.radius || element.size || 100);
          gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        } else {
          const centerX = element.gradient.centerX || element.x + (element.width || element.radius || element.size || 100) / 2;
          const centerY = element.gradient.centerY || element.y + (element.height || element.radius || element.size || 100) / 2;
          const radius = Math.max(element.width || element.radius || element.size || 100, element.height || element.radius || element.size || 100) / 2;
          gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        }
        
        element.gradient.colors.forEach((color, index) => {
          gradient.addColorStop(index / (element.gradient!.colors.length - 1), color);
        });
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = element.fillStyle;
      }
      
      // Set up stroke if specified
      if (element.strokeStyle) {
        ctx.strokeStyle = element.strokeStyle;
        ctx.lineWidth = element.strokeWidth || 1;
      }
      
      switch (element.type) {
        case "rectangle":
          if (element.pattern) {
            drawPattern(ctx, element, element.pattern);
          } else {
            ctx.fillRect(element.x, element.y, element.width || 0, element.height || 0);
            if (element.strokeStyle) {
              ctx.strokeRect(element.x, element.y, element.width || 0, element.height || 0);
            }
          }
          break;
        case "circle":
          ctx.beginPath();
          ctx.arc(element.x, element.y, element.radius || 50, 0, Math.PI * 2);
          if (element.pattern) {
            drawPattern(ctx, element, element.pattern);
          } else {
            ctx.fill();
          }
          if (element.strokeStyle) {
            ctx.stroke();
          }
          break;
        case "triangle":
          const size = element.size || 50;
          ctx.beginPath();
          ctx.moveTo(element.x, element.y - size);
          ctx.lineTo(element.x - size * 0.866, element.y + size * 0.5);
          ctx.lineTo(element.x + size * 0.866, element.y + size * 0.5);
          ctx.closePath();
          if (element.pattern) {
            drawPattern(ctx, element, element.pattern);
          } else {
            ctx.fill();
          }
          if (element.strokeStyle) {
            ctx.stroke();
          }
          break;
        case "text":
          if (element.font) ctx.font = element.font;
          ctx.fillText(element.text || "", element.x, element.y);
          if (element.strokeStyle) {
            ctx.strokeText(element.text || "", element.x, element.y);
          }
          break;
        case "curve":
          drawCurve(ctx, element);
          break;
        case "spiral":
          drawSpiral(ctx, element);
          break;
      }
      
      ctx.restore(); // Restore the previous state
    });
    
    // Pattern drawing function
    function drawPattern(ctx: CanvasRenderingContext2D, element: ArtworkElement, pattern: string) {
      const x = element.x;
      const y = element.y;
      const width = element.width || element.radius || element.size || 100;
      const height = element.height || element.radius || element.size || 100;
      
      ctx.save();
      
      // Create clipping path for the shape
      if (element.type === 'rectangle') {
        ctx.rect(x, y, width, height);
      } else if (element.type === 'circle') {
        ctx.arc(x, y, element.radius || 50, 0, Math.PI * 2);
      } else if (element.type === 'triangle') {
        const size = element.size || 50;
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size * 0.866, y + size * 0.5);
        ctx.lineTo(x + size * 0.866, y + size * 0.5);
        ctx.closePath();
      }
      ctx.clip();
      
      switch (pattern) {
        case 'dots':
          for (let i = 0; i < width; i += 20) {
            for (let j = 0; j < height; j += 20) {
              ctx.beginPath();
              ctx.arc(x + i, y + j, 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;
        case 'stripes':
          for (let i = 0; i < width + height; i += 10) {
            ctx.beginPath();
            ctx.moveTo(x + i, y);
            ctx.lineTo(x + i - height, y + height);
            ctx.lineWidth = 5;
            ctx.stroke();
          }
          break;
        case 'waves':
          for (let i = 0; i < width; i += 2) {
            const waveY = y + height / 2 + Math.sin((i / width) * Math.PI * 4) * 20;
            ctx.beginPath();
            ctx.moveTo(x + i, y);
            ctx.lineTo(x + i, waveY);
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          break;
        case 'spiral':
          drawSpiral(ctx, element);
          break;
      }
      
      ctx.restore();
    }
    
    // Curve drawing function
    function drawCurve(ctx: CanvasRenderingContext2D, element: ArtworkElement) {
      const x = element.x;
      const y = element.y;
      const width = element.width || 200;
      const height = element.height || 100;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      
      // Create a smooth curve
      const controlX1 = x + width * 0.25;
      const controlY1 = y - height * 0.5;
      const controlX2 = x + width * 0.75;
      const controlY2 = y + height * 0.5;
      const endX = x + width;
      const endY = y;
      
      ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
      
      if (element.strokeStyle) {
        ctx.stroke();
      } else {
        ctx.fill();
      }
    }
    
    // Spiral drawing function
    function drawSpiral(ctx: CanvasRenderingContext2D, element: ArtworkElement) {
      const x = element.x;
      const y = element.y;
      const radius = element.radius || 50;
      const turns = 3;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      
      for (let i = 0; i < turns * 360; i++) {
        const angle = (i * Math.PI) / 180;
        const spiralRadius = (radius * i) / (turns * 360);
        const spiralX = x + Math.cos(angle) * spiralRadius;
        const spiralY = y + Math.sin(angle) * spiralRadius;
        ctx.lineTo(spiralX, spiralY);
      }
      
      if (element.strokeStyle) {
        ctx.stroke();
      } else {
        ctx.fill();
      }
    }
  }, []);

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Convert canvas to data URL
    const dataURL = canvas.toDataURL('image/png');
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.download = `ai-art-generation-${artworkState.generation}.png`;
    link.href = dataURL;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>AI Art - Generation {artworkState.generation}</h1>
      <p>Last updated: {artworkState.lastUpdated}</p>
      <canvas
        ref={canvasRef}
        width={artworkState.canvas.width}
        height={artworkState.canvas.height}
        style={{ border: "1px solid #ccc" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <button 
          onClick={downloadCanvas}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Download as PNG
        </button>
      </div>
    </div>
  );
}

export default App;