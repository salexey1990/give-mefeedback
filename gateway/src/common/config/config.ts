import { Transport, MicroserviceOptions, TcpOptions } from '@nestjs/microservices';

export default () => ({
    port: parseInt(process.env.GATEWAY_PORT, 10) || 3000,

    authModule: {
        transport: Transport.TCP,
        options: {
          host: process.env.AUTH_SRV_HOST,
          port: process.env.AUTH_SRV_PORT,
        },
      }
});