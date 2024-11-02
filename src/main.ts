import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //i will only use this for this demo :)
  app.enableCors();
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
