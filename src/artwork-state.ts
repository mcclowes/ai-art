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
      "fillStyle": "#e74c3c",
      "id": "rect1"
    },
    {
      "type": "text",
      "x": 50.15825594441219,
      "y": 403.9367413233695,
      "text": "Making",
      "font": "26.82886155053166px Arial",
      "fillStyle": "#2ecc71",
      "id": "copilot_text_1752726527797"
    },
    {
      "type": "rectangle",
      "x": 4.878862579303302,
      "y": 113.67673561458005,
      "width": 67.1886292641572,
      "height": 41.52257288524915,
      "fillStyle": "#3498db",
      "id": "copilot_complement_1752726527796"
    },
    {
      "type": "triangle",
      "x": 84.22294213343332,
      "y": 199.22294213343332,
      "size": 84.22294213343332,
      "fillStyle": "#3498db",
      "id": "triangle_1752745596492"
    },
    {
      "type": "circle",
      "x": 65.49117662105412,
      "y": 548.4911766210541,
      "radius": 42.49117662105412,
      "fillStyle": "#3498db",
      "id": "circle_1752745596492"
    },
    {
      "type": "triangle",
      "x": 331.54357108158706,
      "y": 48.54357108158703,
      "size": 47.54357108158703,
      "fillStyle": "#9b59b6",
      "id": "triangle_1752745827050"
    },
    {
      "type": "text",
      "x": 282,
      "y": 234,
      "text": "Harmony",
      "font": "26.56034663032828px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1752745827050"
    }
  ],
  "generation": 5,
  "lastUpdated": "2025-07-17T09:50:27.050Z",
  "cycleStarted": "2025-07-16T19:12:58.892Z"
};