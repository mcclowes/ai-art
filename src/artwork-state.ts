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
      "x": 32,
      "y": 349,
      "width": 200,
      "height": 100,
      "fillStyle": "#f1c40f",
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
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.436266329126586,
      "rotation": 355.9622110200677,
      "opacity": 0.7234940184719327,
      "shadow": {
        "blur": 16.687087740396194,
        "color": "#d3540040",
        "offsetX": -4.199353721805403,
        "offsetY": 0.07264652680127437
      },
      "id": "rotated_triangle_1761189618129"
    },
    {
      "type": "triangle",
      "x": 131.37047009811295,
      "y": 199.37047009811295,
      "size": 72.37047009811296,
      "fillStyle": "#e74c3c",
      "id": "triangle_1761189618130"
    },
    {
      "type": "spiral",
      "x": 282,
      "y": 234,
      "radius": 39,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.2263068745436456,
      "opacity": 0.7,
      "id": "spiral_1761192387769"
    },
    {
      "type": "circle",
      "x": 131.56009180699678,
      "y": 55.56009180699678,
      "radius": 55.56009180699678,
      "fillStyle": "#f1c40f",
      "id": "circle_1761195923712"
    },
    {
      "type": "triangle",
      "x": 65.76524991733793,
      "y": 498.76524991733794,
      "size": 49.765249917337925,
      "fillStyle": "#e74c3c",
      "id": "triangle_1761199684484",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 252.6854917336028,
        "centerX": 0.3489235449995725,
        "centerY": 0.35300290827578407
      }
    },
    {
      "type": "text",
      "x": 282,
      "y": 84,
      "text": "Balance",
      "font": "19.919894911088143px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1761199684484"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.9506283564448492,
      "rotation": 296.93518082384344,
      "opacity": 0.9689630261215991,
      "shadow": {
        "blur": 18.434063484099518,
        "color": "#e67e2240",
        "offsetX": -0.7643205827572981,
        "offsetY": 1.4045013993095967
      },
      "id": "rotated_triangle_1761203152725"
    },
    {
      "type": "circle",
      "x": 331.93310067392633,
      "y": 348.93310067392633,
      "radius": 66.93310067392633,
      "fillStyle": "#f39c12",
      "id": "circle_1761206842170"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 205.17181705809645,
      "width": 712,
      "height": 48,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 20.798546121521007,
        "centerX": 0.5378402627737648,
        "centerY": 0.6066804563125994
      },
      "shadow": {
        "blur": 7.58101899519814,
        "color": "#FF6B3540",
        "offsetX": -0.013106354157539357,
        "offsetY": 2.665240278520084
      },
      "opacity": 0.9880820979739795,
      "id": "gradient_rect_1761213966647"
    },
    {
      "type": "text",
      "x": 216,
      "y": 534,
      "text": "Harmony",
      "font": "30.08950494979772px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1761221354717"
    },
    {
      "type": "rectangle",
      "x": 411,
      "y": 36,
      "width": 109.64204367516814,
      "height": 125.8881298786492,
      "fillStyle": "#e67e22",
      "id": "element_1761228353730"
    },
    {
      "type": "triangle",
      "x": 531.2339041787181,
      "y": 499.2339041787181,
      "size": 92.23390417871809,
      "fillStyle": "#d35400",
      "id": "triangle_1761231948076"
    },
    {
      "type": "curve",
      "x": 611,
      "y": 350,
      "width": 188.3693404352265,
      "height": 97.47260704946375,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 4.269647830083472,
      "opacity": 0.8,
      "id": "curve_1761235603238"
    },
    {
      "type": "rectangle",
      "x": 630,
      "y": 51,
      "width": 70.15518719483114,
      "height": 95.85980537515763,
      "fillStyle": "#e67e22",
      "id": "element_1761239131504",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 303.3531091534029,
        "centerX": 0.3796827381103153,
        "centerY": 0.4097516364339757
      },
      "shadow": {
        "blur": 8.266544337984634,
        "color": "#e67e2240",
        "offsetX": -1.8039144178506583,
        "offsetY": 0.6986581885741483
      },
      "opacity": 0.9880718423825168
    },
    {
      "type": "text",
      "x": 682,
      "y": 184,
      "text": "Create",
      "font": "32.1933150170533px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1761242838784"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 192.82093140649206,
      "height": 88.17696837425865,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 3.447567045827032,
      "opacity": 0.8,
      "id": "curve_1761246310510"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 190.17181705809645,
      "width": 104,
      "height": 78,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 272.17542081146695,
        "centerX": 0.45318449912629843,
        "centerY": 0.3764510429292119
      },
      "shadow": {
        "blur": 11.439070545618117,
        "color": "#FF6B3540",
        "offsetX": -0.8862636039178788,
        "offsetY": 0.5981726012282191
      },
      "opacity": 0.7409136928098743,
      "id": "gradient_rect_1761253513436"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 234.82818294190355,
      "width": 340,
      "height": 272,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.6832585675341013,
      "id": "pattern_rect_1761260703642"
    },
    {
      "type": "rectangle",
      "x": 635,
      "y": 455,
      "width": 60.94202307098526,
      "height": 88.81360071080087,
      "fillStyle": "#d35400",
      "id": "element_1761265178758"
    },
    {
      "type": "rectangle",
      "x": 73,
      "y": 63,
      "width": 116.15470818053096,
      "height": 70.58800508057814,
      "fillStyle": "#f39c12",
      "id": "element_1761273100326"
    }
  ],
  "generation": 25,
  "lastUpdated": "2025-10-24T02:31:40.326Z",
  "cycleStarted": "2025-10-23T02:33:03.243Z"
};