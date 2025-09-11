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
      "fillStyle": "#f1c40f",
      "id": "rect1",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 271.3795934992062,
        "centerX": 0.6506742407564072,
        "centerY": 0.5552980191898469
      },
      "shadow": {
        "blur": 15.274628497008905,
        "color": "#e67e2240",
        "offsetX": 0.24587704508647334,
        "offsetY": -2.539057628856314
      }
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
      "x": 131.1058263805458,
      "y": 248.1058263805458,
      "size": 42.10582638054581,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757554384103"
    },
    {
      "type": "triangle",
      "x": 131.12564896607023,
      "y": 349.12564896607023,
      "size": 42.12564896607023,
      "fillStyle": "#d35400",
      "id": "triangle_1757557889984"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 334.3918988035274,
        "centerX": 0.39886793247341545,
        "centerY": 0.31590208273966774
      },
      "shadow": {
        "blur": 17.316537327212636,
        "color": "#FF6B3540",
        "offsetX": 2.6494957311195177,
        "offsetY": 4.903988747004666
      },
      "opacity": 0.9612031388001051,
      "id": "gradient_circle_1757557889984"
    },
    {
      "type": "rectangle",
      "x": 265.5624227441286,
      "y": 0,
      "width": 80,
      "height": 712,
      "fillStyle": "#f39c12",
      "pattern": "stripes",
      "opacity": 0.7565813734759048,
      "id": "pattern_rect_1757560649080",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 63.95122393450439,
        "centerX": 0.4108072385234503,
        "centerY": 0.5223299454620343
      }
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Aesthetic",
      "font": "33.92740072464659px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1757560649080"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 9,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.8094710273529375,
      "opacity": 0.7,
      "id": "spiral_1757567129279"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 169.82428836622555,
        "centerX": 0.37807054507166243,
        "centerY": 0.30249663753032374
      },
      "shadow": {
        "blur": 12.624393159826065,
        "color": "#e74c3c40",
        "offsetX": 1.3711227505698043,
        "offsetY": 2.4586839972399366
      },
      "opacity": 0.8713537067658101,
      "id": "gradient_circle_1757570847225"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.8462563192315273,
      "opacity": 0.7,
      "id": "spiral_1757578045993"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 26.79369533323605px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 302.43650400593725,
        "centerX": 0.6341747087364291,
        "centerY": 0.533504848134646
      },
      "shadow": {
        "blur": 14.934102733222009,
        "color": "#FF6B3540",
        "offsetX": -4.407272097465638,
        "offsetY": 2.5652186900964686
      },
      "opacity": 0.9495639668743298,
      "id": "gradient_text_1757581541177"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 31.845125233573775px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 8.188403155882362,
        "centerX": 0.3849807349239057,
        "centerY": 0.6190800189095662
      },
      "shadow": {
        "blur": 18.91322986560751,
        "color": "#e74c3c40",
        "offsetX": -2.832273141325503,
        "offsetY": -3.5376131563277413
      },
      "opacity": 0.9068291569755301,
      "id": "gradient_text_1757585125950"
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Inspire",
      "font": "20.935579216112092px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1757588694908"
    }
  ],
  "generation": 12,
  "lastUpdated": "2025-09-11T11:04:54.908Z",
  "cycleStarted": "2025-09-11T00:20:59.429Z"
};