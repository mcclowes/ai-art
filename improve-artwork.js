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

// Enhanced color palettes with better harmony
const colorPalettes = {
  warm: ['#e74c3c', '#f39c12', '#f1c40f', '#e67e22', '#d35400'],
  cool: ['#2ecc71', '#3498db', '#9b59b6', '#1abc9c', '#34495e'],
  monochrome: ['#2c3e50', '#34495e', '#7f8c8d', '#95a5a6', '#bdc3c7'],
  vibrant: ['#e74c3c', '#f39c12', '#2ecc71', '#3498db', '#9b59b6']
};

// Artwork analysis functions
function analyzeArtwork(state) {
  const analysis = {
    elementCount: state.elements.length,
    colorDistribution: {},
    elementDensity: {},
    averageSize: 0,
    coverage: 0
  };

  // Analyze color distribution
  state.elements.forEach(element => {
    if (element.fillStyle) {
      analysis.colorDistribution[element.fillStyle] = (analysis.colorDistribution[element.fillStyle] || 0) + 1;
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
    if (element.type === 'rectangle' && element.width && element.height) {
      totalArea += element.width * element.height;
    } else if (element.type === 'circle' && element.radius) {
      totalArea += Math.PI * element.radius * element.radius;
    } else if (element.type === 'triangle' && element.size) {
      totalArea += (Math.sqrt(3) / 4) * element.size * element.size;
    }
  });

  const shapeElements = state.elements.filter(e => e.type !== 'text');
  analysis.averageSize = shapeElements.length > 0 ? totalArea / shapeElements.length : 0;
  analysis.coverage = totalArea / (state.canvas.width * state.canvas.height);

  return analysis;
}

function getHarmoniousColor(existingColors) {
  // Determine the dominant color palette
  const allColors = Object.values(colorPalettes).flat();
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
  const unusedColors = paletteColors.filter(color => !existingColors.includes(color));
  
  return unusedColors.length > 0 ? 
    unusedColors[Math.floor(Math.random() * unusedColors.length)] :
    paletteColors[Math.floor(Math.random() * paletteColors.length)];
}

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
    const [sectionX, sectionY] = bestSection.split(',').map(Number);
    
    // Use rule of thirds for positioning within the section
    const ruleOfThirds = [0.33, 0.66];
    const thirdX = ruleOfThirds[Math.floor(Math.random() * ruleOfThirds.length)];
    const thirdY = ruleOfThirds[Math.floor(Math.random() * ruleOfThirds.length)];
    
    const x = Math.max(0, Math.min(
      (sectionX * sectionWidth) + (sectionWidth * thirdX) - (elementWidth / 2),
      state.canvas.width - elementWidth
    ));
    
    const y = Math.max(0, Math.min(
      (sectionY * sectionHeight) + (sectionHeight * thirdY) - (elementHeight / 2),
      state.canvas.height - elementHeight
    ));
    
    return { x: Math.floor(x), y: Math.floor(y) };
  }

  // Fallback to random position if analysis fails
  return {
    x: Math.floor(Math.random() * (state.canvas.width - elementWidth)),
    y: Math.floor(Math.random() * (state.canvas.height - elementHeight))
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
Colors: ${Object.keys(analysis.colorDistribution).join(', ')}
Generation: ${state.generation}
`;

    // Note: This is a placeholder for OpenAI integration
    // In a real implementation, you would call the OpenAI API here
    console.log('OpenAI integration placeholder - artwork description:', artworkDescription);
    
    return {
      suggestion: 'balance',
      confidence: 0.8,
      reasoning: 'AI analysis suggests improving visual balance'
    };
  } catch (error) {
    console.log('OpenAI integration error:', error.message);
    return null;
  }
}

// Enhanced intelligent improvement with optional AI feedback
async function enhancedIntelligentImproveArtwork(state) {
  const analysis = analyzeArtwork(state);
  const existingColors = Object.keys(analysis.colorDistribution);
  
  // Get AI feedback if available
  const aiFeedback = await getAIFeedback(state);
  
  // Adjust improvement weights based on AI feedback
  let balanceWeight = 1.5;
  let colorWeight = 1;
  let addWeight = 2;
  
  if (aiFeedback) {
    console.log('AI feedback:', aiFeedback);
    if (aiFeedback.suggestion === 'balance') {
      balanceWeight *= 2;
    } else if (aiFeedback.suggestion === 'color') {
      colorWeight *= 2;
    }
  }
  
  // Define improvement strategies with AI-influenced weights
  const improvements = [
    // Add a new rectangle with optimal positioning and color harmony
    {
      name: 'add_rectangle',
      weight: (analysis.elementCount < 8 ? 2 : 1) * addWeight,
      action: () => {
        const width = 60 + Math.random() * 80;
        const height = 60 + Math.random() * 80;
        const pos = getOptimalPosition(state, width, height);
        const color = getHarmoniousColor(existingColors);
        
        const newElement = {
          type: 'rectangle',
          x: pos.x,
          y: pos.y,
          width: width,
          height: height,
          fillStyle: color,
          id: `element_${Date.now()}`
        };
        state.elements.push(newElement);
        return `Added harmonious rectangle (${color}) at optimal position (${pos.x}, ${pos.y})`;
      }
    },
    
    // Add a new circle with optimal positioning and color harmony
    {
      name: 'add_circle',
      weight: (analysis.elementCount < 8 ? 2 : 1) * addWeight,
      action: () => {
        const radius = 30 + Math.random() * 50;
        const pos = getOptimalPosition(state, radius * 2, radius * 2);
        const color = getHarmoniousColor(existingColors);
        
        const newElement = {
          type: 'circle',
          x: pos.x + radius, // Center the circle
          y: pos.y + radius,
          radius: radius,
          fillStyle: color,
          id: `circle_${Date.now()}`
        };
        state.elements.push(newElement);
        return `Added harmonious circle (${color}) at optimal position (${pos.x + radius}, ${pos.y + radius})`;
      }
    },
    
    // Add a new triangle with optimal positioning and color harmony
    {
      name: 'add_triangle',
      weight: (analysis.elementCount < 8 ? 2 : 1) * addWeight,
      action: () => {
        const size = 40 + Math.random() * 60;
        const pos = getOptimalPosition(state, size * 2, size * 2);
        const color = getHarmoniousColor(existingColors);
        
        const newElement = {
          type: 'triangle',
          x: pos.x + size, // Center the triangle
          y: pos.y + size,
          size: size,
          fillStyle: color,
          id: `triangle_${Date.now()}`
        };
        state.elements.push(newElement);
        return `Added harmonious triangle (${color}) at optimal position (${pos.x + size}, ${pos.y + size})`;
      }
    },
    
    // Improve color harmony of existing elements
    {
      name: 'harmonize_color',
      weight: (Object.keys(analysis.colorDistribution).length > 3 ? 2 : 1) * colorWeight,
      action: () => {
        const nonTextElements = state.elements.filter(e => e.type !== 'text');
        if (nonTextElements.length > 0) {
          const elementIndex = Math.floor(Math.random() * nonTextElements.length);
          const element = nonTextElements[elementIndex];
          const oldColor = element.fillStyle;
          element.fillStyle = getHarmoniousColor(existingColors);
          return `Harmonized ${element.id} color from ${oldColor} to ${element.fillStyle}`;
        }
        return null;
      }
    },
    
    // Add meaningful text with better positioning
    {
      name: 'add_text',
      weight: (state.elements.filter(e => e.type === 'text').length < 3 ? 2 : 0.5) * addWeight,
      action: () => {
        const pos = getOptimalPosition(state, 100, 30);
        const artWords = ['Harmony', 'Balance', 'Evolve', 'Create', 'Inspire', 'Transform', 'Aesthetic', 'Vision'];
        const text = artWords[Math.floor(Math.random() * artWords.length)];
        const fontSize = 18 + Math.random() * 16;
        const color = getHarmoniousColor(existingColors);
        
        const newElement = {
          type: 'text',
          x: pos.x,
          y: pos.y,
          text: text,
          font: `${fontSize}px Arial`,
          fillStyle: color,
          id: `text_${Date.now()}`
        };
        state.elements.push(newElement);
        return `Added meaningful text "${text}" with harmonious color at (${pos.x}, ${pos.y})`;
      }
    },
    
    // Reposition elements for better balance
    {
      name: 'rebalance_position',
      weight: (state.elements.length > 3 ? 1.5 : 0.5) * balanceWeight,
      action: () => {
        if (state.elements.length > 0) {
          const elementIndex = Math.floor(Math.random() * state.elements.length);
          const element = state.elements[elementIndex];
          const oldPos = {x: element.x, y: element.y};
          
          const width = element.width || 100;
          const height = element.height || 30;
          const newPos = getOptimalPosition(state, width, height);
          
          // Only move if the new position is significantly different
          if (Math.abs(newPos.x - oldPos.x) > 50 || Math.abs(newPos.y - oldPos.y) > 50) {
            element.x = newPos.x;
            element.y = newPos.y;
            return `Rebalanced ${element.id} from (${oldPos.x}, ${oldPos.y}) to (${newPos.x}, ${newPos.y}) ${aiFeedback ? '(AI-guided)' : ''}`;
          }
        }
        return null;
      }
    }
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

// Apply intelligent improvements with optional AI enhancement
async function main() {
  const improvements = await enhancedIntelligentImproveArtwork(currentState);
  console.log('Applied intelligent improvements:', improvements);

  // Display analysis for debugging
  const analysis = analyzeArtwork(currentState);
  console.log('Artwork analysis:', {
    elements: analysis.elementCount,
    coverage: `${(analysis.coverage * 100).toFixed(1)}%`,
    colors: Object.keys(analysis.colorDistribution).length,
    generation: currentState.generation
  });

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
  radius?: number; // for circles
  size?: number; // for triangles
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
  console.log(`Updated artwork to generation ${currentState.generation}`);
}

// Run the main function
main().catch(console.error);