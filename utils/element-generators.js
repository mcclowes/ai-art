/**
 * Shared element creation utilities for artwork generation
 * This module consolidates common element creation logic
 */

const {
  generateGradient,
  generateShadow,
  getSelectedPalette,
} = require("./color-palettes");

// Golden ratio and fibonacci sequence for mathematical layouts
const goldenRatio = 1.618;
const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

/**
 * Create an intelligent element with contextual awareness
 * @param {Object} state - Current artwork state
 * @param {Array} palette - Color palette to use
 * @param {string} purpose - Purpose of the element (e.g., 'complement', 'focal')
 * @returns {Object} New element configuration
 */
function createIntelligentElement(state, palette, purpose) {
  const canvasWidth = state.canvas.width;
  const canvasHeight = state.canvas.height;
  const color = palette[Math.floor(Math.random() * palette.length)];

  // Use golden ratio for positioning
  const goldenX = canvasWidth / goldenRatio;
  const goldenY = canvasHeight / goldenRatio;

  // Base element configuration
  const baseElement = {
    x: Math.max(10, goldenX + (Math.random() - 0.5) * 100),
    y: Math.max(10, goldenY + (Math.random() - 0.5) * 100),
    fillStyle: color,
    id: `element${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };

  // Choose element type based on current composition
  const elementTypes = ["rectangle", "circle", "triangle"];
  const existingTypes = state.elements.map(el => el.type);
  const underrepresentedTypes = elementTypes.filter(
    type => existingTypes.filter(existing => existing === type).length < 2
  );

  const elementType =
    underrepresentedTypes.length > 0
      ? underrepresentedTypes[
          Math.floor(Math.random() * underrepresentedTypes.length)
        ]
      : elementTypes[Math.floor(Math.random() * elementTypes.length)];

  baseElement.type = elementType;

  // Add type-specific properties
  if (elementType === "rectangle") {
    const fibSize = fibonacciSequence[Math.floor(Math.random() * 8) + 2];
    baseElement.width = fibSize * 8;
    baseElement.height = fibSize * 5;

    if (Math.random() > 0.7) {
      baseElement.gradient = generateGradient(getSelectedPalette(palette));
    }
  } else if (elementType === "circle") {
    const fibSize = fibonacciSequence[Math.floor(Math.random() * 6) + 2];
    baseElement.radius = fibSize * 3;

    if (Math.random() > 0.6) {
      baseElement.gradient = generateGradient(getSelectedPalette(palette));
    }
  } else if (elementType === "triangle") {
    const fibSize = fibonacciSequence[Math.floor(Math.random() * 7) + 2];
    baseElement.size = fibSize * 4;
  }

  // Add shadow for depth
  if (Math.random() > 0.5) {
    baseElement.shadow = generateShadow(color);
  }

  return baseElement;
}

/**
 * Create intelligent text element
 * @param {Object} state - Current artwork state
 * @param {Array} palette - Color palette to use
 * @param {string} text - Text content
 * @returns {Object} New text element
 */
function createIntelligentText(state, palette, text) {
  const canvasWidth = state.canvas.width;
  const canvasHeight = state.canvas.height;
  const color = palette[Math.floor(Math.random() * palette.length)];

  const textElement = {
    type: "text",
    x: 50 + Math.random() * (canvasWidth - 200),
    y: 50 + Math.random() * (canvasHeight - 100),
    text: text,
    font: `${16 + Math.random() * 24}px ${Math.random() > 0.5 ? "Arial" : "serif"}`,
    fillStyle: color,
    id: `text${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  };

  // Add gradient for special effects
  if (Math.random() > 0.7) {
    textElement.gradient = generateGradient(getSelectedPalette(palette));
  }

  return textElement;
}

/**
 * Create artistic enhancement element
 * @param {Object} state - Current artwork state
 * @param {Array} palette - Color palette to use
 * @returns {Object} Enhancement element
 */
function createArtisticEnhancement(state, palette) {
  const canvasWidth = state.canvas.width;
  const canvasHeight = state.canvas.height;
  const color = palette[Math.floor(Math.random() * palette.length)];

  return {
    type: "rectangle",
    x: Math.random() * canvasWidth * 0.8,
    y: Math.random() * canvasHeight * 0.8,
    width: 20 + Math.random() * 60,
    height: 20 + Math.random() * 60,
    fillStyle: color,
    id: `enhancement${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    gradient: generateGradient(getSelectedPalette(palette)),
    shadow: generateShadow(color),
    opacity: 0.6 + Math.random() * 0.4,
  };
}

module.exports = {
  createIntelligentElement,
  createIntelligentText,
  createArtisticEnhancement,
  goldenRatio,
  fibonacciSequence,
};
