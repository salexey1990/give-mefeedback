import { Controller, Inject, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
    private logger = new Logger(AuthController.name);
    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy,
    ) {
    }

    @Get()
    test() {
        this.logger.log('some log info')
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // throw new Error('sdfsdfasdf')
        const pattern = { cmd: 'get_hello' };
        const payload = [1, 2, 3];
        return this.client.send<number>(pattern, payload);
    }
}
