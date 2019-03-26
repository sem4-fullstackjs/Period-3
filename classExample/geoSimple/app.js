const express = require('express')
const http = require('http')
const app = express()
const gju = require('geojson-utils')

let gameArea = require('./gameData').gameArea.geometry
let players = require('./gameData').players.geometry

app.get('/', (req, res) => res.send('GeoDemo API'))

// Args: longitude and latitude
app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
	const { lon, lat } = req.params
	const point = { type: 'Point', coordinates: [lon, lat] }
	let status = gju.pointInPolygon(point, gameArea)

	let result = { status }
	result.msg = status
		? 'Point was inside the tested polygon'
		: 'Point was NOT inside the tested polygon'

	return res.json(result)
})

// Args: longitude, latitude and the radius (in meters) to search for other players
app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', (req, res) => {
	const { lon, lat, rad } = req.params
	const center = { type: 'Point', coordinates: [lon, lat] }
	const result = players.filter(p => gju.geometryWithinRadius(p.geometry, center, rad))

	return res.json(result)
})

// Args: longitude, latitude and userName to find distance to
app.get('/geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {
	const { lon, lat, username } = req.params
	const point = { type: 'Point', coordinates: [lon, lat] }
	const player = players.find(p => p.properties.name == username)
	const result = {}

	if (player) {
		const playerPos = { type: 'Point', coordinates: player.geometry.coordinates }
		result.distance = gju.pointDistance(point, playerPos)
		result.to = username
	} else {
		result.msg = 'Player not Found'
	}

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
