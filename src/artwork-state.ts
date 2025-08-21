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
      "type": "rectangle",
      "x": 88,
      "y": 183,
      "width": 87.70818754631009,
      "height": 131.7904493874807,
      "fillStyle": "#d35400",
      "id": "element_1755735641714"
    },
    {
      "type": "rectangle",
      "x": 11,
      "y": 342,
      "width": 108.95532386779065,
      "height": 112.68610666401882,
      "fillStyle": "#d35400",
      "id": "element_1755735641714"
    }
  ],
  "generation": 2,
  "lastUpdated": "2025-08-21T00:20:41.714Z",
  "cycleStarted": "2025-08-20T23:04:48.875Z"
};