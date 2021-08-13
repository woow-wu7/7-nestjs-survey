import { Injectable } from '@nestjs/common';

@Injectable() // 注释，表明是一个provider
export class HomeService {
  getHomeService(): string {
    return 'homeController => homeService';
  }
}
