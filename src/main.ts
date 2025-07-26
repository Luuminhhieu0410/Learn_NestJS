import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressMidlleware } from './middleware/express.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // hoặc có thể dùng middleware như Express
  app.use('/cats', ExpressMidlleware);
  
  // global pipe ( chỉ cần khai báo 1 lần , áp dụng cho tất cả các route handler.)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // bỏ qua các property không khai báo trong DTO
      forbidNonWhitelisted: true, // ném lỗi nếu có property không hợp lệ
      transform: true, // tự động chuyển đổi kiểu dữ liệu
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
