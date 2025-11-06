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
      "x": 65.64921410641067,
      "y": 248.64921410641068,
      "radius": 40.64921410641067,
      "fillStyle": "#e74c3c",
      "id": "circle_1762399585065"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Balance",
      "font": "27.922347961123798px Arial",
      "fillStyle": "#d35400",
      "id": "text_1762399585065"
    },
    {
      "type": "circle",
      "x": 131.1781514408158,
      "y": 499.1781514408158,
      "radius": 62.1781514408158,
      "fillStyle": "#f39c12",
      "id": "circle_1762402176058"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 0,
      "width": 440,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 349.91875028827894,
        "centerX": 0.5140664417276051,
        "centerY": 0.5060709450793859
      },
      "shadow": {
        "blur": 18.734506744793308,
        "color": "#d3540040",
        "offsetX": 3.351523560867209,
        "offsetY": 3.6873947168323156
      },
      "opacity": 0.8187183773476181,
      "id": "gradient_rect_1762402176058"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 150.82818294190355,
      "width": 890,
      "height": 440,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.6966234280758081,
      "id": "pattern_rect_1762405561647"
    },
    {
      "type": "text",
      "x": 216,
      "y": 184,
      "text": "Aesthetic",
      "font": "30.318260805258785px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1762409287290"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 362.82818294190355,
      "width": 890,
      "height": 16,
      "fillStyle": "#e74c3c",
      "pattern": "dots",
      "opacity": 0.641645057393327,
      "id": "pattern_rect_1762412745377"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 106.60141150862769,
        "centerX": 0.6281924678366557,
        "centerY": 0.36755989547269685
      },
      "shadow": {
        "blur": 17.405351101235354,
        "color": "#d3540040",
        "offsetX": -0.5536132615561717,
        "offsetY": 2.7284543576657416
      },
      "opacity": 0.6664687928747322,
      "id": "gradient_circle_1762416431076"
    }
  ],
  "generation": 7,
  "lastUpdated": "2025-11-06T08:07:11.076Z",
  "cycleStarted": "2025-11-06T02:35:49.500Z"
};