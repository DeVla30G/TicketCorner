import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConcertsModule } from './concerts/concerts.module';
import { BookingsModule } from './bookings/bookings.module';
import { DbtestModule } from './dbtest/dbtest.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/back-tc'),
    AuthModule,
    ConcertsModule,
    BookingsModule,
    DbtestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}