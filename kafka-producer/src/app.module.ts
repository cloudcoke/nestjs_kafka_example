import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9093', 'localhost:9094', 'localhost:9095'],
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
