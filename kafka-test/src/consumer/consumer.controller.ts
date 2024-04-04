import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller('consumer')
export class ConsumerController {
  @MessagePattern('cloud')
  readMessage(@Payload() message, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response = originalMessage.value;

    console.log('originalMessage.value : ', originalMessage.value);

    console.log('message : ', message);

    console.log('Topic : ', context.getTopic());

    console.log('Args');
    console.log(context.getArgs());

    console.log('Partition : ', context.getPartition());

    return response;
  }
}
