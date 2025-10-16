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
      "x": 82,
      "y": 184,
      "text": "Create",
      "font": "30.913945952897787px Arial",
      "fillStyle": "#d35400",
      "id": "text_1760584816462"
    },
    {
      "type": "rectangle",
      "x": 17,
      "y": 310,
      "width": 97.90880424637102,
      "height": 78.35304058744968,
      "fillStyle": "#e74c3c",
      "id": "element_1760584816463"
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 384,
      "size": 74.66706871803136,
      "fillStyle": "#e74c3c",
      "id": "triangle_1760587580165"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3445816307307803,
      "opacity": 0.7,
      "id": "spiral_1760591129940"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 62.56503789576585,
        "centerX": 0.3163519695205084,
        "centerY": 0.41722447519175754
      },
      "shadow": {
        "blur": 13.072247118973904,
        "color": "#e74c3c40",
        "offsetX": -3.3754695424291126,
        "offsetY": 4.219463227024603
      },
      "opacity": 0.9335516337587685,
      "id": "gradient_rect_1760591129940"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.8926871848701508,
      "rotation": 205.10290173887384,
      "opacity": 0.757659083231874,
      "shadow": {
        "blur": 15.157765245722077,
        "color": "#f39c1240",
        "offsetX": 0.4912532166612138,
        "offsetY": -1.2251362138627209
      },
      "id": "rotated_triangle_1760594903399"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 167.10872295599296,
        "centerX": 0.602945669181592,
        "centerY": 0.5273992133784453
      },
      "shadow": {
        "blur": 14.083813657682526,
        "color": "#e74c3c40",
        "offsetX": 3.7777720867753857,
        "offsetY": 0.10851857002949661
      },
      "opacity": 0.7143673977355645,
      "id": "gradient_circle_1760594903399"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Balance",
      "font": "32.760201281488364px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1760598350558"
    },
    {
      "type": "rectangle",
      "x": 279,
      "y": 285,
      "width": 104.81550322627564,
      "height": 128.0809512050756,
      "fillStyle": "#f39c12",
      "id": "element_1760602045052"
    },
    {
      "type": "text",
      "x": 16,
      "y": 484,
      "text": "Vision",
      "font": "20.989207561073886px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1760609163902"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 486,
      "width": 96.55531768816202,
      "height": 113.64907017118591,
      "fillStyle": "#e67e22",
      "id": "element_1760612701451"
    },
    {
      "type": "rectangle",
      "x": 290.5624227441286,
      "y": 93.17181705809645,
      "width": 30,
      "height": 272,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.6372347288528901,
      "id": "pattern_rect_1760616545856"
    },
    {
      "type": "rectangle",
      "x": 486.4375772558714,
      "y": 205.17181705809645,
      "width": 16,
      "height": 48,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 215.89869853174997,
        "centerX": 0.4436220154381324,
        "centerY": 0.6541392387432154
      },
      "shadow": {
        "blur": 8.407202088871646,
        "color": "#d3540040",
        "offsetX": 2.805575278227166,
        "offsetY": -4.2690385167448035
      },
      "opacity": 0.9891639163217185,
      "id": "gradient_rect_1760620430921"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 30.52457614745977px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 34.34696423932869,
        "centerX": 0.5433866653693584,
        "centerY": 0.46453489864211417
      },
      "shadow": {
        "blur": 18.363030114158647,
        "color": "#e74c3c40",
        "offsetX": 1.7227269771827824,
        "offsetY": -3.1054622280175637
      },
      "opacity": 0.9675648282172693,
      "id": "gradient_text_1760623543687"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.5826300291039166,
      "rotation": 205.66296730492138,
      "opacity": 0.7931662472670813,
      "shadow": {
        "blur": 6.266688910306701,
        "color": "#e74c3c40",
        "offsetX": 0.6801423964322684,
        "offsetY": 2.993283608663317
      },
      "id": "rotated_triangle_1760627179845"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 32,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 300.95111337410253,
        "centerX": 0.4186532361314364,
        "centerY": 0.3792898027784949
      },
      "shadow": {
        "blur": 13.217317388211367,
        "color": "#d3540040",
        "offsetX": -1.942373585061703,
        "offsetY": -3.0226314770887974
      },
      "opacity": 0.6953866604399448,
      "id": "gradient_circle_1760630761265"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 173.41969452658526,
      "height": 87.14229899093594,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 4.864389459180897,
      "opacity": 0.8,
      "id": "curve_1760634326559"
    }
  ],
  "generation": 16,
  "lastUpdated": "2025-10-16T17:05:26.559Z",
  "cycleStarted": "2025-10-16T02:32:55.705Z"
};