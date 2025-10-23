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
  "canvas": {
    "width": 800,
    "height": 600,
    "background": "#1a1a1a"
  },
  "elements": [
    {
      "type": "rectangle",
      "x": 50,
      "y": 50,
      "width": 200,
      "height": 100,
      "fillStyle": "#e67e22",
      "id": "rect1"
    },
    {
      "type": "text",
      "x": 416,
      "y": 334,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.436266329126586,
      "rotation": 355.9622110200677,
      "opacity": 0.7234940184719327,
      "shadow": {
        "blur": 16.687087740396194,
        "color": "#d3540040",
        "offsetX": -4.199353721805403,
        "offsetY": 0.07264652680127437
      },
      "id": "rotated_triangle_1761189618129"
    },
    {
      "type": "triangle",
      "x": 131.37047009811295,
      "y": 199.37047009811295,
      "size": 72.37047009811296,
      "fillStyle": "#e74c3c",
      "id": "triangle_1761189618130"
    }
  ],
  "generation": 2,
  "lastUpdated": "2025-10-23T03:20:18.130Z",
  "cycleStarted": "2025-10-23T02:33:03.243Z"
};