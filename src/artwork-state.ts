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
      "shadow": {
        "blur": 18.25814362379724,
        "color": "#e67e2240",
        "offsetX": 4.048863125714117,
        "offsetY": 0.015597965196736396
      },
      "opacity": 0.8129711824661335
    },
    {
      "type": "text",
      "x": 616,
      "y": 534,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 65.31337506670452,
      "y": 199.3133750667045,
      "radius": 63.31337506670452,
      "fillStyle": "#f39c12",
      "id": "circle_1754517914171",
      "opacity": 0.829767371114799
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 209.17181705809645,
      "width": 30,
      "height": 40,
      "fillStyle": "#f39c12",
      "pattern": "waves",
      "opacity": 0.7991388660352327,
      "id": "pattern_rect_1754517914172"
    },
    {
      "type": "circle",
      "x": 65.6130987885166,
      "y": 348.6130987885166,
      "radius": 56.613098788516595,
      "fillStyle": "#d35400",
      "id": "circle_1754521534434"
    },
    {
      "type": "triangle",
      "x": 131.17368139797816,
      "y": 548.1736813979782,
      "size": 40.17368139797815,
      "fillStyle": "#d35400",
      "id": "triangle_1754521534434"
    },
    {
      "type": "triangle",
      "x": 265.0985572941855,
      "y": 98.0985572941855,
      "size": 59.0985572941855,
      "fillStyle": "#e74c3c",
      "id": "triangle_1754526263173"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 325,
      "size": 275,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.4817412195603716,
      "rotation": 210.5978526925387,
      "opacity": 0.998573702756349,
      "shadow": {
        "blur": 5.068454291650987,
        "color": "#f1c40f40",
        "offsetX": -1.8838075541629062,
        "offsetY": -2.13399049033151
      },
      "id": "rotated_triangle_1754526263173"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 25.477252244195405px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 47.8782162445963,
        "centerX": 0.44222961611895817,
        "centerY": 0.5010691154064417
      },
      "shadow": {
        "blur": 17.269552425564896,
        "color": "#FF6B3540",
        "offsetX": -4.060837879012835,
        "offsetY": 1.9237380862539588
      },
      "opacity": 0.8603250239053823,
      "id": "gradient_text_1754530456542"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 245.1848619836109,
      "height": 93.86422081526062,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.7186856887746,
      "opacity": 0.8,
      "id": "curve_1754534773905"
    },
    {
      "type": "circle",
      "x": 331.525998116504,
      "y": 548.525998116504,
      "radius": 40.525998116504,
      "fillStyle": "#d35400",
      "id": "circle_1754537705004"
    },
    {
      "type": "triangle",
      "x": 465.53362065480405,
      "y": 98.53362065480403,
      "size": 69.53362065480403,
      "fillStyle": "#d35400",
      "id": "triangle_1754543544809"
    },
    {
      "type": "circle",
      "x": 465.32743300200855,
      "y": 528.3274330020085,
      "radius": 71.32743300200858,
      "fillStyle": "#e67e22",
      "id": "circle_1754550536705"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 35.28882531910085px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 153.65337728630072,
        "centerX": 0.5360753266845268,
        "centerY": 0.4079025148151481
      },
      "shadow": {
        "blur": 11.472666983747972,
        "color": "#d3540040",
        "offsetX": -1.0652013879336253,
        "offsetY": 2.1074935758808433
      },
      "opacity": 0.9280302154512066,
      "id": "gradient_text_1754554057092"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 184,
      "radius": 12,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 354.1561522655864,
        "centerX": 0.5125776018493073,
        "centerY": 0.4208859083310631
      },
      "shadow": {
        "blur": 12.881855842428742,
        "color": "#e74c3c40",
        "offsetX": 0.30542528272119185,
        "offsetY": -0.6925232006959252
      },
      "opacity": 0.606116004752878,
      "id": "gradient_circle_1754557720753"
    },
    {
      "type": "rectangle",
      "x": 600,
      "y": 12,
      "width": 130.70054325034283,
      "height": 74.82990901185799,
      "fillStyle": "#f1c40f",
      "id": "element_1754561153448"
    },
    {
      "type": "circle",
      "x": 731.433142848765,
      "y": 398.433142848765,
      "radius": 52.433142848765016,
      "fillStyle": "#e67e22",
      "id": "circle_1754572694530"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 352.27387926626756,
        "centerX": 0.5456482461092043,
        "centerY": 0.6958535959813796
      },
      "shadow": {
        "blur": 16.58171173494739,
        "color": "#d3540040",
        "offsetX": 0.24110644528059844,
        "offsetY": -1.4250587299143636
      },
      "opacity": 0.7646338799890682,
      "id": "gradient_circle_1754575674703"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 20,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 322.4574550706169,
        "centerX": 0.3222055651845312,
        "centerY": 0.5337743041850421
      },
      "shadow": {
        "blur": 17.14093386630764,
        "color": "#FF6B3540",
        "offsetX": -2.384599333790973,
        "offsetY": -4.268712254851059
      },
      "opacity": 0.7688202970249884,
      "id": "gradient_circle_1754582789264"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 170,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.662484445699282,
      "rotation": 105.42432273034925,
      "opacity": 0.9461766051356106,
      "shadow": {
        "blur": 19.094690813756525,
        "color": "#d3540040",
        "offsetX": 4.103562587765143,
        "offsetY": -2.197904148008334
      },
      "id": "rotated_triangle_1754586430876"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "TRANSCEND",
      "font": "bold 33.107739200935704px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 288.6975987328625,
        "centerX": 0.39749889764046176,
        "centerY": 0.6628726532802964
      },
      "shadow": {
        "blur": 6.693886146202167,
        "color": "#e74c3c40",
        "offsetX": 3.2830859760326465,
        "offsetY": -0.18972670775348366
      },
      "opacity": 0.8762526466229974,
      "id": "gradient_text_1754590066358"
    },
    {
      "type": "triangle",
      "x": 465.9406717506856,
      "y": 398.9406717506856,
      "size": 87.9406717506856,
      "fillStyle": "#f1c40f",
      "id": "triangle_1754597164030"
    }
  ],
  "generation": 24,
  "lastUpdated": "2025-08-07T20:06:04.030Z",
  "cycleStarted": "2025-08-06T21:05:04.268Z"
};