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
      "x": 65.00178118305132,
      "y": 398.0017811830513,
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
      "fillStyle": "#d35400",
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
      "fillStyle": "#f1c40f",
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
      "id": "element_1761830036159"
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
      "x": 297.5624227441286,
      "y": 361.82818294190355,
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
      "id": "curve_1761843937596"
    },
    {
      "type": "triangle",
      "x": 665.5776099180877,
      "y": 98.57760991808765,
      "size": 84.57760991808765,
      "fillStyle": "#d35400",
      "id": "triangle_1761847606472"
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
      "x": 665.350390505732,
      "y": 515.350390505732,
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
      "fillStyle": "#f1c40f",
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
      "id": "circle_1761887187869"
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
      "x": 82,
      "y": 534,
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
      "id": "element_1761908705780"
    },
    {
      "type": "circle",
      "x": 331.02048099650506,
      "y": 526.0204809965051,
      "radius": 73.02048099650509,
      "fillStyle": "#f39c12",
      "id": "circle_1761912548509"
    },
    {
      "type": "rectangle",
      "x": 694,
      "y": 44,
      "width": 75.76890554819813,
      "height": 109.24861881098592,
      "fillStyle": "#e74c3c",
      "id": "element_1761916392741"
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
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#e74c3c",
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
      "x": 494.4375772558714,
      "y": 229.17181705809645,
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
      "x": 30.562422744128583,
      "y": 318.82818294190355,
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
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.7262746880863012,
      "id": "pattern_rect_1761956628351"
    }
  ],
  "generation": 47,
  "lastUpdated": "2025-11-01T00:23:48.351Z",
  "cycleStarted": "2025-10-30T02:35:06.400Z"
};