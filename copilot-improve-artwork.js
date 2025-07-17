#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { writeArtworkState } = require('./utils/artwork-writer');

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
  vibrant: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'],
  ocean: ['#006994', '#4682B4', '#87CEEB', '#20B2AA', '#008B8B'],
  sunset: ['#FF6B35', '#F7931E', '#FFD23F', '#C5DB8C', '#87CEEB']
};

// Advanced gradient combinations
const gradientCombinations = {
  warm: [
    ['#FF6B35', '#F7931E', '#FFD23F'],
    ['#e74c3c', '#f39c12', '#f1c40f'],
    ['#d35400', '#e67e22', '#f39c12']
  ],
  cool: [
    ['#2ecc71', '#3498db', '#9b59b6'],
    ['#1abc9c', '#34495e', '#2c3e50'],
    ['#006994', '#4682B4', '#87CEEB']
  ],
  sunset: [
    ['#FF6B35', '#F7931E', '#FFD23F'],
    ['#FF4500', '#FF8C00', '#FFA500'],
    ['#DC143C', '#FF69B4', '#FF1493']
  ],
  ocean: [
    ['#006994', '#4682B4', '#87CEEB'],
    ['#20B2AA', '#008B8B', '#2F4F4F'],
    ['#0077BE', '#0099CC', '#66CCFF']
  ],
  vibrant: [
    ['#e74c3c', '#f39c12', '#f1c40f'],
    ['#2ecc71', '#3498db', '#9b59b6'],
    ['#FF6B35', '#F7931E', '#FFD23F']
  ],
  earth: [
    ['#8B4513', '#A0522D', '#D2B48C'],
    ['#8e44ad', '#27ae60', '#e67e22'],
    ['#654321', '#8B4513', '#A0522D']
  ],
  pastel: [
    ['#ffb3ba', '#ffdfba', '#ffffba'],
    ['#baffc9', '#bae1ff', '#c9baff'],
    ['#f8d7da', '#d4edda', '#d1ecf1']
  ]
};

// Generate sophisticated gradient
function generateGradient(palette) {
  const paletteGradients = gradientCombinations[palette] || gradientCombinations.warm;
  const gradientColors = paletteGradients[Math.floor(Math.random() * paletteGradients.length)];
  
  return {
    type: Math.random() > 0.5 ? 'linear' : 'radial',
    colors: gradientColors,
    direction: Math.random() * 360,
    centerX: 0.3 + Math.random() * 0.4,
    centerY: 0.3 + Math.random() * 0.4
  };
}

// Generate sophisticated shadow
function generateShadow(color) {
  return {
    blur: 5 + Math.random() * 15,
    color: color + '40',
    offsetX: -5 + Math.random() * 10,
    offsetY: -5 + Math.random() * 10
  };
}

// Golden ratio and fibonacci sequence
const goldenRatio = 1.618;
const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function getGoldenRatioPosition(state, elementWidth, elementHeight) {
  const width = state.canvas.width;
  const height = state.canvas.height;
  
  const goldenX = [width / goldenRatio, width - (width / goldenRatio)];
  const goldenY = [height / goldenRatio, height - (height / goldenRatio)];
  
  const x = goldenX[Math.floor(Math.random() * goldenX.length)] - elementWidth / 2;
  const y = goldenY[Math.floor(Math.random() * goldenY.length)] - elementHeight / 2;
  
  return {
    x: Math.max(0, Math.min(x, width - elementWidth)),
    y: Math.max(0, Math.min(y, height - elementHeight))
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
  } else if (issueTitle.toLowerCase().includes('ocean') || issueBody.toLowerCase().includes('water')) {
    selectedPalette = 'ocean';
  } else if (issueTitle.toLowerCase().includes('sunset') || issueBody.toLowerCase().includes('golden')) {
    selectedPalette = 'sunset';
  } else if (issueTitle.toLowerCase().includes('vibrant') || issueBody.toLowerCase().includes('colorful')) {
    selectedPalette = 'vibrant';
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
  
  // Create element with golden ratio proportions and positioning
  const size = getFibonacciSize() * 8;
  const pos = getGoldenRatioPosition(state, size, size * 0.618);
  
  // Choose element type based on purpose
  const elementTypes = ['rectangle', 'circle', 'triangle'];
  const elementType = elementTypes[Math.floor(Math.random() * elementTypes.length)];
  
  const baseElement = {
    type: elementType,
    x: pos.x,
    y: pos.y,
    fillStyle: color,
    id: `copilot_${purpose}_${Date.now()}`,
    opacity: 0.7 + Math.random() * 0.3
  };
  
  // Add type-specific properties
  if (elementType === 'rectangle') {
    baseElement.width = size;
    baseElement.height = size * 0.618; // Golden ratio
    
    // Add advanced visual effects
    if (Math.random() > 0.6) {
      baseElement.gradient = generateGradient(getSelectedPalette(palette));
    }
    if (Math.random() > 0.7) {
      baseElement.shadow = generateShadow(color);
    }
    if (Math.random() > 0.8) {
      const patterns = ['dots', 'stripes', 'waves'];
      baseElement.pattern = patterns[Math.floor(Math.random() * patterns.length)];
    }
  } else if (elementType === 'circle') {
    baseElement.radius = size * 0.5;
    baseElement.x = pos.x + baseElement.radius;
    baseElement.y = pos.y + baseElement.radius;
    
    // Add gradient effects to circles
    if (Math.random() > 0.5) {
      baseElement.gradient = generateGradient(getSelectedPalette(palette));
    }
    if (Math.random() > 0.7) {
      baseElement.shadow = generateShadow(color);
    }
  } else if (elementType === 'triangle') {
    baseElement.size = size * 0.8;
    baseElement.x = pos.x + baseElement.size;
    baseElement.y = pos.y + baseElement.size;
    
    // Add rotation and effects
    if (Math.random() > 0.6) {
      baseElement.rotation = Math.random() * 360;
    }
    if (Math.random() > 0.7) {
      baseElement.shadow = generateShadow(color);
      baseElement.strokeStyle = color;
      baseElement.strokeWidth = 1 + Math.random() * 2;
    }
  }
  
  return baseElement;
}

function createIntelligentText(state, palette, text) {
  const { width, height } = state.canvas;
  const color = palette[Math.floor(Math.random() * palette.length)];
  
  // Use golden ratio positioning for text
  const pos = getGoldenRatioPosition(state, 120, 40);
  
  const textElement = {
    type: 'text',
    x: pos.x,
    y: pos.y,
    text: text,
    font: `${18 + Math.random() * 16}px Arial`,
    fillStyle: color,
    id: `copilot_text_${Date.now()}`,
    opacity: 0.8 + Math.random() * 0.2
  };
  
  // Add advanced text effects
  if (Math.random() > 0.6) {
    textElement.gradient = generateGradient(getSelectedPalette(palette));
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

function createArtisticEnhancement(state, palette) {
  const { width, height } = state.canvas;
  const color = palette[Math.floor(Math.random() * palette.length)];
  
  // Create sophisticated artistic elements
  const enhancementTypes = ['gradient_rectangle', 'spiral', 'curve', 'pattern_circle'];
  const enhancementType = enhancementTypes[Math.floor(Math.random() * enhancementTypes.length)];
  
  const baseSize = getFibonacciSize() * 6;
  const pos = getGoldenRatioPosition(state, baseSize * 2, baseSize * 2);
  
  if (enhancementType === 'gradient_rectangle') {
    return {
      type: 'rectangle',
      x: pos.x,
      y: pos.y,
      width: baseSize * 1.5,
      height: baseSize,
      fillStyle: color,
      gradient: generateGradient(getSelectedPalette(palette)),
      shadow: generateShadow(color),
      opacity: 0.6 + Math.random() * 0.4,
      id: `copilot_enhancement_${Date.now()}`
    };
  } else if (enhancementType === 'spiral') {
    return {
      type: 'spiral',
      x: pos.x + baseSize,
      y: pos.y + baseSize,
      radius: baseSize,
      fillStyle: color,
      strokeStyle: color,
      strokeWidth: 2,
      opacity: 0.7,
      id: `copilot_spiral_${Date.now()}`
    };
  } else if (enhancementType === 'curve') {
    return {
      type: 'curve',
      x: pos.x,
      y: pos.y,
      width: baseSize * 2,
      height: baseSize,
      fillStyle: color,
      strokeStyle: color,
      strokeWidth: 3,
      opacity: 0.8,
      id: `copilot_curve_${Date.now()}`
    };
  } else {
    return {
      type: 'circle',
      x: pos.x + baseSize,
      y: pos.y + baseSize,
      radius: baseSize,
      fillStyle: color,
      pattern: 'dots',
      opacity: 0.6,
      id: `copilot_pattern_${Date.now()}`
    };
  }
}

function getSelectedPalette(palette) {
  // Determine palette name from colors
  const paletteNames = Object.keys(colorPalettes);
  for (const name of paletteNames) {
    if (colorPalettes[name].includes(palette[0])) {
      return name;
    }
  }
  return 'vibrant';
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
writeArtworkState(currentState, artworkTsPath);
console.log(`✅ Copilot updated artwork to generation ${currentState.generation}`);