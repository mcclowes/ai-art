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
      "type": "triangle",
      "x": 67.47848652868743,
      "y": 248.47848652868743,
      "size": 67.47848652868743,
      "fillStyle": "#f39c12",
      "id": "triangle_1756340476592"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 152.493401740714,
      "height": 77.69873911251979,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.187494462776094,
      "opacity": 0.8,
      "id": "curve_1756340476592"
    },
    {
      "type": "text",
      "x": 16,
      "y": 334,
      "text": "Vision",
      "font": "28.764798013586564px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1756344769681"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Balance",
      "font": "29.78687484196817px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1756344769681"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Aesthetic",
      "font": "18.769398056525677px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1756348342887"
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 209.17181705809645,
      "width": 30,
      "height": 40,
      "fillStyle": "#e74c3c",
      "pattern": "waves",
      "opacity": 0.8177235587249769,
      "id": "pattern_rect_1756348342888"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-08-28T02:32:22.888Z",
  "cycleStarted": "2025-08-27T23:05:44.806Z"
};