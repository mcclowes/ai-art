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
      "type": "text",
      "x": 16,
      "y": 184,
      "text": "Harmony",
      "font": "30.540601431853215px Arial",
      "fillStyle": "#f1c40f",
      "id": "text_1763611585896"
    },
    {
      "type": "circle",
      "x": 356,
      "y": 356,
      "radius": 356,
      "fillStyle": "#f1c40f",
      "gradient": {
        "type": "linear",
        "colors": [
          "#e74c3c",
          "#f39c12",
          "#f1c40f"
        ],
        "direction": 44.383909821063966,
        "centerX": 0.4822798181327717,
        "centerY": 0.45810895228625614
      },
      "shadow": {
        "blur": 11.260133650907655,
        "color": "#e74c3c40",
        "offsetX": -2.5009641790567105,
        "offsetY": -3.8710245034293256
      },
      "opacity": 0.8694474487428134,
      "id": "gradient_circle_1763611585896"
    },
    {
      "type": "text",
      "x": 16,
      "y": 384,
      "text": "Create",
      "font": "23.58850848397286px Arial",
      "fillStyle": "#e67e22",
      "id": "text_1763618867662"
    },
    {
      "type": "triangle",
      "x": 131.3644083137783,
      "y": 499.3644083137783,
      "size": 56.36440831377832,
      "fillStyle": "#d35400",
      "id": "triangle_1763622352499"
    },
    {
      "type": "circle",
      "x": 265.8877281245637,
      "y": 66.8877281245637,
      "radius": 66.8877281245637,
      "fillStyle": "#e74c3c",
      "id": "circle_1763626054159",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 187.0044405663716,
        "centerX": 0.6309106045466298,
        "centerY": 0.42749004487753134
      }
    },
    {
      "type": "circle",
      "x": 356,
      "y": 356,
      "radius": 356,
      "fillStyle": "#e67e22",
      "gradient": {
        "type": "radial",
        "colors": [
          "#FF6B35",
          "#F7931E",
          "#FFD23F"
        ],
        "direction": 293.51468193193364,
        "centerX": 0.37463664060987617,
        "centerY": 0.45030792342644343
      },
      "shadow": {
        "blur": 19.276203636496966,
        "color": "#FF6B3540",
        "offsetX": 2.7247313705329006,
        "offsetY": 4.945641499920814
      },
      "opacity": 0.8868233466129473,
      "id": "gradient_circle_1763629581060"
    },
    {
      "type": "rectangle",
      "x": 274.4375772558714,
      "y": 214.17181705809645,
      "width": 440,
      "height": 30,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 197.26795898706632,
        "centerX": 0.6147959110524793,
        "centerY": 0.541894096124768
      },
      "shadow": {
        "blur": 7.947165458345676,
        "color": "#d3540040",
        "offsetX": 0.03886956949552989,
        "offsetY": 0.06580138167049121
      },
      "opacity": 0.741814785124233,
      "id": "gradient_rect_1763633157090"
    },
    {
      "type": "rectangle",
      "x": 0,
      "y": 338.82818294190355,
      "width": 890,
      "height": 64,
      "fillStyle": "#e67e22",
      "pattern": "stripes",
      "opacity": 0.7405249361736169,
      "id": "pattern_rect_1763636731905",
      "shadow": {
        "blur": 19.692692630306222,
        "color": "#e67e2240",
        "offsetX": 1.2352247347511458,
        "offsetY": 4.473306647741996
      }
    },
    {
      "type": "spiral",
      "x": 305.5624227441286,
      "y": 267,
      "radius": 267,
      "fillStyle": "#f1c40f",
      "strokeStyle": "#f1c40f",
      "strokeWidth": 2.7873781710460332,
      "opacity": 0.8818478761469781,
      "id": "spiral_1763651135291",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 219.20799276037928,
        "centerX": 0.5303813601329568,
        "centerY": 0.44581906008737837
      },
      "shadow": {
        "blur": 14.103642810648033,
        "color": "#f1c40f40",
        "offsetX": 0.3431056163427755,
        "offsetY": -2.4613984515226495
      }
    },
    {
      "type": "triangle",
      "x": 265.11141047681934,
      "y": 499.11141047681934,
      "size": 67.11141047681933,
      "fillStyle": "#f1c40f",
      "id": "triangle_1763654803037"
    },
    {
      "type": "text",
      "x": 482,
      "y": 84,
      "text": "Transform",
      "font": "29.448695981728985px Arial",
      "fillStyle": "#f39c12",
      "id": "text_1763662081793"
    },
    {
      "type": "rectangle",
      "x": 135.56242274412858,
      "y": 0,
      "width": 340,
      "height": 712,
      "fillStyle": "#f1c40f",
      "pattern": "waves",
      "opacity": 0.7017240725187682,
      "id": "pattern_rect_1763665506266",
      "shadow": {
        "blur": 19.475466278052696,
        "color": "#f1c40f40",
        "offsetX": -1.5822013538811563,
        "offsetY": -1.4201712802202104
      }
    },
    {
      "type": "circle",
      "x": 494.4375772558714,
      "y": 229.17181705809645,
      "radius": 12,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "linear",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 154.42350475051705,
        "centerX": 0.45113481510469605,
        "centerY": 0.6667789890976852
      },
      "shadow": {
        "blur": 13.006277698931903,
        "color": "#d3540040",
        "offsetX": -2.6821013107790526,
        "offsetY": 2.04943898836172
      },
      "opacity": 0.9194995051913211,
      "id": "gradient_circle_1763669162226"
    },
    {
      "type": "text",
      "x": 416,
      "y": 534,
      "text": "Harmony",
      "font": "28.608199055844224px Arial",
      "fillStyle": "#e74c3c",
      "id": "text_1763676312595"
    },
    {
      "type": "text",
      "x": 682,
      "y": 84,
      "text": "Aesthetic",
      "font": "30.398358652145227px Arial",
      "fillStyle": "#d35400",
      "id": "text_1763679912343"
    },
    {
      "type": "rectangle",
      "x": 671,
      "y": 206,
      "width": 121.23785403191036,
      "height": 85.54030226199158,
      "fillStyle": "#e67e22",
      "id": "element_1763684517778"
    },
    {
      "type": "rectangle",
      "x": 599,
      "y": 316,
      "width": 133.5342541684409,
      "height": 66.707435753815,
      "fillStyle": "#d35400",
      "id": "element_1763692483564"
    },
    {
      "type": "circle",
      "x": 444,
      "y": 356,
      "radius": 356,
      "fillStyle": "#d35400",
      "gradient": {
        "type": "radial",
        "colors": [
          "#d35400",
          "#e67e22",
          "#f39c12"
        ],
        "direction": 154.74401626315452,
        "centerX": 0.5239845126611936,
        "centerY": 0.4192722166001923
      },
      "shadow": {
        "blur": 19.368438503284576,
        "color": "#d3540040",
        "offsetX": -3.4950344268230182,
        "offsetY": 1.1455718377996575
      },
      "opacity": 0.9259154996374852,
      "id": "gradient_circle_1763698007242"
    }
  ],
  "generation": 26,
  "lastUpdated": "2025-11-21T04:06:47.242Z",
  "cycleStarted": "2025-11-20T03:24:04.582Z"
};