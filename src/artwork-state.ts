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
      "x": 237.6287563076442,
      "y": 417.8672713799166,
      "width": 200,
      "height": 100,
      "fillStyle": "#9b59b6",
      "id": "rect1",
      "gradient": {
        "type": "radial",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 343.82264532618433,
        "centerX": 0.4329610124452785,
        "centerY": 0.408262104575024
      },
      "opacity": 0.8816635557106471
    },
    {
      "type": "text",
      "x": 616,
      "y": 534,
      "text": "Making",
      "font": "26.82886155053166px Arial",
      "fillStyle": "#2ecc71",
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
      "fillStyle": "#2ecc71",
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
      "x": 84,
      "y": 511,
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
      "id": "element_1752746666255",
      "gradient": {
        "type": "radial",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 263.9784120562604,
        "centerX": 0.49118541545282995,
        "centerY": 0.6023369790190167
      },
      "shadow": {
        "blur": 18.38315314731942,
        "color": "#3498db40",
        "offsetX": 2.7839060969029656,
        "offsetY": -2.690279371971258
      }
    },
    {
      "type": "triangle",
      "x": 731.2722223495537,
      "y": 61.2722223495536,
      "size": 61.2722223495536,
      "fillStyle": "#3498db",
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
      "id": "triangle_1752746699602",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 46.09972618592292,
        "centerX": 0.510316743035933,
        "centerY": 0.5289779284689416
      }
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
      "x": 90,
      "y": 497,
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
      "id": "triangle_1752746832701",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 65.24586844676324,
        "centerX": 0.370354931450623,
        "centerY": 0.3836910826944567
      },
      "shadow": {
        "blur": 8.701600115839204,
        "color": "#9b59b640",
        "offsetX": 1.0393303527006914,
        "offsetY": -1.9870854514205094
      }
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
      "id": "triangle_1752746845431",
      "opacity": 0.871402922627247
    },
    {
      "type": "triangle",
      "x": 531.2648313842965,
      "y": 398.2648313842965,
      "size": 41.26483138429647,
      "fillStyle": "#3498db",
      "id": "triangle_1752746852650",
      "opacity": 0.9716405767427369
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
      "id": "triangle_1752746893814"
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
      "id": "circle_1752746907655",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 142.51936953298048,
        "centerX": 0.698633158298988,
        "centerY": 0.6310183185404329
      },
      "opacity": 0.929262076272072
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
      "x": 16,
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
    },
    {
      "type": "text",
      "x": 16,
      "y": 84,
      "text": "Transform",
      "font": "26.579933106438432px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1752761123896"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "Magic",
      "font": "18.23869881985525px Arial",
      "fillStyle": "#e74c3c",
      "id": "copilot_text_1752761131669",
      "opacity": 0.8810380669733363
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "Spirit",
      "font": "21.701187800336584px Arial",
      "fillStyle": "#9b59b6",
      "id": "copilot_text_1752761301723",
      "opacity": 0.8239860065000801,
      "shadow": {
        "blur": 11.309577267925496,
        "color": "#9b59b640",
        "offsetX": -2.0965938762701164,
        "offsetY": -0.1751931267972573
      },
      "strokeStyle": "#9b59b6",
      "strokeWidth": 1
    },
    {
      "type": "triangle",
      "x": 131.34579310413216,
      "y": 248.34579310413216,
      "size": 45.34579310413217,
      "fillStyle": "#e74c3c",
      "id": "triangle_1752764742680"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 346.82818294190355,
      "width": 64,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 316.5776123798892,
        "centerX": 0.6176229415371555,
        "centerY": 0.6559413331714414
      },
      "shadow": {
        "blur": 8.632508666173898,
        "color": "#e74c3c40",
        "offsetX": -4.57835217485119,
        "offsetY": -4.162604648844567
      },
      "opacity": 0.8909728791547136,
      "id": "gradient_rect_1752768368401"
    },
    {
      "type": "text",
      "x": 82,
      "y": 334,
      "text": "Transform",
      "font": "23.068576776029076px Arial",
      "fillStyle": "#9b59b6",
      "id": "text_1752771963566"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 34,
      "radius": 220,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 122.97918609193353,
        "centerX": 0.6299575528098436,
        "centerY": 0.46664848010440885
      },
      "shadow": {
        "blur": 14.948885554347335,
        "color": "#e74c3c40",
        "offsetX": 0.6785670770404373,
        "offsetY": -0.7619305471082605
      },
      "opacity": 0.9949771884661359,
      "id": "gradient_circle_1752779135651"
    },
    {
      "type": "rectangle",
      "x": 442.4375772558714,
      "y": 205.17181705809645,
      "width": 104,
      "height": 48,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 259.3828083338696,
        "centerX": 0.37585656967634035,
        "centerY": 0.5399586710016264
      },
      "shadow": {
        "blur": 19.853623504423474,
        "color": "#e74c3c40",
        "offsetX": 1.8805537569092978,
        "offsetY": -4.579908515349342
      },
      "opacity": 0.9201880098796656,
      "id": "gradient_rect_1752782743714"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "Cosltsm1",
      "font": "21.73867049440507px Arial",
      "fillStyle": "#e74c3c",
      "id": "copilot_text_1752807832805",
      "opacity": 0.8393751147714322,
      "shadow": {
        "blur": 10.61981918540468,
        "color": "#e74c3c40",
        "offsetX": 1.998074462974282,
        "offsetY": -3.62790368527242
      },
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#2ecc71",
      "gradient": {
        "type": "radial",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 116.66222648021171,
        "centerX": 0.5090511762656766,
        "centerY": 0.5953844268259882
      },
      "shadow": {
        "blur": 7.575857773533419,
        "color": "#2ecc7140",
        "offsetX": -4.267404655752747,
        "offsetY": -4.886868913557851
      },
      "opacity": 0.6204315716806471,
      "id": "gradient_circle_1752815407480"
    },
    {
      "type": "triangle",
      "x": 331.1199025315191,
      "y": 98.1199025315191,
      "size": 50.1199025315191,
      "fillStyle": "#9b59b6",
      "id": "triangle_1752818846594"
    },
    {
      "type": "text",
      "x": 216,
      "y": 234,
      "text": "Create",
      "font": "23.75685470754291px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1752822459146"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "SYNTHESIS",
      "font": "bold 30.381144230685493px Arial",
      "fillStyle": "#2ecc71",
      "gradient": {
        "type": "radial",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 341.5266556249751,
        "centerX": 0.6133561285510911,
        "centerY": 0.5978974113174372
      },
      "shadow": {
        "blur": 17.87192406264834,
        "color": "#2ecc7140",
        "offsetX": 3.877697616355526,
        "offsetY": -0.42873346281407265
      },
      "opacity": 0.8144146565528212,
      "id": "gradient_text_1752829684459"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 217.93641134700167,
        "centerX": 0.5235919326654275,
        "centerY": 0.5601178026953909
      },
      "shadow": {
        "blur": 16.836278834714662,
        "color": "#e74c3c40",
        "offsetX": 2.0320151396659796,
        "offsetY": 4.11508273036549
      },
      "opacity": 0.6110673595750561,
      "id": "gradient_circle_1752833141003"
    },
    {
      "type": "rectangle",
      "x": 604,
      "y": 187,
      "width": 122.25256976199573,
      "height": 123.72289072122983,
      "fillStyle": "#2ecc71",
      "id": "element_1752840540531"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 8,
      "fillStyle": "#2ecc71",
      "gradient": {
        "type": "linear",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 87.04165846647666,
        "centerX": 0.6438595798096207,
        "centerY": 0.44548143091331804
      },
      "shadow": {
        "blur": 15.475696686856704,
        "color": "#2ecc7140",
        "offsetX": -4.459180971415357,
        "offsetY": -3.853362042945079
      },
      "opacity": 0.6648292649533593,
      "id": "gradient_circle_1752851129973"
    },
    {
      "type": "triangle",
      "x": 416,
      "y": 484,
      "size": 10,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.7130812083041054,
      "rotation": 191.97997238921064,
      "opacity": 0.7899856312726742,
      "shadow": {
        "blur": 15.15586509219861,
        "color": "#f39c1240",
        "offsetX": 0.5718009882757125,
        "offsetY": -4.696106742058703
      },
      "id": "rotated_triangle_1752854826417"
    },
    {
      "type": "circle",
      "x": 531.2414962581349,
      "y": 534.2414962581349,
      "radius": 65.24149625813493,
      "fillStyle": "#3498db",
      "id": "circle_1752858426574"
    },
    {
      "type": "rectangle",
      "x": 619,
      "y": 57,
      "width": 92.30328440762744,
      "height": 82.41474429074047,
      "fillStyle": "#3498db",
      "id": "element_1752862020993"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 25,
      "fillStyle": "#3498db",
      "strokeStyle": "#2ecc71",
      "strokeWidth": 1.7233473495591487,
      "rotation": 106.60053760167257,
      "opacity": 0.787309242483943,
      "shadow": {
        "blur": 17.219741617504937,
        "color": "#2ecc7140",
        "offsetX": 4.209487968166938,
        "offsetY": -3.8928065863803907
      },
      "id": "rotated_triangle_1752869160306"
    },
    {
      "type": "triangle",
      "x": 721.8244840349488,
      "y": 398.8244840349488,
      "size": 77.82448403494878,
      "fillStyle": "#9b59b6",
      "id": "triangle_1752872702909"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 20.684177553672978,
        "centerX": 0.31263144050486813,
        "centerY": 0.5831199026802316
      },
      "shadow": {
        "blur": 15.972884938022831,
        "color": "#FF6B3540",
        "offsetX": -4.25395951871236,
        "offsetY": -0.5386068186908481
      },
      "opacity": 0.7181562980068671,
      "id": "gradient_circle_1752879922577"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#9b59b6",
      "gradient": {
        "type": "linear",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 171.49606444108647,
        "centerX": 0.6525318358036204,
        "centerY": 0.5886251033903513
      },
      "shadow": {
        "blur": 12.143153777385614,
        "color": "#2ecc7140",
        "offsetX": -0.49232399925374093,
        "offsetY": -4.123289450127299
      },
      "opacity": 0.9102113551672362,
      "id": "gradient_circle_1752888818306"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 246.7735405433331,
        "centerX": 0.47611170428830435,
        "centerY": 0.6171235600894224
      },
      "shadow": {
        "blur": 15.329451631094393,
        "color": "#e74c3c40",
        "offsetX": -1.7224357587028938,
        "offsetY": -4.455986105594551
      },
      "opacity": 0.7023450910193352,
      "id": "gradient_circle_1752892683422"
    },
    {
      "type": "rectangle",
      "x": 280.5624227441286,
      "y": 93.17181705809645,
      "width": 50,
      "height": 272,
      "fillStyle": "#2ecc71",
      "pattern": "stripes",
      "opacity": 0.6391735836966433,
      "id": "pattern_rect_1752895844554"
    },
    {
      "type": "triangle",
      "x": 81.60992806256218,
      "y": 81.60992806256218,
      "size": 81.60992806256218,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752901651508",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 27.627953076932748,
        "centerX": 0.34451455243529294,
        "centerY": 0.6400815886432156
      },
      "opacity": 0.9607769171106687
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 105,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.394547093499138,
      "rotation": 12.688903424911269,
      "opacity": 0.7567753391296291,
      "shadow": {
        "blur": 6.504218807835485,
        "color": "#f39c1240",
        "offsetX": -0.5706043880011418,
        "offsetY": -0.9983205109682158
      },
      "id": "rotated_triangle_1752905224930"
    },
    {
      "type": "rectangle",
      "x": 135.56242274412858,
      "y": 358.82818294190355,
      "width": 340,
      "height": 24,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.7173762955634528,
      "id": "pattern_rect_1752908724291"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.4573839674544797,
      "opacity": 0.7,
      "id": "spiral_1752912383611"
    },
    {
      "type": "rectangle",
      "x": 99,
      "y": 196,
      "width": 64.84165111248922,
      "height": 105.70980992390064,
      "fillStyle": "#9b59b6",
      "id": "element_1752915913072"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#3498db",
      "gradient": {
        "type": "radial",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 213.69665879506016,
        "centerX": 0.4933151179037097,
        "centerY": 0.41043370568947574
      },
      "shadow": {
        "blur": 5.425509621893525,
        "color": "#2ecc7140",
        "offsetX": -0.2218815882291647,
        "offsetY": -1.0186849861707525
      },
      "opacity": 0.6505987763114034,
      "id": "gradient_circle_1752919533382"
    },
    {
      "type": "circle",
      "x": 69.23540908813442,
      "y": 398.2354090881344,
      "radius": 69.23540908813442,
      "fillStyle": "#e74c3c",
      "id": "circle_1752930765882"
    },
    {
      "type": "rectangle",
      "x": 280.5624227441286,
      "y": 221.17181705809645,
      "width": 50,
      "height": 16,
      "fillStyle": "#9b59b6",
      "pattern": "dots",
      "opacity": 0.7823671947237263,
      "id": "pattern_rect_1752933878330"
    },
    {
      "type": "circle",
      "x": 331.61787928273503,
      "y": 548.617879282735,
      "radius": 46.61787928273502,
      "fillStyle": "#3498db",
      "id": "circle_1752941127683"
    },
    {
      "type": "rectangle",
      "x": 135.56242274412858,
      "y": 197.17181705809645,
      "width": 340,
      "height": 64,
      "fillStyle": "#2ecc71",
      "pattern": "dots",
      "opacity": 0.7464802026937868,
      "id": "pattern_rect_1752944682362",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 57.51485188028532,
        "centerX": 0.3727609139363672,
        "centerY": 0.5022053970243676
      }
    },
    {
      "type": "triangle",
      "x": 531.6410946182291,
      "y": 98.64109461822915,
      "size": 69.64109461822915,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752951862346"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 275,
      "size": 275,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.637132466545802,
      "rotation": 65.07219204538431,
      "opacity": 0.7527944144015702,
      "shadow": {
        "blur": 5.080004945082518,
        "color": "#e74c3c40",
        "offsetX": -0.12616596843719563,
        "offsetY": -0.8837734676398874
      },
      "id": "rotated_triangle_1752962694683"
    },
    {
      "type": "triangle",
      "x": 731.2370681438274,
      "y": 248.23706814382734,
      "size": 44.237068143827344,
      "fillStyle": "#3498db",
      "id": "triangle_1752971177232"
    },
    {
      "type": "triangle",
      "x": 665.188685239029,
      "y": 398.18868523902904,
      "size": 44.18868523902902,
      "fillStyle": "#9b59b6",
      "id": "triangle_1752979699062"
    },
    {
      "type": "rectangle",
      "x": 634,
      "y": 459,
      "width": 62.825549300490415,
      "height": 79.56920950552274,
      "fillStyle": "#f39c12",
      "id": "element_1752982525856"
    },
    {
      "type": "rectangle",
      "x": 34,
      "y": 33,
      "width": 63.22984083927126,
      "height": 130.7332568370885,
      "fillStyle": "#9b59b6",
      "id": "element_1752988172159"
    },
    {
      "type": "triangle",
      "x": 131.76588118584,
      "y": 398.76588118584,
      "size": 63.76588118583997,
      "fillStyle": "#2ecc71",
      "id": "triangle_1752991644652"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "SYNTHESIS",
      "font": "bold 33.109893342913836px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 256.48782289614024,
        "centerX": 0.6729496328778726,
        "centerY": 0.3037359406589853
      },
      "shadow": {
        "blur": 19.361952723343272,
        "color": "#e74c3c40",
        "offsetX": 2.0981004964809458,
        "offsetY": -2.6166766990865975
      },
      "opacity": 0.9318434983926557,
      "id": "gradient_text_1752995098797"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 52,
      "fillStyle": "#2ecc71",
      "gradient": {
        "type": "linear",
        "colors": [
          "#2ecc71",
          "#3498db",
          "#9b59b6"
        ],
        "direction": 200.8091758376811,
        "centerX": 0.35303007564579925,
        "centerY": 0.5154924941877614
      },
      "shadow": {
        "blur": 8.806986051274613,
        "color": "#2ecc7140",
        "offsetX": 2.0931643085911826,
        "offsetY": -4.379183079402917
      },
      "opacity": 0.9245167951578845,
      "id": "gradient_circle_1752998787300"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 40,
      "fillStyle": "#3498db",
      "strokeStyle": "#3498db",
      "strokeWidth": 1.7195316329364543,
      "rotation": 195.21735528929008,
      "opacity": 0.707081811980288,
      "shadow": {
        "blur": 14.184473867541714,
        "color": "#3498db40",
        "offsetX": 2.707173079132321,
        "offsetY": 4.6857341286965255
      },
      "id": "rotated_triangle_1753002301388"
    },
    {
      "type": "circle",
      "x": 65.68958031549508,
      "y": 498.6895803154951,
      "radius": 56.689580315495085,
      "fillStyle": "#2ecc71",
      "id": "circle_1753005910810"
    }
  ],
  "generation": 130,
  "lastUpdated": "2025-07-20T11:04:18.092Z",
  "cycleStarted": "2025-07-16T19:12:58.892Z"
};