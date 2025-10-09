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
      "x": 273.5624227441286,
      "y": 127.17181705809645,
      "width": 64,
      "height": 204,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 67.56005341751808,
        "centerX": 0.5075657552356008,
        "centerY": 0.5650074536504348
      },
      "shadow": {
        "blur": 8.581303472118654,
        "color": "#d3540040",
        "offsetX": -2.521180305896209,
        "offsetY": -2.852889054401393
      },
      "opacity": 0.9428011694967205,
      "id": "gradient_rect_1759979850069"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.815752568134371,
      "rotation": 45.25422616125563,
      "opacity": 0.8129828747610428,
      "shadow": {
        "blur": 12.468695485880712,
        "color": "#f1c40f40",
        "offsetX": 2.9057190822756285,
        "offsetY": 2.7950757117700338
      },
      "id": "rotated_triangle_1759979850069"
    },
    {
      "type": "triangle",
      "x": 70.03751226495464,
      "y": 248.03751226495464,
      "size": 70.03751226495464,
      "fillStyle": "#f39c12",
      "id": "triangle_1759982778795"
    },
    {
      "type": "text",
      "x": 16,
      "y": 334,
      "text": "Evolve",
      "font": "29.604739965190692px Arial",
      "fillStyle": "#d35400",
      "id": "text_1759986339016"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 364.82818294190355,
      "width": 712,
      "height": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 182.30431063420858,
        "centerX": 0.6692325308075806,
        "centerY": 0.6155588455683241
      },
      "shadow": {
        "blur": 16.95369168454726,
        "color": "#d3540040",
        "offsetX": -1.2301011129379025,
        "offsetY": 1.3584781357834679
      },
      "opacity": 0.8820543056055968,
      "id": "gradient_rect_1759986339017"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-10-09T05:05:39.017Z",
  "cycleStarted": "2025-10-09T02:31:30.758Z"
};