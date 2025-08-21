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
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.4375644184008678,
      "rotation": 336.2277794451593,
      "opacity": 0.9375781339078524,
      "shadow": {
        "blur": 12.602484776472345,
        "color": "#f1c40f40",
        "offsetX": -4.442643796775602,
        "offsetY": 4.622924894283129
      },
      "id": "rotated_triangle_1755743650123"
    },
    {
      "type": "rectangle",
      "x": 358.4375772558714,
      "y": 331.82818294190355,
      "width": 272,
      "height": 78,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 119.93290338228786,
        "centerX": 0.6437654222432858,
        "centerY": 0.39323700421968877
      },
      "shadow": {
        "blur": 16.342647342766355,
        "color": "#e74c3c40",
        "offsetX": -4.852523831773827,
        "offsetY": -1.4593439131774044
      },
      "opacity": 0.7783251562673661,
      "id": "gradient_rect_1755743650123"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-08-21T02:34:10.123Z",
  "cycleStarted": "2025-08-20T23:04:48.875Z"
};