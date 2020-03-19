import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/product.modules';

@Module({
  imports: [ProductsModule,MongooseModule.forRoot('mongodb+srv://harsh:vvBYZt3qFg4R9kQk@cluster0-o4dbr.mongodb.net/nestjs-demo?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
