import express from 'express'
const PORT = 3000
const hostname = 'localhost'
const server = express();

// Query Params
server.get('/games', (request, response) => {
  response.json([])
})

server.post('/ads', (request, response) => {
  response.status(201).json([])
})

// Route Params
server.get('/games/:id/ads', (request, response) => {
  response.json([])
})

server.get('/ads/:id/discord', (request, response) => {
  response.json([])
})

server.listen(PORT, hostname, () => console.log(`Server running at http://${hostname}${PORT}`))