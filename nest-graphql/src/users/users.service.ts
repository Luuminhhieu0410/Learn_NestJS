import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../prisma/prisma.service';
import { users } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserInput: CreateUserInput): Promise<users | null> {
    const id = uuidv4();
    return await this.prismaService.users.create({
      data: {
        id: id,
        email: createUserInput.email,
        password: createUserInput.password,
      },
    });
  }
  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string): Promise<users | null> {
    return await this.prismaService.users.findFirst({ where: { id: id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
