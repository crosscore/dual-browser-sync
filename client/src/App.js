/* dual-browser-sync/client/src/App.js */
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    return () => {
      socket.off('connect');
    };
  }, []);

  function handleMouseMove(event) {
    const position = { x: event.clientX, y: event.clientY };
    socket.emit('mouseMove', position);
  }  
  
  return (
    <div className="App" onMouseMove={handleMouseMove}>
      {/* UIのコンポーネント */}
    </div>
  );
}

export default App;
