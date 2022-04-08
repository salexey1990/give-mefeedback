import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions, TcpOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.AUTH_PORT, 10) || 3001
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port,
      },
    } as TcpOptions,
  );
  app.listen();
}
bootstrap();
