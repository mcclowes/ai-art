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
      "y": 449,
      "width": 200,
      "height": 100,
      "fillStyle": "#e67e22",
      "id": "rect1",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 28.278627273348906,
        "centerX": 0.637817109359829,
        "centerY": 0.5489328063044113
      },
      "shadow": {
        "blur": 16.301282047749325,
        "color": "#e67e2240",
        "offsetX": 4.810003766857804,
        "offsetY": -4.913707701648393
      },
      "opacity": 0.8214996655372795
    },
    {
      "type": "text",
      "x": 682,
      "y": 384,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "rectangle",
      "x": 582,
      "y": 90,
      "width": 168,
      "height": 18,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 97.38527766955353,
        "centerX": 0.5107449531076934,
        "centerY": 0.6912976849462853
      },
      "shadow": {
        "blur": 15.57063898709178,
        "color": "#FF6B3540",
        "offsetX": -4.000937530750663,
        "offsetY": -1.5159309433192791
      },
      "opacity": 0.9263513507583298,
      "id": "gradient_rect_1759374890267"
    },
    {
      "type": "rectangle",
      "x": 1,
      "y": 517,
      "width": 128.7377126258005,
      "height": 63.83181922767717,
      "fillStyle": "#e74c3c",
      "id": "element_1759374890267"
    },
    {
      "type": "rectangle",
      "x": 324.4375772558714,
      "y": 9.171817058096451,
      "width": 340,
      "height": 440,
      "fillStyle": "#f39c12",
      "pattern": "dots",
      "opacity": 0.7165507000842223,
      "id": "pattern_rect_1759377972465"
    },
    {
      "type": "circle",
      "x": 65.47677914643991,
      "y": 398.4767791464399,
      "radius": 52.47677914643991,
      "fillStyle": "#f1c40f",
      "id": "circle_1759381517698"
    },
    {
      "type": "text",
      "x": 16,
      "y": 84,
      "text": "Balance",
      "font": "24.44498793823036px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1759388721311"
    },
    {
      "type": "circle",
      "x": 82,
      "y": 34,
      "radius": 46.10427237039094,
      "fillStyle": "#e67e22",
      "id": "circle_1759392414375",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 164.49069801213304,
        "centerX": 0.37511044332748095,
        "centerY": 0.48047386247959134
      },
      "opacity": 0.7910055934503826
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 178.70795205582166,
      "height": 99.57718774513768,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.6431445511380205,
      "opacity": 0.8,
      "id": "curve_1759395932223"
    },
    {
      "type": "circle",
      "x": 265.98187056187385,
      "y": 348.98187056187385,
      "radius": 74.98187056187388,
      "fillStyle": "#f39c12",
      "id": "circle_1759399506461"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "HARMONY",
      "font": "bold 33.461331257130325px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 87.91744919666844,
        "centerX": 0.4846453237592324,
        "centerY": 0.48419753262596743
      },
      "shadow": {
        "blur": 5.079044717785772,
        "color": "#e74c3c40",
        "offsetX": -1.5857778309692794,
        "offsetY": -2.8885288527135677
      },
      "opacity": 0.9253853739314675,
      "id": "gradient_text_1759403095549"
    },
    {
      "type": "rectangle",
      "x": 320,
      "y": 474,
      "width": 24,
      "height": 126,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 28.538005749773365,
        "centerX": 0.32577511678134546,
        "centerY": 0.57513369100649
      },
      "shadow": {
        "blur": 15.932621548365464,
        "color": "#d3540040",
        "offsetX": -0.20340390368340788,
        "offsetY": -4.36398051635555
      },
      "opacity": 0.8160340799289473,
      "id": "gradient_rect_1759406895808"
    },
    {
      "type": "triangle",
      "x": 465.4363180759501,
      "y": 98.4363180759501,
      "size": 41.4363180759501,
      "fillStyle": "#e67e22",
      "id": "triangle_1759413917112",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 280.6261838660614,
        "centerX": 0.6490111843625976,
        "centerY": 0.44815288894086724
      }
    },
    {
      "type": "rectangle",
      "x": 397,
      "y": 196,
      "width": 137.34867452442478,
      "height": 105.06799707916832,
      "fillStyle": "#f39c12",
      "id": "element_1759417533678",
      "shadow": {
        "blur": 16.275853689097957,
        "color": "#f39c1240",
        "offsetX": -2.7409238335520048,
        "offsetY": 3.2948937173380504
      },
      "opacity": 0.7730084546615589
    },
    {
      "type": "circle",
      "x": 531.7560761088581,
      "y": 198.7560761088581,
      "radius": 33.75607610885812,
      "fillStyle": "#d35400",
      "id": "circle_1759421153664"
    },
    {
      "type": "circle",
      "x": 465.27332714420317,
      "y": 548.2733271442032,
      "radius": 30.273327144203183,
      "fillStyle": "#f1c40f",
      "id": "circle_1759424647724"
    },
    {
      "type": "triangle",
      "x": 665.2869370165374,
      "y": 76.28693701653737,
      "size": 76.28693701653737,
      "fillStyle": "#e67e22",
      "id": "triangle_1759431915611"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 217.82854162202437,
        "centerX": 0.5483330630054413,
        "centerY": 0.44290315499372584
      },
      "shadow": {
        "blur": 18.334178594218535,
        "color": "#d3540040",
        "offsetX": 4.847501837582527,
        "offsetY": 3.8403928179666558
      },
      "opacity": 0.9383750332109283,
      "id": "gradient_circle_1759435528537"
    },
    {
      "type": "triangle",
      "x": 82,
      "y": 234,
      "size": 53.74028728224843,
      "fillStyle": "#f1c40f",
      "id": "triangle_1759439096868"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 354.18870827629894,
        "centerX": 0.6260568274312793,
        "centerY": 0.5684528113782397
      },
      "shadow": {
        "blur": 6.138712894533933,
        "color": "#e74c3c40",
        "offsetX": -0.42496704614904246,
        "offsetY": -3.845148701772232
      },
      "opacity": 0.903617795345805,
      "id": "gradient_circle_1759446302568"
    },
    {
      "type": "triangle",
      "x": 731.0843732080432,
      "y": 535.0843732080432,
      "size": 64.08437320804317,
      "fillStyle": "#d35400",
      "id": "triangle_1759455170384",
      "opacity": 0.943812670379726
    },
    {
      "type": "rectangle",
      "x": 169.56242274412858,
      "y": 355.82818294190355,
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
        "direction": 162.95378088191777,
        "centerX": 0.5067102292107208,
        "centerY": 0.6556634463749509
      },
      "shadow": {
        "blur": 19.254829729534293,
        "color": "#e74c3c40",
        "offsetX": -0.8306986353217649,
        "offsetY": -3.0245308048051522
      },
      "opacity": 0.9533539354952241,
      "id": "gradient_rect_1759458570673"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 28.178028362241307px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 4.971292366848603,
        "centerX": 0.5616092594872395,
        "centerY": 0.45614236724286294
      },
      "shadow": {
        "blur": 6.908479137849822,
        "color": "#d3540040",
        "offsetX": 0.05413503442457834,
        "offsetY": 4.472792537130076
      },
      "opacity": 0.9025992140820323,
      "id": "gradient_text_1759467912785"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 20,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 70.34648981397628,
        "centerX": 0.6180205537325847,
        "centerY": 0.5589189224377791
      },
      "shadow": {
        "blur": 14.03343669200609,
        "color": "#e74c3c40",
        "offsetX": 2.215572032893056,
        "offsetY": -3.10990086293347
      },
      "opacity": 0.9067716741004512,
      "id": "gradient_circle_1759475123758"
    },
    {
      "type": "curve",
      "x": 205.56242274412858,
      "y": 179.17181705809645,
      "width": 198.6887531568425,
      "height": 90.07961018897566,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.938838200947088,
      "opacity": 0.8,
      "id": "curve_1759478818056"
    },
    {
      "type": "rectangle",
      "x": 410.4375772558714,
      "y": 214.17181705809645,
      "width": 168,
      "height": 30,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 69.62774789013665,
        "centerX": 0.6903855665260649,
        "centerY": 0.40260236448495534
      },
      "shadow": {
        "blur": 12.256433542199455,
        "color": "#FF6B3540",
        "offsetX": 2.9250656841782297,
        "offsetY": 1.9322669517979403
      },
      "opacity": 0.7060710011128256,
      "id": "gradient_rect_1759482316106"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 220,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 213.56952553487827,
        "centerX": 0.5944996338066144,
        "centerY": 0.4207587433840604
      },
      "shadow": {
        "blur": 16.968444418926772,
        "color": "#d3540040",
        "offsetX": -0.11206986305779942,
        "offsetY": -3.627869401764625
      },
      "opacity": 0.803043264141412,
      "id": "gradient_circle_1759489496238"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
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
        "direction": 92.47516040005155,
        "centerX": 0.4000875321972462,
        "centerY": 0.39326087131857157
      },
      "shadow": {
        "blur": 19.436483181205364,
        "color": "#e74c3c40",
        "offsetX": 0.4161468493303193,
        "offsetY": -2.4106058545416675
      },
      "opacity": 0.9632475913651456,
      "id": "gradient_circle_1759497032210"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 162.56771663635385,
      "height": 82.22848566322668,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.281028475846443,
      "opacity": 0.8,
      "id": "curve_1759500318386"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 39.508771165726074px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 216.42854002977566,
        "centerX": 0.6991178277782543,
        "centerY": 0.43806792475940315
      },
      "shadow": {
        "blur": 18.55083152974648,
        "color": "#d3540040",
        "offsetX": -0.9114148109099407,
        "offsetY": 2.7979174643160087
      },
      "opacity": 0.8436122798215674,
      "id": "gradient_text_1759503923942"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 66,
      "width": 16,
      "height": 534,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 136.64987429933558,
        "centerX": 0.42796460992297514,
        "centerY": 0.42068912944836817
      },
      "shadow": {
        "blur": 5.90299798892151,
        "color": "#d3540040",
        "offsetX": 4.455575571716434,
        "offsetY": -0.732520146877329
      },
      "opacity": 0.8251455054473299,
      "id": "gradient_rect_1759507555445"
    },
    {
      "type": "rectangle",
      "x": 617,
      "y": 159,
      "width": 96.42411733488703,
      "height": 80.32857338628197,
      "fillStyle": "#f39c12",
      "id": "element_1759511098489"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 205.17181705809645,
      "width": 712,
      "height": 48,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 126.79608469237708,
        "centerX": 0.3603315886275003,
        "centerY": 0.5756602192022289
      },
      "shadow": {
        "blur": 19.048912775737392,
        "color": "#d3540040",
        "offsetX": 1.787530120535008,
        "offsetY": -3.1602413341300295
      },
      "opacity": 0.9579146875260524,
      "id": "gradient_rect_1759514809860"
    },
    {
      "type": "triangle",
      "x": 65.41663096612913,
      "y": 499.4166309661291,
      "size": 44.41663096612913,
      "fillStyle": "#e74c3c",
      "id": "triangle_1759518288089"
    },
    {
      "type": "triangle",
      "x": 265.73970906285047,
      "y": 546.7397090628505,
      "size": 52.73970906285045,
      "fillStyle": "#f39c12",
      "id": "triangle_1759521931275"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 212.08263653297794,
      "height": 96.10588064141794,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 4.731909135350111,
      "opacity": 0.978053598760485,
      "id": "curve_1759532700660",
      "shadow": {
        "blur": 16.653529848046645,
        "color": "#f39c1240",
        "offsetX": -1.1055381545401621,
        "offsetY": -4.3651941927666815
      }
    },
    {
      "type": "circle",
      "x": 531.5812760836247,
      "y": 498.5812760836248,
      "radius": 38.5812760836248,
      "fillStyle": "#e74c3c",
      "id": "circle_1759537186954"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 40,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.47856935143232,
      "rotation": 322.76879262012716,
      "opacity": 0.9098767371673107,
      "shadow": {
        "blur": 14.27634617878079,
        "color": "#e67e2240",
        "offsetX": -0.9801908786071811,
        "offsetY": 4.44906954358553
      },
      "id": "rotated_triangle_1759541529893"
    },
    {
      "type": "circle",
      "x": 665.1371494854363,
      "y": 98.13714948543631,
      "radius": 70.13714948543631,
      "fillStyle": "#f1c40f",
      "id": "circle_1759544767011"
    },
    {
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 205.82818294190355,
      "width": 64,
      "height": 330,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 300.2600584169432,
        "centerX": 0.6166079090775105,
        "centerY": 0.6780890909719932
      },
      "shadow": {
        "blur": 7.092112476956162,
        "color": "#e74c3c40",
        "offsetX": 4.714226922402002,
        "offsetY": -3.617157971070375
      },
      "opacity": 0.9929543781383772,
      "id": "gradient_rect_1759547473416"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 188.72764543870042,
        "centerX": 0.4260368621454098,
        "centerY": 0.4713112226214286
      },
      "shadow": {
        "blur": 10.578303427145531,
        "color": "#FF6B3540",
        "offsetX": -2.9326486285416653,
        "offsetY": -2.1587465545753015
      },
      "opacity": 0.8150022964525749,
      "id": "gradient_circle_1759550751085"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.8598642753092127,
      "rotation": 264.7554607261224,
      "opacity": 0.9233952316857368,
      "shadow": {
        "blur": 15.626403780752812,
        "color": "#e67e2240",
        "offsetX": -3.464624673576948,
        "offsetY": 4.34703050817353
      },
      "id": "rotated_triangle_1759554296073"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "EVOLVE",
      "font": "bold 28.693038210289057px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 218.22022413539563,
        "centerX": 0.34442506341748735,
        "centerY": 0.5184930824841729
      },
      "shadow": {
        "blur": 17.214281464500303,
        "color": "#d3540040",
        "offsetX": -2.6067407108222285,
        "offsetY": -3.289153841375214
      },
      "opacity": 0.9050584212825089,
      "id": "gradient_text_1759561484444"
    },
    {
      "type": "rectangle",
      "x": 695,
      "y": 194,
      "width": 73.83966032166273,
      "height": 108.78589569054458,
      "fillStyle": "#f39c12",
      "id": "element_1759565193994"
    },
    {
      "type": "rectangle",
      "x": 462.4375772558714,
      "y": 66,
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
        "direction": 247.30712942706805,
        "centerX": 0.6998362244443014,
        "centerY": 0.37804958257640264
      },
      "shadow": {
        "blur": 10.352270453982317,
        "color": "#e74c3c40",
        "offsetX": -1.081107785118527,
        "offsetY": 3.865010579958369
      },
      "opacity": 0.8267162054559003,
      "id": "gradient_rect_1759568695663"
    },
    {
      "type": "text",
      "x": 682,
      "y": 384,
      "text": "Balance",
      "font": "24.572843264352095px Arial",
      "fillStyle": "#d35400",
      "id": "text_1759575881028"
    },
    {
      "type": "circle",
      "x": 616,
      "y": 484,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 272.56383459769376,
        "centerX": 0.6631903638459775,
        "centerY": 0.41741010593817834
      },
      "shadow": {
        "blur": 18.68704490429118,
        "color": "#d3540040",
        "offsetX": 3.548493945943232,
        "offsetY": 3.5664843397832247
      },
      "opacity": 0.8053636317991756,
      "id": "gradient_circle_1759579667266"
    },
    {
      "type": "rectangle",
      "x": 62,
      "y": 63,
      "width": 138.11659370358,
      "height": 70.54773994490662,
      "fillStyle": "#e67e22",
      "id": "element_1759590282754"
    },
    {
      "type": "circle",
      "x": 65.28070738821356,
      "y": 248.28070738821356,
      "radius": 55.28070738821356,
      "fillStyle": "#f1c40f",
      "id": "circle_1759593905907"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "size": 105,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.584795899375409,
      "rotation": 1.892174127283397,
      "opacity": 0.7685734429899848,
      "shadow": {
        "blur": 14.731155543933191,
        "color": "#f1c40f40",
        "offsetX": -3.7903469688931524,
        "offsetY": -0.41640543515627737
      },
      "id": "rotated_triangle_1759597485151"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 9,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.659957467138981,
      "opacity": 0.7,
      "id": "spiral_1759608315263"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 24,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.5532686148415982,
      "opacity": 0.8875469209083439,
      "id": "spiral_1759611875370",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 97.2939521329738,
        "centerX": 0.3300776136516488,
        "centerY": 0.31186458198933426
      }
    },
    {
      "type": "triangle",
      "x": 131.34537397374876,
      "y": 548.3453739737488,
      "size": 45.34537397374876,
      "fillStyle": "#e67e22",
      "id": "triangle_1759619123145"
    },
    {
      "type": "circle",
      "x": 265.97772540337854,
      "y": 55.97772540337853,
      "radius": 55.97772540337853,
      "fillStyle": "#f39c12",
      "id": "circle_1759627974468"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EVOLVE",
      "font": "bold 31.847458654526775px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 138.3365250460733,
        "centerX": 0.42085715776195026,
        "centerY": 0.4729830387425092
      },
      "shadow": {
        "blur": 7.809274281243565,
        "color": "#d3540040",
        "offsetX": -4.356197932511736,
        "offsetY": 3.189394391025404
      },
      "opacity": 0.9326279260330459,
      "id": "gradient_text_1759631651669"
    }
  ],
  "generation": 73,
  "lastUpdated": "2025-10-05T02:34:11.669Z",
  "cycleStarted": "2025-10-02T02:29:58.080Z"
};