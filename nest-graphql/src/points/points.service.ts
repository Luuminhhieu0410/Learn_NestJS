import { Injectable } from '@nestjs/common';
import { CreatePointInput } from './dto/create-point.input';
import { UpdatePointInput } from './dto/update-point.input';
import { PrismaService } from '../prisma/prisma.service';
import { point } from '@prisma/client';

@Injectable()
export class PointsService {
  constructor(private prismaService: PrismaService) {}
  create(createPointInput: CreatePointInput) {
    return 'This action adds a new point';
  }

  findAll() {
    return `This action returns all points`;
  }

  async findOne(userId: string): Promise<any | null> {
    console.log('-----1----' + userId);
    return await this.prismaService.point.findUnique({
      where: {
        user_id: userId,
      },
    });
  }

  update(id: number, updatePointInput: UpdatePointInput) {
    return `This action updates a #${id} point`;
  }

  remove(id: number) {
    return `This action removes a #${id} point`;
  }
}
