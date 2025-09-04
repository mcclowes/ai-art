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
      "x": 82,
      "y": 334,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 482,
      "y": 334,
      "radius": 32,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 63.97305610301271,
        "centerX": 0.3660980993202287,
        "centerY": 0.40315138198503353
      },
      "shadow": {
        "blur": 15.880291140456052,
        "color": "#d3540040",
        "offsetX": -3.9572466862352162,
        "offsetY": 1.6111255169292305
      },
      "opacity": 0.7712827142457442,
      "id": "gradient_circle_1756949554665"
    },
    {
      "type": "triangle",
      "x": 79.2361984511839,
      "y": 199.2361984511839,
      "size": 79.2361984511839,
      "fillStyle": "#f1c40f",
      "id": "triangle_1756952977967"
    },
    {
      "type": "text",
      "x": 16,
      "y": 484,
      "text": "Evolve",
      "font": "20.807520446658827px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1756955604512"
    },
    {
      "type": "circle",
      "x": 265.75614879022265,
      "y": 48.75614879022264,
      "radius": 45.75614879022264,
      "fillStyle": "#e74c3c",
      "id": "circle_1756958756947"
    },
    {
      "type": "circle",
      "x": 331.3428052398723,
      "y": 248.34280523987232,
      "radius": 56.34280523987232,
      "fillStyle": "#e74c3c",
      "id": "circle_1756958756947"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 205.17181705809645,
      "width": 104,
      "height": 48,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 309.490179724304,
        "centerX": 0.6422361760993504,
        "centerY": 0.6392773565255947
      },
      "shadow": {
        "blur": 13.097634670043028,
        "color": "#d3540040",
        "offsetX": 1.1504445149976021,
        "offsetY": -0.5162127058349775
      },
      "opacity": 0.9920695336305998,
      "id": "gradient_rect_1756962337574"
    },
    {
      "type": "circle",
      "x": 416,
      "y": 484,
      "radius": 54.628556402051196,
      "fillStyle": "#e74c3c",
      "id": "circle_1756962337574"
    },
    {
      "type": "rectangle",
      "x": 458,
      "y": 75,
      "width": 16,
      "height": 48,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 30.21680254184765,
        "centerX": 0.4651132640484873,
        "centerY": 0.5925477877112735
      },
      "shadow": {
        "blur": 18.41722168788636,
        "color": "#d3540040",
        "offsetX": 0.5746338583867043,
        "offsetY": -4.954275584845355
      },
      "opacity": 0.9812530576651701,
      "id": "gradient_rect_1756966038225"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 205.94771762559424,
      "height": 79.25437494251807,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.129936958527579,
      "opacity": 0.8553316126226711,
      "id": "curve_1756966038225",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 270.70719953694544,
        "centerX": 0.6070923223360927,
        "centerY": 0.511033559407961
      },
      "shadow": {
        "blur": 13.61177171145718,
        "color": "#e67e2240",
        "offsetX": 1.8466006510612765,
        "offsetY": 2.619645589375306
      }
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Harmony",
      "font": "31.326672796308323px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1756969523229"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 34.757898889333724px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 134.3311879849294,
        "centerX": 0.5566812679541822,
        "centerY": 0.31989021142518803
      },
      "shadow": {
        "blur": 17.755732135663294,
        "color": "#e74c3c40",
        "offsetX": 1.3689857256356186,
        "offsetY": -1.3080356818141192
      },
      "opacity": 0.9070931304814971,
      "id": "gradient_text_1756973207103"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 24,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.7831926218754273,
      "opacity": 0.7,
      "id": "spiral_1756976742376"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 267,
      "radius": 267,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3808753959162319,
      "opacity": 0.7,
      "id": "spiral_1756980330762"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 84,
      "radius": 52.12378646928149,
      "fillStyle": "#f39c12",
      "id": "circle_1756983874086",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 70.04150154803528,
        "centerX": 0.5839519348354982,
        "centerY": 0.6847053263819167
      },
      "shadow": {
        "blur": 6.33385923917141,
        "color": "#f39c1240",
        "offsetX": -0.48160715319110814,
        "offsetY": 4.37450115839146
      }
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 93.17181705809645,
      "width": 80,
      "height": 272,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.6985114642783097,
      "id": "pattern_rect_1756987722742"
    },
    {
      "type": "triangle",
      "x": 331.2841051341592,
      "y": 398.2841051341592,
      "size": 66.28410513415919,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756991454501"
    },
    {
      "type": "circle",
      "x": 665.0891189627264,
      "y": 248.08911896272642,
      "radius": 46.08911896272642,
      "fillStyle": "#f1c40f",
      "id": "circle_1756994703123"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.7696751831253241,
      "rotation": 36.627731979873175,
      "opacity": 0.8343369021327088,
      "shadow": {
        "blur": 19.40024307054252,
        "color": "#f1c40f40",
        "offsetX": -0.9352494057523959,
        "offsetY": -0.39885055260173097
      },
      "id": "rotated_triangle_1756998314621"
    },
    {
      "type": "rectangle",
      "x": 611,
      "y": 293,
      "width": 108.09342466529631,
      "height": 112.86280933637815,
      "fillStyle": "#f1c40f",
      "id": "element_1757005484645"
    },
    {
      "type": "text",
      "x": 616,
      "y": 384,
      "text": "Create",
      "font": "29.559727085450003px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757009194949"
    },
    {
      "type": "triangle",
      "x": 665.7569387318853,
      "y": 498.75693873188527,
      "size": 60.756938731885256,
      "fillStyle": "#d35400",
      "id": "triangle_1757012675259"
    },
    {
      "type": "circle",
      "x": 71.2332164231459,
      "y": 71.2332164231459,
      "radius": 71.2332164231459,
      "fillStyle": "#f1c40f",
      "id": "circle_1757016329346"
    }
  ],
  "generation": 21,
  "lastUpdated": "2025-09-04T20:05:29.346Z",
  "cycleStarted": "2025-09-04T00:19:55.543Z"
};