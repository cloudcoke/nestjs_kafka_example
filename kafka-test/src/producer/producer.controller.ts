import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('producer')
export class ProducerController {
  constructor(
    @Inject('PRODUCER') private readonly kafkaProducer: ClientKafka,
  ) {}

  @Get()
  sendMessage() {
    const message = { value: 'hello kafka' };
    this.kafkaProducer.emit('cloud', message);
  }
}
