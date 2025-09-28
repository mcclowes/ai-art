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
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 30.97050298237262px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 263.9919712480202,
        "centerX": 0.573464055251167,
        "centerY": 0.3540253263298503
      },
      "shadow": {
        "blur": 17.65989303772043,
        "color": "#e74c3c40",
        "offsetX": 1.4826421412124802,
        "offsetY": -4.074886542118601
      },
      "opacity": 0.978552134970178,
      "id": "gradient_text_1758767542856"
    },
    {
      "type": "text",
      "x": 216,
      "y": 384,
      "text": "Vision",
      "font": "21.173960057529563px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1758767542857"
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#e67e22",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 331.0369350628464,
        "centerX": 0.32716970289725633,
        "centerY": 0.6093285202951272
      },
      "shadow": {
        "blur": 5.055389099867567,
        "color": "#FF6B3540",
        "offsetX": -3.3795047716207782,
        "offsetY": 2.4295742425520617
      },
      "opacity": 0.6368247272209842,
      "id": "gradient_circle_1758770317561"
    },
    {
      "type": "circle",
      "x": 74.16337210375431,
      "y": 349.16337210375434,
      "radius": 74.16337210375431,
      "fillStyle": "#d35400",
      "id": "circle_1758770317561"
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 0,
      "width": 80,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.6222148777861072,
      "id": "pattern_rect_1758773187105"
    },
    {
      "type": "spiral",
      "x": 216,
      "y": 84,
      "radius": 102,
      "fillStyle": "#f39c12",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.036453340330159,
      "opacity": 0.7678441355029935,
      "id": "spiral_1758776732460",
      "shadow": {
        "blur": 13.587631093506873,
        "color": "#f39c1240",
        "offsetX": 2.288397277068082,
        "offsetY": -4.776752974469984
      }
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 220.17181705809645,
      "width": 64,
      "height": 18,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 311.35955011147655,
        "centerX": 0.31064082046475466,
        "centerY": 0.3751128635749037
      },
      "shadow": {
        "blur": 17.606714754217144,
        "color": "#e74c3c40",
        "offsetX": 0.7402246714399974,
        "offsetY": -0.3371617824641149
      },
      "opacity": 0.7213335383123115,
      "id": "gradient_rect_1758780491600"
    },
    {
      "type": "triangle",
      "x": 82,
      "y": 484,
      "size": 105,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.7960848318393312,
      "rotation": 11.600309341807344,
      "opacity": 0.9669194420024367,
      "shadow": {
        "blur": 12.247288639186106,
        "color": "#e67e2240",
        "offsetX": 0.5320526191646184,
        "offsetY": -4.28440822112009
      },
      "id": "rotated_triangle_1758783954696"
    },
    {
      "type": "rectangle",
      "x": 94,
      "y": 502,
      "width": 74.07085936913576,
      "height": 93.36463128993843,
      "fillStyle": "#f1c40f",
      "id": "element_1758787637443"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 226.45194771825322,
      "height": 73.49294250775597,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.5191217395937233,
      "opacity": 0.8078432843954635,
      "id": "curve_1758791171581"
    },
    {
      "type": "rectangle",
      "x": 429.4375772558714,
      "y": 217.17181705809645,
      "width": 130,
      "height": 24,
      "fillStyle": "#e67e22",
      "pattern": "waves",
      "opacity": 0.7122331929497563,
      "id": "pattern_rect_1758794741302",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 84.95597589255233,
        "centerX": 0.6837767571703466,
        "centerY": 0.5179758195688601
      },
      "shadow": {
        "blur": 7.674800754487859,
        "color": "#e67e2240",
        "offsetX": 4.57482993013674,
        "offsetY": -3.3080852594192245
      }
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 38.35822840598019px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 106.50621967555853,
        "centerX": 0.6157127802015643,
        "centerY": 0.5757770154259186
      },
      "shadow": {
        "blur": 12.506587466427836,
        "color": "#d3540040",
        "offsetX": 0.7805343139783893,
        "offsetY": -4.527209848202222
      },
      "opacity": 0.9709860150927057,
      "id": "gradient_text_1758805966956"
    },
    {
      "type": "rectangle",
      "x": 80,
      "y": 190,
      "width": 102.24607087888961,
      "height": 116.24235518678663,
      "fillStyle": "#e67e22",
      "id": "element_1758809141729"
    },
    {
      "type": "rectangle",
      "x": 292,
      "y": 442,
      "width": 79.22383757698526,
      "height": 113.4958549967004,
      "fillStyle": "#e67e22",
      "id": "element_1758812749558"
    },
    {
      "type": "circle",
      "x": 331.27133461416014,
      "y": 499.27133461416014,
      "radius": 63.27133461416013,
      "fillStyle": "#d35400",
      "id": "circle_1758816362661"
    },
    {
      "type": "text",
      "x": 416,
      "y": 534,
      "text": "Transform",
      "font": "23.52470641794219px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1758823668853"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#e67e22",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 98.76666723967234,
        "centerX": 0.3004228372223268,
        "centerY": 0.4684932793806872
      },
      "shadow": {
        "blur": 9.24807751829471,
        "color": "#d3540040",
        "offsetX": -4.30416679697446,
        "offsetY": -3.855051677097663
      },
      "opacity": 0.8035561827659812,
      "id": "gradient_circle_1758827096001"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 38.047353549411596,
        "centerX": 0.3793843287192895,
        "centerY": 0.5018344240121297
      },
      "shadow": {
        "blur": 7.9023137857503905,
        "color": "#e74c3c40",
        "offsetX": -3.464035280218587,
        "offsetY": 0.034623845578805046
      },
      "opacity": 0.6337323997446804,
      "id": "gradient_circle_1758830742618"
    },
    {
      "type": "circle",
      "x": 665.2421189512108,
      "y": 98.24211895121084,
      "radius": 46.24211895121084,
      "fillStyle": "#d35400",
      "id": "circle_1758837900032"
    },
    {
      "type": "triangle",
      "x": 665.3534345425066,
      "y": 248.35343454250665,
      "size": 69.35343454250663,
      "fillStyle": "#f39c12",
      "id": "triangle_1758846022544",
      "opacity": 0.9222968487147601
    },
    {
      "type": "triangle",
      "x": 665.7493302372055,
      "y": 348.7493302372055,
      "size": 58.74933023720552,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758850364814"
    },
    {
      "type": "triangle",
      "x": 282,
      "y": 534,
      "size": 77.94228727814323,
      "fillStyle": "#e67e22",
      "id": "triangle_1758853887866"
    },
    {
      "type": "rectangle",
      "x": 265,
      "y": 38,
      "width": 132.5955958389597,
      "height": 121.00635004508135,
      "fillStyle": "#e74c3c",
      "id": "element_1758863129151"
    },
    {
      "type": "rectangle",
      "x": 221.56242274412858,
      "y": 166.17181705809645,
      "width": 168,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 70.53340871849382,
        "centerX": 0.6106161939231796,
        "centerY": 0.3401911223976639
      },
      "shadow": {
        "blur": 11.067694525644253,
        "color": "#d3540040",
        "offsetX": 2.9389735545945506,
        "offsetY": -0.04490635162996082
      },
      "opacity": 0.8222320508667342,
      "id": "gradient_rect_1758866871656"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 331.82818294190355,
      "width": 40,
      "height": 78,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 289.6540846542234,
        "centerX": 0.6987917956236892,
        "centerY": 0.37819099440907805
      },
      "shadow": {
        "blur": 19.330978796217003,
        "color": "#d3540040",
        "offsetX": 2.6716268201463578,
        "offsetY": -2.1211582736014534
      },
      "opacity": 0.9320469962199494,
      "id": "gradient_rect_1758870341260"
    },
    {
      "type": "triangle",
      "x": 86.50137551318173,
      "y": 248.50137551318173,
      "size": 86.50137551318173,
      "fillStyle": "#f1c40f",
      "id": "triangle_1758874031917"
    },
    {
      "type": "circle",
      "x": 65.66743696852248,
      "y": 398.66743696852245,
      "radius": 49.66743696852248,
      "fillStyle": "#d35400",
      "id": "circle_1758877555819"
    },
    {
      "type": "rectangle",
      "x": 75,
      "y": 443,
      "width": 113.90658873444573,
      "height": 112.56029534997569,
      "fillStyle": "#f39c12",
      "id": "element_1758881141146",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 298.2042436739382,
        "centerX": 0.3124898433883155,
        "centerY": 0.5478093768304586
      },
      "shadow": {
        "blur": 19.768476785343974,
        "color": "#f39c1240",
        "offsetX": 2.0936894346638546,
        "offsetY": -4.554178402816107
      },
      "opacity": 0.8711815969740926
    },
    {
      "type": "circle",
      "x": 265.2703338704081,
      "y": 98.2703338704081,
      "radius": 52.270333870408095,
      "fillStyle": "#d35400",
      "id": "circle_1758888523441"
    },
    {
      "type": "rectangle",
      "x": 213,
      "y": 469,
      "width": 104.98708503732516,
      "height": 130.16279410902646,
      "fillStyle": "#d35400",
      "id": "element_1758892299894"
    },
    {
      "type": "triangle",
      "x": 531.8768317421068,
      "y": 52.876831742106845,
      "size": 52.876831742106845,
      "fillStyle": "#f1c40f",
      "id": "triangle_1758899157429",
      "shadow": {
        "blur": 9.295355603251538,
        "color": "#f1c40f40",
        "offsetX": 3.359876254049672,
        "offsetY": 1.5242555378230076
      },
      "opacity": 0.8952663086298799
    },
    {
      "type": "text",
      "x": 416,
      "y": 484,
      "text": "Vision",
      "font": "21.84524686404336px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1758902747323"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 248.28363795234242,
      "height": 87.09833465027396,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.006494376790375,
      "opacity": 0.8,
      "id": "curve_1758906299875"
    },
    {
      "type": "circle",
      "x": 731.4642022101684,
      "y": 98.46420221016842,
      "radius": 40.46420221016842,
      "fillStyle": "#d35400",
      "id": "circle_1758909987039"
    },
    {
      "type": "rectangle",
      "x": 674,
      "y": 155,
      "width": 114.54966705081262,
      "height": 87.78526002577482,
      "fillStyle": "#e67e22",
      "id": "element_1758917136391"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 93.17181705809645,
      "width": 890,
      "height": 272,
      "fillStyle": "#f39c12",
      "pattern": "waves",
      "opacity": 0.7303012821860422,
      "id": "pattern_rect_1758920682503"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 136,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 305.77053027371096,
        "centerX": 0.40666654272017133,
        "centerY": 0.6703450888736966
      },
      "shadow": {
        "blur": 9.947144965536257,
        "color": "#FF6B3540",
        "offsetX": -0.2962675643894226,
        "offsetY": 3.5853314017870392
      },
      "opacity": 0.9045369329438224,
      "id": "gradient_circle_1758924296583"
    },
    {
      "type": "circle",
      "x": 724.3165092472154,
      "y": 398.31650924721544,
      "radius": 75.31650924721545,
      "fillStyle": "#f39c12",
      "id": "circle_1758932411685"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.5115891452247525,
      "opacity": 0.7,
      "id": "spiral_1758936744226"
    },
    {
      "type": "circle",
      "x": 216,
      "y": 484,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 15.50164340484967,
        "centerX": 0.48241084009759605,
        "centerY": 0.32264649602990675
      },
      "shadow": {
        "blur": 9.060655680146057,
        "color": "#e74c3c40",
        "offsetX": -2.811116635674158,
        "offsetY": -1.841317202909749
      },
      "opacity": 0.7334899540491413,
      "id": "gradient_circle_1758940083357"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 32,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 68.08139927451414,
        "centerX": 0.5727036274172252,
        "centerY": 0.4787710153552681
      },
      "shadow": {
        "blur": 9.58118720043718,
        "color": "#e74c3c40",
        "offsetX": -0.5924626599251104,
        "offsetY": 3.243865882693555
      },
      "opacity": 0.8041092458172467,
      "id": "gradient_circle_1758945945508"
    },
    {
      "type": "rectangle",
      "x": 603,
      "y": 502,
      "width": 124.33468474117207,
      "height": 92.72823307108473,
      "fillStyle": "#f1c40f",
      "id": "element_1758949508055"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 214,
      "width": 134.21661310704735,
      "height": 68.79650740905191,
      "fillStyle": "#d35400",
      "id": "element_1758953184127"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 166.56648426704822,
        "centerX": 0.325309306717984,
        "centerY": 0.3142524449845963
      },
      "shadow": {
        "blur": 18.074683142156243,
        "color": "#d3540040",
        "offsetX": -4.342450169241521,
        "offsetY": -2.5207412963017295
      },
      "opacity": 0.8634917033946656,
      "id": "gradient_circle_1758956685614"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.6421281066552633,
      "rotation": 189.09024337446914,
      "opacity": 0.970591641584237,
      "shadow": {
        "blur": 17.870736833802397,
        "color": "#f39c1240",
        "offsetX": -1.0616095661678893,
        "offsetY": 2.236777572999557
      },
      "id": "rotated_triangle_1758960372181"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "METAMORPHOSIS",
      "font": "bold 25.899804406161458px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 140.46111072518642,
        "centerX": 0.6714987940806836,
        "centerY": 0.3151013149952712
      },
      "shadow": {
        "blur": 10.222269426679045,
        "color": "#e74c3c40",
        "offsetX": 1.359636719660795,
        "offsetY": 4.838873148228604
      },
      "opacity": 0.9451167554192559,
      "id": "gradient_text_1758963902412"
    },
    {
      "type": "triangle",
      "x": 131.1119524998889,
      "y": 499.1119524998889,
      "size": 84.1119524998889,
      "fillStyle": "#f39c12",
      "id": "triangle_1758967489301",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 194.0153762149701,
        "centerX": 0.594330496582931,
        "centerY": 0.502112040845087
      },
      "shadow": {
        "blur": 5.474309995916704,
        "color": "#f39c1240",
        "offsetX": 2.561580095434941,
        "offsetY": 0.40013106405133225
      },
      "opacity": 0.7755437814361146
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 9.171817058096451,
      "width": 130,
      "height": 440,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.6811267862336374,
      "id": "pattern_rect_1758971067745"
    },
    {
      "type": "triangle",
      "x": 665.7438540380517,
      "y": 534.7438540380517,
      "size": 64.74385403805178,
      "fillStyle": "#e67e22",
      "id": "triangle_1758981886521"
    },
    {
      "type": "triangle",
      "x": 531.6095162494867,
      "y": 98.60951624948669,
      "size": 74.60951624948669,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758992688411"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 214.17181705809645,
      "width": 40,
      "height": 30,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 38.27464750899984,
        "centerX": 0.42275674922161893,
        "centerY": 0.3219321421687214
      },
      "shadow": {
        "blur": 13.19919072651192,
        "color": "#FF6B3540",
        "offsetX": 4.434718435523955,
        "offsetY": 3.4757717073714787
      },
      "opacity": 0.7290884921821342,
      "id": "gradient_rect_1758996384469"
    },
    {
      "type": "rectangle",
      "x": 472,
      "y": 505,
      "width": 119.98268124322803,
      "height": 86.867699962279,
      "fillStyle": "#d35400",
      "id": "element_1759003523696"
    },
    {
      "type": "rectangle",
      "x": 693,
      "y": 0,
      "width": 76.37822859123307,
      "height": 124.12006048899397,
      "fillStyle": "#e67e22",
      "id": "element_1759007086798"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 364.82818294190355,
      "width": 16,
      "height": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 231.1643602044347,
        "centerX": 0.5606732219168935,
        "centerY": 0.5167699590420546
      },
      "shadow": {
        "blur": 19.10125409794246,
        "color": "#FF6B3540",
        "offsetX": -1.5596769656898002,
        "offsetY": 1.3866997313088536
      },
      "opacity": 0.882065428820615,
      "id": "gradient_rect_1759010693670"
    },
    {
      "type": "triangle",
      "x": 713.734930359343,
      "y": 248.73493035934297,
      "size": 85.73493035934297,
      "fillStyle": "#e67e22",
      "id": "triangle_1759014306742"
    },
    {
      "type": "circle",
      "x": 665.0649458003826,
      "y": 349.0649458003826,
      "radius": 37.06494580038262,
      "fillStyle": "#e67e22",
      "id": "circle_1759019009799"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 247.47676080962395,
        "centerX": 0.4812042158138265,
        "centerY": 0.6730928038744058
      },
      "shadow": {
        "blur": 6.2950465861714875,
        "color": "#d3540040",
        "offsetX": 1.0916690676734113,
        "offsetY": -2.0026555595658735
      },
      "opacity": 0.6848410548678918,
      "id": "gradient_circle_1759023187838"
    },
    {
      "type": "circle",
      "x": 665.9912352405187,
      "y": 536.9912352405187,
      "radius": 62.991235240518726,
      "fillStyle": "#f39c12",
      "id": "circle_1759029712636"
    },
    {
      "type": "triangle",
      "x": 65.65308853160072,
      "y": 59.653088531600716,
      "size": 59.653088531600716,
      "fillStyle": "#e67e22",
      "id": "triangle_1759032349368"
    },
    {
      "type": "rectangle",
      "x": 62,
      "y": 207,
      "width": 139.51762924893316,
      "height": 82.97156215541192,
      "fillStyle": "#e67e22",
      "id": "element_1759035911175"
    },
    {
      "type": "text",
      "x": 16,
      "y": 384,
      "text": "Aesthetic",
      "font": "22.9053115953952px Arial",
      "fillStyle": "#d35400",
      "id": "text_1759039619692"
    },
    {
      "type": "circle",
      "x": 131.8439218861456,
      "y": 548.8439218861456,
      "radius": 48.843921886145594,
      "fillStyle": "#f39c12",
      "id": "circle_1759043138514"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 355.82818294190355,
      "width": 64,
      "height": 30,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 126.96193373865736,
        "centerX": 0.46465374999249454,
        "centerY": 0.45351316055160007
      },
      "shadow": {
        "blur": 8.160227378989232,
        "color": "#e74c3c40",
        "offsetX": -2.7184767382142727,
        "offsetY": 4.838193600819274
      },
      "opacity": 0.8119387251623186,
      "id": "gradient_rect_1759046791897"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 211.7020220357215,
      "height": 64.91129164730212,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 4.4305223656690265,
      "opacity": 0.8,
      "id": "curve_1759057481667"
    },
    {
      "type": "triangle",
      "x": 65.7037904696729,
      "y": 98.7037904696729,
      "size": 56.703790469672896,
      "fillStyle": "#e67e22",
      "id": "triangle_1759061286582"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 333,
      "radius": 267,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.7989831733657677,
      "opacity": 0.7,
      "id": "spiral_1759071886376"
    },
    {
      "type": "rectangle",
      "x": 399,
      "y": 0,
      "width": 133.07390087828605,
      "height": 116.74952532041252,
      "fillStyle": "#f39c12",
      "id": "element_1759075499971"
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 85.42719875055435,
        "centerX": 0.5338121900428991,
        "centerY": 0.5678172116133243
      },
      "shadow": {
        "blur": 13.879727711561792,
        "color": "#e74c3c40",
        "offsetX": 3.2103299292085445,
        "offsetY": -3.4300930165863486
      },
      "opacity": 0.6175524683931481,
      "id": "gradient_circle_1759082779039"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 10,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.9310861074789716,
      "rotation": 131.56084264682386,
      "opacity": 0.8836634115455314,
      "shadow": {
        "blur": 14.424537508203594,
        "color": "#f1c40f40",
        "offsetX": 3.547361971258132,
        "offsetY": 1.413568100985822
      },
      "id": "rotated_triangle_1759086282281"
    },
    {
      "type": "circle",
      "x": 531.5100204475374,
      "y": 98.51002044753741,
      "radius": 65.51002044753741,
      "fillStyle": "#f39c12",
      "id": "circle_1759089907723"
    },
    {
      "type": "circle",
      "x": 465.66678399689147,
      "y": 498.66678399689147,
      "radius": 36.66678399689149,
      "fillStyle": "#e74c3c",
      "id": "circle_1759093487936"
    }
  ],
  "generation": 94,
  "lastUpdated": "2025-09-28T22:04:52.999Z",
  "cycleStarted": "2025-09-25T01:33:04.169Z"
};