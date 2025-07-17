/**
 * Shared color palettes and gradient combinations for artwork generation
 * This module consolidates all color-related definitions to avoid duplication
 */

// Enhanced color palettes combining the best from both implementations
const colorPalettes = {
  warm: ["#ff6b6b", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"],
  cool: ["#00d2d3", "#1dd1a1", "#341f97", "#706fd3", "#40407a"],
  earth: ["#8e44ad", "#27ae60", "#e67e22", "#f39c12", "#d35400"],
  monochrome: ["#2f3640", "#57606f", "#a4b0be", "#fff", "#000"],
  pastel: ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"],
  vibrant: ["#e74c3c", "#f39c12", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6"],
  ocean: ["#006994", "#4682B4", "#87CEEB", "#20B2AA", "#008B8B"],
  sunset: ["#FF6B35", "#F7931E", "#FFD23F", "#C5DB8C", "#87CEEB"],
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
    ["#2f3640", "#57606f", "#a4b0be"],
    ["#000", "#333", "#666"],
  ],
};

/**
 * Generate sophisticated gradient based on palette
 * @param {string} palette - The palette name
 * @returns {Object} Gradient configuration
 */
function generateGradient(palette) {
  const paletteGradients =
    gradientCombinations[palette] || gradientCombinations.warm;
  const gradientColors =
    paletteGradients[Math.floor(Math.random() * paletteGradients.length)];

  return {
    type: Math.random() > 0.5 ? "linear" : "radial",
    colors: gradientColors,
    direction: Math.random() * 360,
    centerX: 0.3 + Math.random() * 0.4,
    centerY: 0.3 + Math.random() * 0.4,
  };
}

/**
 * Generate sophisticated shadow effect
 * @param {string} color - Base color for shadow
 * @returns {Object} Shadow configuration
 */
function generateShadow(color) {
  return {
    blur: 5 + Math.random() * 15,
    color: color + "40",
    offsetX: -5 + Math.random() * 10,
    offsetY: -5 + Math.random() * 10,
  };
}

/**
 * Get palette name from color array
 * @param {Array} palette - Array of colors
 * @returns {string} Palette name
 */
function getSelectedPalette(palette) {
  const paletteNames = Object.keys(colorPalettes);
  for (const name of paletteNames) {
    if (colorPalettes[name].includes(palette[0])) {
      return name;
    }
  }
  return "warm"; // default fallback
}

module.exports = {
  colorPalettes,
  gradientCombinations,
  generateGradient,
  generateShadow,
  getSelectedPalette,
};
