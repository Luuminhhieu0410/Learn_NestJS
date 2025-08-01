import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    readonly authService: AuthService,
    readonly userService: UsersService,
  ) {}
  // @UsePipes(new ValidationPipe())
  @Post('login')
  signIn(@Body() signInDto: CreateUserDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() body: CreateUserDto) {
    if (body == null) return null;
    return await this.userService.create(body);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}
