import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('coke')
  readMessage(@Payload() message) {
    console.log(message);

    return message;
  }
}
