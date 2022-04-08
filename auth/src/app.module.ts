import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../development.env',
      load: [configuration],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
