import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateUserDto {
  @IsEmail({},{ message: 'Email không hợp lệ' })
  @IsNotEmpty({message: 'Email không được để trống'})
  @Length(1, 255, { message: 'Số lượng kí tự từ 0 -> 255' })
  email: string;

  @IsString({ message: 'Password phải là kí tự' })
  @Length(1, 255, { message: 'Số lượng kí tự từ 0 -> 255' })
  password: string;
}
