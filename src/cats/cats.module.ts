import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

// gom controller và service vào module để import
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // export để cho các module khác import module này để dùng (chỉ dùng được service);
})
export class CatsModule {}
