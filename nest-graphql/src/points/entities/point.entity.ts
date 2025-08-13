import { IsNumber } from 'class-validator';

export class Point {
  @IsNumber()
  point: number;
}
