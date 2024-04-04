import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9093', 'localhost:9094', 'localhost:9095'],
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
