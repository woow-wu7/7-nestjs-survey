import { Controller, Get, Req, Post, Body, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { HttpCode, Header } from '@nestjs/common';

// 1
// url = /test/name

// 2
// 安装 @types/express
// 为了在 express 中使用 Typescript （如 request: Request 上面的参数示例所示），请安装 @types/express

/// 3
// test
// => request body query response HttpCode Header Redirect
// => 动态路由
@Controller('test') // 参数是路由路径前缀
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  // @Redirect('http://localhost:2200', 301)
  getHello(
    @Req() request: Request,
    @Query() query: any,
    @Param() params: any,
  ): string {
    console.log(`query-----`, query);
    console.log(`params.id----`, params.id);
    return this.appService.getHello();
  }

  @Post('hello')
  setHello(@Req() request: Request, @Body() body: any): string {
    console.log(`body----`, body);
    return 'hello set success';
  }
}
