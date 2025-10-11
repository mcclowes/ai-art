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
      "fillStyle": "#f39c12",
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
      "type": "rectangle",
      "x": 273.5624227441286,
      "y": 127.17181705809645,
      "width": 64,
      "height": 204,
      "fillStyle": "#f39c12",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 67.56005341751808,
        "centerX": 0.5075657552356008,
        "centerY": 0.5650074536504348
      },
      "shadow": {
        "blur": 8.581303472118654,
        "color": "#d3540040",
        "offsetX": -2.521180305896209,
        "offsetY": -2.852889054401393
      },
      "opacity": 0.9428011694967205,
      "id": "gradient_rect_1759979850069"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 65,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.815752568134371,
      "rotation": 45.25422616125563,
      "opacity": 0.8129828747610428,
      "shadow": {
        "blur": 12.468695485880712,
        "color": "#f1c40f40",
        "offsetX": 2.9057190822756285,
        "offsetY": 2.7950757117700338
      },
      "id": "rotated_triangle_1759979850069"
    },
    {
      "type": "triangle",
      "x": 70.03751226495464,
      "y": 248.03751226495464,
      "size": 70.03751226495464,
      "fillStyle": "#f39c12",
      "id": "triangle_1759982778795",
      "opacity": 0.7336754417685893,
      "shadow": {
        "blur": 6.444242071976048,
        "color": "#f39c1240",
        "offsetX": -1.2626208986639265,
        "offsetY": 2.624011655064913
      }
    },
    {
      "type": "text",
      "x": 82,
      "y": 484,
      "text": "Evolve",
      "font": "29.604739965190692px Arial",
      "fillStyle": "#d35400",
      "id": "text_1759986339016"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 364.82818294190355,
      "width": 712,
      "height": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 182.30431063420858,
        "centerX": 0.6692325308075806,
        "centerY": 0.6155588455683241
      },
      "shadow": {
        "blur": 16.95369168454726,
        "color": "#d3540040",
        "offsetX": -1.2301011129379025,
        "offsetY": 1.3584781357834679
      },
      "opacity": 0.8820543056055968,
      "id": "gradient_rect_1759986339017"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#f39c12",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.4486211535393516,
      "rotation": 312.24654109350683,
      "opacity": 0.9995256995308532,
      "shadow": {
        "blur": 16.50315385605007,
        "color": "#e74c3c40",
        "offsetX": 4.7410187245401865,
        "offsetY": 3.492134681048727
      },
      "id": "rotated_triangle_1759990080750"
    },
    {
      "type": "circle",
      "x": 682,
      "y": 34,
      "radius": 136,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 28.39090593460531,
        "centerX": 0.4545081361914566,
        "centerY": 0.6923925664183759
      },
      "shadow": {
        "blur": 5.642649367488634,
        "color": "#FF6B3540",
        "offsetX": -3.4656598113118187,
        "offsetY": 3.495637126282226
      },
      "opacity": 0.9226135343801076,
      "id": "gradient_circle_1759997227759"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 39,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 2.2670616221737627,
      "opacity": 0.9412766495876148,
      "id": "spiral_1760000752713",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 298.3524823284759,
        "centerX": 0.6187944181311287,
        "centerY": 0.4229963463917413
      }
    },
    {
      "type": "rectangle",
      "x": 31,
      "y": 467,
      "width": 68.09796797920794,
      "height": 63.40251430677826,
      "fillStyle": "#e74c3c",
      "id": "element_1760004356945"
    },
    {
      "type": "rectangle",
      "x": 295,
      "y": 306,
      "width": 72.78552311540318,
      "height": 85.76318857871355,
      "fillStyle": "#e74c3c",
      "id": "element_1760007908352",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 18.319277483723546,
        "centerX": 0.5675969808152043,
        "centerY": 0.5746328848461074
      }
    },
    {
      "type": "triangle",
      "x": 331.9444748577089,
      "y": 504.9444748577089,
      "size": 94.94447485770885,
      "fillStyle": "#e67e22",
      "id": "triangle_1760011730978"
    },
    {
      "type": "triangle",
      "x": 531.4856058719411,
      "y": 98.48560587194109,
      "size": 95.48560587194109,
      "fillStyle": "#f39c12",
      "id": "triangle_1760015601627"
    },
    {
      "type": "text",
      "x": 416,
      "y": 484,
      "text": "Harmony",
      "font": "28.78995465464859px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1760018736394"
    },
    {
      "type": "text",
      "x": 434.4375772558714,
      "y": 209.17181705809645,
      "text": "HARMONY",
      "font": "bold 31.424355917287848px Arial",
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 79.77614179933676,
        "centerX": 0.4614169781779859,
        "centerY": 0.3693033910696795
      },
      "shadow": {
        "blur": 17.644642494959506,
        "color": "#d3540040",
        "offsetX": -3.9872445050662098,
        "offsetY": 4.947874772087426
      },
      "opacity": 0.9388647160464054,
      "id": "gradient_text_1760026013277"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 223.81881140616548,
      "height": 80.72263816691733,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.1408543032895597,
      "opacity": 0.8,
      "id": "curve_1760029542359",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 331.34946855847704,
        "centerX": 0.5554401436232668,
        "centerY": 0.5637324273723034
      },
      "shadow": {
        "blur": 14.951892398302121,
        "color": "#f1c40f40",
        "offsetX": -4.613736579659342,
        "offsetY": 0.31249660890772635
      }
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 350.82818294190355,
      "text": "METAMORPHOSIS",
      "font": "bold 32.10242366831804px Arial",
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 3.400962596480257,
        "centerX": 0.3772537247844183,
        "centerY": 0.4109628893655586
      },
      "shadow": {
        "blur": 7.297663064199693,
        "color": "#FF6B3540",
        "offsetX": -0.8473824966469383,
        "offsetY": -2.2200977321651294
      },
      "opacity": 0.9557489851718906,
      "id": "gradient_text_1760033217393"
    },
    {
      "type": "rectangle",
      "x": 85.56242274412858,
      "y": 331.82818294190355,
      "width": 440,
      "height": 78,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 230.2866136401555,
        "centerX": 0.3460882932337954,
        "centerY": 0.31737631366399083
      },
      "shadow": {
        "blur": 15.878656542274868,
        "color": "#e74c3c40",
        "offsetX": 1.1973418857407907,
        "offsetY": -0.16918377651833083
      },
      "opacity": 0.9197141302434163,
      "id": "gradient_rect_1760040350343"
    },
    {
      "type": "circle",
      "x": 16,
      "y": 84,
      "radius": 41.849885532565736,
      "fillStyle": "#e74c3c",
      "id": "circle_1760043906723"
    },
    {
      "type": "rectangle",
      "x": 610,
      "y": 209,
      "width": 111.16448638689423,
      "height": 78.02023854644789,
      "fillStyle": "#e67e22",
      "id": "element_1760051090716"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 209.17181705809645,
      "width": 890,
      "height": 40,
      "fillStyle": "#e74c3c",
      "pattern": "waves",
      "opacity": 0.7452618932814522,
      "id": "pattern_rect_1760055680189"
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
        "direction": 240.41480696952442,
        "centerX": 0.37584761936539124,
        "centerY": 0.42136358466271184
      },
      "shadow": {
        "blur": 9.94768708015017,
        "color": "#d3540040",
        "offsetX": 2.937506227458657,
        "offsetY": 2.8529135430914305
      },
      "opacity": 0.795069944547728,
      "id": "gradient_rect_1760059969597"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 179.17181705809645,
      "width": 170.45816867803038,
      "height": 66.99959735923309,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 4.3676151019152964,
      "opacity": 0.8,
      "id": "curve_1760063497275"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 15,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.7634669746808767,
      "opacity": 0.7,
      "id": "spiral_1760069181635"
    },
    {
      "type": "rectangle",
      "x": 611,
      "y": 355,
      "width": 109.24085245931236,
      "height": 87.09214794527027,
      "fillStyle": "#e67e22",
      "id": "element_1760072730649"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 224.62379708614398,
        "centerX": 0.4045460934215087,
        "centerY": 0.6472947126429003
      },
      "shadow": {
        "blur": 6.721646500308608,
        "color": "#d3540040",
        "offsetX": -0.9142128576464081,
        "offsetY": 0.9527229406121336
      },
      "opacity": 0.6144315708016197,
      "id": "gradient_circle_1760076486877"
    },
    {
      "type": "circle",
      "x": 665.2830738293468,
      "y": 499.2830738293468,
      "radius": 52.28307382934679,
      "fillStyle": "#e67e22",
      "id": "circle_1760079927147"
    },
    {
      "type": "rectangle",
      "x": 82,
      "y": 438,
      "width": 99.22544790522402,
      "height": 122.94630877152292,
      "fillStyle": "#e67e22",
      "id": "element_1760087152210"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 24,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.6355254874362704,
      "opacity": 0.7,
      "id": "spiral_1760094305093"
    },
    {
      "type": "triangle",
      "x": 445,
      "y": 445,
      "size": 445,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 1.077248880085636,
      "rotation": 354.5172202929614,
      "opacity": 0.8443668088124809,
      "shadow": {
        "blur": 19.94183266647499,
        "color": "#e74c3c40",
        "offsetX": -0.4299820176875251,
        "offsetY": -1.6529049057853284
      },
      "id": "rotated_triangle_1760098118806"
    },
    {
      "type": "rectangle",
      "x": 277,
      "y": 443,
      "width": 108.52665657256709,
      "height": 112.46566179577789,
      "fillStyle": "#e67e22",
      "id": "element_1760101911751"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 165,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 1.964224694998355,
      "opacity": 0.7,
      "id": "spiral_1760105125193"
    },
    {
      "type": "spiral",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 6,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 1.0534222568512437,
      "opacity": 0.7,
      "id": "spiral_1760112372956"
    },
    {
      "type": "text",
      "x": 216,
      "y": 484,
      "text": "Evolve",
      "font": "25.124092954490244px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1760123083781"
    },
    {
      "type": "curve",
      "x": 394.4375772558714,
      "y": 320.82818294190355,
      "width": 177.6465430596005,
      "height": 76.03868613348985,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.69903086525637,
      "opacity": 0.8,
      "id": "curve_1760126717903"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "size": 40,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.4058989282144183,
      "rotation": 291.814912225732,
      "opacity": 0.8527250168111583,
      "shadow": {
        "blur": 17.130210717448264,
        "color": "#e74c3c40",
        "offsetX": 4.7306677154161765,
        "offsetY": 1.4381284397612486
      },
      "id": "rotated_triangle_1760130309873"
    },
    {
      "type": "rectangle",
      "x": 404,
      "y": 40,
      "width": 122.66012141796344,
      "height": 116.92548894885223,
      "fillStyle": "#f39c12",
      "id": "element_1760141976861"
    }
  ],
  "generation": 47,
  "lastUpdated": "2025-10-11T00:19:36.861Z",
  "cycleStarted": "2025-10-09T02:31:30.758Z"
};