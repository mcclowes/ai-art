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
      "x": 64,
      "y": 156,
      "width": 134.1431710291886,
      "height": 86.26134156760111,
      "fillStyle": "#e74c3c",
      "id": "element_1763004393513"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 31.496355837976125px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 249.66107660387118,
        "centerX": 0.3596532692762577,
        "centerY": 0.68152863449146
      },
      "shadow": {
        "blur": 7.960818786169236,
        "color": "#FF6B3540",
        "offsetX": 4.41484000360775,
        "offsetY": -2.251314493756571
      },
      "opacity": 0.9696423633478418,
      "id": "gradient_text_1763004393513"
    },
    {
      "type": "circle",
      "x": 131.4681326771671,
      "y": 398.4681326771671,
      "radius": 60.46813267716709,
      "fillStyle": "#d35400",
      "id": "circle_1763006966428"
    },
    {
      "type": "text",
      "x": 16,
      "y": 534,
      "text": "Vision",
      "font": "31.166909434431613px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1763010376176"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 97.55512850508723,
        "centerX": 0.4715720057574311,
        "centerY": 0.6734247577238217
      },
      "shadow": {
        "blur": 6.411560069375418,
        "color": "#d3540040",
        "offsetX": -2.6855769109275007,
        "offsetY": 4.338183161568782
      },
      "opacity": 0.9357771401909591,
      "id": "gradient_circle_1763010376176"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-11-13T05:06:16.176Z",
  "cycleStarted": "2025-11-13T02:36:06.206Z"
};