import { useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const socket = useMemo(() => new WebSocket('ws://localhost:3002'), []);
  socket.addEventListener('open', () => setMessage('connected'));
  socket.addEventListener('message', (e) => {
    setMessage(e.data);
  });

  const handleClick = () => {
    socket.send(
      JSON.stringify({
        event: 'update',
      }),
    );
    console.log('客户端向服务器发消息', { update: 'update' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>点击-测试socket-io</button>
        <div>{message}</div>
      </header>
    </div>
  );
}

export default App;
