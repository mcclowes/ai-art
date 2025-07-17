const fs = require("fs");
const path = require("path");

/**
 * Standardized function to write artwork state to the TypeScript file
 * This ensures consistent formatting and reduces merge conflicts
 */
function writeArtworkState(artworkState, artworkTsPath) {
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
  cycleStarted: string;
}

// Artwork state data
export const artworkState: ArtworkState = ${JSON.stringify(artworkState, null, 2)};`;

  fs.writeFileSync(artworkTsPath, newContent);
  console.log(`Updated artwork to generation ${artworkState.generation}`);
}

module.exports = { writeArtworkState };
