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
      "id": "rect1",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 271.3795934992062,
        "centerX": 0.6506742407564072,
        "centerY": 0.5552980191898469
      },
      "shadow": {
        "blur": 15.274628497008905,
        "color": "#e67e2240",
        "offsetX": 0.24587704508647334,
        "offsetY": -2.539057628856314
      }
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
      "x": 131.1058263805458,
      "y": 248.1058263805458,
      "size": 42.10582638054581,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757554384103"
    },
    {
      "type": "triangle",
      "x": 131.12564896607023,
      "y": 349.12564896607023,
      "size": 42.12564896607023,
      "fillStyle": "#d35400",
      "id": "triangle_1757557889984"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 334.3918988035274,
        "centerX": 0.39886793247341545,
        "centerY": 0.31590208273966774
      },
      "shadow": {
        "blur": 17.316537327212636,
        "color": "#FF6B3540",
        "offsetX": 2.6494957311195177,
        "offsetY": 4.903988747004666
      },
      "opacity": 0.9612031388001051,
      "id": "gradient_circle_1757557889984"
    },
    {
      "type": "rectangle",
      "x": 265.5624227441286,
      "y": 0,
      "width": 80,
      "height": 712,
      "fillStyle": "#f39c12",
      "pattern": "stripes",
      "opacity": 0.8407963324597593,
      "id": "pattern_rect_1757560649080"
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Aesthetic",
      "font": "33.92740072464659px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1757560649080"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-09-11T03:17:29.080Z",
  "cycleStarted": "2025-09-11T00:20:59.429Z"
};