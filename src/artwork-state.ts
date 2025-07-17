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
      "fillStyle": "#e74c3c",
      "id": "rect1"
    },
    {
      "type": "text",
      "x": 50.15825594441219,
      "y": 403.9367413233695,
      "text": "Making",
      "font": "26.82886155053166px Arial",
      "fillStyle": "#2ecc71",
      "id": "copilot_text_1752726527797"
    },
    {
      "type": "rectangle",
      "x": 4.878862579303302,
      "y": 113.67673561458005,
      "width": 67.1886292641572,
      "height": 41.52257288524915,
      "fillStyle": "#3498db",
      "id": "copilot_complement_1752726527796"
    },
    {
      "type": "triangle",
      "x": 85.22134177946546,
      "y": 248.22134177946546,
      "size": 85.22134177946546,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752727221786"
    },
    {
      "type": "rectangle",
      "x": 691.7557474043759,
      "y": 467.2383354380168,
      "width": 63.406346826868486,
      "height": 39.18512233900472,
      "fillStyle": "#e74c3c",
      "id": "copilot_complement_1752727229153"
    },
    {
      "type": "triangle",
      "x": 65.43510986076092,
      "y": 349.4351098607609,
      "size": 62.43510986076092,
      "fillStyle": "#f39c12",
      "id": "triangle_1752727309721"
    },
    {
      "type": "triangle",
      "x": 131.2030768365079,
      "y": 499.2030768365079,
      "size": 86.2030768365079,
      "fillStyle": "#f39c12",
      "id": "triangle_1752727309721"
    },
    {
      "type": "triangle",
      "x": 331.29377939446465,
      "y": 98.29377939446466,
      "size": 51.293779394464664,
      "fillStyle": "#3498db",
      "id": "triangle_1752728227896"
    },
    {
      "type": "circle",
      "x": 265.6145865696705,
      "y": 198.6145865696705,
      "radius": 68.61458656967051,
      "fillStyle": "#3498db",
      "id": "circle_1752728227896"
    },
    {
      "type": "rectangle",
      "x": 236,
      "y": 518,
      "width": 58.64674671197657,
      "height": 61.37420944744174,
      "fillStyle": "#9b59b6",
      "id": "copilot_enhancement_1752728233852"
    },
    {
      "type": "text",
      "x": 341.62724802755355,
      "y": 418.7330957137226,
      "text": "Harmony",
      "font": "28.659823258997793px Arial",
      "fillStyle": "#e74c3c",
      "id": "copilot_text_1752728233852"
    },
    {
      "type": "text",
      "x": 441.6244937386053,
      "y": 371.37185161367086,
      "text": "Improve",
      "font": "29.97956415000109px Arial",
      "fillStyle": "#9b59b6",
      "id": "copilot_text_1752746269927"
    },
    {
      "type": "rectangle",
      "x": 30.282331611192404,
      "y": 392.8123806846046,
      "width": 93.43972346627704,
      "height": 31.79406321665973,
      "fillStyle": "#9b59b6",
      "id": "copilot_enhancement_1752746656785"
    },
    {
      "type": "circle",
      "x": 531.6494179579324,
      "y": 73.64941795793237,
      "radius": 73.64941795793237,
      "fillStyle": "#9b59b6",
      "id": "circle_1752746755310"
    },
    {
      "type": "rectangle",
      "x": 435,
      "y": 186,
      "width": 61.45863291620179,
      "height": 125.1796988825111,
      "fillStyle": "#f39c12",
      "id": "element_1752750304659"
    }
  ],
  "generation": 12,
  "lastUpdated": "2025-07-17T11:05:04.659Z",
  "cycleStarted": "2025-07-16T19:12:58.892Z"
};