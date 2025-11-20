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
      "opacity": 0.7,
      "id": "spiral_1763651135291"
    },
    {
      "type": "triangle",
      "x": 265.11141047681934,
      "y": 499.11141047681934,
      "size": 67.11141047681933,
      "fillStyle": "#f1c40f",
      "id": "triangle_1763654803037"
    }
  ],
  "generation": 15,
  "lastUpdated": "2025-11-20T17:05:26.410Z",
  "cycleStarted": "2025-11-20T03:24:04.582Z"
};