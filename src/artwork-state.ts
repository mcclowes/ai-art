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
      "x": 18,
      "y": 152,
      "width": 94.9459720149469,
      "height": 93.46209978191105,
      "fillStyle": "#e74c3c",
      "id": "element_1758162615362"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 347.0155272370751,
        "centerX": 0.5596539624278195,
        "centerY": 0.42770094896197114
      },
      "shadow": {
        "blur": 6.884106712109418,
        "color": "#FF6B3540",
        "offsetX": 4.8628146102696554,
        "offsetY": -4.009261405886864
      },
      "opacity": 0.9080630838939505,
      "id": "gradient_circle_1758162615362"
    },
    {
      "type": "circle",
      "x": 16,
      "y": 534,
      "radius": 55.80154304671804,
      "fillStyle": "#f39c12",
      "id": "circle_1758165307748",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 82.36086525814625,
        "centerX": 0.657294903404904,
        "centerY": 0.5226294190168613
      }
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 34,
      "size": 90.08464265726971,
      "fillStyle": "#d35400",
      "id": "triangle_1758168392920"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.473566876192581,
      "rotation": 255.82291507980898,
      "opacity": 0.8460757479741227,
      "shadow": {
        "blur": 9.954280763060865,
        "color": "#f1c40f40",
        "offsetX": 4.817256720150841,
        "offsetY": -4.5655004458953385
      },
      "id": "rotated_triangle_1758179120403"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 79.8120719339946,
        "centerX": 0.5882681354163262,
        "centerY": 0.5023891928108802
      },
      "shadow": {
        "blur": 12.048606139325495,
        "color": "#e74c3c40",
        "offsetX": 1.5155307902197102,
        "offsetY": 2.7936280938552738
      },
      "opacity": 0.8618908775653823,
      "id": "gradient_circle_1758182811267"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 136,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 191.29589157544112,
        "centerX": 0.4202073425897104,
        "centerY": 0.5813607426279115
      },
      "shadow": {
        "blur": 18.150742225468036,
        "color": "#e74c3c40",
        "offsetX": 3.5002822334540262,
        "offsetY": 2.9965424042384825
      },
      "opacity": 0.7878325188729847,
      "id": "gradient_circle_1758189940818"
    },
    {
      "type": "circle",
      "x": 78.93242179155284,
      "y": 348.9324217915528,
      "radius": 78.93242179155284,
      "fillStyle": "#f39c12",
      "id": "circle_1758193493972",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 225.77920609578211,
        "centerX": 0.5505424404808411,
        "centerY": 0.6906607141375376
      },
      "shadow": {
        "blur": 9.748724356125962,
        "color": "#f39c1240",
        "offsetX": -4.099015252811322,
        "offsetY": 1.1995623665029154
      }
    },
    {
      "type": "text",
      "x": 282,
      "y": 234,
      "text": "Aesthetic",
      "font": "33.62762165895633px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1758201114865"
    }
  ],
  "generation": 14,
  "lastUpdated": "2025-09-18T14:05:45.546Z",
  "cycleStarted": "2025-09-18T01:32:28.775Z"
};