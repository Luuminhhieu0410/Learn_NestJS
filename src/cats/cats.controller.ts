import {
  Body,
  Controller,
  Delete,
  Get,
  HostParam,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
@Controller({ path: '/cats' }) // localhost:3000/cats
export class CatsController {
  // GET localhost:3000/cats

  @Get('/express')
  get(@Req() request: Request, @Res() response: Response): Response {
    console.log(request);
    return response.status(200).json('Write like Express framework');
  }
  // Redirect
  @Get('/docs')
  @Redirect('https://www.example.com/', 302) //GET localhost:3000/cats/docs redirect to https://www.example.com/
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      //GET localhost:3000/cats/docs?version=5 redirect to https://docs.nestjs.com/v5/
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  @Get('/all') // Lưu ý : route này phải để lên trên route @Get(':id') nếu để dưới không request sẽ vào route @Get(':id') trước và respone sẽ là `This action returns a all cat`
  async findAll(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  //Param
  @Get(':id') // /cats/123
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

//Sub-domain routing (in development need edit host file windows)
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
