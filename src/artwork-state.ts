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
      "id": "rect1",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 174.17275782289784,
        "centerX": 0.4655732349004523,
        "centerY": 0.39553137702132324
      },
      "shadow": {
        "blur": 10.81079652069181,
        "color": "#e67e2240",
        "offsetX": -0.5228844390062992,
        "offsetY": 2.1617575310252635
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
      "x": 67.47848652868743,
      "y": 248.47848652868743,
      "size": 67.47848652868743,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756340476592"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 152.493401740714,
      "height": 77.69873911251979,
      "fillStyle": "#f39c12",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.187494462776094,
      "opacity": 0.8,
      "id": "curve_1756340476592"
    },
    {
      "type": "text",
      "x": 16,
      "y": 334,
      "text": "Vision",
      "font": "28.764798013586564px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1756344769681"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Balance",
      "font": "29.78687484196817px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1756344769681"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Aesthetic",
      "font": "18.769398056525677px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1756348342887"
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 209.17181705809645,
      "width": 30,
      "height": 40,
      "fillStyle": "#e74c3c",
      "pattern": "waves",
      "opacity": 0.8177235587249769,
      "id": "pattern_rect_1756348342888",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 149.6580704239032,
        "centerX": 0.6317388647086144,
        "centerY": 0.36170514100370477
      }
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 20,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 170.30841279750638,
        "centerX": 0.40703221874293555,
        "centerY": 0.5782990246130969
      },
      "shadow": {
        "blur": 16.119729210750606,
        "color": "#d3540040",
        "offsetX": -4.48244451127662,
        "offsetY": 4.6831289264456455
      },
      "opacity": 0.8615625079216311,
      "id": "gradient_circle_1756351176541"
    },
    {
      "type": "rectangle",
      "x": 707,
      "y": 229,
      "width": 50,
      "height": 40,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.8835915531493752,
      "id": "pattern_rect_1756351176541"
    },
    {
      "type": "rectangle",
      "x": 202,
      "y": 511,
      "width": 127.82255701850359,
      "height": 74.42700964046216,
      "fillStyle": "#f1c40f",
      "id": "element_1756353965026",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 296.64735032538573,
        "centerX": 0.566361008600806,
        "centerY": 0.5458647679201515
      }
    },
    {
      "type": "triangle",
      "x": 531.3582583528801,
      "y": 98.35825835288001,
      "size": 66.35825835288001,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756357524498"
    },
    {
      "type": "circle",
      "x": 531.7812047013954,
      "y": 498.7812047013954,
      "radius": 44.7812047013954,
      "fillStyle": "#d35400",
      "id": "circle_1756357524498",
      "shadow": {
        "blur": 14.962266639681353,
        "color": "#d3540040",
        "offsetX": 2.7119143697699277,
        "offsetY": 3.589399701637115
      },
      "opacity": 0.9864727555976289
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 240.62690084079168,
      "height": 84.62824787642965,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 4.092933388176867,
      "opacity": 0.8,
      "id": "curve_1756361260443"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 216.72283651655255,
        "centerX": 0.5186451693935619,
        "centerY": 0.48334853139547596
      },
      "shadow": {
        "blur": 8.750240942839426,
        "color": "#FF6B3540",
        "offsetX": 3.798740899249582,
        "offsetY": 2.4843753811667764
      },
      "opacity": 0.94865005044561,
      "id": "gradient_circle_1756364728268"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 25,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.4233748508564776,
      "rotation": 179.35776763825714,
      "opacity": 0.8570635906987807,
      "shadow": {
        "blur": 5.154629316091528,
        "color": "#e74c3c40",
        "offsetX": -4.726856339933347,
        "offsetY": 3.377042795442369
      },
      "id": "rotated_triangle_1756368401259"
    },
    {
      "type": "triangle",
      "x": 731.9582892617435,
      "y": 98.95828926174356,
      "size": 58.95828926174356,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756371934041",
      "shadow": {
        "blur": 5.030834417355694,
        "color": "#e74c3c40",
        "offsetX": -4.215114564778412,
        "offsetY": 1.8168708406009904
      }
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 214.42438809046254,
      "height": 63.47009166646066,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.553352883741997,
      "opacity": 0.8,
      "id": "curve_1756375545052",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 250.40387386755614,
        "centerX": 0.5484454879167137,
        "centerY": 0.3711220742358817
      }
    },
    {
      "type": "circle",
      "x": 216,
      "y": 534,
      "radius": 84,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 358.93371497176133,
        "centerX": 0.6180829486393111,
        "centerY": 0.6651914531537715
      },
      "shadow": {
        "blur": 13.368743674194487,
        "color": "#d3540040",
        "offsetX": -2.6869185438340693,
        "offsetY": -2.1916270907932067
      },
      "opacity": 0.9472806279676501,
      "id": "gradient_circle_1756382907317"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 40,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.0761886231876034,
      "rotation": 18.662991492681833,
      "opacity": 0.7983771982788621,
      "shadow": {
        "blur": 12.055855068793182,
        "color": "#e67e2240",
        "offsetX": 0.8176586007150828,
        "offsetY": 1.3796166322590704
      },
      "id": "rotated_triangle_1756386766576"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.4063362545253066,
      "opacity": 0.7,
      "id": "spiral_1756389932813"
    },
    {
      "type": "spiral",
      "x": 682,
      "y": 234,
      "radius": 24,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.7190479313688196,
      "opacity": 0.7,
      "id": "spiral_1756393528381"
    },
    {
      "type": "triangle",
      "x": 731.1374542754324,
      "y": 349.1374542754325,
      "size": 46.137454275432496,
      "fillStyle": "#f39c12",
      "id": "triangle_1756397159441",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 100.55369243289813,
        "centerX": 0.4845735462720347,
        "centerY": 0.3863476766059387
      },
      "opacity": 0.9606389902409519
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 190.50320780684086,
      "height": 94.70542259655366,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.733404186212188,
      "opacity": 0.8,
      "id": "curve_1756404405400"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 165,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.137984948041304,
      "opacity": 0.8277317465041829,
      "id": "spiral_1756407871774"
    },
    {
      "type": "rectangle",
      "x": 625,
      "y": 507,
      "width": 80.90084453079017,
      "height": 82.84812355794526,
      "fillStyle": "#f39c12",
      "id": "element_1756415079029"
    },
    {
      "type": "circle",
      "x": 131.70471556391846,
      "y": 48.70471556391845,
      "radius": 44.70471556391845,
      "fillStyle": "#d35400",
      "id": "circle_1756418703074"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 198.15858349716586,
      "height": 95.35252788102441,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.166197636624648,
      "opacity": 0.8,
      "id": "curve_1756422315178"
    },
    {
      "type": "rectangle",
      "x": 482.4375772558714,
      "y": 307.82818294190355,
      "width": 24,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 286.5102935181482,
        "centerX": 0.418202028342544,
        "centerY": 0.526695779162552
      },
      "shadow": {
        "blur": 5.517252961010391,
        "color": "#d3540040",
        "offsetX": 0.6412172767928892,
        "offsetY": 3.9386790824468108
      },
      "opacity": 0.9320248016973293,
      "id": "gradient_rect_1756434730167"
    },
    {
      "type": "text",
      "x": 82,
      "y": 384,
      "text": "EMERGENCE",
      "font": "bold 25.246194443852783px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 284.7270770758919,
        "centerX": 0.6639453141187404,
        "centerY": 0.6603278525233567
      },
      "shadow": {
        "blur": 17.48432193446247,
        "color": "#FF6B3540",
        "offsetX": -4.1128919775461625,
        "offsetY": 0.8261994575855525
      },
      "opacity": 0.9459669643334131,
      "id": "gradient_text_1756437564645"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 335.71512770196375,
        "centerX": 0.6677837257510363,
        "centerY": 0.5994385589836292
      },
      "shadow": {
        "blur": 17.129045024770186,
        "color": "#e74c3c40",
        "offsetX": -3.1703789604538746,
        "offsetY": -4.646358597748394
      },
      "opacity": 0.9419407362209525,
      "id": "gradient_circle_1756440368011"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "TRANSCEND",
      "font": "bold 25.540699003625225px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 215.39810072005605,
        "centerX": 0.5797240388165837,
        "centerY": 0.4586437373668506
      },
      "shadow": {
        "blur": 8.669308256871695,
        "color": "#e74c3c40",
        "offsetX": -3.08235595933936,
        "offsetY": -3.372334064276963
      },
      "opacity": 0.9173187150236485,
      "id": "gradient_text_1756443912514"
    },
    {
      "type": "circle",
      "x": 16,
      "y": 534,
      "radius": 44.00272730765385,
      "fillStyle": "#e74c3c",
      "id": "circle_1756447653656"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Harmony",
      "font": "22.41073245181461px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1756454809749"
    },
    {
      "type": "rectangle",
      "x": 720,
      "y": 340,
      "width": 24,
      "height": 18,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 328.6162661022683,
        "centerX": 0.3857752441816424,
        "centerY": 0.3743185968804874
      },
      "shadow": {
        "blur": 12.935202033922344,
        "color": "#d3540040",
        "offsetX": 0.40739194752864805,
        "offsetY": 3.4128688013534543
      },
      "opacity": 0.7380241569025421,
      "id": "gradient_rect_1756461936730"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 65,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.691755492340722,
      "rotation": 153.63073261459257,
      "opacity": 0.7993881242557308,
      "shadow": {
        "blur": 5.344607057533031,
        "color": "#e67e2240",
        "offsetX": 4.166687408084282,
        "offsetY": -0.09884050954300339
      },
      "id": "rotated_triangle_1756465486281"
    },
    {
      "type": "circle",
      "x": 331.19943673136635,
      "y": 49.199436731366355,
      "radius": 44.199436731366355,
      "fillStyle": "#e67e22",
      "id": "circle_1756469324480"
    },
    {
      "type": "circle",
      "x": 331.95939732503984,
      "y": 498.95939732503984,
      "radius": 34.95939732503983,
      "fillStyle": "#d35400",
      "id": "circle_1756476323411"
    },
    {
      "type": "rectangle",
      "x": 488,
      "y": 11,
      "width": 86.53335247845213,
      "height": 76.07673690236817,
      "fillStyle": "#f39c12",
      "id": "element_1756490795423"
    },
    {
      "type": "circle",
      "x": 531.2165144691159,
      "y": 537.2165144691159,
      "radius": 62.21651446911581,
      "fillStyle": "#e67e22",
      "id": "circle_1756497932650"
    },
    {
      "type": "rectangle",
      "x": 664,
      "y": 43,
      "width": 134.4643388360595,
      "height": 111.06414012421564,
      "fillStyle": "#f39c12",
      "id": "element_1756501485760"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 192.5010855155585,
      "height": 73.08447720927569,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.923115251896975,
      "opacity": 0.7750810629769023,
      "id": "curve_1756508710623",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 312.3600103858386,
        "centerX": 0.6950549325400053,
        "centerY": 0.40878135698441953
      }
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 241.44457695119186,
      "height": 93.06270835428072,
      "fillStyle": "#d35400",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.0446956907814187,
      "opacity": 0.8,
      "id": "curve_1756517534637"
    },
    {
      "type": "triangle",
      "x": 712.8904606129172,
      "y": 498.89046061291714,
      "size": 86.89046061291714,
      "fillStyle": "#f1c40f",
      "id": "triangle_1756523670841",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 125.04210641812718,
        "centerX": 0.4890935218972037,
        "centerY": 0.531786761754336
      },
      "opacity": 0.7130463979514625
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 30.153303860554054px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 55.36218133147122,
        "centerX": 0.3754192379160835,
        "centerY": 0.336200952566245
      },
      "shadow": {
        "blur": 8.586716239908398,
        "color": "#e74c3c40",
        "offsetX": 4.163337650415762,
        "offsetY": -2.903053899997048
      },
      "opacity": 0.9384285790883881,
      "id": "gradient_text_1756530294040"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 145.17181705809645,
      "width": 890,
      "height": 168,
      "fillStyle": "#d35400",
      "pattern": "stripes",
      "opacity": 0.6369807122314108,
      "id": "pattern_rect_1756537487306"
    },
    {
      "type": "circle",
      "x": 65.05392594530471,
      "y": 248.0539259453047,
      "radius": 31.053925945304712,
      "fillStyle": "#d35400",
      "id": "circle_1756541139106"
    },
    {
      "type": "triangle",
      "x": 131.44389308818222,
      "y": 499.4438930881822,
      "size": 71.44389308818222,
      "fillStyle": "#e67e22",
      "id": "triangle_1756548295555"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 64.17181705809645,
      "width": 40,
      "height": 330,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 137.14232962667825,
        "centerX": 0.6467453446612508,
        "centerY": 0.5056056141802754
      },
      "shadow": {
        "blur": 18.202277565209613,
        "color": "#d3540040",
        "offsetX": 3.0657108721161563,
        "offsetY": 1.3114780873025182
      },
      "opacity": 0.7119360231482502,
      "id": "gradient_rect_1756551848751"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 228.5209551435733,
      "height": 91.47334627416903,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 3.6531225074150395,
      "opacity": 0.8,
      "id": "curve_1756555653540"
    },
    {
      "type": "triangle",
      "x": 98.44379408263455,
      "y": 199.44379408263455,
      "size": 98.44379408263455,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756562669029"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 165,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.7891438273997182,
      "opacity": 0.7,
      "id": "spiral_1756566272863"
    },
    {
      "type": "triangle",
      "x": 531.1287762423432,
      "y": 67.1287762423432,
      "size": 67.1287762423432,
      "fillStyle": "#f39c12",
      "id": "triangle_1756580646809"
    },
    {
      "type": "circle",
      "x": 465.02737109332355,
      "y": 522.0273710933236,
      "radius": 77.02737109332357,
      "fillStyle": "#f1c40f",
      "id": "circle_1756584303296"
    },
    {
      "type": "circle",
      "x": 731.5880800529932,
      "y": 52.5880800529932,
      "radius": 52.5880800529932,
      "fillStyle": "#e67e22",
      "id": "circle_1756587857133"
    }
  ],
  "generation": 71,
  "lastUpdated": "2025-08-30T21:04:17.133Z",
  "cycleStarted": "2025-08-27T23:05:44.806Z"
};