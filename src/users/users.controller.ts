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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Exception_Custom } from 'src/exception/Exception';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
