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
      "fillStyle": "#f1c40f",
      "id": "rect1",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 271.3795934992062,
        "centerX": 0.6506742407564072,
        "centerY": 0.5552980191898469
      },
      "shadow": {
        "blur": 15.274628497008905,
        "color": "#e67e2240",
        "offsetX": 0.24587704508647334,
        "offsetY": -2.539057628856314
      }
    },
    {
      "type": "text",
      "x": 682,
      "y": 484,
      "text": "Hello Canvas!",
      "font": "24px Arial",
      "fillStyle": "#fff",
      "id": "text1"
    },
    {
      "type": "triangle",
      "x": 682,
      "y": 534,
      "size": 42.10582638054581,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757554384103",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 226.1790030694657,
        "centerX": 0.6952855119154728,
        "centerY": 0.44333372257449255
      }
    },
    {
      "type": "triangle",
      "x": 131.12564896607023,
      "y": 349.12564896607023,
      "size": 42.12564896607023,
      "fillStyle": "#d35400",
      "id": "triangle_1757557889984",
      "opacity": 0.83296103226385
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 334.3918988035274,
        "centerX": 0.39886793247341545,
        "centerY": 0.31590208273966774
      },
      "shadow": {
        "blur": 17.316537327212636,
        "color": "#FF6B3540",
        "offsetX": 2.6494957311195177,
        "offsetY": 4.903988747004666
      },
      "opacity": 0.9612031388001051,
      "id": "gradient_circle_1757557889984"
    },
    {
      "type": "rectangle",
      "x": 265.5624227441286,
      "y": 0,
      "width": 80,
      "height": 712,
      "fillStyle": "#f39c12",
      "pattern": "stripes",
      "opacity": 0.7565813734759048,
      "id": "pattern_rect_1757560649080",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 63.95122393450439,
        "centerX": 0.4108072385234503,
        "centerY": 0.5223299454620343
      }
    },
    {
      "type": "text",
      "x": 682,
      "y": 84,
      "text": "Aesthetic",
      "font": "33.92740072464659px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1757560649080"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 9,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.8094710273529375,
      "opacity": 0.7,
      "id": "spiral_1757567129279"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 169.82428836622555,
        "centerX": 0.37807054507166243,
        "centerY": 0.30249663753032374
      },
      "shadow": {
        "blur": 12.624393159826065,
        "color": "#e74c3c40",
        "offsetX": 1.3711227505698043,
        "offsetY": 2.4586839972399366
      },
      "opacity": 0.8713537067658101,
      "id": "gradient_circle_1757570847225"
    },
    {
      "type": "spiral",
      "x": 16,
      "y": 234,
      "radius": 9,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.8462563192315273,
      "opacity": 0.7,
      "id": "spiral_1757578045993"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 26.79369533323605px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 302.43650400593725,
        "centerX": 0.6341747087364291,
        "centerY": 0.533504848134646
      },
      "shadow": {
        "blur": 14.934102733222009,
        "color": "#FF6B3540",
        "offsetX": -4.407272097465638,
        "offsetY": 2.5652186900964686
      },
      "opacity": 0.9495639668743298,
      "id": "gradient_text_1757581541177"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "TRANSCEND",
      "font": "bold 31.845125233573775px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 8.188403155882362,
        "centerX": 0.3849807349239057,
        "centerY": 0.6190800189095662
      },
      "shadow": {
        "blur": 18.91322986560751,
        "color": "#e74c3c40",
        "offsetX": -2.832273141325503,
        "offsetY": -3.5376131563277413
      },
      "opacity": 0.9068291569755301,
      "id": "gradient_text_1757585125950"
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Inspire",
      "font": "20.935579216112092px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1757588694908"
    },
    {
      "type": "triangle",
      "x": 82,
      "y": 534,
      "size": 50.14100644772094,
      "fillStyle": "#e67e22",
      "id": "triangle_1757592521799",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 334.7087183371039,
        "centerX": 0.5582883752786894,
        "centerY": 0.5461231154933596
      }
    },
    {
      "type": "text",
      "x": 416,
      "y": 484,
      "text": "Balance",
      "font": "24.399784153497937px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1757596238175"
    },
    {
      "type": "triangle",
      "x": 69.14699346523344,
      "y": 530.1469934652334,
      "size": 69.14699346523344,
      "fillStyle": "#f1c40f",
      "id": "triangle_1757606751064"
    },
    {
      "type": "rectangle",
      "x": 632,
      "y": 225,
      "width": 168,
      "height": 48,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 96.03834421505165,
        "centerX": 0.42001742926059127,
        "centerY": 0.3248251451934456
      },
      "shadow": {
        "blur": 14.525979546001459,
        "color": "#FF6B3540",
        "offsetX": -4.604002650237784,
        "offsetY": 2.4673010017698243
      },
      "opacity": 0.7021661414989877,
      "id": "gradient_rect_1757610302380"
    },
    {
      "type": "circle",
      "x": 731.5148368741293,
      "y": 248.5148368741293,
      "radius": 47.51483687412927,
      "fillStyle": "#f39c12",
      "id": "circle_1757613992741"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 23.757175253832443px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 112.44583846647836,
        "centerX": 0.5181687882317376,
        "centerY": 0.6600158278353592
      },
      "shadow": {
        "blur": 15.034978584465982,
        "color": "#e74c3c40",
        "offsetX": 2.443674745254083,
        "offsetY": -3.494175433857496
      },
      "opacity": 0.8983099436228035,
      "id": "gradient_text_1757617491830"
    },
    {
      "type": "rectangle",
      "x": 604,
      "y": 312,
      "width": 123.18697879017954,
      "height": 73.54321199023451,
      "fillStyle": "#e74c3c",
      "id": "element_1757621122645"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 102,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.2790397171741095,
      "opacity": 0.9244915662492559,
      "id": "spiral_1757624694474",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 99.5231452110872,
        "centerX": 0.5121193805457076,
        "centerY": 0.6306880508837354
      }
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
        "direction": 300.04081020215614,
        "centerX": 0.32269436625146014,
        "centerY": 0.4373480581194925
      },
      "shadow": {
        "blur": 16.028785519387306,
        "color": "#d3540040",
        "offsetX": -3.978686397979989,
        "offsetY": -0.6308105132938602
      },
      "opacity": 0.6493337829468551,
      "id": "gradient_circle_1757631904141"
    },
    {
      "type": "text",
      "x": 16,
      "y": 184,
      "text": "Inspire",
      "font": "22.780368126667742px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1757640771069"
    },
    {
      "type": "triangle",
      "x": 16,
      "y": 384,
      "size": 55.08221182356475,
      "fillStyle": "#e67e22",
      "id": "triangle_1757646766348"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 142,
      "width": 131.80352875875622,
      "height": 113.10376235590118,
      "fillStyle": "#f39c12",
      "id": "element_1757649972809"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 268.82818294190355,
      "width": 440,
      "height": 204,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 252.7461248793687,
        "centerX": 0.35942011445572336,
        "centerY": 0.4274223216234254
      },
      "shadow": {
        "blur": 19.319701520077576,
        "color": "#e74c3c40",
        "offsetX": -4.983236018980859,
        "offsetY": -2.0628133451241704
      },
      "opacity": 0.9984895483475147,
      "id": "gradient_rect_1757657233887"
    },
    {
      "type": "circle",
      "x": 131.60715393862517,
      "y": 348.6071539386252,
      "radius": 40.60715393862517,
      "fillStyle": "#f1c40f",
      "id": "circle_1757660706188"
    },
    {
      "type": "rectangle",
      "x": 285.5624227441286,
      "y": 64.17181705809645,
      "width": 40,
      "height": 330,
      "fillStyle": "#e67e22",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 272.38903472064857,
        "centerX": 0.39102239363519314,
        "centerY": 0.3026894081930974
      },
      "shadow": {
        "blur": 16.435732195319385,
        "color": "#FF6B3540",
        "offsetX": -4.327053038114112,
        "offsetY": 2.628272852626841
      },
      "opacity": 0.9046744163380319,
      "id": "gradient_rect_1757664416484"
    },
    {
      "type": "rectangle",
      "x": 240.56242274412858,
      "y": 358.82818294190355,
      "width": 130,
      "height": 24,
      "fillStyle": "#f1c40f",
      "pattern": "stripes",
      "opacity": 0.6205501535626095,
      "id": "pattern_rect_1757667923596"
    },
    {
      "type": "triangle",
      "x": 92.51479665280395,
      "y": 498.51479665280397,
      "size": 92.51479665280395,
      "fillStyle": "#f39c12",
      "id": "triangle_1757671524744"
    },
    {
      "type": "rectangle",
      "x": 600,
      "y": 512,
      "width": 130.47901312509373,
      "height": 72.72640789483079,
      "fillStyle": "#d35400",
      "id": "element_1757682588948"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "EVOLVE",
      "font": "bold 25.245030134693728px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 167.33731771867244,
        "centerX": 0.44657085778344396,
        "centerY": 0.6379740214886711
      },
      "shadow": {
        "blur": 12.455164157432362,
        "color": "#d3540040",
        "offsetX": -4.450478957138069,
        "offsetY": 3.7789148910095385
      },
      "opacity": 0.916181313442243,
      "id": "gradient_text_1757685921259"
    },
    {
      "type": "rectangle",
      "x": 253.56242274412858,
      "y": 214.17181705809645,
      "width": 104,
      "height": 30,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 215.28185669745287,
        "centerX": 0.5484473352851593,
        "centerY": 0.6082776910359531
      },
      "shadow": {
        "blur": 9.379781006919947,
        "color": "#FF6B3540",
        "offsetX": -3.7690155932682923,
        "offsetY": -2.839645880979067
      },
      "opacity": 0.8772990136677725,
      "id": "gradient_rect_1757693134593"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 6,
      "fillStyle": "#e67e22",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.210539242262489,
      "opacity": 0.7,
      "id": "spiral_1757696701714"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 6,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.794255681534177,
      "opacity": 0.7,
      "id": "spiral_1757703894247"
    },
    {
      "type": "triangle",
      "x": 531.8948721165684,
      "y": 98.89487211656842,
      "size": 90.89487211656842,
      "fillStyle": "#f39c12",
      "id": "triangle_1757707527525"
    },
    {
      "type": "text",
      "x": 482,
      "y": 484,
      "text": "Vision",
      "font": "25.698895487137513px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1757711088008"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "EMERGENCE",
      "font": "bold 33.10112506833037px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 255.08689591117897,
        "centerX": 0.44798671995026557,
        "centerY": 0.414746553197178
      },
      "shadow": {
        "blur": 5.273715989402326,
        "color": "#e74c3c40",
        "offsetX": -3.295677423108909,
        "offsetY": 1.0971518750884002
      },
      "opacity": 0.8546366678871745,
      "id": "gradient_text_1757714699328"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 117.62992757243865,
        "centerX": 0.5810182001540793,
        "centerY": 0.6501829148054254
      },
      "shadow": {
        "blur": 17.242021284743167,
        "color": "#e74c3c40",
        "offsetX": -2.993553859730065,
        "offsetY": -3.47443846638517
      },
      "opacity": 0.8106170450540404,
      "id": "gradient_circle_1757718294523"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 225.9191376281001,
      "height": 88.22832429911452,
      "fillStyle": "#d35400",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.0284274866171126,
      "opacity": 0.8,
      "id": "curve_1757722741996"
    },
    {
      "type": "spiral",
      "x": 16,
      "y": 234,
      "radius": 63,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.444429476418531,
      "opacity": 0.7,
      "id": "spiral_1757730263951"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 166.17181705809645,
      "width": 440,
      "height": 126,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 262.05728835001094,
        "centerX": 0.6205459043533487,
        "centerY": 0.5306516596828351
      },
      "shadow": {
        "blur": 19.87866515761243,
        "color": "#e74c3c40",
        "offsetX": -4.9777073465115995,
        "offsetY": 4.794950521313066
      },
      "opacity": 0.8536034038182005,
      "id": "gradient_rect_1757736338485"
    },
    {
      "type": "rectangle",
      "x": 665,
      "y": 145,
      "width": 132.50904673627883,
      "height": 108.62281936975063,
      "fillStyle": "#e67e22",
      "id": "element_1757739901908"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 311.1634607921794,
        "centerX": 0.5798915157866269,
        "centerY": 0.39153043421726724
      },
      "shadow": {
        "blur": 9.636859492815578,
        "color": "#FF6B3540",
        "offsetX": 4.909196533739431,
        "offsetY": -0.11771105952686334
      },
      "opacity": 0.8903171167925117,
      "id": "gradient_circle_1757747086781"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 333,
      "radius": 267,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 2.4448705498954713,
      "opacity": 0.7,
      "id": "spiral_1757757890539"
    },
    {
      "type": "triangle",
      "x": 665.0176671216361,
      "y": 349.0176671216362,
      "size": 97.01766712163617,
      "fillStyle": "#e74c3c",
      "id": "triangle_1757761487509"
    },
    {
      "type": "circle",
      "x": 131.77287072214534,
      "y": 248.77287072214534,
      "radius": 79.77287072214534,
      "fillStyle": "#d35400",
      "id": "circle_1757768821431"
    },
    {
      "type": "triangle",
      "x": 131.42380872936337,
      "y": 349.4238087293634,
      "size": 60.42380872936338,
      "fillStyle": "#f39c12",
      "id": "triangle_1757772263509"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 52,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 236.15062236023908,
        "centerX": 0.697123722532055,
        "centerY": 0.5039452484367982
      },
      "shadow": {
        "blur": 9.915657969821831,
        "color": "#d3540040",
        "offsetX": 0.5274157081048214,
        "offsetY": -2.1965234278447987
      },
      "opacity": 0.999713430848933,
      "id": "gradient_circle_1757775865661"
    },
    {
      "type": "rectangle",
      "x": 93,
      "y": 467,
      "width": 76.65337281451886,
      "height": 132.50482124474496,
      "fillStyle": "#d35400",
      "id": "element_1757779507135",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 237.35958566559458,
        "centerX": 0.4640329033084159,
        "centerY": 0.6513074936145149
      },
      "shadow": {
        "blur": 9.75510069286414,
        "color": "#d3540040",
        "offsetX": -0.38263010426851807,
        "offsetY": 2.83951513298514
      },
      "opacity": 0.949024858379025
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 15,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.6896831595253716,
      "opacity": 0.7,
      "id": "spiral_1757783070776"
    },
    {
      "type": "rectangle",
      "x": 217,
      "y": 66,
      "width": 96.57608387535014,
      "height": 64.35403996577665,
      "fillStyle": "#f39c12",
      "id": "element_1757786741915"
    },
    {
      "type": "circle",
      "x": 265.0541889750923,
      "y": 499.0541889750923,
      "radius": 34.05418897509231,
      "fillStyle": "#d35400",
      "id": "circle_1757790282059"
    },
    {
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 307.82818294190355,
      "width": 64,
      "height": 126,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 338.37299616129127,
        "centerX": 0.5091192719115373,
        "centerY": 0.5204215035490622
      },
      "shadow": {
        "blur": 17.89343028884643,
        "color": "#FF6B3540",
        "offsetX": 3.5522562820850077,
        "offsetY": -2.5464579826101286
      },
      "opacity": 0.7367538445704195,
      "id": "gradient_rect_1757793903419"
    },
    {
      "type": "triangle",
      "x": 531.2672778713103,
      "y": 98.26727787131028,
      "size": 75.26727787131028,
      "fillStyle": "#f39c12",
      "id": "triangle_1757797477499"
    },
    {
      "type": "rectangle",
      "x": 413,
      "y": 482,
      "width": 105.58573514962946,
      "height": 117.65948768114286,
      "fillStyle": "#d35400",
      "id": "element_1757801087299"
    },
    {
      "type": "rectangle",
      "x": 621,
      "y": 7,
      "width": 89.31560482187415,
      "height": 83.84343600393733,
      "fillStyle": "#f39c12",
      "id": "element_1757804706814"
    },
    {
      "type": "rectangle",
      "x": 695,
      "y": 169,
      "width": 72.68431462914705,
      "height": 60.818171022001195,
      "fillStyle": "#e74c3c",
      "id": "element_1757809348777"
    },
    {
      "type": "rectangle",
      "x": 617,
      "y": 302,
      "width": 96.98093105310436,
      "height": 93.46090735163288,
      "fillStyle": "#d35400",
      "id": "element_1757813577112"
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
        "direction": 147.5770365172317,
        "centerX": 0.5214820831475071,
        "centerY": 0.48514569163106697
      },
      "shadow": {
        "blur": 8.160566339678176,
        "color": "#FF6B3540",
        "offsetX": -3.6011953639915584,
        "offsetY": 0.6891662236560059
      },
      "opacity": 0.6791360141347862,
      "id": "gradient_circle_1757822746190"
    },
    {
      "type": "triangle",
      "x": 265.3059738933906,
      "y": 527.3059738933906,
      "size": 72.30597389339061,
      "fillStyle": "#d35400",
      "id": "triangle_1757826299970"
    },
    {
      "type": "rectangle",
      "x": 26,
      "y": 33,
      "width": 78.41001971536906,
      "height": 131.97046009715643,
      "fillStyle": "#f39c12",
      "id": "element_1757829990126"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.9552623435449097,
      "rotation": 201.43899675679285,
      "opacity": 0.7788575605764038,
      "shadow": {
        "blur": 14.896658169395188,
        "color": "#e67e2240",
        "offsetX": -0.6484788432898148,
        "offsetY": -3.9249016529963665
      },
      "id": "rotated_triangle_1757833507046"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 205.34208545457557,
        "centerX": 0.307689544246929,
        "centerY": 0.38447449821887325
      },
      "shadow": {
        "blur": 9.831635434335002,
        "color": "#FF6B3540",
        "offsetX": 1.8402204451889892,
        "offsetY": -4.122350313153895
      },
      "opacity": 0.9901048780893872,
      "id": "gradient_circle_1757837193439"
    },
    {
      "type": "rectangle",
      "x": 221.56242274412858,
      "y": 190.17181705809645,
      "width": 168,
      "height": 78,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 329.5660008849735,
        "centerX": 0.34649177416402865,
        "centerY": 0.5665370637664067
      },
      "shadow": {
        "blur": 6.113486245728352,
        "color": "#e74c3c40",
        "offsetX": -4.600118754142503,
        "offsetY": 0.1343352827121791
      },
      "opacity": 0.9117668119224531,
      "id": "gradient_rect_1757851669998"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 198.21726933181208,
      "height": 61.28488547986761,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 4.25717634270464,
      "opacity": 0.8,
      "id": "curve_1757855215271"
    },
    {
      "type": "circle",
      "x": 65.10708033773896,
      "y": 98.10708033773896,
      "radius": 46.107080337738964,
      "fillStyle": "#d35400",
      "id": "circle_1757858691445"
    }
  ],
  "generation": 89,
  "lastUpdated": "2025-09-14T16:04:57.730Z",
  "cycleStarted": "2025-09-11T00:20:59.429Z"
};