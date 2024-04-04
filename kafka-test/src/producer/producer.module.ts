import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCER', // service의 Inject를 위해 지정하는 이름
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero', // 카프카 클라이언트명을 지정하는 개념, 로깅을 위한 용도
            brokers: ['localhost:9093', 'localhost:9094', 'localhost:9095'],
          },
          consumer: {
            groupId: 'hero-consumer', // 컨슈머는 그룹화가 가능하여 그룹명 지정
          },
        },
      },
    ]),
  ],
  controllers: [ProducerController],
})
export class ProducerModule {}
