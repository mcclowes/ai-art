/**
 * @fileoverview Mathematical Utilities for AI Art Generation
 *
 * This module provides mathematical constants and positioning functions
 * used throughout the artwork generation system.
 */

// Golden ratio and fibonacci sequence for mathematical beauty
export const goldenRatio = 1.618;
export const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

/**
 * Get a fibonacci number for sizing elements
 * @returns {number} A fibonacci number
 */
export function getFibonacciSize() {
  const index = Math.floor(Math.random() * (fibonacciSequence.length - 3)) + 2;
  return fibonacciSequence[index];
}

/**
 * Calculate position using golden ratio
 * @param {Object} state - Artwork state containing canvas dimensions
 * @param {number} elementWidth - Width of the element to position
 * @param {number} elementHeight - Height of the element to position
 * @returns {Object} Position object with x and y coordinates
 */
export function getGoldenRatioPosition(state, elementWidth, elementHeight) {
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
 * Calculate optimal position based on element density analysis
 * @param {Object} state - Artwork state
 * @param {number} elementWidth - Width of the element (default: 100)
 * @param {number} elementHeight - Height of the element (default: 100)
 * @returns {Object} Position object with x and y coordinates
 */
export function getOptimalPosition(
  state,
  elementWidth = 100,
  elementHeight = 100
) {
  const analysis = analyzeElementDensity(state);
  const gridSize = 4;
  const sectionWidth = state.canvas.width / gridSize;
  const sectionHeight = state.canvas.height / gridSize;

  // Find the least dense section
  let minDensity = Infinity;
  let bestSection = null;

  Object.keys(analysis.elementDensity).forEach(sectionKey => {
    if (analysis.elementDensity[sectionKey] < minDensity) {
      minDensity = analysis.elementDensity[sectionKey];
      bestSection = sectionKey;
    }
  });

  if (bestSection) {
    const [sectionX, sectionY] = bestSection.split(",").map(Number);

    // Use rule of thirds for positioning within the section
    const ruleOfThirds = [0.33, 0.66];
    const thirdX =
      ruleOfThirds[Math.floor(Math.random() * ruleOfThirds.length)];
    const thirdY =
      ruleOfThirds[Math.floor(Math.random() * ruleOfThirds.length)];

    const x = Math.max(
      0,
      Math.min(
        sectionX * sectionWidth + sectionWidth * thirdX - elementWidth / 2,
        state.canvas.width - elementWidth
      )
    );

    const y = Math.max(
      0,
      Math.min(
        sectionY * sectionHeight + sectionHeight * thirdY - elementHeight / 2,
        state.canvas.height - elementHeight
      )
    );

    return { x: Math.floor(x), y: Math.floor(y) };
  }

  // Fallback to random position if analysis fails
  return {
    x: Math.floor(Math.random() * (state.canvas.width - elementWidth)),
    y: Math.floor(Math.random() * (state.canvas.height - elementHeight)),
  };
}

/**
 * Calculate balanced position using rule of thirds
 * @param {Object} state - Artwork state
 * @param {Object} element - Element to position
 * @returns {Object} Position object with x and y coordinates
 */
export function calculateBalancedPosition(state, element) {
  const { width, height } = state.canvas;
  const padding = 50;

  // Use rule of thirds for positioning
  const thirds = {
    x: [width / 3, (width * 2) / 3],
    y: [height / 3, (height * 2) / 3],
  };

  const targetX = thirds.x[Math.floor(Math.random() * 2)];
  const targetY = thirds.y[Math.floor(Math.random() * 2)];

  return {
    x: Math.max(
      padding,
      Math.min(targetX + (Math.random() - 0.5) * 100, width - padding)
    ),
    y: Math.max(
      padding,
      Math.min(targetY + (Math.random() - 0.5) * 100, height - padding)
    ),
  };
}

/**
 * Analyze element density in grid sections
 * @param {Object} state - Artwork state
 * @returns {Object} Analysis object with element density data
 */
function analyzeElementDensity(state) {
  const analysis = {
    elementDensity: {},
  };

  const gridSize = 4;
  const sectionWidth = state.canvas.width / gridSize;
  const sectionHeight = state.canvas.height / gridSize;

  // Initialize grid sections
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const sectionKey = `${i},${j}`;
      analysis.elementDensity[sectionKey] = 0;
    }
  }

  // Count elements in each section
  state.elements.forEach(element => {
    const sectionX = Math.floor(element.x / sectionWidth);
    const sectionY = Math.floor(element.y / sectionHeight);
    const sectionKey = `${sectionX},${sectionY}`;

    if (analysis.elementDensity[sectionKey] !== undefined) {
      analysis.elementDensity[sectionKey]++;
    }
  });

  return analysis;
}
