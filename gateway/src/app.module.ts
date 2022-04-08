import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import configuration from './common/config/config';
import { LoggerMiddleware } from './common/middlewares/logging.middleware'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../development.env',
      load: [ configuration ],
      isGlobal: true,
    }),
    AuthModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
