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
      "id": "element_1755735641714",
      "shadow": {
        "blur": 16.054463850433535,
        "color": "#d3540040",
        "offsetX": 0.02065527438437975,
        "offsetY": -3.841204487166918
      },
      "opacity": 0.7074239866173868
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 243.46727906793808,
      "height": 77.16223665106472,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.240719833691605,
      "opacity": 0.8,
      "id": "curve_1755739970600"
    }
  ],
  "generation": 3,
  "lastUpdated": "2025-08-21T01:32:50.600Z",
  "cycleStarted": "2025-08-20T23:04:48.875Z"
};