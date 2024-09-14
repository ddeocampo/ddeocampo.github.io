var APP_DATA = {
  "scenes": [
    {
      "id": "0-gallery-entrance",
      "name": "Gallery Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3005009206183153,
        "pitch": -0.0887578116814538,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": -1.5685850351361115,
          "pitch": 0.09899269563494073,
          "rotation": 0,
          "target": "21-1st-floor-hallway-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-quilt-room-ne",
      "name": "Quilt Room NE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.619942335420058,
        "pitch": 0.056730786773833586,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 1.446519304668005,
          "pitch": 0.2699731339049958,
          "rotation": 6.283185307179586,
          "target": "2-quilt-room-nw"
        },
        {
          "yaw": 0.564092113122511,
          "pitch": 0.15164811043822723,
          "rotation": 0,
          "target": "3-quilt-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-quilt-room-nw",
      "name": "Quilt Room NW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1587548373937597,
          "pitch": 0.18865048107793925,
          "rotation": 0,
          "target": "1-quilt-room-ne"
        },
        {
          "yaw": -2.2948074226709707,
          "pitch": 0.10155221409837623,
          "rotation": 0,
          "target": "3-quilt-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-quilt-room-entrance",
      "name": "Quilt Room Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07785394741378227,
          "pitch": 0.08945345416257666,
          "rotation": 0,
          "target": "1-quilt-room-ne"
        },
        {
          "yaw": -0.7614786952245876,
          "pitch": 0.10394420218452538,
          "rotation": 0,
          "target": "2-quilt-room-nw"
        },
        {
          "yaw": -2.184332626015994,
          "pitch": 0.10733968026581131,
          "rotation": 0,
          "target": "4-hallway-south"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway-south",
      "name": "Hallway South",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3386879072228375,
        "pitch": 0.025115428765136727,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": -0.8708082230013652,
          "pitch": 0.14691338743230808,
          "rotation": 0,
          "target": "3-quilt-room-entrance"
        },
        {
          "yaw": -3.100049125742361,
          "pitch": 0.18273500398689535,
          "rotation": 0,
          "target": "5-hallway-main"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hallway-main",
      "name": "Hallway Main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.325575995234317,
        "pitch": 0.03977683937714005,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 3.102259101845279,
          "pitch": 0.11878874045309296,
          "rotation": 0,
          "target": "4-hallway-south"
        },
        {
          "yaw": 1.5538758810813542,
          "pitch": 0.0511918056589451,
          "rotation": 0,
          "target": "6-gallery-1-nw"
        },
        {
          "yaw": -1.573528973682368,
          "pitch": 0.16475002099366698,
          "rotation": 0,
          "target": "9-hallway-west"
        },
        {
          "yaw": -0.30203309222057406,
          "pitch": 0.10738793339035269,
          "rotation": 0,
          "target": "16-top-of-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gallery-1-nw",
      "name": "Gallery 1 NW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4826466052084113,
          "pitch": 0.15058024328521213,
          "rotation": 0,
          "target": "5-hallway-main"
        },
        {
          "yaw": -0.5651806227469915,
          "pitch": -0.013549137372724118,
          "rotation": 0,
          "target": "7-gallery-1-e"
        },
        {
          "yaw": 0.9900933440557491,
          "pitch": 0.13729645847572414,
          "rotation": 0,
          "target": "8-gallery-1-sw"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gallery-1-e",
      "name": "Gallery 1 E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.842686632711402,
          "pitch": 0.15523205817728503,
          "rotation": 0,
          "target": "6-gallery-1-nw"
        },
        {
          "yaw": 2.836947510395838,
          "pitch": 0.1593149745310889,
          "rotation": 0,
          "target": "8-gallery-1-sw"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gallery-1-sw",
      "name": "Gallery 1 SW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.14221951652930898,
        "pitch": -0.09881397816595161,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": -1.5113400344428172,
          "pitch": 0.16657732426869387,
          "rotation": 0,
          "target": "6-gallery-1-nw"
        },
        {
          "yaw": 0.10267024488821974,
          "pitch": 0.007123086138690837,
          "rotation": 0,
          "target": "7-gallery-1-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hallway-west",
      "name": "Hallway West",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0394169279144734,
        "pitch": 0.14341373258162093,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 1.7001240907168027,
          "pitch": 0.11494126855578202,
          "rotation": 0,
          "target": "5-hallway-main"
        },
        {
          "yaw": -1.556105762330919,
          "pitch": 0.10708450885598886,
          "rotation": 0,
          "target": "10-hallway-west-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hallway-west-2",
      "name": "Hallway West 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.672156561673395,
        "pitch": -0.014308048810701024,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 1.5032821475691351,
          "pitch": 0.21278205154314378,
          "rotation": 0,
          "target": "9-hallway-west"
        },
        {
          "yaw": -1.672156561673395,
          "pitch": -0.014308048810701024,
          "rotation": 0,
          "target": "11-gallery-2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-gallery-2-entrance",
      "name": "Gallery 2 Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5153937630693513,
        "pitch": -0.008371730687111167,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 2.32587184919585,
          "pitch": 0.18451994419518059,
          "rotation": 0,
          "target": "10-hallway-west-2"
        },
        {
          "yaw": -2.2406439692844202,
          "pitch": 0.09725864152648533,
          "rotation": 0,
          "target": "12-gallery-2--se"
        },
        {
          "yaw": -1.1959008505384254,
          "pitch": 0.2947077104731406,
          "rotation": 0,
          "target": "13-gallery-2-ne"
        },
        {
          "yaw": -1.483158712117147,
          "pitch": -0.022441448663892416,
          "rotation": 0,
          "target": "14-gallery-2-sw"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-gallery-2--se",
      "name": "Gallery 2  SE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.270204161955199,
          "pitch": 0.04660762211885583,
          "rotation": 0,
          "target": "11-gallery-2-entrance"
        },
        {
          "yaw": 2.2166860049791115,
          "pitch": 0.12018022954882923,
          "rotation": 0,
          "target": "14-gallery-2-sw"
        },
        {
          "yaw": 3.1092158366967286,
          "pitch": 0.08924870586549716,
          "rotation": 0,
          "target": "15-gallery-2-nw"
        },
        {
          "yaw": -2.702254923833138,
          "pitch": 0.072540708035703,
          "rotation": 0,
          "target": "13-gallery-2-ne"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-gallery-2-ne",
      "name": "Gallery 2 NE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0343907343813026,
          "pitch": 0.20703659072574077,
          "rotation": 0,
          "target": "11-gallery-2-entrance"
        },
        {
          "yaw": 2.894273902902606,
          "pitch": 0.04535153749105447,
          "rotation": 0,
          "target": "14-gallery-2-sw"
        },
        {
          "yaw": 1.8863897308702668,
          "pitch": 0.042401355591959344,
          "rotation": 0,
          "target": "12-gallery-2--se"
        },
        {
          "yaw": -2.1373243322251145,
          "pitch": 0.06503466575051142,
          "rotation": 0,
          "target": "15-gallery-2-nw"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-gallery-2-sw",
      "name": "Gallery 2 SW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5449226617482843,
        "pitch": 0.09193828356189115,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 0.5420290162920551,
          "pitch": 0.03532448608974903,
          "rotation": 0,
          "target": "11-gallery-2-entrance"
        },
        {
          "yaw": 1.5792047404395042,
          "pitch": 0.052832896007643626,
          "rotation": 0,
          "target": "12-gallery-2--se"
        },
        {
          "yaw": -0.5526298384626198,
          "pitch": 0.021904426158679158,
          "rotation": 0,
          "target": "15-gallery-2-nw"
        },
        {
          "yaw": 0.06333319704129892,
          "pitch": 0.06693086712713736,
          "rotation": 0,
          "target": "13-gallery-2-ne"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-gallery-2-nw",
      "name": "Gallery 2 NW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.26824714486715706,
        "pitch": 0.024102679987601405,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": -3.109624254989029,
          "pitch": 0.07948948647551646,
          "rotation": 0,
          "target": "12-gallery-2--se"
        },
        {
          "yaw": -2.278989213244966,
          "pitch": 0.10542280530579617,
          "rotation": 0,
          "target": "14-gallery-2-sw"
        },
        {
          "yaw": 2.0910864739809663,
          "pitch": 0.26198686886533906,
          "rotation": 0,
          "target": "13-gallery-2-ne"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-top-of-staircase",
      "name": "Top of Staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9819723943307697,
        "pitch": -0.018987252640112473,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 1.3265411318222124,
          "pitch": 0.1931636010926603,
          "rotation": 0,
          "target": "5-hallway-main"
        },
        {
          "yaw": -3.0861778792048753,
          "pitch": 0.39458817038942584,
          "rotation": 0,
          "target": "17-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8528892957281542,
        "pitch": -0.03226921646668579,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": -1.8771270348525668,
          "pitch": -0.16414459134539783,
          "rotation": 0,
          "target": "16-top-of-staircase"
        },
        {
          "yaw": 1.3783551295203527,
          "pitch": 0.4252713837159572,
          "rotation": 0,
          "target": "18-bottom-of-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bottom-of-staircase",
      "name": "Bottom of Staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.133487796284977,
        "pitch": -0.03516126888585802,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 2.9839065922904418,
          "pitch": 0.05088764060105433,
          "rotation": 0,
          "target": "17-stairs"
        },
        {
          "yaw": -1.7070414861005663,
          "pitch": 0.32205754993882607,
          "rotation": 0,
          "target": "19-1st-floor-hallway-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-1st-floor-hallway-end",
      "name": "1st floor Hallway End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7629159097732874,
          "pitch": 0.03544033097846366,
          "rotation": 0,
          "target": "18-bottom-of-staircase"
        },
        {
          "yaw": -0.16861366404894618,
          "pitch": 0.010767214380436485,
          "rotation": 0,
          "target": "20-1st-floor-hallway-mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-1st-floor-hallway-mid",
      "name": "1st floor Hallway Mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8355931538992927,
        "pitch": 0.11766086947521437,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": -1.7456971793773306,
          "pitch": 0.027323114449618657,
          "rotation": 0,
          "target": "19-1st-floor-hallway-end"
        },
        {
          "yaw": 1.4192308108572718,
          "pitch": 0.2026585961439764,
          "rotation": 0,
          "target": "21-1st-floor-hallway-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-1st-floor-hallway-entrance",
      "name": "1st Floor Hallway Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2567649888864807,
        "pitch": 0.07853883323757849,
        "fov": 1.3930559863352652
      },
      "linkHotspots": [
        {
          "yaw": 1.54525727580927,
          "pitch": 0.12289731235537005,
          "rotation": 0,
          "target": "20-1st-floor-hallway-mid"
        },
        {
          "yaw": -1.5921741431257743,
          "pitch": 0.15502426454175833,
          "rotation": 0,
          "target": "0-gallery-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Liberties Were Taken",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
