/* dual-browser-sync/server/index.js */
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');  // CORS用のモジュールをインポート

const app = express();
app.use(cors());  // CORSミドルウェアを使用

const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

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
