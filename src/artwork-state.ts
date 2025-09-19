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
      "x": 684,
      "y": 452,
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
      "fillStyle": "#f1c40f",
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
      "id": "triangle_1758168392920",
      "opacity": 0.9600828718714329
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
      "fillStyle": "#f39c12",
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
    },
    {
      "type": "rectangle",
      "x": 301,
      "y": 435,
      "width": 61.10746955601434,
      "height": 127.98923233302676,
      "fillStyle": "#f39c12",
      "id": "element_1758207943182",
      "opacity": 0.9838901657516876
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Inspire",
      "font": "22.871070498086993px Arial",
      "fillStyle": "#d35400",
      "id": "text_1758211547392"
    },
    {
      "type": "text",
      "x": 682,
      "y": 184,
      "text": "TRANSCEND",
      "font": "bold 29.264567873716928px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 266.3338709154326,
        "centerX": 0.609296122205407,
        "centerY": 0.4383816778716254
      },
      "shadow": {
        "blur": 7.852641365942371,
        "color": "#FF6B3540",
        "offsetX": -2.521358321916436,
        "offsetY": -1.2635739870089902
      },
      "opacity": 0.894862511171846,
      "id": "gradient_text_1758222313777"
    },
    {
      "type": "triangle",
      "x": 131.05083453159747,
      "y": 199.05083453159747,
      "size": 53.05083453159748,
      "fillStyle": "#f1c40f",
      "id": "triangle_1758225949516"
    },
    {
      "type": "text",
      "x": 482,
      "y": 234,
      "text": "Evolve",
      "font": "18.258658830027393px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1758229517590"
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Evolve",
      "font": "29.66582407154469px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1758241268446"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 268.82818294190355,
      "width": 104,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 46.07401119942267,
        "centerX": 0.3189007100866448,
        "centerY": 0.4756941014279487
      },
      "shadow": {
        "blur": 9.48011551131072,
        "color": "#d3540040",
        "offsetX": 2.5759541893341398,
        "offsetY": -3.3428422738468466
      },
      "opacity": 0.783396661568084,
      "id": "gradient_rect_1758245570502"
    },
    {
      "type": "rectangle",
      "x": 670,
      "y": 52,
      "width": 122.5807058148824,
      "height": 92.43365086456078,
      "fillStyle": "#e74c3c",
      "id": "element_1758251875658"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#d35400",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.3863037891025676,
      "rotation": 51.1041598139931,
      "opacity": 0.8624980791788818,
      "shadow": {
        "blur": 8.799441928130895,
        "color": "#e74c3c40",
        "offsetX": 3.187533747032772,
        "offsetY": 4.435981962856184
      },
      "id": "rotated_triangle_1758262038380"
    },
    {
      "type": "text",
      "x": 682,
      "y": 334,
      "text": "Create",
      "font": "26.171193157893345px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1758269224078"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 205.17181705809645,
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
        "direction": 210.75702755249443,
        "centerX": 0.6039621929182295,
        "centerY": 0.5346315267467706
      },
      "shadow": {
        "blur": 10.846407800391937,
        "color": "#e74c3c40",
        "offsetX": 3.4008707240507796,
        "offsetY": 1.309104064924349
      },
      "opacity": 0.9438519472169877,
      "id": "gradient_rect_1758279903843"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 235.77897275123135,
        "centerX": 0.4032960702613459,
        "centerY": 0.4589120626464661
      },
      "shadow": {
        "blur": 5.344980598612535,
        "color": "#e74c3c40",
        "offsetX": -4.029877816740026,
        "offsetY": 1.7203375009669681
      },
      "opacity": 0.8803218855930249,
      "id": "gradient_circle_1758283719349"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 121.77850806079131,
        "centerX": 0.37680272820851773,
        "centerY": 0.3442551366844414
      },
      "shadow": {
        "blur": 10.12110676205289,
        "color": "#FF6B3540",
        "offsetX": -0.8342038022165514,
        "offsetY": 1.5786833579582105
      },
      "opacity": 0.9288583309787952,
      "id": "gradient_circle_1758287483768"
    }
  ],
  "generation": 37,
  "lastUpdated": "2025-09-19T13:11:23.768Z",
  "cycleStarted": "2025-09-18T01:32:28.775Z"
};