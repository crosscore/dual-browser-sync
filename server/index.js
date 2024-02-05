/* dual-browser-sync/server/index.js */
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 4000;

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('mouseMove', (position) => {
        console.log(`Mouse position: X=${position.x}, Y=${position.y}`);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
