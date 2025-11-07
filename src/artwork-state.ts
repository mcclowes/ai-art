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
      "x": 416,
      "y": 334,
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
      "fillStyle": "#f1c40f",
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
      "x": 82,
      "y": 334,
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
      "id": "pattern_rect_1762405561647"
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
      "opacity": 0.641645057393327,
      "id": "pattern_rect_1762412745377"
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
      "x": 494.4375772558714,
      "y": 370.82818294190355,
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
      "fillStyle": "#f39c12",
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
      "x": 305.5624227441286,
      "y": 229.17181705809645,
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
      "id": "triangle_1762509966398"
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
      "id": "circle_1762531533665"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 205.82818294190355,
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
      "id": "triangle_1762542302124"
    }
  ],
  "generation": 42,
  "lastUpdated": "2025-11-07T19:05:02.124Z",
  "cycleStarted": "2025-11-06T02:35:49.500Z"
};