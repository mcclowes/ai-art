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
      "y": 34,
      "text": "Inspire",
      "font": "22.871070498086993px Arial",
      "fillStyle": "#d35400",
      "id": "text_1758211547392"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
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
      "x": 280,
      "y": 396,
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
      "fillStyle": "#e74c3c",
      "pattern": "stripes",
      "opacity": 0.7336788999118681,
      "id": "pattern_rect_1758297948973"
    },
    {
      "type": "circle",
      "x": 131.08267474599108,
      "y": 199.08267474599108,
      "radius": 35.08267474599107,
      "fillStyle": "#f39c12",
      "id": "circle_1758305226423",
      "shadow": {
        "blur": 15.407010796515857,
        "color": "#f39c1240",
        "offsetX": 0.5376396087260087,
        "offsetY": 2.679409947164464
      }
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
      "fillStyle": "#f1c40f",
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
      "x": 682,
      "y": 384,
      "radius": 32,
      "fillStyle": "#f1c40f",
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
    },
    {
      "type": "triangle",
      "x": 712.9877444587992,
      "y": 248.98774445879914,
      "size": 86.98774445879914,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758366289565"
    },
    {
      "type": "rectangle",
      "x": 689,
      "y": 456,
      "width": 85.58465654734403,
      "height": 86.46111816448669,
      "fillStyle": "#e74c3c",
      "id": "element_1758373695031"
    },
    {
      "type": "triangle",
      "x": 65.85700379556911,
      "y": 48.857003795569106,
      "size": 43.857003795569106,
      "fillStyle": "#e67e22",
      "id": "triangle_1758377088009"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 102,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.7324661811254907,
      "opacity": 0.7,
      "id": "spiral_1758384329721"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 226.3445177626338,
      "height": 74.11566286550864,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 3.844940357005596,
      "opacity": 0.8,
      "id": "curve_1758391567729",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 11.532820475271333,
        "centerX": 0.6566986417974295,
        "centerY": 0.3438236684470066
      }
    },
    {
      "type": "rectangle",
      "x": 81,
      "y": 466,
      "width": 101.28696850862954,
      "height": 66.54760151262542,
      "fillStyle": "#e74c3c",
      "id": "element_1758395070472"
    },
    {
      "type": "circle",
      "x": 82,
      "y": 484,
      "radius": 59.15276098073268,
      "fillStyle": "#e74c3c",
      "id": "circle_1758405887099",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 331.4402216773383,
        "centerX": 0.30896611307388183,
        "centerY": 0.48326032669643804
      },
      "shadow": {
        "blur": 13.12538986293789,
        "color": "#e74c3c40",
        "offsetX": -2.113672043707633,
        "offsetY": 3.353284702607189
      }
    },
    {
      "type": "circle",
      "x": 416,
      "y": 34,
      "radius": 32,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 254.84123222170655,
        "centerX": 0.3600674830419318,
        "centerY": 0.4408547299775387
      },
      "shadow": {
        "blur": 19.794633091651026,
        "color": "#FF6B3540",
        "offsetX": 3.9044371512013516,
        "offsetY": 1.5138944671316068
      },
      "opacity": 0.9677825775610189,
      "id": "gradient_circle_1758409514429"
    },
    {
      "type": "rectangle",
      "x": 298,
      "y": 451,
      "width": 67.63104817062887,
      "height": 95.48378012457596,
      "fillStyle": "#e74c3c",
      "id": "element_1758414178620"
    },
    {
      "type": "triangle",
      "x": 531.4078140547367,
      "y": 98.40781405473673,
      "size": 83.40781405473673,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758418383411",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 230.23673432522472,
        "centerX": 0.36134734674145663,
        "centerY": 0.46397046671108366
      }
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 29.06789845648431px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 277.2821336656168,
        "centerX": 0.3906367209716818,
        "centerY": 0.5268072810054117
      },
      "shadow": {
        "blur": 10.870341316503136,
        "color": "#d3540040",
        "offsetX": -2.435924165685841,
        "offsetY": -3.4156357636064016
      },
      "opacity": 0.9240401498893022,
      "id": "gradient_text_1758424882468"
    },
    {
      "type": "triangle",
      "x": 465.65700705412087,
      "y": 498.65700705412087,
      "size": 86.65700705412087,
      "fillStyle": "#f1c40f",
      "id": "triangle_1758427584990"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 205.10840123404668,
        "centerX": 0.5842733905485777,
        "centerY": 0.6883528166902861
      },
      "shadow": {
        "blur": 5.267631332104539,
        "color": "#e74c3c40",
        "offsetX": -2.0332268257061314,
        "offsetY": 2.789744772176112
      },
      "opacity": 0.858846815152277,
      "id": "gradient_circle_1758431120080"
    },
    {
      "type": "triangle",
      "x": 665.0622750500214,
      "y": 98.06227505002144,
      "size": 90.06227505002144,
      "fillStyle": "#d35400",
      "id": "triangle_1758434819378"
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
        "direction": 328.41434850262345,
        "centerX": 0.3035093079883692,
        "centerY": 0.6554986968988805
      },
      "shadow": {
        "blur": 16.00268307948972,
        "color": "#e74c3c40",
        "offsetX": -4.49241360305308,
        "offsetY": 3.3525399999529704
      },
      "opacity": 0.8858330457960564,
      "id": "gradient_circle_1758438296869"
    },
    {
      "type": "rectangle",
      "x": 691,
      "y": 149,
      "width": 80.49387815784144,
      "height": 99.0423235617865,
      "fillStyle": "#e74c3c",
      "id": "element_1758441978526"
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
        "direction": 100.20771406727224,
        "centerX": 0.4840939180633054,
        "centerY": 0.48023792538553123
      },
      "shadow": {
        "blur": 5.166685015381907,
        "color": "#d3540040",
        "offsetX": 3.5146470762949704,
        "offsetY": -3.5940671299554316
      },
      "opacity": 0.969316248287781,
      "id": "gradient_circle_1758445499882"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 223.80411638764792,
        "centerX": 0.31266893329419465,
        "centerY": 0.5845436157935566
      },
      "shadow": {
        "blur": 7.300905463760946,
        "color": "#FF6B3540",
        "offsetX": -0.14375933884394776,
        "offsetY": -3.947069338150444
      },
      "opacity": 0.9568519835878448,
      "id": "gradient_circle_1758452671801"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 234.82818294190355,
      "width": 130,
      "height": 272,
      "fillStyle": "#e74c3c",
      "pattern": "stripes",
      "opacity": 0.6990559393845068,
      "id": "pattern_rect_1758460084994"
    },
    {
      "type": "circle",
      "x": 731.9902477246842,
      "y": 198.99024772468422,
      "radius": 30.990247724684213,
      "fillStyle": "#e67e22",
      "id": "circle_1758463487211"
    },
    {
      "type": "triangle",
      "x": 665.2074948665431,
      "y": 349.20749486654313,
      "size": 43.20749486654313,
      "fillStyle": "#d35400",
      "id": "triangle_1758467093661"
    },
    {
      "type": "rectangle",
      "x": 685,
      "y": 467,
      "width": 92.73764971063984,
      "height": 63.54459993886486,
      "fillStyle": "#d35400",
      "id": "element_1758470711302",
      "opacity": 0.8685600806728012
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 223.17181705809645,
      "width": 40,
      "height": 12,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 337.3739559939518,
        "centerX": 0.5800960491761089,
        "centerY": 0.30735666009030893
      },
      "shadow": {
        "blur": 15.896064736942456,
        "color": "#e74c3c40",
        "offsetX": 4.611975305336294,
        "offsetY": 4.8491092947290415
      },
      "opacity": 0.7672818255646476,
      "id": "gradient_rect_1758474290323"
    },
    {
      "type": "rectangle",
      "x": 84,
      "y": 10,
      "width": 95.0507049738333,
      "height": 77.22164213823967,
      "fillStyle": "#d35400",
      "id": "element_1758481487086"
    },
    {
      "type": "triangle",
      "x": 95.02033337777986,
      "y": 199.02033337777988,
      "size": 95.02033337777986,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758485133382"
    },
    {
      "type": "triangle",
      "x": 665.2513956279342,
      "y": 248.25139562793427,
      "size": 98.25139562793427,
      "fillStyle": "#e74c3c",
      "id": "triangle_1758492305480"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 108.32282373169745,
        "centerX": 0.3487764070710363,
        "centerY": 0.6125451852038896
      },
      "shadow": {
        "blur": 16.21636046351929,
        "color": "#d3540040",
        "offsetX": -0.648774988687089,
        "offsetY": -2.9695118779932828
      },
      "opacity": 0.87587222681757,
      "id": "gradient_circle_1758495903256"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 65,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.8701195661167116,
      "rotation": 170.76271517275813,
      "opacity": 0.7278845312683352,
      "shadow": {
        "blur": 17.788382244008652,
        "color": "#e67e2240",
        "offsetX": 3.7890996622885886,
        "offsetY": 3.4574590798664957
      },
      "id": "rotated_triangle_1758500582431"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 30.009292230368292px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 204.88396556534738,
        "centerX": 0.5273199286303412,
        "centerY": 0.5660507996625912
      },
      "shadow": {
        "blur": 16.580564370020426,
        "color": "#e74c3c40",
        "offsetX": 1.233906673573026,
        "offsetY": -0.18115624119350748
      },
      "opacity": 0.931207305492787,
      "id": "gradient_text_1758504815455"
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 286.82818294190355,
      "width": 80,
      "height": 168,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.7949177535916763,
      "id": "pattern_rect_1758508461392"
    },
    {
      "type": "rectangle",
      "x": 278,
      "y": 457,
      "width": 106.00872652243197,
      "height": 83.87981150816438,
      "fillStyle": "#e67e22",
      "id": "element_1758514008554"
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 21.323841849230767,
        "centerX": 0.6058817100168886,
        "centerY": 0.49098213739975705
      },
      "shadow": {
        "blur": 8.563490844035288,
        "color": "#FF6B3540",
        "offsetX": -3.3613426280388303,
        "offsetY": -2.7072832753085363
      },
      "opacity": 0.985878081192541,
      "id": "gradient_circle_1758535579399"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 151.8206116312433,
      "height": 92.09320011487773,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 3.574463963695581,
      "opacity": 0.8,
      "id": "curve_1758539104794"
    },
    {
      "type": "triangle",
      "x": 265.99243956372266,
      "y": 498.99243956372266,
      "size": 56.992439563722684,
      "fillStyle": "#f1c40f",
      "id": "triangle_1758546774335"
    },
    {
      "type": "circle",
      "x": 265.64876515087235,
      "y": 65.64876515087235,
      "radius": 65.64876515087235,
      "fillStyle": "#f1c40f",
      "id": "circle_1758564432810"
    }
  ],
  "generation": 114,
  "lastUpdated": "2025-09-22T18:07:12.810Z",
  "cycleStarted": "2025-09-18T01:32:28.775Z"
};