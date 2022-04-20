const http = require('http')

const todos = [
  { id: 1, text: 'Wash car' },
  { id: 2, text: 'Sell car' },
  { id: 3, text: 'Book Holiday' },
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('X-Powered-By', 'Node.js')
  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  )
})

// server.on('connection', (socket) => {
//   console.log(`client connected from ${socket.remoteAddress}`)
// })
const PORT = 9000
server.listen(PORT, () => console.log(`Server running on: ${PORT}`))
