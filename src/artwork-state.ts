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
      "fillStyle": "#e67e22",
      "id": "rect1"
    },
    {
      "type": "text",
      "x": 70,
      "y": 120,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "rectangle",
      "x": 151,
      "y": 82,
      "width": 130.12145536400706,
      "height": 57.07535692995391,
      "fillStyle": "#e74c3c",
      "id": "element_1752677536165"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 310,
      "width": 67.28405940904902,
      "height": 77.70774308605628,
      "fillStyle": "#f1c40f",
      "id": "element_1752677671341"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-07-16T14:54:59.767Z"
};