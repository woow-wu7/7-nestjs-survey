import { Controller, Get, Req } from '@nestjs/common';
import { RxjsService } from './rxjs.service';
import { Request } from 'express';

@Controller('rxjs-test') // 参数是路由路径前缀
export class RxjsController {
  constructor(private readonly rxjsService: RxjsService) {}

  @Get('hello')
  setHello(@Req() request: Request): string {
    return this.rxjsService.getHello();
  }
}
