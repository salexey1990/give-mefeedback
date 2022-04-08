import { Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { IRequestExtended } from '../interfaces';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  constructor(
) {
}

  use(request: IRequestExtended, response: Response, next: NextFunction): void {
    const startAt = process.hrtime();
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    request.reqId = uuidv4();

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      const diff = process.hrtime(startAt);
      const responseTime = diff[0] * 1e3 + diff[1] * 1e-6;
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${responseTime}ms ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}