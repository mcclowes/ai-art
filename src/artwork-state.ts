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
      "fillStyle": "#2ecc71",
      "id": "rect1"
    },
    {
      "type": "triangle",
      "x": 85.22134177946546,
      "y": 248.22134177946546,
      "size": 85.22134177946546,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752727221786"
    },
    {
      "type": "rectangle",
      "x": 691.7557474043759,
      "y": 467.2383354380168,
      "width": 63.406346826868486,
      "height": 39.18512233900472,
      "fillStyle": "#e74c3c",
      "id": "copilot_complement_1752727229153"
    },
    {
      "type": "triangle",
      "x": 65.43510986076092,
      "y": 349.4351098607609,
      "size": 62.43510986076092,
      "fillStyle": "#f39c12",
      "id": "triangle_1752727309721"
    },
    {
      "type": "triangle",
      "x": 131.2030768365079,
      "y": 499.2030768365079,
      "size": 86.2030768365079,
      "fillStyle": "#f39c12",
      "id": "triangle_1752727309721"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-07-17T04:41:49.721Z",
  "cycleStarted": "2025-07-16T19:12:58.892Z"
};