export interface ArtworkElement {
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
export const artworkState: ArtworkState = {
  canvas: {
    width: 800,
    height: 600,
    background: "#1a1a1a",
  },
  elements: [
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
    {
      type: "circle",
      x: 65.31337506670452,
      y: 199.3133750667045,
      radius: 63.31337506670452,
      fillStyle: "#f39c12",
      id: "circle_1754517914171",
    },
    {
      type: "rectangle",
      x: 479.4375772558714,
      y: 209.17181705809645,
      width: 30,
      height: 40,
      fillStyle: "#f39c12",
      pattern: "waves",
      opacity: 0.8803257944860068,
      id: "pattern_rect_1754517914172",
    },
    {
      type: "circle",
      x: 65.6130987885166,
      y: 348.6130987885166,
      radius: 56.613098788516595,
      fillStyle: "#d35400",
      id: "circle_1754521534434",
    },
    {
      type: "triangle",
      x: 131.17368139797816,
      y: 548.1736813979782,
      size: 40.17368139797815,
      fillStyle: "#d35400",
      id: "triangle_1754521534434",
    },
  ],
  generation: 3,
  lastUpdated: "2025-08-06T23:05:34.434Z",
  cycleStarted: "2025-08-06T21:05:04.268Z",
};
