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
      "x": 216,
      "y": 384,
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
      "x": 216,
      "y": 84,
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
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 226.45194771825322,
      "height": 73.49294250775597,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.5191217395937233,
      "opacity": 0.8078432843954635,
      "id": "curve_1758791171581"
    },
    {
      "type": "rectangle",
      "x": 429.4375772558714,
      "y": 217.17181705809645,
      "width": 130,
      "height": 24,
      "fillStyle": "#e67e22",
      "pattern": "waves",
      "opacity": 0.7122331929497563,
      "id": "pattern_rect_1758794741302",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 84.95597589255233,
        "centerX": 0.6837767571703466,
        "centerY": 0.5179758195688601
      },
      "shadow": {
        "blur": 7.674800754487859,
        "color": "#e67e2240",
        "offsetX": 4.57482993013674,
        "offsetY": -3.3080852594192245
      }
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 38.35822840598019px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 106.50621967555853,
        "centerX": 0.6157127802015643,
        "centerY": 0.5757770154259186
      },
      "shadow": {
        "blur": 12.506587466427836,
        "color": "#d3540040",
        "offsetX": 0.7805343139783893,
        "offsetY": -4.527209848202222
      },
      "opacity": 0.9709860150927057,
      "id": "gradient_text_1758805966956"
    },
    {
      "type": "rectangle",
      "x": 80,
      "y": 190,
      "width": 102.24607087888961,
      "height": 116.24235518678663,
      "fillStyle": "#e67e22",
      "id": "element_1758809141729"
    },
    {
      "type": "rectangle",
      "x": 292,
      "y": 442,
      "width": 79.22383757698526,
      "height": 113.4958549967004,
      "fillStyle": "#e67e22",
      "id": "element_1758812749558"
    },
    {
      "type": "circle",
      "x": 331.27133461416014,
      "y": 499.27133461416014,
      "radius": 63.27133461416013,
      "fillStyle": "#d35400",
      "id": "circle_1758816362661"
    },
    {
      "type": "text",
      "x": 416,
      "y": 534,
      "text": "Transform",
      "font": "23.52470641794219px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1758823668853"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 98.76666723967234,
        "centerX": 0.3004228372223268,
        "centerY": 0.4684932793806872
      },
      "shadow": {
        "blur": 9.24807751829471,
        "color": "#d3540040",
        "offsetX": -4.30416679697446,
        "offsetY": -3.855051677097663
      },
      "opacity": 0.8035561827659812,
      "id": "gradient_circle_1758827096001"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 38.047353549411596,
        "centerX": 0.3793843287192895,
        "centerY": 0.5018344240121297
      },
      "shadow": {
        "blur": 7.9023137857503905,
        "color": "#e74c3c40",
        "offsetX": -3.464035280218587,
        "offsetY": 0.034623845578805046
      },
      "opacity": 0.6337323997446804,
      "id": "gradient_circle_1758830742618"
    },
    {
      "type": "circle",
      "x": 665.2421189512108,
      "y": 98.24211895121084,
      "radius": 46.24211895121084,
      "fillStyle": "#d35400",
      "id": "circle_1758837900032"
    },
    {
      "type": "triangle",
      "x": 665.3534345425066,
      "y": 248.35343454250665,
      "size": 69.35343454250663,
      "fillStyle": "#f39c12",
      "id": "triangle_1758846022544"
    },
    {
      "type": "triangle",
      "x": 665.7493302372055,
      "y": 348.7493302372055,
      "size": 58.74933023720552,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758850364814"
    }
  ],
  "generation": 25,
  "lastUpdated": "2025-09-26T01:32:44.814Z",
  "cycleStarted": "2025-09-25T01:33:04.169Z"
};