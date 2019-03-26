const express = require('express')
const http = require('http')
const app = express()
const gju = require('geojson-utils')

let gameArea = require('./gameData').gameArea.geometry
let players = require('./gameData').players.geometry

app.get('/', (req, res) => res.send('GeoDemo API'))
app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
  // const lon = req.params.lon
  // const lat = req.params.lat
  const { lon, lat } = req.params
  const point = { 'type': 'Point', 'coordinates': [lon, lat] }
  let status = gju.pointInPolygon(point, gameArea)

  let result = { status }
  result.msg = status ? 'Point was inside the tested polygon' : 'Point was NOT inside the tested polygon'

  return res.json(result)
})

function setDataStore(ga, pl) {
  gameArea = ga
  players = pl
}

function geoServer(port, area, player) {
  return new Promise((resolve, reject) => {
    if (area && player) {
      setDataStore(area, player)
    }
    let server = http.createServer(app)
    server.listen(port, () => {
      resolve(server)
    })
  })
}

module.exports = geoServer


