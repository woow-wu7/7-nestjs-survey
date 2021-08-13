import { Controller, Get } from '@nestjs/common';
import { HttpCode, Header } from '@nestjs/common';
import { HomeService } from './home.service';

/// 1
// test
// => module
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('index')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  getHello(): string {
    // return 'home-controller-success';
    return this.homeService.getHomeService();
  }
}
