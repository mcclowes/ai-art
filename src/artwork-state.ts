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
      x: 280.5624227441286,
      y: 209.17181705809645,
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
      fillStyle: "#f1c40f",
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
  ],
  generation: 7,
  lastUpdated: "2025-08-28T05:05:24.498Z",
  cycleStarted: "2025-08-27T23:05:44.806Z",
};
