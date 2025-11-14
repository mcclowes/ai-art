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
      x: 166,
      y: 0,
      width: 200,
      height: 100,
      fillStyle: "#f39c12",
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
      type: "rectangle",
      x: 64,
      y: 156,
      width: 134.1431710291886,
      height: 86.26134156760111,
      fillStyle: "#e74c3c",
      id: "element_1763004393513",
      gradient: {
        type: "radial",
        colors: ["#e74c3c", "#f39c12", "#f1c40f"],
        direction: 142.16148463932393,
        centerX: 0.5827191594826673,
        centerY: 0.5377238411018086,
      },
      shadow: {
        blur: 19.030467227128167,
        color: "#e74c3c40",
        offsetX: -0.24403322257581017,
        offsetY: 4.05069403827528,
      },
    },
    {
      type: "text",
      x: 245.56242274412858,
      y: 209.17181705809645,
      text: "HARMONY",
      font: "bold 31.496355837976125px Arial",
      fillStyle: "#FF6B35",
      gradient: {
        type: "radial",
        colors: ["#FF6B35", "#F7931E", "#FFD23F"],
        direction: 249.66107660387118,
        centerX: 0.3596532692762577,
        centerY: 0.68152863449146,
      },
      shadow: {
        blur: 7.960818786169236,
        color: "#FF6B3540",
        offsetX: 4.41484000360775,
        offsetY: -2.251314493756571,
      },
      opacity: 0.9696423633478418,
      id: "gradient_text_1763004393513",
    },
    {
      type: "circle",
      x: 131.4681326771671,
      y: 398.4681326771671,
      radius: 60.46813267716709,
      fillStyle: "#f39c12",
      id: "circle_1763006966428",
    },
    {
      type: "text",
      x: 16,
      y: 534,
      text: "Vision",
      font: "31.166909434431613px Arial",
      fillStyle: "#f1c40f",
      id: "text_1763010376176",
    },
    {
      type: "circle",
      x: 494.4375772558714,
      y: 229.17181705809645,
      radius: 52,
      fillStyle: "#d35400",
      gradient: {
        type: "linear",
        colors: ["#d35400", "#e67e22", "#f39c12"],
        direction: 97.55512850508723,
        centerX: 0.4715720057574311,
        centerY: 0.6734247577238217,
      },
      shadow: {
        blur: 6.411560069375418,
        color: "#d3540040",
        offsetX: -2.6855769109275007,
        offsetY: 4.338183161568782,
      },
      opacity: 0.9357771401909591,
      id: "gradient_circle_1763010376176",
    },
    {
      type: "text",
      x: 245.56242274412858,
      y: 350.82818294190355,
      text: "SYNTHESIS",
      font: "bold 26.177463356406918px Arial",
      fillStyle: "#FF6B35",
      gradient: {
        type: "linear",
        colors: ["#FF6B35", "#F7931E", "#FFD23F"],
        direction: 344.79575586862893,
        centerX: 0.4668550564128961,
        centerY: 0.41519660172066,
      },
      shadow: {
        blur: 12.038385314648995,
        color: "#FF6B3540",
        offsetX: 3.997192196348214,
        offsetY: 4.745386127465336,
      },
      opacity: 0.9246343732464507,
      id: "gradient_text_1763014088465",
    },
    {
      type: "triangle",
      x: 494.4375772558714,
      y: 370.82818294190355,
      size: 105,
      fillStyle: "#f1c40f",
      strokeStyle: "#f1c40f",
      strokeWidth: 1.813596935683354,
      rotation: 85.97796427699579,
      opacity: 0.8350441509258228,
      shadow: {
        blur: 14.269978665963887,
        color: "#f1c40f40",
        offsetX: -3.6063160810558648,
        offsetY: -0.18166687918541147,
      },
      id: "rotated_triangle_1763017549726",
    },
    {
      type: "text",
      x: 282,
      y: 34,
      text: "Harmony",
      font: "29.165858535845064px Arial",
      fillStyle: "#f39c12",
      id: "text_1763021221615",
    },
    {
      type: "circle",
      x: 616,
      y: 234,
      radius: 220,
      fillStyle: "#e74c3c",
      gradient: {
        type: "linear",
        colors: ["#e74c3c", "#f39c12", "#f1c40f"],
        direction: 229.93941817961877,
        centerX: 0.5953133582677117,
        centerY: 0.3964109009487721,
      },
      shadow: {
        blur: 16.5452169281965,
        color: "#e74c3c40",
        offsetX: 2.4788895613163326,
        offsetY: 1.2205516046976221,
      },
      opacity: 0.6347530466440934,
      id: "gradient_circle_1763024798643",
    },
    {
      type: "rectangle",
      x: 429.4375772558714,
      y: 145.17181705809645,
      width: 130,
      height: 168,
      fillStyle: "#e67e22",
      pattern: "waves",
      opacity: 0.8508662688822648,
      id: "pattern_rect_1763028360419",
    },
    {
      type: "rectangle",
      x: 282,
      y: 489,
      width: 98.00789010751318,
      height: 110.57542515085223,
      fillStyle: "#f1c40f",
      id: "element_1763042739748",
      shadow: {
        blur: 11.648959319891233,
        color: "#e67e2240",
        offsetX: 0.15725764310623624,
        offsetY: -0.6336836762733196,
      },
      opacity: 0.8987117505044926,
    },
    {
      type: "circle",
      x: 305.5624227441286,
      y: 229.17181705809645,
      radius: 8,
      fillStyle: "#FF6B35",
      gradient: {
        type: "radial",
        colors: ["#FF6B35", "#F7931E", "#FFD23F"],
        direction: 226.94597621096298,
        centerX: 0.3633115531437441,
        centerY: 0.43908719138924335,
      },
      shadow: {
        blur: 10.528011656220304,
        color: "#FF6B3540",
        offsetX: -0.8701057038362165,
        offsetY: -4.598393153172604,
      },
      opacity: 0.9650354166289682,
      id: "gradient_circle_1763046379789",
    },
    {
      type: "triangle",
      x: 465.3740783946411,
      y: 499.3740783946411,
      size: 70.37407839464112,
      fillStyle: "#e67e22",
      id: "triangle_1763053532241",
    },
    {
      type: "triangle",
      x: 665.0235619439022,
      y: 98.02356194390217,
      size: 83.02356194390217,
      fillStyle: "#d35400",
      id: "triangle_1763057231667",
    },
    {
      type: "rectangle",
      x: 601,
      y: 315,
      width: 128.2878703984854,
      height: 68.80315437818494,
      fillStyle: "#e74c3c",
      id: "element_1763064350031",
    },
    {
      type: "circle",
      x: 731.2258466050624,
      y: 548.2258466050624,
      radius: 47.2258466050624,
      fillStyle: "#e67e22",
      id: "circle_1763071534978",
    },
  ],
  generation: 22,
  lastUpdated: "2025-11-13T23:05:16.492Z",
  cycleStarted: "2025-11-13T02:36:06.206Z",
};
