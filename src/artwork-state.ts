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
      "type": "text",
      "x": 82,
      "y": 184,
      "text": "Create",
      "font": "30.913945952897787px Arial",
      "fillStyle": "#d35400",
      "id": "text_1760584816462"
    },
    {
      "type": "rectangle",
      "x": 17,
      "y": 310,
      "width": 97.90880424637102,
      "height": 78.35304058744968,
      "fillStyle": "#f1c40f",
      "id": "element_1760584816463"
    }
  ],
  "generation": 2,
  "lastUpdated": "2025-10-16T03:20:16.463Z",
  "cycleStarted": "2025-10-16T02:32:55.705Z"
};