import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntervalService } from './interval.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IntervalService],
})
export class AppModule {}
