import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressMidlleware } from './middleware/express.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // hoặc có thể dùng middleware như Express
  app.use('/cats', ExpressMidlleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
