import { NestFactory } from '@nestjs/core';
import { WsAdapter } from './socket/ws.adapter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new WsAdapter(app)); // 使用我们的适配器
  await app.listen(3001);
}
bootstrap();
