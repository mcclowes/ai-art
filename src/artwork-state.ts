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
      "type": "circle",
      "x": 65.31337506670452,
      "y": 199.3133750667045,
      "radius": 63.31337506670452,
      "fillStyle": "#f39c12",
      "id": "circle_1754517914171"
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 209.17181705809645,
      "width": 30,
      "height": 40,
      "fillStyle": "#f39c12",
      "pattern": "waves",
      "opacity": 0.8803257944860068,
      "id": "pattern_rect_1754517914172"
    },
    {
      "type": "circle",
      "x": 65.6130987885166,
      "y": 348.6130987885166,
      "radius": 56.613098788516595,
      "fillStyle": "#d35400",
      "id": "circle_1754521534434"
    },
    {
      "type": "triangle",
      "x": 131.17368139797816,
      "y": 548.1736813979782,
      "size": 40.17368139797815,
      "fillStyle": "#d35400",
      "id": "triangle_1754521534434"
    },
    {
      "type": "triangle",
      "x": 265.0985572941855,
      "y": 98.0985572941855,
      "size": 59.0985572941855,
      "fillStyle": "#e74c3c",
      "id": "triangle_1754526263173"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 325,
      "size": 275,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.4817412195603716,
      "rotation": 210.5978526925387,
      "opacity": 0.998573702756349,
      "shadow": {
        "blur": 5.068454291650987,
        "color": "#f1c40f40",
        "offsetX": -1.8838075541629062,
        "offsetY": -2.13399049033151
      },
      "id": "rotated_triangle_1754526263173"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 25.477252244195405px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 47.8782162445963,
        "centerX": 0.44222961611895817,
        "centerY": 0.5010691154064417
      },
      "shadow": {
        "blur": 17.269552425564896,
        "color": "#FF6B3540",
        "offsetX": -4.060837879012835,
        "offsetY": 1.9237380862539588
      },
      "opacity": 0.8603250239053823,
      "id": "gradient_text_1754530456542"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 245.1848619836109,
      "height": 93.86422081526062,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.7186856887746,
      "opacity": 0.8,
      "id": "curve_1754534773905"
    }
  ],
  "generation": 6,
  "lastUpdated": "2025-08-07T02:46:13.905Z",
  "cycleStarted": "2025-08-06T21:05:04.268Z"
};