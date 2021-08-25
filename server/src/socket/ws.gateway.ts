import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import * as WebSocket from 'ws';

@WebSocketGateway(3002)
export class WsStartGateway {
  @SubscribeMessage('hello')
  hello(@MessageBody() data: any): any {
    return JSON.stringify({
      event: 'hello',
      data: data,
    });
  }

  @SubscribeMessage('update')
  update(@MessageBody() data: any, @ConnectedSocket() client: WebSocket): any {
    console.log(`data`, data); // message from client
    console.log(
      `process.env.isUpdate是node中定义的全局变量`,
      process.env.isUpdate,
    );

    setInterval(() => {
      client.send(JSON.stringify({ data: `${+new Date()}` }));
    }, 2000);

    return { event: 'hello2', data: data };
  }
}
