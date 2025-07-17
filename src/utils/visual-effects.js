/**
 * @fileoverview Visual Effects Utilities for AI Art Generation
 * 
 * This module provides functions for generating sophisticated gradients,
 * shadows, and other visual effects used in artwork elements.
 */

import { getGradientCombinations } from './color-palettes.js';

/**
 * Generate sophisticated gradient
 * @param {string} dominantPalette - Name of the dominant color palette
 * @returns {Object} Gradient configuration object
 */
export function generateGradient(dominantPalette) {
  const paletteGradients = getGradientCombinations(dominantPalette);
  const gradientColors =
    paletteGradients[Math.floor(Math.random() * paletteGradients.length)];

  return {
    type: Math.random() > 0.5 ? "linear" : "radial",
    colors: gradientColors,
    direction: Math.random() * 360, // Random angle for linear gradients
    centerX: 0.3 + Math.random() * 0.4, // Center point for radial gradients
    centerY: 0.3 + Math.random() * 0.4,
  };
}

/**
 * Generate sophisticated shadow
 * @param {string} color - Base color for the shadow
 * @returns {Object} Shadow configuration object
 */
export function generateShadow(color) {
  return {
    blur: 5 + Math.random() * 15,
    color: color + "40", // Add alpha for transparency
    offsetX: -5 + Math.random() * 10,
    offsetY: -5 + Math.random() * 10,
  };
}

/**
 * Generate pattern configuration
 * @returns {string} Pattern type
 */
export function generatePattern() {
  const patterns = ["dots", "stripes", "waves", "spiral"];
  return patterns[Math.floor(Math.random() * patterns.length)];
}

/**
 * Generate opacity value with good visual appeal
 * @param {number} min - Minimum opacity (default: 0.6)
 * @param {number} max - Maximum opacity (default: 1.0)
 * @returns {number} Opacity value between min and max
 */
export function generateOpacity(min = 0.6, max = 1.0) {
  return min + Math.random() * (max - min);
}

/**
 * Generate rotation angle
 * @returns {number} Rotation angle in degrees
 */
export function generateRotation() {
  return Math.random() * 360;
}

/**
 * Generate stroke width for outlines
 * @param {number} min - Minimum stroke width (default: 1)
 * @param {number} max - Maximum stroke width (default: 3)
 * @returns {number} Stroke width
 */
export function generateStrokeWidth(min = 1, max = 3) {
  return min + Math.random() * (max - min);
}

/**
 * Apply visual effects to an element
 * @param {Object} element - Element to enhance
 * @param {string} dominantPalette - Dominant color palette
 * @param {Object} options - Options for which effects to apply
 * @returns {Object} Enhanced element
 */
export function applyVisualEffects(element, dominantPalette, options = {}) {
  const {
    includeGradient = true,
    includeShadow = true,
    includeOpacity = true,
    includeRotation = false,
    includeStroke = false,
    includePattern = false
  } = options;

  const enhancedElement = { ...element };

  // Add gradient
  if (includeGradient && Math.random() > 0.5) {
    enhancedElement.gradient = generateGradient(dominantPalette);
  }

  // Add shadow
  if (includeShadow && Math.random() > 0.5) {
    enhancedElement.shadow = generateShadow(element.fillStyle);
  }

  // Add opacity
  if (includeOpacity && Math.random() > 0.5) {
    enhancedElement.opacity = generateOpacity(0.7, 1.0);
  }

  // Add rotation (mainly for triangles and other shapes)
  if (includeRotation && Math.random() > 0.6) {
    enhancedElement.rotation = generateRotation();
  }

  // Add stroke
  if (includeStroke && Math.random() > 0.6) {
    enhancedElement.strokeStyle = element.fillStyle;
    enhancedElement.strokeWidth = generateStrokeWidth();
  }

  // Add pattern
  if (includePattern && Math.random() > 0.7) {
    enhancedElement.pattern = generatePattern();
  }

  return enhancedElement;
}