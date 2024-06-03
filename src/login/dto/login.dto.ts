import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  loginUser: string;

  @IsString()
  password: string;
}

export class UpdateUsersDto {
  @IsString()
  @IsOptional()
  loginUser?: string;

  @IsString()
  @IsOptional()
  password?: string;
}
