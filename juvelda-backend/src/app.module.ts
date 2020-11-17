import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientsModule } from "./clients/clients.module";

@Module({
  imports: [
    ClientsModule,
    MongooseModule.forRoot('mongodb+srv://andrius2500:Tucson123@cluster0.hkd7g.gcp.mongodb.net/juvelda')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
