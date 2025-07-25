import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule, CatsModule],
  exports: [CommonModule, CatsModule],
})
export class CoreModule {}
