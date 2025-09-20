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
        "direction": 68.7719415254513,
        "centerX": 0.6476768412745333,
        "centerY": 0.34335098077589093
      },
      "opacity": 0.9614538078843304
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
      "x": 684,
      "y": 452,
      "width": 94.9459720149469,
      "height": 93.46209978191105,
      "fillStyle": "#e74c3c",
      "id": "element_1758162615362"
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
        "direction": 347.0155272370751,
        "centerX": 0.5596539624278195,
        "centerY": 0.42770094896197114
      },
      "shadow": {
        "blur": 6.884106712109418,
        "color": "#FF6B3540",
        "offsetX": 4.8628146102696554,
        "offsetY": -4.009261405886864
      },
      "opacity": 0.9080630838939505,
      "id": "gradient_circle_1758162615362"
    },
    {
      "type": "circle",
      "x": 16,
      "y": 534,
      "radius": 55.80154304671804,
      "fillStyle": "#f1c40f",
      "id": "circle_1758165307748",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 82.36086525814625,
        "centerX": 0.657294903404904,
        "centerY": 0.5226294190168613
      }
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 34,
      "size": 90.08464265726971,
      "fillStyle": "#d35400",
      "id": "triangle_1758168392920",
      "opacity": 0.9600828718714329
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.473566876192581,
      "rotation": 255.82291507980898,
      "opacity": 0.8460757479741227,
      "shadow": {
        "blur": 9.954280763060865,
        "color": "#f1c40f40",
        "offsetX": 4.817256720150841,
        "offsetY": -4.5655004458953385
      },
      "id": "rotated_triangle_1758179120403"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 79.8120719339946,
        "centerX": 0.5882681354163262,
        "centerY": 0.5023891928108802
      },
      "shadow": {
        "blur": 12.048606139325495,
        "color": "#e74c3c40",
        "offsetX": 1.5155307902197102,
        "offsetY": 2.7936280938552738
      },
      "opacity": 0.8618908775653823,
      "id": "gradient_circle_1758182811267"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 136,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 191.29589157544112,
        "centerX": 0.4202073425897104,
        "centerY": 0.5813607426279115
      },
      "shadow": {
        "blur": 18.150742225468036,
        "color": "#e74c3c40",
        "offsetX": 3.5002822334540262,
        "offsetY": 2.9965424042384825
      },
      "opacity": 0.7878325188729847,
      "id": "gradient_circle_1758189940818"
    },
    {
      "type": "circle",
      "x": 78.93242179155284,
      "y": 348.9324217915528,
      "radius": 78.93242179155284,
      "fillStyle": "#f39c12",
      "id": "circle_1758193493972",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 225.77920609578211,
        "centerX": 0.5505424404808411,
        "centerY": 0.6906607141375376
      },
      "shadow": {
        "blur": 9.748724356125962,
        "color": "#f39c1240",
        "offsetX": -4.099015252811322,
        "offsetY": 1.1995623665029154
      }
    },
    {
      "type": "text",
      "x": 282,
      "y": 234,
      "text": "Aesthetic",
      "font": "33.62762165895633px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1758201114865"
    },
    {
      "type": "rectangle",
      "x": 301,
      "y": 435,
      "width": 61.10746955601434,
      "height": 127.98923233302676,
      "fillStyle": "#f39c12",
      "id": "element_1758207943182",
      "opacity": 0.9838901657516876
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Inspire",
      "font": "22.871070498086993px Arial",
      "fillStyle": "#d35400",
      "id": "text_1758211547392"
    },
    {
      "type": "text",
      "x": 682,
      "y": 184,
      "text": "TRANSCEND",
      "font": "bold 29.264567873716928px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 266.3338709154326,
        "centerX": 0.609296122205407,
        "centerY": 0.4383816778716254
      },
      "shadow": {
        "blur": 7.852641365942371,
        "color": "#FF6B3540",
        "offsetX": -2.521358321916436,
        "offsetY": -1.2635739870089902
      },
      "opacity": 0.894862511171846,
      "id": "gradient_text_1758222313777"
    },
    {
      "type": "triangle",
      "x": 131.05083453159747,
      "y": 199.05083453159747,
      "size": 53.05083453159748,
      "fillStyle": "#f1c40f",
      "id": "triangle_1758225949516"
    },
    {
      "type": "text",
      "x": 482,
      "y": 234,
      "text": "Evolve",
      "font": "18.258658830027393px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1758229517590"
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Evolve",
      "font": "29.66582407154469px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1758241268446"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 268.82818294190355,
      "width": 104,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 46.07401119942267,
        "centerX": 0.3189007100866448,
        "centerY": 0.4756941014279487
      },
      "shadow": {
        "blur": 9.48011551131072,
        "color": "#d3540040",
        "offsetX": 2.5759541893341398,
        "offsetY": -3.3428422738468466
      },
      "opacity": 0.783396661568084,
      "id": "gradient_rect_1758245570502"
    },
    {
      "type": "rectangle",
      "x": 670,
      "y": 52,
      "width": 122.5807058148824,
      "height": 92.43365086456078,
      "fillStyle": "#e74c3c",
      "id": "element_1758251875658"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#d35400",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.3863037891025676,
      "rotation": 51.1041598139931,
      "opacity": 0.8624980791788818,
      "shadow": {
        "blur": 8.799441928130895,
        "color": "#e74c3c40",
        "offsetX": 3.187533747032772,
        "offsetY": 4.435981962856184
      },
      "id": "rotated_triangle_1758262038380"
    },
    {
      "type": "text",
      "x": 682,
      "y": 334,
      "text": "Create",
      "font": "26.171193157893345px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1758269224078"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 205.17181705809645,
      "width": 440,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 210.75702755249443,
        "centerX": 0.6039621929182295,
        "centerY": 0.5346315267467706
      },
      "shadow": {
        "blur": 10.846407800391937,
        "color": "#e74c3c40",
        "offsetX": 3.4008707240507796,
        "offsetY": 1.309104064924349
      },
      "opacity": 0.9438519472169877,
      "id": "gradient_rect_1758279903843"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 235.77897275123135,
        "centerX": 0.4032960702613459,
        "centerY": 0.4589120626464661
      },
      "shadow": {
        "blur": 5.344980598612535,
        "color": "#e74c3c40",
        "offsetX": -4.029877816740026,
        "offsetY": 1.7203375009669681
      },
      "opacity": 0.8803218855930249,
      "id": "gradient_circle_1758283719349"
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
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 121.77850806079131,
        "centerX": 0.37680272820851773,
        "centerY": 0.3442551366844414
      },
      "shadow": {
        "blur": 10.12110676205289,
        "color": "#FF6B3540",
        "offsetX": -0.8342038022165514,
        "offsetY": 1.5786833579582105
      },
      "opacity": 0.9288583309787952,
      "id": "gradient_circle_1758287483768"
    },
    {
      "type": "triangle",
      "x": 465.9542855455364,
      "y": 98.95428554553637,
      "size": 81.95428554553637,
      "fillStyle": "#e67e22",
      "id": "triangle_1758290725126",
      "shadow": {
        "blur": 5.179397928341711,
        "color": "#e67e2240",
        "offsetX": -0.7666557159381675,
        "offsetY": -2.9117198560994217
      }
    },
    {
      "type": "circle",
      "x": 67.82696719410053,
      "y": 67.82696719410053,
      "radius": 67.82696719410053,
      "fillStyle": "#d35400",
      "id": "circle_1758294324740"
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 177.17181705809645,
      "width": 80,
      "height": 104,
      "fillStyle": "#d35400",
      "pattern": "stripes",
      "opacity": 0.7336788999118681,
      "id": "pattern_rect_1758297948973"
    },
    {
      "type": "circle",
      "x": 131.08267474599108,
      "y": 199.08267474599108,
      "radius": 35.08267474599107,
      "fillStyle": "#d35400",
      "id": "circle_1758305226423"
    },
    {
      "type": "rectangle",
      "x": 20,
      "y": 297,
      "width": 90.33122957048428,
      "height": 104.05312076912126,
      "fillStyle": "#e74c3c",
      "id": "element_1758308691276"
    },
    {
      "type": "triangle",
      "x": 131.472748570476,
      "y": 349.472748570476,
      "size": 96.472748570476,
      "fillStyle": "#f39c12",
      "id": "triangle_1758312343455"
    },
    {
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 0,
      "width": 64,
      "height": 534,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 284.24833832937355,
        "centerX": 0.6782693494565835,
        "centerY": 0.30164900891850993
      },
      "shadow": {
        "blur": 14.944442547951825,
        "color": "#e74c3c40",
        "offsetX": 4.904799857932723,
        "offsetY": -3.5158152047167723
      },
      "opacity": 0.8322256681601667,
      "id": "gradient_rect_1758315899284"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Evolve",
      "font": "25.97011143747307px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1758319511055"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 22.810078768514977px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 249.3549279092077,
        "centerX": 0.487072371670771,
        "centerY": 0.39943232411377644
      },
      "shadow": {
        "blur": 10.43931439153896,
        "color": "#e74c3c40",
        "offsetX": -2.186062133421691,
        "offsetY": 1.5027090285362998
      },
      "opacity": 0.8971498625510052,
      "id": "gradient_text_1758331945833"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 241.2313178965751,
        "centerX": 0.35639209842176706,
        "centerY": 0.3411083023667369
      },
      "shadow": {
        "blur": 15.468635947536072,
        "color": "#FF6B3540",
        "offsetX": -2.352647878560694,
        "offsetY": -0.2539449554703683
      },
      "opacity": 0.9240900020703816,
      "id": "gradient_circle_1758335300688"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 361.82818294190355,
      "width": 712,
      "height": 18,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 333.8529433671267,
        "centerX": 0.6993785187937014,
        "centerY": 0.37123528707672576
      },
      "shadow": {
        "blur": 5.947983428797459,
        "color": "#FF6B3540",
        "offsetX": 0.244358461269365,
        "offsetY": 4.40514135482567
      },
      "opacity": 0.9177705458338608,
      "id": "gradient_rect_1758338005899"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 64.17181705809645,
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
        "direction": 155.2837834898057,
        "centerX": 0.544923164988216,
        "centerY": 0.5547051105052592
      },
      "shadow": {
        "blur": 19.198147898344143,
        "color": "#d3540040",
        "offsetX": 2.391452698119738,
        "offsetY": -4.71303667784502
      },
      "opacity": 0.8442202599870227,
      "id": "gradient_rect_1758341147716"
    },
    {
      "type": "rectangle",
      "x": 298,
      "y": 491,
      "width": 67.0225643757037,
      "height": 108.87019085085231,
      "fillStyle": "#f1c40f",
      "id": "element_1758344710532"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 20,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 213.32449682028613,
        "centerX": 0.3405580528239004,
        "centerY": 0.5315543700868914
      },
      "shadow": {
        "blur": 19.390034323975986,
        "color": "#FF6B3540",
        "offsetX": 4.664964185988438,
        "offsetY": 0.6821949200388904
      },
      "opacity": 0.8180557693506926,
      "id": "gradient_circle_1758348417421"
    },
    {
      "type": "triangle",
      "x": 465.11682959504765,
      "y": 500.11682959504765,
      "size": 99.11682959504766,
      "fillStyle": "#f39c12",
      "id": "triangle_1758351896093"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 210.66866538023817,
      "height": 94.68065496390443,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.350830573335311,
      "opacity": 0.8,
      "id": "curve_1758355599528"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 349.0034614958444,
        "centerX": 0.6503382530518871,
        "centerY": 0.4243950529996309
      },
      "shadow": {
        "blur": 6.948577567818414,
        "color": "#e74c3c40",
        "offsetX": 1.1627876157913297,
        "offsetY": -3.4404687797027367
      },
      "opacity": 0.6183289858655446,
      "id": "gradient_circle_1758359103205"
    },
    {
      "type": "triangle",
      "x": 706.6443501913546,
      "y": 92.64435019135466,
      "size": 92.64435019135466,
      "fillStyle": "#e67e22",
      "id": "triangle_1758362714330"
    }
  ],
  "generation": 58,
  "lastUpdated": "2025-09-20T10:05:14.330Z",
  "cycleStarted": "2025-09-18T01:32:28.775Z"
};