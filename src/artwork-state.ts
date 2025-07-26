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
      "x": 0,
      "y": 149,
      "width": 200,
      "height": 100,
      "fillStyle": "#e67e22",
      "id": "rect1",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 215.7884450212884,
        "centerX": 0.5159725719180519,
        "centerY": 0.5725529069350064
      },
      "opacity": 0.8367581730716612
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
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 30.00322533692062px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 191.1496080151411,
        "centerX": 0.5131710002430263,
        "centerY": 0.35368886848169456
      },
      "shadow": {
        "blur": 17.527283132002985,
        "color": "#d3540040",
        "offsetX": -1.9005647637661016,
        "offsetY": -0.5597306264269974
      },
      "opacity": 0.9967810814337729,
      "id": "gradient_text_1753304721862"
    },
    {
      "type": "circle",
      "x": 131.33078457855032,
      "y": 248.33078457855032,
      "radius": 34.33078457855033,
      "fillStyle": "#f1c40f",
      "id": "circle_1753308304710"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 20,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 318.0700902472751,
        "centerX": 0.4502778242245714,
        "centerY": 0.49875369019640836
      },
      "shadow": {
        "blur": 17.320370916425304,
        "color": "#FF6B3540",
        "offsetX": 2.2738422046453444,
        "offsetY": 1.533355485618431
      },
      "opacity": 0.7995204155830148,
      "id": "gradient_circle_1753308304710"
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 209.17181705809645,
      "width": 80,
      "height": 40,
      "fillStyle": "#e74c3c",
      "pattern": "stripes",
      "opacity": 0.7565650647420407,
      "id": "pattern_rect_1753311918674",
      "shadow": {
        "blur": 18.92209917110781,
        "color": "#e74c3c40",
        "offsetX": 1.1013206675659237,
        "offsetY": -0.8023379981934013
      }
    },
    {
      "type": "circle",
      "x": 616,
      "y": 534,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 188.57233293948954,
        "centerX": 0.3681856434630565,
        "centerY": 0.6164186193093502
      },
      "shadow": {
        "blur": 13.0748893199308,
        "color": "#e74c3c40",
        "offsetX": 2.735726261840239,
        "offsetY": -1.604101540722651
      },
      "opacity": 0.7891048390193661,
      "id": "gradient_circle_1753311918675"
    },
    {
      "type": "triangle",
      "x": 82,
      "y": 334,
      "size": 10,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.0634650470979023,
      "rotation": 205.94224980202947,
      "opacity": 0.7132631504770454,
      "shadow": {
        "blur": 9.15423370738393,
        "color": "#f39c1240",
        "offsetX": 3.021401767297739,
        "offsetY": -4.371966590757355
      },
      "id": "rotated_triangle_1753316632200"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 267,
      "radius": 267,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.3093407136123427,
      "opacity": 0.9252312764155626,
      "id": "spiral_1753324969740",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 346.71603040240603,
        "centerX": 0.3125807096507288,
        "centerY": 0.32388820383433675
      },
      "shadow": {
        "blur": 14.826840181934452,
        "color": "#e74c3c40",
        "offsetX": -3.607227258400474,
        "offsetY": 4.368513132295428
      }
    },
    {
      "type": "spiral",
      "x": 82,
      "y": 384,
      "radius": 39,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3257829501425515,
      "opacity": 0.7,
      "id": "spiral_1753327996919"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 169.91253173136099,
      "height": 64.44652010980595,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 3.1008433648316984,
      "opacity": 0.8498155301799621,
      "id": "curve_1753330730338"
    },
    {
      "type": "circle",
      "x": 65.82285453955254,
      "y": 498.8228545395525,
      "radius": 65.82285453955254,
      "fillStyle": "#d35400",
      "id": "circle_1753337278290"
    },
    {
      "type": "rectangle",
      "x": 482,
      "y": 499,
      "width": 99.29326094154098,
      "height": 99.42906754409742,
      "fillStyle": "#e74c3c",
      "id": "element_1753340854524"
    },
    {
      "type": "text",
      "x": 282,
      "y": 384,
      "text": "Vision",
      "font": "18.580965929347897px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1753344445040"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.320569193873366,
      "rotation": 254.4926556543656,
      "opacity": 0.8527518972283643,
      "shadow": {
        "blur": 8.711066911605734,
        "color": "#e67e2240",
        "offsetX": 3.4358780597142022,
        "offsetY": -3.831225683472803
      },
      "id": "rotated_triangle_1753348088307"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 25.136175627459608px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 336.1781343790768,
        "centerX": 0.6938798520836997,
        "centerY": 0.6620538690454527
      },
      "shadow": {
        "blur": 15.08493015362792,
        "color": "#e74c3c40",
        "offsetX": 0.16009546674999875,
        "offsetY": 3.9324686521887937
      },
      "opacity": 0.8906027573431491,
      "id": "gradient_text_1753365983979"
    },
    {
      "type": "triangle",
      "x": 531.7291970247408,
      "y": 56.72919702474073,
      "size": 56.72919702474073,
      "fillStyle": "#d35400",
      "id": "triangle_1753376801619"
    },
    {
      "type": "rectangle",
      "x": 382,
      "y": 490,
      "width": 168,
      "height": 18,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 11.091483243264921,
        "centerX": 0.6919880054720122,
        "centerY": 0.5816637652924334
      },
      "shadow": {
        "blur": 12.220852153574139,
        "color": "#d3540040",
        "offsetX": 2.879911692689725,
        "offsetY": -0.07750058310374719
      },
      "opacity": 0.9066502939794852,
      "id": "gradient_rect_1753380415067"
    },
    {
      "type": "circle",
      "x": 282,
      "y": 484,
      "radius": 79.85115552737437,
      "fillStyle": "#f1c40f",
      "id": "circle_1753383951344"
    },
    {
      "type": "rectangle",
      "x": 120,
      "y": 247,
      "width": 24,
      "height": 204,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 93.35478237125713,
        "centerX": 0.36172066335221575,
        "centerY": 0.32943260505919164
      },
      "shadow": {
        "blur": 12.815818825337505,
        "color": "#FF6B3540",
        "offsetX": 2.888565502492126,
        "offsetY": 0.16483996371279286
      },
      "opacity": 0.7886791953445919,
      "id": "gradient_rect_1753387508626"
    },
    {
      "type": "triangle",
      "x": 712.6700813253275,
      "y": 98.67008132532749,
      "size": 86.67008132532749,
      "fillStyle": "#e74c3c",
      "id": "triangle_1753391120713"
    },
    {
      "type": "triangle",
      "x": 665.969515725267,
      "y": 248.96951572526694,
      "size": 51.96951572526695,
      "fillStyle": "#f39c12",
      "id": "triangle_1753394741177"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.073054807701778,
      "rotation": 46.68540793787117,
      "opacity": 0.7577569221799832,
      "shadow": {
        "blur": 11.715636944181018,
        "color": "#f1c40f40",
        "offsetX": -3.8891680551032892,
        "offsetY": -2.6659198608384105
      },
      "id": "rotated_triangle_1753398325366"
    },
    {
      "type": "triangle",
      "x": 665.6735745060566,
      "y": 348.6735745060566,
      "size": 47.673574506056596,
      "fillStyle": "#e74c3c",
      "id": "triangle_1753403031772"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 194.05628793761164,
      "height": 88.91702164941576,
      "fillStyle": "#d35400",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 4.136201741776295,
      "opacity": 0.8,
      "id": "curve_1753407241348"
    },
    {
      "type": "circle",
      "x": 68.56915010458064,
      "y": 98.56915010458064,
      "radius": 68.56915010458064,
      "fillStyle": "#e74c3c",
      "id": "circle_1753423663538"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 361.82818294190355,
      "width": 168,
      "height": 18,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 103.3611547681901,
        "centerX": 0.5224154970452226,
        "centerY": 0.39153714129774586
      },
      "shadow": {
        "blur": 14.441751394861233,
        "color": "#d3540040",
        "offsetX": -2.5469712657886556,
        "offsetY": -3.31782256719507
      },
      "opacity": 0.9465671341490263,
      "id": "gradient_rect_1753430836328"
    },
    {
      "type": "rectangle",
      "x": 3,
      "y": 133,
      "width": 124.24324115359576,
      "height": 132.1995301791219,
      "fillStyle": "#e74c3c",
      "id": "element_1753434463391"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 139.22207747250152,
        "centerX": 0.40185843192772924,
        "centerY": 0.6280415035337901
      },
      "shadow": {
        "blur": 6.461871025569107,
        "color": "#d3540040",
        "offsetX": -2.2265558782739414,
        "offsetY": -1.4929556557601198
      },
      "opacity": 0.8269531041327339,
      "id": "gradient_circle_1753437954706"
    },
    {
      "type": "circle",
      "x": 131.96349741622592,
      "y": 248.96349741622592,
      "radius": 78.96349741622592,
      "fillStyle": "#e74c3c",
      "id": "circle_1753441504710"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 166.17181705809645,
      "width": 168,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 7.664553405241881,
        "centerX": 0.42805527085237766,
        "centerY": 0.5899529898699903
      },
      "shadow": {
        "blur": 9.047361631843218,
        "color": "#d3540040",
        "offsetX": -3.973218319957319,
        "offsetY": 4.22392571104697
      },
      "opacity": 0.911517831974721,
      "id": "gradient_rect_1753449369782"
    },
    {
      "type": "circle",
      "x": 265.8265814643174,
      "y": 98.82658146431743,
      "radius": 50.82658146431743,
      "fillStyle": "#e74c3c",
      "id": "circle_1753455937080"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 355.82818294190355,
      "width": 440,
      "height": 30,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 110.917020218579,
        "centerX": 0.582338372770521,
        "centerY": 0.5296062187519557
      },
      "shadow": {
        "blur": 12.360348747094049,
        "color": "#e74c3c40",
        "offsetX": 3.709361784179894,
        "offsetY": 1.002329861530109
      },
      "opacity": 0.9696021186170587,
      "id": "gradient_rect_1753459567746"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 9,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.245341889672307,
      "opacity": 0.7,
      "id": "spiral_1753463182317"
    },
    {
      "type": "triangle",
      "x": 65.08695492102719,
      "y": 499.0869549210272,
      "size": 51.086954921027186,
      "fillStyle": "#f39c12",
      "id": "triangle_1753477499914"
    },
    {
      "type": "rectangle",
      "x": 207,
      "y": 0,
      "width": 117.86243762866634,
      "height": 98.65701338806147,
      "fillStyle": "#f39c12",
      "id": "element_1753481100837"
    },
    {
      "type": "rectangle",
      "x": 412,
      "y": 39,
      "width": 106.05526025051391,
      "height": 119.315636484105,
      "fillStyle": "#f39c12",
      "id": "element_1753484721768"
    },
    {
      "type": "triangle",
      "x": 531.3841102227535,
      "y": 548.3841102227535,
      "size": 46.38411022275353,
      "fillStyle": "#f1c40f",
      "id": "triangle_1753489364346"
    },
    {
      "type": "triangle",
      "x": 731.0922824020749,
      "y": 49.09228240207493,
      "size": 47.09228240207493,
      "fillStyle": "#f1c40f",
      "id": "triangle_1753497556787"
    }
  ],
  "generation": 55,
  "lastUpdated": "2025-07-26T02:39:16.787Z",
  "cycleStarted": "2025-07-23T20:05:50.866Z"
};