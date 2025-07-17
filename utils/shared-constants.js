/**
 * @fileoverview Shared Constants and Simple Utilities (CommonJS)
 *
 * This module provides basic constants and simple utility functions
 * that can be used by Node.js scripts without ES module imports.
 */

// Enhanced color palettes with better harmony
const colorPalettes = {
  warm: ["#e74c3c", "#f39c12", "#f1c40f", "#e67e22", "#d35400"],
  cool: ["#2ecc71", "#3498db", "#9b59b6", "#1abc9c", "#34495e"],
  monochrome: ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"],
  vibrant: ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6"],
  earth: ["#8B4513", "#A0522D", "#D2B48C", "#F5DEB3", "#DEB887"],
  ocean: ["#006994", "#4682B4", "#87CEEB", "#20B2AA", "#008B8B"],
  sunset: ["#FF6B35", "#F7931E", "#FFD23F", "#C5DB8C", "#87CEEB"],
  pastel: ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"],
};

// Advanced gradient combinations
const gradientCombinations = {
  warm: [
    ["#FF6B35", "#F7931E", "#FFD23F"],
    ["#e74c3c", "#f39c12", "#f1c40f"],
    ["#d35400", "#e67e22", "#f39c12"],
  ],
  cool: [
    ["#2ecc71", "#3498db", "#9b59b6"],
    ["#1abc9c", "#34495e", "#2c3e50"],
    ["#006994", "#4682B4", "#87CEEB"],
  ],
  sunset: [
    ["#FF6B35", "#F7931E", "#FFD23F"],
    ["#FF4500", "#FF8C00", "#FFA500"],
    ["#DC143C", "#FF69B4", "#FF1493"],
  ],
  ocean: [
    ["#006994", "#4682B4", "#87CEEB"],
    ["#20B2AA", "#008B8B", "#2F4F4F"],
    ["#0077BE", "#0099CC", "#66CCFF"],
  ],
  vibrant: [
    ["#e74c3c", "#f39c12", "#f1c40f"],
    ["#2ecc71", "#3498db", "#9b59b6"],
    ["#FF6B35", "#F7931E", "#FFD23F"],
  ],
  earth: [
    ["#8B4513", "#A0522D", "#D2B48C"],
    ["#8e44ad", "#27ae60", "#e67e22"],
    ["#654321", "#8B4513", "#A0522D"],
  ],
  pastel: [
    ["#ffb3ba", "#ffdfba", "#ffffba"],
    ["#baffc9", "#bae1ff", "#c9baff"],
    ["#f8d7da", "#d4edda", "#d1ecf1"],
  ],
  monochrome: [
    ["#2c3e50", "#34495e", "#7f8c8d"],
    ["#34495e", "#7f8c8d", "#95a5a6"],
    ["#7f8c8d", "#95a5a6", "#bdc3c7"],
  ],
};

// Golden ratio and fibonacci sequence for mathematical beauty
const goldenRatio = 1.618;
const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

/**
 * Get a fibonacci number for sizing elements
 * @returns {number} A fibonacci number
 */
function getFibonacciSize() {
  const index = Math.floor(Math.random() * (fibonacciSequence.length - 3)) + 2;
  return fibonacciSequence[index];
}

/**
 * Generate sophisticated gradient
 * @param {string} dominantPalette - Name of the dominant color palette
 * @returns {Object} Gradient configuration object
 */
function generateGradient(dominantPalette) {
  const paletteGradients =
    gradientCombinations[dominantPalette] || gradientCombinations.warm;
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
function generateShadow(color) {
  return {
    blur: 5 + Math.random() * 15,
    color: color + "40", // Add alpha for transparency
    offsetX: -5 + Math.random() * 10,
    offsetY: -5 + Math.random() * 10,
  };
}

/**
 * Calculate position using golden ratio
 * @param {Object} state - Artwork state containing canvas dimensions
 * @param {number} elementWidth - Width of the element to position
 * @param {number} elementHeight - Height of the element to position
 * @returns {Object} Position object with x and y coordinates
 */
function getGoldenRatioPosition(state, elementWidth, elementHeight) {
  const width = state.canvas.width;
  const height = state.canvas.height;

  // Use golden ratio for positioning
  const goldenX = [width / goldenRatio, width - width / goldenRatio];
  const goldenY = [height / goldenRatio, height - height / goldenRatio];

  const x =
    goldenX[Math.floor(Math.random() * goldenX.length)] - elementWidth / 2;
  const y =
    goldenY[Math.floor(Math.random() * goldenY.length)] - elementHeight / 2;

  return {
    x: Math.max(0, Math.min(x, width - elementWidth)),
    y: Math.max(0, Math.min(y, height - elementHeight)),
  };
}

/**
 * Get a harmonious color from existing colors
 * @param {string[]} existingColors - Array of existing colors in the artwork
 * @returns {string} A harmonious color
 */
function getHarmoniousColor(existingColors) {
  // Determine the dominant color palette
  const colorCounts = {};

  Object.keys(colorPalettes).forEach(palette => {
    colorCounts[palette] = 0;
    colorPalettes[palette].forEach(color => {
      if (existingColors.includes(color)) {
        colorCounts[palette]++;
      }
    });
  });

  // Find the most used palette
  const dominantPalette = Object.keys(colorCounts).reduce((a, b) =>
    colorCounts[a] > colorCounts[b] ? a : b
  );

  // Select a color from the dominant palette that's not overused
  const paletteColors = colorPalettes[dominantPalette];
  const unusedColors = paletteColors.filter(
    color => !existingColors.includes(color)
  );

  return unusedColors.length > 0
    ? unusedColors[Math.floor(Math.random() * unusedColors.length)]
    : paletteColors[Math.floor(Math.random() * paletteColors.length)];
}

module.exports = {
  colorPalettes,
  gradientCombinations,
  goldenRatio,
  fibonacciSequence,
  getFibonacciSize,
  generateGradient,
  generateShadow,
  getGoldenRatioPosition,
  getHarmoniousColor,
};
