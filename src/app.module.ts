import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "./products/products.module";

@Module({
  imports: [ProductsModule],
  controllers: [AppController], //how to handle incoming requests and return responses.
  providers: [AppService], //extra services/classes which you can inject into controllers or other providers for extra functionality
})
export class AppModule {} //bundles up controllers and providers + import modules into modules (thats how we link the app up together)
