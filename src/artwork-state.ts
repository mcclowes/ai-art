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
      "x": 82,
      "y": 334,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 32,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 63.97305610301271,
        "centerX": 0.3660980993202287,
        "centerY": 0.40315138198503353
      },
      "shadow": {
        "blur": 15.880291140456052,
        "color": "#d3540040",
        "offsetX": -3.9572466862352162,
        "offsetY": 1.6111255169292305
      },
      "opacity": 0.7712827142457442,
      "id": "gradient_circle_1756949554665"
    },
    {
      "type": "triangle",
      "x": 79.2361984511839,
      "y": 199.2361984511839,
      "size": 79.2361984511839,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756952977967"
    }
  ],
  "generation": 3,
  "lastUpdated": "2025-09-04T02:29:37.967Z",
  "cycleStarted": "2025-09-04T00:19:55.543Z"
};