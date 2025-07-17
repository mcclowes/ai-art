/**
 * @fileoverview Canvas Shape Rendering Utilities
 *
 * This module provides functions for rendering different types of shapes
 * on an HTML5 canvas with various visual effects.
 */

import { ArtworkElement } from "../artwork-state";

/**
 * Render a rectangle element on the canvas
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Rectangle element to render
 */
export function renderRectangle(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
  if (element.pattern) {
    drawPattern(ctx, element, element.pattern);
  } else {
    ctx.fillRect(element.x, element.y, element.width || 0, element.height || 0);
    if (element.strokeStyle) {
      ctx.strokeRect(
        element.x,
        element.y,
        element.width || 0,
        element.height || 0
      );
    }
  }
}

/**
 * Render a circle element on the canvas
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Circle element to render
 */
export function renderCircle(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
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
}

/**
 * Render a triangle element on the canvas
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Triangle element to render
 */
export function renderTriangle(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
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
}

/**
 * Render a text element on the canvas
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Text element to render
 */
export function renderText(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
  if (element.font) ctx.font = element.font;
  ctx.fillText(element.text || "", element.x, element.y);
  if (element.strokeStyle) {
    ctx.strokeText(element.text || "", element.x, element.y);
  }
}

/**
 * Render a curve element on the canvas
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Curve element to render
 */
export function renderCurve(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
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

/**
 * Render a spiral element on the canvas
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Spiral element to render
 */
export function renderSpiral(
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

/**
 * Draw pattern inside a shape
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Element to apply pattern to
 * @param {string} pattern - Pattern type
 */
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
        const waveY = y + height / 2 + Math.sin((i / width) * Math.PI * 4) * 20;
        ctx.beginPath();
        ctx.moveTo(x + i, y);
        ctx.lineTo(x + i, waveY);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      break;
    case "spiral":
      renderSpiral(ctx, element);
      break;
  }

  ctx.restore();
}
