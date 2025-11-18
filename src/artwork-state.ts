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
      "y": 0,
      "width": 200,
      "height": 100,
      "fillStyle": "#f39c12",
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
      "type": "rectangle",
      "x": 264,
      "y": 55,
      "width": 134.1431710291886,
      "height": 86.26134156760111,
      "fillStyle": "#e74c3c",
      "id": "element_1763004393513",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 142.16148463932393,
        "centerX": 0.5827191594826673,
        "centerY": 0.5377238411018086
      },
      "shadow": {
        "blur": 19.030467227128167,
        "color": "#e74c3c40",
        "offsetX": -0.24403322257581017,
        "offsetY": 4.05069403827528
      }
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 31.496355837976125px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 249.66107660387118,
        "centerX": 0.3596532692762577,
        "centerY": 0.68152863449146
      },
      "shadow": {
        "blur": 7.960818786169236,
        "color": "#FF6B3540",
        "offsetX": 4.41484000360775,
        "offsetY": -2.251314493756571
      },
      "opacity": 0.9696423633478418,
      "id": "gradient_text_1763004393513"
    },
    {
      "type": "circle",
      "x": 482,
      "y": 534,
      "radius": 60.46813267716709,
      "fillStyle": "#f39c12",
      "id": "circle_1763006966428",
      "shadow": {
        "blur": 15.867919432356203,
        "color": "#f39c1240",
        "offsetX": 0.9661454067615249,
        "offsetY": 0.8152505248985653
      },
      "opacity": 0.7733154433191805
    },
    {
      "type": "text",
      "x": 16,
      "y": 534,
      "text": "Vision",
      "font": "31.166909434431613px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1763010376176"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 97.55512850508723,
        "centerX": 0.4715720057574311,
        "centerY": 0.6734247577238217
      },
      "shadow": {
        "blur": 6.411560069375418,
        "color": "#d3540040",
        "offsetX": -2.6855769109275007,
        "offsetY": 4.338183161568782
      },
      "opacity": 0.9357771401909591,
      "id": "gradient_circle_1763010376176"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 26.177463356406918px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 344.79575586862893,
        "centerX": 0.4668550564128961,
        "centerY": 0.41519660172066
      },
      "shadow": {
        "blur": 12.038385314648995,
        "color": "#FF6B3540",
        "offsetX": 3.997192196348214,
        "offsetY": 4.745386127465336
      },
      "opacity": 0.9246343732464507,
      "id": "gradient_text_1763014088465"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 105,
      "fillStyle": "#d35400",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.813596935683354,
      "rotation": 85.97796427699579,
      "opacity": 0.8350441509258228,
      "shadow": {
        "blur": 14.269978665963887,
        "color": "#f1c40f40",
        "offsetX": -3.6063160810558648,
        "offsetY": -0.18166687918541147
      },
      "id": "rotated_triangle_1763017549726"
    },
    {
      "type": "text",
      "x": 282,
      "y": 34,
      "text": "Harmony",
      "font": "29.165858535845064px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1763021221615"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 234,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 229.93941817961877,
        "centerX": 0.5953133582677117,
        "centerY": 0.3964109009487721
      },
      "shadow": {
        "blur": 16.5452169281965,
        "color": "#e74c3c40",
        "offsetX": 2.4788895613163326,
        "offsetY": 1.2205516046976221
      },
      "opacity": 0.6347530466440934,
      "id": "gradient_circle_1763024798643"
    },
    {
      "type": "rectangle",
      "x": 429.4375772558714,
      "y": 145.17181705809645,
      "width": 130,
      "height": 168,
      "fillStyle": "#e67e22",
      "pattern": "waves",
      "opacity": 0.8508662688822648,
      "id": "pattern_rect_1763028360419",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 86.8032740474369,
        "centerX": 0.402742544448848,
        "centerY": 0.439129025757947
      }
    },
    {
      "type": "rectangle",
      "x": 282,
      "y": 489,
      "width": 98.00789010751318,
      "height": 110.57542515085223,
      "fillStyle": "#f1c40f",
      "id": "element_1763042739748",
      "shadow": {
        "blur": 11.648959319891233,
        "color": "#e67e2240",
        "offsetX": 0.15725764310623624,
        "offsetY": -0.6336836762733196
      },
      "opacity": 0.8987117505044926
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
        "direction": 226.94597621096298,
        "centerX": 0.3633115531437441,
        "centerY": 0.43908719138924335
      },
      "shadow": {
        "blur": 10.528011656220304,
        "color": "#FF6B3540",
        "offsetX": -0.8701057038362165,
        "offsetY": -4.598393153172604
      },
      "opacity": 0.9650354166289682,
      "id": "gradient_circle_1763046379789"
    },
    {
      "type": "triangle",
      "x": 465.3740783946411,
      "y": 499.3740783946411,
      "size": 70.37407839464112,
      "fillStyle": "#e74c3c",
      "id": "triangle_1763053532241",
      "shadow": {
        "blur": 19.125250113914618,
        "color": "#e67e2240",
        "offsetX": -0.9848684316841911,
        "offsetY": 1.7670300365645364
      },
      "opacity": 0.999534746280841
    },
    {
      "type": "triangle",
      "x": 665.0235619439022,
      "y": 98.02356194390217,
      "size": 83.02356194390217,
      "fillStyle": "#d35400",
      "id": "triangle_1763057231667"
    },
    {
      "type": "rectangle",
      "x": 601,
      "y": 315,
      "width": 128.2878703984854,
      "height": 68.80315437818494,
      "fillStyle": "#f39c12",
      "id": "element_1763064350031"
    },
    {
      "type": "circle",
      "x": 731.2258466050624,
      "y": 548.2258466050624,
      "radius": 47.2258466050624,
      "fillStyle": "#e67e22",
      "id": "circle_1763071534978",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 267.6360393467031,
        "centerX": 0.6967060144248425,
        "centerY": 0.3046095969671403
      },
      "shadow": {
        "blur": 14.605268133539543,
        "color": "#e67e2240",
        "offsetX": -4.444861063436005,
        "offsetY": 3.6006622852662
      }
    },
    {
      "type": "triangle",
      "x": 76.4697270989029,
      "y": 98.4697270989029,
      "size": 76.4697270989029,
      "fillStyle": "#e74c3c",
      "id": "triangle_1763079765489"
    },
    {
      "type": "rectangle",
      "x": 85.56242274412858,
      "y": 307.82818294190355,
      "width": 440,
      "height": 126,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 152.9622253879746,
        "centerX": 0.37248460385973603,
        "centerY": 0.5453198849508002
      },
      "shadow": {
        "blur": 9.889822379231385,
        "color": "#FF6B3540",
        "offsetX": 3.1312824709228977,
        "offsetY": 3.529295143726955
      },
      "opacity": 0.8344447781499229,
      "id": "gradient_rect_1763087729646"
    },
    {
      "type": "triangle",
      "x": 131.4366312695939,
      "y": 248.4366312695939,
      "size": 40.43663126959391,
      "fillStyle": "#d35400",
      "id": "triangle_1763093264435"
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
        "direction": 0.7884850409685562,
        "centerX": 0.5168255286491379,
        "centerY": 0.3438382905478929
      },
      "shadow": {
        "blur": 13.991776814776973,
        "color": "#e74c3c40",
        "offsetX": 1.6167726185852827,
        "offsetY": -3.903865608850039
      },
      "opacity": 0.665733367109776,
      "id": "gradient_circle_1763096741788"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.932491693762948,
      "opacity": 0.7,
      "id": "spiral_1763100488732"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 139.89271450591778,
        "centerX": 0.5040460816501793,
        "centerY": 0.3847813531165074
      },
      "shadow": {
        "blur": 6.207501219892727,
        "color": "#e74c3c40",
        "offsetX": -3.7075733961107815,
        "offsetY": 4.88662574711811
      },
      "opacity": 0.9145114461477121,
      "id": "gradient_circle_1763103940394"
    },
    {
      "type": "rectangle",
      "x": 13,
      "y": 452,
      "width": 105.38233397230285,
      "height": 93.56112114098961,
      "fillStyle": "#f1c40f",
      "id": "element_1763111169310"
    },
    {
      "type": "rectangle",
      "x": 293.5624227441286,
      "y": 346.82818294190355,
      "width": 24,
      "height": 48,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 350.186026329164,
        "centerX": 0.47810523742596844,
        "centerY": 0.6766970861585837
      },
      "shadow": {
        "blur": 19.79923216023117,
        "color": "#FF6B3540",
        "offsetX": -2.0441421578405206,
        "offsetY": 1.6664148753632269
      },
      "opacity": 0.9683205374458951,
      "id": "gradient_rect_1763114766362"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 56,
      "width": 97.66146613809812,
      "height": 85.8365561112703,
      "fillStyle": "#e74c3c",
      "id": "element_1763122144237"
    },
    {
      "type": "circle",
      "x": 265.3107621402715,
      "y": 499.3107621402715,
      "radius": 43.31076214027148,
      "fillStyle": "#f39c12",
      "id": "circle_1763125997904",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 263.7043547893004,
        "centerX": 0.36142166348130517,
        "centerY": 0.6240265525255102
      }
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 46.64577198910631,
        "centerX": 0.678036179753444,
        "centerY": 0.3421198744664588
      },
      "shadow": {
        "blur": 8.768097166621143,
        "color": "#d3540040",
        "offsetX": -0.7887265763412259,
        "offsetY": 0.7458433163982363
      },
      "opacity": 0.7308046183429213,
      "id": "gradient_circle_1763129122046"
    },
    {
      "type": "rectangle",
      "x": 426,
      "y": 6,
      "width": 78.92432583324239,
      "height": 86.01944178806711,
      "fillStyle": "#f39c12",
      "id": "element_1763132729304"
    },
    {
      "type": "triangle",
      "x": 65.25541700151955,
      "y": 349.25541700151956,
      "size": 51.25541700151955,
      "fillStyle": "#e67e22",
      "id": "triangle_1763143618954"
    },
    {
      "type": "circle",
      "x": 731.1084872474306,
      "y": 98.10848724743062,
      "radius": 57.108487247430624,
      "fillStyle": "#e74c3c",
      "id": "circle_1763150766008",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 59.02002209822829,
        "centerX": 0.3377079638654831,
        "centerY": 0.5872161161235997
      }
    },
    {
      "type": "circle",
      "x": 731.6332026533279,
      "y": 198.6332026533279,
      "radius": 40.63320265332791,
      "fillStyle": "#e67e22",
      "id": "circle_1763157905526",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 33.815074535155354,
        "centerX": 0.5275938729598674,
        "centerY": 0.3526810482290954
      },
      "shadow": {
        "blur": 13.687700171250087,
        "color": "#e67e2240",
        "offsetX": 0.0803693406786321,
        "offsetY": -2.33262023882312
      }
    },
    {
      "type": "circle",
      "x": 665.7900555746971,
      "y": 348.79005557469713,
      "radius": 70.79005557469716,
      "fillStyle": "#f1c40f",
      "id": "circle_1763161513543"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 166.17181705809645,
      "width": 40,
      "height": 126,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 117.92644454220861,
        "centerX": 0.3566111990054714,
        "centerY": 0.48372535751358486
      },
      "shadow": {
        "blur": 9.13741843213499,
        "color": "#e74c3c40",
        "offsetX": -2.3028976190361083,
        "offsetY": -4.6221899509857405
      },
      "opacity": 0.7892982126094835,
      "id": "gradient_rect_1763166112360"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 84,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 79.61775170088745,
        "centerX": 0.41894359976225326,
        "centerY": 0.39981924507308336
      },
      "shadow": {
        "blur": 11.770451668019456,
        "color": "#FF6B3540",
        "offsetX": 0.12893773214806892,
        "offsetY": 3.8068045010312783
      },
      "opacity": 0.6417809234030426,
      "id": "gradient_circle_1763170390227"
    },
    {
      "type": "curve",
      "x": 586,
      "y": 452,
      "width": 159.39045581515475,
      "height": 93.39155199617883,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.170220059322278,
      "opacity": 0.8,
      "id": "curve_1763174008007"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 84,
      "radius": 64.42702633454726,
      "fillStyle": "#f1c40f",
      "id": "circle_1763179555034"
    },
    {
      "type": "circle",
      "x": 131.99627251370492,
      "y": 98.99627251370492,
      "radius": 75.99627251370492,
      "fillStyle": "#e74c3c",
      "id": "circle_1763183115510"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 165,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.1552517159726228,
      "opacity": 0.7,
      "id": "spiral_1763186804477"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 146,
      "width": 134.4717514992817,
      "height": 106.22768519128265,
      "fillStyle": "#e67e22",
      "id": "element_1763193977515"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 15,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.8178598007312337,
      "rotation": 50.750861665652366,
      "opacity": 0.9946452636049767,
      "shadow": {
        "blur": 5.6810930341187476,
        "color": "#f1c40f40",
        "offsetX": -0.9972827577111643,
        "offsetY": -0.18571366160655245
      },
      "id": "rotated_triangle_1763201110476"
    },
    {
      "type": "triangle",
      "x": 131.89584794390498,
      "y": 198.89584794390498,
      "size": 43.895847943904975,
      "fillStyle": "#d35400",
      "id": "triangle_1763208474837"
    },
    {
      "type": "circle",
      "x": 65.35408827258479,
      "y": 398.35408827258476,
      "radius": 53.35408827258478,
      "fillStyle": "#f1c40f",
      "id": "circle_1763212176436"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 102,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.7233931324549765,
      "opacity": 0.7,
      "id": "spiral_1763215488402"
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
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 170.49283234120347,
        "centerX": 0.547158665035336,
        "centerY": 0.5312895989199754
      },
      "shadow": {
        "blur": 5.1598364713482425,
        "color": "#e74c3c40",
        "offsetX": 2.2529055879708393,
        "offsetY": 2.1496308411859344
      },
      "opacity": 0.7961074089931965,
      "id": "gradient_circle_1763219096607"
    },
    {
      "type": "triangle",
      "x": 82.27005557980785,
      "y": 499.27005557980783,
      "size": 82.27005557980785,
      "fillStyle": "#f39c12",
      "id": "triangle_1763222698304",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 149.51326420225945,
        "centerX": 0.6760557377897138,
        "centerY": 0.5574516412295303
      },
      "shadow": {
        "blur": 9.431986117123664,
        "color": "#f39c1240",
        "offsetX": -0.5324690730832105,
        "offsetY": 0.6058415328084354
      }
    },
    {
      "type": "rectangle",
      "x": 266,
      "y": 40,
      "width": 131.51335138591415,
      "height": 117.12545591542658,
      "fillStyle": "#f1c40f",
      "id": "element_1763226287757"
    },
    {
      "type": "rectangle",
      "x": 286,
      "y": 490,
      "width": 90.33703601493343,
      "height": 109.40339718872791,
      "fillStyle": "#e74c3c",
      "id": "element_1763229977386"
    },
    {
      "type": "text",
      "x": 416,
      "y": 84,
      "text": "Harmony",
      "font": "31.032196214372853px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1763233461279"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 6,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.1811996534249825,
      "opacity": 0.7,
      "id": "spiral_1763237111706"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 166.17181705809645,
      "width": 104,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 342.19804198438004,
        "centerX": 0.42661784939730907,
        "centerY": 0.44569625842914284
      },
      "shadow": {
        "blur": 17.585750559706923,
        "color": "#d3540040",
        "offsetX": -1.0621906107608692,
        "offsetY": 4.819177730742572
      },
      "opacity": 0.7603741528578336,
      "id": "gradient_rect_1763240669627"
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
        "direction": 288.14669422214916,
        "centerX": 0.5634852486785491,
        "centerY": 0.4255293466270047
      },
      "shadow": {
        "blur": 18.828332570608644,
        "color": "#FF6B3540",
        "offsetX": 0.9018911945291563,
        "offsetY": 2.25444526704083
      },
      "opacity": 0.7447880003674933,
      "id": "gradient_circle_1763244257120"
    },
    {
      "type": "circle",
      "x": 531.1902578973561,
      "y": 199.19025789735616,
      "radius": 44.19025789735616,
      "fillStyle": "#e74c3c",
      "id": "circle_1763247915519"
    },
    {
      "type": "text",
      "x": 482,
      "y": 534,
      "text": "Transform",
      "font": "21.012155715732042px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1763252647225"
    },
    {
      "type": "text",
      "x": 682,
      "y": 534,
      "text": "Transform",
      "font": "30.28312871187263px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1763260619779"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 268.82818294190355,
      "width": 712,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 196.63954150455365,
        "centerX": 0.3421209102258298,
        "centerY": 0.6144537136660061
      },
      "shadow": {
        "blur": 9.756755549059122,
        "color": "#d3540040",
        "offsetX": 0.553760632244698,
        "offsetY": 0.7661525002700431
      },
      "opacity": 0.7533061214908815,
      "id": "gradient_rect_1763263709473"
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
        "direction": 27.35398456737153,
        "centerX": 0.6295105312599734,
        "centerY": 0.4258916171288111
      },
      "shadow": {
        "blur": 10.724822681662474,
        "color": "#e74c3c40",
        "offsetX": 2.756094893711314,
        "offsetY": -4.978217297668495
      },
      "opacity": 0.8681555475329772,
      "id": "gradient_circle_1763266155674"
    },
    {
      "type": "circle",
      "x": 665.4941659557744,
      "y": 248.49416595577443,
      "radius": 58.494165955774434,
      "fillStyle": "#f39c12",
      "id": "circle_1763269522082"
    },
    {
      "type": "circle",
      "x": 665.869611347369,
      "y": 348.86961134736896,
      "radius": 38.86961134736899,
      "fillStyle": "#e74c3c",
      "id": "circle_1763276702393"
    },
    {
      "type": "rectangle",
      "x": 293.5624227441286,
      "y": 307.82818294190355,
      "width": 24,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 71.86397430237227,
        "centerX": 0.4772366194061452,
        "centerY": 0.45898605132568376
      },
      "shadow": {
        "blur": 9.323204812127429,
        "color": "#d3540040",
        "offsetX": 3.6572503375675325,
        "offsetY": 0.3187037829885764
      },
      "opacity": 0.9350012283308785,
      "id": "gradient_rect_1763283906820"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 0,
      "width": 890,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.707889906839589,
      "id": "pattern_rect_1763287515128"
    },
    {
      "type": "triangle",
      "x": 665.7984276605009,
      "y": 498.7984276605009,
      "size": 66.79842766050095,
      "fillStyle": "#f39c12",
      "id": "triangle_1763291078768"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 281,
      "width": 137.458407156125,
      "height": 135.45798612676643,
      "fillStyle": "#e74c3c",
      "id": "element_1763294888116"
    },
    {
      "type": "rectangle",
      "x": 389.4375772558714,
      "y": 234.82818294190355,
      "width": 210,
      "height": 272,
      "fillStyle": "#e74c3c",
      "pattern": "stripes",
      "opacity": 0.61212199299879,
      "id": "pattern_rect_1763298567477"
    },
    {
      "type": "text",
      "x": 82,
      "y": 384,
      "text": "Create",
      "font": "21.703053734956498px Arial",
      "fillStyle": "#d35400",
      "id": "text_1763301888537"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 42.23806833889499,
        "centerX": 0.32829256759643816,
        "centerY": 0.3090917605469228
      },
      "shadow": {
        "blur": 8.506757924869305,
        "color": "#e74c3c40",
        "offsetX": -4.112735796988782,
        "offsetY": -4.676092690109432
      },
      "opacity": 0.8459127671305918,
      "id": "gradient_circle_1763305483021"
    },
    {
      "type": "rectangle",
      "x": 84,
      "y": 486,
      "width": 94.21643343861635,
      "height": 113.61159014348542,
      "fillStyle": "#f39c12",
      "id": "element_1763309109346"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 28.664259590686715px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 231.10926249294624,
        "centerX": 0.6615047453512554,
        "centerY": 0.5618284651231982
      },
      "shadow": {
        "blur": 8.314876801155918,
        "color": "#FF6B3540",
        "offsetX": -4.665041456165426,
        "offsetY": -4.4398686367050555
      },
      "opacity": 0.8716440526250587,
      "id": "gradient_text_1763312705979"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 200.16501874415107,
      "height": 64.275493435315,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 4.30465235256931,
      "opacity": 0.7998102405461909,
      "id": "curve_1763327082864",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 13.731888785147905,
        "centerX": 0.41202843319172866,
        "centerY": 0.3511364189525767
      },
      "shadow": {
        "blur": 13.029811496151188,
        "color": "#f1c40f40",
        "offsetX": 2.8258788242443833,
        "offsetY": -0.8893714454064323
      }
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 333,
      "radius": 267,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.6037004141292286,
      "opacity": 0.7,
      "id": "spiral_1763330692133"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 227.12735301011995,
      "height": 75.8815037687055,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.946554446414565,
      "opacity": 0.8,
      "id": "curve_1763334305997"
    },
    {
      "type": "rectangle",
      "x": 224,
      "y": 482,
      "width": 82.07545754541351,
      "height": 117.96634290860565,
      "fillStyle": "#e67e22",
      "id": "element_1763343213026"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 174.0114061671624,
        "centerX": 0.5974248695176809,
        "centerY": 0.5588396251783319
      },
      "shadow": {
        "blur": 5.490592259518081,
        "color": "#e74c3c40",
        "offsetX": 2.4258924458470847,
        "offsetY": 3.5257630610261828
      },
      "opacity": 0.7071019233812041,
      "id": "gradient_circle_1763346991199"
    },
    {
      "type": "rectangle",
      "x": 434,
      "y": 34,
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
        "direction": 307.35128706920784,
        "centerX": 0.3500126161056859,
        "centerY": 0.41268852699074365
      },
      "shadow": {
        "blur": 6.243349591800395,
        "color": "#e74c3c40",
        "offsetX": -1.3706839000294457,
        "offsetY": -3.0945521914873853
      },
      "opacity": 0.7233517229229108,
      "id": "gradient_rect_1763350073422"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 0,
      "width": 890,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "dots",
      "opacity": 0.7952703050495993,
      "id": "pattern_rect_1763352590159"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 136,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 202.6492461113673,
        "centerX": 0.40695643974020035,
        "centerY": 0.5930514544055415
      },
      "shadow": {
        "blur": 9.064960591158835,
        "color": "#d3540040",
        "offsetX": 0.4590969773808329,
        "offsetY": 4.832401522825087
      },
      "opacity": 0.958339051369244,
      "id": "gradient_circle_1763359698637"
    },
    {
      "type": "text",
      "x": 616,
      "y": 34,
      "text": "Balance",
      "font": "32.363033156208154px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1763363190677"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 26.897046802720652px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 35.400304628233535,
        "centerX": 0.3911028397656052,
        "centerY": 0.44773957690890864
      },
      "shadow": {
        "blur": 11.096385806677624,
        "color": "#d3540040",
        "offsetX": 2.8992354718198676,
        "offsetY": -4.9186269931862
      },
      "opacity": 0.8107579177159652,
      "id": "gradient_text_1763366890179"
    },
    {
      "type": "rectangle",
      "x": 635,
      "y": 157,
      "width": 60.43410631310618,
      "height": 84.98150014595167,
      "fillStyle": "#e67e22",
      "id": "element_1763373996867"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 25.423937398197822px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 283.60831078828056,
        "centerX": 0.38564977706898806,
        "centerY": 0.5552424125657813
      },
      "shadow": {
        "blur": 13.956970665673895,
        "color": "#e74c3c40",
        "offsetX": 4.074431451906326,
        "offsetY": -4.775144507547173
      },
      "opacity": 0.8888926651588956,
      "id": "gradient_text_1763377511314"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 243.45309522857826,
      "height": 75.54414884838167,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 3.4544475328758177,
      "opacity": 0.8,
      "id": "curve_1763381341839"
    },
    {
      "type": "circle",
      "x": 731.3795409626724,
      "y": 349.3795409626724,
      "radius": 43.37954096267243,
      "fillStyle": "#f39c12",
      "id": "circle_1763388328442"
    },
    {
      "type": "rectangle",
      "x": 169.56242274412858,
      "y": 64.17181705809645,
      "width": 272,
      "height": 330,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 328.7446961401001,
        "centerX": 0.46922209158798145,
        "centerY": 0.6358346140740531
      },
      "shadow": {
        "blur": 18.45994062081234,
        "color": "#d3540040",
        "offsetX": -0.84105926972674,
        "offsetY": 0.45364739522781683
      },
      "opacity": 0.8508227007471446,
      "id": "gradient_rect_1763391988010"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 40,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.119281562526204,
      "rotation": 293.7332316899346,
      "opacity": 0.8392982421643534,
      "shadow": {
        "blur": 14.020954220064812,
        "color": "#f39c1240",
        "offsetX": 4.876782987030859,
        "offsetY": 2.9374333383688374
      },
      "id": "rotated_triangle_1763399124839"
    },
    {
      "type": "triangle",
      "x": 665.252355035184,
      "y": 518.252355035184,
      "size": 81.25235503518397,
      "fillStyle": "#d35400",
      "id": "triangle_1763402794117"
    },
    {
      "type": "triangle",
      "x": 131.63002225504096,
      "y": 248.63002225504096,
      "size": 43.630022255040956,
      "fillStyle": "#e74c3c",
      "id": "triangle_1763406287152"
    },
    {
      "type": "rectangle",
      "x": 169.56242274412858,
      "y": 220.17181705809645,
      "width": 272,
      "height": 18,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 136.2336458169245,
        "centerX": 0.39732172201643934,
        "centerY": 0.4437595372380079
      },
      "shadow": {
        "blur": 17.61794037927914,
        "color": "#FF6B3540",
        "offsetX": -2.4812402802539157,
        "offsetY": -0.5003632415363279
      },
      "opacity": 0.9260212046442603,
      "id": "gradient_rect_1763409971476"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 33.16119475982815px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 109.69347335374523,
        "centerX": 0.44268158878173436,
        "centerY": 0.6652793877923179
      },
      "shadow": {
        "blur": 12.448444013970157,
        "color": "#e74c3c40",
        "offsetX": 3.45340884614256,
        "offsetY": -3.371062806003695
      },
      "opacity": 0.9716286698778578,
      "id": "gradient_text_1763417108357"
    },
    {
      "type": "triangle",
      "x": 131.6773206333021,
      "y": 348.6773206333021,
      "size": 92.67732063330209,
      "fillStyle": "#e74c3c",
      "id": "triangle_1763420713023",
      "shadow": {
        "blur": 17.804601680098962,
        "color": "#e74c3c40",
        "offsetX": 4.96960993260908,
        "offsetY": 0.059209634580865256
      },
      "opacity": 0.9224807475123664
    },
    {
      "type": "circle",
      "x": 131.93238700438152,
      "y": 498.93238700438155,
      "radius": 35.932387004381525,
      "fillStyle": "#f39c12",
      "id": "circle_1763425345006"
    },
    {
      "type": "triangle",
      "x": 331.0440943166258,
      "y": 98.04409431662579,
      "size": 58.04409431662579,
      "fillStyle": "#f1c40f",
      "id": "triangle_1763429609477"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 180.46663248940717,
      "height": 50.69599090245508,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 3.128649656842258,
      "opacity": 0.8,
      "id": "curve_1763436307145"
    },
    {
      "type": "triangle",
      "x": 331.88656665121124,
      "y": 498.88656665121124,
      "size": 53.88656665121126,
      "fillStyle": "#f39c12",
      "id": "triangle_1763438854299"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 268.82818294190355,
      "width": 712,
      "height": 204,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 330.13502183729486,
        "centerX": 0.3760393688909686,
        "centerY": 0.3523343077099856
      },
      "shadow": {
        "blur": 11.443530592406109,
        "color": "#e74c3c40",
        "offsetX": -1.8903946731461962,
        "offsetY": 4.533705517882002
      },
      "opacity": 0.7638103087393232,
      "id": "gradient_rect_1763442355613"
    },
    {
      "type": "text",
      "x": 416,
      "y": 84,
      "text": "Create",
      "font": "21.617005921581537px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1763446077322"
    },
    {
      "type": "rectangle",
      "x": 471,
      "y": 507,
      "width": 120.49273656663891,
      "height": 83.40477835975555,
      "fillStyle": "#f39c12",
      "id": "element_1763449542465"
    },
    {
      "type": "triangle",
      "x": 665.5121958640268,
      "y": 98.51219586402678,
      "size": 51.51219586402678,
      "fillStyle": "#f39c12",
      "id": "triangle_1763453223393"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 105,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.646499154699649,
      "rotation": 275.9483660091101,
      "opacity": 0.9783161455099524,
      "shadow": {
        "blur": 15.993472767447448,
        "color": "#f1c40f40",
        "offsetX": -0.7552168039075742,
        "offsetY": -2.2733538459469615
      },
      "id": "rotated_triangle_1763463922163"
    },
    {
      "type": "triangle",
      "x": 665.4174897166588,
      "y": 199.4174897166588,
      "size": 62.417489716658785,
      "fillStyle": "#f39c12",
      "id": "triangle_1763467737253"
    },
    {
      "type": "rectangle",
      "x": 684,
      "y": 290,
      "width": 95.80109546702944,
      "height": 117.1207869682373,
      "fillStyle": "#d35400",
      "id": "element_1763471653188"
    }
  ],
  "generation": 132,
  "lastUpdated": "2025-11-18T13:14:13.188Z",
  "cycleStarted": "2025-11-13T02:36:06.206Z"
};