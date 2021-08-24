import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { WsStartGateway } from './socket/ws.gateway';

@Module({
  imports: [HomeModule], // modules
  controllers: [AppController],
  providers: [AppService, WsStartGateway],
})
export class AppModule {}
