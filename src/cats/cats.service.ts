import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

type Cat = {
  name: string;
  age: number;
  breed: string;
};

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
