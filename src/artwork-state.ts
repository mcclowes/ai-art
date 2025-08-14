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
      "x": 273.5624227441286,
      "y": 205.82818294190355,
      "width": 64,
      "height": 330,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 268.8573312957899,
        "centerX": 0.41813176055604206,
        "centerY": 0.5154893631791831
      },
      "shadow": {
        "blur": 7.550644720604086,
        "color": "#FF6B3540",
        "offsetX": -0.9685805190707981,
        "offsetY": 3.1566257611260884
      },
      "opacity": 0.7338691354424642,
      "id": "gradient_rect_1755126325032"
    },
    {
      "type": "text",
      "x": 16,
      "y": 234,
      "text": "Aesthetic",
      "font": "33.534827348090744px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1755126325033"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 240.26265726953267,
      "height": 66.9000951878163,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.340787575813853,
      "opacity": 0.8,
      "id": "curve_1755130963645"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 24.915496198994873px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 123.85504915896415,
        "centerX": 0.5055657105001602,
        "centerY": 0.47369311837642825
      },
      "shadow": {
        "blur": 7.713501026692288,
        "color": "#FF6B3540",
        "offsetX": -1.31324872826039,
        "offsetY": -3.34442454245085
      },
      "opacity": 0.8307476359753709,
      "id": "gradient_text_1755130963646"
    },
    {
      "type": "triangle",
      "x": 131.7429946226522,
      "y": 398.7429946226522,
      "size": 64.74299462265219,
      "fillStyle": "#e74c3c",
      "id": "triangle_1755135228178"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Inspire",
      "font": "27.558200737709768px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1755135228178"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-08-14T01:33:48.178Z",
  "cycleStarted": "2025-08-13T22:05:34.253Z"
};