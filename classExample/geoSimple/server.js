const server = require('./app')

server(3000).then(() => console.log('Server Started'))