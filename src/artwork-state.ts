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
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 30.97050298237262px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 263.9919712480202,
        "centerX": 0.573464055251167,
        "centerY": 0.3540253263298503
      },
      "shadow": {
        "blur": 17.65989303772043,
        "color": "#e74c3c40",
        "offsetX": 1.4826421412124802,
        "offsetY": -4.074886542118601
      },
      "opacity": 0.978552134970178,
      "id": "gradient_text_1758767542856"
    },
    {
      "type": "text",
      "x": 82,
      "y": 234,
      "text": "Vision",
      "font": "21.173960057529563px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1758767542857"
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 331.0369350628464,
        "centerX": 0.32716970289725633,
        "centerY": 0.6093285202951272
      },
      "shadow": {
        "blur": 5.055389099867567,
        "color": "#FF6B3540",
        "offsetX": -3.3795047716207782,
        "offsetY": 2.4295742425520617
      },
      "opacity": 0.6368247272209842,
      "id": "gradient_circle_1758770317561"
    },
    {
      "type": "circle",
      "x": 74.16337210375431,
      "y": 349.16337210375434,
      "radius": 74.16337210375431,
      "fillStyle": "#d35400",
      "id": "circle_1758770317561"
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 0,
      "width": 80,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.6222148777861072,
      "id": "pattern_rect_1758773187105"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.036453340330159,
      "opacity": 0.7,
      "id": "spiral_1758776732460"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 220.17181705809645,
      "width": 64,
      "height": 18,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 311.35955011147655,
        "centerX": 0.31064082046475466,
        "centerY": 0.3751128635749037
      },
      "shadow": {
        "blur": 17.606714754217144,
        "color": "#e74c3c40",
        "offsetX": 0.7402246714399974,
        "offsetY": -0.3371617824641149
      },
      "opacity": 0.7213335383123115,
      "id": "gradient_rect_1758780491600"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 105,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.7960848318393312,
      "rotation": 11.600309341807344,
      "opacity": 0.9669194420024367,
      "shadow": {
        "blur": 12.247288639186106,
        "color": "#e67e2240",
        "offsetX": 0.5320526191646184,
        "offsetY": -4.28440822112009
      },
      "id": "rotated_triangle_1758783954696"
    },
    {
      "type": "rectangle",
      "x": 94,
      "y": 502,
      "width": 74.07085936913576,
      "height": 93.36463128993843,
      "fillStyle": "#f1c40f",
      "id": "element_1758787637443"
    }
  ],
  "generation": 8,
  "lastUpdated": "2025-09-25T08:07:17.443Z",
  "cycleStarted": "2025-09-25T01:33:04.169Z"
};