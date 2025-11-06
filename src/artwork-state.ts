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
      "x": 246,
      "y": 66,
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
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 320.5077906747695,
        "centerX": 0.5359998231004905,
        "centerY": 0.40018011126460235
      },
      "shadow": {
        "blur": 17.42012981048219,
        "color": "#FF6B3540",
        "offsetX": 1.9274272150185734,
        "offsetY": -0.542758625429296
      },
      "opacity": 0.6829125863248242,
      "id": "gradient_circle_1762419993126"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 80.67545217616353,
        "centerX": 0.6374430500164006,
        "centerY": 0.4728661298826286
      },
      "shadow": {
        "blur": 19.842429636783447,
        "color": "#FF6B3540",
        "offsetX": -0.7928991673158459,
        "offsetY": 0.1836908716298229
      },
      "opacity": 0.9468998160708338,
      "id": "gradient_rect_1762423571096"
    },
    {
      "type": "triangle",
      "x": 265.0574824663254,
      "y": 504.0574824663254,
      "size": 95.05748246632538,
      "fillStyle": "#e74c3c",
      "id": "triangle_1762427106782"
    },
    {
      "type": "rectangle",
      "x": 290.5624227441286,
      "y": 234.82818294190355,
      "width": 30,
      "height": 272,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.6034789046210715,
      "id": "pattern_rect_1762430943356"
    },
    {
      "type": "rectangle",
      "x": 473,
      "y": 56,
      "width": 116.14418485791633,
      "height": 85.41652272848083,
      "fillStyle": "#e67e22",
      "id": "element_1762437956139"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 214.17181705809645,
      "width": 168,
      "height": 30,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 128.96464301244035,
        "centerX": 0.30929402873209905,
        "centerY": 0.5699460004486722
      },
      "shadow": {
        "blur": 6.592423371816509,
        "color": "#FF6B3540",
        "offsetX": 4.290833893294899,
        "offsetY": -4.153250589293598
      },
      "opacity": 0.8979289405852324,
      "id": "gradient_rect_1762441577542"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 171.9054097832175,
        "centerX": 0.540460635922023,
        "centerY": 0.3285224887732084
      },
      "shadow": {
        "blur": 19.393558786308937,
        "color": "#d3540040",
        "offsetX": -4.542380663041639,
        "offsetY": -4.799025081083254
      },
      "opacity": 0.8928185325039124,
      "id": "gradient_circle_1762448765996"
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Vision",
      "font": "21.98963474349261px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1762455910740"
    }
  ],
  "generation": 18,
  "lastUpdated": "2025-11-06T19:05:10.740Z",
  "cycleStarted": "2025-11-06T02:35:49.500Z"
};