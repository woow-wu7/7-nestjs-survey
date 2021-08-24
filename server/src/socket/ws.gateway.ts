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
    return {
      event: 'hello',
      data: data,
      msg: 'rustfisher.com',
    };
  }

  @SubscribeMessage('update')
  hello2(@MessageBody() data: any, @ConnectedSocket() client: WebSocket): any {
    console.log('收到消息 client:', client);
    setInterval(() => {
      client.send(JSON.stringify({ event: 'tmp', data: `${+new Date()}` }));
    }, 2000);
    return { event: 'hello2', data: data };
  }
}
