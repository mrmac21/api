import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  first: string;

  @IsNotEmpty()
  last: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
