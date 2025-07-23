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
      "x": 0,
      "y": 149,
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
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 30.00322533692062px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 191.1496080151411,
        "centerX": 0.5131710002430263,
        "centerY": 0.35368886848169456
      },
      "shadow": {
        "blur": 17.527283132002985,
        "color": "#d3540040",
        "offsetX": -1.9005647637661016,
        "offsetY": -0.5597306264269974
      },
      "opacity": 0.9967810814337729,
      "id": "gradient_text_1753304721862"
    }
  ],
  "generation": 2,
  "lastUpdated": "2025-07-23T21:05:21.863Z",
  "cycleStarted": "2025-07-23T20:05:50.866Z"
};