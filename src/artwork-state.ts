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
      "x": 682,
      "y": 534,
      "size": 42.10582638054581,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757554384103",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 226.1790030694657,
        "centerX": 0.6952855119154728,
        "centerY": 0.44333372257449255
      }
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
      "x": 682,
      "y": 84,
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
      "x": 16,
      "y": 234,
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
    },
    {
      "type": "triangle",
      "x": 531.1410064477209,
      "y": 98.14100644772094,
      "size": 50.14100644772094,
      "fillStyle": "#e67e22",
      "id": "triangle_1757592521799",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 334.7087183371039,
        "centerX": 0.5582883752786894,
        "centerY": 0.5461231154933596
      }
    },
    {
      "type": "text",
      "x": 416,
      "y": 484,
      "text": "Balance",
      "font": "24.399784153497937px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1757596238175"
    },
    {
      "type": "triangle",
      "x": 69.14699346523344,
      "y": 530.1469934652334,
      "size": 69.14699346523344,
      "fillStyle": "#f1c40f",
      "id": "triangle_1757606751064"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 205.17181705809645,
      "width": 168,
      "height": 48,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 96.03834421505165,
        "centerX": 0.42001742926059127,
        "centerY": 0.3248251451934456
      },
      "shadow": {
        "blur": 14.525979546001459,
        "color": "#FF6B3540",
        "offsetX": -4.604002650237784,
        "offsetY": 2.4673010017698243
      },
      "opacity": 0.7021661414989877,
      "id": "gradient_rect_1757610302380"
    },
    {
      "type": "circle",
      "x": 731.5148368741293,
      "y": 248.5148368741293,
      "radius": 47.51483687412927,
      "fillStyle": "#f39c12",
      "id": "circle_1757613992741"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 23.757175253832443px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 112.44583846647836,
        "centerX": 0.5181687882317376,
        "centerY": 0.6600158278353592
      },
      "shadow": {
        "blur": 15.034978584465982,
        "color": "#e74c3c40",
        "offsetX": 2.443674745254083,
        "offsetY": -3.494175433857496
      },
      "opacity": 0.8983099436228035,
      "id": "gradient_text_1757617491830"
    },
    {
      "type": "rectangle",
      "x": 604,
      "y": 312,
      "width": 123.18697879017954,
      "height": 73.54321199023451,
      "fillStyle": "#e74c3c",
      "id": "element_1757621122645"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.2790397171741095,
      "opacity": 0.9244915662492559,
      "id": "spiral_1757624694474",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 99.5231452110872,
        "centerX": 0.5121193805457076,
        "centerY": 0.6306880508837354
      }
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 300.04081020215614,
        "centerX": 0.32269436625146014,
        "centerY": 0.4373480581194925
      },
      "shadow": {
        "blur": 16.028785519387306,
        "color": "#d3540040",
        "offsetX": -3.978686397979989,
        "offsetY": -0.6308105132938602
      },
      "opacity": 0.6493337829468551,
      "id": "gradient_circle_1757631904141"
    },
    {
      "type": "text",
      "x": 16,
      "y": 184,
      "text": "Inspire",
      "font": "22.780368126667742px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757640771069"
    },
    {
      "type": "triangle",
      "x": 65.08221182356475,
      "y": 98.08221182356475,
      "size": 55.08221182356475,
      "fillStyle": "#e67e22",
      "id": "triangle_1757646766348"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 142,
      "width": 131.80352875875622,
      "height": 113.10376235590118,
      "fillStyle": "#f39c12",
      "id": "element_1757649972809"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 268.82818294190355,
      "width": 440,
      "height": 204,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 252.7461248793687,
        "centerX": 0.35942011445572336,
        "centerY": 0.4274223216234254
      },
      "shadow": {
        "blur": 19.319701520077576,
        "color": "#e74c3c40",
        "offsetX": -4.983236018980859,
        "offsetY": -2.0628133451241704
      },
      "opacity": 0.9984895483475147,
      "id": "gradient_rect_1757657233887"
    },
    {
      "type": "circle",
      "x": 131.60715393862517,
      "y": 348.6071539386252,
      "radius": 40.60715393862517,
      "fillStyle": "#f1c40f",
      "id": "circle_1757660706188"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 64.17181705809645,
      "width": 40,
      "height": 330,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 272.38903472064857,
        "centerX": 0.39102239363519314,
        "centerY": 0.3026894081930974
      },
      "shadow": {
        "blur": 16.435732195319385,
        "color": "#FF6B3540",
        "offsetX": -4.327053038114112,
        "offsetY": 2.628272852626841
      },
      "opacity": 0.9046744163380319,
      "id": "gradient_rect_1757664416484"
    }
  ],
  "generation": 33,
  "lastUpdated": "2025-09-12T08:06:56.484Z",
  "cycleStarted": "2025-09-11T00:20:59.429Z"
};