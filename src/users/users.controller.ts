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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserSchema, UpdateUserType } from './dto/update-user.dto';
import { Exception_Custom } from 'src/exception/Exception';
import { ZodValidationPipe } from 'src/validation/zod.validation.pipe';

// @UsePipes(new ValidationPipe({ transform: true }))
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
    @Body(new ZodValidationPipe(UpdateUserSchema)) updateUserDto: UpdateUserType, // dùng Pipe này khi định nghĩa DTO là Zod
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Get()
  findAll() {
    // Option 1 : thủ công bằng HttpException
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     message123: 'This is a custom message',
    //     test: 'test',
    //   },
    //   HttpStatus.FORBIDDEN,
    //   {
    //     cause: new Error('Error message'),
    //   },
    // );

    //Option 2 : các exception có sẵn
    throw new ForbiddenException({ message123: 'Forbidden' },{cause: new Error('message string'), description:"description"});

    //Option 3 : tạo class riêng
    // throw new Exception_Custom('Forbidden', 'không thể truy cập', 403);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
