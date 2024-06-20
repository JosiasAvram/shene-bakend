import { Injectable } from '@nestjs/common';
import { User } from './login.entity';
import { v4 } from 'uuid';
import { UpdateUsersDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  private users: User[] = [
    {
      id: v4(),
      loginUser: 'josias',
      password: '35531716',
      rol: 'admin',
    },
    {
      id: v4(),
      loginUser: 'jose',
      password: '123',
      rol: 'cliente',
    },
    {
      id: v4(),
      loginUser: 'charles',
      password: '321',
      rol: 'vendedor',
    },
  ];

  getAllUsers() {
    return this.users;
  }

  createUsers(loginUser: string, password: string, rol: string) {
    const user = {
      id: v4(),
      loginUser,
      password,
      rol,
    };
    this.users.push(user);

    return user;
  }
  deleteUsers(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  updateUsers(id: string, updatedFields: UpdateUsersDto): User {
    const user = this.getUserById(id);
    const newUser = Object.assign(user, updatedFields);
    this.users = this.users.map((user) => (user.id === id ? newUser : user));
    return newUser;
  }
}
