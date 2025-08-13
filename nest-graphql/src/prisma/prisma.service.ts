import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: [
        {
          emit: 'stdout',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    });
  }
  // lifecycle hook ( chạy ngay sau khi khởi tạo module và inject tất cả các dependency của class đó xong)
  onModuleInit() {
    this.$connect();
  }
  // Gọi khi module bị destroy (ví dụ app shutdown thì đóng kết nối DB).
  onModuleDestroy() {
    this.$disconnect();
  }
}
