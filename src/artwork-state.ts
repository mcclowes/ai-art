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
      "shadow": {
        "blur": 18.25814362379724,
        "color": "#e67e2240",
        "offsetX": 4.048863125714117,
        "offsetY": 0.015597965196736396
      },
      "opacity": 0.8129711824661335
    },
    {
      "type": "text",
      "x": 616,
      "y": 534,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "circle",
      "x": 65.31337506670452,
      "y": 199.3133750667045,
      "radius": 63.31337506670452,
      "fillStyle": "#f39c12",
      "id": "circle_1754517914171",
      "opacity": 0.829767371114799
    },
    {
      "type": "rectangle",
      "x": 479.4375772558714,
      "y": 209.17181705809645,
      "width": 30,
      "height": 40,
      "fillStyle": "#e74c3c",
      "pattern": "waves",
      "opacity": 0.7991388660352327,
      "id": "pattern_rect_1754517914172",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 42.8660049626431,
        "centerX": 0.3580467777838677,
        "centerY": 0.43538586757523967
      },
      "shadow": {
        "blur": 18.94345156693248,
        "color": "#f39c1240",
        "offsetX": -0.30958843986603135,
        "offsetY": -0.19834883961085836
      }
    },
    {
      "type": "circle",
      "x": 65.6130987885166,
      "y": 348.6130987885166,
      "radius": 56.613098788516595,
      "fillStyle": "#d35400",
      "id": "circle_1754521534434",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 29.83437940322436,
        "centerX": 0.44312776642226226,
        "centerY": 0.5251381812119902
      },
      "shadow": {
        "blur": 15.841211141944672,
        "color": "#d3540040",
        "offsetX": 3.009878315205974,
        "offsetY": -0.42768120290158684
      },
      "opacity": 0.9452052019021356
    },
    {
      "type": "triangle",
      "x": 131.17368139797816,
      "y": 548.1736813979782,
      "size": 40.17368139797815,
      "fillStyle": "#d35400",
      "id": "triangle_1754521534434"
    },
    {
      "type": "triangle",
      "x": 265.0985572941855,
      "y": 98.0985572941855,
      "size": 59.0985572941855,
      "fillStyle": "#e74c3c",
      "id": "triangle_1754526263173",
      "shadow": {
        "blur": 18.37626588144365,
        "color": "#e74c3c40",
        "offsetX": 0.4996449707129269,
        "offsetY": -0.524629233072222
      }
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 325,
      "size": 275,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.4817412195603716,
      "rotation": 210.5978526925387,
      "opacity": 0.998573702756349,
      "shadow": {
        "blur": 5.068454291650987,
        "color": "#f1c40f40",
        "offsetX": -1.8838075541629062,
        "offsetY": -2.13399049033151
      },
      "id": "rotated_triangle_1754526263173"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 25.477252244195405px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 47.8782162445963,
        "centerX": 0.44222961611895817,
        "centerY": 0.5010691154064417
      },
      "shadow": {
        "blur": 17.269552425564896,
        "color": "#FF6B3540",
        "offsetX": -4.060837879012835,
        "offsetY": 1.9237380862539588
      },
      "opacity": 0.8603250239053823,
      "id": "gradient_text_1754530456542"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 245.1848619836109,
      "height": 93.86422081526062,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.7186856887746,
      "opacity": 0.8,
      "id": "curve_1754534773905"
    },
    {
      "type": "circle",
      "x": 682,
      "y": 484,
      "radius": 40.525998116504,
      "fillStyle": "#d35400",
      "id": "circle_1754537705004"
    },
    {
      "type": "triangle",
      "x": 465.53362065480405,
      "y": 98.53362065480403,
      "size": 69.53362065480403,
      "fillStyle": "#d35400",
      "id": "triangle_1754543544809"
    },
    {
      "type": "circle",
      "x": 465.32743300200855,
      "y": 528.3274330020085,
      "radius": 71.32743300200858,
      "fillStyle": "#e67e22",
      "id": "circle_1754550536705"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 35.28882531910085px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 153.65337728630072,
        "centerX": 0.5360753266845268,
        "centerY": 0.4079025148151481
      },
      "shadow": {
        "blur": 11.472666983747972,
        "color": "#d3540040",
        "offsetX": -1.0652013879336253,
        "offsetY": 2.1074935758808433
      },
      "opacity": 0.9280302154512066,
      "id": "gradient_text_1754554057092"
    },
    {
      "type": "circle",
      "x": 282,
      "y": 484,
      "radius": 12,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 354.1561522655864,
        "centerX": 0.5125776018493073,
        "centerY": 0.4208859083310631
      },
      "shadow": {
        "blur": 12.881855842428742,
        "color": "#e74c3c40",
        "offsetX": 0.30542528272119185,
        "offsetY": -0.6925232006959252
      },
      "opacity": 0.606116004752878,
      "id": "gradient_circle_1754557720753"
    },
    {
      "type": "rectangle",
      "x": 600,
      "y": 12,
      "width": 130.70054325034283,
      "height": 74.82990901185799,
      "fillStyle": "#f1c40f",
      "id": "element_1754561153448"
    },
    {
      "type": "circle",
      "x": 731.433142848765,
      "y": 398.433142848765,
      "radius": 52.433142848765016,
      "fillStyle": "#e67e22",
      "id": "circle_1754572694530"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 352.27387926626756,
        "centerX": 0.5456482461092043,
        "centerY": 0.6958535959813796
      },
      "shadow": {
        "blur": 16.58171173494739,
        "color": "#d3540040",
        "offsetX": 0.24110644528059844,
        "offsetY": -1.4250587299143636
      },
      "opacity": 0.7646338799890682,
      "id": "gradient_circle_1754575674703"
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
        "direction": 322.4574550706169,
        "centerX": 0.3222055651845312,
        "centerY": 0.5337743041850421
      },
      "shadow": {
        "blur": 17.14093386630764,
        "color": "#FF6B3540",
        "offsetX": -2.384599333790973,
        "offsetY": -4.268712254851059
      },
      "opacity": 0.7688202970249884,
      "id": "gradient_circle_1754582789264"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 170,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.662484445699282,
      "rotation": 105.42432273034925,
      "opacity": 0.9461766051356106,
      "shadow": {
        "blur": 19.094690813756525,
        "color": "#d3540040",
        "offsetX": 4.103562587765143,
        "offsetY": -2.197904148008334
      },
      "id": "rotated_triangle_1754586430876"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "TRANSCEND",
      "font": "bold 33.107739200935704px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 288.6975987328625,
        "centerX": 0.39749889764046176,
        "centerY": 0.6628726532802964
      },
      "shadow": {
        "blur": 6.693886146202167,
        "color": "#e74c3c40",
        "offsetX": 3.2830859760326465,
        "offsetY": -0.18972670775348366
      },
      "opacity": 0.8762526466229974,
      "id": "gradient_text_1754590066358"
    },
    {
      "type": "triangle",
      "x": 465.9406717506856,
      "y": 398.9406717506856,
      "size": 87.9406717506856,
      "fillStyle": "#f1c40f",
      "id": "triangle_1754597164030"
    },
    {
      "type": "circle",
      "x": 82,
      "y": 334,
      "radius": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 83.06311079568826,
        "centerX": 0.6205836940435616,
        "centerY": 0.49769117994619877
      },
      "shadow": {
        "blur": 6.264510719844316,
        "color": "#FF6B3540",
        "offsetX": -2.795657722757068,
        "offsetY": 2.4047309926646836
      },
      "opacity": 0.9660055845742065,
      "id": "gradient_circle_1754604326314"
    },
    {
      "type": "rectangle",
      "x": 9,
      "y": 36,
      "width": 112.76669013578883,
      "height": 124.61320933786803,
      "fillStyle": "#e67e22",
      "id": "element_1754607938837"
    },
    {
      "type": "rectangle",
      "x": 23,
      "y": 141,
      "width": 85.62554647638035,
      "height": 115.29334547381742,
      "fillStyle": "#f39c12",
      "id": "element_1754612648473",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 40.324128051902264,
        "centerX": 0.44073215457930415,
        "centerY": 0.6765930041158607
      }
    },
    {
      "type": "rectangle",
      "x": 31,
      "y": 186,
      "width": 68.81122951307924,
      "height": 125.0974336239873,
      "fillStyle": "#e67e22",
      "id": "element_1754616857363"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 333,
      "width": 130.23845092560856,
      "height": 130.37803976672961,
      "fillStyle": "#d35400",
      "id": "element_1754621152372"
    },
    {
      "type": "circle",
      "x": 131.84852804348415,
      "y": 548.8485280434842,
      "radius": 43.848528043484144,
      "fillStyle": "#d35400",
      "id": "circle_1754624078227"
    },
    {
      "type": "rectangle",
      "x": 278,
      "y": 59,
      "width": 107.68239824657695,
      "height": 78.19091756945339,
      "fillStyle": "#f1c40f",
      "id": "element_1754626885917",
      "shadow": {
        "blur": 13.596163627268155,
        "color": "#f1c40f40",
        "offsetX": 2.908997250384169,
        "offsetY": -4.636892892761666
      }
    },
    {
      "type": "rectangle",
      "x": 691,
      "y": 61,
      "width": 81.10222849926512,
      "height": 74.58682079487485,
      "fillStyle": "#f39c12",
      "id": "element_1754629924077",
      "opacity": 0.8320967181159844
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 40.595969974533816,
        "centerX": 0.5063023056779111,
        "centerY": 0.6547076455941925
      },
      "shadow": {
        "blur": 8.373236124881434,
        "color": "#d3540040",
        "offsetX": 1.566680011049037,
        "offsetY": 0.5729497928435396
      },
      "opacity": 0.7560801158351727,
      "id": "gradient_circle_1754640456239"
    },
    {
      "type": "circle",
      "x": 465.59393693555387,
      "y": 59.59393693555387,
      "radius": 59.59393693555387,
      "fillStyle": "#e67e22",
      "id": "circle_1754644141674"
    },
    {
      "type": "rectangle",
      "x": 67,
      "y": 203,
      "width": 129.12470065309654,
      "height": 91.11742818778866,
      "fillStyle": "#e67e22",
      "id": "element_1754647546816"
    },
    {
      "type": "rectangle",
      "x": 200.56242274412858,
      "y": 0,
      "width": 210,
      "height": 712,
      "fillStyle": "#d35400",
      "pattern": "dots",
      "opacity": 0.7302331061910723,
      "id": "pattern_rect_1754651133708"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 47.3507830603813,
        "centerX": 0.3962222197595248,
        "centerY": 0.3296547917214981
      },
      "shadow": {
        "blur": 5.689344066244097,
        "color": "#FF6B3540",
        "offsetX": -2.1532007220654914,
        "offsetY": 1.5019224831823852
      },
      "opacity": 0.7094065503387678,
      "id": "gradient_circle_1754654959544"
    },
    {
      "type": "triangle",
      "x": 531.359069841809,
      "y": 510.35906984180895,
      "size": 89.35906984180897,
      "fillStyle": "#e74c3c",
      "id": "triangle_1754662006470"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 170.05520683449254,
      "height": 69.57402067519723,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 3.5370712861544042,
      "opacity": 0.8,
      "id": "curve_1754665547006"
    },
    {
      "type": "triangle",
      "x": 282,
      "y": 534,
      "size": 94.40301084861159,
      "fillStyle": "#f39c12",
      "id": "triangle_1754669117079"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 182.83151110504053,
      "height": 51.54094649508425,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 4.860084768212181,
      "opacity": 0.8,
      "id": "curve_1754672700227"
    },
    {
      "type": "rectangle",
      "x": 200.56242274412858,
      "y": 217.17181705809645,
      "width": 210,
      "height": 24,
      "fillStyle": "#f39c12",
      "pattern": "waves",
      "opacity": 0.6243563362299864,
      "id": "pattern_rect_1754676381965"
    },
    {
      "type": "circle",
      "x": 731.0236988980446,
      "y": 199.02369889804461,
      "radius": 41.02369889804462,
      "fillStyle": "#d35400",
      "id": "circle_1754679885966"
    },
    {
      "type": "text",
      "x": 682,
      "y": 334,
      "text": "Balance",
      "font": "21.255155710579416px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1754683550069"
    },
    {
      "type": "triangle",
      "x": 416,
      "y": 84,
      "size": 275,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.4585092627503142,
      "rotation": 172.40475949171844,
      "opacity": 0.9426903686291309,
      "shadow": {
        "blur": 15.648133756364308,
        "color": "#f39c1240",
        "offsetX": 2.8641470705162675,
        "offsetY": -3.547380744570492
      },
      "id": "rotated_triangle_1754690717312"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 170,
      "fillStyle": "#f39c12",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.8976556633156556,
      "rotation": 219.87883731410926,
      "opacity": 0.7287967310543949,
      "shadow": {
        "blur": 15.492549928782328,
        "color": "#e67e2240",
        "offsetX": -3.885276657361132,
        "offsetY": 1.5074551526914242
      },
      "id": "rotated_triangle_1754694305270"
    },
    {
      "type": "rectangle",
      "x": 293.5624227441286,
      "y": 66,
      "width": 24,
      "height": 534,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 212.1089923199432,
        "centerX": 0.32897553118787914,
        "centerY": 0.35924771459939897
      },
      "shadow": {
        "blur": 13.254084706389014,
        "color": "#FF6B3540",
        "offsetX": 2.9999332408175583,
        "offsetY": 1.204410636707978
      },
      "opacity": 0.836174755659846,
      "id": "gradient_rect_1754706999777"
    },
    {
      "type": "rectangle",
      "x": 667,
      "y": 431,
      "width": 129.03490618854383,
      "height": 135.99793698301718,
      "fillStyle": "#e67e22",
      "id": "element_1754710145256",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 25.716897343102907,
        "centerX": 0.34073116417690824,
        "centerY": 0.34007335044252784
      },
      "shadow": {
        "blur": 14.822625611467174,
        "color": "#e67e2240",
        "offsetX": -3.735667042115949,
        "offsetY": 4.681422040561314
      }
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 190.17181705809645,
      "width": 712,
      "height": 78,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 142.65849464663594,
        "centerX": 0.45840505367265294,
        "centerY": 0.6957183356056925
      },
      "shadow": {
        "blur": 8.421566427736991,
        "color": "#e74c3c40",
        "offsetX": 0.17506869212010834,
        "offsetY": -1.2612952214113338
      },
      "opacity": 0.986505884635108,
      "id": "gradient_rect_1754712684731"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 145.09483890439614,
        "centerX": 0.5207159398561323,
        "centerY": 0.4606419825230116
      },
      "shadow": {
        "blur": 5.437623725464715,
        "color": "#d3540040",
        "offsetX": -0.9688818150981104,
        "offsetY": 2.983949986118737
      },
      "opacity": 0.8430745692463707,
      "id": "gradient_circle_1754723106791"
    },
    {
      "type": "circle",
      "x": 722.8445412594939,
      "y": 198.8445412594939,
      "radius": 76.8445412594939,
      "fillStyle": "#d35400",
      "id": "circle_1754733897894",
      "shadow": {
        "blur": 11.094527076850024,
        "color": "#d3540040",
        "offsetX": -1.7363382055929,
        "offsetY": -2.2282987950281163
      },
      "opacity": 0.9826831586383212
    },
    {
      "type": "rectangle",
      "x": 454.4375772558714,
      "y": 350.82818294190355,
      "width": 80,
      "height": 40,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.6166071079868447,
      "id": "pattern_rect_1754741278498"
    },
    {
      "type": "rectangle",
      "x": 2,
      "y": 347,
      "width": 126.01598299229397,
      "height": 103.71257020830706,
      "fillStyle": "#e74c3c",
      "id": "element_1754748287098"
    },
    {
      "type": "rectangle",
      "x": 358.4375772558714,
      "y": 214.17181705809645,
      "width": 272,
      "height": 30,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 242.89687047239437,
        "centerX": 0.31509150360574567,
        "centerY": 0.6756958166841378
      },
      "shadow": {
        "blur": 7.706007081696634,
        "color": "#e74c3c40",
        "offsetX": 4.765334313902827,
        "offsetY": 0.2501062383784758
      },
      "opacity": 0.7534484977862568,
      "id": "gradient_rect_1754751888223"
    },
    {
      "type": "rectangle",
      "x": 97,
      "y": 515,
      "width": 68.74462414426688,
      "height": 67.48989444015159,
      "fillStyle": "#f39c12",
      "id": "element_1754755517789"
    },
    {
      "type": "circle",
      "x": 331.2275332498309,
      "y": 499.2275332498309,
      "radius": 32.227533249830884,
      "fillStyle": "#d35400",
      "id": "circle_1754759052930"
    },
    {
      "type": "text",
      "x": 616,
      "y": 484,
      "text": "Inspire",
      "font": "29.662333602208218px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1754762797934"
    },
    {
      "type": "circle",
      "x": 531.2007177540384,
      "y": 548.2007177540384,
      "radius": 46.20071775403841,
      "fillStyle": "#d35400",
      "id": "circle_1754769929363"
    },
    {
      "type": "rectangle",
      "x": 621,
      "y": 10,
      "width": 88.13792507305328,
      "height": 78.58039132084242,
      "fillStyle": "#f39c12",
      "id": "element_1754773475088"
    },
    {
      "type": "triangle",
      "x": 665.7925381963441,
      "y": 198.79253819634414,
      "size": 92.79253819634413,
      "fillStyle": "#f39c12",
      "id": "triangle_1754780699192"
    },
    {
      "type": "rectangle",
      "x": 295.5624227441286,
      "y": 221.17181705809645,
      "width": 20,
      "height": 16,
      "fillStyle": "#e67e22",
      "pattern": "dots",
      "opacity": 0.7801476023503005,
      "id": "pattern_rect_1754785556259"
    },
    {
      "type": "rectangle",
      "x": 358.4375772558714,
      "y": 166.17181705809645,
      "width": 272,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 84.25739977142472,
        "centerX": 0.6057830155055723,
        "centerY": 0.48946502229111155
      },
      "shadow": {
        "blur": 14.328188563858795,
        "color": "#d3540040",
        "offsetX": 1.4854887149288354,
        "offsetY": -4.434431533761081
      },
      "opacity": 0.9665849790453526,
      "id": "gradient_rect_1754789642098"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "EVOLVE",
      "font": "bold 20.5749044839548px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 246.62327664994305,
        "centerX": 0.49044004784058703,
        "centerY": 0.32271508426065293
      },
      "shadow": {
        "blur": 13.53227121030101,
        "color": "#d3540040",
        "offsetX": 0.32229195974309555,
        "offsetY": 3.53501053354454
      },
      "opacity": 0.823812539528413,
      "id": "gradient_text_1754802479306"
    },
    {
      "type": "rectangle",
      "x": 219.43757725587142,
      "y": 150.82818294190355,
      "width": 550,
      "height": 440,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.8449393244950719,
      "id": "pattern_rect_1754806022486"
    },
    {
      "type": "rectangle",
      "x": 63,
      "y": 11,
      "width": 136.36560015010124,
      "height": 75.9788098053091,
      "fillStyle": "#e74c3c",
      "id": "element_1754809511394"
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
        "direction": 161.89770830922026,
        "centerX": 0.613216416247744,
        "centerY": 0.6174824447181773
      },
      "shadow": {
        "blur": 7.80273170604362,
        "color": "#e74c3c40",
        "offsetX": 1.0546797425650016,
        "offsetY": 0.9185220425088625
      },
      "opacity": 0.7911968929939769,
      "id": "gradient_circle_1754813186576"
    },
    {
      "type": "triangle",
      "x": 531.2989166143326,
      "y": 199.29891661433257,
      "size": 90.29891661433257,
      "fillStyle": "#f39c12",
      "id": "triangle_1754823858638"
    },
    {
      "type": "rectangle",
      "x": 96,
      "y": 298,
      "width": 70.53981521424586,
      "height": 101.83488634503482,
      "fillStyle": "#e74c3c",
      "id": "element_1754827686370"
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
        "direction": 236.7108171359041,
        "centerX": 0.6319184834583573,
        "centerY": 0.3409029673929168
      },
      "shadow": {
        "blur": 9.301708092664658,
        "color": "#FF6B3540",
        "offsetX": 4.463011776226381,
        "offsetY": 2.400325566270844
      },
      "opacity": 0.6517010893939134,
      "id": "gradient_circle_1754831566567"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.5986303844437963,
      "opacity": 0.7,
      "id": "spiral_1754845458607"
    },
    {
      "type": "rectangle",
      "x": 99,
      "y": 507,
      "width": 65.42460108818472,
      "height": 82.73896225540126,
      "fillStyle": "#e74c3c",
      "id": "element_1754849184241"
    },
    {
      "type": "rectangle",
      "x": 246,
      "y": 66,
      "width": 440,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 237.39803446812587,
        "centerX": 0.6066773022751086,
        "centerY": 0.4117280563509104
      },
      "shadow": {
        "blur": 16.609305631593127,
        "color": "#d3540040",
        "offsetX": 4.953762886305579,
        "offsetY": -4.172997261140779
      },
      "opacity": 0.7417971414029667,
      "id": "gradient_rect_1754852648885"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 25,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.1829818765552345,
      "rotation": 82.57398420461055,
      "opacity": 0.9044684951650629,
      "shadow": {
        "blur": 10.215860850479386,
        "color": "#f1c40f40",
        "offsetX": 2.9928234028032286,
        "offsetY": 1.6063430743573832
      },
      "id": "rotated_triangle_1754856325213"
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
        "direction": 252.88886865506097,
        "centerX": 0.3785006454828744,
        "centerY": 0.6099803580989109
      },
      "shadow": {
        "blur": 13.24494684749167,
        "color": "#FF6B3540",
        "offsetX": -4.43471399752328,
        "offsetY": -2.8236774100345174
      },
      "opacity": 0.812369811189002,
      "id": "gradient_circle_1754863502102"
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
        "direction": 144.8747546285675,
        "centerX": 0.48189886935455994,
        "centerY": 0.5628164163530236
      },
      "shadow": {
        "blur": 17.300460434321273,
        "color": "#d3540040",
        "offsetX": -1.3265679412080567,
        "offsetY": 0.4484129166897137
      },
      "opacity": 0.8442997591882553,
      "id": "gradient_circle_1754867097947"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 33.2636839232035px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 220.24962636993132,
        "centerX": 0.4470494077659743,
        "centerY": 0.3490290578244677
      },
      "shadow": {
        "blur": 8.265740508806463,
        "color": "#e74c3c40",
        "offsetX": -4.944298073209028,
        "offsetY": -4.948298672607072
      },
      "opacity": 0.8527152362535655,
      "id": "gradient_text_1754871898365"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 64.17181705809645,
      "width": 168,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 131.40707873679096,
        "centerX": 0.5660054672207404,
        "centerY": 0.5829920892273982
      },
      "shadow": {
        "blur": 16.54805753059152,
        "color": "#e74c3c40",
        "offsetX": 3.193671264623692,
        "offsetY": -1.462521188168311
      },
      "opacity": 0.9763836280327836,
      "id": "gradient_rect_1754876076506"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 268.82818294190355,
      "width": 104,
      "height": 204,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 267.79752949180516,
        "centerX": 0.6479709672998661,
        "centerY": 0.30933443999817817
      },
      "shadow": {
        "blur": 19.093563862619373,
        "color": "#e74c3c40",
        "offsetX": 2.9028704724413767,
        "offsetY": -3.5772763251575213
      },
      "opacity": 0.7883661501146664,
      "id": "gradient_rect_1754880356346"
    },
    {
      "type": "circle",
      "x": 331.2454023879143,
      "y": 499.2454023879143,
      "radius": 79.24540238791428,
      "fillStyle": "#e67e22",
      "id": "circle_1754883285202"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 66,
      "width": 440,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 356.1543819468939,
        "centerX": 0.5411810274318015,
        "centerY": 0.5938852241371032
      },
      "shadow": {
        "blur": 12.707411016648024,
        "color": "#d3540040",
        "offsetX": 1.3511223953308722,
        "offsetY": 0.17762618867902802
      },
      "opacity": 0.8679413555193136,
      "id": "gradient_rect_1754886056759"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 105,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.0939097004483322,
      "rotation": 143.3014216999409,
      "opacity": 0.7228263489800347,
      "shadow": {
        "blur": 8.072011342319858,
        "color": "#e67e2240",
        "offsetX": 4.380854178196028,
        "offsetY": -1.4037482796351242
      },
      "id": "rotated_triangle_1754892517233"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 221.9728464008605,
      "height": 68.47912948222567,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 3.2316437583932913,
      "opacity": 0.8,
      "id": "curve_1754906764714"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 37.46757062444087px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 356.4762500581488,
        "centerX": 0.35044513310528325,
        "centerY": 0.42624624035828135
      },
      "shadow": {
        "blur": 16.802005278421532,
        "color": "#e74c3c40",
        "offsetX": -0.7008517176796136,
        "offsetY": -1.2372353337071673
      },
      "opacity": 0.9521727037247598,
      "id": "gradient_text_1754910330089"
    },
    {
      "type": "circle",
      "x": 531.0746471769918,
      "y": 499.0746471769918,
      "radius": 39.074647176991775,
      "fillStyle": "#d35400",
      "id": "circle_1754914165427"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 21.927168593948977px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 202.35192337645992,
        "centerX": 0.380966181857452,
        "centerY": 0.3274298514662906
      },
      "shadow": {
        "blur": 6.421919870927416,
        "color": "#FF6B3540",
        "offsetX": -3.1142196359576446,
        "offsetY": -2.710820349882812
      },
      "opacity": 0.8796232088665703,
      "id": "gradient_text_1754918237770"
    }
  ],
  "generation": 113,
  "lastUpdated": "2025-08-11T13:17:17.770Z",
  "cycleStarted": "2025-08-06T21:05:04.268Z"
};