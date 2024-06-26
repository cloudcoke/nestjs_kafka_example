import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProducerModule } from './producer/producer.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [ProducerModule, ConsumerModule],
  controllers: [AppController],
})
export class AppModule {}
