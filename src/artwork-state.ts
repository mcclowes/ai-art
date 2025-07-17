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
      "fillStyle": "#f39c12",
      "id": "copilot_complement_1752726527796"
    },
    {
      "type": "rectangle",
      "x": 665.8152056986227,
      "y": 47.882204078584415,
      "width": 68.00021899592689,
      "height": 42.02413533948282,
      "fillStyle": "#f1c40f",
      "id": "copilot_complement_1752745422409"
    }
  ],
  "generation": 3,
  "lastUpdated": "2025-07-17T09:43:42.409Z",
  "cycleStarted": "2025-07-16T19:12:58.892Z"
};