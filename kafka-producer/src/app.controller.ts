import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('PRODUCER') private readonly kafkaProducer: ClientKafka,
  ) {}

  @Get()
  sendMessage() {
    const message = { value: 'hello cloudcoke' };
    this.kafkaProducer.emit('coke', message);
  }
}
