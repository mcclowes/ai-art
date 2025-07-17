/**
 * @fileoverview Centralized Color Palette Definitions
 * 
 * This module provides a single source of truth for all color palettes
 * and gradient combinations used throughout the AI art generation system.
 */

// Enhanced color palettes with better harmony
export const colorPalettes = {
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
export const gradientCombinations = {
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

/**
 * Get a harmonious color from existing colors
 * @param {string[]} existingColors - Array of existing colors in the artwork
 * @returns {string} A harmonious color
 */
export function getHarmoniousColor(existingColors) {
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

/**
 * Determine the dominant palette from existing colors
 * @param {string[]} existingColors - Array of existing colors
 * @returns {string} The name of the dominant palette
 */
export function getDominantPalette(existingColors) {
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

  return dominantPalette || "warm";
}

/**
 * Get palette colors by name
 * @param {string} paletteName - Name of the palette
 * @returns {string[]} Array of colors in the palette
 */
export function getPaletteColors(paletteName) {
  return colorPalettes[paletteName] || colorPalettes.warm;
}

/**
 * Get gradient combinations for a specific palette
 * @param {string} paletteName - Name of the palette
 * @returns {string[][]} Array of gradient color combinations
 */
export function getGradientCombinations(paletteName) {
  return gradientCombinations[paletteName] || gradientCombinations.warm;
}