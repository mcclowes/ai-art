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

// Improvement functions
const colors = ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#e67e22', '#1abc9c'];
const shapes = ['rectangle', 'circle'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomPosition(canvasWidth, canvasHeight) {
  return {
    x: Math.floor(Math.random() * (canvasWidth - 100)),
    y: Math.floor(Math.random() * (canvasHeight - 100))
  };
}

function improveArtwork(state) {
  const improvements = [
    // Add a new shape
    () => {
      const pos = getRandomPosition(state.canvas.width, state.canvas.height);
      const newElement = {
        type: 'rectangle',
        x: pos.x,
        y: pos.y,
        width: 50 + Math.random() * 100,
        height: 50 + Math.random() * 100,
        fillStyle: getRandomColor(),
        id: `element_${Date.now()}`
      };
      state.elements.push(newElement);
      return `Added new rectangle at (${pos.x}, ${pos.y})`;
    },
    
    // Change color of existing element
    () => {
      if (state.elements.length > 0) {
        const elementIndex = Math.floor(Math.random() * state.elements.length);
        const element = state.elements[elementIndex];
        if (element.type !== 'text') {
          element.fillStyle = getRandomColor();
          return `Changed color of ${element.id} to ${element.fillStyle}`;
        }
      }
      return null;
    },
    
    // Add text element
    () => {
      const pos = getRandomPosition(state.canvas.width, state.canvas.height);
      const texts = ['Art!', 'Creative', 'Evolving', 'Dynamic', 'Beautiful', 'Unique'];
      const text = texts[Math.floor(Math.random() * texts.length)];
      const newElement = {
        type: 'text',
        x: pos.x,
        y: pos.y,
        text: text,
        font: `${16 + Math.random() * 20}px Arial`,
        fillStyle: getRandomColor(),
        id: `text_${Date.now()}`
      };
      state.elements.push(newElement);
      return `Added text "${text}" at (${pos.x}, ${pos.y})`;
    },
    
    // Move an element
    () => {
      if (state.elements.length > 0) {
        const elementIndex = Math.floor(Math.random() * state.elements.length);
        const element = state.elements[elementIndex];
        const oldPos = {x: element.x, y: element.y};
        const newPos = getRandomPosition(state.canvas.width, state.canvas.height);
        element.x = newPos.x;
        element.y = newPos.y;
        return `Moved ${element.id} from (${oldPos.x}, ${oldPos.y}) to (${newPos.x}, ${newPos.y})`;
      }
      return null;
    }
  ];
  
  // Apply 1-2 improvements
  const numImprovements = 1 + Math.floor(Math.random() * 2);
  const appliedImprovements = [];
  
  for (let i = 0; i < numImprovements; i++) {
    const improvementIndex = Math.floor(Math.random() * improvements.length);
    const result = improvements[improvementIndex]();
    if (result) {
      appliedImprovements.push(result);
    }
  }
  
  // Update generation and timestamp
  state.generation++;
  state.lastUpdated = new Date().toISOString();
  
  return appliedImprovements;
}

// Apply improvements
const improvements = improveArtwork(currentState);
console.log('Applied improvements:', improvements);

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
console.log(`Updated artwork to generation ${currentState.generation}`);