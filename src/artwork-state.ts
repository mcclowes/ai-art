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
      "id": "rect1",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 143.84501967248804,
        "centerX": 0.4560442355646573,
        "centerY": 0.6043278588574794
      },
      "shadow": {
        "blur": 11.610381758493935,
        "color": "#f39c1240",
        "offsetX": -3.9150575429738432,
        "offsetY": -4.4546825863191275
      }
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
      "y": 234,
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
      "x": 482,
      "y": 84,
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
      "x": 10,
      "y": 160,
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
      "fillStyle": "#f1c40f",
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
      "id": "element_1760072730649",
      "shadow": {
        "blur": 8.164448129785598,
        "color": "#e67e2240",
        "offsetX": -3.0659998856034543,
        "offsetY": -0.72720597088537
      },
      "opacity": 0.9894532442601733
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
      "y": 229.17181705809645,
      "radius": 84,
      "fillStyle": "#e74c3c",
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
      "opacity": 0.7232500183388472,
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
      "fillStyle": "#d35400",
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
    },
    {
      "type": "circle",
      "x": 531.3526412565491,
      "y": 548.3526412565491,
      "radius": 46.35264125654902,
      "fillStyle": "#f1c40f",
      "id": "circle_1760146346522",
      "shadow": {
        "blur": 7.540162638011648,
        "color": "#f1c40f40",
        "offsetX": 2.8563528426184988,
        "offsetY": -4.146776238583674
      }
    },
    {
      "type": "circle",
      "x": 665.2580787849546,
      "y": 51.25807878495456,
      "radius": 51.25807878495456,
      "fillStyle": "#f39c12",
      "id": "circle_1760152357133",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 173.00777360694403,
        "centerX": 0.5801939043483307,
        "centerY": 0.4770457135707543
      },
      "shadow": {
        "blur": 12.407927812692051,
        "color": "#f39c1240",
        "offsetX": 0.2668588964188112,
        "offsetY": -2.2860601648569268
      }
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
        "direction": 327.8900462061398,
        "centerX": 0.4260337361314949,
        "centerY": 0.3117840644039406
      },
      "shadow": {
        "blur": 9.645813278023441,
        "color": "#e74c3c40",
        "offsetX": 0.026833752282488632,
        "offsetY": -4.362096936912552
      },
      "opacity": 0.6842630217017219,
      "id": "gradient_circle_1760155568785"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 8,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 25.570853007558796,
        "centerX": 0.5002654252889697,
        "centerY": 0.4592719539848088
      },
      "shadow": {
        "blur": 19.89759166388029,
        "color": "#d3540040",
        "offsetX": -1.961595013713151,
        "offsetY": 3.206494309099705
      },
      "opacity": 0.8196934735902305,
      "id": "gradient_circle_1760159103921"
    },
    {
      "type": "text",
      "x": 616,
      "y": 184,
      "text": "Inspire",
      "font": "33.04773746432758px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1760162792128"
    },
    {
      "type": "triangle",
      "x": 665.327682815305,
      "y": 398.327682815305,
      "size": 49.32768281530504,
      "fillStyle": "#d35400",
      "id": "triangle_1760166285714"
    },
    {
      "type": "circle",
      "x": 665.1299027270267,
      "y": 528.1299027270267,
      "radius": 71.12990272702669,
      "fillStyle": "#f39c12",
      "id": "circle_1760169974513"
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
        "direction": 34.70113449717723,
        "centerX": 0.4690706040258098,
        "centerY": 0.5714122223069095
      },
      "shadow": {
        "blur": 9.549760605341291,
        "color": "#d3540040",
        "offsetX": -2.778389636407397,
        "offsetY": 0.39763450310458914
      },
      "opacity": 0.7395235505814644,
      "id": "gradient_rect_1760180684681"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 325,
      "size": 275,
      "fillStyle": "#e74c3c",
      "strokeStyle": "#e74c3c",
      "strokeWidth": 2.871175442236635,
      "rotation": 192.48370646983759,
      "opacity": 0.9192589948629535,
      "shadow": {
        "blur": 5.534171277372582,
        "color": "#e74c3c40",
        "offsetX": 0.3009870168326234,
        "offsetY": 1.6331185745333077
      },
      "id": "rotated_triangle_1760184478005"
    },
    {
      "type": "rectangle",
      "x": 297.5624227441286,
      "y": 361.82818294190355,
      "width": 16,
      "height": 18,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 131.4953820366654,
        "centerX": 0.5836660729195485,
        "centerY": 0.606098993855221
      },
      "shadow": {
        "blur": 5.062270999097306,
        "color": "#e74c3c40",
        "offsetX": 4.109667743362987,
        "offsetY": 3.513584369063306
      },
      "opacity": 0.8559983745941174,
      "id": "gradient_rect_1760188055839"
    },
    {
      "type": "triangle",
      "x": 65.6925823003539,
      "y": 98.6925823003539,
      "size": 50.692582300353905,
      "fillStyle": "#f1c40f",
      "id": "triangle_1760195073267"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 2.804489948679052,
        "centerX": 0.5901128863849237,
        "centerY": 0.33535855691001054
      },
      "shadow": {
        "blur": 19.84483478363843,
        "color": "#d3540040",
        "offsetX": -1.1804025890274406,
        "offsetY": -4.12130529561431
      },
      "opacity": 0.717491828748756,
      "id": "gradient_circle_1760198697406"
    },
    {
      "type": "circle",
      "x": 665.4834453558915,
      "y": 199.48344535589155,
      "radius": 69.48344535589155,
      "fillStyle": "#f39c12",
      "id": "circle_1760209469349"
    },
    {
      "type": "rectangle",
      "x": 73,
      "y": 474,
      "width": 117.5217714190115,
      "height": 125.5668930001649,
      "fillStyle": "#e74c3c",
      "id": "element_1760213106008",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 152.44491480175967,
        "centerX": 0.6191468361192216,
        "centerY": 0.4513594986815145
      },
      "shadow": {
        "blur": 14.206498349024315,
        "color": "#e74c3c40",
        "offsetX": -2.1552787537772167,
        "offsetY": -3.1004835412723675
      }
    },
    {
      "type": "triangle",
      "x": 265.58956242525295,
      "y": 72.58956242525295,
      "size": 72.58956242525295,
      "fillStyle": "#f1c40f",
      "id": "triangle_1760216680108"
    },
    {
      "type": "text",
      "x": 282,
      "y": 534,
      "text": "Transform",
      "font": "24.264982873976788px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1760220283175"
    },
    {
      "type": "circle",
      "x": 465.0023138063942,
      "y": 49.002313806394255,
      "radius": 45.002313806394255,
      "fillStyle": "#e67e22",
      "id": "circle_1760223891811"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 17,
      "width": 890,
      "height": 64,
      "fillStyle": "#d35400",
      "pattern": "stripes",
      "opacity": 0.7138987812250261,
      "id": "pattern_rect_1760228530465"
    },
    {
      "type": "rectangle",
      "x": 423,
      "y": 457,
      "width": 85.41571900360734,
      "height": 83.40900666985726,
      "fillStyle": "#e74c3c",
      "id": "element_1760236354484",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 13.940196537745395,
        "centerX": 0.45069295230594586,
        "centerY": 0.3940304915813293
      },
      "shadow": {
        "blur": 15.873858588973729,
        "color": "#e74c3c40",
        "offsetX": 4.602254275026489,
        "offsetY": 3.262255935813606
      },
      "opacity": 0.8943302162256117
    },
    {
      "type": "rectangle",
      "x": 673,
      "y": 50,
      "width": 116.66762011156011,
      "height": 97.97120642625015,
      "fillStyle": "#f1c40f",
      "id": "element_1760241976422"
    },
    {
      "type": "circle",
      "x": 216,
      "y": 34,
      "radius": 356,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 295.42405512474073,
        "centerX": 0.6190312289372353,
        "centerY": 0.33873233924658275
      },
      "shadow": {
        "blur": 15.130164269488915,
        "color": "#e74c3c40",
        "offsetX": 3.3990876524816827,
        "offsetY": -3.5281808753901145
      },
      "opacity": 0.7044253201198621,
      "id": "gradient_circle_1760245502610"
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "radius": 102,
      "fillStyle": "#f39c12",
      "strokeStyle": "#f39c12",
      "strokeWidth": 2.1136364658106577,
      "opacity": 0.7,
      "id": "spiral_1760249189268"
    },
    {
      "type": "rectangle",
      "x": 697,
      "y": 30,
      "width": 69.94295465426256,
      "height": 137.86855268566924,
      "fillStyle": "#e74c3c",
      "id": "element_1760263497691"
    },
    {
      "type": "circle",
      "x": 665.4431029666051,
      "y": 398.4431029666051,
      "radius": 71.44310296660515,
      "fillStyle": "#f1c40f",
      "id": "circle_1760270896240"
    },
    {
      "type": "triangle",
      "x": 665.4628146861553,
      "y": 513.4628146861553,
      "size": 86.46281468615524,
      "fillStyle": "#e74c3c",
      "id": "triangle_1760274476573"
    },
    {
      "type": "triangle",
      "x": 305.5624227441286,
      "y": 370.82818294190355,
      "size": 10,
      "fillStyle": "#e67e22",
      "strokeStyle": "#e67e22",
      "strokeWidth": 1.5218522350659547,
      "rotation": 300.85867883997173,
      "opacity": 0.9247590718274719,
      "shadow": {
        "blur": 14.183983736646951,
        "color": "#e67e2240",
        "offsetX": 0.2663190926154897,
        "offsetY": 2.9953620897569593
      },
      "id": "rotated_triangle_1760285105138"
    },
    {
      "type": "text",
      "x": 245.56242274412858,
      "y": 209.17181705809645,
      "text": "EMERGENCE",
      "font": "bold 30.655364793924452px Arial",
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 357.6103710888996,
        "centerX": 0.39669915158669583,
        "centerY": 0.529785838862671
      },
      "shadow": {
        "blur": 6.565586991801766,
        "color": "#e74c3c40",
        "offsetX": -0.3327417428379764,
        "offsetY": -4.717329242270926
      },
      "opacity": 0.9445856520288525,
      "id": "gradient_text_1760288687844"
    },
    {
      "type": "circle",
      "x": 65.25724072589928,
      "y": 199.2572407258993,
      "radius": 37.25724072589928,
      "fillStyle": "#e74c3c",
      "id": "circle_1760292403549"
    },
    {
      "type": "rectangle",
      "x": 98,
      "y": 362,
      "width": 67.79267410276653,
      "height": 73.70914785538756,
      "fillStyle": "#f39c12",
      "id": "element_1760295870756"
    },
    {
      "type": "circle",
      "x": 305.5624227441286,
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
        "direction": 116.29198060873931,
        "centerX": 0.5324500181109035,
        "centerY": 0.4146247176763991
      },
      "shadow": {
        "blur": 16.062820041593973,
        "color": "#FF6B3540",
        "offsetX": -4.182216071108586,
        "offsetY": 0.4110373679723489
      },
      "opacity": 0.7660739399750397,
      "id": "gradient_circle_1760299533045"
    },
    {
      "type": "circle",
      "x": 65.85925968106996,
      "y": 498.85925968106994,
      "radius": 48.85925968106996,
      "fillStyle": "#f1c40f",
      "id": "circle_1760303080663"
    },
    {
      "type": "triangle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "size": 10,
      "fillStyle": "#d35400",
      "strokeStyle": "#d35400",
      "strokeWidth": 1.2000103110322735,
      "rotation": 234.60798645250867,
      "opacity": 0.9225972417856532,
      "shadow": {
        "blur": 10.463361633769033,
        "color": "#d3540040",
        "offsetX": -1.9624272871135684,
        "offsetY": -3.909242101605084
      },
      "id": "rotated_triangle_1760306696129"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 136,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 329.57501317744203,
        "centerX": 0.4085150460700289,
        "centerY": 0.4346775518959937
      },
      "shadow": {
        "blur": 16.29549531859841,
        "color": "#e74c3c40",
        "offsetX": -2.9666380445490614,
        "offsetY": -3.562927469564048
      },
      "opacity": 0.9240502297181683,
      "id": "gradient_circle_1760319212583"
    },
    {
      "type": "triangle",
      "x": 265.0125143144354,
      "y": 499.0125143144354,
      "size": 75.01251431443544,
      "fillStyle": "#f39c12",
      "id": "triangle_1760322909031"
    },
    {
      "type": "rectangle",
      "x": 88,
      "y": 268.82818294190355,
      "width": 712,
      "height": 204,
      "fillStyle": "#FF6B35",
      "gradient": {
        "type": "linear",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 222.06872973163533,
        "centerX": 0.4270415422739716,
        "centerY": 0.6782615301564097
      },
      "shadow": {
        "blur": 15.399117596444222,
        "color": "#FF6B3540",
        "offsetX": -2.2959387007476706,
        "offsetY": 1.4387384829699617
      },
      "opacity": 0.8540598411028526,
      "id": "gradient_rect_1760328376558"
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 370.82818294190355,
      "radius": 32,
      "fillStyle": "#e74c3c",
      "gradient": {
        "type": "radial",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 134.85396419700592,
        "centerX": 0.3377927498528789,
        "centerY": 0.3971567857811066
      },
      "shadow": {
        "blur": 11.5726876317777,
        "color": "#e74c3c40",
        "offsetX": 1.2889622849951792,
        "offsetY": 1.9536297154436921
      },
      "opacity": 0.6827743601096244,
      "id": "gradient_circle_1760331985992"
    },
    {
      "type": "rectangle",
      "x": 469,
      "y": 509,
      "width": 125.69916408101159,
      "height": 79.67822733668109,
      "fillStyle": "#e74c3c",
      "id": "element_1760335693648"
    },
    {
      "type": "triangle",
      "x": 665.9453840361547,
      "y": 98.94538403615472,
      "size": 53.94538403615472,
      "fillStyle": "#f39c12",
      "id": "triangle_1760339162552"
    },
    {
      "type": "circle",
      "x": 731.0505491340216,
      "y": 199.05054913402165,
      "radius": 60.05054913402165,
      "fillStyle": "#f39c12",
      "id": "circle_1760342850502"
    },
    {
      "type": "circle",
      "x": 731.6104515525614,
      "y": 348.6104515525613,
      "radius": 56.61045155256131,
      "fillStyle": "#e74c3c",
      "id": "circle_1760346424951"
    }
  ],
  "generation": 104,
  "lastUpdated": "2025-10-13T09:07:04.951Z",
  "cycleStarted": "2025-10-09T02:31:30.758Z"
};