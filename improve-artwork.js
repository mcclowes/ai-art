#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { writeArtworkState } = require("./utils/artwork-writer");

// Read the current artwork state from the TypeScript file
const artworkTsPath = path.join(__dirname, "src", "artwork-state.ts");
const artworkContent = fs.readFileSync(artworkTsPath, "utf8");

// Extract the artwork state data from the TypeScript file
const match = artworkContent.match(
  /export const artworkState: ArtworkState = ([\s\S]*?);$/m
);
if (!match) {
  console.error("Could not parse artwork state from TypeScript file");
  process.exit(1);
}

const currentState = eval(`(${match[1]})`);

// Check if we need to start a new cycle (after a week)
function shouldStartNewCycle(state) {
  const cycleStarted = new Date(state.cycleStarted);
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return cycleStarted < oneWeekAgo;
}

// Save current artwork to archive
function saveArtworkToArchive(state) {
  const archiveDir = path.join(__dirname, "archive");
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir);
  }

  const cycleStarted = new Date(state.cycleStarted);
  const filename = `artwork-cycle-${cycleStarted.toISOString().split("T")[0]}-gen${state.generation}.json`;
  const archivePath = path.join(archiveDir, filename);

  fs.writeFileSync(archivePath, JSON.stringify(state, null, 2));
  console.log(`Saved artwork cycle to archive: ${filename}`);
}

// Reset artwork to start a new cycle
function resetArtwork(state) {
  const now = new Date().toISOString();

  // Keep the canvas settings but reset elements to initial state
  state.elements = [
    {
      type: "rectangle",
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      fillStyle: "#e67e22",
      id: "rect1",
    },
    {
      type: "text",
      x: 416,
      y: 334,
      text: "Hello Canvas!",
      font: "24px Arial",
      fillStyle: "#fff",
      id: "text1",
    },
  ];

  state.generation = 1;
  state.lastUpdated = now;
  state.cycleStarted = now;

  console.log("Reset artwork to start new cycle");
}
// Import shared utilities
const {
  colorPalettes,
  gradientCombinations,
  goldenRatio,
  fibonacciSequence,
  getFibonacciSize,
  generateGradient,
  generateShadow,
  getGoldenRatioPosition,
  getHarmoniousColor,
} = require("./utils/shared-constants");

// Artwork analysis functions
function analyzeArtwork(state) {
  const analysis = {
    elementCount: state.elements.length,
    colorDistribution: {},
    elementDensity: {},
    averageSize: 0,
    coverage: 0,
  };

  // Analyze color distribution
  state.elements.forEach(element => {
    if (element.fillStyle) {
      analysis.colorDistribution[element.fillStyle] =
        (analysis.colorDistribution[element.fillStyle] || 0) + 1;
    }
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

  return analysis;
}

// getHarmoniousColor is now imported from shared-constants

// generateGradient is now imported from shared-constants

// generateShadow is now imported from shared-constants

// Mathematical utilities are now imported from shared-constants

function getOptimalPosition(state, elementWidth = 100, elementHeight = 100) {
  const analysis = analyzeArtwork(state);
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

// OpenAI Integration (optional)
async function getAIFeedback(state) {
  // Check if OpenAI API key is available
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  try {
    const analysis = analyzeArtwork(state);

    // Create a description of the current artwork
    const artworkDescription = `
Canvas: ${state.canvas.width}x${state.canvas.height}, background: ${state.canvas.background}
Elements: ${analysis.elementCount}
Coverage: ${(analysis.coverage * 100).toFixed(1)}%
Colors: ${Object.keys(analysis.colorDistribution).join(", ")}
Generation: ${state.generation}
`;

    // Note: This is a placeholder for OpenAI integration
    // In a real implementation, you would call the OpenAI API here
    console.log(
      "OpenAI integration placeholder - artwork description:",
      artworkDescription
    );

    return {
      suggestion: "balance",
      confidence: 0.8,
      reasoning: "AI analysis suggests improving visual balance",
    };
  } catch (error) {
    console.log("OpenAI integration error:", error.message);
    return null;
  }
}

// Enhanced intelligent improvement with optional AI feedback
async function enhancedIntelligentImproveArtwork(state) {
  const analysis = analyzeArtwork(state);
  const existingColors = Object.keys(analysis.colorDistribution);

  // Get AI feedback if available
  const aiFeedback = await getAIFeedback(state);

  // Determine dominant palette for gradient generation
  const dominantPalette = getDominantPalette(existingColors);

  // Adjust improvement weights based on AI feedback
  let balanceWeight = 1.5;
  let colorWeight = 1;
  let addWeight = 2;
  let advancedWeight = 1.5; // Weight for advanced visual effects

  if (aiFeedback) {
    console.log("AI feedback:", aiFeedback);
    if (aiFeedback.suggestion === "balance") {
      balanceWeight *= 2;
    } else if (aiFeedback.suggestion === "color") {
      colorWeight *= 2;
    }
  }

  // Define improvement strategies with AI-influenced weights
  const improvements = [
    // Add sophisticated gradient rectangle
    {
      name: "add_gradient_rectangle",
      weight: (analysis.elementCount < 10 ? 2 : 1) * advancedWeight,
      action: () => {
        const width = getFibonacciSize() * 8;
        const height = getFibonacciSize() * 6;
        const pos = getGoldenRatioPosition(state, width, height);
        const gradient = generateGradient(dominantPalette);

        const newElement = {
          type: "rectangle",
          x: pos.x,
          y: pos.y,
          width: width,
          height: height,
          fillStyle: gradient.colors[0], // Fallback color
          gradient: gradient,
          shadow: generateShadow(gradient.colors[0]),
          opacity: 0.7 + Math.random() * 0.3,
          id: `gradient_rect_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added gradient rectangle with ${gradient.type} gradient at golden ratio position (${pos.x}, ${pos.y})`;
      },
    },

    // Add sophisticated gradient circle
    {
      name: "add_gradient_circle",
      weight: (analysis.elementCount < 10 ? 2 : 1) * advancedWeight,
      action: () => {
        const radius = getFibonacciSize() * 4;
        const pos = getGoldenRatioPosition(state, radius * 2, radius * 2);
        const gradient = generateGradient(dominantPalette);

        const newElement = {
          type: "circle",
          x: pos.x + radius,
          y: pos.y + radius,
          radius: radius,
          fillStyle: gradient.colors[0], // Fallback color
          gradient: gradient,
          shadow: generateShadow(gradient.colors[0]),
          opacity: 0.6 + Math.random() * 0.4,
          id: `gradient_circle_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added gradient circle with ${gradient.type} gradient at golden ratio position (${pos.x + radius}, ${pos.y + radius})`;
      },
    },

    // Add mathematical curve
    {
      name: "add_curve",
      weight: (analysis.elementCount < 12 ? 1.5 : 0.5) * advancedWeight,
      action: () => {
        const pos = getGoldenRatioPosition(state, 200, 100);
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "curve",
          x: pos.x,
          y: pos.y,
          width: 150 + Math.random() * 100,
          height: 50 + Math.random() * 50,
          fillStyle: color,
          strokeStyle: color,
          strokeWidth: 2 + Math.random() * 3,
          opacity: 0.8,
          id: `curve_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added mathematical curve at golden ratio position (${pos.x}, ${pos.y})`;
      },
    },

    // Add spiral pattern
    {
      name: "add_spiral",
      weight: (analysis.elementCount < 8 ? 1.5 : 0.5) * advancedWeight,
      action: () => {
        const radius = getFibonacciSize() * 3;
        const pos = getGoldenRatioPosition(state, radius * 2, radius * 2);
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "spiral",
          x: pos.x + radius,
          y: pos.y + radius,
          radius: radius,
          fillStyle: color,
          strokeStyle: color,
          strokeWidth: 1 + Math.random() * 2,
          opacity: 0.7,
          id: `spiral_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added mathematical spiral at golden ratio position (${pos.x + radius}, ${pos.y + radius})`;
      },
    },

    // Add patterned rectangle
    {
      name: "add_pattern_rectangle",
      weight: (analysis.elementCount < 10 ? 1.5 : 0.5) * advancedWeight,
      action: () => {
        const width = getFibonacciSize() * 10;
        const height = getFibonacciSize() * 8;
        const pos = getGoldenRatioPosition(state, width, height);
        const color = getHarmoniousColor(existingColors);
        const patterns = ["dots", "stripes", "waves"];
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];

        const newElement = {
          type: "rectangle",
          x: pos.x,
          y: pos.y,
          width: width,
          height: height,
          fillStyle: color,
          pattern: pattern,
          opacity: 0.6 + Math.random() * 0.3,
          id: `pattern_rect_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added ${pattern} patterned rectangle at golden ratio position (${pos.x}, ${pos.y})`;
      },
    },

    // Add rotated triangle with effects
    {
      name: "add_rotated_triangle",
      weight: (analysis.elementCount < 10 ? 1.5 : 0.5) * advancedWeight,
      action: () => {
        const size = getFibonacciSize() * 5;
        const pos = getGoldenRatioPosition(state, size * 2, size * 2);
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "triangle",
          x: pos.x + size,
          y: pos.y + size,
          size: size,
          fillStyle: color,
          strokeStyle: color,
          strokeWidth: 1 + Math.random() * 2,
          rotation: Math.random() * 360,
          opacity: 0.7 + Math.random() * 0.3,
          shadow: generateShadow(color),
          id: `rotated_triangle_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added rotated triangle with effects at golden ratio position (${pos.x + size}, ${pos.y + size})`;
      },
    },

    // Add sophisticated text with gradient
    {
      name: "add_gradient_text",
      weight:
        (state.elements.filter(e => e.type === "text").length < 4 ? 1.5 : 0.5) *
        advancedWeight,
      action: () => {
        const pos = getGoldenRatioPosition(state, 120, 40);
        const artWords = [
          "EVOLVE",
          "TRANSCEND",
          "HARMONY",
          "SYNTHESIS",
          "EMERGENCE",
          "METAMORPHOSIS",
        ];
        const text = artWords[Math.floor(Math.random() * artWords.length)];
        const fontSize = 20 + Math.random() * 20;
        const gradient = generateGradient(dominantPalette);

        const newElement = {
          type: "text",
          x: pos.x,
          y: pos.y,
          text: text,
          font: `bold ${fontSize}px Arial`,
          fillStyle: gradient.colors[0], // Fallback color
          gradient: gradient,
          shadow: generateShadow(gradient.colors[0]),
          opacity: 0.8 + Math.random() * 0.2,
          id: `gradient_text_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added gradient text "${text}" at golden ratio position (${pos.x}, ${pos.y})`;
      },
    },

    // Add a new rectangle with optimal positioning and color harmony
    {
      name: "add_rectangle",
      weight: (analysis.elementCount < 8 ? 2 : 1) * addWeight,
      action: () => {
        const width = 60 + Math.random() * 80;
        const height = 60 + Math.random() * 80;
        const pos = getOptimalPosition(state, width, height);
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "rectangle",
          x: pos.x,
          y: pos.y,
          width: width,
          height: height,
          fillStyle: color,
          id: `element_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added harmonious rectangle (${color}) at optimal position (${pos.x}, ${pos.y})`;
      },
    },

    // Add a new circle with optimal positioning and color harmony
    {
      name: "add_circle",
      weight: (analysis.elementCount < 8 ? 2 : 1) * addWeight,
      action: () => {
        const radius = 30 + Math.random() * 50;
        const pos = getOptimalPosition(state, radius * 2, radius * 2);
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "circle",
          x: pos.x + radius, // Center the circle
          y: pos.y + radius,
          radius: radius,
          fillStyle: color,
          id: `circle_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added harmonious circle (${color}) at optimal position (${pos.x + radius}, ${pos.y + radius})`;
      },
    },

    // Add a new triangle with optimal positioning and color harmony
    {
      name: "add_triangle",
      weight: (analysis.elementCount < 8 ? 2 : 1) * addWeight,
      action: () => {
        const size = 40 + Math.random() * 60;
        const pos = getOptimalPosition(state, size * 2, size * 2);
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "triangle",
          x: pos.x + size, // Center the triangle
          y: pos.y + size,
          size: size,
          fillStyle: color,
          id: `triangle_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added harmonious triangle (${color}) at optimal position (${pos.x + size}, ${pos.y + size})`;
      },
    },

    // Improve color harmony of existing elements
    {
      name: "harmonize_color",
      weight:
        (Object.keys(analysis.colorDistribution).length > 3 ? 2 : 1) *
        colorWeight,
      action: () => {
        const nonTextElements = state.elements.filter(e => e.type !== "text");
        if (nonTextElements.length > 0) {
          const elementIndex = Math.floor(
            Math.random() * nonTextElements.length
          );
          const element = nonTextElements[elementIndex];
          const oldColor = element.fillStyle;
          element.fillStyle = getHarmoniousColor(existingColors);
          return `Harmonized ${element.id} color from ${oldColor} to ${element.fillStyle}`;
        }
        return null;
      },
    },

    // Add meaningful text with better positioning
    {
      name: "add_text",
      weight:
        (state.elements.filter(e => e.type === "text").length < 3 ? 2 : 0.5) *
        addWeight,
      action: () => {
        const pos = getOptimalPosition(state, 100, 30);
        const artWords = [
          "Harmony",
          "Balance",
          "Evolve",
          "Create",
          "Inspire",
          "Transform",
          "Aesthetic",
          "Vision",
        ];
        const text = artWords[Math.floor(Math.random() * artWords.length)];
        const fontSize = 18 + Math.random() * 16;
        const color = getHarmoniousColor(existingColors);

        const newElement = {
          type: "text",
          x: pos.x,
          y: pos.y,
          text: text,
          font: `${fontSize}px Arial`,
          fillStyle: color,
          id: `text_${Date.now()}`,
        };
        state.elements.push(newElement);
        return `Added meaningful text "${text}" with harmonious color at (${pos.x}, ${pos.y})`;
      },
    },

    // Reposition elements for better balance
    {
      name: "rebalance_position",
      weight: (state.elements.length > 3 ? 1.5 : 0.5) * balanceWeight,
      action: () => {
        if (state.elements.length > 0) {
          const elementIndex = Math.floor(
            Math.random() * state.elements.length
          );
          const element = state.elements[elementIndex];
          const oldPos = { x: element.x, y: element.y };

          const width = element.width || 100;
          const height = element.height || 30;
          const newPos = getOptimalPosition(state, width, height);

          // Only move if the new position is significantly different
          if (
            Math.abs(newPos.x - oldPos.x) > 50 ||
            Math.abs(newPos.y - oldPos.y) > 50
          ) {
            element.x = newPos.x;
            element.y = newPos.y;
            return `Rebalanced ${element.id} from (${oldPos.x}, ${oldPos.y}) to (${newPos.x}, ${newPos.y}) ${aiFeedback ? "(AI-guided)" : ""}`;
          }
        }
        return null;
      },
    },

    // Add advanced visual effects to existing elements
    {
      name: "add_visual_effects",
      weight: 1.5 * advancedWeight,
      action: () => {
        const nonTextElements = state.elements.filter(
          e => e.type !== "text" && !e.gradient && !e.shadow
        );
        if (nonTextElements.length > 0) {
          const elementIndex = Math.floor(
            Math.random() * nonTextElements.length
          );
          const element = nonTextElements[elementIndex];

          // Add gradient
          if (Math.random() > 0.5) {
            element.gradient = generateGradient(dominantPalette);
          }

          // Add shadow
          if (Math.random() > 0.5) {
            element.shadow = generateShadow(element.fillStyle);
          }

          // Add opacity
          if (Math.random() > 0.5) {
            element.opacity = 0.7 + Math.random() * 0.3;
          }

          return `Added visual effects to ${element.id}`;
        }
        return null;
      },
    },
  ];

  // Select improvements based on weights and current state
  const appliedImprovements = [];
  const numImprovements = analysis.coverage < 0.15 ? 2 : 1; // More improvements if coverage is low

  for (let i = 0; i < numImprovements; i++) {
    // Calculate weighted selection
    const totalWeight = improvements.reduce((sum, imp) => sum + imp.weight, 0);
    let random = Math.random() * totalWeight;

    for (const improvement of improvements) {
      random -= improvement.weight;
      if (random <= 0) {
        const result = improvement.action();
        if (result) {
          appliedImprovements.push(result);
          break;
        }
      }
    }
  }

  // Update generation and timestamp
  state.generation++;
  state.lastUpdated = new Date().toISOString();

  return appliedImprovements;
}

// Helper function to determine dominant palette
function getDominantPalette(existingColors) {
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

// Apply intelligent improvements with optional AI enhancement
async function main() {
  // Check if we need to start a new cycle
  if (shouldStartNewCycle(currentState)) {
    console.log("Week has passed - starting new artwork cycle");
    saveArtworkToArchive(currentState);
    resetArtwork(currentState);
  } else {
    // Apply normal improvements
    const improvements = await enhancedIntelligentImproveArtwork(currentState);
    console.log("Applied intelligent improvements:", improvements);
  }

  // Display analysis for debugging
  const analysis = analyzeArtwork(currentState);
  console.log("Artwork analysis:", {
    elements: analysis.elementCount,
    coverage: `${(analysis.coverage * 100).toFixed(1)}%`,
    colors: Object.keys(analysis.colorDistribution).length,
    generation: currentState.generation,
    cycleStarted: currentState.cycleStarted,
  });

  // Write back the updated state to the TypeScript file
  writeArtworkState(currentState, artworkTsPath);
}

// Run the main function
main().catch(console.error);
