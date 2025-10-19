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
        "direction": 57.65892570988846,
        "centerX": 0.33457486694217936,
        "centerY": 0.4802323960652607
      },
      "opacity": 0.9035849029910064
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
      "x": 82,
      "y": 184,
      "text": "Create",
      "font": "30.913945952897787px Arial",
      "fillStyle": "#d35400",
      "id": "text_1760584816462"
    },
    {
      "type": "rectangle",
      "x": 17,
      "y": 59,
      "width": 97.90880424637102,
      "height": 78.35304058744968,
      "fillStyle": "#e74c3c",
      "id": "element_1760584816463",
      "shadow": {
        "blur": 13.773951826260518,
        "color": "#e74c3c40",
        "offsetX": 3.520353644685713,
        "offsetY": 4.496155663966961
      },
      "opacity": 0.8005974302466352
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 384,
      "size": 74.66706871803136,
      "fillStyle": "#e74c3c",
      "id": "triangle_1760587580165"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3445816307307803,
      "opacity": 0.9715258427428424,
      "id": "spiral_1760591129940",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 353.94206921160065,
        "centerX": 0.356979988682433,
        "centerY": 0.38031811353396333
      },
      "shadow": {
        "blur": 11.494441302749365,
        "color": "#f1c40f40",
        "offsetX": -3.2831003806114722,
        "offsetY": 0.7334385434649704
      }
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 62.56503789576585,
        "centerX": 0.3163519695205084,
        "centerY": 0.41722447519175754
      },
      "shadow": {
        "blur": 13.072247118973904,
        "color": "#e74c3c40",
        "offsetX": -3.3754695424291126,
        "offsetY": 4.219463227024603
      },
      "opacity": 0.9335516337587685,
      "id": "gradient_rect_1760591129940"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.8926871848701508,
      "rotation": 205.10290173887384,
      "opacity": 0.757659083231874,
      "shadow": {
        "blur": 15.157765245722077,
        "color": "#f39c1240",
        "offsetX": 0.4912532166612138,
        "offsetY": -1.2251362138627209
      },
      "id": "rotated_triangle_1760594903399"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 167.10872295599296,
        "centerX": 0.602945669181592,
        "centerY": 0.5273992133784453
      },
      "shadow": {
        "blur": 14.083813657682526,
        "color": "#e74c3c40",
        "offsetX": 3.7777720867753857,
        "offsetY": 0.10851857002949661
      },
      "opacity": 0.7143673977355645,
      "id": "gradient_circle_1760594903399"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Balance",
      "font": "32.760201281488364px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1760598350558"
    },
    {
      "type": "rectangle",
      "x": 279,
      "y": 285,
      "width": 104.81550322627564,
      "height": 128.0809512050756,
      "fillStyle": "#f39c12",
      "id": "element_1760602045052"
    },
    {
      "type": "text",
      "x": 16,
      "y": 484,
      "text": "Vision",
      "font": "20.989207561073886px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1760609163902"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 486,
      "width": 96.55531768816202,
      "height": 113.64907017118591,
      "fillStyle": "#e67e22",
      "id": "element_1760612701451"
    },
    {
      "type": "rectangle",
      "x": 290.5624227441286,
      "y": 93.17181705809645,
      "width": 30,
      "height": 272,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.6372347288528901,
      "id": "pattern_rect_1760616545856"
    },
    {
      "type": "rectangle",
      "x": 486.4375772558714,
      "y": 205.17181705809645,
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
        "direction": 215.89869853174997,
        "centerX": 0.4436220154381324,
        "centerY": 0.6541392387432154
      },
      "shadow": {
        "blur": 8.407202088871646,
        "color": "#d3540040",
        "offsetX": 2.805575278227166,
        "offsetY": -4.2690385167448035
      },
      "opacity": 0.9891639163217185,
      "id": "gradient_rect_1760620430921"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 30.52457614745977px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 34.34696423932869,
        "centerX": 0.5433866653693584,
        "centerY": 0.46453489864211417
      },
      "shadow": {
        "blur": 18.363030114158647,
        "color": "#e74c3c40",
        "offsetX": 1.7227269771827824,
        "offsetY": -3.1054622280175637
      },
      "opacity": 0.9675648282172693,
      "id": "gradient_text_1760623543687"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.5826300291039166,
      "rotation": 205.66296730492138,
      "opacity": 0.7931662472670813,
      "shadow": {
        "blur": 6.266688910306701,
        "color": "#e74c3c40",
        "offsetX": 0.6801423964322684,
        "offsetY": 2.993283608663317
      },
      "id": "rotated_triangle_1760627179845"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 32,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 300.95111337410253,
        "centerX": 0.4186532361314364,
        "centerY": 0.3792898027784949
      },
      "shadow": {
        "blur": 13.217317388211367,
        "color": "#d3540040",
        "offsetX": -1.942373585061703,
        "offsetY": -3.0226314770887974
      },
      "opacity": 0.6953866604399448,
      "id": "gradient_circle_1760630761265"
    },
    {
      "type": "curve",
      "x": 579,
      "y": 205,
      "width": 173.41969452658526,
      "height": 87.14229899093594,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 4.864389459180897,
      "opacity": 0.8,
      "id": "curve_1760634326559"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 64.17181705809645,
      "width": 40,
      "height": 330,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 19.42243841867686,
        "centerX": 0.5188406974122447,
        "centerY": 0.4678774317145611
      },
      "shadow": {
        "blur": 16.72133776911068,
        "color": "#FF6B3540",
        "offsetX": 3.3960705508510287,
        "offsetY": 3.9779758228759494
      },
      "opacity": 0.7046937661925075,
      "id": "gradient_rect_1760638026442"
    },
    {
      "type": "triangle",
      "x": 531.857643975188,
      "y": 503.85764397518807,
      "size": 95.85764397518807,
      "fillStyle": "#d35400",
      "id": "triangle_1760641476808"
    },
    {
      "type": "triangle",
      "x": 665.3129339175464,
      "y": 98.31293391754636,
      "size": 45.31293391754637,
      "fillStyle": "#f39c12",
      "id": "triangle_1760645157234",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 158.31192156174112,
        "centerX": 0.4496765403800519,
        "centerY": 0.5990891248352335
      }
    },
    {
      "type": "spiral",
      "x": 682,
      "y": 384,
      "radius": 267,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.085561627256393,
      "opacity": 0.7,
      "id": "spiral_1760648712692"
    },
    {
      "type": "circle",
      "x": 665.1391520527769,
      "y": 248.1391520527769,
      "radius": 75.1391520527769,
      "fillStyle": "#d35400",
      "id": "circle_1760652286651",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 227.8531077715221,
        "centerX": 0.6436166220241963,
        "centerY": 0.5514922069567738
      },
      "shadow": {
        "blur": 14.97358443474092,
        "color": "#d3540040",
        "offsetX": -1.4541943766078624,
        "offsetY": 3.645949576255969
      }
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 170,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.5561216170335648,
      "rotation": 321.80300610285667,
      "opacity": 0.9317531013256715,
      "shadow": {
        "blur": 5.818061546109435,
        "color": "#e74c3c40",
        "offsetX": -3.359640977374505,
        "offsetY": -2.163952083462044
      },
      "id": "rotated_triangle_1760655912754"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 93.17181705809645,
      "width": 130,
      "height": 272,
      "fillStyle": "#d35400",
      "pattern": "stripes",
      "opacity": 0.7086374392290975,
      "id": "pattern_rect_1760664768351"
    },
    {
      "type": "rectangle",
      "x": 616,
      "y": 501,
      "width": 99.74235438447182,
      "height": 94.58093150547703,
      "fillStyle": "#d35400",
      "id": "element_1760671141213",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 321.15154136961723,
        "centerX": 0.4132859838176932,
        "centerY": 0.562941790482115
      }
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 233.33724708904532,
        "centerX": 0.6833972681614788,
        "centerY": 0.6394798535782467
      },
      "shadow": {
        "blur": 12.762789710457895,
        "color": "#e74c3c40",
        "offsetX": 2.562974228728745,
        "offsetY": 3.14114401832736
      },
      "opacity": 0.6264045240498911,
      "id": "gradient_circle_1760673992513"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 241.78715687042006,
      "height": 79.95280670937694,
      "fillStyle": "#d35400",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.638007857593111,
      "opacity": 0.8,
      "id": "curve_1760684743472"
    },
    {
      "type": "rectangle",
      "x": 99,
      "y": 436,
      "width": 65.56638976927428,
      "height": 125.03077146239399,
      "fillStyle": "#f39c12",
      "id": "element_1760688456981"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 209.55718091283453,
      "height": 62.524472879529,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 4.121301326891136,
      "opacity": 0.8,
      "id": "curve_1760691955502"
    },
    {
      "type": "circle",
      "x": 131.20869525396645,
      "y": 199.20869525396645,
      "radius": 74.20869525396645,
      "fillStyle": "#e67e22",
      "id": "circle_1760695546597"
    },
    {
      "type": "triangle",
      "x": 482,
      "y": 484,
      "size": 49.00466501619376,
      "fillStyle": "#e74c3c",
      "id": "triangle_1760699102117"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "EVOLVE",
      "font": "bold 33.517617663476344px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 114.95744299092685,
        "centerX": 0.6869285526940052,
        "centerY": 0.538173305699461
      },
      "shadow": {
        "blur": 18.1467036500613,
        "color": "#e74c3c40",
        "offsetX": 4.892444038116556,
        "offsetY": -0.9956282568817869
      },
      "opacity": 0.8134044537859171,
      "id": "gradient_text_1760706728832"
    },
    {
      "type": "triangle",
      "x": 65.1155182996957,
      "y": 542.1155182996957,
      "size": 57.115518299695694,
      "fillStyle": "#f1c40f",
      "id": "triangle_1760717159153"
    },
    {
      "type": "circle",
      "x": 265.1884329078888,
      "y": 499.1884329078888,
      "radius": 49.188432907888824,
      "fillStyle": "#f1c40f",
      "id": "circle_1760720705871"
    },
    {
      "type": "circle",
      "x": 465.8066386053998,
      "y": 54.80663860539983,
      "radius": 54.80663860539983,
      "fillStyle": "#f39c12",
      "id": "circle_1760727877782"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 170,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.5007012914756706,
      "rotation": 168.35183760922473,
      "opacity": 0.7629189732581239,
      "shadow": {
        "blur": 10.077550555706274,
        "color": "#e74c3c40",
        "offsetX": 2.10506777735646,
        "offsetY": 0.2326529042178116
      },
      "id": "rotated_triangle_1760731568383"
    },
    {
      "type": "rectangle",
      "x": 62,
      "y": 360,
      "width": 139.64246106453268,
      "height": 77.1028668965927,
      "fillStyle": "#d35400",
      "id": "element_1760738704290"
    },
    {
      "type": "rectangle",
      "x": 621,
      "y": 0,
      "width": 88.10724426896157,
      "height": 117.1362260378808,
      "fillStyle": "#f39c12",
      "id": "element_1760742295860"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 139.79097968603153,
        "centerX": 0.6147055094812561,
        "centerY": 0.6507549901453493
      },
      "shadow": {
        "blur": 19.817959968668532,
        "color": "#d3540040",
        "offsetX": 2.9489622632043844,
        "offsetY": 4.593894192956219
      },
      "opacity": 0.9562187606688123,
      "id": "gradient_circle_1760746786722"
    },
    {
      "type": "triangle",
      "x": 710.9817803520783,
      "y": 248.9817803520783,
      "size": 88.98178035207829,
      "fillStyle": "#e67e22",
      "id": "triangle_1760751143318",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 130.979258939307,
        "centerX": 0.6913747381567018,
        "centerY": 0.49526891031297715
      },
      "shadow": {
        "blur": 8.671416094824199,
        "color": "#e67e2240",
        "offsetX": 4.0849031764614985,
        "offsetY": -0.23557581119907578
      },
      "opacity": 0.7135523024699706
    },
    {
      "type": "circle",
      "x": 731.9743442693022,
      "y": 348.9743442693022,
      "radius": 49.97434426930219,
      "fillStyle": "#e74c3c",
      "id": "circle_1760754527697"
    },
    {
      "type": "triangle",
      "x": 719.9524827022433,
      "y": 519.9524827022433,
      "size": 79.95248270224323,
      "fillStyle": "#e67e22",
      "id": "triangle_1760757231282"
    },
    {
      "type": "text",
      "x": 82,
      "y": 34,
      "text": "Evolve",
      "font": "20.33021977903148px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1760760343846"
    },
    {
      "type": "triangle",
      "x": 131.84295219420227,
      "y": 248.84295219420227,
      "size": 69.84295219420225,
      "fillStyle": "#f39c12",
      "id": "triangle_1760763910398"
    },
    {
      "type": "triangle",
      "x": 131.49909154762855,
      "y": 398.49909154762855,
      "size": 80.49909154762855,
      "fillStyle": "#d35400",
      "id": "triangle_1760771098015"
    },
    {
      "type": "rectangle",
      "x": 69,
      "y": 434,
      "width": 124.56588410823359,
      "height": 129.9931265458186,
      "fillStyle": "#f39c12",
      "id": "element_1760774791476"
    },
    {
      "type": "circle",
      "x": 131.62580334573116,
      "y": 528.6258033457311,
      "radius": 70.62580334573116,
      "fillStyle": "#f39c12",
      "id": "circle_1760778301880"
    },
    {
      "type": "circle",
      "x": 265.5349936578143,
      "y": 498.5349936578143,
      "radius": 53.534993657814326,
      "fillStyle": "#f39c12",
      "id": "circle_1760781911471"
    },
    {
      "type": "triangle",
      "x": 465.8792679016301,
      "y": 98.87926790163013,
      "size": 58.87926790163013,
      "fillStyle": "#f1c40f",
      "id": "triangle_1760792916918"
    },
    {
      "type": "rectangle",
      "x": 219.43757725587142,
      "y": 209.17181705809645,
      "width": 550,
      "height": 40,
      "fillStyle": "#f1c40f",
      "pattern": "dots",
      "opacity": 0.7997992708999656,
      "id": "pattern_rect_1760796288121"
    },
    {
      "type": "circle",
      "x": 531.0875647417377,
      "y": 548.0875647417377,
      "radius": 41.087564741737665,
      "fillStyle": "#d35400",
      "id": "circle_1760803517487"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 254.09051370362292,
        "centerX": 0.6935944013134435,
        "centerY": 0.4907243351169326
      },
      "shadow": {
        "blur": 5.3561267808289355,
        "color": "#FF6B3540",
        "offsetX": -1.531755752895012,
        "offsetY": 1.8245708217571526
      },
      "opacity": 0.7409564816005794,
      "id": "gradient_circle_1760807071377"
    },
    {
      "type": "triangle",
      "x": 731.4372481098688,
      "y": 49.43724810986882,
      "size": 48.43724810986882,
      "fillStyle": "#f1c40f",
      "id": "triangle_1760810781315"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 333,
      "radius": 267,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.4494461587230014,
      "opacity": 0.7,
      "id": "spiral_1760814272733"
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 0,
      "width": 30,
      "height": 712,
      "fillStyle": "#e67e22",
      "pattern": "waves",
      "opacity": 0.7297679557915508,
      "id": "pattern_rect_1760817911076"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 166.17181705809645,
      "width": 64,
      "height": 126,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 185.04846827546694,
        "centerX": 0.5171925263286806,
        "centerY": 0.3306903412940844
      },
      "shadow": {
        "blur": 7.028851020286284,
        "color": "#FF6B3540",
        "offsetX": -1.918695569513944,
        "offsetY": 4.4573624355415475
      },
      "opacity": 0.9009663376302292,
      "id": "gradient_rect_1760833444184"
    },
    {
      "type": "circle",
      "x": 726.5602546460755,
      "y": 248.5602546460754,
      "radius": 72.5602546460754,
      "fillStyle": "#f39c12",
      "id": "circle_1760841383495"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 346.82818294190355,
      "width": 40,
      "height": 48,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 95.67789346871072,
        "centerX": 0.5594161443923112,
        "centerY": 0.6864368955362798
      },
      "shadow": {
        "blur": 14.045917619080857,
        "color": "#d3540040",
        "offsetX": -0.3286968420791547,
        "offsetY": 1.231046255931263
      },
      "opacity": 0.9970816523179269,
      "id": "gradient_rect_1760844377562"
    },
    {
      "type": "triangle",
      "x": 665.200322708995,
      "y": 349.200322708995,
      "size": 63.20032270899498,
      "fillStyle": "#f1c40f",
      "id": "triangle_1760846856562"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 25,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.8412896166410708,
      "rotation": 318.47051326175216,
      "opacity": 0.7912891185252281,
      "shadow": {
        "blur": 7.736015029662752,
        "color": "#f39c1240",
        "offsetX": 0.518395817249977,
        "offsetY": -0.4336919306457325
      },
      "id": "rotated_triangle_1760850310426"
    },
    {
      "type": "rectangle",
      "x": 358.4375772558714,
      "y": 268.82818294190355,
      "width": 272,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 337.73881428098395,
        "centerX": 0.5892587909642559,
        "centerY": 0.5503934341097249
      },
      "shadow": {
        "blur": 16.255500047491573,
        "color": "#d3540040",
        "offsetX": 1.6927406706561428,
        "offsetY": -4.136735809356273
      },
      "opacity": 0.7437025759403603,
      "id": "gradient_rect_1760854010265"
    }
  ],
  "generation": 77,
  "lastUpdated": "2025-10-19T06:06:50.265Z",
  "cycleStarted": "2025-10-16T02:32:55.705Z"
};