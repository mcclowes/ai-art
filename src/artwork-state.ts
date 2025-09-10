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
      "x": 82,
      "y": 184,
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
      "fillStyle": "#e74c3c",
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
      "x": 626,
      "y": 263,
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
      "id": "element_1757019894975",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 304.1197185002966,
        "centerX": 0.5076910987373121,
        "centerY": 0.4299273519836341
      },
      "opacity": 0.9146829386331912
    },
    {
      "type": "curve",
      "x": 450,
      "y": 22,
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
      "fillStyle": "#f1c40f",
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
      "x": 616,
      "y": 84,
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
      "id": "element_1757113488686",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 286.7976565908831,
        "centerX": 0.5875742967901622,
        "centerY": 0.5057301492133248
      },
      "shadow": {
        "blur": 17.162229706646997,
        "color": "#e74c3c40",
        "offsetX": -0.20925978699973413,
        "offsetY": 0.8943881272014087
      },
      "opacity": 0.9770310940544774
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
      "id": "element_1757131547080",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 270.1534316864931,
        "centerX": 0.5815224383160094,
        "centerY": 0.5558484002083931
      },
      "opacity": 0.8649435235049404
    },
    {
      "type": "rectangle",
      "x": 396,
      "y": 14,
      "width": 139.17161569005765,
      "height": 70.94279796078845,
      "fillStyle": "#e67e22",
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
      "opacity": 0.7127726326424868,
      "id": "spiral_1757153076731",
      "shadow": {
        "blur": 6.06616148630547,
        "color": "#f39c1240",
        "offsetX": -4.652572900211307,
        "offsetY": -4.625110536323276
      }
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
      "x": 682,
      "y": 384,
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
      "id": "triangle_1757232342004",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 78.34737250175304,
        "centerX": 0.5245736602609856,
        "centerY": 0.6406595889547271
      },
      "opacity": 0.7384290737170218
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
    },
    {
      "type": "circle",
      "x": 216,
      "y": 84,
      "radius": 65.52291839541728,
      "fillStyle": "#f1c40f",
      "id": "circle_1757268352303"
    },
    {
      "type": "circle",
      "x": 731.1256171130746,
      "y": 537.1256171130746,
      "radius": 62.125617113074576,
      "fillStyle": "#e67e22",
      "id": "circle_1757271858705"
    },
    {
      "type": "circle",
      "x": 131.5755005680747,
      "y": 77.57550056807469,
      "radius": 77.57550056807469,
      "fillStyle": "#f39c12",
      "id": "circle_1757275496357",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 256.3190274415455,
        "centerX": 0.3043054722998523,
        "centerY": 0.34966619821282724
      },
      "shadow": {
        "blur": 13.805524762013086,
        "color": "#f39c1240",
        "offsetX": 0.7607135993578007,
        "offsetY": -4.961986514833281
      },
      "opacity": 0.9860850741195732
    },
    {
      "type": "triangle",
      "x": 65.77996173758959,
      "y": 198.7799617375896,
      "size": 43.779961737589595,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757279065847"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 38.088191747634326px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 81.81576746167103,
        "centerX": 0.45030276506678746,
        "centerY": 0.4728540518785067
      },
      "shadow": {
        "blur": 16.701655004709963,
        "color": "#e74c3c40",
        "offsetX": 0.9521796622225853,
        "offsetY": -3.0793566303608433
      },
      "opacity": 0.9139055543141956,
      "id": "gradient_text_1757282677722"
    },
    {
      "type": "text",
      "x": 82,
      "y": 384,
      "text": "Inspire",
      "font": "19.647417750063635px Arial",
      "fillStyle": "#d35400",
      "id": "text_1757286276102"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 38.746208737224286px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 43.34776293796229,
        "centerX": 0.6995109723518536,
        "centerY": 0.5584204323816794
      },
      "shadow": {
        "blur": 15.035719174491494,
        "color": "#d3540040",
        "offsetX": 3.293416325079752,
        "offsetY": -2.1921524735671793
      },
      "opacity": 0.9920093631764086,
      "id": "gradient_text_1757290940065"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 170,
      "fillStyle": "#d35400",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.6085703331476306,
      "rotation": 269.0422191890063,
      "opacity": 0.8118549887711983,
      "shadow": {
        "blur": 9.710496703229381,
        "color": "#f39c1240",
        "offsetX": 1.7217739066967308,
        "offsetY": -2.2177675584960888
      },
      "id": "rotated_triangle_1757295193593"
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
        "direction": 281.571129723454,
        "centerX": 0.42046021876666656,
        "centerY": 0.3641611896820439
      },
      "shadow": {
        "blur": 16.88923242650032,
        "color": "#e74c3c40",
        "offsetX": 3.038057304196794,
        "offsetY": 1.646083207109113
      },
      "opacity": 0.864003458447096,
      "id": "gradient_circle_1757298826551"
    },
    {
      "type": "rectangle",
      "x": 86,
      "y": 448,
      "width": 90.51176987288241,
      "height": 101.46201669994218,
      "fillStyle": "#e74c3c",
      "id": "element_1757301675336",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 228.27820998116508,
        "centerX": 0.6155131907763348,
        "centerY": 0.559625377797311
      },
      "shadow": {
        "blur": 12.379858525048206,
        "color": "#e74c3c40",
        "offsetX": -2.081953394739917,
        "offsetY": 3.762821960639382
      },
      "opacity": 0.8706141932962154
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.0651327302624143,
      "rotation": 53.18221966859664,
      "opacity": 0.9197533161391952,
      "shadow": {
        "blur": 9.499255101771482,
        "color": "#e74c3c40",
        "offsetX": 1.1338811102024877,
        "offsetY": 0.49981875820769694
      },
      "id": "rotated_triangle_1757304369784"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 136,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 28.207281257603107,
        "centerX": 0.682424999247967,
        "centerY": 0.32453727414405786
      },
      "shadow": {
        "blur": 16.321608235340623,
        "color": "#FF6B3540",
        "offsetX": -0.7926062996370176,
        "offsetY": 2.263714165862911
      },
      "opacity": 0.849231352986365,
      "id": "gradient_circle_1757307948934"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 175.82738080067526,
      "height": 72.81921889847982,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.932103564855361,
      "opacity": 0.8,
      "id": "curve_1757318861619"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 170,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.423167276179209,
      "rotation": 123.14566409838288,
      "opacity": 0.8950930576429963,
      "shadow": {
        "blur": 7.113433782792749,
        "color": "#e74c3c40",
        "offsetX": 2.648521967459672,
        "offsetY": 2.131708046923557
      },
      "id": "rotated_triangle_1757329482110"
    },
    {
      "type": "text",
      "x": 616,
      "y": 84,
      "text": "Evolve",
      "font": "26.95210143909343px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757337170961"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.915502781604034,
      "rotation": 234.56582397994706,
      "opacity": 0.7916899603614302,
      "shadow": {
        "blur": 12.030247964743399,
        "color": "#f1c40f40",
        "offsetX": 4.0144394292200225,
        "offsetY": -0.635422475072442
      },
      "id": "rotated_triangle_1757340339814"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.991037165102703,
      "rotation": 153.37682086218263,
      "opacity": 0.8067174178816787,
      "shadow": {
        "blur": 19.48579327125663,
        "color": "#d3540040",
        "offsetX": 1.5307891885796572,
        "offsetY": -3.402205142516743
      },
      "id": "rotated_triangle_1757343870138"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 334.9659009563959,
        "centerX": 0.3505371800422365,
        "centerY": 0.5000883248436003
      },
      "shadow": {
        "blur": 6.68508661384526,
        "color": "#e74c3c40",
        "offsetX": 2.7230111950837843,
        "offsetY": -3.378208945737624
      },
      "opacity": 0.8515695715674435,
      "id": "gradient_circle_1757347479546"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 240.8410276426577,
        "centerX": 0.5974228469349406,
        "centerY": 0.524375658205624
      },
      "shadow": {
        "blur": 18.730115040043042,
        "color": "#FF6B3540",
        "offsetX": -2.6712806600118544,
        "offsetY": 4.590548445890025
      },
      "opacity": 0.9477314979928106,
      "id": "gradient_circle_1757351094572"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 217.17181705809645,
      "width": 340,
      "height": 24,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.8741388578179987,
      "id": "pattern_rect_1757354821587"
    },
    {
      "type": "triangle",
      "x": 331.5895388224748,
      "y": 498.5895388224748,
      "size": 82.58953882247482,
      "fillStyle": "#d35400",
      "id": "triangle_1757358293086"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 196.16340839425365,
      "height": 94.64194462865652,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 3.4949052070821893,
      "opacity": 0.7033438877871518,
      "id": "curve_1757361921690",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 282.228923386832,
        "centerX": 0.41800404004847264,
        "centerY": 0.41853550838670533
      },
      "shadow": {
        "blur": 17.123707187037162,
        "color": "#d3540040",
        "offsetX": 0.7363040751558714,
        "offsetY": -0.22385460111950195
      }
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 222.04214243395572,
      "height": 62.95815465339294,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 3.980616566555737,
      "opacity": 0.8,
      "id": "curve_1757372715571"
    },
    {
      "type": "circle",
      "x": 531.6427658039235,
      "y": 498.6427658039234,
      "radius": 73.64276580392341,
      "fillStyle": "#f39c12",
      "id": "circle_1757377277861"
    },
    {
      "type": "triangle",
      "x": 665.1151422944652,
      "y": 349.1151422944652,
      "size": 78.11514229446522,
      "fillStyle": "#e67e22",
      "id": "triangle_1757387901100"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 85.50377432929255,
        "centerX": 0.6939668155645269,
        "centerY": 0.4992691396552583
      },
      "shadow": {
        "blur": 15.166838491498677,
        "color": "#e74c3c40",
        "offsetX": -1.1209837287932056,
        "offsetY": 1.8172375871478508
      },
      "opacity": 0.6481237804546504,
      "id": "gradient_circle_1757390761074"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 32,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 79.23253121265438,
        "centerX": 0.34919915175902105,
        "centerY": 0.6552382358242268
      },
      "shadow": {
        "blur": 6.726020956364237,
        "color": "#FF6B3540",
        "offsetX": -0.6662683893439354,
        "offsetY": 4.427503956771675
      },
      "opacity": 0.895175368199385,
      "id": "gradient_circle_1757398058008"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 190.17181705809645,
      "width": 168,
      "height": 78,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 191.74321062113304,
        "centerX": 0.4925993035413276,
        "centerY": 0.6577515169838384
      },
      "shadow": {
        "blur": 7.3600162003134075,
        "color": "#d3540040",
        "offsetX": -3.2090391153126907,
        "offsetY": 3.5617826817964584
      },
      "opacity": 0.7873671198932802,
      "id": "gradient_rect_1757401559279"
    },
    {
      "type": "triangle",
      "x": 700.1584171820961,
      "y": 199.1584171820961,
      "size": 99.15841718209609,
      "fillStyle": "#e67e22",
      "id": "triangle_1757408757568"
    },
    {
      "type": "rectangle",
      "x": 420,
      "y": 64,
      "width": 91.44374162956085,
      "height": 69.61913242983583,
      "fillStyle": "#f39c12",
      "id": "element_1757415910214"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 25.050664582908674px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 119.70144265483216,
        "centerX": 0.4857455714649671,
        "centerY": 0.39936776690159864
      },
      "shadow": {
        "blur": 16.074522653186193,
        "color": "#FF6B3540",
        "offsetX": -4.693964099044782,
        "offsetY": 4.269094875150836
      },
      "opacity": 0.9715123460704671,
      "id": "gradient_text_1757419753864"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 127.17181705809645,
      "width": 104,
      "height": 204,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 106.2378815908136,
        "centerX": 0.4953202370773123,
        "centerY": 0.5793315657014004
      },
      "shadow": {
        "blur": 6.6820058094239565,
        "color": "#FF6B3540",
        "offsetX": -0.7778945453755126,
        "offsetY": -1.8151651268786284
      },
      "opacity": 0.713946350079303,
      "id": "gradient_rect_1757423644146"
    },
    {
      "type": "triangle",
      "x": 731.5058899461327,
      "y": 348.50588994613275,
      "size": 54.50588994613274,
      "fillStyle": "#e67e22",
      "id": "triangle_1757426717796"
    },
    {
      "type": "triangle",
      "x": 665.2277509684782,
      "y": 548.2277509684782,
      "size": 51.227750968478226,
      "fillStyle": "#f1c40f",
      "id": "triangle_1757433979416"
    },
    {
      "type": "text",
      "x": 16,
      "y": 34,
      "text": "Balance",
      "font": "22.678032418532634px Arial",
      "fillStyle": "#d35400",
      "id": "text_1757437509430"
    },
    {
      "type": "text",
      "x": 16,
      "y": 534,
      "text": "Evolve",
      "font": "24.567081340773033px Arial",
      "fillStyle": "#d35400",
      "id": "text_1757444689715"
    },
    {
      "type": "triangle",
      "x": 69.79733964333109,
      "y": 498.7973396433311,
      "size": 69.79733964333109,
      "fillStyle": "#f39c12",
      "id": "triangle_1757448331291"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 20.694461632992727px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 189.0559750226451,
        "centerX": 0.3669690757466443,
        "centerY": 0.6695638776128796
      },
      "shadow": {
        "blur": 19.10084166792885,
        "color": "#d3540040",
        "offsetX": -2.8442833803019196,
        "offsetY": 2.6008165120747133
      },
      "opacity": 0.8731918491499441,
      "id": "gradient_text_1757451907591"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 32.020854140077674px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 307.6280371834689,
        "centerX": 0.5221163337842272,
        "centerY": 0.6726267685396656
      },
      "shadow": {
        "blur": 16.925349243816658,
        "color": "#e74c3c40",
        "offsetX": 0.409806591927242,
        "offsetY": -0.9309874017777631
      },
      "opacity": 0.825490659751696,
      "id": "gradient_text_1757455505385"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 32,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 132.36148246624902,
        "centerX": 0.4391643883798337,
        "centerY": 0.3768033605362925
      },
      "shadow": {
        "blur": 6.831277251232038,
        "color": "#e74c3c40",
        "offsetX": -4.453005639819456,
        "offsetY": -1.6941114986320471
      },
      "opacity": 0.7753341754137121,
      "id": "gradient_circle_1757467986031"
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
        "direction": 201.8968316874687,
        "centerX": 0.6893017747591672,
        "centerY": 0.5712830951744746
      },
      "shadow": {
        "blur": 14.753604439126113,
        "color": "#FF6B3540",
        "offsetX": -3.9858602633579454,
        "offsetY": -2.905359817099149
      },
      "opacity": 0.6913216155219718,
      "id": "gradient_circle_1757471381045"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 9,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.9852453698225956,
      "opacity": 0.7,
      "id": "spiral_1757474001251"
    },
    {
      "type": "rectangle",
      "x": 77,
      "y": 464,
      "width": 109.04931447920396,
      "height": 135.55427743809508,
      "fillStyle": "#f39c12",
      "id": "element_1757477173332"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 63,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.5408737451922638,
      "opacity": 0.7,
      "id": "spiral_1757480715638"
    },
    {
      "type": "rectangle",
      "x": 269,
      "y": 432,
      "width": 124.64552160916293,
      "height": 134.84049276658672,
      "fillStyle": "#d35400",
      "id": "element_1757484453693"
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Create",
      "font": "31.075900529934735px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757487934745"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 120.66290778460892,
        "centerX": 0.5082952248535497,
        "centerY": 0.5637845263489266
      },
      "shadow": {
        "blur": 10.651225395992064,
        "color": "#e74c3c40",
        "offsetX": -0.5227712064979562,
        "offsetY": -3.5901031318544407
      },
      "opacity": 0.7874323907299813,
      "id": "gradient_circle_1757491644506"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 0,
      "width": 340,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "dots",
      "opacity": 0.8424215554830062,
      "id": "pattern_rect_1757495135454"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 27.802691663575008px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 113.37133846239821,
        "centerX": 0.6079459794674968,
        "centerY": 0.6219266585099763
      },
      "shadow": {
        "blur": 6.80405035970569,
        "color": "#FF6B3540",
        "offsetX": 2.061720360173509,
        "offsetY": 0.13689418113753504
      },
      "opacity": 0.8219665806131379,
      "id": "gradient_text_1757502297361"
    },
    {
      "type": "rectangle",
      "x": 486.4375772558714,
      "y": 166.17181705809645,
      "width": 16,
      "height": 126,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 355.2404382508285,
        "centerX": 0.5207537616068778,
        "centerY": 0.4228139995220067
      },
      "shadow": {
        "blur": 13.263128354515752,
        "color": "#FF6B3540",
        "offsetX": 2.56518007352007,
        "offsetY": 0.6377218523717865
      },
      "opacity": 0.8637989945117798,
      "id": "gradient_rect_1757506119587"
    },
    {
      "type": "triangle",
      "x": 531.4650267363415,
      "y": 499.4650267363416,
      "size": 56.4650267363416,
      "fillStyle": "#d35400",
      "id": "triangle_1757509846933"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 171.24005688337033,
      "height": 57.720449880593094,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.0558883246649327,
      "opacity": 0.8,
      "id": "curve_1757516732174"
    },
    {
      "type": "rectangle",
      "x": 169.56242274412858,
      "y": 205.82818294190355,
      "width": 272,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 141.5036897744852,
        "centerX": 0.34768211694711615,
        "centerY": 0.42655955159893966
      },
      "shadow": {
        "blur": 17.94151289375236,
        "color": "#e74c3c40",
        "offsetX": 4.296867111086552,
        "offsetY": 0.608595305634636
      },
      "opacity": 0.7540011751227258,
      "id": "gradient_rect_1757523908123"
    },
    {
      "type": "circle",
      "x": 665.4378508854238,
      "y": 98.43785088542384,
      "radius": 72.43785088542384,
      "fillStyle": "#e74c3c",
      "id": "circle_1757527628299"
    },
    {
      "type": "triangle",
      "x": 706.4386601303855,
      "y": 349.43866013038553,
      "size": 93.43866013038554,
      "fillStyle": "#e67e22",
      "id": "triangle_1757534746377"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 15,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.3836289485202804,
      "opacity": 0.7,
      "id": "spiral_1757538317160"
    },
    {
      "type": "rectangle",
      "x": 482.4375772558714,
      "y": 307.82818294190355,
      "width": 24,
      "height": 126,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 177.83116057658572,
        "centerX": 0.6277781049698945,
        "centerY": 0.39510157470294904
      },
      "shadow": {
        "blur": 19.030794518312412,
        "color": "#e74c3c40",
        "offsetX": -0.08796133988798527,
        "offsetY": -2.360038974447498
      },
      "opacity": 0.8000665456923154,
      "id": "gradient_rect_1757541909717"
    }
  ],
  "generation": 167,
  "lastUpdated": "2025-09-10T22:05:09.717Z",
  "cycleStarted": "2025-09-04T00:19:55.543Z"
};