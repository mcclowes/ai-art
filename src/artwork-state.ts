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
  canvas: {
    width: 800,
    height: 600,
    background: "#1a1a1a",
  },
  elements: [
    {
      type: "rectangle",
      x: 0,
      y: 149,
      width: 200,
      height: 100,
      fillStyle: "#e67e22",
      id: "rect1",
    },
    {
      type: "text",
      x: 416,
      y: 334,
      text: "Hello Canvas!",
      font: "24px Arial",
      fillStyle: "#fff",
      id: "text1",
    },
    {
      type: "text",
      x: 434.4375772558714,
      y: 350.82818294190355,
      text: "HARMONY",
      font: "bold 30.00322533692062px Arial",
      fillStyle: "#d35400",
      gradient: {
        type: "linear",
        colors: ["#d35400", "#e67e22", "#f39c12"],
        direction: 191.1496080151411,
        centerX: 0.5131710002430263,
        centerY: 0.35368886848169456,
      },
      shadow: {
        blur: 17.527283132002985,
        color: "#d3540040",
        offsetX: -1.9005647637661016,
        offsetY: -0.5597306264269974,
      },
      opacity: 0.9967810814337729,
      id: "gradient_text_1753304721862",
    },
    {
      type: "circle",
      x: 131.33078457855032,
      y: 248.33078457855032,
      radius: 34.33078457855033,
      fillStyle: "#f1c40f",
      id: "circle_1753308304710",
    },
    {
      type: "circle",
      x: 494.4375772558714,
      y: 229.17181705809645,
      radius: 20,
      fillStyle: "#FF6B35",
      gradient: {
        type: "linear",
        colors: ["#FF6B35", "#F7931E", "#FFD23F"],
        direction: 318.0700902472751,
        centerX: 0.4502778242245714,
        centerY: 0.49875369019640836,
      },
      shadow: {
        blur: 17.320370916425304,
        color: "#FF6B3540",
        offsetX: 2.2738422046453444,
        offsetY: 1.533355485618431,
      },
      opacity: 0.7995204155830148,
      id: "gradient_circle_1753308304710",
    },
    {
      type: "rectangle",
      x: 454.4375772558714,
      y: 209.17181705809645,
      width: 80,
      height: 40,
      fillStyle: "#e74c3c",
      pattern: "stripes",
      opacity: 0.7565650647420407,
      id: "pattern_rect_1753311918674",
    },
    {
      type: "circle",
      x: 82,
      y: 334,
      radius: 136,
      fillStyle: "#e74c3c",
      gradient: {
        type: "radial",
        colors: ["#e74c3c", "#f39c12", "#f1c40f"],
        direction: 188.57233293948954,
        centerX: 0.3681856434630565,
        centerY: 0.6164186193093502,
      },
      shadow: {
        blur: 13.0748893199308,
        color: "#e74c3c40",
        offsetX: 2.735726261840239,
        offsetY: -1.604101540722651,
      },
      opacity: 0.7891048390193661,
      id: "gradient_circle_1753311918675",
    },
    {
      type: "triangle",
      x: 494.4375772558714,
      y: 370.82818294190355,
      size: 10,
      fillStyle: "#f39c12",
      strokeStyle: "#f39c12",
      strokeWidth: 1.0634650470979023,
      rotation: 205.94224980202947,
      opacity: 0.7132631504770454,
      shadow: {
        blur: 9.15423370738393,
        color: "#f39c1240",
        offsetX: 3.021401767297739,
        offsetY: -4.371966590757355,
      },
      id: "rotated_triangle_1753316632200",
    },
    {
      type: "spiral",
      x: 494.4375772558714,
      y: 267,
      radius: 267,
      fillStyle: "#e74c3c",
      strokeStyle: "#e74c3c",
      strokeWidth: 1.3093407136123427,
      opacity: 0.7,
      id: "spiral_1753324969740",
    },
    {
      type: "spiral",
      x: 305.5624227441286,
      y: 229.17181705809645,
      radius: 39,
      fillStyle: "#f1c40f",
      strokeStyle: "#f1c40f",
      strokeWidth: 1.3257829501425515,
      opacity: 0.7,
      id: "spiral_1753327996919",
    },
    {
      type: "curve",
      x: 394.4375772558714,
      y: 179.17181705809645,
      width: 169.91253173136099,
      height: 64.44652010980595,
      fillStyle: "#f1c40f",
      strokeStyle: "#f1c40f",
      strokeWidth: 3.1008433648316984,
      opacity: 0.8,
      id: "curve_1753330730338",
    },
  ],
  generation: 10,
  lastUpdated: "2025-07-24T05:09:24.302Z",
  cycleStarted: "2025-07-23T20:05:50.866Z",
};
