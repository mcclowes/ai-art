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
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      fillStyle: "#e67e22",
      id: "rect1",
      gradient: {
        type: "radial",
        colors: ["#e74c3c", "#f39c12", "#f1c40f"],
        direction: 174.17275782289784,
        centerX: 0.4655732349004523,
        centerY: 0.39553137702132324,
      },
      shadow: {
        blur: 10.81079652069181,
        color: "#e67e2240",
        offsetX: -0.5228844390062992,
        offsetY: 2.1617575310252635,
      },
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
      type: "triangle",
      x: 67.47848652868743,
      y: 248.47848652868743,
      size: 67.47848652868743,
      fillStyle: "#f39c12",
      id: "triangle_1756340476592",
    },
    {
      type: "curve",
      x: 205.56242274412858,
      y: 320.82818294190355,
      width: 152.493401740714,
      height: 77.69873911251979,
      fillStyle: "#d35400",
      strokeStyle: "#d35400",
      strokeWidth: 2.187494462776094,
      opacity: 0.8,
      id: "curve_1756340476592",
    },
    {
      type: "text",
      x: 16,
      y: 334,
      text: "Vision",
      font: "28.764798013586564px Arial",
      fillStyle: "#f1c40f",
      id: "text_1756344769681",
    },
    {
      type: "text",
      x: 82,
      y: 534,
      text: "Balance",
      font: "29.78687484196817px Arial",
      fillStyle: "#f1c40f",
      id: "text_1756344769681",
    },
    {
      type: "text",
      x: 216,
      y: 84,
      text: "Aesthetic",
      font: "18.769398056525677px Arial",
      fillStyle: "#e74c3c",
      id: "text_1756348342887",
    },
    {
      type: "rectangle",
      x: 479.4375772558714,
      y: 209.17181705809645,
      width: 30,
      height: 40,
      fillStyle: "#e74c3c",
      pattern: "waves",
      opacity: 0.8177235587249769,
      id: "pattern_rect_1756348342888",
    },
    {
      type: "circle",
      x: 494.4375772558714,
      y: 229.17181705809645,
      radius: 20,
      fillStyle: "#d35400",
      gradient: {
        type: "radial",
        colors: ["#d35400", "#e67e22", "#f39c12"],
        direction: 170.30841279750638,
        centerX: 0.40703221874293555,
        centerY: 0.5782990246130969,
      },
      shadow: {
        blur: 16.119729210750606,
        color: "#d3540040",
        offsetX: -4.48244451127662,
        offsetY: 4.6831289264456455,
      },
      opacity: 0.8615625079216311,
      id: "gradient_circle_1756351176541",
    },
    {
      type: "rectangle",
      x: 707,
      y: 229,
      width: 50,
      height: 40,
      fillStyle: "#f39c12",
      pattern: "dots",
      opacity: 0.8835915531493752,
      id: "pattern_rect_1756351176541",
    },
    {
      type: "rectangle",
      x: 202,
      y: 511,
      width: 127.82255701850359,
      height: 74.42700964046216,
      fillStyle: "#f1c40f",
      id: "element_1756353965026",
    },
    {
      type: "triangle",
      x: 531.3582583528801,
      y: 98.35825835288001,
      size: 66.35825835288001,
      fillStyle: "#d35400",
      id: "triangle_1756357524498",
    },
    {
      type: "circle",
      x: 531.7812047013954,
      y: 498.7812047013954,
      radius: 44.7812047013954,
      fillStyle: "#d35400",
      id: "circle_1756357524498",
    },
    {
      type: "curve",
      x: 394.4375772558714,
      y: 320.82818294190355,
      width: 240.62690084079168,
      height: 84.62824787642965,
      fillStyle: "#e67e22",
      strokeStyle: "#e67e22",
      strokeWidth: 4.092933388176867,
      opacity: 0.8,
      id: "curve_1756361260443",
    },
    {
      type: "circle",
      x: 305.5624227441286,
      y: 229.17181705809645,
      radius: 136,
      fillStyle: "#FF6B35",
      gradient: {
        type: "linear",
        colors: ["#FF6B35", "#F7931E", "#FFD23F"],
        direction: 216.72283651655255,
        centerX: 0.5186451693935619,
        centerY: 0.48334853139547596,
      },
      shadow: {
        blur: 8.750240942839426,
        color: "#FF6B3540",
        offsetX: 3.798740899249582,
        offsetY: 2.4843753811667764,
      },
      opacity: 0.94865005044561,
      id: "gradient_circle_1756364728268",
    },
    {
      type: "triangle",
      x: 305.5624227441286,
      y: 370.82818294190355,
      size: 25,
      fillStyle: "#e74c3c",
      strokeStyle: "#e74c3c",
      strokeWidth: 2.4233748508564776,
      rotation: 179.35776763825714,
      opacity: 0.8570635906987807,
      shadow: {
        blur: 5.154629316091528,
        color: "#e74c3c40",
        offsetX: -4.726856339933347,
        offsetY: 3.377042795442369,
      },
      id: "rotated_triangle_1756368401259",
    },
    {
      type: "triangle",
      x: 731.9582892617435,
      y: 98.95828926174356,
      size: 58.95828926174356,
      fillStyle: "#e74c3c",
      id: "triangle_1756371934041",
    },
    {
      type: "curve",
      x: 394.4375772558714,
      y: 320.82818294190355,
      width: 214.42438809046254,
      height: 63.47009166646066,
      fillStyle: "#e67e22",
      strokeStyle: "#e67e22",
      strokeWidth: 2.553352883741997,
      opacity: 0.8,
      id: "curve_1756375545052",
    },
  ],
  generation: 13,
  lastUpdated: "2025-08-28T11:04:30.968Z",
  cycleStarted: "2025-08-27T23:05:44.806Z",
};
