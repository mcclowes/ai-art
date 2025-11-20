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
      "fillStyle": "#f39c12",
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
      "x": 16,
      "y": 184,
      "text": "Harmony",
      "font": "30.540601431853215px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1763611585896"
    },
    {
      "type": "circle",
      "x": 356,
      "y": 356,
      "radius": 356,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 44.383909821063966,
        "centerX": 0.4822798181327717,
        "centerY": 0.45810895228625614
      },
      "shadow": {
        "blur": 11.260133650907655,
        "color": "#e74c3c40",
        "offsetX": -2.5009641790567105,
        "offsetY": -3.8710245034293256
      },
      "opacity": 0.8694474487428134,
      "id": "gradient_circle_1763611585896"
    },
    {
      "type": "text",
      "x": 16,
      "y": 384,
      "text": "Create",
      "font": "23.58850848397286px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1763618867662"
    },
    {
      "type": "triangle",
      "x": 131.3644083137783,
      "y": 499.3644083137783,
      "size": 56.36440831377832,
      "fillStyle": "#d35400",
      "id": "triangle_1763622352499"
    },
    {
      "type": "circle",
      "x": 265.8877281245637,
      "y": 66.8877281245637,
      "radius": 66.8877281245637,
      "fillStyle": "#e74c3c",
      "id": "circle_1763626054159"
    }
  ],
  "generation": 6,
  "lastUpdated": "2025-11-20T08:07:34.159Z",
  "cycleStarted": "2025-11-20T03:24:04.582Z"
};