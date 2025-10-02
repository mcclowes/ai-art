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
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 28.278627273348906,
        "centerX": 0.637817109359829,
        "centerY": 0.5489328063044113
      },
      "shadow": {
        "blur": 16.301282047749325,
        "color": "#e67e2240",
        "offsetX": 4.810003766857804,
        "offsetY": -4.913707701648393
      },
      "opacity": 0.8214996655372795
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
      "x": 410.4375772558714,
      "y": 361.82818294190355,
      "width": 168,
      "height": 18,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 97.38527766955353,
        "centerX": 0.5107449531076934,
        "centerY": 0.6912976849462853
      },
      "shadow": {
        "blur": 15.57063898709178,
        "color": "#FF6B3540",
        "offsetX": -4.000937530750663,
        "offsetY": -1.5159309433192791
      },
      "opacity": 0.9263513507583298,
      "id": "gradient_rect_1759374890267"
    },
    {
      "type": "rectangle",
      "x": 67,
      "y": 217,
      "width": 128.7377126258005,
      "height": 63.83181922767717,
      "fillStyle": "#d35400",
      "id": "element_1759374890267"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 9.171817058096451,
      "width": 340,
      "height": 440,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.7165507000842223,
      "id": "pattern_rect_1759377972465"
    },
    {
      "type": "circle",
      "x": 65.47677914643991,
      "y": 398.4767791464399,
      "radius": 52.47677914643991,
      "fillStyle": "#f1c40f",
      "id": "circle_1759381517698"
    }
  ],
  "generation": 4,
  "lastUpdated": "2025-10-02T05:05:17.698Z",
  "cycleStarted": "2025-10-02T02:29:58.080Z"
};