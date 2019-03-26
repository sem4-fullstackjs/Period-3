const gameArea = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        // longtitude
        // latitude
        [
          12.562007904052734,
          55.801956359149244
        ],
        [
          12.552909851074219,
          55.794429945434764
        ],
        [
          12.567157745361326,
          55.78680555637222
        ],
        [
          12.575740814208984,
          55.79298239140481
        ],
        [
          12.584667205810545,
          55.79423694133928
        ],
        [
          12.576770782470703,
          55.800316110902244
        ],
        [
          12.575912475585936,
          55.80581549423072
        ],
        [
          12.567501068115234,
          55.80523664835478
        ],
        [
          12.562007904052734,
          55.801956359149244
        ]
      ]
    ]
  }
}

const players = [
  {
    "type": "Feature",
    "properties": {name: "Kurt"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.563896179199219,
        55.793947433402685
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "Hanne"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.551708221435547,
        55.800509084870626
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "Michael"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.577972412109373,
        55.787963787549664
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "Morten"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.551193237304688,
        55.78738467626539
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "Ditte"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.570762634277344,
        55.7932719065149
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "Mikkeline"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.566642761230469,
        55.80147394036698
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {name: "Klaus"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.570247650146484,
        55.79635993378508
      ]
    }
  }
]

module.exports = {
  gameArea,
  players
}