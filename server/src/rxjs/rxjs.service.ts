import { Injectable } from '@nestjs/common';

@Injectable()
export class RxjsService {
  getHello(): string {
    console.log(`res`);
    return 'rxjs-test-hello';
  }
}
