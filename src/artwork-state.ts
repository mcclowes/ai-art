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
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 113.55530609693145,
        "centerX": 0.3470710889427509,
        "centerY": 0.3003285554862022
      },
      "shadow": {
        "blur": 9.72440163213908,
        "color": "#e67e2240",
        "offsetX": -1.599512452810199,
        "offsetY": -2.8435609462004385
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
      "type": "circle",
      "x": 65.07809988600897,
      "y": 248.07809988600897,
      "radius": 40.07809988600897,
      "fillStyle": "#e74c3c",
      "id": "circle_1753913122799",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 197.42633368407982,
        "centerX": 0.44125929994144886,
        "centerY": 0.568632244679195
      }
    },
    {
      "type": "circle",
      "x": 65.96038131698558,
      "y": 348.9603813169856,
      "radius": 59.960381316985575,
      "fillStyle": "#f39c12",
      "id": "circle_1753916727281",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 148.91151118648196,
        "centerX": 0.4698046367257951,
        "centerY": 0.564898666134616
      }
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Inspire",
      "font": "21.507208911788933px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1753916727281"
    },
    {
      "type": "rectangle",
      "x": 389.4375772558714,
      "y": 286.82818294190355,
      "width": 210,
      "height": 168,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.8752085802973494,
      "id": "pattern_rect_1753921416621",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 358.96270965584733,
        "centerX": 0.31243150016526755,
        "centerY": 0.3342095817115184
      },
      "shadow": {
        "blur": 6.8660675904552875,
        "color": "#d3540040",
        "offsetX": -2.1254885289357617,
        "offsetY": 4.948252033835477
      }
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.6694869283642286,
      "rotation": 180.12842864487004,
      "opacity": 0.7938918896559491,
      "shadow": {
        "blur": 18.465181368729333,
        "color": "#d3540040",
        "offsetX": 2.643468931726101,
        "offsetY": -0.5106159087193056
      },
      "id": "rotated_triangle_1753921416621"
    },
    {
      "type": "rectangle",
      "x": 85.56242274412858,
      "y": 346.82818294190355,
      "width": 440,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 227.75283452461946,
        "centerX": 0.35031365878449955,
        "centerY": 0.6131010669548994
      },
      "shadow": {
        "blur": 17.47936231548769,
        "color": "#e74c3c40",
        "offsetX": -0.3665716479556913,
        "offsetY": 0.05542175404000815
      },
      "opacity": 0.945972590997227,
      "id": "gradient_rect_1753925652220"
    },
    {
      "type": "triangle",
      "x": 682,
      "y": 234,
      "size": 80.20944469632003,
      "fillStyle": "#f1c40f",
      "id": "triangle_1753925652221"
    },
    {
      "type": "text",
      "x": 216,
      "y": 334,
      "text": "EMERGENCE",
      "font": "bold 24.46983355001217px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 87.80951673261329,
        "centerX": 0.3527902024153772,
        "centerY": 0.6064749173098332
      },
      "shadow": {
        "blur": 10.159872308496205,
        "color": "#d3540040",
        "offsetX": -3.9940458260415035,
        "offsetY": 4.289491977559818
      },
      "opacity": 0.9903228051565782,
      "id": "gradient_text_1753929891322"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 35.19322696860831px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 195.40758183439007,
        "centerX": 0.5582382026686664,
        "centerY": 0.46762324664019095
      },
      "shadow": {
        "blur": 15.9574343986831,
        "color": "#e74c3c40",
        "offsetX": 1.794397224021833,
        "offsetY": -0.7065087788241637
      },
      "opacity": 0.9633258120189256,
      "id": "gradient_text_1753932867501"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 234.78208965455315,
      "height": 59.22950523307963,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.869734052563361,
      "opacity": 0.7802422074270264,
      "id": "curve_1753942085171",
      "shadow": {
        "blur": 15.259083052570867,
        "color": "#d3540040",
        "offsetX": 0.8419868927625185,
        "offsetY": -3.1005739689751444
      }
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 317.073158367015,
        "centerX": 0.5867449843430242,
        "centerY": 0.3798992823574676
      },
      "shadow": {
        "blur": 16.44057681713352,
        "color": "#e74c3c40",
        "offsetX": 4.926270314001638,
        "offsetY": 0.06181089573839493
      },
      "opacity": 0.910593591873669,
      "id": "gradient_circle_1753945669146"
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 93.17181705809645,
      "width": 30,
      "height": 272,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.7229071800986534,
      "id": "pattern_rect_1753952912171",
      "shadow": {
        "blur": 8.130832983975575,
        "color": "#f1c40f40",
        "offsetX": -3.178728844646297,
        "offsetY": 4.432651896657854
      }
    },
    {
      "type": "circle",
      "x": 331.9957974539704,
      "y": 498.9957974539704,
      "radius": 71.9957974539704,
      "fillStyle": "#e67e22",
      "id": "circle_1753956349771"
    },
    {
      "type": "circle",
      "x": 465.31795501015444,
      "y": 248.31795501015444,
      "radius": 41.31795501015445,
      "fillStyle": "#f39c12",
      "id": "circle_1753959904344"
    },
    {
      "type": "rectangle",
      "x": 495,
      "y": 445,
      "width": 72.6402830845776,
      "height": 108.09711298926464,
      "fillStyle": "#e74c3c",
      "id": "element_1753970790747"
    },
    {
      "type": "text",
      "x": 416,
      "y": 534,
      "text": "Evolve",
      "font": "23.825598873166513px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1753974356280"
    },
    {
      "type": "text",
      "x": 682,
      "y": 34,
      "text": "Transform",
      "font": "24.481960111485876px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1753977990130"
    },
    {
      "type": "rectangle",
      "x": 680,
      "y": 345,
      "width": 103.70301860400664,
      "height": 107.239811666779,
      "fillStyle": "#d35400",
      "id": "element_1753981637694"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 331.82818294190355,
      "width": 104,
      "height": 78,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 220.11957115487556,
        "centerX": 0.44117786142178983,
        "centerY": 0.6180118585663317
      },
      "shadow": {
        "blur": 9.26089081026892,
        "color": "#d3540040",
        "offsetX": -2.6357296122075025,
        "offsetY": -1.6987214948108975
      },
      "opacity": 0.7165700220714624,
      "id": "gradient_rect_1753985245649"
    },
    {
      "type": "circle",
      "x": 331.83828875290476,
      "y": 61.83828875290475,
      "radius": 61.83828875290475,
      "fillStyle": "#d35400",
      "id": "circle_1753992353430"
    },
    {
      "type": "rectangle",
      "x": 617,
      "y": 511,
      "width": 97.59847777712123,
      "height": 75.75013305596038,
      "fillStyle": "#e67e22",
      "id": "element_1754003129767"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 6,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.351954648076367,
      "opacity": 0.7,
      "id": "spiral_1754008043902"
    }
  ],
  "generation": 28,
  "lastUpdated": "2025-08-01T00:27:23.902Z",
  "cycleStarted": "2025-07-30T21:05:00.444Z"
};