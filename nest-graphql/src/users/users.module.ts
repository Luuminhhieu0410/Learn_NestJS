import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PointsModule } from 'src/points/points.module';

@Module({
  imports: [PrismaModule, PointsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
