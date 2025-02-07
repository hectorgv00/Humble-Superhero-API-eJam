import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// We import  config to be able to use the .env file
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
