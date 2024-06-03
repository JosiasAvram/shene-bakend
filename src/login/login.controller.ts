import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LoginService } from '../login/login.service';
import { CreateUserDto, UpdateUsersDto } from '../login/dto/login.dto';

@Controller('users')
export class LoginController {
  constructor(private loginServices: LoginService) {}

  @Get()
  getAllUsers() {
    return this.loginServices.getAllUsers();
  }

  @Post()
  createUsers(@Body() newUser: CreateUserDto) {
    return this.loginServices.createUsers(newUser.loginUser, newUser.password);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.loginServices.deleteUsers(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updatedFields: UpdateUsersDto) {
    return this.loginServices.updateUsers(id, updatedFields);
  }
}
