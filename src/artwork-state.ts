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
      "fillStyle": "#f1c40f",
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
      "fillStyle": "#e74c3c",
      "id": "element_1761228353730"
    },
    {
      "type": "triangle",
      "x": 616,
      "y": 184,
      "size": 92.23390417871809,
      "fillStyle": "#d35400",
      "id": "triangle_1761231948076",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 283.47244398847533,
        "centerX": 0.5187885408709894,
        "centerY": 0.44942493926732596
      },
      "opacity": 0.9478265089677171
    },
    {
      "type": "curve",
      "x": 611,
      "y": 500,
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
      "x": 501,
      "y": 455,
      "width": 60.94202307098526,
      "height": 88.81360071080087,
      "fillStyle": "#d35400",
      "id": "element_1761265178758",
      "shadow": {
        "blur": 16.983787022514353,
        "color": "#d3540040",
        "offsetX": 3.4837864617799035,
        "offsetY": -3.4740159533592663
      },
      "opacity": 0.7104548086294343
    },
    {
      "type": "rectangle",
      "x": 73,
      "y": 63,
      "width": 116.15470818053096,
      "height": 70.58800508057814,
      "fillStyle": "#f39c12",
      "id": "element_1761273100326",
      "opacity": 0.8667311606012861
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Harmony",
      "font": "24.872785880312588px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1761275889996"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 222.26838590531165,
        "centerX": 0.5419174215525426,
        "centerY": 0.39668947332311755
      },
      "shadow": {
        "blur": 5.096964807608165,
        "color": "#e74c3c40",
        "offsetX": 4.273929377954937,
        "offsetY": -3.1784430032793987
      },
      "opacity": 0.9456147728442202,
      "id": "gradient_circle_1761278786988"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 320.82818294190355,
      "width": 197.8978445236454,
      "height": 96.17546533637247,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 3.962413618577008,
      "opacity": 0.8,
      "id": "curve_1761289530639",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 270.41573391314904,
        "centerX": 0.5065346743799095,
        "centerY": 0.40361051674309634
      }
    },
    {
      "type": "circle",
      "x": 131.17617102120477,
      "y": 548.1761710212047,
      "radius": 32.17617102120475,
      "fillStyle": "#e74c3c",
      "id": "circle_1761293233800"
    },
    {
      "type": "triangle",
      "x": 265.25989391363333,
      "y": 93.25989391363332,
      "size": 93.25989391363332,
      "fillStyle": "#f39c12",
      "id": "triangle_1761296761441"
    },
    {
      "type": "circle",
      "x": 465.8654562920142,
      "y": 519.8654562920142,
      "radius": 79.86545629201416,
      "fillStyle": "#f39c12",
      "id": "circle_1761307753976"
    },
    {
      "type": "circle",
      "x": 531.4199699155799,
      "y": 98.41996991557997,
      "radius": 50.41996991557997,
      "fillStyle": "#e67e22",
      "id": "circle_1761318340302"
    },
    {
      "type": "rectangle",
      "x": 219.43757725587142,
      "y": 177.17181705809645,
      "width": 550,
      "height": 104,
      "fillStyle": "#f1c40f",
      "pattern": "dots",
      "opacity": 0.7713039267782685,
      "id": "pattern_rect_1761321965060"
    },
    {
      "type": "rectangle",
      "x": 470,
      "y": 300,
      "width": 122.82380065127424,
      "height": 98.4024031460419,
      "fillStyle": "#e67e22",
      "id": "element_1761325529390"
    },
    {
      "type": "rectangle",
      "x": 487,
      "y": 438,
      "width": 88.6889120968445,
      "height": 122.68242833851681,
      "fillStyle": "#e74c3c",
      "id": "element_1761329241961"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 362.82818294190355,
      "width": 340,
      "height": 16,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.895756433762253,
      "id": "pattern_rect_1761332684017"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 24,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.2232331014444622,
      "opacity": 0.8830032771569312,
      "id": "spiral_1761336343204",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 105.7836495544406,
        "centerX": 0.4996712459240902,
        "centerY": 0.41256229821110235
      },
      "shadow": {
        "blur": 8.482510292695945,
        "color": "#e67e2240",
        "offsetX": 0.8340015472992945,
        "offsetY": 1.0463883960469573
      }
    },
    {
      "type": "triangle",
      "x": 665.053381051611,
      "y": 541.053381051611,
      "size": 58.05338105161103,
      "fillStyle": "#f1c40f",
      "id": "triangle_1761343530131"
    },
    {
      "type": "circle",
      "x": 665.4710366339631,
      "y": 98.47103663396308,
      "radius": 40.47103663396308,
      "fillStyle": "#d35400",
      "id": "circle_1761347117365",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 188.45932533744676,
        "centerX": 0.5618210700476706,
        "centerY": 0.3764150652022706
      },
      "shadow": {
        "blur": 5.752582980055207,
        "color": "#d3540040",
        "offsetX": 1.5072184721227977,
        "offsetY": 4.725566295465775
      },
      "opacity": 0.772218055274926
    },
    {
      "type": "triangle",
      "x": 709.0253903297574,
      "y": 248.02539032975747,
      "size": 90.02539032975747,
      "fillStyle": "#d35400",
      "id": "triangle_1761351669606",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 8.491954823112007,
        "centerX": 0.5495196228588054,
        "centerY": 0.3495696317415982
      },
      "shadow": {
        "blur": 9.894428808155784,
        "color": "#d3540040",
        "offsetX": 2.156637099435555,
        "offsetY": -2.631566710259068
      }
    },
    {
      "type": "circle",
      "x": 731.4110009988874,
      "y": 398.41100099888746,
      "radius": 45.41100099888744,
      "fillStyle": "#d35400",
      "id": "circle_1761355965868"
    },
    {
      "type": "rectangle",
      "x": 265.5624227441286,
      "y": 0,
      "width": 80,
      "height": 712,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.7943392462663432,
      "id": "pattern_rect_1761362371159",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 54.40574043085125,
        "centerX": 0.6728613276505843,
        "centerY": 0.37167257774811774
      },
      "shadow": {
        "blur": 5.1586899983363494,
        "color": "#f39c1240",
        "offsetX": -0.4976978920127273,
        "offsetY": -3.862958639282077
      }
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 15,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.6127721922793152,
      "rotation": 109.83804964910418,
      "opacity": 0.8583615730523757,
      "shadow": {
        "blur": 11.475779989756582,
        "color": "#e74c3c40",
        "offsetX": -0.04347015512553121,
        "offsetY": 4.371317622750844
      },
      "id": "rotated_triangle_1761368711925"
    },
    {
      "type": "rectangle",
      "x": 608,
      "y": 313,
      "width": 114.64195400996371,
      "height": 71.53399353643383,
      "fillStyle": "#e74c3c",
      "id": "element_1761372401736"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 214.17181705809645,
      "width": 168,
      "height": 30,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 157.76771496330542,
        "centerX": 0.585666526821675,
        "centerY": 0.6770496948946625
      },
      "shadow": {
        "blur": 16.919542939463245,
        "color": "#d3540040",
        "offsetX": -3.298331416689959,
        "offsetY": -2.3109428390631592
      },
      "opacity": 0.7332579773594664,
      "id": "gradient_rect_1761375916509"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 0,
      "width": 132.28441752747545,
      "height": 129.8657549844387,
      "fillStyle": "#e67e22",
      "id": "element_1761379583201"
    },
    {
      "type": "circle",
      "x": 282,
      "y": 84,
      "radius": 39.6426904812327,
      "fillStyle": "#f39c12",
      "id": "circle_1761386708854"
    },
    {
      "type": "triangle",
      "x": 216,
      "y": 534,
      "size": 105,
      "fillStyle": "#d35400",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.3920927464864548,
      "rotation": 72.09355391469319,
      "opacity": 0.7908515799253834,
      "shadow": {
        "blur": 19.51713359683295,
        "color": "#f1c40f40",
        "offsetX": -4.616622088572346,
        "offsetY": 0.12427984381869095
      },
      "id": "rotated_triangle_1761394082929"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Balance",
      "font": "23.45536135489437px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1761401082770"
    },
    {
      "type": "text",
      "x": 16,
      "y": 534,
      "text": "Inspire",
      "font": "25.78783890196922px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1761408313970"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 212.93329759988748,
      "height": 92.29130532782841,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 3.554442759435454,
      "opacity": 0.8072829981919831,
      "id": "curve_1761411891260",
      "shadow": {
        "blur": 8.266336615436485,
        "color": "#d3540040",
        "offsetX": -4.957156245089076,
        "offsetY": 0.6130417859761224
      }
    },
    {
      "type": "rectangle",
      "x": 264,
      "y": 487,
      "width": 135.0684330107184,
      "height": 112.2004818440422,
      "fillStyle": "#f39c12",
      "id": "element_1761415592364"
    },
    {
      "type": "triangle",
      "x": 531.3135733403498,
      "y": 98.31357334034975,
      "size": 95.31357334034975,
      "fillStyle": "#f39c12",
      "id": "triangle_1761419087098"
    },
    {
      "type": "circle",
      "x": 444,
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
        "direction": 88.12543217175057,
        "centerX": 0.555729636829595,
        "centerY": 0.6597112885147651
      },
      "shadow": {
        "blur": 12.081202100591153,
        "color": "#d3540040",
        "offsetX": -0.51498660705745,
        "offsetY": 1.103530629968188
      },
      "opacity": 0.6294859879289515,
      "id": "gradient_circle_1761422723432"
    },
    {
      "type": "rectangle",
      "x": 415,
      "y": 500,
      "width": 101.55113505055803,
      "height": 97.44621838879354,
      "fillStyle": "#e67e22",
      "id": "element_1761426294150",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 244.17678538887208,
        "centerX": 0.37943675870828153,
        "centerY": 0.32471940827646584
      },
      "shadow": {
        "blur": 7.701970795615911,
        "color": "#e67e2240",
        "offsetX": -4.995891333310447,
        "offsetY": 0.863045119328973
      },
      "opacity": 0.9022176348528431
    },
    {
      "type": "triangle",
      "x": 665.3095980824711,
      "y": 98.3095980824711,
      "size": 63.309598082471105,
      "fillStyle": "#f1c40f",
      "id": "triangle_1761433495946",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 61.11109297766808,
        "centerX": 0.4503977759266594,
        "centerY": 0.3838658568634565
      },
      "shadow": {
        "blur": 5.276346115826462,
        "color": "#f1c40f40",
        "offsetX": -2.473086678031222,
        "offsetY": 2.34935995256585
      }
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "EMERGENCE",
      "font": "bold 31.258693498011194px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 262.9503745379991,
        "centerX": 0.5991514431098643,
        "centerY": 0.3053894532810764
      },
      "shadow": {
        "blur": 12.374731464235552,
        "color": "#FF6B3540",
        "offsetX": 2.3601731786798474,
        "offsetY": 4.248771879132438
      },
      "opacity": 0.8048069080834142,
      "id": "gradient_text_1761442391024"
    },
    {
      "type": "triangle",
      "x": 731.441034206211,
      "y": 349.44103420621104,
      "size": 63.44103420621107,
      "fillStyle": "#e67e22",
      "id": "triangle_1761458808866"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 234.82818294190355,
      "width": 890,
      "height": 272,
      "fillStyle": "#d35400",
      "pattern": "waves",
      "opacity": 0.8831471035497045,
      "id": "pattern_rect_1761469517689"
    },
    {
      "type": "rectangle",
      "x": 616,
      "y": 452,
      "width": 98.65595492911112,
      "height": 94.80582531073503,
      "fillStyle": "#f39c12",
      "id": "element_1761473113512"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 6,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.0166432915012233,
      "opacity": 0.7,
      "id": "spiral_1761476692813"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 0,
      "width": 131.12416094969404,
      "height": 107.40759060623009,
      "fillStyle": "#e74c3c",
      "id": "element_1761480494054"
    },
    {
      "type": "triangle",
      "x": 90.92291632706319,
      "y": 348.9229163270632,
      "size": 90.92291632706319,
      "fillStyle": "#e74c3c",
      "id": "triangle_1761484175788"
    },
    {
      "type": "text",
      "x": 82,
      "y": 534,
      "text": "Create",
      "font": "18.575880038930922px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1761487483415"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 241.01160528855644,
      "height": 89.79563835570332,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.0245794520886466,
      "opacity": 0.8,
      "id": "curve_1761494722051"
    },
    {
      "type": "rectangle",
      "x": 482.4375772558714,
      "y": 346.82818294190355,
      "width": 24,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 273.8515530786825,
        "centerX": 0.6563667209352811,
        "centerY": 0.3542756088213981
      },
      "shadow": {
        "blur": 14.36294498895239,
        "color": "#e74c3c40",
        "offsetX": 3.0763524198596848,
        "offsetY": 4.218179858109007
      },
      "opacity": 0.9936121180227684,
      "id": "gradient_rect_1761498310072"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 127.17181705809645,
      "width": 168,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 166.09568057921223,
        "centerX": 0.5702312763525087,
        "centerY": 0.6816597071805277
      },
      "shadow": {
        "blur": 8.641170979823775,
        "color": "#d3540040",
        "offsetX": 4.610283655969582,
        "offsetY": 3.2067490844716424
      },
      "opacity": 0.8546904191475843,
      "id": "gradient_rect_1761501997565"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.3261905395337066,
      "rotation": 102.61272491947283,
      "opacity": 0.7621456681163568,
      "shadow": {
        "blur": 14.280668298782228,
        "color": "#e74c3c40",
        "offsetX": -3.6504083410400123,
        "offsetY": 0.7573332616522732
      },
      "id": "rotated_triangle_1761512688920"
    },
    {
      "type": "circle",
      "x": 76.36138051164497,
      "y": 199.36138051164497,
      "radius": 76.36138051164497,
      "fillStyle": "#f39c12",
      "id": "circle_1761524637575"
    }
  ],
  "generation": 95,
  "lastUpdated": "2025-10-27T00:23:57.575Z",
  "cycleStarted": "2025-10-23T02:33:03.243Z"
};