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
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 127.17181705809645,
      "width": 64,
      "height": 204,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 67.56005341751808,
        "centerX": 0.5075657552356008,
        "centerY": 0.5650074536504348
      },
      "shadow": {
        "blur": 8.581303472118654,
        "color": "#d3540040",
        "offsetX": -2.521180305896209,
        "offsetY": -2.852889054401393
      },
      "opacity": 0.9428011694967205,
      "id": "gradient_rect_1759979850069"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#d35400",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.815752568134371,
      "rotation": 45.25422616125563,
      "opacity": 0.8129828747610428,
      "shadow": {
        "blur": 12.468695485880712,
        "color": "#f1c40f40",
        "offsetX": 2.9057190822756285,
        "offsetY": 2.7950757117700338
      },
      "id": "rotated_triangle_1759979850069"
    },
    {
      "type": "triangle",
      "x": 70.03751226495464,
      "y": 248.03751226495464,
      "size": 70.03751226495464,
      "fillStyle": "#f39c12",
      "id": "triangle_1759982778795",
      "opacity": 0.7336754417685893
    },
    {
      "type": "text",
      "x": 16,
      "y": 334,
      "text": "Evolve",
      "font": "29.604739965190692px Arial",
      "fillStyle": "#d35400",
      "id": "text_1759986339016"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 364.82818294190355,
      "width": 712,
      "height": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 182.30431063420858,
        "centerX": 0.6692325308075806,
        "centerY": 0.6155588455683241
      },
      "shadow": {
        "blur": 16.95369168454726,
        "color": "#d3540040",
        "offsetX": -1.2301011129379025,
        "offsetY": 1.3584781357834679
      },
      "opacity": 0.8820543056055968,
      "id": "gradient_rect_1759986339017"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.4486211535393516,
      "rotation": 312.24654109350683,
      "opacity": 0.9995256995308532,
      "shadow": {
        "blur": 16.50315385605007,
        "color": "#e74c3c40",
        "offsetX": 4.7410187245401865,
        "offsetY": 3.492134681048727
      },
      "id": "rotated_triangle_1759990080750"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 28.39090593460531,
        "centerX": 0.4545081361914566,
        "centerY": 0.6923925664183759
      },
      "shadow": {
        "blur": 5.642649367488634,
        "color": "#FF6B3540",
        "offsetX": -3.4656598113118187,
        "offsetY": 3.495637126282226
      },
      "opacity": 0.9226135343801076,
      "id": "gradient_circle_1759997227759"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.2670616221737627,
      "opacity": 0.7,
      "id": "spiral_1760000752713"
    },
    {
      "type": "rectangle",
      "x": 31,
      "y": 467,
      "width": 68.09796797920794,
      "height": 63.40251430677826,
      "fillStyle": "#e74c3c",
      "id": "element_1760004356945"
    },
    {
      "type": "rectangle",
      "x": 295,
      "y": 306,
      "width": 72.78552311540318,
      "height": 85.76318857871355,
      "fillStyle": "#e74c3c",
      "id": "element_1760007908352"
    },
    {
      "type": "triangle",
      "x": 331.9444748577089,
      "y": 504.9444748577089,
      "size": 94.94447485770885,
      "fillStyle": "#e67e22",
      "id": "triangle_1760011730978"
    },
    {
      "type": "triangle",
      "x": 531.4856058719411,
      "y": 98.48560587194109,
      "size": 95.48560587194109,
      "fillStyle": "#f39c12",
      "id": "triangle_1760015601627"
    },
    {
      "type": "text",
      "x": 416,
      "y": 484,
      "text": "Harmony",
      "font": "28.78995465464859px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1760018736394"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 31.424355917287848px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 79.77614179933676,
        "centerX": 0.4614169781779859,
        "centerY": 0.3693033910696795
      },
      "shadow": {
        "blur": 17.644642494959506,
        "color": "#d3540040",
        "offsetX": -3.9872445050662098,
        "offsetY": 4.947874772087426
      },
      "opacity": 0.9388647160464054,
      "id": "gradient_text_1760026013277"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 223.81881140616548,
      "height": 80.72263816691733,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.1408543032895597,
      "opacity": 0.8,
      "id": "curve_1760029542359"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 32.10242366831804px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 3.400962596480257,
        "centerX": 0.3772537247844183,
        "centerY": 0.4109628893655586
      },
      "shadow": {
        "blur": 7.297663064199693,
        "color": "#FF6B3540",
        "offsetX": -0.8473824966469383,
        "offsetY": -2.2200977321651294
      },
      "opacity": 0.9557489851718906,
      "id": "gradient_text_1760033217393"
    }
  ],
  "generation": 17,
  "lastUpdated": "2025-10-09T18:06:57.393Z",
  "cycleStarted": "2025-10-09T02:31:30.758Z"
};