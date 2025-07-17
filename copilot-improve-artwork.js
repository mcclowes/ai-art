#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { writeArtworkState } = require("./utils/artwork-writer");
const {
  colorPalettes,
  gradientCombinations,
  generateGradient,
  generateShadow,
  getSelectedPalette,
} = require("./utils/color-palettes");
const {
  createIntelligentElement,
  createIntelligentText,
  createArtisticEnhancement,
  goldenRatio,
  fibonacciSequence,
} = require("./utils/element-generators");

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

// Color palettes and utilities now imported from shared modules

// Mathematical constants and positioning now imported from shared utilities

function getGoldenRatioPosition(state, elementWidth, elementHeight) {
  const width = state.canvas.width;
  const height = state.canvas.height;

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

function getFibonacciSize() {
  const index = Math.floor(Math.random() * (fibonacciSequence.length - 3)) + 2;
  return fibonacciSequence[index];
}

// Analyze current artwork and suggest improvements
function analyzeArtwork(state) {
  const analysis = {
    elementCount: state.elements.length,
    hasText: state.elements.some(el => el.type === "text"),
    hasShapes: state.elements.some(el => el.type === "rectangle"),
    colorDiversity: [...new Set(state.elements.map(el => el.fillStyle))].length,
    densityScore:
      state.elements.length /
      ((state.canvas.width * state.canvas.height) / 10000),
    averageSize:
      state.elements
        .filter(el => el.width && el.height)
        .reduce((sum, el) => sum + el.width * el.height, 0) /
        state.elements.filter(el => el.width && el.height).length || 0,
  };

  return analysis;
}

// Generate intelligent improvements based on analysis
function generateCopilotImprovements(state, analysis) {
  const improvements = [];
  const issueTitle = process.env.ISSUE_TITLE || "";
  const issueBody = process.env.ISSUE_BODY || "";

  // Choose color palette based on issue context or current state
  let selectedPalette = "vibrant";
  if (
    issueTitle.toLowerCase().includes("calm") ||
    issueBody.toLowerCase().includes("peaceful")
  ) {
    selectedPalette = "pastel";
  } else if (
    issueTitle.toLowerCase().includes("nature") ||
    issueBody.toLowerCase().includes("organic")
  ) {
    selectedPalette = "earth";
  } else if (
    issueTitle.toLowerCase().includes("cool") ||
    issueBody.toLowerCase().includes("blue")
  ) {
    selectedPalette = "cool";
  } else if (
    issueTitle.toLowerCase().includes("warm") ||
    issueBody.toLowerCase().includes("fire")
  ) {
    selectedPalette = "warm";
  } else if (
    issueTitle.toLowerCase().includes("ocean") ||
    issueBody.toLowerCase().includes("water")
  ) {
    selectedPalette = "ocean";
  } else if (
    issueTitle.toLowerCase().includes("sunset") ||
    issueBody.toLowerCase().includes("golden")
  ) {
    selectedPalette = "sunset";
  } else if (
    issueTitle.toLowerCase().includes("vibrant") ||
    issueBody.toLowerCase().includes("colorful")
  ) {
    selectedPalette = "vibrant";
  }

  const palette = colorPalettes[selectedPalette];

  // Improvement 1: Add complementary elements if sparse
  if (analysis.elementCount < 5) {
    const newElement = createIntelligentElement(state, palette, "complement");
    improvements.push(() => {
      state.elements.push(newElement);
      return `Added complementary ${newElement.type} element using ${selectedPalette} palette`;
    });
  }

  // Improvement 2: Enhance color harmony
  if (analysis.colorDiversity > 6) {
    improvements.push(() => {
      // Harmonize colors by replacing some with palette colors
      const elementsToHarmonize = state.elements.slice(0, 2);
      elementsToHarmonize.forEach(el => {
        el.fillStyle = palette[Math.floor(Math.random() * palette.length)];
      });
      return `Harmonized colors using ${selectedPalette} palette for better visual cohesion`;
    });
  }

  // Improvement 3: Add meaningful text based on issue context
  if (!analysis.hasText || Math.random() < 0.5) {
    const contextualText = generateContextualText(issueTitle, issueBody);
    const textElement = createIntelligentText(state, palette, contextualText);
    improvements.push(() => {
      state.elements.push(textElement);
      return `Added contextual text: "${contextualText}"`;
    });
  }

  // Improvement 4: Optimize composition and balance
  if (analysis.densityScore > 0.5) {
    improvements.push(() => {
      // Spread elements for better composition
      const elementsToMove = state.elements.slice(0, 2);
      elementsToMove.forEach(el => {
        const newPos = calculateBalancedPosition(state, el);
        el.x = newPos.x;
        el.y = newPos.y;
      });
      return `Rebalanced composition for better visual harmony`;
    });
  }

  // Improvement 5: Add artistic enhancement based on generation
  if (state.generation % 3 === 0) {
    const enhancement = createArtisticEnhancement(state, palette);
    improvements.push(() => {
      state.elements.push(enhancement);
      return `Added artistic enhancement: ${enhancement.type} with ${selectedPalette} styling`;
    });
  }

  return improvements;
}

// Element creation functions now imported from shared utilities

function generateContextualText(title, body) {
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

function calculateBalancedPosition(state, element) {
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

// Main execution
console.log("🎨 Copilot analyzing artwork...");
const analysis = analyzeArtwork(currentState);
console.log("Analysis:", analysis);

const improvements = generateCopilotImprovements(currentState, analysis);
console.log(`Generated ${improvements.length} intelligent improvements`);

// Apply 1-3 improvements based on analysis
const numImprovements = Math.min(
  improvements.length,
  1 + Math.floor(Math.random() * 2)
);
const appliedImprovements = [];

for (let i = 0; i < numImprovements; i++) {
  const improvementIndex = Math.floor(Math.random() * improvements.length);
  const result = improvements[improvementIndex]();
  appliedImprovements.push(result);
  improvements.splice(improvementIndex, 1); // Remove to avoid duplicates
}

// Update generation and timestamp
currentState.generation++;
currentState.lastUpdated = new Date().toISOString();

console.log("Applied Copilot improvements:", appliedImprovements);

// Write back the updated state to the TypeScript file
writeArtworkState(currentState, artworkTsPath);
console.log(
  `✅ Copilot updated artwork to generation ${currentState.generation}`
);
