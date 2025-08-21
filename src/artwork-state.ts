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
      "x": 211,
      "y": 143,
      "width": 108.95532386779065,
      "height": 112.68610666401882,
      "fillStyle": "#f1c40f",
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
      "x": 10,
      "y": 360,
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
    },
    {
      "type": "text",
      "x": 16,
      "y": 534,
      "text": "Aesthetic",
      "font": "22.718357957804418px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1755746502843"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Evolve",
      "font": "25.249606297869253px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1755746502843"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 24.313257113565122px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 244.67057245435706,
        "centerX": 0.4556936119922141,
        "centerY": 0.652093609992423
      },
      "shadow": {
        "blur": 10.058325822385095,
        "color": "#e74c3c40",
        "offsetX": -4.273024026202197,
        "offsetY": 3.2198996406381504
      },
      "opacity": 0.8289684986599779,
      "id": "gradient_text_1755749171908"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 101.9186991561771,
        "centerX": 0.6437575105103053,
        "centerY": 0.6202573464355626
      },
      "shadow": {
        "blur": 6.085094826643168,
        "color": "#e74c3c40",
        "offsetX": -2.2194902908067093,
        "offsetY": 2.7148599185365763
      },
      "opacity": 0.6739987697379267,
      "id": "gradient_circle_1755752735932"
    },
    {
      "type": "text",
      "x": 216,
      "y": 234,
      "text": "Aesthetic",
      "font": "31.670072482332838px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1755756476296"
    },
    {
      "type": "text",
      "x": 282,
      "y": 534,
      "text": "Inspire",
      "font": "20.18172882248265px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1755760060652"
    },
    {
      "type": "rectangle",
      "x": 265.5624227441286,
      "y": 150.82818294190355,
      "width": 80,
      "height": 440,
      "fillStyle": "#e67e22",
      "pattern": "dots",
      "opacity": 0.8729855921328377,
      "id": "pattern_rect_1755767156638"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 166.17181705809645,
      "width": 64,
      "height": 126,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 65.1057470064171,
        "centerX": 0.6456599042524964,
        "centerY": 0.3082678299849502
      },
      "shadow": {
        "blur": 16.177944066344608,
        "color": "#e74c3c40",
        "offsetX": -0.24655966903429238,
        "offsetY": 3.8558437198071704
      },
      "opacity": 0.8203982826864309,
      "id": "gradient_rect_1755770740320"
    }
  ],
  "generation": 13,
  "lastUpdated": "2025-08-21T11:04:44.759Z",
  "cycleStarted": "2025-08-20T23:04:48.875Z"
};