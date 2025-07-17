#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the current artwork state from the TypeScript file
const artworkTsPath = path.join(__dirname, 'src', 'artwork-state.ts');
const artworkContent = fs.readFileSync(artworkTsPath, 'utf8');

// Extract the artwork state data from the TypeScript file
const match = artworkContent.match(/export const artworkState: ArtworkState = ([\s\S]*?);$/m);
if (!match) {
  console.error('Could not parse artwork state from TypeScript file');
  process.exit(1);
}

const currentState = eval(`(${match[1]})`);

// Intelligent color palette suggestions based on color theory
const colorPalettes = {
  warm: ['#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
  cool: ['#00d2d3', '#1dd1a1', '#341f97', '#706fd3', '#40407a'],
  earth: ['#8e44ad', '#27ae60', '#e67e22', '#f39c12', '#d35400'],
  monochrome: ['#2f3640', '#57606f', '#a4b0be', '#fff', '#000'],
  pastel: ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'],
  vibrant: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6']
};

// Analyze current artwork and suggest improvements
function analyzeArtwork(state) {
  const analysis = {
    elementCount: state.elements.length,
    hasText: state.elements.some(el => el.type === 'text'),
    hasShapes: state.elements.some(el => el.type === 'rectangle'),
    colorDiversity: [...new Set(state.elements.map(el => el.fillStyle))].length,
    densityScore: state.elements.length / ((state.canvas.width * state.canvas.height) / 10000),
    averageSize: state.elements.filter(el => el.width && el.height)
      .reduce((sum, el) => sum + (el.width * el.height), 0) / 
      state.elements.filter(el => el.width && el.height).length || 0
  };
  
  return analysis;
}

// Generate intelligent improvements based on analysis
function generateCopilotImprovements(state, analysis) {
  const improvements = [];
  const issueTitle = process.env.ISSUE_TITLE || '';
  const issueBody = process.env.ISSUE_BODY || '';
  
  // Choose color palette based on issue context or current state
  let selectedPalette = 'vibrant';
  if (issueTitle.toLowerCase().includes('calm') || issueBody.toLowerCase().includes('peaceful')) {
    selectedPalette = 'pastel';
  } else if (issueTitle.toLowerCase().includes('nature') || issueBody.toLowerCase().includes('organic')) {
    selectedPalette = 'earth';
  } else if (issueTitle.toLowerCase().includes('cool') || issueBody.toLowerCase().includes('blue')) {
    selectedPalette = 'cool';
  } else if (issueTitle.toLowerCase().includes('warm') || issueBody.toLowerCase().includes('fire')) {
    selectedPalette = 'warm';
  }
  
  const palette = colorPalettes[selectedPalette];
  
  // Improvement 1: Add complementary elements if sparse
  if (analysis.elementCount < 5) {
    const newElement = createIntelligentElement(state, palette, 'complement');
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

function createIntelligentElement(state, palette, purpose) {
  const { width, height } = state.canvas;
  const color = palette[Math.floor(Math.random() * palette.length)];
  
  // Create element with golden ratio proportions
  const size = Math.min(width, height) * 0.1 * (1 + Math.random() * 0.618);
  
  return {
    type: 'rectangle',
    x: Math.random() * (width - size),
    y: Math.random() * (height - size),
    width: size,
    height: size * 0.618, // Golden ratio
    fillStyle: color,
    id: `copilot_${purpose}_${Date.now()}`
  };
}

function createIntelligentText(state, palette, text) {
  const { width, height } = state.canvas;
  const color = palette[Math.floor(Math.random() * palette.length)];
  
  return {
    type: 'text',
    x: Math.random() * (width - 100),
    y: 50 + Math.random() * (height - 100),
    text: text,
    font: `${18 + Math.random() * 16}px Arial`,
    fillStyle: color,
    id: `copilot_text_${Date.now()}`
  };
}

function createArtisticEnhancement(state, palette) {
  const { width, height } = state.canvas;
  const color = palette[Math.floor(Math.random() * palette.length)];
  
  // Create an artistic element with interesting proportions
  const baseSize = Math.min(width, height) * 0.08;
  
  return {
    type: 'rectangle',
    x: Math.random() * (width - baseSize * 2),
    y: Math.random() * (height - baseSize * 2),
    width: baseSize * (1 + Math.random()),
    height: baseSize * (0.5 + Math.random() * 1.5),
    fillStyle: color,
    id: `copilot_enhancement_${Date.now()}`
  };
}

function generateContextualText(title, body) {
  const words = [
    'Evolve', 'Create', 'Transform', 'Inspire', 'Harmony',
    'Beauty', 'Vision', 'Art', 'Dream', 'Flow', 'Grace',
    'Light', 'Wonder', 'Magic', 'Spirit', 'Energy'
  ];
  
  // Try to extract meaningful words from the issue
  const titleWords = title.toLowerCase().match(/\b\w+\b/g) || [];
  const bodyWords = body.toLowerCase().match(/\b\w+\b/g) || [];
  
  const meaningfulWords = [...titleWords, ...bodyWords].filter(word => 
    word.length > 4 && !['that', 'this', 'with', 'from', 'they', 'have', 'been', 'will'].includes(word)
  );
  
  if (meaningfulWords.length > 0) {
    const word = meaningfulWords[Math.floor(Math.random() * meaningfulWords.length)];
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
    y: [height / 3, (height * 2) / 3]
  };
  
  const targetX = thirds.x[Math.floor(Math.random() * 2)];
  const targetY = thirds.y[Math.floor(Math.random() * 2)];
  
  return {
    x: Math.max(padding, Math.min(targetX + (Math.random() - 0.5) * 100, width - padding)),
    y: Math.max(padding, Math.min(targetY + (Math.random() - 0.5) * 100, height - padding))
  };
}

// Main execution
console.log('🎨 Copilot analyzing artwork...');
const analysis = analyzeArtwork(currentState);
console.log('Analysis:', analysis);

const improvements = generateCopilotImprovements(currentState, analysis);
console.log(`Generated ${improvements.length} intelligent improvements`);

// Apply 1-3 improvements based on analysis
const numImprovements = Math.min(improvements.length, 1 + Math.floor(Math.random() * 2));
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

console.log('Applied Copilot improvements:', appliedImprovements);

// Write back the updated state to the TypeScript file
const newContent = `export interface ArtworkElement {
  type: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  fillStyle: string;
  id: string;
  text?: string;
  font?: string;
}

export interface ArtworkState {
  canvas: {
    width: number;
    height: number;
    background: string;
  };
  elements: ArtworkElement[];
  generation: number;
  lastUpdated: string;
}

// Artwork state data
export const artworkState: ArtworkState = ${JSON.stringify(currentState, null, 2)};`;

fs.writeFileSync(artworkTsPath, newContent);
console.log(`✅ Copilot updated artwork to generation ${currentState.generation}`);