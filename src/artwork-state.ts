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
      "x": 82,
      "y": 184,
      "text": "Create",
      "font": "30.913945952897787px Arial",
      "fillStyle": "#d35400",
      "id": "text_1760584816462"
    },
    {
      "type": "rectangle",
      "x": 17,
      "y": 310,
      "width": 97.90880424637102,
      "height": 78.35304058744968,
      "fillStyle": "#e74c3c",
      "id": "element_1760584816463"
    },
    {
      "type": "triangle",
      "x": 74.66706871803136,
      "y": 524.6670687180314,
      "size": 74.66706871803136,
      "fillStyle": "#e74c3c",
      "id": "triangle_1760587580165"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3445816307307803,
      "opacity": 0.7,
      "id": "spiral_1760591129940"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 62.56503789576585,
        "centerX": 0.3163519695205084,
        "centerY": 0.41722447519175754
      },
      "shadow": {
        "blur": 13.072247118973904,
        "color": "#e74c3c40",
        "offsetX": -3.3754695424291126,
        "offsetY": 4.219463227024603
      },
      "opacity": 0.9335516337587685,
      "id": "gradient_rect_1760591129940"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.8926871848701508,
      "rotation": 205.10290173887384,
      "opacity": 0.757659083231874,
      "shadow": {
        "blur": 15.157765245722077,
        "color": "#f39c1240",
        "offsetX": 0.4912532166612138,
        "offsetY": -1.2251362138627209
      },
      "id": "rotated_triangle_1760594903399"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 167.10872295599296,
        "centerX": 0.602945669181592,
        "centerY": 0.5273992133784453
      },
      "shadow": {
        "blur": 14.083813657682526,
        "color": "#e74c3c40",
        "offsetX": 3.7777720867753857,
        "offsetY": 0.10851857002949661
      },
      "opacity": 0.7143673977355645,
      "id": "gradient_circle_1760594903399"
    }
  ],
  "generation": 5,
  "lastUpdated": "2025-10-16T06:08:23.399Z",
  "cycleStarted": "2025-10-16T02:32:55.705Z"
};