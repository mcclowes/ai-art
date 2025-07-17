/**
 * @fileoverview Artwork Analysis Utilities
 *
 * This module provides functions for analyzing artwork composition,
 * color distribution, density, and other properties.
 */

/**
 * Comprehensive artwork analysis
 * @param {Object} state - Artwork state object
 * @returns {Object} Analysis results
 */
export function analyzeArtwork(state) {
  const analysis = {
    elementCount: state.elements.length,
    colorDistribution: {},
    elementDensity: {},
    averageSize: 0,
    coverage: 0,
    hasText: state.elements.some(el => el.type === "text"),
    hasShapes: state.elements.some(el =>
      ["rectangle", "circle", "triangle"].includes(el.type)
    ),
    colorDiversity: [...new Set(state.elements.map(el => el.fillStyle))].length,
    typeDistribution: {},
  };

  // Analyze color distribution
  state.elements.forEach(element => {
    if (element.fillStyle) {
      analysis.colorDistribution[element.fillStyle] =
        (analysis.colorDistribution[element.fillStyle] || 0) + 1;
    }

    // Analyze element type distribution
    analysis.typeDistribution[element.type] =
      (analysis.typeDistribution[element.type] || 0) + 1;
  });

  // Calculate element density in grid sections
  const gridSize = 4;
  const sectionWidth = state.canvas.width / gridSize;
  const sectionHeight = state.canvas.height / gridSize;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const sectionKey = `${i},${j}`;
      analysis.elementDensity[sectionKey] = 0;
    }
  }

  let totalArea = 0;
  state.elements.forEach(element => {
    // Calculate which grid section this element belongs to
    const sectionX = Math.floor(element.x / sectionWidth);
    const sectionY = Math.floor(element.y / sectionHeight);
    const sectionKey = `${sectionX},${sectionY}`;

    if (analysis.elementDensity[sectionKey] !== undefined) {
      analysis.elementDensity[sectionKey]++;
    }

    // Calculate area for different shapes
    if (element.type === "rectangle" && element.width && element.height) {
      totalArea += element.width * element.height;
    } else if (element.type === "circle" && element.radius) {
      totalArea += Math.PI * element.radius * element.radius;
    } else if (element.type === "triangle" && element.size) {
      totalArea += (Math.sqrt(3) / 4) * element.size * element.size;
    }
  });

  const shapeElements = state.elements.filter(e => e.type !== "text");
  analysis.averageSize =
    shapeElements.length > 0 ? totalArea / shapeElements.length : 0;
  analysis.coverage = totalArea / (state.canvas.width * state.canvas.height);

  // Calculate density score
  analysis.densityScore =
    analysis.elementCount /
    ((state.canvas.width * state.canvas.height) / 10000);

  return analysis;
}

/**
 * Analyze color harmony in the artwork
 * @param {Object} state - Artwork state object
 * @returns {Object} Color harmony analysis
 */
export function analyzeColorHarmony(state) {
  const colors = state.elements.map(el => el.fillStyle).filter(Boolean);
  const uniqueColors = [...new Set(colors)];

  return {
    totalColors: colors.length,
    uniqueColors: uniqueColors.length,
    colorVariety: uniqueColors.length / colors.length,
    dominantColor: getMostUsedColor(colors),
    colorBalance: calculateColorBalance(colors),
  };
}

/**
 * Analyze spatial distribution of elements
 * @param {Object} state - Artwork state object
 * @returns {Object} Spatial analysis
 */
export function analyzeSpatialDistribution(state) {
  const { width, height } = state.canvas;
  const centerX = width / 2;
  const centerY = height / 2;

  let leftSide = 0;
  let rightSide = 0;
  let topHalf = 0;
  let bottomHalf = 0;
  let center = 0;

  state.elements.forEach(element => {
    if (element.x < centerX) leftSide++;
    else rightSide++;

    if (element.y < centerY) topHalf++;
    else bottomHalf++;

    // Check if element is in center area (middle third)
    if (
      element.x > width / 3 &&
      element.x < (2 * width) / 3 &&
      element.y > height / 3 &&
      element.y < (2 * height) / 3
    ) {
      center++;
    }
  });

  return {
    leftRightBalance: Math.abs(leftSide - rightSide) / state.elements.length,
    topBottomBalance: Math.abs(topHalf - bottomHalf) / state.elements.length,
    centerConcentration: center / state.elements.length,
    distribution: {
      left: leftSide,
      right: rightSide,
      top: topHalf,
      bottom: bottomHalf,
      center: center,
    },
  };
}

/**
 * Suggest improvements based on analysis
 * @param {Object} analysis - Artwork analysis results
 * @returns {string[]} Array of improvement suggestions
 */
export function suggestImprovements(analysis) {
  const suggestions = [];

  if (analysis.elementCount < 5) {
    suggestions.push("Add more elements to increase visual interest");
  }

  if (analysis.coverage < 0.1) {
    suggestions.push(
      "Increase element sizes or add more elements for better coverage"
    );
  }

  if (analysis.colorDiversity > 6) {
    suggestions.push("Reduce color variety for better harmony");
  }

  if (analysis.colorDiversity < 3) {
    suggestions.push("Add more color variety for visual interest");
  }

  if (!analysis.hasText) {
    suggestions.push("Consider adding meaningful text elements");
  }

  const spatialAnalysis = analyzeSpatialDistribution({
    elements: [],
    canvas: { width: 800, height: 600 },
  });

  if (spatialAnalysis.leftRightBalance > 0.3) {
    suggestions.push("Improve left-right balance of elements");
  }

  if (spatialAnalysis.centerConcentration > 0.8) {
    suggestions.push("Spread elements more evenly across the canvas");
  }

  return suggestions;
}

/**
 * Get the most frequently used color
 * @param {string[]} colors - Array of color values
 * @returns {string} Most used color
 */
function getMostUsedColor(colors) {
  const colorCounts = {};
  colors.forEach(color => {
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  });

  return Object.keys(colorCounts).reduce((a, b) =>
    colorCounts[a] > colorCounts[b] ? a : b
  );
}

/**
 * Calculate color balance score
 * @param {string[]} colors - Array of color values
 * @returns {number} Balance score between 0 and 1
 */
function calculateColorBalance(colors) {
  const colorCounts = {};
  colors.forEach(color => {
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  });

  const counts = Object.values(colorCounts);
  const avg = counts.reduce((sum, count) => sum + count, 0) / counts.length;
  const variance =
    counts.reduce((sum, count) => sum + Math.pow(count - avg, 2), 0) /
    counts.length;

  // Lower variance means better balance
  return 1 / (1 + variance);
}
