import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private logger = new Logger('Exception');

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const { reqId } = ctx.getRequest();

    this.logger.error(`error in req #${reqId}`, exception.stack)
    super.catch(exception, host);
  }
}