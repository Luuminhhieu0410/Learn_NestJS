import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
// custome pipe này dành cho khi khai báo DTO bằng zod
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema<any>) {}

  transform(value: unknown) {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      throw new BadRequestException(result.error.format());
    }
    return result.data;
  }
}
