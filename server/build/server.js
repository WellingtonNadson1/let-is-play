import express from 'express';
const PORT = 3000;
const hostname = 'localhost';
const server = express();
server.get('/', (request, response) => {
    response.json([
        {
            id: 1,
            name: 'Ester Durans'
        },
        {
            id: 2,
            name: 'Wellington Durans'
        }
    ]);
});
server.listen(PORT, hostname, console.log(`Server running at http://${hostname}${PORT}`));
