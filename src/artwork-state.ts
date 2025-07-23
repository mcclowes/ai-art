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
    },
    {
      "type": "circle",
      "x": 131.33078457855032,
      "y": 248.33078457855032,
      "radius": 34.33078457855033,
      "fillStyle": "#f1c40f",
      "id": "circle_1753308304710"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 318.0700902472751,
        "centerX": 0.4502778242245714,
        "centerY": 0.49875369019640836
      },
      "shadow": {
        "blur": 17.320370916425304,
        "color": "#FF6B3540",
        "offsetX": 2.2738422046453444,
        "offsetY": 1.533355485618431
      },
      "opacity": 0.7995204155830148,
      "id": "gradient_circle_1753308304710"
    }
  ],
  "generation": 3,
  "lastUpdated": "2025-07-23T22:05:04.710Z",
  "cycleStarted": "2025-07-23T20:05:50.866Z"
};