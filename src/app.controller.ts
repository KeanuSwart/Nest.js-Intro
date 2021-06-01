import { Controller, Get, Header } from '@nestjs/common'; // You can set your own headers by importing Header
import { AppService } from './app.service';

// this controller by default will send the responses to the root of your domain e.g: @Controller() has no filter but
// @Controller('product') does and will send their responses to root/product
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // dependency injection

  // get request
  @Get()
  getHello(): string {
    return this.appService.getHello(); // returns a text/html Content-Type since it is just a string.
  }

  // @Get()
  // @Header('Content_Type', 'text/html') // This is an example of explicitly setting your own header. Overrides default header
  // getHello(): {name: string}{
  //   return {name: "Keanu"}; // returns an application/json Content-Type
  // }
}
