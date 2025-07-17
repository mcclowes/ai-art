import React, { useRef, useEffect, useState, useCallback } from "react";
import { artworkState, ArtworkElement } from "./artwork-state";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<ArtworkElement[]>(
    artworkState.elements
  );
  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    null
  );
  const [isInteractive, setIsInteractive] = useState(false);
  const [currentTool, setCurrentTool] = useState<
    "rectangle" | "circle" | "triangle" | "text" | "select"
  >("select");
  const [currentColor, setCurrentColor] = useState("#3498db");

  const drawCanvas = useCallback(() => {
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
        const centerX =
          element.x +
          (element.width || element.radius || element.size || 0) / 2;
        const centerY =
          element.y +
          (element.height || element.radius || element.size || 0) / 2;
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
        if (element.gradient.type === "linear") {
          const angle = ((element.gradient.direction || 0) * Math.PI) / 180;
          const x1 = element.x;
          const y1 = element.y;
          const x2 =
            element.x +
            Math.cos(angle) *
              (element.width || element.radius || element.size || 100);
          const y2 =
            element.y +
            Math.sin(angle) *
              (element.height || element.radius || element.size || 100);
          gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        } else {
          const centerX =
            element.gradient.centerX ||
            element.x +
              (element.width || element.radius || element.size || 100) / 2;
          const centerY =
            element.gradient.centerY ||
            element.y +
              (element.height || element.radius || element.size || 100) / 2;
          const radius =
            Math.max(
              element.width || element.radius || element.size || 100,
              element.height || element.radius || element.size || 100
            ) / 2;
          gradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            radius
          );
        }

        element.gradient.colors.forEach((color, index) => {
          gradient.addColorStop(
            index / (element.gradient!.colors.length - 1),
            color
          );
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
            ctx.fillRect(
              element.x,
              element.y,
              element.width || 0,
              element.height || 0
            );
            if (element.strokeStyle) {
              ctx.strokeRect(
                element.x,
                element.y,
                element.width || 0,
                element.height || 0
              );
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
    function drawPattern(
      ctx: CanvasRenderingContext2D,
      element: ArtworkElement,
      pattern: string
    ) {
      const x = element.x;
      const y = element.y;
      const width = element.width || element.radius || element.size || 100;
      const height = element.height || element.radius || element.size || 100;

      ctx.save();

      // Create clipping path for the shape
      if (element.type === "rectangle") {
        ctx.rect(x, y, width, height);
      } else if (element.type === "circle") {
        ctx.arc(x, y, element.radius || 50, 0, Math.PI * 2);
      } else if (element.type === "triangle") {
        const size = element.size || 50;
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size * 0.866, y + size * 0.5);
        ctx.lineTo(x + size * 0.866, y + size * 0.5);
        ctx.closePath();
      }
      ctx.clip();

      switch (pattern) {
        case "dots":
          for (let i = 0; i < width; i += 20) {
            for (let j = 0; j < height; j += 20) {
              ctx.beginPath();
              ctx.arc(x + i, y + j, 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;
        case "stripes":
          for (let i = 0; i < width + height; i += 10) {
            ctx.beginPath();
            ctx.moveTo(x + i, y);
            ctx.lineTo(x + i - height, y + height);
            ctx.lineWidth = 5;
            ctx.stroke();
          }
          break;
        case "waves":
          for (let i = 0; i < width; i += 2) {
            const waveY =
              y + height / 2 + Math.sin((i / width) * Math.PI * 4) * 20;
            ctx.beginPath();
            ctx.moveTo(x + i, y);
            ctx.lineTo(x + i, waveY);
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          break;
        case "spiral":
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
    function drawSpiral(
      ctx: CanvasRenderingContext2D,
      element: ArtworkElement
    ) {
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

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Check if a point is inside an element
  const isPointInElement = (
    x: number,
    y: number,
    element: ArtworkElement
  ): boolean => {
    switch (element.type) {
      case "rectangle":
        return (
          x >= element.x &&
          x <= element.x + (element.width || 0) &&
          y >= element.y &&
          y <= element.y + (element.height || 0)
        );
      case "circle":
        const radius = element.radius || 50;
        const distance = Math.sqrt(
          Math.pow(x - element.x, 2) + Math.pow(y - element.y, 2)
        );
        return distance <= radius;
      case "triangle":
        const size = element.size || 50;
        // Simple triangle bounds check (could be more precise)
        return (
          x >= element.x - size &&
          x <= element.x + size &&
          y >= element.y - size &&
          y <= element.y + size
        );
      case "text":
        const canvas = canvasRef.current;
        if (!canvas) return false;
        const ctx = canvas.getContext("2d");
        if (!ctx) return false;
        if (element.font) ctx.font = element.font;
        const metrics = ctx.measureText(element.text || "");
        return (
          x >= element.x &&
          x <= element.x + metrics.width &&
          y >= element.y - parseInt(element.font || "16px") &&
          y <= element.y
        );
      default:
        return false;
    }
  };

  // Handle canvas click
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isInteractive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (currentTool === "select") {
      // Find clicked element (check from top to bottom)
      let clickedElement = null;
      for (let i = elements.length - 1; i >= 0; i--) {
        if (isPointInElement(x, y, elements[i])) {
          clickedElement = elements[i];
          break;
        }
      }

      if (clickedElement) {
        setSelectedElementId(clickedElement.id);
      } else {
        setSelectedElementId(null);
      }
    } else {
      // Add new element
      const newElement: ArtworkElement = {
        id: `user_${currentTool}_${Date.now()}`,
        type: currentTool,
        x: x,
        y: y,
        fillStyle: currentColor,
        ...(currentTool === "rectangle" && { width: 100, height: 60 }),
        ...(currentTool === "circle" && { radius: 40 }),
        ...(currentTool === "triangle" && { size: 50 }),
        ...(currentTool === "text" && { text: "New Text", font: "20px Arial" }),
      };

      setElements([...elements, newElement]);
      setSelectedElementId(newElement.id);
    }
  };

  // Delete selected element
  const deleteSelectedElement = () => {
    if (selectedElementId) {
      setElements(elements.filter(el => el.id !== selectedElementId));
      setSelectedElementId(null);
    }
  };

  // Change selected element color
  const changeSelectedElementColor = (color: string) => {
    if (selectedElementId) {
      setElements(
        elements.map(el =>
          el.id === selectedElementId ? { ...el, fillStyle: color } : el
        )
      );
    }
  };

  // Test function to add an element programmatically
  const addTestElement = () => {
    const newElement: ArtworkElement = {
      id: `test_${currentTool}_${Date.now()}`,
      type: currentTool === "select" ? "rectangle" : currentTool,
      x: 500,
      y: 200,
      fillStyle: currentColor,
      ...(currentTool === "rectangle" && { width: 100, height: 60 }),
      ...(currentTool === "circle" && { radius: 40 }),
      ...(currentTool === "triangle" && { size: 50 }),
      ...(currentTool === "text" && {
        text: "Test Element",
        font: "20px Arial",
      }),
      ...((currentTool === "select" || currentTool === "rectangle") && {
        width: 100,
        height: 60,
      }),
    };

    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Convert canvas to data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create a temporary link element to trigger download
    const link = document.createElement("a");
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

      {/* Interactive Controls */}
      <div
        style={{
          marginBottom: "1rem",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <label style={{ marginRight: "1rem" }}>
          <input
            type="checkbox"
            checked={isInteractive}
            onChange={e => setIsInteractive(e.target.checked)}
            style={{ marginRight: "0.5rem" }}
          />
          Interactive Mode
        </label>

        {isInteractive && (
          <>
            <div style={{ marginTop: "1rem" }}>
              <label style={{ marginRight: "1rem" }}>Tool:</label>
              {(
                ["select", "rectangle", "circle", "triangle", "text"] as const
              ).map(tool => (
                <label key={tool} style={{ marginRight: "1rem" }}>
                  <input
                    type="radio"
                    name="tool"
                    value={tool}
                    checked={currentTool === tool}
                    onChange={e =>
                      setCurrentTool(e.target.value as typeof currentTool)
                    }
                    style={{ marginRight: "0.25rem" }}
                  />
                  {tool.charAt(0).toUpperCase() + tool.slice(1)}
                </label>
              ))}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label style={{ marginRight: "1rem" }}>Color:</label>
              <input
                type="color"
                value={currentColor}
                onChange={e => setCurrentColor(e.target.value)}
                style={{ marginRight: "1rem" }}
              />

              {/* Quick color palette */}
              {[
                "#e74c3c",
                "#3498db",
                "#2ecc71",
                "#f39c12",
                "#9b59b6",
                "#1abc9c",
                "#34495e",
              ].map(color => (
                <button
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: color,
                    border:
                      currentColor === color
                        ? "3px solid #000"
                        : "1px solid #ccc",
                    borderRadius: "4px",
                    marginRight: "0.5rem",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            {selectedElementId && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  backgroundColor: "#e8f4f8",
                  borderRadius: "4px",
                }}
              >
                <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>
                  Selected Element:
                </p>
                <button
                  onClick={deleteSelectedElement}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "0.5rem",
                  }}
                >
                  Delete
                </button>
                <span>Change color:</span>
                {[
                  "#e74c3c",
                  "#3498db",
                  "#2ecc71",
                  "#f39c12",
                  "#9b59b6",
                  "#1abc9c",
                  "#34495e",
                ].map(color => (
                  <button
                    key={color}
                    onClick={() => changeSelectedElementColor(color)}
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundColor: color,
                      border: "1px solid #ccc",
                      borderRadius: "3px",
                      marginLeft: "0.25rem",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            )}

            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={addTestElement}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#27ae60",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "1rem",
                }}
              >
                Add Test Element
              </button>
              <small style={{ color: "#666" }}>
                Click to add a new{" "}
                {currentTool === "select" ? "rectangle" : currentTool} element
              </small>
            </div>
          </>
        )}
      </div>

      <canvas
        ref={canvasRef}
        width={artworkState.canvas.width}
        height={artworkState.canvas.height}
        style={{
          border: "1px solid #ccc",
          cursor: isInteractive
            ? currentTool === "select"
              ? "pointer"
              : "crosshair"
            : "default",
        }}
        onClick={handleCanvasClick}
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
            cursor: "pointer",
          }}
        >
          Download as PNG
        </button>
      </div>
    </div>
  );
}

export default App;
