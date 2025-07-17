/**
 * @fileoverview Canvas Visual Effects and Setup Utilities
 *
 * This module provides functions for setting up canvas effects like
 * gradients, shadows, transformations, and other visual enhancements.
 */

import { ArtworkElement } from "../artwork-state";

/**
 * Apply visual effects to the canvas context for an element
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Element to apply effects to
 */
export function applyElementEffects(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
  // Apply rotation if specified
  if (element.rotation) {
    const centerX =
      element.x + (element.width || element.radius || element.size || 0) / 2;
    const centerY =
      element.y + (element.height || element.radius || element.size || 0) / 2;
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
}

/**
 * Set up fill style for an element (gradient or solid color)
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Element to set fill style for
 */
export function setupFillStyle(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
  if (element.gradient) {
    const gradient = createGradient(ctx, element);
    ctx.fillStyle = gradient;
  } else {
    ctx.fillStyle = element.fillStyle;
  }
}

/**
 * Set up stroke style for an element
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Element to set stroke style for
 */
export function setupStrokeStyle(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
) {
  if (element.strokeStyle) {
    ctx.strokeStyle = element.strokeStyle;
    ctx.lineWidth = element.strokeWidth || 1;
  }
}

/**
 * Create a gradient for an element
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {ArtworkElement} element - Element with gradient properties
 * @returns {CanvasGradient} Created gradient
 */
function createGradient(
  ctx: CanvasRenderingContext2D,
  element: ArtworkElement
): CanvasGradient {
  if (!element.gradient) {
    throw new Error("Element must have gradient property");
  }

  let gradient: CanvasGradient;

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
      element.x + (element.width || element.radius || element.size || 100) / 2;
    const centerY =
      element.gradient.centerY ||
      element.y + (element.height || element.radius || element.size || 100) / 2;
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
    gradient.addColorStop(index / (element.gradient!.colors.length - 1), color);
  });

  return gradient;
}

/**
 * Clear and set up canvas background
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {string} backgroundColor - Background color
 */
export function setupCanvasBackground(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  backgroundColor: string
) {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Reset canvas transformations and effects
 * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
 */
export function resetCanvasEffects(ctx: CanvasRenderingContext2D) {
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
