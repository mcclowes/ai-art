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
      "x": 131.4681326771671,
      "y": 398.4681326771671,
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
      "fillStyle": "#d35400",
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
      "fillStyle": "#f1c40f",
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
      "id": "pattern_rect_1763028360419"
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
      "fillStyle": "#e67e22",
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
      "fillStyle": "#e74c3c",
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
      "x": 83,
      "y": 206,
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
      "id": "circle_1763125997904"
    }
  ],
  "generation": 36,
  "lastUpdated": "2025-11-14T13:13:17.905Z",
  "cycleStarted": "2025-11-13T02:36:06.206Z"
};