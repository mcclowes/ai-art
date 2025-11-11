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
      "id": "rect1",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 159.5489604852917,
        "centerX": 0.4498794671476707,
        "centerY": 0.5301647539886464
      },
      "shadow": {
        "blur": 8.480659764142908,
        "color": "#e67e2240",
        "offsetX": 1.7864551915455689,
        "offsetY": 4.33821377261067
      },
      "opacity": 0.9594412318939646
    },
    {
      "type": "text",
      "x": 282,
      "y": 34,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 65.64921410641067,
      "y": 248.64921410641068,
      "radius": 40.64921410641067,
      "fillStyle": "#e67e22",
      "id": "circle_1762399585065",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 156.66312861839108,
        "centerX": 0.4418089224891581,
        "centerY": 0.3463983610444676
      }
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Balance",
      "font": "27.922347961123798px Arial",
      "fillStyle": "#d35400",
      "id": "text_1762399585065"
    },
    {
      "type": "circle",
      "x": 131.1781514408158,
      "y": 499.1781514408158,
      "radius": 62.1781514408158,
      "fillStyle": "#f39c12",
      "id": "circle_1762402176058"
    },
    {
      "type": "rectangle",
      "x": 246,
      "y": 66,
      "width": 440,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 349.91875028827894,
        "centerX": 0.5140664417276051,
        "centerY": 0.5060709450793859
      },
      "shadow": {
        "blur": 18.734506744793308,
        "color": "#d3540040",
        "offsetX": 3.351523560867209,
        "offsetY": 3.6873947168323156
      },
      "opacity": 0.8187183773476181,
      "id": "gradient_rect_1762402176058"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 150.82818294190355,
      "width": 890,
      "height": 440,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.6966234280758081,
      "id": "pattern_rect_1762405561647",
      "shadow": {
        "blur": 8.898481251622208,
        "color": "#f1c40f40",
        "offsetX": -0.7611096471534768,
        "offsetY": -2.251816502226991
      }
    },
    {
      "type": "text",
      "x": 216,
      "y": 184,
      "text": "Aesthetic",
      "font": "30.318260805258785px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1762409287290"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 362.82818294190355,
      "width": 890,
      "height": 16,
      "fillStyle": "#e74c3c",
      "pattern": "dots",
      "opacity": 0.8236436313143404,
      "id": "pattern_rect_1762412745377",
      "shadow": {
        "blur": 18.698284966013812,
        "color": "#e74c3c40",
        "offsetX": 2.1827574351095453,
        "offsetY": -2.5648720539420244
      }
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
        "direction": 106.60141150862769,
        "centerX": 0.6281924678366557,
        "centerY": 0.36755989547269685
      },
      "shadow": {
        "blur": 17.405351101235354,
        "color": "#d3540040",
        "offsetX": -0.5536132615561717,
        "offsetY": 2.7284543576657416
      },
      "opacity": 0.6664687928747322,
      "id": "gradient_circle_1762416431076"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 34,
      "radius": 52,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 320.5077906747695,
        "centerX": 0.5359998231004905,
        "centerY": 0.40018011126460235
      },
      "shadow": {
        "blur": 17.42012981048219,
        "color": "#FF6B3540",
        "offsetX": 1.9274272150185734,
        "offsetY": -0.542758625429296
      },
      "opacity": 0.6829125863248242,
      "id": "gradient_circle_1762419993126"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 80.67545217616353,
        "centerX": 0.6374430500164006,
        "centerY": 0.4728661298826286
      },
      "shadow": {
        "blur": 19.842429636783447,
        "color": "#FF6B3540",
        "offsetX": -0.7928991673158459,
        "offsetY": 0.1836908716298229
      },
      "opacity": 0.9468998160708338,
      "id": "gradient_rect_1762423571096"
    },
    {
      "type": "triangle",
      "x": 265.0574824663254,
      "y": 504.0574824663254,
      "size": 95.05748246632538,
      "fillStyle": "#e74c3c",
      "id": "triangle_1762427106782"
    },
    {
      "type": "rectangle",
      "x": 290.5624227441286,
      "y": 234.82818294190355,
      "width": 30,
      "height": 272,
      "fillStyle": "#f1c40f",
      "pattern": "dots",
      "opacity": 0.6034789046210715,
      "id": "pattern_rect_1762430943356"
    },
    {
      "type": "rectangle",
      "x": 473,
      "y": 56,
      "width": 116.14418485791633,
      "height": 85.41652272848083,
      "fillStyle": "#e67e22",
      "id": "element_1762437956139"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 214.17181705809645,
      "width": 168,
      "height": 30,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 128.96464301244035,
        "centerX": 0.30929402873209905,
        "centerY": 0.5699460004486722
      },
      "shadow": {
        "blur": 6.592423371816509,
        "color": "#FF6B3540",
        "offsetX": 4.290833893294899,
        "offsetY": -4.153250589293598
      },
      "opacity": 0.8979289405852324,
      "id": "gradient_rect_1762441577542"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 171.9054097832175,
        "centerX": 0.540460635922023,
        "centerY": 0.3285224887732084
      },
      "shadow": {
        "blur": 19.393558786308937,
        "color": "#d3540040",
        "offsetX": -4.542380663041639,
        "offsetY": -4.799025081083254
      },
      "opacity": 0.8928185325039124,
      "id": "gradient_circle_1762448765996"
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Vision",
      "font": "21.98963474349261px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1762455910740"
    },
    {
      "type": "text",
      "x": 616,
      "y": 84,
      "text": "Create",
      "font": "29.6279125612523px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1762459535598"
    },
    {
      "type": "text",
      "x": 682,
      "y": 184,
      "text": "Harmony",
      "font": "23.18288099353017px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1762463109477"
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 484,
      "size": 40,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.52473106201021,
      "rotation": 264.8614680712994,
      "opacity": 0.8746071190878801,
      "shadow": {
        "blur": 15.763428726346998,
        "color": "#d3540040",
        "offsetX": -3.9937946453580464,
        "offsetY": -2.677968046598711
      },
      "id": "rotated_triangle_1762466713801"
    },
    {
      "type": "text",
      "x": 616,
      "y": 384,
      "text": "Aesthetic",
      "font": "29.152440382825556px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1762470316437"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 272.65741170238806,
        "centerX": 0.6446618833636857,
        "centerY": 0.47534153112308425
      },
      "shadow": {
        "blur": 18.020832743045148,
        "color": "#e74c3c40",
        "offsetX": 2.843151571135092,
        "offsetY": 2.1188421584885564
      },
      "opacity": 0.6152466042351653,
      "id": "gradient_circle_1762479185173"
    },
    {
      "type": "triangle",
      "x": 731.4664995716779,
      "y": 499.4664995716779,
      "size": 63.466499571677915,
      "fillStyle": "#d35400",
      "id": "triangle_1762488370416"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 20,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 221.81603779255212,
        "centerX": 0.3955749454196492,
        "centerY": 0.47360953382076476
      },
      "shadow": {
        "blur": 9.219601337388362,
        "color": "#e74c3c40",
        "offsetX": 1.1450382802214598,
        "offsetY": -4.053015944411249
      },
      "opacity": 0.8858358479113184,
      "id": "gradient_circle_1762491939587"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 32.923857615808025px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 61.42291593243325,
        "centerX": 0.5188037055820738,
        "centerY": 0.5735362069135594
      },
      "shadow": {
        "blur": 12.416923699583322,
        "color": "#e74c3c40",
        "offsetX": -1.7097037763229062,
        "offsetY": 4.769056815278624
      },
      "opacity": 0.9794689248858093,
      "id": "gradient_text_1762495681361"
    },
    {
      "type": "triangle",
      "x": 131.73050718651194,
      "y": 98.73050718651196,
      "size": 46.73050718651196,
      "fillStyle": "#d35400",
      "id": "triangle_1762509966398",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 253.38010824984084,
        "centerX": 0.35167112610854545,
        "centerY": 0.33838613288160513
      }
    },
    {
      "type": "rectangle",
      "x": 486.4375772558714,
      "y": 64.17181705809645,
      "width": 16,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 127.5862884189462,
        "centerX": 0.6133854541398123,
        "centerY": 0.3697940704413071
      },
      "shadow": {
        "blur": 15.963737437172451,
        "color": "#e74c3c40",
        "offsetX": 1.816485194550257,
        "offsetY": 4.498591305240742
      },
      "opacity": 0.9139338464227815,
      "id": "gradient_rect_1762517323932"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 84,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 212.7476248614066,
        "centerX": 0.4488204047012222,
        "centerY": 0.36143555327345267
      },
      "shadow": {
        "blur": 7.8625058245976485,
        "color": "#d3540040",
        "offsetX": 0.9204679732563292,
        "offsetY": 3.754870031655358
      },
      "opacity": 0.7051054576031961,
      "id": "gradient_circle_1762521150430"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "EMERGENCE",
      "font": "bold 23.738297384381838px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 28.562808650683998,
        "centerX": 0.42540132718761114,
        "centerY": 0.5299864693069424
      },
      "shadow": {
        "blur": 5.6114556532198545,
        "color": "#e74c3c40",
        "offsetX": 0.623252497376166,
        "offsetY": -2.776665997491523
      },
      "opacity": 0.8388879424749772,
      "id": "gradient_text_1762524318157"
    },
    {
      "type": "circle",
      "x": 531.4880501960602,
      "y": 499.48805019606016,
      "radius": 51.488050196060136,
      "fillStyle": "#d35400",
      "id": "circle_1762531533665",
      "opacity": 0.8262742102365468
    },
    {
      "type": "rectangle",
      "x": 112,
      "y": 0,
      "width": 40,
      "height": 330,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 121.50596401506873,
        "centerX": 0.38330902541503453,
        "centerY": 0.6084144425262231
      },
      "shadow": {
        "blur": 18.38584675628466,
        "color": "#d3540040",
        "offsetX": -3.8552507927103608,
        "offsetY": 1.1513619323612545
      },
      "opacity": 0.8679081461624887,
      "id": "gradient_rect_1762535111388"
    },
    {
      "type": "text",
      "x": 282,
      "y": 34,
      "text": "Balance",
      "font": "31.262254693484973px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1762538821976"
    },
    {
      "type": "triangle",
      "x": 265.8550579058964,
      "y": 543.8550579058964,
      "size": 55.855057905896416,
      "fillStyle": "#f39c12",
      "id": "triangle_1762542302124",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 74.25306371723184,
        "centerX": 0.30731760152847,
        "centerY": 0.40433418502049445
      }
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 160.96188931126372,
        "centerX": 0.6641918891993603,
        "centerY": 0.5683387370546105
      },
      "shadow": {
        "blur": 6.189656864559931,
        "color": "#FF6B3540",
        "offsetX": 3.9218716118024233,
        "offsetY": -2.3595777726599954
      },
      "opacity": 0.7859591873347983,
      "id": "gradient_circle_1762545946303"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Inspire",
      "font": "20.333192091313947px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1762553101918"
    },
    {
      "type": "rectangle",
      "x": 265.5624227441286,
      "y": 221.17181705809645,
      "width": 80,
      "height": 16,
      "fillStyle": "#d35400",
      "pattern": "dots",
      "opacity": 0.8042886691158212,
      "id": "pattern_rect_1762561243219"
    },
    {
      "type": "triangle",
      "x": 713.9376076899348,
      "y": 98.93760768993474,
      "size": 85.93760768993474,
      "fillStyle": "#e67e22",
      "id": "triangle_1762565560620"
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 150.82818294190355,
      "width": 80,
      "height": 440,
      "fillStyle": "#e67e22",
      "pattern": "stripes",
      "opacity": 0.7211371586662393,
      "id": "pattern_rect_1762569118262"
    },
    {
      "type": "rectangle",
      "x": 221.56242274412858,
      "y": 64.17181705809645,
      "width": 168,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 107.56067121013557,
        "centerX": 0.33729544413493223,
        "centerY": 0.47989502707533604
      },
      "shadow": {
        "blur": 17.12904513804913,
        "color": "#e74c3c40",
        "offsetX": -3.2437460830433906,
        "offsetY": 3.537045984871977
      },
      "opacity": 0.7460969382692438,
      "id": "gradient_rect_1762574769964"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 39,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.4311814634050477,
      "opacity": 0.7,
      "id": "spiral_1762578305195"
    },
    {
      "type": "circle",
      "x": 731.2843870084126,
      "y": 248.28438700841264,
      "radius": 59.28438700841265,
      "fillStyle": "#e67e22",
      "id": "circle_1762582004527"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "METAMORPHOSIS",
      "font": "bold 27.28510682688404px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 198.4731604050143,
        "centerX": 0.3629824221844894,
        "centerY": 0.32694033166649267
      },
      "shadow": {
        "blur": 17.764072795268255,
        "color": "#d3540040",
        "offsetX": 0.5221143631055991,
        "offsetY": 4.647742074193133
      },
      "opacity": 0.8648171463347332,
      "id": "gradient_text_1762589183538"
    },
    {
      "type": "triangle",
      "x": 665.7033822293434,
      "y": 348.70338222934345,
      "size": 62.703382229343454,
      "fillStyle": "#e74c3c",
      "id": "triangle_1762592700466",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 316.27422132310437,
        "centerX": 0.6228008262342635,
        "centerY": 0.657297315235952
      },
      "shadow": {
        "blur": 12.101502866336737,
        "color": "#e74c3c40",
        "offsetX": -4.101504442678399,
        "offsetY": -0.36793935741948935
      }
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 2.5547340001483665,
        "centerX": 0.30964309938989937,
        "centerY": 0.5974812853336781
      },
      "shadow": {
        "blur": 11.855182289464707,
        "color": "#d3540040",
        "offsetX": -0.5478254175197055,
        "offsetY": -4.9079823151177155
      },
      "opacity": 0.8195527551939146,
      "id": "gradient_circle_1762596303268"
    },
    {
      "type": "circle",
      "x": 731.6703590925457,
      "y": 543.6703590925457,
      "radius": 55.6703590925457,
      "fillStyle": "#f1c40f",
      "id": "circle_1762603676709"
    },
    {
      "type": "rectangle",
      "x": 73,
      "y": 15,
      "width": 117.6682720482317,
      "height": 67.8682135819233,
      "fillStyle": "#f39c12",
      "id": "element_1762607341591"
    },
    {
      "type": "text",
      "x": 82,
      "y": 234,
      "text": "Evolve",
      "font": "20.718468943899936px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1762610687464"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 271.8103780701317,
        "centerX": 0.6088514728214159,
        "centerY": 0.5039344084268786
      },
      "shadow": {
        "blur": 5.664095816791551,
        "color": "#d3540040",
        "offsetX": -3.010658345938706,
        "offsetY": -2.831823759599734
      },
      "opacity": 0.8066437008183323,
      "id": "gradient_circle_1762614287138"
    },
    {
      "type": "circle",
      "x": 131.09751778243643,
      "y": 398.0975177824364,
      "radius": 78.09751778243643,
      "fillStyle": "#f39c12",
      "id": "circle_1762621485849"
    },
    {
      "type": "circle",
      "x": 65.37805302671745,
      "y": 499.37805302671745,
      "radius": 63.37805302671746,
      "fillStyle": "#f39c12",
      "id": "circle_1762625192543"
    },
    {
      "type": "triangle",
      "x": 331.89763083042385,
      "y": 498.89763083042385,
      "size": 75.89763083042388,
      "fillStyle": "#d35400",
      "id": "triangle_1762628676073"
    },
    {
      "type": "triangle",
      "x": 531.5072047591161,
      "y": 98.50720475911606,
      "size": 94.50720475911606,
      "fillStyle": "#e74c3c",
      "id": "triangle_1762635881084"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "TRANSCEND",
      "font": "bold 39.432195415413254px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 328.1128701432189,
        "centerX": 0.35547419582851836,
        "centerY": 0.48473590554822427
      },
      "shadow": {
        "blur": 12.21710774065047,
        "color": "#FF6B3540",
        "offsetX": -0.008904399246225658,
        "offsetY": -2.683212460707647
      },
      "opacity": 0.8472144954743103,
      "id": "gradient_text_1762639484565"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 170,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.6136556007839662,
      "rotation": 232.98964075186547,
      "opacity": 0.7586999958207268,
      "shadow": {
        "blur": 19.09677398745919,
        "color": "#d3540040",
        "offsetX": -0.401939492599908,
        "offsetY": 3.2186309586856154
      },
      "id": "rotated_triangle_1762643092529"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 484,
      "radius": 52.69935927910049,
      "fillStyle": "#e67e22",
      "id": "circle_1762647844227"
    },
    {
      "type": "rectangle",
      "x": 200.56242274412858,
      "y": 9.171817058096451,
      "width": 210,
      "height": 440,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.6789510778046,
      "id": "pattern_rect_1762655755619"
    },
    {
      "type": "circle",
      "x": 16,
      "y": 184,
      "radius": 32,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 95.43101310052371,
        "centerX": 0.4995277212316961,
        "centerY": 0.55485303987894
      },
      "shadow": {
        "blur": 5.389442178763675,
        "color": "#FF6B3540",
        "offsetX": 2.9594664950328227,
        "offsetY": -3.01274895796126
      },
      "opacity": 0.6280083613354305,
      "id": "gradient_circle_1762658701210"
    },
    {
      "type": "triangle",
      "x": 616,
      "y": 334,
      "size": 72.94667397113011,
      "fillStyle": "#e67e22",
      "id": "triangle_1762661184111"
    },
    {
      "type": "rectangle",
      "x": 611,
      "y": 368,
      "width": 108.14988326081716,
      "height": 61.40525587319367,
      "fillStyle": "#e67e22",
      "id": "element_1762664714196"
    },
    {
      "type": "rectangle",
      "x": 85.56242274412858,
      "y": 190.17181705809645,
      "width": 440,
      "height": 78,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 233.5344371239641,
        "centerX": 0.4641033855432773,
        "centerY": 0.5072584770054455
      },
      "shadow": {
        "blur": 19.393677879262853,
        "color": "#d3540040",
        "offsetX": -1.0598098213520624,
        "offsetY": 1.7336502536170961
      },
      "opacity": 0.8301066871348127,
      "id": "gradient_rect_1762671911912"
    },
    {
      "type": "triangle",
      "x": 465.47575748266036,
      "y": 510.47575748266036,
      "size": 89.47575748266038,
      "fillStyle": "#d35400",
      "id": "triangle_1762675566848"
    },
    {
      "type": "text",
      "x": 82,
      "y": 84,
      "text": "Inspire",
      "font": "31.957303153527054px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1762679094384"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 213.28059989546256,
      "height": 70.90913703464562,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.93183822202424,
      "opacity": 0.8,
      "id": "curve_1762686281644"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 361.82818294190355,
      "width": 712,
      "height": 18,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 46.330322946026484,
        "centerX": 0.6519381447939472,
        "centerY": 0.5111998213260348
      },
      "shadow": {
        "blur": 15.746504339607375,
        "color": "#d3540040",
        "offsetX": -3.5288511686029955,
        "offsetY": 0.4652465561253516
      },
      "opacity": 0.7033807518847558,
      "id": "gradient_rect_1762690070493"
    },
    {
      "type": "circle",
      "x": 65.73912596152338,
      "y": 498.73912596152337,
      "radius": 52.739125961523385,
      "fillStyle": "#d35400",
      "id": "circle_1762693757238"
    },
    {
      "type": "rectangle",
      "x": 414,
      "y": 41,
      "width": 103.09789541545696,
      "height": 115.76188423191972,
      "fillStyle": "#d35400",
      "id": "element_1762700686810"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 6,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.3893612847876624,
      "opacity": 0.7,
      "id": "spiral_1762707885534"
    },
    {
      "type": "rectangle",
      "x": 413,
      "y": 467,
      "width": 105.79177423599185,
      "height": 64.98955686456475,
      "fillStyle": "#e74c3c",
      "id": "element_1762715069562"
    },
    {
      "type": "rectangle",
      "x": 664,
      "y": 0,
      "width": 134.1092602225272,
      "height": 117.16530828032965,
      "fillStyle": "#f39c12",
      "id": "element_1762718708462"
    },
    {
      "type": "triangle",
      "x": 665.4078162449863,
      "y": 248.40781624498626,
      "size": 69.40781624498626,
      "fillStyle": "#f1c40f",
      "id": "triangle_1762722279133"
    },
    {
      "type": "rectangle",
      "x": 85.56242274412858,
      "y": 364.82818294190355,
      "width": 440,
      "height": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 327.0987637142865,
        "centerX": 0.6354088095934574,
        "centerY": 0.4387093258947963
      },
      "shadow": {
        "blur": 8.324915851601801,
        "color": "#d3540040",
        "offsetX": 0.5828034066439809,
        "offsetY": 4.049803400287367
      },
      "opacity": 0.7058086071676667,
      "id": "gradient_rect_1762729491916"
    },
    {
      "type": "circle",
      "x": 731.0474768092407,
      "y": 199.04747680924075,
      "radius": 43.04747680924074,
      "fillStyle": "#f1c40f",
      "id": "circle_1762734210904"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 207.41207568719975,
        "centerX": 0.40996293156558644,
        "centerY": 0.34955133398212856
      },
      "shadow": {
        "blur": 13.700792437821283,
        "color": "#FF6B3540",
        "offsetX": 1.745214645727593,
        "offsetY": -0.5419191208192586
      },
      "opacity": 0.9312504788027172,
      "id": "gradient_circle_1762738440577"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 170,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.8390415174975003,
      "rotation": 62.2819458438037,
      "opacity": 0.904551032041728,
      "shadow": {
        "blur": 16.729187892644717,
        "color": "#f39c1240",
        "offsetX": 2.8211637521181725,
        "offsetY": 2.202888393976856
      },
      "id": "rotated_triangle_1762742222049"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "METAMORPHOSIS",
      "font": "bold 26.745298811967018px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 227.782262278626,
        "centerX": 0.6725603904310029,
        "centerY": 0.610385252756235
      },
      "shadow": {
        "blur": 7.980477991737529,
        "color": "#FF6B3540",
        "offsetX": 0.08305247102484081,
        "offsetY": -0.8760847456955512
      },
      "opacity": 0.9471769414670038,
      "id": "gradient_text_1762745371212"
    },
    {
      "type": "circle",
      "x": 665.0041019440619,
      "y": 499.00410194406186,
      "radius": 39.00410194406188,
      "fillStyle": "#d35400",
      "id": "circle_1762747810540"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 39,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.6424849615510957,
      "opacity": 0.7,
      "id": "spiral_1762751198859"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 200.1794057441772,
      "height": 78.28392274410882,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.852557142928249,
      "opacity": 0.8,
      "id": "curve_1762754903754"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 112.00391441569207,
        "centerX": 0.3912705854615629,
        "centerY": 0.3493171413169458
      },
      "shadow": {
        "blur": 13.59984108644922,
        "color": "#e74c3c40",
        "offsetX": -3.790108469907376,
        "offsetY": 1.487293439841153
      },
      "opacity": 0.931291409754027,
      "id": "gradient_circle_1762758340152"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 307.82818294190355,
      "width": 712,
      "height": 126,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 148.52798213833256,
        "centerX": 0.4965001498676053,
        "centerY": 0.5138399415705152
      },
      "shadow": {
        "blur": 16.355756294271693,
        "color": "#e74c3c40",
        "offsetX": 2.0733785443317787,
        "offsetY": 4.6952111130061365
      },
      "opacity": 0.7090529307659995,
      "id": "gradient_rect_1762765618140"
    },
    {
      "type": "rectangle",
      "x": 28,
      "y": 515,
      "width": 75.14997850332598,
      "height": 66.62746900156361,
      "fillStyle": "#d35400",
      "id": "element_1762772707657"
    },
    {
      "type": "rectangle",
      "x": 429.4375772558714,
      "y": 197.17181705809645,
      "width": 130,
      "height": 64,
      "fillStyle": "#e67e22",
      "pattern": "dots",
      "opacity": 0.6073022435632776,
      "id": "pattern_rect_1762780471046"
    },
    {
      "type": "rectangle",
      "x": 424,
      "y": 312,
      "width": 83.63331490574268,
      "height": 73.16189812963204,
      "fillStyle": "#f39c12",
      "id": "element_1762783536513"
    },
    {
      "type": "circle",
      "x": 265.2724696880416,
      "y": 531.2724696880416,
      "radius": 68.27246968804158,
      "fillStyle": "#e67e22",
      "id": "circle_1762787144471"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 206.31900420852102,
      "height": 90.6668983679647,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.5172626097496256,
      "opacity": 0.8,
      "id": "curve_1762790800907"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 165,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.1733197652388982,
      "opacity": 0.7,
      "id": "spiral_1762794304901"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 32,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 316.3152668399925,
        "centerX": 0.32957424662990925,
        "centerY": 0.6636993458079107
      },
      "shadow": {
        "blur": 12.814926203310737,
        "color": "#FF6B3540",
        "offsetX": 4.7025163004799015,
        "offsetY": -0.10357260521207667
      },
      "opacity": 0.9777782181250565,
      "id": "gradient_circle_1762798029035"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.682051589302694,
      "opacity": 0.7096114603024342,
      "id": "spiral_1762801500926"
    },
    {
      "type": "rectangle",
      "x": 135.56242274412858,
      "y": 350.82818294190355,
      "width": 340,
      "height": 40,
      "fillStyle": "#e74c3c",
      "pattern": "stripes",
      "opacity": 0.7262589461369832,
      "id": "pattern_rect_1762805168832"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 15,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.8594723703022265,
      "rotation": 296.91597735636896,
      "opacity": 0.90950983388948,
      "shadow": {
        "blur": 15.089000112610671,
        "color": "#f1c40f40",
        "offsetX": 3.119741460434005,
        "offsetY": 2.828468883428501
      },
      "id": "rotated_triangle_1762808710740"
    },
    {
      "type": "circle",
      "x": 531.9563540124391,
      "y": 71.95635401243905,
      "radius": 71.95635401243905,
      "fillStyle": "#f1c40f",
      "id": "circle_1762812339373"
    },
    {
      "type": "triangle",
      "x": 465.6406454688799,
      "y": 498.6406454688799,
      "size": 46.64064546887988,
      "fillStyle": "#f39c12",
      "id": "triangle_1762824824248"
    },
    {
      "type": "rectangle",
      "x": 669,
      "y": 3,
      "width": 124.00439322117546,
      "height": 91.29592667780153,
      "fillStyle": "#d35400",
      "id": "element_1762828544435"
    },
    {
      "type": "rectangle",
      "x": 598,
      "y": 130,
      "width": 135.9938299341769,
      "height": 138.7121622844862,
      "fillStyle": "#e67e22",
      "id": "element_1762834100802"
    }
  ],
  "generation": 123,
  "lastUpdated": "2025-11-11T04:08:20.802Z",
  "cycleStarted": "2025-11-06T02:35:49.500Z"
};