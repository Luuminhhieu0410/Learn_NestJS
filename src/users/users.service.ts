import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserSchema, UpdateUserType } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { users } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UsersService {
  constructor(readonly prisma: PrismaService) {}
  async findOne(email: string, password: string): Promise<users | null> {
    return await this.prisma.users.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
  }
  async findUser(email: string, password: string): Promise<users | null> {
    return await this.prisma.users.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
  }
  async create(createUserDto: CreateUserDto) {
    const id = uuidv4();
    return await this.prisma.users.create({
      data: {
        id: id,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  update(id: number, updateUserDto: UpdateUserType) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
