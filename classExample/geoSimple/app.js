const express = require('express')
const http = require('http')
const app = express()
const gju = require('geojson-utils')

let gameAreas = require('./gameData').gameArea.geometry
let players = require('./gameData').players.geometry

app.get('/', (req, res) => res.send('GeoDemo API'))

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


