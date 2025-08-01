import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  BadRequestException,
  ForbiddenException,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserSchema, UpdateUserType } from './dto/update-user.dto';
import { Exception_Custom } from 'src/exception/Exception';
import { ZodValidationPipe } from 'src/validation/zod.validation.pipe';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) { // dùng Pipe này khi với định nghĩa DTO là class-validation
    return createUserDto;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateUserSchema))
    updateUserDto: UpdateUserType, // dùng Pipe này khi định nghĩa DTO là Zod
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
