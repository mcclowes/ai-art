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
      "x": 616,
      "y": 384,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 205.82818294190355,
      "width": 64,
      "height": 330,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 268.8573312957899,
        "centerX": 0.41813176055604206,
        "centerY": 0.5154893631791831
      },
      "shadow": {
        "blur": 7.550644720604086,
        "color": "#FF6B3540",
        "offsetX": -0.9685805190707981,
        "offsetY": 3.1566257611260884
      },
      "opacity": 0.7338691354424642,
      "id": "gradient_rect_1755126325032"
    },
    {
      "type": "text",
      "x": 16,
      "y": 234,
      "text": "Aesthetic",
      "font": "33.534827348090744px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1755126325033"
    },
    {
      "type": "curve",
      "x": 11,
      "y": 365,
      "width": 240.26265726953267,
      "height": 66.9000951878163,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.340787575813853,
      "opacity": 0.8,
      "id": "curve_1755130963645"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 24.915496198994873px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 123.85504915896415,
        "centerX": 0.5055657105001602,
        "centerY": 0.47369311837642825
      },
      "shadow": {
        "blur": 7.713501026692288,
        "color": "#FF6B3540",
        "offsetX": -1.31324872826039,
        "offsetY": -3.34442454245085
      },
      "opacity": 0.8307476359753709,
      "id": "gradient_text_1755130963646"
    },
    {
      "type": "triangle",
      "x": 131.7429946226522,
      "y": 398.7429946226522,
      "size": 64.74299462265219,
      "fillStyle": "#f39c12",
      "id": "triangle_1755135228178",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 24.06763105102683,
        "centerX": 0.3108832847242931,
        "centerY": 0.5977628069893407
      },
      "shadow": {
        "blur": 13.95843295011238,
        "color": "#f39c1240",
        "offsetX": -4.942662204740202,
        "offsetY": 4.305764994027708
      }
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Inspire",
      "font": "27.558200737709768px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1755135228178"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 199.83442859809634,
      "height": 92.99149289653755,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 3.2391114675384403,
      "opacity": 0.8533695062095842,
      "id": "curve_1755139064368",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 137.45075105969747,
        "centerX": 0.5950886211589131,
        "centerY": 0.40701120367279264
      }
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 181.1606704755231,
      "height": 87.34887914766372,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.9147236462776425,
      "opacity": 0.8,
      "id": "curve_1755142185715"
    },
    {
      "type": "triangle",
      "x": 265.74497685780614,
      "y": 498.74497685780614,
      "size": 79.74497685780617,
      "fillStyle": "#e67e22",
      "id": "triangle_1755144699550"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 195.6722935400607,
      "height": 61.02544785151282,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 3.274043247361814,
      "opacity": 0.8,
      "id": "curve_1755144699550"
    },
    {
      "type": "rectangle",
      "x": 427,
      "y": 0,
      "width": 76.1205691264615,
      "height": 139.53983866551107,
      "fillStyle": "#d35400",
      "id": "element_1755147980966"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 187.17942806090872,
      "height": 52.77266021251319,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.1363461093137204,
      "opacity": 0.8,
      "id": "curve_1755147980966"
    },
    {
      "type": "circle",
      "x": 465.32031639245145,
      "y": 199.32031639245145,
      "radius": 76.32031639245143,
      "fillStyle": "#f1c40f",
      "id": "circle_1755151659356"
    },
    {
      "type": "rectangle",
      "x": 479,
      "y": 468,
      "width": 105.83601597273706,
      "height": 62.604120065310376,
      "fillStyle": "#e74c3c",
      "id": "element_1755155193811"
    },
    {
      "type": "text",
      "x": 616,
      "y": 84,
      "text": "Vision",
      "font": "21.87849456715247px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1755158859974"
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
        "direction": 109.8364984770242,
        "centerX": 0.6744828498080677,
        "centerY": 0.648823904722863
      },
      "shadow": {
        "blur": 13.757880296720469,
        "color": "#e74c3c40",
        "offsetX": 3.728471497202122,
        "offsetY": -1.5817509707112687
      },
      "opacity": 0.8139527797913544,
      "id": "gradient_circle_1755162431362"
    },
    {
      "type": "triangle",
      "x": 665.8158648620932,
      "y": 248.81586486209326,
      "size": 48.81586486209326,
      "fillStyle": "#e74c3c",
      "id": "triangle_1755165962974"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 84,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 148.671784869225,
        "centerX": 0.38653760521309166,
        "centerY": 0.5494902494296909
      },
      "shadow": {
        "blur": 14.85308945808455,
        "color": "#e74c3c40",
        "offsetX": 1.8801159022616343,
        "offsetY": -0.47269413277917227
      },
      "opacity": 0.6097597014106431,
      "id": "gradient_circle_1755169508242"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 66,
      "width": 64,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 166.98237072203116,
        "centerX": 0.47289480419740604,
        "centerY": 0.4112370668271853
      },
      "shadow": {
        "blur": 14.515727543788666,
        "color": "#d3540040",
        "offsetX": -4.296249191617765,
        "offsetY": 3.522950905946381
      },
      "opacity": 0.9509621781406021,
      "id": "gradient_rect_1755177363267"
    },
    {
      "type": "text",
      "x": 482,
      "y": 334,
      "text": "Aesthetic",
      "font": "29.355318150981635px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1755180326324"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 21.66213386623633px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 295.0310851021513,
        "centerX": 0.6031795637243428,
        "centerY": 0.4473982001782268
      },
      "shadow": {
        "blur": 8.542990015117635,
        "color": "#FF6B3540",
        "offsetX": 0.11002287710745406,
        "offsetY": 0.5247893360792633
      },
      "opacity": 0.8103596213262483,
      "id": "gradient_text_1755183937426"
    },
    {
      "type": "rectangle",
      "x": 621,
      "y": 484,
      "width": 89.21038516428555,
      "height": 115.73304864770012,
      "fillStyle": "#e74c3c",
      "id": "element_1755187592264"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 362.82818294190355,
      "width": 340,
      "height": 16,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.8874883573593887,
      "id": "pattern_rect_1755191133555"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.673345066835853,
      "opacity": 0.7,
      "id": "spiral_1755194809662"
    },
    {
      "type": "rectangle",
      "x": 94,
      "y": 13,
      "width": 75.21567501616198,
      "height": 71.04115744380758,
      "fillStyle": "#e67e22",
      "id": "element_1755198307259"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 36.81779578117741px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 334.43770293941554,
        "centerX": 0.3766083564770969,
        "centerY": 0.4338997143140963
      },
      "shadow": {
        "blur": 9.384838070551602,
        "color": "#d3540040",
        "offsetX": 0.8736008835458602,
        "offsetY": 2.5485767317633945
      },
      "opacity": 0.9581426766757368,
      "id": "gradient_text_1755201960223"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 166.17181705809645,
      "width": 440,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 254.45286292740127,
        "centerX": 0.333992044740131,
        "centerY": 0.35143940483357816
      },
      "shadow": {
        "blur": 6.057677542474775,
        "color": "#d3540040",
        "offsetX": -2.6383876121727123,
        "offsetY": 1.9968409715221718
      },
      "opacity": 0.9370594359650202,
      "id": "gradient_rect_1755209099540"
    },
    {
      "type": "circle",
      "x": 65.47726052043822,
      "y": 248.47726052043822,
      "radius": 40.477260520438215,
      "fillStyle": "#f1c40f",
      "id": "circle_1755212717744"
    },
    {
      "type": "text",
      "x": 216,
      "y": 84,
      "text": "Evolve",
      "font": "19.64288312143142px Arial",
      "fillStyle": "#d35400",
      "id": "text_1755221616082"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 105.55319357955787,
        "centerX": 0.5797302405704415,
        "centerY": 0.4874443799248205
      },
      "shadow": {
        "blur": 17.01539523350864,
        "color": "#FF6B3540",
        "offsetX": 1.0537613934002383,
        "offsetY": 1.2947618532880085
      },
      "opacity": 0.9370489084007139,
      "id": "gradient_circle_1755225536643"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 362.82818294190355,
      "width": 130,
      "height": 16,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.8504966218684217,
      "id": "pattern_rect_1755228623531"
    },
    {
      "type": "rectangle",
      "x": 90,
      "y": 454,
      "width": 83.03048247024793,
      "height": 90.05027068719754,
      "fillStyle": "#e67e22",
      "id": "element_1755234380600"
    },
    {
      "type": "text",
      "x": 282,
      "y": 84,
      "text": "Create",
      "font": "18.085517356762242px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1755238072910"
    },
    {
      "type": "rectangle",
      "x": 225,
      "y": 467,
      "width": 81.70007655549247,
      "height": 64.04386673942258,
      "fillStyle": "#f1c40f",
      "id": "element_1755241556083"
    },
    {
      "type": "triangle",
      "x": 465.98788595316165,
      "y": 198.98788595316165,
      "size": 57.98788595316166,
      "fillStyle": "#e67e22",
      "id": "triangle_1755245257326"
    },
    {
      "type": "circle",
      "x": 465.0617589513325,
      "y": 544.0617589513324,
      "radius": 55.06175895133248,
      "fillStyle": "#f39c12",
      "id": "circle_1755248738235"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.9911199990043045,
      "rotation": 182.9770821861753,
      "opacity": 0.8537738323171649,
      "shadow": {
        "blur": 15.32550101015732,
        "color": "#f1c40f40",
        "offsetX": -4.1596124763029625,
        "offsetY": -4.895859178769745
      },
      "id": "rotated_triangle_1755252322990"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 355.82818294190355,
      "width": 168,
      "height": 30,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 169.55410060263924,
        "centerX": 0.42113576992855134,
        "centerY": 0.34449516114441237
      },
      "shadow": {
        "blur": 17.702637081123648,
        "color": "#e74c3c40",
        "offsetX": -1.2280313472883808,
        "offsetY": 3.6419253307160666
      },
      "opacity": 0.7291189782451882,
      "id": "gradient_rect_1755255886001"
    }
  ],
  "generation": 38,
  "lastUpdated": "2025-08-15T11:04:46.001Z",
  "cycleStarted": "2025-08-13T22:05:34.253Z"
};