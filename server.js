const http = require('http')
const app = require('./app.js')

const Port  = 5000 || process.env.PORT
const server = http.createServer(app)

server.listen(Port)