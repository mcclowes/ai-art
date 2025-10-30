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
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 24.233490123593256px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 306.4605418131284,
        "centerX": 0.6300939082481488,
        "centerY": 0.5357914262043373
      },
      "shadow": {
        "blur": 12.224895201343275,
        "color": "#FF6B3540",
        "offsetX": -2.5565602482816874,
        "offsetY": -0.9671734133924703
      },
      "opacity": 0.9252235883823983,
      "id": "gradient_text_1761794651749"
    },
    {
      "type": "triangle",
      "x": 131.91585453198394,
      "y": 198.91585453198394,
      "size": 59.91585453198393,
      "fillStyle": "#d35400",
      "id": "triangle_1761794651749"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.4769265345795701,
      "opacity": 0.7,
      "id": "spiral_1761797181205"
    },
    {
      "type": "circle",
      "x": 65.00178118305132,
      "y": 398.0017811830513,
      "radius": 43.00178118305132,
      "fillStyle": "#f39c12",
      "id": "circle_1761797181205"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 0,
      "width": 130,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.7337973896212854,
      "id": "pattern_rect_1761800733782"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.180349561308985,
      "opacity": 0.7,
      "id": "spiral_1761800733782"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 242.68608958611793,
      "height": 83.71521323270494,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.3802075558201468,
      "opacity": 0.8,
      "id": "curve_1761804473094"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 333.9098917658338,
        "centerX": 0.5018269230568178,
        "centerY": 0.48901820567092
      },
      "shadow": {
        "blur": 19.125771583854934,
        "color": "#d3540040",
        "offsetX": 2.163573794818527,
        "offsetY": 4.757729469476999
      },
      "opacity": 0.7494880231121279,
      "id": "gradient_circle_1761807936265"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 220.83654529866328,
      "height": 66.40435568588245,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.4135983370454417,
      "opacity": 0.8,
      "id": "curve_1761811615251"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Create",
      "font": "21.62075142682186px Arial",
      "fillStyle": "#d35400",
      "id": "text_1761815151459"
    },
    {
      "type": "circle",
      "x": 331.3883763360075,
      "y": 548.3883763360076,
      "radius": 30.388376336007546,
      "fillStyle": "#e67e22",
      "id": "circle_1761818761291"
    }
  ],
  "generation": 10,
  "lastUpdated": "2025-10-30T11:05:03.122Z",
  "cycleStarted": "2025-10-30T02:35:06.400Z"
};