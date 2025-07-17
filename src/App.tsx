/**
 * @fileoverview AI Art Canvas Component
 *
 * This component renders an evolving AI-generated artwork on an HTML5 canvas.
 * It supports both automated artwork evolution and interactive editing modes.
 *
 * Features:
 * - Canvas rendering with multiple shape types
 * - Advanced visual effects (gradients, shadows, patterns)
 * - Interactive editing tools
 * - Artwork download functionality
 */

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { artworkState, ArtworkElement } from "./artwork-state";
import {
  renderRectangle,
  renderCircle,
  renderTriangle,
  renderText,
  renderCurve,
  renderSpiral,
} from "./utils/canvas-rendering";
import {
  applyElementEffects,
  setupFillStyle,
  setupStrokeStyle,
  setupCanvasBackground,
  resetCanvasEffects,
} from "./utils/canvas-effects";

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
  const [history, setHistory] = useState<ArtworkElement[][]>([elements]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas and set background
    setupCanvasBackground(ctx, canvas, artworkState.canvas.background);

    // Render each element
    artworkState.elements.forEach((element: ArtworkElement) => {
      ctx.save(); // Save the current state

      // Apply visual effects (rotation, opacity, shadow)
      applyElementEffects(ctx, element);

      // Set up fill style (gradient or solid color)
      setupFillStyle(ctx, element);

      // Set up stroke if specified
      setupStrokeStyle(ctx, element);

      // Render the element based on its type
      switch (element.type) {
        case "rectangle":
          renderRectangle(ctx, element);
          break;
        case "circle":
          renderCircle(ctx, element);
          break;
        case "triangle":
          renderTriangle(ctx, element);
          break;
        case "text":
          renderText(ctx, element);
          break;
        case "curve":
          renderCurve(ctx, element);
          break;
        case "spiral":
          renderSpiral(ctx, element);
          break;
      }

      ctx.restore(); // Restore the previous state
    });
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

  // Undo/Redo functionality
  const saveToHistory = (newElements: ArtworkElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...newElements]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setElements(history[newIndex]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setElements(history[newIndex]);
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
