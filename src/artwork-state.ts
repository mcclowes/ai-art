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
    }
  ],
  "generation": 3,
  "lastUpdated": "2025-11-13T04:09:26.428Z",
  "cycleStarted": "2025-11-13T02:36:06.206Z"
};