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
      "x": 32,
      "y": 349,
      "width": 200,
      "height": 100,
      "fillStyle": "#f1c40f",
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
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.436266329126586,
      "rotation": 355.9622110200677,
      "opacity": 0.7234940184719327,
      "shadow": {
        "blur": 16.687087740396194,
        "color": "#d3540040",
        "offsetX": -4.199353721805403,
        "offsetY": 0.07264652680127437
      },
      "id": "rotated_triangle_1761189618129"
    },
    {
      "type": "triangle",
      "x": 131.37047009811295,
      "y": 199.37047009811295,
      "size": 72.37047009811296,
      "fillStyle": "#e74c3c",
      "id": "triangle_1761189618130"
    },
    {
      "type": "spiral",
      "x": 282,
      "y": 234,
      "radius": 39,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.2263068745436456,
      "opacity": 0.7,
      "id": "spiral_1761192387769"
    },
    {
      "type": "circle",
      "x": 131.56009180699678,
      "y": 55.56009180699678,
      "radius": 55.56009180699678,
      "fillStyle": "#f1c40f",
      "id": "circle_1761195923712"
    },
    {
      "type": "triangle",
      "x": 65.76524991733793,
      "y": 498.76524991733794,
      "size": 49.765249917337925,
      "fillStyle": "#e67e22",
      "id": "triangle_1761199684484"
    },
    {
      "type": "text",
      "x": 282,
      "y": 84,
      "text": "Balance",
      "font": "19.919894911088143px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1761199684484"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.9506283564448492,
      "rotation": 296.93518082384344,
      "opacity": 0.9689630261215991,
      "shadow": {
        "blur": 18.434063484099518,
        "color": "#e67e2240",
        "offsetX": -0.7643205827572981,
        "offsetY": 1.4045013993095967
      },
      "id": "rotated_triangle_1761203152725"
    }
  ],
  "generation": 6,
  "lastUpdated": "2025-10-23T07:05:52.725Z",
  "cycleStarted": "2025-10-23T02:33:03.243Z"
};