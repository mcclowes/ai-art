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
      "x": 166,
      "y": 449,
      "width": 200,
      "height": 100,
      "fillStyle": "#e74c3c",
      "id": "rect1",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 113.55530609693145,
        "centerX": 0.3470710889427509,
        "centerY": 0.3003285554862022
      },
      "shadow": {
        "blur": 9.72440163213908,
        "color": "#e67e2240",
        "offsetX": -1.599512452810199,
        "offsetY": -2.8435609462004385
      }
    },
    {
      "type": "text",
      "x": 16,
      "y": 384,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 65.07809988600897,
      "y": 248.07809988600897,
      "radius": 40.07809988600897,
      "fillStyle": "#e74c3c",
      "id": "circle_1753913122799",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 197.42633368407982,
        "centerX": 0.44125929994144886,
        "centerY": 0.568632244679195
      }
    },
    {
      "type": "circle",
      "x": 16,
      "y": 484,
      "radius": 59.960381316985575,
      "fillStyle": "#f39c12",
      "id": "circle_1753916727281",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 148.91151118648196,
        "centerX": 0.4698046367257951,
        "centerY": 0.564898666134616
      }
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Inspire",
      "font": "21.507208911788933px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1753916727281"
    },
    {
      "type": "rectangle",
      "x": 389.4375772558714,
      "y": 286.82818294190355,
      "width": 210,
      "height": 168,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.8752085802973494,
      "id": "pattern_rect_1753921416621",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 358.96270965584733,
        "centerX": 0.31243150016526755,
        "centerY": 0.3342095817115184
      },
      "shadow": {
        "blur": 6.8660675904552875,
        "color": "#d3540040",
        "offsetX": -2.1254885289357617,
        "offsetY": 4.948252033835477
      }
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.6694869283642286,
      "rotation": 180.12842864487004,
      "opacity": 0.7938918896559491,
      "shadow": {
        "blur": 18.465181368729333,
        "color": "#d3540040",
        "offsetX": 2.643468931726101,
        "offsetY": -0.5106159087193056
      },
      "id": "rotated_triangle_1753921416621"
    },
    {
      "type": "rectangle",
      "x": 85.56242274412858,
      "y": 346.82818294190355,
      "width": 440,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 227.75283452461946,
        "centerX": 0.35031365878449955,
        "centerY": 0.6131010669548994
      },
      "shadow": {
        "blur": 17.47936231548769,
        "color": "#e74c3c40",
        "offsetX": -0.3665716479556913,
        "offsetY": 0.05542175404000815
      },
      "opacity": 0.945972590997227,
      "id": "gradient_rect_1753925652220"
    },
    {
      "type": "triangle",
      "x": 682,
      "y": 234,
      "size": 80.20944469632003,
      "fillStyle": "#f1c40f",
      "id": "triangle_1753925652221"
    },
    {
      "type": "text",
      "x": 216,
      "y": 334,
      "text": "EMERGENCE",
      "font": "bold 24.46983355001217px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 87.80951673261329,
        "centerX": 0.3527902024153772,
        "centerY": 0.6064749173098332
      },
      "shadow": {
        "blur": 10.159872308496205,
        "color": "#d3540040",
        "offsetX": -3.9940458260415035,
        "offsetY": 4.289491977559818
      },
      "opacity": 0.9903228051565782,
      "id": "gradient_text_1753929891322"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 35.19322696860831px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 195.40758183439007,
        "centerX": 0.5582382026686664,
        "centerY": 0.46762324664019095
      },
      "shadow": {
        "blur": 15.9574343986831,
        "color": "#e74c3c40",
        "offsetX": 1.794397224021833,
        "offsetY": -0.7065087788241637
      },
      "opacity": 0.9633258120189256,
      "id": "gradient_text_1753932867501"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 234.78208965455315,
      "height": 59.22950523307963,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.869734052563361,
      "opacity": 0.7802422074270264,
      "id": "curve_1753942085171",
      "shadow": {
        "blur": 15.259083052570867,
        "color": "#d3540040",
        "offsetX": 0.8419868927625185,
        "offsetY": -3.1005739689751444
      }
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 317.073158367015,
        "centerX": 0.5867449843430242,
        "centerY": 0.3798992823574676
      },
      "shadow": {
        "blur": 16.44057681713352,
        "color": "#e74c3c40",
        "offsetX": 4.926270314001638,
        "offsetY": 0.06181089573839493
      },
      "opacity": 0.910593591873669,
      "id": "gradient_circle_1753945669146"
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 93.17181705809645,
      "width": 30,
      "height": 272,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.7229071800986534,
      "id": "pattern_rect_1753952912171",
      "shadow": {
        "blur": 8.130832983975575,
        "color": "#f1c40f40",
        "offsetX": -3.178728844646297,
        "offsetY": 4.432651896657854
      }
    },
    {
      "type": "circle",
      "x": 331.9957974539704,
      "y": 498.9957974539704,
      "radius": 71.9957974539704,
      "fillStyle": "#e67e22",
      "id": "circle_1753956349771",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 21.346934381130342,
        "centerX": 0.32688664803083717,
        "centerY": 0.6707618212928482
      },
      "opacity": 0.9932693405453962
    },
    {
      "type": "circle",
      "x": 682,
      "y": 184,
      "radius": 41.31795501015445,
      "fillStyle": "#f39c12",
      "id": "circle_1753959904344"
    },
    {
      "type": "rectangle",
      "x": 29,
      "y": 491,
      "width": 72.6402830845776,
      "height": 108.09711298926464,
      "fillStyle": "#e74c3c",
      "id": "element_1753970790747"
    },
    {
      "type": "text",
      "x": 416,
      "y": 534,
      "text": "Evolve",
      "font": "23.825598873166513px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1753974356280"
    },
    {
      "type": "text",
      "x": 682,
      "y": 34,
      "text": "Transform",
      "font": "24.481960111485876px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1753977990130"
    },
    {
      "type": "rectangle",
      "x": 680,
      "y": 492,
      "width": 103.70301860400664,
      "height": 107.239811666779,
      "fillStyle": "#d35400",
      "id": "element_1753981637694"
    },
    {
      "type": "rectangle",
      "x": 614,
      "y": 460,
      "width": 104,
      "height": 78,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 220.11957115487556,
        "centerX": 0.44117786142178983,
        "centerY": 0.6180118585663317
      },
      "shadow": {
        "blur": 9.26089081026892,
        "color": "#d3540040",
        "offsetX": -2.6357296122075025,
        "offsetY": -1.6987214948108975
      },
      "opacity": 0.7165700220714624,
      "id": "gradient_rect_1753985245649"
    },
    {
      "type": "circle",
      "x": 331.83828875290476,
      "y": 61.83828875290475,
      "radius": 61.83828875290475,
      "fillStyle": "#d35400",
      "id": "circle_1753992353430"
    },
    {
      "type": "rectangle",
      "x": 617,
      "y": 511,
      "width": 97.59847777712123,
      "height": 75.75013305596038,
      "fillStyle": "#e67e22",
      "id": "element_1754003129767",
      "shadow": {
        "blur": 10.14751981006414,
        "color": "#e67e2240",
        "offsetX": -0.7102312808001532,
        "offsetY": -3.676556218816105
      }
    },
    {
      "type": "spiral",
      "x": 82,
      "y": 184,
      "radius": 6,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.351954648076367,
      "opacity": 0.7,
      "id": "spiral_1754008043902"
    },
    {
      "type": "rectangle",
      "x": 23,
      "y": 39,
      "width": 84.2083528986822,
      "height": 118.58632719362063,
      "fillStyle": "#f39c12",
      "id": "element_1754012105190",
      "shadow": {
        "blur": 10.242724186578524,
        "color": "#f39c1240",
        "offsetX": -1.8963171895449338,
        "offsetY": 2.008807237168946
      },
      "opacity": 0.9902697157524527
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 170,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.9638738943780565,
      "rotation": 131.18915248343768,
      "opacity": 0.9655101633723882,
      "shadow": {
        "blur": 6.770784793565921,
        "color": "#f1c40f40",
        "offsetX": -2.6261630634614552,
        "offsetY": 1.7674381274722357
      },
      "id": "rotated_triangle_1754019656460"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Vision",
      "font": "22.241867379045612px Arial",
      "fillStyle": "#d35400",
      "id": "text_1754025231892"
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Inspire",
      "font": "29.24248901224037px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1754032155511"
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 285.59531534073943,
        "centerX": 0.44033857532537696,
        "centerY": 0.5274106985515837
      },
      "shadow": {
        "blur": 9.207208563478567,
        "color": "#FF6B3540",
        "offsetX": 0.813758683253571,
        "offsetY": 0.32765073461153094
      },
      "opacity": 0.9421234976993553,
      "id": "gradient_circle_1754035653121"
    },
    {
      "type": "rectangle",
      "x": 473,
      "y": 0,
      "width": 116.06083576130308,
      "height": 102.67083536009119,
      "fillStyle": "#e74c3c",
      "id": "element_1754039322654",
      "shadow": {
        "blur": 18.50964155452761,
        "color": "#e74c3c40",
        "offsetX": -2.513308498145852,
        "offsetY": -4.930508318370146
      }
    },
    {
      "type": "circle",
      "x": 465.63652038778923,
      "y": 535.6365203877892,
      "radius": 63.63652038778922,
      "fillStyle": "#f39c12",
      "id": "circle_1754046299964"
    },
    {
      "type": "triangle",
      "x": 731.5124583037734,
      "y": 98.51245830377337,
      "size": 44.51245830377337,
      "fillStyle": "#d35400",
      "id": "triangle_1754054217974"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 69.98566978920815,
        "centerX": 0.6855232380057046,
        "centerY": 0.6409033829967475
      },
      "shadow": {
        "blur": 12.01811317825165,
        "color": "#d3540040",
        "offsetX": -1.630369445039892,
        "offsetY": 0.9735354474394509
      },
      "opacity": 0.838413636056644,
      "id": "gradient_circle_1754060749059"
    },
    {
      "type": "triangle",
      "x": 531.4610704125517,
      "y": 248.46107041255172,
      "size": 58.46107041255172,
      "fillStyle": "#d35400",
      "id": "triangle_1754064376182"
    },
    {
      "type": "rectangle",
      "x": 685,
      "y": 310,
      "width": 93.16222380898631,
      "height": 77.39682435187382,
      "fillStyle": "#e67e22",
      "id": "element_1754068029431"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 9.171817058096451,
      "width": 130,
      "height": 440,
      "fillStyle": "#d35400",
      "pattern": "dots",
      "opacity": 0.7423225835946244,
      "id": "pattern_rect_1754071624154",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 193.41150670562627,
        "centerX": 0.5565751697935688,
        "centerY": 0.44984132989351633
      },
      "shadow": {
        "blur": 6.375203891379209,
        "color": "#d3540040",
        "offsetX": 0.30608189186937906,
        "offsetY": 2.6373247205284667
      }
    },
    {
      "type": "circle",
      "x": 82,
      "y": 34,
      "radius": 42.71993153789928,
      "fillStyle": "#d35400",
      "id": "circle_1754075143626"
    },
    {
      "type": "text",
      "x": 16,
      "y": 184,
      "text": "Aesthetic",
      "font": "18.045116403530642px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1754078750095"
    },
    {
      "type": "text",
      "x": 616,
      "y": 84,
      "text": "Balance",
      "font": "32.24370848779826px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1754085920874"
    },
    {
      "type": "circle",
      "x": 131.28108901335057,
      "y": 521.2810890133505,
      "radius": 78.28108901335057,
      "fillStyle": "#f1c40f",
      "id": "circle_1754098414345",
      "shadow": {
        "blur": 12.113249763514647,
        "color": "#f1c40f40",
        "offsetX": -4.321262838527744,
        "offsetY": 0.036390912284858246
      }
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 10,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.343957104442863,
      "rotation": 348.0624197284959,
      "opacity": 0.8294865802834266,
      "shadow": {
        "blur": 6.990944240428075,
        "color": "#f1c40f40",
        "offsetX": 1.0200784616131013,
        "offsetY": -0.20430236525566237
      },
      "id": "rotated_triangle_1754102397727"
    },
    {
      "type": "rectangle",
      "x": 528,
      "y": 493,
      "width": 272,
      "height": 12,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 305.64579023441706,
        "centerX": 0.5948136422161339,
        "centerY": 0.3605418330584258
      },
      "shadow": {
        "blur": 5.042678602057736,
        "color": "#e74c3c40",
        "offsetX": -2.1411532947430767,
        "offsetY": -2.9266435069782104
      },
      "opacity": 0.7372695943263471,
      "id": "gradient_rect_1754105536333"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 173.5488322267107,
        "centerX": 0.5826214064214156,
        "centerY": 0.44072630807775104
      },
      "shadow": {
        "blur": 10.82951227357217,
        "color": "#FF6B3540",
        "offsetX": 3.845612831057192,
        "offsetY": -3.088677293247355
      },
      "opacity": 0.7826771569359461,
      "id": "gradient_circle_1754108142331"
    },
    {
      "type": "rectangle",
      "x": 265,
      "y": 488,
      "width": 133.22170125849436,
      "height": 111.53579803830084,
      "fillStyle": "#d35400",
      "id": "element_1754111257655"
    },
    {
      "type": "triangle",
      "x": 531.2066970606471,
      "y": 98.20669706064707,
      "size": 60.20669706064707,
      "fillStyle": "#d35400",
      "id": "triangle_1754118334551"
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 234,
      "size": 90.00587425828346,
      "fillStyle": "#d35400",
      "id": "triangle_1754121985307"
    },
    {
      "type": "rectangle",
      "x": 429,
      "y": 467,
      "width": 73.84732928619212,
      "height": 64.00045849413479,
      "fillStyle": "#f39c12",
      "id": "element_1754125547776"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.917609230033656,
      "rotation": 20.02655768757006,
      "opacity": 0.9710402647035262,
      "shadow": {
        "blur": 14.103892050950297,
        "color": "#f1c40f40",
        "offsetX": 4.186232794254455,
        "offsetY": 3.245911167127284
      },
      "id": "rotated_triangle_1754136499272"
    },
    {
      "type": "triangle",
      "x": 72.89982592059924,
      "y": 98.89982592059924,
      "size": 72.89982592059924,
      "fillStyle": "#f1c40f",
      "id": "triangle_1754140416726"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 169.8393304792952,
      "height": 72.16047383072639,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.592916408304278,
      "opacity": 0.8,
      "id": "curve_1754147090101"
    },
    {
      "type": "text",
      "x": 616,
      "y": 234,
      "text": "Create",
      "font": "24.779487156211335px Arial",
      "fillStyle": "#d35400",
      "id": "text_1754150727659"
    },
    {
      "type": "circle",
      "x": 665.1285091049803,
      "y": 398.12850910498025,
      "radius": 34.12850910498028,
      "fillStyle": "#e74c3c",
      "id": "circle_1754154276592"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 234.82818294190355,
      "width": 890,
      "height": 272,
      "fillStyle": "#e67e22",
      "pattern": "stripes",
      "opacity": 0.7625926380821706,
      "id": "pattern_rect_1754157993705"
    },
    {
      "type": "triangle",
      "x": 700.956723452052,
      "y": 398.95672345205196,
      "size": 98.95672345205196,
      "fillStyle": "#f39c12",
      "id": "triangle_1754165123947"
    },
    {
      "type": "circle",
      "x": 65.71211955142054,
      "y": 48.71211955142054,
      "radius": 48.71211955142054,
      "fillStyle": "#d35400",
      "id": "circle_1754168679202"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Inspire",
      "font": "26.09526727534332px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1754175909889"
    },
    {
      "type": "triangle",
      "x": 331.68841339638345,
      "y": 75.68841339638345,
      "size": 75.68841339638345,
      "fillStyle": "#e67e22",
      "id": "triangle_1754184874681",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 345.7639609421067,
        "centerX": 0.5807516150458953,
        "centerY": 0.4141613512053519
      },
      "opacity": 0.7108103031624999
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
        "direction": 180.34651697340882,
        "centerX": 0.4545830662360797,
        "centerY": 0.4376489510365939
      },
      "shadow": {
        "blur": 14.229680873346975,
        "color": "#d3540040",
        "offsetX": -2.0295458585637682,
        "offsetY": 0.567915882123784
      },
      "opacity": 0.9805491988395855,
      "id": "gradient_rect_1754192279049"
    },
    {
      "type": "triangle",
      "x": 531.8126456721493,
      "y": 198.81264567214936,
      "size": 68.81264567214936,
      "fillStyle": "#d35400",
      "id": "triangle_1754195025989"
    },
    {
      "type": "circle",
      "x": 331.21468715153236,
      "y": 499.21468715153236,
      "radius": 33.214687151532345,
      "fillStyle": "#e74c3c",
      "id": "circle_1754197889680"
    },
    {
      "type": "triangle",
      "x": 531.0903168161005,
      "y": 89.0903168161006,
      "size": 89.0903168161006,
      "fillStyle": "#f1c40f",
      "id": "triangle_1754201234817"
    },
    {
      "type": "rectangle",
      "x": 408,
      "y": 196,
      "width": 114.74137093246568,
      "height": 104.10861312236645,
      "fillStyle": "#f1c40f",
      "id": "element_1754204741916"
    },
    {
      "type": "rectangle",
      "x": 431,
      "y": 466,
      "width": 69.28456765395586,
      "height": 133.68749306590928,
      "fillStyle": "#f39c12",
      "id": "element_1754211914453"
    },
    {
      "type": "circle",
      "x": 665.6253587966653,
      "y": 48.62535879666524,
      "radius": 35.62535879666524,
      "fillStyle": "#e74c3c",
      "id": "circle_1754219083224"
    },
    {
      "type": "text",
      "x": 616,
      "y": 234,
      "text": "Balance",
      "font": "22.11948583232132px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1754222895115"
    },
    {
      "type": "triangle",
      "x": 703.2342410989534,
      "y": 349.23424109895336,
      "size": 96.23424109895335,
      "fillStyle": "#e67e22",
      "id": "triangle_1754229877577"
    },
    {
      "type": "text",
      "x": 682,
      "y": 534,
      "text": "Evolve",
      "font": "29.21582500901414px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1754233494459"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 66,
      "width": 16,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 226.21693289698132,
        "centerX": 0.32759715760166724,
        "centerY": 0.5803569797614876
      },
      "shadow": {
        "blur": 12.14147065171115,
        "color": "#d3540040",
        "offsetX": 2.0831102126888412,
        "offsetY": -3.36659563060302
      },
      "opacity": 0.8078326971077323,
      "id": "gradient_rect_1754237134988"
    },
    {
      "type": "circle",
      "x": 65.20370840529363,
      "y": 49.203708405293625,
      "radius": 33.203708405293625,
      "fillStyle": "#f39c12",
      "id": "circle_1754240693476"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 15,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.243201896963782,
      "rotation": 279.77431080613997,
      "opacity": 0.9280301847422344,
      "shadow": {
        "blur": 16.879866375927605,
        "color": "#e74c3c40",
        "offsetX": 0.9072096602790714,
        "offsetY": -0.5308339747786235
      },
      "id": "rotated_triangle_1754251539434"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 346.82818294190355,
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
        "direction": 305.17786416886076,
        "centerX": 0.6166843731844802,
        "centerY": 0.3732860679340078
      },
      "shadow": {
        "blur": 18.094771917855905,
        "color": "#d3540040",
        "offsetX": 2.2244051537832643,
        "offsetY": -1.8231210538579479
      },
      "opacity": 0.9465658628993628,
      "id": "gradient_rect_1754255088188"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 59.415675518026106,
        "centerX": 0.6123620260443531,
        "centerY": 0.5491061901243252
      },
      "shadow": {
        "blur": 17.873336397043015,
        "color": "#FF6B3540",
        "offsetX": 0.0017342195956038253,
        "offsetY": 0.6784484297032289
      },
      "opacity": 0.644692805001553,
      "id": "gradient_circle_1754258707451"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 38.93438815823103px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 354.6933596952686,
        "centerX": 0.6728714872377048,
        "centerY": 0.4704985379276098
      },
      "shadow": {
        "blur": 6.472893245181522,
        "color": "#e74c3c40",
        "offsetX": 3.969333849964226,
        "offsetY": 2.003991976151049
      },
      "opacity": 0.9775251081138657,
      "id": "gradient_text_1754271321714"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 30.592059847431425,
        "centerX": 0.6398162139169937,
        "centerY": 0.641984848378917
      },
      "shadow": {
        "blur": 8.283054649136547,
        "color": "#d3540040",
        "offsetX": -3.4245362386415468,
        "offsetY": 1.188855833540206
      },
      "opacity": 0.8621406111858776,
      "id": "gradient_circle_1754275895264"
    },
    {
      "type": "rectangle",
      "x": 82,
      "y": 311,
      "width": 99.48767481959946,
      "height": 75.05401782306896,
      "fillStyle": "#f39c12",
      "id": "element_1754278869364"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.4929013127137423,
      "rotation": 165.99804117925467,
      "opacity": 0.8630604717260736,
      "shadow": {
        "blur": 9.042460428272054,
        "color": "#f1c40f40",
        "offsetX": 1.9980615237503896,
        "offsetY": -2.6094832508215515
      },
      "id": "rotated_triangle_1754284620635"
    }
  ],
  "generation": 108,
  "lastUpdated": "2025-08-04T08:07:45.752Z",
  "cycleStarted": "2025-07-30T21:05:00.444Z"
};