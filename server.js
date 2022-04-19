const http = require('http')

const server = http.createServer((req, res) => {
  const { headers, method, url } = req
  console.log(headers, method, url)
  res.end()
})

server.on('connection', (socket) => {
  console.log(`client connected from ${socket.remoteAddress}`)
})
const PORT = 9000
server.listen(PORT, () => console.log(`Server running on: ${PORT}`))
