import { HttpException } from '@nestjs/common';

export class Exception_Custom extends HttpException {
  constructor(status: string, message: string, code: number, cause?: Error) {
    super({ status: status, message: message }, code, { cause: cause });
  }
}
