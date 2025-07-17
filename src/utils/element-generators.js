/**
 * @fileoverview Element Generation Utilities
 *
 * This module provides functions for creating different types of artwork elements
 * with sophisticated positioning and visual effects.
 */

import { getHarmoniousColor, getPaletteColors } from "./color-palettes.js";
import { getGoldenRatioPosition, getFibonacciSize } from "./math-utils.js";
import {
  generateGradient,
  generateShadow,
  generatePattern,
  generateOpacity,
} from "./visual-effects.js";

/**
 * Create an intelligent element with optimal positioning and styling
 * @param {Object} state - Artwork state
 * @param {string[]} palette - Color palette to use
 * @param {string} purpose - Purpose of the element (e.g., 'complement', 'enhancement')
 * @returns {Object} Generated element
 */
export function createIntelligentElement(state, palette, purpose) {
  const color = palette[Math.floor(Math.random() * palette.length)];
  const size = getFibonacciSize() * 8;
  const pos = getGoldenRatioPosition(state, size, size * 0.618);

  // Choose element type based on purpose and randomness
  const elementTypes = ["rectangle", "circle", "triangle"];
  const elementType =
    elementTypes[Math.floor(Math.random() * elementTypes.length)];

  const baseElement = {
    type: elementType,
    x: pos.x,
    y: pos.y,
    fillStyle: color,
    id: `intelligent_${purpose}_${Date.now()}`,
    opacity: generateOpacity(0.7, 1.0),
  };

  // Add type-specific properties and effects
  return enhanceElementByType(baseElement, size, color);
}

/**
 * Create a sophisticated gradient element
 * @param {Object} state - Artwork state
 * @param {string} dominantPalette - Dominant palette name
 * @param {string} elementType - Type of element to create
 * @returns {Object} Generated gradient element
 */
export function createGradientElement(
  state,
  dominantPalette,
  elementType = "rectangle"
) {
  const size = getFibonacciSize() * 6;
  const pos = getGoldenRatioPosition(state, size * 1.5, size);
  const gradient = generateGradient(dominantPalette);

  const element = {
    type: elementType,
    x: pos.x,
    y: pos.y,
    fillStyle: gradient.colors[0], // Fallback color
    gradient: gradient,
    shadow: generateShadow(gradient.colors[0]),
    opacity: generateOpacity(0.6, 0.9),
    id: `gradient_${elementType}_${Date.now()}`,
  };

  return enhanceElementByType(element, size, gradient.colors[0]);
}

/**
 * Create a text element with contextual content
 * @param {Object} state - Artwork state
 * @param {string[]} palette - Color palette
 * @param {string} text - Text content
 * @returns {Object} Generated text element
 */
export function createIntelligentText(state, palette, text) {
  const color = palette[Math.floor(Math.random() * palette.length)];
  const pos = getGoldenRatioPosition(state, 120, 40);
  const fontSize = 18 + Math.random() * 16;

  const textElement = {
    type: "text",
    x: pos.x,
    y: pos.y,
    text: text,
    font: `${fontSize}px Arial`,
    fillStyle: color,
    id: `intelligent_text_${Date.now()}`,
    opacity: generateOpacity(0.8, 1.0),
  };

  // Add advanced text effects randomly
  if (Math.random() > 0.6) {
    textElement.gradient = generateGradient(
      determinePaletteFromColors(palette)
    );
  }
  if (Math.random() > 0.7) {
    textElement.shadow = generateShadow(color);
  }
  if (Math.random() > 0.8) {
    textElement.strokeStyle = color;
    textElement.strokeWidth = 1;
  }

  return textElement;
}

/**
 * Create an artistic enhancement element
 * @param {Object} state - Artwork state
 * @param {string[]} palette - Color palette
 * @param {string} enhancementType - Type of enhancement
 * @returns {Object} Generated enhancement element
 */
export function createArtisticEnhancement(
  state,
  palette,
  enhancementType = null
) {
  const color = palette[Math.floor(Math.random() * palette.length)];
  const baseSize = getFibonacciSize() * 6;
  const pos = getGoldenRatioPosition(state, baseSize * 2, baseSize * 2);

  const enhancementTypes = [
    "gradient_rectangle",
    "spiral",
    "curve",
    "pattern_circle",
  ];

  const selectedType =
    enhancementType ||
    enhancementTypes[Math.floor(Math.random() * enhancementTypes.length)];

  switch (selectedType) {
    case "gradient_rectangle":
      return {
        type: "rectangle",
        x: pos.x,
        y: pos.y,
        width: baseSize * 1.5,
        height: baseSize,
        fillStyle: color,
        gradient: generateGradient(determinePaletteFromColors(palette)),
        shadow: generateShadow(color),
        opacity: generateOpacity(0.6, 0.8),
        id: `enhancement_rect_${Date.now()}`,
      };

    case "spiral":
      return {
        type: "spiral",
        x: pos.x + baseSize,
        y: pos.y + baseSize,
        radius: baseSize,
        fillStyle: color,
        strokeStyle: color,
        strokeWidth: 2,
        opacity: 0.7,
        id: `enhancement_spiral_${Date.now()}`,
      };

    case "curve":
      return {
        type: "curve",
        x: pos.x,
        y: pos.y,
        width: baseSize * 2,
        height: baseSize,
        fillStyle: color,
        strokeStyle: color,
        strokeWidth: 3,
        opacity: 0.8,
        id: `enhancement_curve_${Date.now()}`,
      };

    case "pattern_circle":
      return {
        type: "circle",
        x: pos.x + baseSize,
        y: pos.y + baseSize,
        radius: baseSize,
        fillStyle: color,
        pattern: generatePattern(),
        opacity: generateOpacity(0.5, 0.7),
        id: `enhancement_pattern_${Date.now()}`,
      };

    default:
      return createIntelligentElement(state, palette, "enhancement");
  }
}

/**
 * Generate contextual text based on issue title and body
 * @param {string} title - Issue title
 * @param {string} body - Issue body
 * @returns {string} Generated text
 */
export function generateContextualText(title = "", body = "") {
  const words = [
    "Evolve",
    "Create",
    "Transform",
    "Inspire",
    "Harmony",
    "Beauty",
    "Vision",
    "Art",
    "Dream",
    "Flow",
    "Grace",
    "Light",
    "Wonder",
    "Magic",
    "Spirit",
    "Energy",
  ];

  // Try to extract meaningful words from the issue
  const titleWords = title.toLowerCase().match(/\b\w+\b/g) || [];
  const bodyWords = body.toLowerCase().match(/\b\w+\b/g) || [];

  const meaningfulWords = [...titleWords, ...bodyWords].filter(
    word =>
      word.length > 4 &&
      ![
        "that",
        "this",
        "with",
        "from",
        "they",
        "have",
        "been",
        "will",
      ].includes(word)
  );

  if (meaningfulWords.length > 0) {
    const word =
      meaningfulWords[Math.floor(Math.random() * meaningfulWords.length)];
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words[Math.floor(Math.random() * words.length)];
}

/**
 * Enhance element based on its type
 * @param {Object} element - Base element
 * @param {number} size - Base size
 * @param {string} color - Element color
 * @returns {Object} Enhanced element
 */
function enhanceElementByType(element, size, color) {
  const enhanced = { ...element };

  switch (element.type) {
    case "rectangle":
      enhanced.width = size;
      enhanced.height = size * 0.618; // Golden ratio

      // Add visual effects
      if (Math.random() > 0.6) {
        enhanced.gradient = generateGradient(
          determinePaletteFromColors([color])
        );
      }
      if (Math.random() > 0.7) {
        enhanced.shadow = generateShadow(color);
      }
      if (Math.random() > 0.8) {
        enhanced.pattern = generatePattern();
      }
      break;

    case "circle":
      enhanced.radius = size * 0.5;
      enhanced.x = element.x + enhanced.radius;
      enhanced.y = element.y + enhanced.radius;

      // Add gradient effects to circles
      if (Math.random() > 0.5) {
        enhanced.gradient = generateGradient(
          determinePaletteFromColors([color])
        );
      }
      if (Math.random() > 0.7) {
        enhanced.shadow = generateShadow(color);
      }
      break;

    case "triangle":
      enhanced.size = size * 0.8;
      enhanced.x = element.x + enhanced.size;
      enhanced.y = element.y + enhanced.size;

      // Add rotation and effects
      if (Math.random() > 0.6) {
        enhanced.rotation = Math.random() * 360;
      }
      if (Math.random() > 0.7) {
        enhanced.shadow = generateShadow(color);
        enhanced.strokeStyle = color;
        enhanced.strokeWidth = 1 + Math.random() * 2;
      }
      break;
  }

  return enhanced;
}

/**
 * Determine palette name from color array
 * @param {string[]} colors - Array of colors
 * @returns {string} Palette name
 */
function determinePaletteFromColors(colors) {
  // Simple heuristic to determine palette
  if (
    colors.some(c => c.includes("ff") || c.includes("e7") || c.includes("f3"))
  ) {
    return "warm";
  }
  if (
    colors.some(c => c.includes("2e") || c.includes("34") || c.includes("9b"))
  ) {
    return "cool";
  }
  return "vibrant";
}
