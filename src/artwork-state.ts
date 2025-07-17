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
      "x": 151,
      "y": 82,
      "width": 130.12145536400706,
      "height": 57.07535692995391,
      "fillStyle": "#f39c12",
      "id": "element_1752677536165"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 310,
      "width": 67.28405940904902,
      "height": 77.70774308605628,
      "fillStyle": "#d35400",
      "id": "element_1752677671341"
    },
    {
      "type": "rectangle",
      "x": 568,
      "y": 209,
      "width": 128.45533399862614,
      "height": 108.66204749049913,
      "fillStyle": "#e74c3c",
      "id": "element_1752678460915"
    },
    {
      "type": "rectangle",
      "x": 491,
      "y": 0,
      "width": 80.27450640700856,
      "height": 109.96077453880888,
      "fillStyle": "#d35400",
      "id": "element_1752678617268"
    },
    {
      "type": "rectangle",
      "x": 682,
      "y": 141,
      "width": 98.37053890677569,
      "height": 115.92081874275152,
      "fillStyle": "#f39c12",
      "id": "element_1752678617268"
    },
    {
      "type": "text",
      "x": 82,
      "y": 384,
      "text": "Harmony",
      "font": "26.541380780013792px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1752678626808"
    },
    {
      "type": "rectangle",
      "x": 71,
      "y": 463,
      "width": 120.33619369416976,
      "height": 136.10498470106728,
      "fillStyle": "#f39c12",
      "id": "element_1752678626808"
    },
    {
      "type": "rectangle",
      "x": 200,
      "y": 0,
      "width": 130.75257804378685,
      "height": 124.80549969187908,
      "fillStyle": "#f1c40f",
      "id": "element_1752678626908"
    },
    {
      "type": "text",
      "x": 282,
      "y": 234,
      "text": "Transform",
      "font": "27.232682721401194px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1752678820257"
    },
    {
      "type": "text",
      "x": 282,
      "y": 534,
      "text": "Evolve",
      "font": "23.5078118063695px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1752678828772"
    },
    {
      "type": "rectangle",
      "x": 15,
      "y": 210,
      "width": 101.88088346876697,
      "height": 77.30921311476395,
      "fillStyle": "#e67e22",
      "id": "element_1752678828823"
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Vision",
      "font": "25.051557322945882px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1752685614252"
    },
    {
      "type": "text",
      "x": 682,
      "y": 34,
      "text": "Create",
      "font": "25.854166087398973px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1752689220358"
    }
  ],
  "generation": 22,
  "lastUpdated": "2025-07-17T00:23:57.406Z"
};