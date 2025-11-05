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
      "x": 16,
      "y": 34,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 24.233490123593256px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 306.4605418131284,
        "centerX": 0.6300939082481488,
        "centerY": 0.5357914262043373
      },
      "shadow": {
        "blur": 12.224895201343275,
        "color": "#FF6B3540",
        "offsetX": -2.5565602482816874,
        "offsetY": -0.9671734133924703
      },
      "opacity": 0.9252235883823983,
      "id": "gradient_text_1761794651749"
    },
    {
      "type": "triangle",
      "x": 482,
      "y": 34,
      "size": 59.91585453198393,
      "fillStyle": "#d35400",
      "id": "triangle_1761794651749"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.4769265345795701,
      "opacity": 0.7,
      "id": "spiral_1761797181205"
    },
    {
      "type": "circle",
      "x": 216,
      "y": 84,
      "radius": 43.00178118305132,
      "fillStyle": "#f39c12",
      "id": "circle_1761797181205"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 0,
      "width": 130,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.7337973896212854,
      "id": "pattern_rect_1761800733782"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.180349561308985,
      "opacity": 0.7,
      "id": "spiral_1761800733782"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 242.68608958611793,
      "height": 83.71521323270494,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.3802075558201468,
      "opacity": 0.8,
      "id": "curve_1761804473094"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 333.9098917658338,
        "centerX": 0.5018269230568178,
        "centerY": 0.48901820567092
      },
      "shadow": {
        "blur": 19.125771583854934,
        "color": "#d3540040",
        "offsetX": 2.163573794818527,
        "offsetY": 4.757729469476999
      },
      "opacity": 0.7494880231121279,
      "id": "gradient_circle_1761807936265"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 220.83654529866328,
      "height": 66.40435568588245,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.4135983370454417,
      "opacity": 0.8,
      "id": "curve_1761811615251"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Create",
      "font": "21.62075142682186px Arial",
      "fillStyle": "#d35400",
      "id": "text_1761815151459"
    },
    {
      "type": "circle",
      "x": 331.3883763360075,
      "y": 548.3883763360076,
      "radius": 30.388376336007546,
      "fillStyle": "#e67e22",
      "id": "circle_1761818761291"
    },
    {
      "type": "rectangle",
      "x": 477,
      "y": 54,
      "width": 109.8365688198148,
      "height": 88.24536052041219,
      "fillStyle": "#e74c3c",
      "id": "element_1761826133162"
    },
    {
      "type": "rectangle",
      "x": 472,
      "y": 518,
      "width": 118.70294020517125,
      "height": 61.8474471197208,
      "fillStyle": "#e67e22",
      "id": "element_1761830036159",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 14.068899863655027,
        "centerX": 0.3149543531211673,
        "centerY": 0.6997349732145479
      }
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 346.82818294190355,
      "width": 40,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 188.74887072520394,
        "centerX": 0.6386652477757078,
        "centerY": 0.5046289377729754
      },
      "shadow": {
        "blur": 5.602707229606246,
        "color": "#e74c3c40",
        "offsetX": 2.748026023147208,
        "offsetY": 3.1200492559555926
      },
      "opacity": 0.824416102982947,
      "id": "gradient_rect_1761833204378"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 23.99624843728967,
        "centerX": 0.3244410213986426,
        "centerY": 0.4155447645628483
      },
      "shadow": {
        "blur": 6.351195545991594,
        "color": "#FF6B3540",
        "offsetX": -4.202379833026564,
        "offsetY": -0.7464832834393071
      },
      "opacity": 0.7099986828866752,
      "id": "gradient_rect_1761836748428"
    },
    {
      "type": "rectangle",
      "x": 658,
      "y": 390,
      "width": 16,
      "height": 18,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 235.30218551398764,
        "centerX": 0.5649049661169017,
        "centerY": 0.31874342060734895
      },
      "shadow": {
        "blur": 8.219447577282772,
        "color": "#FF6B3540",
        "offsetX": 0.5233796705042533,
        "offsetY": 2.0913351239577853
      },
      "opacity": 0.9204316444173914,
      "id": "gradient_rect_1761840415589"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 173.0013646777653,
      "height": 76.07985168267453,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 4.5657458532324116,
      "opacity": 0.8,
      "id": "curve_1761843937596",
      "shadow": {
        "blur": 19.2930114211767,
        "color": "#e67e2240",
        "offsetX": 1.6734538977242863,
        "offsetY": -2.314094165443672
      }
    },
    {
      "type": "triangle",
      "x": 665.5776099180877,
      "y": 98.57760991808765,
      "size": 84.57760991808765,
      "fillStyle": "#d35400",
      "id": "triangle_1761847606472",
      "shadow": {
        "blur": 17.70624333825877,
        "color": "#d3540040",
        "offsetX": -2.252732477025834,
        "offsetY": -3.206779121422818
      },
      "opacity": 0.8600862160961221
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 29.92977989567411px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 42.265972979695604,
        "centerX": 0.3990549919776282,
        "centerY": 0.46393763003941413
      },
      "shadow": {
        "blur": 5.596377311533288,
        "color": "#FF6B3540",
        "offsetX": -1.6460559186396662,
        "offsetY": 0.6161508719352042
      },
      "opacity": 0.8960141331888475,
      "id": "gradient_text_1761851108337"
    },
    {
      "type": "triangle",
      "x": 665.8536530663511,
      "y": 248.85365306635106,
      "size": 74.85365306635104,
      "fillStyle": "#d35400",
      "id": "triangle_1761854741837",
      "shadow": {
        "blur": 15.578175364299753,
        "color": "#d3540040",
        "offsetX": -3.0157705696614556,
        "offsetY": 1.154064069416827
      }
    },
    {
      "type": "rectangle",
      "x": 634,
      "y": 360,
      "width": 63.224138873196466,
      "height": 76.53584809702207,
      "fillStyle": "#e67e22",
      "id": "element_1761861920525"
    },
    {
      "type": "triangle",
      "x": 416,
      "y": 34,
      "size": 84.35039050573198,
      "fillStyle": "#e67e22",
      "id": "triangle_1761865506124"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 234.8777174154482,
      "height": 96.27739435515375,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.7104517348589177,
      "opacity": 0.8,
      "id": "curve_1761870112215"
    },
    {
      "type": "circle",
      "x": 131.60271791066552,
      "y": 48.602717910665525,
      "radius": 37.602717910665525,
      "fillStyle": "#d35400",
      "id": "circle_1761874390443"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 307.82818294190355,
      "width": 16,
      "height": 126,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 253.7792311446771,
        "centerX": 0.6430644214689899,
        "centerY": 0.6506865768758856
      },
      "shadow": {
        "blur": 11.727118407315075,
        "color": "#FF6B3540",
        "offsetX": -0.8016467384483956,
        "offsetY": -3.856213069765768
      },
      "opacity": 0.9836650794645192,
      "id": "gradient_rect_1761878093814"
    },
    {
      "type": "triangle",
      "x": 16,
      "y": 334,
      "size": 15,
      "fillStyle": "#e67e22",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.4800073889126577,
      "rotation": 86.23220439642252,
      "opacity": 0.849497246698929,
      "shadow": {
        "blur": 6.584891112044437,
        "color": "#f1c40f40",
        "offsetX": 1.7376849469008393,
        "offsetY": -4.3114380221096855
      },
      "id": "rotated_triangle_1761881080355"
    },
    {
      "type": "circle",
      "x": 131.43860978880338,
      "y": 248.43860978880338,
      "radius": 69.43860978880338,
      "fillStyle": "#d35400",
      "id": "circle_1761887187869",
      "shadow": {
        "blur": 10.711118067798491,
        "color": "#d3540040",
        "offsetX": -1.23905914626661,
        "offsetY": 1.8829306263804728
      },
      "opacity": 0.7163228912969748
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 213.83809568083447,
        "centerX": 0.37013311336085886,
        "centerY": 0.6854876641682623
      },
      "shadow": {
        "blur": 7.16672777207793,
        "color": "#FF6B3540",
        "offsetX": 1.0777453047133712,
        "offsetY": -0.1093581208511214
      },
      "opacity": 0.8604990601743647,
      "id": "gradient_circle_1761901561370"
    },
    {
      "type": "text",
      "x": 682,
      "y": 184,
      "text": "Aesthetic",
      "font": "25.328005361051257px Arial",
      "fillStyle": "#d35400",
      "id": "text_1761905150423"
    },
    {
      "type": "rectangle",
      "x": 291,
      "y": 0,
      "width": 80.68949105155242,
      "height": 106.12413921590424,
      "fillStyle": "#f39c12",
      "id": "element_1761908705780",
      "opacity": 0.7453194884881353
    },
    {
      "type": "circle",
      "x": 331.02048099650506,
      "y": 526.0204809965051,
      "radius": 73.02048099650509,
      "fillStyle": "#e67e22",
      "id": "circle_1761912548509"
    },
    {
      "type": "rectangle",
      "x": 694,
      "y": 44,
      "width": 75.76890554819813,
      "height": 109.24861881098592,
      "fillStyle": "#e74c3c",
      "id": "element_1761916392741",
      "shadow": {
        "blur": 12.312792313627215,
        "color": "#e74c3c40",
        "offsetX": 2.5886204666389894,
        "offsetY": -3.500977042904516
      },
      "opacity": 0.9934373274816959
    },
    {
      "type": "circle",
      "x": 465.98240952361414,
      "y": 548.9824095236141,
      "radius": 37.98240952361411,
      "fillStyle": "#e67e22",
      "id": "circle_1761919531880"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.554256513248046,
      "opacity": 0.7,
      "id": "spiral_1761930389381"
    },
    {
      "type": "circle",
      "x": 282,
      "y": 534,
      "radius": 356,
      "fillStyle": "#e67e22",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 109.35229962048435,
        "centerX": 0.34646921970105327,
        "centerY": 0.32968055056520146
      },
      "shadow": {
        "blur": 6.420533821143622,
        "color": "#e74c3c40",
        "offsetX": -2.4428638270408,
        "offsetY": 3.0259413469861673
      },
      "opacity": 0.6018111015031552,
      "id": "gradient_circle_1761934048819"
    },
    {
      "type": "circle",
      "x": 82,
      "y": 334,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 192.69642560495444,
        "centerX": 0.6377650355279842,
        "centerY": 0.5521495789844136
      },
      "shadow": {
        "blur": 11.785314752651292,
        "color": "#d3540040",
        "offsetX": 1.5543764336321653,
        "offsetY": 0.587120479905705
      },
      "opacity": 0.6073990904619286,
      "id": "gradient_circle_1761937513977"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 496,
      "width": 550,
      "height": 104,
      "fillStyle": "#e74c3c",
      "pattern": "waves",
      "opacity": 0.7420880179789494,
      "id": "pattern_rect_1761941153491"
    },
    {
      "type": "triangle",
      "x": 131.6761472458233,
      "y": 198.6761472458233,
      "size": 74.67614724582332,
      "fillStyle": "#d35400",
      "id": "triangle_1761944706749"
    },
    {
      "type": "rectangle",
      "x": 697,
      "y": 192,
      "width": 68.73534493185288,
      "height": 112.55249898376042,
      "fillStyle": "#f1c40f",
      "id": "element_1761948302381"
    },
    {
      "type": "triangle",
      "x": 731.906955503358,
      "y": 348.9069555033579,
      "size": 41.906955503357906,
      "fillStyle": "#d35400",
      "id": "triangle_1761951935024"
    },
    {
      "type": "rectangle",
      "x": 484.4375772558714,
      "y": 350.82818294190355,
      "width": 20,
      "height": 40,
      "fillStyle": "#e67e22",
      "pattern": "waves",
      "opacity": 0.7262746880863012,
      "id": "pattern_rect_1761956628351"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 32,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 190.1129178816561,
        "centerX": 0.366229309054673,
        "centerY": 0.43071217517551175
      },
      "shadow": {
        "blur": 12.827427957590466,
        "color": "#e74c3c40",
        "offsetX": 2.6924503727827513,
        "offsetY": 0.19367906059136786
      },
      "opacity": 0.8731185404262998,
      "id": "gradient_circle_1761967437539"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 205.0569222443698,
      "height": 71.00772842493687,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.7986183734950973,
      "opacity": 0.8,
      "id": "curve_1761973507998"
    },
    {
      "type": "rectangle",
      "x": 4,
      "y": 0,
      "width": 122.86673344850271,
      "height": 128.53431991297154,
      "fillStyle": "#d35400",
      "id": "element_1761977198823"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 296.563447573341,
        "centerX": 0.5996743886972112,
        "centerY": 0.6079145744861856
      },
      "shadow": {
        "blur": 12.716548992836941,
        "color": "#d3540040",
        "offsetX": -3.298551527912321,
        "offsetY": -0.633555911568302
      },
      "opacity": 0.866196247577877,
      "id": "gradient_circle_1761984378342"
    },
    {
      "type": "rectangle",
      "x": 482.4375772558714,
      "y": 127.17181705809645,
      "width": 24,
      "height": 204,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 222.15009228042382,
        "centerX": 0.39281449735406876,
        "centerY": 0.5165680490473152
      },
      "shadow": {
        "blur": 10.532814149519904,
        "color": "#e74c3c40",
        "offsetX": 0.038689766267712145,
        "offsetY": 3.0173362217954196
      },
      "opacity": 0.925091357968749,
      "id": "gradient_rect_1761987931455"
    },
    {
      "type": "text",
      "x": 16,
      "y": 334,
      "text": "Transform",
      "font": "21.2510449511433px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1761998871671"
    },
    {
      "type": "circle",
      "x": 416,
      "y": 84,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 187.25125320795334,
        "centerX": 0.4961323089366168,
        "centerY": 0.4843369747220235
      },
      "shadow": {
        "blur": 13.557640796883769,
        "color": "#d3540040",
        "offsetX": 2.403470698958703,
        "offsetY": -1.119632363007459
      },
      "opacity": 0.608653061715344,
      "id": "gradient_circle_1762002561076"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 153.81577387755732,
        "centerX": 0.42052494451900213,
        "centerY": 0.36169400349636527
      },
      "shadow": {
        "blur": 17.86106650593384,
        "color": "#FF6B3540",
        "offsetX": 1.0352962022760126,
        "offsetY": -3.239365308901394
      },
      "opacity": 0.7786584745668061,
      "id": "gradient_circle_1762005887500"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 339,
      "width": 134.36864430424168,
      "height": 118.85420988208666,
      "fillStyle": "#d35400",
      "id": "element_1762009482372"
    },
    {
      "type": "triangle",
      "x": 65.67293244993598,
      "y": 548.672932449936,
      "size": 43.67293244993599,
      "fillStyle": "#e74c3c",
      "id": "triangle_1762013097306"
    },
    {
      "type": "circle",
      "x": 731.5466412673734,
      "y": 546.5466412673734,
      "radius": 52.54664126737338,
      "fillStyle": "#f1c40f",
      "id": "circle_1762023864118"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 15,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.4174863259040635,
      "opacity": 0.7,
      "id": "spiral_1762027502692"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 105,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.519278008802557,
      "rotation": 11.11601673880986,
      "opacity": 0.8160336727151298,
      "shadow": {
        "blur": 13.210611777165273,
        "color": "#e74c3c40",
        "offsetX": 0.617633317243353,
        "offsetY": -4.2509197408411925
      },
      "id": "rotated_triangle_1762034687742"
    },
    {
      "type": "rectangle",
      "x": 497,
      "y": 516,
      "width": 68.25974381580842,
      "height": 65.9461339452024,
      "fillStyle": "#d35400",
      "id": "element_1762038316707",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 248.51766621921965,
        "centerX": 0.3859142591407794,
        "centerY": 0.6774862035777185
      }
    },
    {
      "type": "rectangle",
      "x": 687,
      "y": 297,
      "width": 88.39216452621392,
      "height": 104.2779593602587,
      "fillStyle": "#e67e22",
      "id": "element_1762043029976"
    },
    {
      "type": "triangle",
      "x": 665.877438395887,
      "y": 198.877438395887,
      "size": 45.87743839588699,
      "fillStyle": "#f1c40f",
      "id": "triangle_1762047197359"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 268.82818294190355,
      "width": 104,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 191.23971663777945,
        "centerX": 0.3778503891324455,
        "centerY": 0.6425327027376311
      },
      "shadow": {
        "blur": 8.787312504964488,
        "color": "#d3540040",
        "offsetX": -0.6746328383178675,
        "offsetY": -4.175668680036477
      },
      "opacity": 0.7450303685577756,
      "id": "gradient_rect_1762053973986"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 217.17181705809645,
      "width": 890,
      "height": 24,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.8855346868364398,
      "id": "pattern_rect_1762056433047"
    },
    {
      "type": "circle",
      "x": 731.8792889079638,
      "y": 498.8792889079638,
      "radius": 47.87928890796381,
      "fillStyle": "#d35400",
      "id": "circle_1762067106137"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 152.6538163708907,
      "height": 62.31688779646001,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 3.5631855977150053,
      "opacity": 0.8,
      "id": "curve_1762070781030"
    },
    {
      "type": "circle",
      "x": 131.32371907061997,
      "y": 49.32371907061997,
      "radius": 34.32371907061997,
      "fillStyle": "#e74c3c",
      "id": "circle_1762074298912"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 29.4701806517442px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 217.56169940971137,
        "centerX": 0.6373183293123966,
        "centerY": 0.6889229636165504
      },
      "shadow": {
        "blur": 12.793023581922434,
        "color": "#d3540040",
        "offsetX": 2.302431795252984,
        "offsetY": -3.5240827769752614
      },
      "opacity": 0.8979816885968062,
      "id": "gradient_text_1762077901302"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 0,
      "width": 16,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 325.9961318117049,
        "centerX": 0.6185464080407757,
        "centerY": 0.3489070987820299
      },
      "shadow": {
        "blur": 7.598536560264866,
        "color": "#d3540040",
        "offsetX": 0.6098922925816481,
        "offsetY": 3.831237861048164
      },
      "opacity": 0.7284042165201723,
      "id": "gradient_rect_1762081468578"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 349.52857200376457,
        "centerX": 0.4615487406479361,
        "centerY": 0.3526349898939821
      },
      "shadow": {
        "blur": 6.332729424761322,
        "color": "#d3540040",
        "offsetX": 1.2516696337040027,
        "offsetY": -4.782381415601719
      },
      "opacity": 0.9133358204857255,
      "id": "gradient_circle_1762092286255"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 358.0800853752352,
        "centerX": 0.39002879415075153,
        "centerY": 0.6476301240327063
      },
      "shadow": {
        "blur": 12.597320198310385,
        "color": "#FF6B3540",
        "offsetX": 4.948321140836104,
        "offsetY": -4.928146010156896
      },
      "opacity": 0.83346621581646,
      "id": "gradient_circle_1762095876417"
    },
    {
      "type": "triangle",
      "x": 131.98683362536084,
      "y": 348.9868336253609,
      "size": 58.986833625360845,
      "fillStyle": "#d35400",
      "id": "triangle_1762099518033"
    },
    {
      "type": "circle",
      "x": 65.564358878928,
      "y": 548.564358878928,
      "radius": 32.564358878928,
      "fillStyle": "#f1c40f",
      "id": "circle_1762103081259"
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Evolve",
      "font": "24.258945817244797px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1762106770287"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 181.78486018404786,
        "centerX": 0.32586381998658714,
        "centerY": 0.3847344711333962
      },
      "shadow": {
        "blur": 6.4091257662552445,
        "color": "#d3540040",
        "offsetX": -0.6936094163348621,
        "offsetY": -2.1790143939611895
      },
      "opacity": 0.9460239401999277,
      "id": "gradient_circle_1762110273203"
    },
    {
      "type": "circle",
      "x": 531.9495642658077,
      "y": 532.9495642658077,
      "radius": 66.94956426580772,
      "fillStyle": "#f39c12",
      "id": "circle_1762121094132"
    },
    {
      "type": "rectangle",
      "x": 608,
      "y": 34,
      "width": 115.58360210110547,
      "height": 129.77550712152825,
      "fillStyle": "#f39c12",
      "id": "element_1762124696761"
    },
    {
      "type": "circle",
      "x": 356,
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
        "direction": 267.1571514732127,
        "centerX": 0.3794976735179619,
        "centerY": 0.3625902487111075
      },
      "shadow": {
        "blur": 8.488685125897007,
        "color": "#d3540040",
        "offsetX": -2.9710708537409047,
        "offsetY": 1.970100077264565
      },
      "opacity": 0.823116209978553,
      "id": "gradient_circle_1762129404366"
    },
    {
      "type": "rectangle",
      "x": 680,
      "y": 270,
      "width": 104,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 148.73294759704854,
        "centerX": 0.5350946046827166,
        "centerY": 0.4418225119746563
      },
      "shadow": {
        "blur": 15.799284202498018,
        "color": "#e74c3c40",
        "offsetX": -1.7849055641822775,
        "offsetY": -2.9587318084411773
      },
      "opacity": 0.7936136065883065,
      "id": "gradient_rect_1762133635276"
    },
    {
      "type": "text",
      "x": 16,
      "y": 184,
      "text": "Evolve",
      "font": "22.954126962273747px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1762140495664"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
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
        "direction": 227.90293192940547,
        "centerX": 0.39901752997523027,
        "centerY": 0.38593476632431034
      },
      "shadow": {
        "blur": 11.164738018450972,
        "color": "#FF6B3540",
        "offsetX": -0.5081556122556075,
        "offsetY": -1.9455095102236597
      },
      "opacity": 0.8601459993597158,
      "id": "gradient_rect_1762146379461"
    },
    {
      "type": "circle",
      "x": 665.493552256938,
      "y": 98.49355225693792,
      "radius": 35.49355225693792,
      "fillStyle": "#f39c12",
      "id": "circle_1762150089785"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 34,
      "radius": 50.19241021425,
      "fillStyle": "#e74c3c",
      "id": "circle_1762153560226"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 32.38525115586365px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 52.649814463250515,
        "centerX": 0.3935095978274803,
        "centerY": 0.3458240039615891
      },
      "shadow": {
        "blur": 17.983933653074452,
        "color": "#d3540040",
        "offsetX": -1.6014163579358942,
        "offsetY": 1.193350647147728
      },
      "opacity": 0.908745056646051,
      "id": "gradient_text_1762157291073"
    },
    {
      "type": "text",
      "x": 682,
      "y": 534,
      "text": "Aesthetic",
      "font": "33.49560096161545px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1762164404130"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.2246530573399896,
      "opacity": 0.7,
      "id": "spiral_1762167902954"
    },
    {
      "type": "rectangle",
      "x": 462,
      "y": 41,
      "width": 139.16846120415613,
      "height": 114.55448336630863,
      "fillStyle": "#f39c12",
      "id": "element_1762171744268"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 221.6578770924482,
      "height": 91.26212889430423,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.2138183167927394,
      "opacity": 0.8,
      "id": "curve_1762175635024"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 43.96011534154078,
        "centerX": 0.5546029963381185,
        "centerY": 0.4696957024121534
      },
      "shadow": {
        "blur": 6.804312732809077,
        "color": "#e74c3c40",
        "offsetX": -3.5403927087407183,
        "offsetY": 1.0974951440233482
      },
      "opacity": 0.6627330573998457,
      "id": "gradient_circle_1762178737576"
    },
    {
      "type": "triangle",
      "x": 131.8949133794564,
      "y": 248.8949133794564,
      "size": 53.89491337945639,
      "fillStyle": "#f1c40f",
      "id": "triangle_1762182347380"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 205.17181705809645,
      "width": 40,
      "height": 48,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 34.93185627963294,
        "centerX": 0.471444124307647,
        "centerY": 0.5010062198697625
      },
      "shadow": {
        "blur": 15.533537931126512,
        "color": "#d3540040",
        "offsetX": 3.139256104988492,
        "offsetY": -4.357596096035055
      },
      "opacity": 0.7813123293180643,
      "id": "gradient_rect_1762186002808"
    },
    {
      "type": "triangle",
      "x": 131.36024577988752,
      "y": 398.3602457798875,
      "size": 80.36024577988752,
      "fillStyle": "#d35400",
      "id": "triangle_1762189533980",
      "shadow": {
        "blur": 13.531535243523452,
        "color": "#d3540040",
        "offsetX": -4.669509885526024,
        "offsetY": -2.2585619997474615
      }
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 7.827630503547969,
        "centerX": 0.5754566528952755,
        "centerY": 0.35709851110692775
      },
      "shadow": {
        "blur": 16.741129210868515,
        "color": "#FF6B3540",
        "offsetX": 4.659856686492098,
        "offsetY": 2.4109119296764536
      },
      "opacity": 0.7508652289391369,
      "id": "gradient_circle_1762193231173"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 236.06275142934535,
        "centerX": 0.30538888372323464,
        "centerY": 0.3303173407507543
      },
      "shadow": {
        "blur": 7.571328701222614,
        "color": "#d3540040",
        "offsetX": 1.7446536765169522,
        "offsetY": -1.865425298648129
      },
      "opacity": 0.9229748342442256,
      "id": "gradient_circle_1762196694835"
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Aesthetic",
      "font": "30.266920468475178px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1762200352535"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 15,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.102238096143811,
      "opacity": 0.7,
      "id": "spiral_1762203931797"
    },
    {
      "type": "circle",
      "x": 331.383212976654,
      "y": 499.383212976654,
      "radius": 51.38321297665401,
      "fillStyle": "#e67e22",
      "id": "circle_1762207514313"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 204.64743917468326,
      "height": 73.3255518825556,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.3100651153253517,
      "opacity": 0.8,
      "id": "curve_1762211105504"
    },
    {
      "type": "text",
      "x": 282,
      "y": 34,
      "text": "EVOLVE",
      "font": "bold 35.382278386638575px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 299.0790950112982,
        "centerX": 0.5866440858175144,
        "centerY": 0.3645774980149469
      },
      "shadow": {
        "blur": 13.53759120851412,
        "color": "#e74c3c40",
        "offsetX": 0.5696752222887858,
        "offsetY": 0.449034666506158
      },
      "opacity": 0.8443187770731213,
      "id": "gradient_text_1762219988499"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 10,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.5537332508059314,
      "rotation": 325.3810405682194,
      "opacity": 0.7478221787108245,
      "shadow": {
        "blur": 16.00439987411974,
        "color": "#d3540040",
        "offsetX": 0.9334779013797849,
        "offsetY": 3.285448514812197
      },
      "id": "rotated_triangle_1762226615468"
    },
    {
      "type": "rectangle",
      "x": 630,
      "y": 435,
      "width": 70.72192282146986,
      "height": 128.20948253676715,
      "fillStyle": "#e67e22",
      "id": "element_1762236498456"
    },
    {
      "type": "circle",
      "x": 665.0765977779698,
      "y": 499.0765977779698,
      "radius": 71.07659777796985,
      "fillStyle": "#e74c3c",
      "id": "circle_1762243640192",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 11.408568612253918,
        "centerX": 0.6065409998643717,
        "centerY": 0.3981582617162799
      },
      "shadow": {
        "blur": 8.69597314517826,
        "color": "#e74c3c40",
        "offsetX": -0.7346323979825193,
        "offsetY": -3.009987618644956
      },
      "opacity": 0.9884242393049201
    },
    {
      "type": "rectangle",
      "x": 401,
      "y": 495,
      "width": 128.02507370234812,
      "height": 104.52674897486311,
      "fillStyle": "#f1c40f",
      "id": "element_1762247199105"
    },
    {
      "type": "rectangle",
      "x": 701,
      "y": 45,
      "width": 61.38616236561491,
      "height": 107.56865273562158,
      "fillStyle": "#f1c40f",
      "id": "element_1762254330428"
    },
    {
      "type": "triangle",
      "x": 665.1433105316622,
      "y": 499.1433105316622,
      "size": 47.143310531662216,
      "fillStyle": "#e74c3c",
      "id": "triangle_1762258170452"
    },
    {
      "type": "rectangle",
      "x": 2,
      "y": 0,
      "width": 126.03732572065488,
      "height": 99.49661992363426,
      "fillStyle": "#e74c3c",
      "id": "element_1762265148672"
    },
    {
      "type": "rectangle",
      "x": 95,
      "y": 187,
      "width": 73.94645349059152,
      "height": 123.30877802421824,
      "fillStyle": "#e67e22",
      "id": "element_1762268754693"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 283,
      "width": 139.49872864411432,
      "height": 132.1008632160926,
      "fillStyle": "#d35400",
      "id": "element_1762272410369"
    },
    {
      "type": "triangle",
      "x": 131.62097662636293,
      "y": 544.6209766263629,
      "size": 54.62097662636293,
      "fillStyle": "#f39c12",
      "id": "triangle_1762279638422"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 26.737485072037863px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 299.8581594859391,
        "centerX": 0.43166881343205676,
        "centerY": 0.3600955797427182
      },
      "shadow": {
        "blur": 14.638668007464558,
        "color": "#d3540040",
        "offsetX": 2.1376755306992568,
        "offsetY": 2.4445875562801556
      },
      "opacity": 0.8417095479842025,
      "id": "gradient_text_1762283100888"
    },
    {
      "type": "rectangle",
      "x": 486.4375772558714,
      "y": 346.82818294190355,
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
        "direction": 144.4760373076249,
        "centerX": 0.5517086912243335,
        "centerY": 0.4812865591952756
      },
      "shadow": {
        "blur": 14.498284098466028,
        "color": "#d3540040",
        "offsetX": -4.592752622195699,
        "offsetY": 3.4256762255355646
      },
      "opacity": 0.9434064652423153,
      "id": "gradient_rect_1762293901384"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 165,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.85526468952878,
      "opacity": 0.7,
      "id": "spiral_1762297513424"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 350.82818294190355,
      "width": 340,
      "height": 40,
      "fillStyle": "#f39c12",
      "pattern": "stripes",
      "opacity": 0.8173633549427405,
      "id": "pattern_rect_1762306411482"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 24,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.285585267820006,
      "opacity": 0.7,
      "id": "spiral_1762313060542"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 63,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.117256707240959,
      "opacity": 0.7,
      "id": "spiral_1762315637524"
    },
    {
      "type": "rectangle",
      "x": 207,
      "y": 453,
      "width": 117.91904564763628,
      "height": 92.30460850032792,
      "fillStyle": "#f1c40f",
      "id": "element_1762319169143"
    },
    {
      "type": "circle",
      "x": 356,
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
        "direction": 114.16190194263699,
        "centerX": 0.6714455303333804,
        "centerY": 0.6894433628135188
      },
      "shadow": {
        "blur": 17.807361730919432,
        "color": "#d3540040",
        "offsetX": -0.8757671236740538,
        "offsetY": -2.4950588348908243
      },
      "opacity": 0.7646395327366384,
      "id": "gradient_circle_1762330025620"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.1016655667839736,
      "opacity": 0.7,
      "id": "spiral_1762333589671"
    },
    {
      "type": "circle",
      "x": 531.4022491836319,
      "y": 548.4022491836319,
      "radius": 42.402249183631824,
      "fillStyle": "#e67e22",
      "id": "circle_1762348480213"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 65,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.952044002616185,
      "rotation": 108.77159629289909,
      "opacity": 0.9929625559806139,
      "shadow": {
        "blur": 7.219448508312968,
        "color": "#d3540040",
        "offsetX": 0.45286815398484226,
        "offsetY": -1.7429232732907418
      },
      "id": "rotated_triangle_1762351536478"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 125.65189759617809,
        "centerX": 0.37027674581572095,
        "centerY": 0.3192419279255678
      },
      "shadow": {
        "blur": 8.77773829381868,
        "color": "#e74c3c40",
        "offsetX": 2.6528198260356213,
        "offsetY": 1.1502231605651119
      },
      "opacity": 0.737820531182809,
      "id": "gradient_circle_1762358809376"
    },
    {
      "type": "circle",
      "x": 665.3654636882065,
      "y": 349.3654636882065,
      "radius": 76.36546368820649,
      "fillStyle": "#e74c3c",
      "id": "circle_1762362326318"
    },
    {
      "type": "text",
      "x": 682,
      "y": 384,
      "text": "Harmony",
      "font": "26.65740404688777px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1762366032711"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 117.21420161249297,
        "centerX": 0.42349508258279933,
        "centerY": 0.4232067261890736
      },
      "shadow": {
        "blur": 10.999805459618802,
        "color": "#FF6B3540",
        "offsetX": 1.5771681110988673,
        "offsetY": -3.197223096441979
      },
      "opacity": 0.8153018503549957,
      "id": "gradient_circle_1762369529178"
    },
    {
      "type": "text",
      "x": 682,
      "y": 484,
      "text": "Vision",
      "font": "18.946332127824796px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1762373145319"
    }
  ],
  "generation": 163,
  "lastUpdated": "2025-11-05T20:05:45.319Z",
  "cycleStarted": "2025-10-30T02:35:06.400Z"
};