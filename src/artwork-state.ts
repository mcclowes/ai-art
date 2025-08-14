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
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 205.82818294190355,
      "width": 64,
      "height": 330,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 268.8573312957899,
        "centerX": 0.41813176055604206,
        "centerY": 0.5154893631791831
      },
      "shadow": {
        "blur": 7.550644720604086,
        "color": "#FF6B3540",
        "offsetX": -0.9685805190707981,
        "offsetY": 3.1566257611260884
      },
      "opacity": 0.7338691354424642,
      "id": "gradient_rect_1755126325032"
    },
    {
      "type": "text",
      "x": 16,
      "y": 234,
      "text": "Aesthetic",
      "font": "33.534827348090744px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1755126325033"
    },
    {
      "type": "curve",
      "x": 211,
      "y": 65,
      "width": 240.26265726953267,
      "height": 66.9000951878163,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.340787575813853,
      "opacity": 0.8,
      "id": "curve_1755130963645"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 24.915496198994873px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 123.85504915896415,
        "centerX": 0.5055657105001602,
        "centerY": 0.47369311837642825
      },
      "shadow": {
        "blur": 7.713501026692288,
        "color": "#FF6B3540",
        "offsetX": -1.31324872826039,
        "offsetY": -3.34442454245085
      },
      "opacity": 0.8307476359753709,
      "id": "gradient_text_1755130963646"
    },
    {
      "type": "triangle",
      "x": 131.7429946226522,
      "y": 398.7429946226522,
      "size": 64.74299462265219,
      "fillStyle": "#f39c12",
      "id": "triangle_1755135228178"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Inspire",
      "font": "27.558200737709768px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1755135228178"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 199.83442859809634,
      "height": 92.99149289653755,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 3.2391114675384403,
      "opacity": 0.8533695062095842,
      "id": "curve_1755139064368",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 137.45075105969747,
        "centerX": 0.5950886211589131,
        "centerY": 0.40701120367279264
      }
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 181.1606704755231,
      "height": 87.34887914766372,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.9147236462776425,
      "opacity": 0.8,
      "id": "curve_1755142185715"
    },
    {
      "type": "triangle",
      "x": 265.74497685780614,
      "y": 498.74497685780614,
      "size": 79.74497685780617,
      "fillStyle": "#e67e22",
      "id": "triangle_1755144699550"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 195.6722935400607,
      "height": 61.02544785151282,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 3.274043247361814,
      "opacity": 0.8,
      "id": "curve_1755144699550"
    },
    {
      "type": "rectangle",
      "x": 427,
      "y": 0,
      "width": 76.1205691264615,
      "height": 139.53983866551107,
      "fillStyle": "#d35400",
      "id": "element_1755147980966"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 187.17942806090872,
      "height": 52.77266021251319,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.1363461093137204,
      "opacity": 0.8,
      "id": "curve_1755147980966"
    },
    {
      "type": "circle",
      "x": 465.32031639245145,
      "y": 199.32031639245145,
      "radius": 76.32031639245143,
      "fillStyle": "#f1c40f",
      "id": "circle_1755151659356"
    },
    {
      "type": "rectangle",
      "x": 479,
      "y": 468,
      "width": 105.83601597273706,
      "height": 62.604120065310376,
      "fillStyle": "#e74c3c",
      "id": "element_1755155193811"
    },
    {
      "type": "text",
      "x": 616,
      "y": 84,
      "text": "Vision",
      "font": "21.87849456715247px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1755158859974"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 109.8364984770242,
        "centerX": 0.6744828498080677,
        "centerY": 0.648823904722863
      },
      "shadow": {
        "blur": 13.757880296720469,
        "color": "#e74c3c40",
        "offsetX": 3.728471497202122,
        "offsetY": -1.5817509707112687
      },
      "opacity": 0.8139527797913544,
      "id": "gradient_circle_1755162431362"
    }
  ],
  "generation": 12,
  "lastUpdated": "2025-08-14T09:07:11.362Z",
  "cycleStarted": "2025-08-13T22:05:34.253Z"
};