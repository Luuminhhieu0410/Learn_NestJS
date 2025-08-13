import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserInput {
  @IsString()
  id?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
