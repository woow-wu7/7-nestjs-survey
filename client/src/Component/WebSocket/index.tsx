import { useState, useMemo, useEffect } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

function WebSocketComponent() {
  const [message, setMessage] = useState('');
  const socket = useMemo(() => new WebSocket('ws://localhost:3002'), []);

  useEffect(() => {
    testArrayBuffer();
    testWebSocket();
  }, []);

  // testArrayBuffer
  // 测试 ArrayBuffer TypeArray视图 DataView视图
  const testArrayBuffer = () => {
    /*
    1.
    - 测试 ArrayBuffer TypeArray视图 DataView视图
    - ArrayBuffer代表 ( 原始 ) 的二进制数据
    - TypeArray代表 ( 确定类型 ) 的二进制数据
    - DataView代表 ( 不确定类型 ) 的二进制数据
    2.
    buffer是缓存的意思
 */
    const buf = new ArrayBuffer(32); // 生成一段 ( 32字节 ) 的内存
    const dataView = new DataView(buf); // 以不带符号的8位整数格式，读取第一个元素
    const resDataView = dataView.getUint8(0);
    console.log(`resDataView`, resDataView);
  };

  const testWebSocket = () => {
    // onopen
    socket.onopen = () => {
      console.log('WebSocket链接成功');
      socket.send(
        JSON.stringify({
          event: 'hello', // 链接 WsStartGateway 中的 hello
          data: 'messageToServer => WebSocket链接成功',
        }),
      );
    };
    // onmessage
    socket.onmessage = (e) => {
      console.log(`messageToClient => `, e.data);
      console.log(`typeof e.data`, typeof e.data);
      console.log(`e.data`, e.data);
      setMessage(
        () =>
          typeof JSON.parse(e.data) === 'object' && JSON.parse(e.data)?.data,
      );
    };
  };

  const handleClick = () => {
    socket.send(
      JSON.stringify({
        event: 'update',
      }),
    );
    console.log('客户端向服务器发消息', { update: 'update' });
  };

  console.log(`message`, message);

  return (
    <div>
      <button onClick={handleClick}>点击-测试socket-io</button>
      <div>{message}</div>
    </div>
  );
}

export default WebSocketComponent;
