import { Injectable } from '@nestjs/common'; // allows the service to be injected

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
