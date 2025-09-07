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
      "x": 482,
      "y": 34,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 482,
      "y": 334,
      "radius": 32,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 63.97305610301271,
        "centerX": 0.3660980993202287,
        "centerY": 0.40315138198503353
      },
      "shadow": {
        "blur": 15.880291140456052,
        "color": "#d3540040",
        "offsetX": -3.9572466862352162,
        "offsetY": 1.6111255169292305
      },
      "opacity": 0.7712827142457442,
      "id": "gradient_circle_1756949554665"
    },
    {
      "type": "triangle",
      "x": 79.2361984511839,
      "y": 199.2361984511839,
      "size": 79.2361984511839,
      "fillStyle": "#f1c40f",
      "id": "triangle_1756952977967"
    },
    {
      "type": "text",
      "x": 16,
      "y": 484,
      "text": "Evolve",
      "font": "20.807520446658827px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1756955604512"
    },
    {
      "type": "circle",
      "x": 265.75614879022265,
      "y": 48.75614879022264,
      "radius": 45.75614879022264,
      "fillStyle": "#e74c3c",
      "id": "circle_1756958756947",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 127.39743225163352,
        "centerX": 0.5576242022206093,
        "centerY": 0.6072062602106938
      },
      "shadow": {
        "blur": 13.843918145750314,
        "color": "#e74c3c40",
        "offsetX": -1.7003428155609712,
        "offsetY": 0.5080441366394606
      },
      "opacity": 0.8254660891203622
    },
    {
      "type": "circle",
      "x": 331.3428052398723,
      "y": 248.34280523987232,
      "radius": 56.34280523987232,
      "fillStyle": "#e74c3c",
      "id": "circle_1756958756947",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 143.1178091853477,
        "centerX": 0.35682973418051367,
        "centerY": 0.33253747621340296
      },
      "shadow": {
        "blur": 7.877081807406076,
        "color": "#e74c3c40",
        "offsetX": 2.613855700621153,
        "offsetY": 3.3545197828849034
      }
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 205.17181705809645,
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
        "direction": 309.490179724304,
        "centerX": 0.6422361760993504,
        "centerY": 0.6392773565255947
      },
      "shadow": {
        "blur": 13.097634670043028,
        "color": "#d3540040",
        "offsetX": 1.1504445149976021,
        "offsetY": -0.5162127058349775
      },
      "opacity": 0.9920695336305998,
      "id": "gradient_rect_1756962337574"
    },
    {
      "type": "circle",
      "x": 416,
      "y": 484,
      "radius": 54.628556402051196,
      "fillStyle": "#e74c3c",
      "id": "circle_1756962337574"
    },
    {
      "type": "rectangle",
      "x": 458,
      "y": 75,
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
        "direction": 30.21680254184765,
        "centerX": 0.4651132640484873,
        "centerY": 0.5925477877112735
      },
      "shadow": {
        "blur": 18.41722168788636,
        "color": "#d3540040",
        "offsetX": 0.5746338583867043,
        "offsetY": -4.954275584845355
      },
      "opacity": 0.9812530576651701,
      "id": "gradient_rect_1756966038225"
    },
    {
      "type": "curve",
      "x": 594,
      "y": 209,
      "width": 205.94771762559424,
      "height": 79.25437494251807,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.129936958527579,
      "opacity": 0.8553316126226711,
      "id": "curve_1756966038225",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 270.70719953694544,
        "centerX": 0.6070923223360927,
        "centerY": 0.511033559407961
      },
      "shadow": {
        "blur": 13.61177171145718,
        "color": "#e67e2240",
        "offsetX": 1.8466006510612765,
        "offsetY": 2.619645589375306
      }
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Harmony",
      "font": "31.326672796308323px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1756969523229"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 34.757898889333724px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 134.3311879849294,
        "centerX": 0.5566812679541822,
        "centerY": 0.31989021142518803
      },
      "shadow": {
        "blur": 17.755732135663294,
        "color": "#e74c3c40",
        "offsetX": 1.3689857256356186,
        "offsetY": -1.3080356818141192
      },
      "opacity": 0.9070931304814971,
      "id": "gradient_text_1756973207103"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 24,
      "fillStyle": "#e67e22",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.7831926218754273,
      "opacity": 0.7,
      "id": "spiral_1756976742376"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 267,
      "radius": 267,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3808753959162319,
      "opacity": 0.7,
      "id": "spiral_1756980330762"
    },
    {
      "type": "circle",
      "x": 16,
      "y": 84,
      "radius": 52.12378646928149,
      "fillStyle": "#f39c12",
      "id": "circle_1756983874086",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 70.04150154803528,
        "centerX": 0.5839519348354982,
        "centerY": 0.6847053263819167
      },
      "shadow": {
        "blur": 6.33385923917141,
        "color": "#f39c1240",
        "offsetX": -0.48160715319110814,
        "offsetY": 4.37450115839146
      }
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 93.17181705809645,
      "width": 80,
      "height": 272,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.6985114642783097,
      "id": "pattern_rect_1756987722742",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 208.65094126977013,
        "centerX": 0.6332660413922928,
        "centerY": 0.48807173842250373
      },
      "shadow": {
        "blur": 7.606445479286416,
        "color": "#f1c40f40",
        "offsetX": -4.863341382647799,
        "offsetY": -3.9263126790920144
      }
    },
    {
      "type": "triangle",
      "x": 331.2841051341592,
      "y": 398.2841051341592,
      "size": 66.28410513415919,
      "fillStyle": "#e74c3c",
      "id": "triangle_1756991454501"
    },
    {
      "type": "circle",
      "x": 665.0891189627264,
      "y": 248.08911896272642,
      "radius": 46.08911896272642,
      "fillStyle": "#f1c40f",
      "id": "circle_1756994703123",
      "shadow": {
        "blur": 6.736384349176211,
        "color": "#f1c40f40",
        "offsetX": 2.07456285165482,
        "offsetY": -0.6647792167016986
      },
      "opacity": 0.813757598264504
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.7696751831253241,
      "rotation": 36.627731979873175,
      "opacity": 0.8343369021327088,
      "shadow": {
        "blur": 19.40024307054252,
        "color": "#f1c40f40",
        "offsetX": -0.9352494057523959,
        "offsetY": -0.39885055260173097
      },
      "id": "rotated_triangle_1756998314621"
    },
    {
      "type": "rectangle",
      "x": 611,
      "y": 293,
      "width": 108.09342466529631,
      "height": 112.86280933637815,
      "fillStyle": "#f1c40f",
      "id": "element_1757005484645"
    },
    {
      "type": "text",
      "x": 616,
      "y": 384,
      "text": "Create",
      "font": "29.559727085450003px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757009194949"
    },
    {
      "type": "triangle",
      "x": 665.7569387318853,
      "y": 498.75693873188527,
      "size": 60.756938731885256,
      "fillStyle": "#d35400",
      "id": "triangle_1757012675259"
    },
    {
      "type": "circle",
      "x": 482,
      "y": 484,
      "radius": 71.2332164231459,
      "fillStyle": "#f1c40f",
      "id": "circle_1757016329346"
    },
    {
      "type": "rectangle",
      "x": 18,
      "y": 196,
      "width": 94.06898947695362,
      "height": 104.03891312900775,
      "fillStyle": "#e74c3c",
      "id": "element_1757019894975"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 162.58037239895592,
      "height": 54.11351671535463,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.1352013033316313,
      "opacity": 0.8,
      "id": "curve_1757023485651"
    },
    {
      "type": "rectangle",
      "x": 99,
      "y": 339,
      "width": 64.83594892423666,
      "height": 119.81929624468144,
      "fillStyle": "#f39c12",
      "id": "element_1757027096829"
    },
    {
      "type": "circle",
      "x": 131.57832715217143,
      "y": 498.5783271521714,
      "radius": 69.57832715217143,
      "fillStyle": "#e74c3c",
      "id": "circle_1757039463698",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 246.14431652254993,
        "centerX": 0.5731261134491678,
        "centerY": 0.5608238054734572
      },
      "opacity": 0.7647070992442794
    },
    {
      "type": "circle",
      "x": 216,
      "y": 484,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 302.2463747025226,
        "centerX": 0.36224361596067106,
        "centerY": 0.4497883645632563
      },
      "shadow": {
        "blur": 5.431296522714652,
        "color": "#d3540040",
        "offsetX": 3.8686832577683496,
        "offsetY": -3.681469235653192
      },
      "opacity": 0.8790002555177734,
      "id": "gradient_circle_1757042156260"
    },
    {
      "type": "circle",
      "x": 265.7546889357201,
      "y": 53.7546889357201,
      "radius": 53.7546889357201,
      "fillStyle": "#e74c3c",
      "id": "circle_1757045164394"
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Create",
      "font": "29.458949196798134px Arial",
      "fillStyle": "#d35400",
      "id": "text_1757048739161"
    },
    {
      "type": "triangle",
      "x": 682,
      "y": 84,
      "size": 170,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.1819352782725434,
      "rotation": 138.21643759329044,
      "opacity": 0.7807686339025919,
      "shadow": {
        "blur": 7.68091269344846,
        "color": "#f1c40f40",
        "offsetX": 3.581628439087618,
        "offsetY": 1.9997862225897434
      },
      "id": "rotated_triangle_1757059605768"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 31.24882735227021,
        "centerX": 0.3884519725337919,
        "centerY": 0.4395267233131045
      },
      "shadow": {
        "blur": 18.951750806042707,
        "color": "#FF6B3540",
        "offsetX": 2.6929109712402877,
        "offsetY": -3.346443172909608
      },
      "opacity": 0.9860077428976852,
      "id": "gradient_circle_1757066717899"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 324.95393420488574,
        "centerX": 0.6133670079302453,
        "centerY": 0.3413033109079821
      },
      "shadow": {
        "blur": 15.690318452505615,
        "color": "#d3540040",
        "offsetX": 4.2240443837260955,
        "offsetY": -4.837431467726541
      },
      "opacity": 0.8100844589058933,
      "id": "gradient_circle_1757070281836"
    },
    {
      "type": "rectangle",
      "x": 675,
      "y": 0,
      "width": 112.93308817334626,
      "height": 131.5121944289097,
      "fillStyle": "#e74c3c",
      "id": "element_1757074112102",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 56.361810939557756,
        "centerX": 0.5977090740796307,
        "centerY": 0.5970408038291578
      },
      "opacity": 0.7406982633287258
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 40,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.5907362833767893,
      "rotation": 180.188131812096,
      "opacity": 0.9338050501749096,
      "shadow": {
        "blur": 13.046900287410914,
        "color": "#e74c3c40",
        "offsetX": 3.932951290495737,
        "offsetY": -2.961749612179949
      },
      "id": "rotated_triangle_1757077847229"
    },
    {
      "type": "triangle",
      "x": 665.7556326222816,
      "y": 398.7556326222816,
      "size": 76.75563262228162,
      "fillStyle": "#f39c12",
      "id": "triangle_1757081091914",
      "opacity": 0.839014670488665
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 28.851481419662896px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 53.332104681825996,
        "centerX": 0.5530019278436131,
        "centerY": 0.6441536590961885
      },
      "shadow": {
        "blur": 13.824251148774827,
        "color": "#FF6B3540",
        "offsetX": 2.559904508874327,
        "offsetY": -2.6128263303401655
      },
      "opacity": 0.950492745284663,
      "id": "gradient_text_1757084728494"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 325,
      "size": 275,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.7774322260091036,
      "rotation": 301.9365533245777,
      "opacity": 0.9092158089889547,
      "shadow": {
        "blur": 17.23215110326536,
        "color": "#e74c3c40",
        "offsetX": 4.668524962751615,
        "offsetY": 2.681099045484679
      },
      "id": "rotated_triangle_1757088359519"
    },
    {
      "type": "rectangle",
      "x": 597,
      "y": 447,
      "width": 136.73323081714287,
      "height": 104.03292718043106,
      "fillStyle": "#f39c12",
      "id": "element_1757095630728"
    },
    {
      "type": "triangle",
      "x": 665.3121241507569,
      "y": 545.3121241507569,
      "size": 54.31212415075683,
      "fillStyle": "#f39c12",
      "id": "triangle_1757106275127"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 211.080202834661,
      "height": 74.15910336618072,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 4.0197356804888,
      "opacity": 0.8,
      "id": "curve_1757109881004"
    },
    {
      "type": "rectangle",
      "x": 29,
      "y": 31,
      "width": 72.45254470081525,
      "height": 134.41242761930812,
      "fillStyle": "#e74c3c",
      "id": "element_1757113488686"
    },
    {
      "type": "rectangle",
      "x": 16,
      "y": 215,
      "width": 98.91538263784987,
      "height": 67.47745714126857,
      "fillStyle": "#d35400",
      "id": "element_1757117994129"
    },
    {
      "type": "text",
      "x": 16,
      "y": 334,
      "text": "Inspire",
      "font": "23.640147328143634px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1757125708816"
    },
    {
      "type": "rectangle",
      "x": 15,
      "y": 502,
      "width": 100.63930439546917,
      "height": 93.43040178290785,
      "fillStyle": "#f39c12",
      "id": "element_1757128354220"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 8,
      "width": 97.03240792421667,
      "height": 82.43095703879038,
      "fillStyle": "#f39c12",
      "id": "element_1757131547080"
    },
    {
      "type": "rectangle",
      "x": 396,
      "y": 14,
      "width": 139.17161569005765,
      "height": 70.94279796078845,
      "fillStyle": "#e74c3c",
      "id": "element_1757138767981"
    },
    {
      "type": "rectangle",
      "x": 389.4375772558714,
      "y": 0,
      "width": 210,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.832643148662032,
      "id": "pattern_rect_1757142273050"
    },
    {
      "type": "text",
      "x": 16,
      "y": 384,
      "text": "Create",
      "font": "28.051040736418912px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757149475190"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 15,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.6129046718592748,
      "opacity": 0.7,
      "id": "spiral_1757153076731"
    },
    {
      "type": "circle",
      "x": 131.8054909225431,
      "y": 69.8054909225431,
      "radius": 69.8054909225431,
      "fillStyle": "#d35400",
      "id": "circle_1757160437028"
    },
    {
      "type": "triangle",
      "x": 724.8290763943475,
      "y": 98.82907639434742,
      "size": 74.82907639434742,
      "fillStyle": "#f1c40f",
      "id": "triangle_1757164027968"
    },
    {
      "type": "rectangle",
      "x": 484.4375772558714,
      "y": 0,
      "width": 20,
      "height": 712,
      "fillStyle": "#e74c3c",
      "pattern": "stripes",
      "opacity": 0.6718703767357657,
      "id": "pattern_rect_1757167470008"
    },
    {
      "type": "rectangle",
      "x": 669,
      "y": 146,
      "width": 125.0482736108632,
      "height": 106.5441244429378,
      "fillStyle": "#f1c40f",
      "id": "element_1757171056363"
    },
    {
      "type": "text",
      "x": 416,
      "y": 484,
      "text": "Harmony",
      "font": "20.59577644234647px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757178265483"
    },
    {
      "type": "triangle",
      "x": 665.4252896809649,
      "y": 248.42528968096488,
      "size": 43.42528968096487,
      "fillStyle": "#d35400",
      "id": "triangle_1757189093194"
    },
    {
      "type": "triangle",
      "x": 730.4751447032634,
      "y": 349.4751447032633,
      "size": 69.47514470326333,
      "fillStyle": "#e67e22",
      "id": "triangle_1757192663227"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 364.82818294190355,
      "width": 16,
      "height": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 250.32824420403912,
        "centerX": 0.33453077156525984,
        "centerY": 0.672167696469838
      },
      "shadow": {
        "blur": 8.459630780198642,
        "color": "#FF6B3540",
        "offsetX": -0.35684270795849393,
        "offsetY": 3.660211043417622
      },
      "opacity": 0.8931602499998461,
      "id": "gradient_rect_1757196265699"
    },
    {
      "type": "circle",
      "x": 665.464962665605,
      "y": 499.46496266560496,
      "radius": 30.46496266560494,
      "fillStyle": "#e67e22",
      "id": "circle_1757199872003"
    },
    {
      "type": "triangle",
      "x": 131.59988647198793,
      "y": 248.59988647198793,
      "size": 49.599886471987936,
      "fillStyle": "#f39c12",
      "id": "triangle_1757212354828"
    },
    {
      "type": "circle",
      "x": 65.49366124841467,
      "y": 398.4936612484147,
      "radius": 43.49366124841467,
      "fillStyle": "#e74c3c",
      "id": "circle_1757217961567",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 221.3365586431606,
        "centerX": 0.4638705260200169,
        "centerY": 0.4802768004864804
      },
      "shadow": {
        "blur": 17.721695920261354,
        "color": "#e74c3c40",
        "offsetX": -0.20752782393575586,
        "offsetY": 4.683601056824605
      }
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 325,
      "size": 275,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.9091605762181438,
      "rotation": 320.5291858445775,
      "opacity": 0.9224623858544346,
      "shadow": {
        "blur": 7.834916885630214,
        "color": "#e67e2240",
        "offsetX": 1.9777217464640362,
        "offsetY": -4.37720590647523
      },
      "id": "rotated_triangle_1757221504545"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 190.17181705809645,
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
        "direction": 315.757536694859,
        "centerX": 0.630477284698892,
        "centerY": 0.36934099782397334
      },
      "shadow": {
        "blur": 15.110743032545521,
        "color": "#d3540040",
        "offsetX": 3.473084382842618,
        "offsetY": -3.5598751123770933
      },
      "opacity": 0.9731550961446902,
      "id": "gradient_rect_1757225202591"
    },
    {
      "type": "triangle",
      "x": 96.61679869798068,
      "y": 498.6167986979807,
      "size": 96.61679869798068,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757228690257"
    },
    {
      "type": "triangle",
      "x": 331.352533917575,
      "y": 519.352533917575,
      "size": 80.35253391757499,
      "fillStyle": "#f39c12",
      "id": "triangle_1757232342004"
    },
    {
      "type": "text",
      "x": 216,
      "y": 534,
      "text": "Create",
      "font": "26.30396655952172px Arial",
      "fillStyle": "#d35400",
      "id": "text_1757239478843"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 233.314868046756,
      "height": 64.85260546865479,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 4.569214436922466,
      "opacity": 0.8,
      "id": "curve_1757243068108"
    },
    {
      "type": "circle",
      "x": 724.0604484758363,
      "y": 199.06044847583632,
      "radius": 75.06044847583632,
      "fillStyle": "#d35400",
      "id": "circle_1757264659213"
    }
  ],
  "generation": 90,
  "lastUpdated": "2025-09-07T17:04:19.213Z",
  "cycleStarted": "2025-09-04T00:19:55.543Z"
};