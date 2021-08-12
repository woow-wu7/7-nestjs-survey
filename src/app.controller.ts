import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

// 1
// url = /test/name

// 2
// 安装 @types/express
// 为了在 express 中使用 Typescript （如 request: Request 上面的参数示例所示），请安装 @types/express

@Controller('test') // 参数是路由路径前缀
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() request: Request): string {
    console.log(request);
    return this.appService.getHello();
  }

  @Post('hello')
  setHello(@Req() request: Request, @Body() requestBody: any): string {
    // request body
    console.log(request);
    console.log(`requestBody`, requestBody);
    return 'hello set success';
    // return this.appService.getHello();
  }
}
