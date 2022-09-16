import express from 'express'
const PORT = 3000
const hostname = 'localhost'
const server = express();

server.get('/', (request, response) => {
  response.send('Hello Wellington nadson')
})

server.listen(PORT, hostname, console.log(`Server running at http://${hostname}${PORT}`))