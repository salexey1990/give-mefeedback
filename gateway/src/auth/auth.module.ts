import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';

import { AuthController } from './auth.controller';

@Module({
    providers: [
        {
            provide: 'AUTH_SERVICE',
            useFactory: (configService: ConfigService) => {
              const authSvcOptions = configService.get('authModule');
              return ClientProxyFactory.create(authSvcOptions);
            },
            inject: [ConfigService],
          }
    ],
  controllers: [AuthController]
})
export class AuthModule {}
