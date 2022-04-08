import { NestFactory } from '@nestjs/core';
import { HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AllExceptionsFilter } from './common/exceptions-filter/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));


  const configService = app.get(ConfigService);
  const port = configService.get('port');

  await app.listen(port);
}
bootstrap();
