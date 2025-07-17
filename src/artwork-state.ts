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
      "x": 280.05487600148825,
      "y": 431.5488320650072,
      "width": 200,
      "height": 100,
      "fillStyle": "#9b59b6",
      "id": "rect1"
    },
    {
      "type": "text",
      "x": 301.09906648305645,
      "y": 422.49455448587605,
      "text": "Making",
      "font": "26.82886155053166px Arial",
      "fillStyle": "#e74c3c",
      "id": "copilot_text_1752726527797"
    },
    {
      "type": "rectangle",
      "x": 232,
      "y": 478,
      "width": 67.1886292641572,
      "height": 41.52257288524915,
      "fillStyle": "#f39c12",
      "id": "copilot_complement_1752726527796",
      "opacity": 0.7889093030250132,
      "shadow": {
        "blur": 15.015588842879065,
        "color": "#f39c1240",
        "offsetX": 2.490295881405846,
        "offsetY": 2.0715387172574173
      }
    },
    {
      "type": "triangle",
      "x": 85.22134177946546,
      "y": 248.22134177946546,
      "size": 85.22134177946546,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752727221786",
      "shadow": {
        "blur": 10.118539585123605,
        "color": "#2ecc7140",
        "offsetX": -4.659596985112209,
        "offsetY": -1.679589697497832
      },
      "opacity": 0.8576269564102721
    },
    {
      "type": "rectangle",
      "x": 691.7557474043759,
      "y": 467.2383354380168,
      "width": 63.406346826868486,
      "height": 39.18512233900472,
      "fillStyle": "#e74c3c",
      "id": "copilot_complement_1752727229153",
      "shadow": {
        "blur": 12.755245066922583,
        "color": "#e74c3c40",
        "offsetX": 1.6145810696528518,
        "offsetY": -3.230025767081921
      }
    },
    {
      "type": "triangle",
      "x": 65.43510986076092,
      "y": 349.4351098607609,
      "size": 62.43510986076092,
      "fillStyle": "#f39c12",
      "id": "triangle_1752727309721",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 350.3674511603943,
        "centerX": 0.5032847738771234,
        "centerY": 0.5434998454376048
      },
      "shadow": {
        "blur": 8.464204301567335,
        "color": "#f39c1240",
        "offsetX": -1.295715928661354,
        "offsetY": 4.591124729547882
      },
      "opacity": 0.9346972500376448
    },
    {
      "type": "triangle",
      "x": 131.2030768365079,
      "y": 499.2030768365079,
      "size": 86.2030768365079,
      "fillStyle": "#f39c12",
      "id": "triangle_1752727309721"
    },
    {
      "type": "triangle",
      "x": 331.29377939446465,
      "y": 98.29377939446466,
      "size": 51.293779394464664,
      "fillStyle": "#f39c12",
      "id": "triangle_1752728227896"
    },
    {
      "type": "circle",
      "x": 265.6145865696705,
      "y": 198.6145865696705,
      "radius": 68.61458656967051,
      "fillStyle": "#f39c12",
      "id": "circle_1752728227896",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 249.36528856957975,
        "centerX": 0.32263214807495977,
        "centerY": 0.38383758264258505
      },
      "shadow": {
        "blur": 14.712377376005294,
        "color": "#3498db40",
        "offsetX": 0.9675237159708772,
        "offsetY": -3.4919713641670724
      }
    },
    {
      "type": "rectangle",
      "x": 236,
      "y": 518,
      "width": 58.64674671197657,
      "height": 61.37420944744174,
      "fillStyle": "#9b59b6",
      "id": "copilot_enhancement_1752728233852"
    },
    {
      "type": "text",
      "x": 341.62724802755355,
      "y": 418.7330957137226,
      "text": "Harmony",
      "font": "28.659823258997793px Arial",
      "fillStyle": "#e74c3c",
      "id": "copilot_text_1752728233852"
    },
    {
      "type": "text",
      "x": 682,
      "y": 84,
      "text": "Inspire",
      "font": "27.569635416092442px Arial",
      "fillStyle": "#9b59b6",
      "id": "text_1752746393301"
    },
    {
      "type": "rectangle",
      "x": 484,
      "y": 211,
      "width": 95.18952729808937,
      "height": 74.76981390246354,
      "fillStyle": "#9b59b6",
      "id": "element_1752746642442",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 97.56035786915643,
        "centerX": 0.5166461065684376,
        "centerY": 0.57838413676731
      },
      "shadow": {
        "blur": 13.951908228787941,
        "color": "#9b59b640",
        "offsetX": -4.156025307808107,
        "offsetY": -1.869578522170603
      },
      "opacity": 0.8878450184717291
    },
    {
      "type": "triangle",
      "x": 465.73271323903725,
      "y": 348.73271323903725,
      "size": 54.73271323903724,
      "fillStyle": "#e74c3c",
      "id": "triangle_1752746649023",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 132.07462994643456,
        "centerX": 0.3709779756941364,
        "centerY": 0.6439006650114063
      },
      "shadow": {
        "blur": 11.947946344360986,
        "color": "#e74c3c40",
        "offsetX": 3.5489609784865763,
        "offsetY": 0.48029795299117595
      },
      "opacity": 0.8582911949752995
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 331.82818294190355,
      "width": 16,
      "height": 78,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 169.89713886055353,
        "centerX": 0.5897788381394848,
        "centerY": 0.31576298693212973
      },
      "shadow": {
        "blur": 18.302516306686258,
        "color": "#FF6B3540",
        "offsetX": -3.4028521089491903,
        "offsetY": -3.6879600098026066
      },
      "opacity": 0.7276098056203171,
      "id": "gradient_rect_1752746658766"
    },
    {
      "type": "rectangle",
      "x": 466,
      "y": 510,
      "width": 131.69368979077564,
      "height": 77.5481104614842,
      "fillStyle": "#3498db",
      "id": "element_1752746666255"
    },
    {
      "type": "triangle",
      "x": 731.2722223495537,
      "y": 61.2722223495536,
      "size": 61.2722223495536,
      "fillStyle": "#f39c12",
      "id": "triangle_1752746672546"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 15,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.9906590951914387,
      "rotation": 63.88019464455978,
      "opacity": 0.7197297667335603,
      "shadow": {
        "blur": 8.605387808289095,
        "color": "#f39c1240",
        "offsetX": 4.012918229659569,
        "offsetY": -1.7979150508038
      },
      "id": "rotated_triangle_1752746680632"
    },
    {
      "type": "circle",
      "x": 665.4903167078355,
      "y": 199.49031670783552,
      "radius": 67.49031670783553,
      "fillStyle": "#9b59b6",
      "id": "circle_1752746680735",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 285.7195625200376,
        "centerX": 0.5718982378770454,
        "centerY": 0.5493679036780899
      },
      "shadow": {
        "blur": 6.664241076888415,
        "color": "#9b59b640",
        "offsetX": 3.0986920070580855,
        "offsetY": -0.650657730238291
      },
      "opacity": 0.9127541829566841
    },
    {
      "type": "circle",
      "x": 356,
      "y": 356,
      "radius": 356,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 261.04092180681806,
        "centerX": 0.6503888573576839,
        "centerY": 0.5886151733168854
      },
      "shadow": {
        "blur": 14.822723263706926,
        "color": "#e74c3c40",
        "offsetX": 1.9633992636555853,
        "offsetY": 1.2986811476087512
      },
      "opacity": 0.6307000161801216,
      "id": "gradient_circle_1752746680786"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 111.59465127633405,
        "centerX": 0.6367537722484414,
        "centerY": 0.39632075531112126
      },
      "shadow": {
        "blur": 18.745359187340323,
        "color": "#e74c3c40",
        "offsetX": 0.5297438555229199,
        "offsetY": -1.980550092018143
      },
      "opacity": 0.6696769677715602,
      "id": "gradient_circle_1752746686726"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "TRANSCEND",
      "font": "bold 32.322113903957224px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 52.981791255351645,
        "centerX": 0.5259662493885562,
        "centerY": 0.34460957827962746
      },
      "shadow": {
        "blur": 8.583044455417406,
        "color": "#FF6B3540",
        "offsetX": -4.258885144614444,
        "offsetY": 3.467010218283022
      },
      "opacity": 0.8572656038643625,
      "id": "gradient_text_1752746693630"
    },
    {
      "type": "triangle",
      "x": 665.0760260980035,
      "y": 349.07602609800347,
      "size": 40.076026098003446,
      "fillStyle": "#f39c12",
      "id": "triangle_1752746699602"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 6,
      "fillStyle": "#9b59b6",
      "strokeStyle": "#9b59b6",
      "strokeWidth": 1.593460711589052,
      "opacity": 0.7,
      "id": "spiral_1752746705818"
    },
    {
      "type": "rectangle",
      "x": 85,
      "y": 0,
      "width": 92.07189149211484,
      "height": 116.81575356191735,
      "fillStyle": "#e74c3c",
      "id": "element_1752746714953"
    },
    {
      "type": "triangle",
      "x": 82,
      "y": 534,
      "size": 45.832994234722214,
      "fillStyle": "#9b59b6",
      "id": "triangle_1752746729402",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 52.40606560040015,
        "centerX": 0.40712992326843694,
        "centerY": 0.5267043562162942
      },
      "shadow": {
        "blur": 8.194384366481753,
        "color": "#9b59b640",
        "offsetX": -3.570103035553782,
        "offsetY": 1.0085827662137685
      },
      "opacity": 0.8659070584757088
    },
    {
      "type": "rectangle",
      "x": 492,
      "y": 537,
      "width": 80,
      "height": 24,
      "fillStyle": "#9b59b6",
      "pattern": "waves",
      "opacity": 0.760501980253725,
      "id": "pattern_rect_1752746743200"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 205.82818294190355,
      "width": 104,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 236.1562515664868,
        "centerX": 0.581971944749252,
        "centerY": 0.6001914418360337
      },
      "shadow": {
        "blur": 8.198502531722873,
        "color": "#e74c3c40",
        "offsetX": -4.8225880320397945,
        "offsetY": -2.537475763407966
      },
      "opacity": 0.8676676287188542,
      "id": "gradient_rect_1752746758748"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 361.82818294190355,
      "width": 40,
      "height": 18,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 290.14434936625514,
        "centerX": 0.39724072738000615,
        "centerY": 0.30793409151616186
      },
      "shadow": {
        "blur": 5.771879335056158,
        "color": "#d3540040",
        "offsetX": -0.6249553326096162,
        "offsetY": -0.5542921419791451
      },
      "opacity": 0.9063310275603443,
      "id": "gradient_rect_1752746771796"
    },
    {
      "type": "rectangle",
      "x": 24,
      "y": 448,
      "width": 83.15389580092904,
      "height": 102.19376235219228,
      "fillStyle": "#9b59b6",
      "id": "element_1752746778699"
    },
    {
      "type": "triangle",
      "x": 131.55681204435896,
      "y": 248.55681204435896,
      "size": 50.55681204435896,
      "fillStyle": "#3498db",
      "id": "triangle_1752746819381",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 208.2456738561073,
        "centerX": 0.45098311291035803,
        "centerY": 0.5811082496048405
      },
      "opacity": 0.7283873475360672
    },
    {
      "type": "triangle",
      "x": 331.5117797631456,
      "y": 89.51177976314563,
      "size": 89.51177976314563,
      "fillStyle": "#9b59b6",
      "id": "triangle_1752746832701"
    },
    {
      "type": "circle",
      "x": 265.2629860513824,
      "y": 499.2629860513824,
      "radius": 53.262986051382406,
      "fillStyle": "#3498db",
      "id": "circle_1752746838519"
    },
    {
      "type": "triangle",
      "x": 531.1578091162893,
      "y": 98.15780911628929,
      "size": 52.157809116289286,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752746845431"
    },
    {
      "type": "triangle",
      "x": 531.2648313842965,
      "y": 398.2648313842965,
      "size": 41.26483138429647,
      "fillStyle": "#3498db",
      "id": "triangle_1752746852650"
    },
    {
      "type": "rectangle",
      "x": 280.5624227441286,
      "y": 338.82818294190355,
      "width": 50,
      "height": 64,
      "fillStyle": "#f39c12",
      "pattern": "stripes",
      "opacity": 0.782625581085759,
      "id": "pattern_rect_1752746859226"
    },
    {
      "type": "rectangle",
      "x": 406,
      "y": 38,
      "width": 119.07989318651357,
      "height": 121.27269811018635,
      "fillStyle": "#9b59b6",
      "id": "element_1752746880671"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 155.28533384819977,
        "centerX": 0.5416589683007256,
        "centerY": 0.4520186225996091
      },
      "shadow": {
        "blur": 11.189361044146665,
        "color": "#d3540040",
        "offsetX": -2.1096786806260415,
        "offsetY": 2.6751063956949617
      },
      "opacity": 0.6119703073381079,
      "id": "gradient_circle_1752746886761"
    },
    {
      "type": "triangle",
      "x": 665.4832213291634,
      "y": 248.48322132916337,
      "size": 87.48322132916337,
      "fillStyle": "#3498db",
      "id": "triangle_1752746893814",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 214.52816698575552,
        "centerX": 0.6083937133483222,
        "centerY": 0.5326991456093868
      }
    },
    {
      "type": "rectangle",
      "x": 598,
      "y": 362,
      "width": 134.4167149507025,
      "height": 72.00799583122802,
      "fillStyle": "#f39c12",
      "id": "element_1752746900268"
    },
    {
      "type": "circle",
      "x": 731.3875057858531,
      "y": 398.38750578585314,
      "radius": 44.38750578585311,
      "fillStyle": "#2ecc71",
      "id": "circle_1752746907655"
    },
    {
      "type": "text",
      "x": 682,
      "y": 484,
      "text": "Balance",
      "font": "19.252964144933372px Arial",
      "fillStyle": "#2ecc71",
      "id": "text_1752746914586"
    },
    {
      "type": "text",
      "x": 82,
      "y": 84,
      "text": "Balance",
      "font": "25.362182555111048px Arial",
      "fillStyle": "#3498db",
      "id": "text_1752746921417"
    },
    {
      "type": "rectangle",
      "x": 474.4375772558714,
      "y": 127.17181705809645,
      "width": 40,
      "height": 204,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 213.8824317997982,
        "centerX": 0.5082972907678649,
        "centerY": 0.4043441950465206
      },
      "shadow": {
        "blur": 7.541636095203027,
        "color": "#d3540040",
        "offsetX": 3.484000789901021,
        "offsetY": 4.956692516361423
      },
      "opacity": 0.8779627688273033,
      "id": "gradient_rect_1752746928499"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 228.0875809911326,
      "height": 98.69305240298326,
      "fillStyle": "#3498db",
      "strokeStyle": "#3498db",
      "strokeWidth": 2.523420239819748,
      "opacity": 0.8,
      "id": "curve_1752746941820"
    }
  ],
  "generation": 60,
  "lastUpdated": "2025-07-17T13:58:53.693Z",
  "cycleStarted": "2025-07-16T19:12:58.892Z"
};